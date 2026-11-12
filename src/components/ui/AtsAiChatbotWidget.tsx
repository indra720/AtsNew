import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  User,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  RotateCcw,
  Minimize2,
  Zap,
  ShieldCheck,
  Building2,
  Code2,
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  leadBadge?: string;
}

const QUICK_PROMPTS = [
  "What services does ATS build?",
  "How fast can you deliver an MVP?",
  "Who is CEO Ajeet Singh?",
  "Where is your Jaipur office?",
  "I want to discuss a new project",
];

export const AtsAiChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Hello! 👋 I am the ATS Global Tech AI Copilot. Ask me anything about our enterprise web platforms, mobile apps, AI voice telephony, project timelines, or Jaipur HQ.",
      timestamp: "Just now",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const generateBotReply = (userQuery: string): { text: string; leadBadge?: string } => {
    const q = userQuery.toLowerCase();

    // Lead capture intent (email or phone or "project", "hire", "cost", "contact")
    if (
      q.includes("@") ||
      /\d{10}/.test(q) ||
      q.includes("call me") ||
      q.includes("my email") ||
      q.includes("my phone") ||
      q.includes("contact me")
    ) {
      return {
        text: "Thank you! I have registered your inquiry in our priority system. Our senior solutions architect will review your project requirements and connect with you within 2 hours.",
        leadBadge: "⭐ High-Priority Enterprise Lead Registered",
      };
    }

    if (q.includes("service") || q.includes("offer") || q.includes("build") || q.includes("what do you do")) {
      return {
        text: "ATS Global Tech specializes in 5 core domains:\n• Full-Stack SaaS & Web Platforms (React 19, TypeScript, Next.js, Node.js)\n• Cross-Platform Mobile Apps (Flutter, iOS, Android)\n• Next-Gen AI Telephony & Omnichannel CRM (WebRTC 48kHz, voice copilots)\n• Custom Enterprise ERP & Multi-Tenant Portals\n• Multi-Region Cloud Architecture & Zero-Trust DevOps (AWS, Kubernetes).",
      };
    }

    if (q.includes("timeline") || q.includes("fast") || q.includes("mvp") || q.includes("time") || q.includes("how long")) {
      return {
        text: "Our sprint velocity is disciplined:\n• Rapid MVP Clickable Prototype: Delivered in 7 - 14 Days.\n• Production-Grade Web/Mobile App: Delivered in 4 - 6 Weeks.\n• Complex Multi-Tenant ERP/AI Platform: 8 - 12 Weeks.\nEvery project includes full source code ownership, CI/CD, and a 30-day hypercare warranty.",
      };
    }

    if (q.includes("ajeet") || q.includes("ceo") || q.includes("founder") || q.includes("leadership")) {
      return {
        text: "ATS Global Tech is founded and led by Ajeet Singh (CEO & Founder). With over 15+ years of software engineering leadership, he believes in 'People trust people, not logos.' Under his vision, ATS has delivered 150+ successful enterprise systems globally.",
      };
    }

    if (q.includes("jaipur") || q.includes("office") || q.includes("location") || q.includes("where")) {
      return {
        text: "Our core Innovation Headquarters is located in Jaipur, Rajasthan, India. From Jaipur, our 100% in-house engineering team powers software ecosystems for clients across India, the US, UK, and the Middle East.",
      };
    }

    if (q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("budget") || q.includes("quote")) {
      return {
        text: "We offer two transparent engagement models:\n1. Dedicated Engineering Pod: Full-time senior squad (Lead, Frontend, Backend, DevOps) dedicated to your roadmap.\n2. Fixed-Scope Turnkey Project: Guaranteed timeline, milestone deliverables, and fixed budget.\nDrop your email or phone here, and we'll send a customized technical scope & quote!",
      };
    }

    if (q.includes("discuss") || q.includes("consult") || q.includes("call") || q.includes("meeting") || q.includes("talk")) {
      return {
        text: "We'd love to collaborate! You can reach our engineering desk directly at info@atsglobaltech.in or call +91 99298 25003. Alternatively, type your phone number or email below and our architect will reach out directly.",
      };
    }

    return {
      text: "Thanks for reaching out! ATS Global Tech engineers scalable software, next-gen AI, and cloud architectures. Would you like to explore our core services, review our 4-week sprint delivery roadmap, or discuss your upcoming project requirements?",
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText("");
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const reply = generateBotReply(query);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: reply.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        leadBadge: reply.leadBadge,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* ============================================================ */}
      {/* 1. FLOATING CYBER BUTTON (WITH PULSE GLOW)                   */}
      {/* ============================================================ */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
          className="relative group p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] text-white shadow-[0_10px_35px_rgba(0,102,255,0.45)] flex items-center gap-3 border border-white/30 backdrop-blur-md cursor-pointer"
          aria-label="Open ATS AI Copilot"
        >
          {/* Breathing Luminous Aura Ring */}
          <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 opacity-60 blur-sm group-hover:opacity-100 transition animate-pulse pointer-events-none" />

          <div className="relative flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold leading-tight">ATS AI Copilot</span>
              <span className="text-[10px] text-cyan-200 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Online &bull; Ask Anything
              </span>
            </div>
          </div>

          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white animate-bounce" />
          )}
        </motion.button>
      )}

      {/* ============================================================ */}
      {/* 2. CHATBOT WINDOW (EXPANDED CONVERSATIONAL UI)               */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-[92vw] sm:w-[390px] h-[520px] max-h-[85vh] bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,102,255,0.25)] border border-blue-200/90 flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Top Luminous Header Bar */}
            <div className="p-4 bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] text-white flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-sm shadow-inner">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold flex items-center gap-1.5 leading-tight">
                    <span>ATS AI Copilot</span>
                    <span className="text-[9px] font-mono font-bold bg-white/20 px-1.5 py-0.5 rounded-full border border-white/25">
                      Next-Gen AI
                    </span>
                  </h3>
                  <p className="text-[11px] text-cyan-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Real-time Architecture Assistant</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
                  aria-label="Minimize Chat"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
                  aria-label="Close Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-[#F0F7FF]/50 to-white text-xs">
              {messages.map((m) => {
                const isBot = m.sender === "bot";
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2 ${isBot ? "justify-start" : "justify-end"}`}
                  >
                    {isBot && (
                      <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF] shrink-0 text-xs mt-0.5">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                        isBot
                          ? "bg-white border border-blue-100 text-slate-800 shadow-xs"
                          : "bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white shadow-xs"
                      }`}
                    >
                      {m.leadBadge && (
                        <div className="mb-2 p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-[10px] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{m.leadBadge}</span>
                        </div>
                      )}
                      <p className="whitespace-pre-line">{m.text}</p>
                      <span className={`block text-[9px] mt-1 ${isBot ? "text-slate-400" : "text-white/70"}`}>
                        {m.timestamp}
                      </span>
                    </div>

                    {!isBot && (
                      <div className="w-6 h-6 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 text-xs mt-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066FF]">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex items-center gap-1 bg-white border border-blue-100 px-3 py-2 rounded-2xl shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-2 border-t border-slate-100 bg-white overflow-x-auto no-scrollbar flex items-center gap-1.5">
              {QUICK_PROMPTS.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 rounded-full bg-blue-50/80 hover:bg-[#0066FF] hover:text-white border border-blue-200 text-[11px] font-medium text-slate-700 transition whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about tech stack, services, pricing..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] text-slate-800"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] disabled:opacity-40 text-white transition cursor-pointer shadow-xs"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AtsAiChatbotWidget;
