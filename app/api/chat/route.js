/**
 * ═══════════════════════════════════════════════════════════════
 * /api/chat — THE AI AGENT ENDPOINT
 * ═══════════════════════════════════════════════════════════════
 * 
 * ARCHITECTURE:
 * Browser → POST /api/chat → Build prompt → Call Groq → Stream response
 * 
 * WHY STREAMING?
 * Without streaming: User waits 3-5 seconds staring at a loader, 
 *   then gets a wall of text. Bad UX.
 * With streaming: Tokens appear word-by-word as the LLM generates them.
 *   Feels instant and interactive (like ChatGPT).
 * 
 * HOW STREAMING WORKS:
 * 1. We tell Groq to "stream: true" — it sends Server-Sent Events (SSE)
 * 2. Each SSE chunk contains 1-3 tokens (words/word-parts)
 * 3. We read these chunks and pipe them to the browser via ReadableStream
 * 4. The browser reads the stream and appends each chunk to the UI
 * 
 * WHY GROQ?
 * - Free tier with generous limits
 * - Runs Llama 3.3 70B — extremely fast (500+ tokens/sec on Groq's LPU)
 * - OpenAI-compatible API — easy to swap to OpenAI/Anthropic later
 */

import { FARHAN_SYSTEM_PROMPT } from "@/lib/farhan-context";

