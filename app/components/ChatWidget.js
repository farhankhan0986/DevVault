"use client";

/**
 * ═══════════════════════════════════════════════════════════════
 * CHATWIDGET — THE AI AGENT'S USER INTERFACE
 * ═══════════════════════════════════════════════════════════════
 * 
 * ARCHITECTURE DECISIONS:
 * 
 * 1. WHY a floating widget (not a full page)?
 *    → Non-intrusive. Recruiters can browse the portfolio AND chat simultaneously.
 *    → Common pattern: Intercom, Drift, Crisp all use floating widgets.
 * 
 * 2. WHY store messages in React state (not a database)?
 *    → These are ephemeral conversations. No need to persist.
 *    → If you wanted chat history (e.g., for analytics), you'd save to DB.
 * 
 * 3. WHY stream responses instead of waiting?
 *    → UX: A 3-second blank wait feels broken. Streaming feels instant.
 *    → This is why ChatGPT, Gemini, Claude all stream their responses.
 * 
 * 4. WHY suggested questions?
 *    → Reduces "blank page syndrome" — users don't know what to ask.
 *    → Guides recruiter to the MOST VALUABLE info about you.
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Loader2, Bot, User, Sparkles } from "lucide-react";
import { SUGGESTED_QUESTIONS } from "@/lib/farhan-context";

export default function ChatWidget() {
  // ─── STATE MANAGEMENT ───
  /**
   * isOpen: Controls widget visibility (bubble vs full panel)
   * messages: The conversation history array. Each message has:
   *   - role: "user" | "assistant"
   *   - content: The text content
   * input: Current text in the input field (controlled component)
   * isLoading: Whether we're waiting for AI response (disables input)
   * hasInteracted: Tracks if user has sent at least one message
   *   → Used to hide suggested questions after first interaction
   */
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  /**
   * REFS — Direct DOM references
   * 
   * messagesEndRef: Points to an invisible div at the bottom of the chat.
   *   → We call scrollIntoView() on this to auto-scroll to latest message.
   *   → WHY a ref instead of state? Because scrolling is a DOM side-effect,
   *     not a data change. Refs are for "imperative" actions.
   * 
   * inputRef: Points to the text input field.
   *   → We call .focus() on this to auto-focus after sending a message.
   */
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // ─── AUTO-SCROLL ───
  /**
   * Every time messages change (new message added OR existing message updated
   * during streaming), scroll to the bottom.
   * 
   * "smooth" gives a nice animation instead of a jarring jump.
   */
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // ─── FOCUS INPUT WHEN CHAT OPENS ───
  useEffect(() => {
    if (isOpen) {
      // Small delay to wait for animation to finish
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // ─── SEND MESSAGE (THE CORE AGENT INTERACTION) ───
  /**
   * This function handles the entire message lifecycle:
   * 1. Add user's message to the conversation
   * 2. Send conversation history to our API
   * 3. Read the streaming response
   * 4. Update the assistant's message in real-time as tokens arrive
   * 
   * WHY useCallback?
   * → Prevents recreating this function on every render.
   * → Important because it's passed to child elements (form onSubmit).
   */
  const sendMessage = useCallback(
    async (messageText) => {
      const text = messageText || input;
      if (!text.trim() || isLoading) return;

      // ── Step A: Add user message to state ──
      const userMessage = { role: "user", content: text.trim() };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      setIsLoading(true);
      setHasInteracted(true);

      try {
        // ── Step B: Call our API route ──
        /**
         * We send the FULL message history to the API.
         * The API adds the system prompt and forwards to Groq.
         * 
         * WHY NOT call Groq directly from the browser?
         * 1. SECURITY: API key would be exposed in browser network tab
         * 2. CORS: Groq's API likely blocks browser-origin requests
         * 3. CONTROL: Our API can add rate limiting, logging, etc.
         * 
         * This is called the "Backend-for-Frontend" (BFF) pattern.
         */
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: updatedMessages }),
        });

        if (!response.ok) {
          throw new Error("Failed to get response");
        }

        // ── Step C: Read the streaming response ──
        /**
         * STREAMING ON THE FRONTEND:
         * 
         * The API returns a ReadableStream. We need to:
         * 1. Get a reader from the stream
         * 2. Read chunks in a loop
         * 3. Decode each chunk (it's a Uint8Array → string)
         * 4. Append to the assistant's message in state
         * 
         * The key insight: We DON'T create a new message for each chunk.
         * Instead, we UPDATE the same assistant message repeatedly.
         * This makes the text "grow" smoothly in the UI.
         * 
         * State update pattern:
         * - Chunk 1: assistantMessage.content = "Farhan"
         * - Chunk 2: assistantMessage.content = "Farhan is"
         * - Chunk 3: assistantMessage.content = "Farhan is a"
         * - etc.
         */
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        // Add an empty assistant message that we'll fill progressively
        const assistantMessage = { role: "assistant", content: "" };
        setMessages((prev) => [...prev, assistantMessage]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });

          /**
           * WHY this specific setState pattern?
           * 
           * setMessages(prev => ...) — we use the FUNCTIONAL form of setState.
           * This ensures we always work with the LATEST state.
           * 
           * If we used setMessages([...messages, ...]) directly, we'd capture
           * a stale closure of `messages` from when sendMessage was called.
           * 
           * prev.slice(0, -1) — all messages EXCEPT the last one
           * { ...prev[prev.length - 1] } — copy the last message (assistant's)
           * content: prev[prev.length - 1].content + chunk — APPEND the new chunk
           * 
           * This is the "accumulator" pattern for streaming.
           */
          setMessages((prev) => {
            const updated = [...prev];
            const last = updated[updated.length - 1];
            updated[updated.length - 1] = {
              ...last,
              content: last.content + chunk,
            };
            return updated;
          });
        }
      } catch (error) {
        console.error("Chat error:", error);
        // Add an error message so the user knows something went wrong
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Sorry, I'm having trouble connecting right now. Please try again or reach out to Farhan directly at farhankhan080304@gmail.com",
          },
        ]);
      } finally {
        setIsLoading(false);
        // Re-focus the input so user can type immediately
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    },
    [input, isLoading, messages]
  );

  // ─── HANDLE FORM SUBMIT ───
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  // ─── HANDLE SUGGESTED QUESTION CLICK ───
  const handleSuggestion = (question) => {
    sendMessage(question);
  };

  // ─── RENDER ───
  return (
    <>
      {/* ══════════════════════════════════════════ */}
      {/* FLOATING CHAT BUBBLE                      */}
      {/* ══════════════════════════════════════════ */}
      {/**
       * WHY a fixed-position bubble?
       * → Always visible regardless of scroll position
       * → Doesn't interfere with page layout
       * → Industry standard for chat widgets (Intercom, Drift, etc.)
       * 
       * z-[9999]: Ensures it's above EVERYTHING else on the page
       * bottom-6 right-6: Standard position (bottom-right corner)
       */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[9999] group"
          aria-label="Open chat with Farhan's AI assistant"
        >
          <div className="relative">
            {/* Glow effect behind the button */}
            <div className="absolute inset-0 bg-indigo-500/40 rounded-full blur-xl group-hover:bg-indigo-500/60 transition-all duration-300" />

            {/* The actual button */}
            <div className="relative flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">Ask about Farhan</span>
            </div>
          </div>
        </button>
      )}

      {/* ══════════════════════════════════════════ */}
      {/* CHAT PANEL                                */}
      {/* ══════════════════════════════════════════ */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-2rem)] flex flex-col rounded-2xl border border-border bg-background shadow-2xl overflow-hidden">
          {/* ── HEADER ── */}
          {/**
           * Shows the bot identity and a close button.
           * The green dot (●) is a visual indicator that the "agent is online"
           * — a common pattern in customer support widgets.
           */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-indigo-600/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                {/* Online indicator dot */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  AskFarhan
                </h3>
                <p className="text-xs text-muted">AI Assistant • Online</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 transition text-muted hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ── MESSAGE AREA ── */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
            {/* Welcome message (shown when no messages yet) */}
            {/**
             * WHY a welcome message?
             * → Sets expectations: user knows this is an AI, not Farhan himself
             * → Provides guidance on what to ask
             * → Makes the chat feel "alive" even before interaction
             */}
            {messages.length === 0 && (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center mx-auto">
                  <Sparkles className="w-7 h-7 text-indigo-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base">
                    Hey there! 👋
                  </h4>
                  <p className="text-sm text-muted mt-1 max-w-[260px] mx-auto">
                    I&apos;m Farhan&apos;s AI assistant. Ask me anything about his skills,
                    projects, experience, or availability!
                  </p>
                </div>
              </div>
            )}

            {/* Rendered messages */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* Bot avatar (only for assistant messages) */}
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}

                {/* Message bubble */}
                {/**
                 * WHY different colors for user vs assistant?
                 * → Instant visual distinction. User messages = indigo, Bot = gray.
                 * → Follows iMessage/WhatsApp pattern (your messages on right, theirs on left)
                 * 
                 * whitespace-pre-wrap: Preserves line breaks from the LLM response.
                 * Without this, bullet-point lists would collapse into one line.
                 */}
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-md"
                      : "bg-white/5 border border-border text-foreground rounded-bl-md"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">
                    {msg.content}
                  </p>
                </div>

                {/* User avatar (only for user messages) */}
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4 text-indigo-400" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator (shown while waiting for AI response) */}
            {/**
             * The 3-dot "typing" animation.
             * Each dot has a staggered animation delay (0s, 0.2s, 0.4s)
             * to create the classic "bouncing dots" effect.
             */}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white/5 border border-border">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "200ms" }} />
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "400ms" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Invisible scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* ── SUGGESTED QUESTIONS ── */}
          {/**
           * WHY show suggestions?
           * → "Conversation starters" reduce friction dramatically
           * → Recruiters are busy — give them one-click access to key info
           * → Hides after first interaction (hasInteracted flag)
           * 
           * WHY horizontal scroll?
           * → On mobile, these chips won't fit in one row
           * → overflow-x-auto + flex-nowrap = horizontal scroll on small screens
           */}
          {!hasInteracted && messages.length === 0 && (
            <div className="px-4 pb-2">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestion(q)}
                    className="shrink-0 px-3 py-1.5 text-xs rounded-full border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── INPUT BAR ── */}
          {/**
           * Form-based input with submit on Enter key.
           * 
           * WHY a <form> instead of just a button?
           * → Pressing Enter naturally submits forms — no extra keydown handler needed
           * → Accessibility: screen readers understand forms
           * → Mobile keyboards show "Submit" button for forms
           */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 border-t border-border bg-background"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Farhan..."
              disabled={isLoading}
              className="flex-1 px-3 py-2 text-sm rounded-xl border border-border bg-white/5 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 transition"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition shrink-0"
              aria-label="Send message"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
}