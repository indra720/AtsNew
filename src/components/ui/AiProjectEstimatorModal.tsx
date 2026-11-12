import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  Cpu,
  Clock,
  Layers,
  CheckCircle2,
  ArrowRight,
  Code2,
  ShieldCheck,
  Send,
  Zap,
  Bot,
  Sliders,
} from "lucide-react";

interface AiProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

const PROJECT_PRESETS = [
  {
    name: "AI Telephony & Omnichannel CRM",
    prompt: "I want to build a cloud call center with real-time AI speech transcription, agent copilot, and WebRTC web-dialer.",
    stack: ["WebRTC 48kHz", "React 19", "Node.js", "Python FastAPI", "PostgreSQL", "AWS"],
    timeline: "4 - 6 Weeks",
    keyModules: ["WebRTC Audio Ingest", "AI Speech Copilot", "Agent Telemetry CRM", "Call Recording & Analytics"],
    priorityScore: "98% Enterprise Match",
  },
  {
    name: "Multi-Vendor E-Commerce Platform",
    prompt: "I need a high-converting multi-vendor marketplace with buyer storefront, vendor portal, and super admin analytics.",
    stack: ["React 19", "Next.js", "Tailwind CSS", "Node.js Microservices", "PostgreSQL", "Redis"],
    timeline: "3 - 5 Weeks",
    keyModules: ["Unified Storefront", "Vendor Inventory Hub", "Multi-Currency Checkout", "P&L Analytics"],
    priorityScore: "95% High Scalability",
  },
  {
    name: "Custom Enterprise ERP & Workflow Portal",
    prompt: "I need a central ERP system with role-based permissions, inventory tracking, invoice generation, and audit logging.",
    stack: ["TypeScript", "React 19", "PostgreSQL", "Docker", "AWS Cloud", "Role-Based ACL"],
    timeline: "6 - 8 Weeks",
    keyModules: ["Multi-Tenant DB Isolation", "Automated Billing & P&L", "Role Permissions", "Real-Time Telemetry"],
    priorityScore: "97% Strategic Match",
  },
  {
    name: "Cross-Platform Mobile App (iOS & Android)",
    prompt: "I want to build a 60fps mobile application with push notifications, offline data sync, and payment gateway integration.",
    stack: ["Flutter", "Dart", "Firebase", "Node.js REST API", "PostgreSQL"],
    timeline: "4 - 6 Weeks",
    keyModules: ["Cross-Platform UI", "Offline-First SQLite Sync", "Automated Push Engine", "App Store Handover"],
    priorityScore: "94% Mobile Native",
  },
];

export const AiProjectEstimatorModal: React.FC<AiProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [userRequirement, setUserRequirement] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [estimatedResult, setEstimatedResult] = useState<any>(null);

  if (!isOpen) return null;

  const handleSelectPreset = (idx: number) => {
    setSelectedPreset(idx);
    const p = PROJECT_PRESETS[idx];
    setUserRequirement(p.prompt);
    setEstimatedResult(p);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userRequirement.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      // If matches a preset or custom
      if (selectedPreset !== null) {
        setEstimatedResult(PROJECT_PRESETS[selectedPreset]);
      } else {
        setEstimatedResult({
          name: "Custom Enterprise Platform",
          prompt: userRequirement,
          stack: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "AWS Cloud", "Docker"],
          timeline: "4 - 6 Weeks (Phase 1 MVP in 2 Weeks)",
          keyModules: [
            "Responsive Client Frontend",
            "Stateless REST / WebSocket API",
            "Database Modeling & Caching",
            "Automated CI/CD & Security Audits",
          ],
          priorityScore: "96% High Feasibility",
        });
      }
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl border border-blue-200 shadow-2xl overflow-hidden z-10 my-auto text-slate-900"
        >
          {/* Top Gradient Banner */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-sm">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <span>AI Scope & Architecture Estimator</span>
                  <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded-full border border-white/30 font-bold">
                    Powered by Claude & AI
                  </span>
                </h3>
                <p className="text-xs text-cyan-100 font-medium">
                  Enter your project goals or pick a preset to generate a recommended tech stack, sprint timeline, and architectural modules.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-7 space-y-5">
            {/* Quick Presets */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                1. Or Pick a Popular Architecture Blueprint:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PROJECT_PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectPreset(idx)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition cursor-pointer ${
                      selectedPreset === idx
                        ? "bg-blue-50 border-[#0066FF] text-[#0066FF] shadow-xs ring-1 ring-[#0066FF]"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-blue-200"
                    }`}
                  >
                    <span className="line-clamp-2">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt Input Form */}
            <form onSubmit={handleGenerate} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                  <span>2. Describe Your Project Requirements:</span>
                  <span className="text-slate-400 font-normal text-[11px]">e.g. mobile app, AI copilot, ERP</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. I want to build a telemedicine platform with video consultation, prescription generator, and doctor scheduling..."
                  value={userRequirement}
                  onChange={(e) => {
                    setUserRequirement(e.target.value);
                    setSelectedPreset(null);
                  }}
                  className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] text-slate-800"
                />
              </div>

              <button
                type="submit"
                disabled={isGenerating || !userRequirement.trim()}
                className="w-full py-3 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <Bot className="w-4 h-4 animate-spin" />
                    <span>Synthesizing Architecture & Timeline...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-cyan-200" />
                    <span>Generate AI Scope & Architecture Blueprint</span>
                  </>
                )}
              </button>
            </form>

            {/* Generated AI Result Card */}
            {estimatedResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-[#F0F7FF] via-white to-[#EBF5FF] border border-blue-200 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-blue-100">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#0066FF] uppercase tracking-wider block">
                      RECOMMENDED ARCHITECTURE
                    </span>
                    <h4 className="text-base font-bold text-slate-900 font-display">
                      {estimatedResult.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold font-mono">
                      {estimatedResult.priorityScore}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200 text-xs font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{estimatedResult.timeline}</span>
                    </span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5 font-mono">
                    Recommended Production Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {estimatedResult.stack.map((st: string, sIdx: number) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-lg bg-white border border-blue-200 text-xs font-semibold text-slate-700 shadow-2xs"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Architectural Modules */}
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5 font-mono">
                    Key Modules & Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {estimatedResult.keyModules.map((km: string, kIdx: number) => (
                      <div key={kIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                        <span>{km}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-3 border-t border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-600 font-medium">
                    Want our architects to review this custom scope with you?
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      if (onOpenConsultation) {
                        onOpenConsultation();
                      } else {
                        const contactEl = document.getElementById("contact-section");
                        contactEl?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0040A8] hover:to-[#0052CC] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition cursor-pointer"
                  >
                    <span>Lock Architecture & Schedule Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AiProjectEstimatorModal;