export async function POST(request) {
  try {
    // ─── STEP 1: Extract data from request ───
    const body = await request.json();
    const { messages } = body;

    /**
     * WHY we receive the full message history (not just the latest message):
     * 
     * LLMs are STATELESS — they don't remember previous conversations.
     * Every API call is independent. To maintain context, we must send
     * the ENTIRE conversation history each time.
     * 
     * Example:
     * Turn 1: User asks "What are Farhan's skills?" → LLM responds
     * Turn 2: User asks "Tell me more about the backend ones"
     *   - If we only send "Tell me more about the backend ones", the LLM
     *     has NO IDEA what "the backend ones" refers to.
     *   - By sending the full history, it understands the context.
     * 
     * This is called "conversation memory" — the simplest form.
     * More advanced forms: summarization memory, vector memory, etc.
     */

    // ─── STEP 2: Validate input ───
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    // ─── STEP 3: Check API key exists ───
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("GROQ_API_KEY is not set");
      return Response.json(
        { error: "Chat service is not configured." },
        { status: 500 }
      );
    }

    // ─── STEP 4: Build the message array for the LLM ───
    /**
     * THE MESSAGES ARRAY STRUCTURE:
     * 
     * Every LLM API uses this format:
     * [
     *   { role: "system",    content: "You are..." },    ← WHO the agent is
     *   { role: "user",      content: "Hello!" },        ← Human message
     *   { role: "assistant", content: "Hi there!" },     ← LLM's previous response
     *   { role: "user",      content: "New question" },  ← Latest human message
     * ]
     * 
     * The "system" message is ALWAYS first and sets the agent's behavior.
     * Then we alternate user/assistant messages for conversation history.
     * 
     * GUARDRAIL: We limit history to the last 20 messages to:
     * 1. Stay within the LLM's context window (token limit)
     * 2. Reduce cost (more tokens = more $$$)
     * 3. Keep responses fast (less input = faster processing)
     */
    const trimmedMessages = messages.slice(-20);

    const llmMessages = [
      {
        role: "system",
        content: FARHAN_SYSTEM_PROMPT,
      },
      ...trimmedMessages.map((msg) => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content,
      })),
    ];

    // ─── STEP 5: Call Groq API with streaming ───
    /**
     * WHY these specific parameters:
     * 
     * - model: "llama-3.3-70b-versatile"
     *     → Groq's best model. 70B parameters = very smart.
     *     → "versatile" = good at both chat and reasoning.
     *     → Groq runs it at 500+ tokens/sec (insanely fast).
     * 
     * - temperature: 0.7
     *     → Controls randomness. Range: 0.0 to 2.0
     *     → 0.0 = deterministic (same input → same output every time)
     *     → 1.0 = very creative/random
     *     → 0.7 = balanced: informative but not robotic
     *     → For a portfolio bot, we want helpful + slightly warm
     * 
     * - max_tokens: 1024
     *     → Maximum response length. ~750 words.
     *     → Prevents the bot from writing essays.
     *     → For a chatbot, short answers are better.
     * 
     * - stream: true
     *     → Instead of waiting for the full response, Groq sends
     *       it piece by piece as Server-Sent Events (SSE).
     */
    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: llmMessages,
          temperature: 0.7,
          max_tokens: 1024,
          stream: true,
        }),
      }
    );

    // ─── STEP 6: Handle Groq API errors ───
    if (!groqResponse.ok) {
      const errorData = await groqResponse.text();
      console.error("Groq API error:", groqResponse.status, errorData);
      return Response.json(
        { error: "Failed to get response from AI." },
        { status: 502 }
      );
    }

    // ─── STEP 7: Create a ReadableStream to pipe Groq's SSE to the browser ───
    /**
     * HOW STREAMING WORKS (the hardest part to understand):
     * 
     * Groq sends data in this format (Server-Sent Events / SSE):
     *   data: {"choices":[{"delta":{"content":"Hello"}}]}
     *   data: {"choices":[{"delta":{"content":" there"}}]}
     *   data: {"choices":[{"delta":{"content":"!"}}]}
     *   data: [DONE]
     * 
     * Each line is a "chunk". Each chunk has a small piece of the response.
     * 
     * We need to:
     * 1. Read the SSE stream from Groq
     * 2. Parse each chunk to extract the text content
     * 3. Forward that text to the browser as a new ReadableStream
     * 
     * The browser then reads OUR stream and updates the UI character by character.
     * 
     * Think of it like a relay race:
     * Groq → (SSE chunks) → Our API route → (ReadableStream) → Browser
     */
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        /**
         * controller.enqueue() — pushes data into the stream (browser receives it)
         * controller.close() — signals "I'm done, no more data"
         * 
         * We're inside an async generator pattern here.
         */
        const reader = groqResponse.body.getReader();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            /**
             * WHY A BUFFER?
             * SSE chunks can be split across multiple reads.
             * Example: One read might give us:
             *   "data: {\"choices\":[{\"del"
             * And the next read gives:
             *   "ta\":{\"content\":\"Hi\"}}]}\n\n"
             * 
             * By buffering, we ensure we only process COMPLETE lines.
             */
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || ""; // Keep incomplete line in buffer

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed || !trimmed.startsWith("data: ")) continue;

              const data = trimmed.slice(6); // Remove "data: " prefix

              // "[DONE]" signals end of stream
              if (data === "[DONE]") {
                controller.close();
                return;
              }

              try {
                const parsed = JSON.parse(data);
                /**
                 * THE DELTA PATTERN:
                 * In streaming, responses come as "deltas" (differences).
                 * - First chunk: delta.content = "Farhan"
                 * - Second chunk: delta.content = " is"
                 * - Third chunk: delta.content = " a"
                 * 
                 * We extract each delta and push it to the browser.
                 * The browser concatenates them: "Farhan" + " is" + " a" = "Farhan is a"
                 */
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              } catch {
                // Malformed JSON chunk — skip it
                // This can happen with SSE; it's normal
              }
            }
          }
        } catch (error) {
          console.error("Stream processing error:", error);
          controller.error(error);
        } finally {
          controller.close();
        }
      },
    });

    // ─── STEP 8: Return the stream to the browser ───
    /**
     * We return a standard Response with our ReadableStream as the body.
     * 
     * Headers explained:
     * - Content-Type: text/plain — we're sending raw text, not JSON
     * - Cache-Control: no-cache — don't cache AI responses (they should be fresh)
     * - Transfer-Encoding: chunked — tells the browser to expect streaming data
     */
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return Response.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}