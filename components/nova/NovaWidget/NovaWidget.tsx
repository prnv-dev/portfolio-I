"use client";

import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./NovaWidget.module.css";

type Message = { id: string; role: "user" | "assistant"; content: string };

const WELCOME: Message = { id: "welcome", role: "assistant", content: "Hi 👋 I’m Nova. Ask me anything about Pranav." };

const SUGGESTIONS = ["What is Pranav building?", "Tell me about DeepScan AI", "How can I contact him?"];

// Splits a reply into fenced code blocks, inline code and plain text.
function renderContent(content: string) {
  return content.split(/(```[\s\S]*?```|`[^`]*`)/g).map((part, index) => {
    if (part.startsWith("```")) {
      return (
        <pre key={index} className={clsx(styles.codeBlock, "thin-scrollbar")}>
          <code>{part.slice(3, -3).replace(/^\w+\n/, "")}</code>
        </pre>
      );
    }
    if (part.startsWith("`")) {
      return (
        <code key={index} className={styles.inlineCode}>
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function NovaWidget() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const end = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    end.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing]);

  useEffect(() => {
    if (!open) return;
    field.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const sendMessage = async (text?: string) => {
    const value = (text ?? input).trim();
    if (!value || typing) return;
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "user", content: value }]);
    setInput("");
    setTyping(true);
    try {
      const res = await fetch("/api/nova", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [{ role: "user", content: value }] }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", content: data.reply ?? "⚠️ No response from Nova." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", content: "⚠️ Nova had an issue replying. Please try again." },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const showSuggestions = messages.length === 1 && !typing;

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close Nova" : "Open Nova assistant"}
        aria-expanded={open}
        aria-controls="nova-panel"
        className={clsx(styles.launcher, open && styles.launcherOpen)}
        whileTap={reduce ? undefined : { scale: 0.96 }}
      >
        <span className={styles.launcherIcon} aria-hidden="true">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.15 }}
              className="inline-flex"
            >
              {open ? <X size={16} /> : <Sparkles size={16} />}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className={styles.launcherLabel}>{open ? "Close" : "Ask Nova"}</span>
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.section
            id="nova-panel"
            role="dialog"
            aria-label="Nova assistant"
            className={styles.panel}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className={styles.header}>
              <span className={styles.avatar} aria-hidden="true">
                <Sparkles size={15} />
              </span>
              <div className="min-w-0">
                <p className={styles.name}>Nova</p>
                <p className={styles.status}>
                  <span className={styles.statusDot} aria-hidden="true" />
                  {typing ? "thinking…" : "online"}
                </p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close Nova" className={styles.close}>
                <X size={16} />
              </button>
            </header>

            <div className={clsx(styles.messages, "thin-scrollbar")} aria-live="polite">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={clsx(styles.message, message.role === "user" ? styles.user : styles.assistant)}
                >
                  {renderContent(message.content)}
                </div>
              ))}
              {typing ? (
                <div className={clsx(styles.message, styles.assistant, styles.typing)} aria-label="Nova is typing">
                  <span />
                  <span />
                  <span />
                </div>
              ) : null}
              {showSuggestions ? (
                <div className={styles.suggestions}>
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      className={styles.suggestion}
                      onClick={() => sendMessage(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              ) : null}
              <div ref={end} />
            </div>

            <div className={styles.composer}>
              <div className={styles.inputWrap}>
                <textarea
                  ref={field}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      sendMessage();
                    }
                  }}
                  rows={1}
                  placeholder="Message Nova…"
                  aria-label="Message Nova"
                  className={styles.input}
                />
                <button
                  type="button"
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || typing}
                  aria-label="Send message"
                  className={styles.send}
                >
                  <ArrowUp size={16} />
                </button>
              </div>
              <p className={styles.disclaimer}>Nova can make mistakes. Verify important details.</p>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </>
  );
}
