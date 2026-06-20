"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Loader2, Bot, User, Sparkles } from "lucide-react";
import { SUGGESTED_QUESTIONS } from "@/lib/farhan-context";

const V = {
  cardBg: "rgba(17,17,17,0.95)",
  border: "rgba(255,255,255,0.1)",
  borderStrong: "rgba(255,255,255,0.16)",
  tagBg: "rgba(255,255,255,0.05)",
  userBubble: "rgba(255,255,255,0.95)",
  botBubble: "rgba(255,255,255,0.04)",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (messageText) => {
      const text = messageText || input;
      if (!text.trim() || isLoading) return;

      const userMessage = { role: "user", content: text.trim() };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      setIsLoading(true);
      setHasInteracted(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: updatedMessages }),
        });

        if (!response.ok) throw new Error("Failed to get response");

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        const assistantMessage = { role: "assistant", content: "" };
        setMessages((prev) => [...prev, assistantMessage]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            const last = updated[updated.length - 1];
            updated[updated.length - 1] = { ...last, content: last.content + chunk };
            return updated;
          });
        }
      } catch (error) {
        console.error("Chat error:", error);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Sorry, I'm having trouble connecting right now. Please try again or reach out to Farhan directly at farhankhan080304@gmail.com",
          },
        ]);
      } finally {
        setIsLoading(false);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    },
    [input, isLoading, messages]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleSuggestion = (question) => {
    sendMessage(question);
  };

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[9999] group"
          aria-label="Open chat with Farhan's AI assistant"
        >
          <div className="relative">
            {/* Subtle white glow */}
            <div
              className="absolute inset-0 rounded-full blur-xl transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.08)", transform: "scale(1.2)" }}
            />
            {/* Button */}
            <div
              className="relative flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm shadow-xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-90"
              style={{
                background: "rgb(var(--foreground))",
                color: "rgb(var(--background))",
                boxShadow: "0 4px 24px rgba(255,255,255,0.1)",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Ask about Farhan</span>
            </div>
          </div>
        </button>
      )}

      {/* ── CHAT PANEL ── */}
      {isOpen && (
        <div
          className="fixed bottom-4 right-4 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-2rem)] flex flex-col rounded-2xl overflow-hidden"
          style={{
            background: V.cardBg,
            border: `1px solid ${V.borderStrong}`,
            boxShadow: "0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* ── HEADER ── */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{
              borderBottom: `1px solid ${V.border}`,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Bot avatar  white on dark */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.1)", border: `1px solid ${V.border}` }}
                >
                  <Bot className="w-5 h-5 text-foreground" />
                </div>
                {/* Online dot */}
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                  style={{ background: "#22c55e", border: "2px solid #111" }}
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">AskFarhan</h3>
                <p className="text-xs text-muted">AI Assistant · Online</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg transition text-muted hover:text-foreground"
              style={{ background: "transparent" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* ── MESSAGES AREA ── */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
            {/* Welcome state */}
            {messages.length === 0 && (
              <div className="text-center py-6 space-y-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto"
                  style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${V.border}` }}
                >
                  <Sparkles className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base">Hey there!</h4>
                  <p className="text-sm text-muted mt-1 max-w-[260px] mx-auto">
                    I&apos;m Farhan&apos;s AI assistant. Ask me anything about his skills, projects, experience, or availability!
                  </p>
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {/* Bot avatar */}
                {msg.role === "assistant" && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ background: "rgba(255,255,255,0.08)", border: `1px solid ${V.border}` }}
                  >
                    <Bot className="w-4 h-4 text-foreground" />
                  </div>
                )}

                {/* Bubble */}
                <div
                  className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                  style={
                    msg.role === "user"
                      ? {
                          background: "rgb(var(--foreground))",
                          color: "rgb(var(--background))",
                          borderRadius: "16px 16px 4px 16px",
                        }
                      : {
                          background: V.botBubble,
                          border: `1px solid ${V.border}`,
                          color: "rgb(var(--foreground))",
                          borderRadius: "4px 16px 16px 16px",
                        }
                  }
                >
                  <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                </div>

                {/* User avatar */}
                {msg.role === "user" && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${V.border}` }}
                  >
                    <User className="w-4 h-4 text-muted" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex gap-2.5 justify-start">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.08)", border: `1px solid ${V.border}` }}
                >
                  <Bot className="w-4 h-4 text-foreground" />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl"
                  style={{ background: V.botBubble, border: `1px solid ${V.border}`, borderRadius: "4px 16px 16px 16px" }}
                >
                  <div className="flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── SUGGESTED QUESTIONS ── */}
          {!hasInteracted && messages.length === 0 && (
            <div className="px-4 pb-2">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestion(q)}
                    className="shrink-0 px-3 py-1.5 text-xs rounded-full whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      border: `1px solid ${V.border}`,
                      color: "rgb(var(--muted))",
                      background: V.tagBg,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = V.borderStrong; e.currentTarget.style.color = "rgb(var(--foreground))"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = V.border; e.currentTarget.style.color = "rgb(var(--muted))"; }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── INPUT BAR ── */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3"
            style={{ borderTop: `1px solid ${V.border}`, background: "rgba(255,255,255,0.02)" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Farhan..."
              disabled={isLoading}
              className="flex-1 px-3 py-2 text-sm rounded-xl text-foreground disabled:opacity-50 transition focus:outline-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${V.border}`,
                color: "rgb(var(--foreground))",
              }}
              onFocus={e => { e.currentTarget.style.borderColor = V.borderStrong; }}
              onBlur={e => { e.currentTarget.style.borderColor = V.border; }}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 rounded-xl shrink-0 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80"
              style={{ background: "rgb(var(--foreground))", color: "rgb(var(--background))" }}
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