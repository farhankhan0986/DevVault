"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Loader2, User, ChevronRight, Zap } from "lucide-react";
import { SUGGESTED_QUESTIONS } from "@/lib/farhan-context";

const BG       = "rgba(11,11,13,0.98)";
const BORDER   = "rgba(255,255,255,0.08)";
const BORDER_HI = "rgba(255,255,255,0.18)";
const MUTED    = "rgba(255,255,255,0.36)";
const BOT_BG   = "rgba(255,255,255,0.05)";

export default function ChatWidget() {
  const [isOpen, setIsOpen]               = useState(false);
  const [messages, setMessages]           = useState([]);
  const [input, setInput]                 = useState("");
  const [isLoading, setIsLoading]         = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef       = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = useCallback(
    async (messageText) => {
      const text = messageText || input;
      if (!text.trim() || isLoading) return;

      const userMessage     = { role: "user", content: text.trim() };
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

        const reader    = response.body.getReader();
        const decoder   = new TextDecoder();
        const assistantMessage = { role: "assistant", content: "" };
        setMessages((prev) => [...prev, assistantMessage]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            const last    = updated[updated.length - 1];
            updated[updated.length - 1] = { ...last, content: last.content + chunk };
            return updated;
          });
        }
      } catch (error) {
        console.error("Chat error:", error);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again or reach out to Farhan directly at farhankhan080304@gmail.com" },
        ]);
      } finally {
        setIsLoading(false);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    },
    [input, isLoading, messages]
  );

  const handleSubmit = (e) => { e.preventDefault(); sendMessage(); };

  /* Parse **bold** and newlines in AI responses */
  const renderContent = (text) =>
    text.split("\n").map((line, li, arr) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <span key={li}>
          {parts.map((part, pi) =>
            part.startsWith("**") && part.endsWith("**")
              ? <strong key={pi} style={{ fontWeight: 700 }}>{part.slice(2, -2)}</strong>
              : part
          )}
          {li < arr.length - 1 && <br />}
        </span>
      );
    });

  const isStreaming  = isLoading && messages.length > 0 && messages[messages.length - 1].role === "assistant";
  const isTypingDots = isLoading && (messages.length === 0 || messages[messages.length - 1].role === "user");
  const canSend      = input.trim().length > 0 && !isLoading;
  const featuredQ    = SUGGESTED_QUESTIONS.slice(0, 4);
  const extraQ       = SUGGESTED_QUESTIONS.slice(4);

  return (
    <>
      {/* ── FLOATING TRIGGER ── */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[9999] group"
          aria-label="Open chat with Farhan's AI assistant"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <div className="relative">
            {/* Glow bloom */}
            <div
              className="absolute inset-0 rounded-full blur-2xl transition-all duration-300 group-hover:scale-125"
              style={{ background: "rgba(255,255,255,0.07)" }}
            />
            {/* Pill */}
            <div
              className="relative flex items-center gap-3 rounded-full transition-all duration-300 group-hover:-translate-y-1"
              style={{
                background: "rgb(var(--foreground))",
                color: "rgb(var(--background))",
                padding: "10px 18px 10px 12px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              {/* FK avatar */}
              <div
                style={{
                  width: 28, height: 28,
                  borderRadius: "50%",
                  background: "rgb(var(--background))",
                  color: "rgb(var(--foreground))",
                  fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.03em",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >FK</div>

              {/* Label */}
              <div className="hidden sm:flex flex-col items-start" style={{ lineHeight: 1 }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "-0.01em" }}>Ask about Farhan</span>
                <span style={{ fontSize: "0.63rem", fontWeight: 400, opacity: 0.55, marginTop: 3 }}>AI-powered · Always on</span>
              </div>

              {/* Live dot */}
              <div className="hidden sm:block" style={{ position: "relative", width: 8, height: 8, flexShrink: 0, marginLeft: 2 }}>
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#4ade80", animation: "cwLivePing 1.8s ease-out infinite", opacity: 0.6 }} />
                <div style={{ position: "absolute", inset: 1, borderRadius: "50%", background: "#22c55e" }} />
              </div>
            </div>
          </div>
        </button>
      )}

      {/* ── CHAT PANEL ── */}
      {isOpen && (
        <div
          className="fixed bottom-4 right-4 z-[9999] flex flex-col"
          style={{
            width: 388,
            maxWidth: "calc(100vw - 1.5rem)",
            height: 596,
            maxHeight: "calc(100vh - 1.5rem)",
            background: BG,
            border: `1px solid ${BORDER_HI}`,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.08)",
            backdropFilter: "blur(28px)",
          }}
        >
          {/* ── HEADER ── */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 16px",
            borderBottom: `1px solid ${BORDER}`,
            background: "rgba(255,255,255,0.02)",
            flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
              {/* Avatar + live dot */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,0.96)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.7rem", fontWeight: 800, color: "#0b0b0d", letterSpacing: "0.04em",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}>FK</div>
                <span style={{ position: "absolute", bottom: 1, right: 1, width: 11, height: 11, borderRadius: "50%", background: "#22c55e", border: "2px solid #0b0b0d", display: "block" }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#4ade80", animation: "cwLivePing 2s ease-out infinite", opacity: 0.7 }} />
                </span>
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.15 }}>AskFarhan</div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}>
                  <Zap style={{ width: 9, height: 9, color: MUTED, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.61rem", color: MUTED }}>Powered by Groq · Always on</span>
                </div>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                width: 30, height: 30, borderRadius: 8,
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${BORDER}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: MUTED, transition: "all 0.15s", flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = MUTED; }}
              aria-label="Close chat"
            >
              <X style={{ width: 14, height: 14 }} />
            </button>
          </div>

          {/* ── MESSAGES ── */}
          <div style={{ flex: 1, overflowY: "auto", padding: "18px 16px 8px", display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Welcome / empty state */}
            {messages.length === 0 && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 8 }}>
                {/* Large FK tile */}
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: "rgba(255,255,255,0.07)",
                  border: `1px solid ${BORDER_HI}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", fontWeight: 800, color: "#fff", letterSpacing: "0.02em",
                  marginBottom: 16,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                }}>FK</div>

                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: 7, letterSpacing: "-0.02em" }}>
                  Hey there!
                </div>
                <div style={{ fontSize: "0.8rem", color: MUTED, lineHeight: 1.65, textAlign: "center", maxWidth: 270, marginBottom: 22 }}>
                  I&apos;m Farhan&apos;s AI assistant. Ask me anything about his skills, projects, or experience.
                </div>

                {/* 2×2 suggestion card grid */}
                {!hasInteracted && (
                  <>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, width: "100%", marginBottom: 8 }}>
                      {featuredQ.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => sendMessage(q)}
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: `1px solid ${BORDER}`,
                            borderRadius: 11, padding: "11px 12px",
                            cursor: "pointer", textAlign: "left",
                            display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 8,
                            transition: "all 0.15s", minHeight: 70, fontFamily: "inherit",
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = BORDER_HI; }}
                          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = BORDER; }}
                        >
                          <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.82)", fontWeight: 500, lineHeight: 1.45 }}>{q}</span>
                          <ChevronRight style={{ width: 12, height: 12, color: MUTED }} />
                        </button>
                      ))}
                    </div>

                    {/* Extra pills */}
                    {extraQ.length > 0 && (
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
                        {extraQ.map((q, i) => (
                          <button
                            key={i}
                            onClick={() => sendMessage(q)}
                            style={{
                              border: `1px solid ${BORDER}`, borderRadius: 9999,
                              padding: "4px 11px", fontSize: "0.68rem", color: MUTED,
                              background: "transparent", cursor: "pointer",
                              transition: "all 0.15s", whiteSpace: "nowrap", fontFamily: "inherit",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = BORDER_HI; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = MUTED; }}
                          >{q}</button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Message bubbles */}
            {messages.map((msg, i) => {
              const isUser = msg.role === "user";
              const isLast = i === messages.length - 1;
              return (
                <div
                  key={i}
                  style={{ display: "flex", gap: 8, justifyContent: isUser ? "flex-end" : "flex-start", alignItems: "flex-end" }}
                >
                  {/* Bot avatar */}
                  {!isUser && (
                    <div style={{
                      width: 26, height: 26, borderRadius: "50%",
                      background: "rgba(255,255,255,0.94)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.52rem", fontWeight: 800, color: "#0b0b0d",
                      flexShrink: 0, marginBottom: 1, letterSpacing: "0.04em",
                    }}>FK</div>
                  )}

                  <div style={{ maxWidth: "78%", display: "flex", flexDirection: "column", alignItems: isUser ? "flex-end" : "flex-start" }}>
                    <div style={{
                      padding: "10px 14px",
                      borderRadius: isUser ? "14px 14px 3px 14px" : "3px 14px 14px 14px",
                      fontSize: "0.84rem", lineHeight: 1.68,
                      background: isUser ? "rgba(255,255,255,0.96)" : BOT_BG,
                      color: isUser ? "#0b0b0d" : "#dde3ec",
                      border: isUser ? "none" : `1px solid ${BORDER}`,
                      wordBreak: "break-word",
                      boxShadow: isUser ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
                    }}>
                      {renderContent(msg.content)}
                      {/* Blinking cursor while streaming */}
                      {!isUser && isLast && isStreaming && (
                        <span style={{
                          display: "inline-block", width: 2, height: "0.82em",
                          background: "rgba(255,255,255,0.45)", marginLeft: 2,
                          verticalAlign: "middle", animation: "cwBlink 0.75s step-end infinite",
                        }} />
                      )}
                    </div>
                  </div>

                  {/* User avatar */}
                  {isUser && (
                    <div style={{
                      width: 26, height: 26, borderRadius: "50%",
                      background: "rgba(255,255,255,0.07)",
                      border: `1px solid ${BORDER}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginBottom: 1,
                    }}>
                      <User style={{ width: 13, height: 13, color: MUTED }} />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing dots */}
            {isTypingDots && (
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                <div style={{
                  width: 26, height: 26, borderRadius: "50%",
                  background: "rgba(255,255,255,0.94)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.52rem", fontWeight: 800, color: "#0b0b0d",
                  flexShrink: 0, letterSpacing: "0.04em",
                }}>FK</div>
                <div style={{
                  padding: "11px 15px",
                  borderRadius: "3px 14px 14px 14px",
                  background: BOT_BG, border: `1px solid ${BORDER}`,
                  display: "flex", gap: 5, alignItems: "center",
                }}>
                  {[0, 1, 2].map(j => (
                    <div key={j} style={{
                      width: 6, height: 6, borderRadius: "50%", background: MUTED,
                      animation: "cwTyping 1.2s ease-in-out infinite",
                      animationDelay: `${j * 0.16}s`,
                    }} />
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── INPUT BAR ── */}
          <div style={{ flexShrink: 0, borderTop: `1px solid ${BORDER}`, padding: "11px 14px 14px", background: "rgba(255,255,255,0.015)" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about Farhan…"
                disabled={isLoading}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10, padding: "9px 13px",
                  fontSize: "0.84rem", color: "#dde3ec",
                  outline: "none", fontFamily: "inherit",
                  transition: "border-color 0.15s",
                  opacity: isLoading ? 0.5 : 1,
                }}
                onFocus={e => { e.currentTarget.style.borderColor = BORDER_HI; }}
                onBlur={e => { e.currentTarget.style.borderColor = BORDER; }}
              />
              <button
                type="submit"
                disabled={!canSend}
                style={{
                  width: 36, height: 36, borderRadius: 10, border: "none", flexShrink: 0,
                  background: canSend ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.07)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: canSend ? "pointer" : "not-allowed",
                  transition: "all 0.2s",
                  boxShadow: canSend ? "0 2px 8px rgba(255,255,255,0.15)" : "none",
                }}
                aria-label="Send"
              >
                {isLoading
                  ? <Loader2 style={{ width: 14, height: 14, color: MUTED, animation: "cwSpin 1s linear infinite" }} />
                  : <Send style={{ width: 14, height: 14, color: canSend ? "#0b0b0d" : MUTED }} />
                }
              </button>
            </form>
            <div style={{ fontSize: "0.59rem", color: "rgba(255,255,255,0.16)", textAlign: "center", marginTop: 9, letterSpacing: "0.02em" }}>
              Powered by Groq · LLaMA 3.3 70B
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes cwLivePing  { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(2.8); opacity: 0; } }
        @keyframes cwSpin      { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes cwTyping    { 0%,100% { opacity: 0.3; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-3px); } }
        @keyframes cwBlink     { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </>
  );
}
