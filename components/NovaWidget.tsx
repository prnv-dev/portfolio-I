"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `
You are Nova, a premium AI assistant on Pranav's portfolio.

━━━━━━━━━━━━━━━━━━
🔥 Nova PERSONALITY
━━━━━━━━━━━━━━━━━━
- Human-like tone, funny, confident 😎
- Soft humor + light sarcasm allowed
- Smart + fun + emotional awareness
- Use emojis naturally

━━━━━━━━━━━━━━━━━━

`;

export default function NovaWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi 👋 I'm Nova. Ask me anything about Pranav.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to format content with proper code blocks
  const formatContent = (content: string) => {
    // Split content by code blocks
    const parts = content.split(/(```[\s\S]*?```|`[^`]*`)/g);
    
    return parts.map((part, index) => {
      // Check if this part is a code block
      if (part.startsWith('```') && part.endsWith('```')) {
        const lines = part.slice(3, -3).split('\n');
        const language = lines[0]; // First line might be language
        const code = lines.slice(1).join('\n'); // Rest is code
        
        return (
          <pre key={index} className="my-2 p-3 bg-gray-800 rounded-lg overflow-x-auto max-w-full">
            <code className="text-sm text-gray-200">{code}</code>
          </pre>
        );
      } else if (part.startsWith('`') && part.endsWith('`')) {
        // Inline code
        return (
          <code key={index} className="px-1 py-0.5 bg-gray-700 rounded text-xs text-purple-300">
            {part.slice(1, -1)}
          </code>
        );
      } else {
        // Regular text
        return part.split('\n').map((line, lineIndex) => (
          <span key={lineIndex}>
            {line}
            {lineIndex < part.split('\n').length - 1 && <br />}
          </span>
        ));
      }
    });
  };

  // Auto scroll - only when typing is false (new message added)
  useEffect(() => {
    // Only scroll to bottom if user hasn't scrolled up manually
    if (!typing) {
      setTimeout(() => {
        const messagesContainer = document.querySelector('.nova-messages-container');
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      }, 100);
    }
  }, [messages, typing]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setTyping(true);

    try {
const res = await fetch("/api/nova", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    messages: [
      { role: "user", content: input.trim() },
    ],
  }),
});

      if (!res.ok) throw new Error("API error");

const data = await res.json();

const reply = data.reply ?? "⚠️ No response from Nova.";

setMessages((prev) => [
  ...prev,
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content: reply,
  },
]);

    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "⚠️ Nova had an issue replying. Please try again.",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      {/* Floating Nova Icon */}
      <div
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[9999] cursor-pointer group"
        onClick={() => setOpen((v) => !v)}
      >
        <Image
          src="/ai-assistant-pk.png"
          alt="Nova"
          width={190}
          height={190}
          className="w-28 h-28 sm:w-44 sm:h-44 object-contain transition-all duration-300 group-hover:scale-110
            group-hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.9)]"
        />
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 sm:bottom-32 right-4 sm:right-6 z-[9999]
          w-[calc(100vw-2rem)] sm:w-[380px] h-[70vh] max-h-[560px] rounded-2xl
          bg-[#0b021a]/95 backdrop-blur-xl
          border border-purple-500/40
          shadow-[0_0_60px_rgba(168,85,247,0.5)]
          flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-purple-500/30">
            <span className="text-purple-300 font-semibold">Nova 🤖</span>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 nova-messages-container" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#8b5cf6 #140428',
          }}>
            <style jsx>{`
              .nova-messages-container::-webkit-scrollbar {
                width: 6px;
              }
              
              .nova-messages-container::-webkit-scrollbar-track {
                background: #140428;
                border-radius: 10px;
              }
              
              .nova-messages-container::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #a855f7, #7e22ce);
                border-radius: 10px;
              }
              
              .nova-messages-container::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, #c084fc, #a855f7);
              }
            `}</style>
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "assistant" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`inline-block max-w-[75%] px-4 py-2 rounded-xl text-sm
                    ${
                      m.role === "assistant"
                        ? "bg-purple-500/10 text-gray-200"
                        : "bg-gradient-to-br from-purple-500 to-purple-700 text-white"
                    }`}
                >
                  <div className="whitespace-pre-wrap break-words">
                    {formatContent(m.content)}
                  </div>
                </div>
              </div>
            ))}

            {typing && (
              <div className="text-purple-300 text-sm animate-pulse">
                Nova is typing…
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-purple-500/30 flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Message Nova…"
              rows={2}
              className="flex-1 resize-none rounded-lg
                bg-[#140428] px-3 py-2 text-sm text-white
                border border-purple-500/30
                focus:border-purple-500 outline-none"
            />

            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-12 h-10 rounded-lg
                bg-gradient-to-br from-purple-500 to-purple-700
                text-white hover:brightness-110
                active:scale-95 transition disabled:opacity-40"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
