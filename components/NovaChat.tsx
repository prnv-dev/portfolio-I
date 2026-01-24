"use client";

import { useState, useRef, useEffect } from "react";

export default function NovaChat() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/nova", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "assistant", content: data.choices[0].message.content }
    ]);

    setLoading(false);
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll to bottom when messages change
  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
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
  
  return (
    <div className="fixed bottom-28 right-6 w-[360px] bg-[#0b0718] border border-purple-500/30 rounded-xl shadow-xl flex flex-col">
      <div className="p-4 text-purple-300 font-semibold">Nova AI</div>

      <div className="flex-1 h-[280px] overflow-y-auto px-4 text-sm space-y-3" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#8b5cf6 #140428',
      }}>
        <style jsx>{`
          div[class*='space-y-3']::-webkit-scrollbar {
            width: 6px;
          }
          
          div[class*='space-y-3']::-webkit-scrollbar-track {
            background: #0b0718;
            border-radius: 10px;
          }
          
          div[class*='space-y-3']::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #a855f7, #7e22ce);
            border-radius: 10px;
          }
          
          div[class*='space-y-3']::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #c084fc, #a855f7);
          }
        `}</style>
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`inline-block max-w-[85%] px-3 py-2 rounded-lg ${msg.role === "user" ? "bg-purple-500/20" : "bg-purple-900/30"}`}
            >
              <div className="whitespace-pre-wrap break-words">
                {formatContent(msg.content)}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-purple-300 text-sm animate-pulse">
            Nova is typing…
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Nova..."
          className="flex-1 bg-black/40 text-white px-3 py-2 rounded-lg outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 px-4 py-2 rounded-lg text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
