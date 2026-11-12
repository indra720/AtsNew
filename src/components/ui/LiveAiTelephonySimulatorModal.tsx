import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  PhoneCall,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  Bot,
  User,
  ShieldCheck,
  CheckCircle2,
  X,
  Play,
  RotateCcw,
  Zap,
  Activity,
  Headphones,
  Sliders,
  ArrowRight,
} from "lucide-react";

interface Scenario {
  id: string;
  name: string;
  clientRole: string;
  avatar: string;
  intent: string;
  sentiment: string;
  costSaving: string;
  dialogue: { speaker: "ai" | "client"; text: string; delay: number }[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "cloud-migration",
    name: "Enterprise Cloud Migration",
    clientRole: "VP of Engineering, FinTech Group",
    avatar: "🏢",
    intent: "High-Volume Multi-Region Migration",
    sentiment: "96% High Intent",
    costSaving: "38% Cloud Infrastructure Savings",
    dialogue: [
      {
        speaker: "ai",
        text: "Thank you for connecting with ATS Global Tech. I am your AI Enterprise Copilot. How can our architects assist your infrastructure today?",
        delay: 600,
      },
      {
        speaker: "client",
        text: "We run legacy servers handling 20,000 requests per second. We need zero-downtime AWS migration and automated failover.",
        delay: 2400,
      },
      {
        speaker: "ai",
        text: "Understood. ATS deploys an automated Kubernetes multi-region cluster with sub-second failover. Our live telemetry guarantees 99.99% uptime with zero data loss.",
        delay: 5000,
      },
      {
        speaker: "client",
        text: "That sounds ideal. Can ATS also integrate compliance and audit logging for SOC-2?",
        delay: 7800,
      },
      {
        speaker: "ai",
        text: "Absolutely. Our architecture ships with ISO 27001 & SOC-2 compliance blueprints, automated penetration testing, and real-time vulnerability alerting.",
        delay: 10400,
      },
    ],
  },
  {
    id: "ai-telephony",
    name: "AI Telephony & Omnichannel CRM",
    clientRole: "Operations Director, Logistics Hub",
    avatar: "📞",
    intent: "Contact Center Automation",
    sentiment: "98% Positive",
    costSaving: "45% Operational Overhead Reduction",
    dialogue: [
      {
        speaker: "ai",
        text: "Welcome to ATS Call Center live simulation. Our AI Copilot is currently monitoring audio latency at 18 milliseconds.",
        delay: 600,
      },
      {
        speaker: "client",
        text: "We have 150 human agents getting overwhelmed during peak delivery hours. Can the AI pre-triage inbound callers?",
        delay: 2400,
      },
      {
        speaker: "ai",
        text: "Yes. ATS AI Voice bot autonomously handles 65% of Tier-1 queries, performs speech-to-text live sentiment tracking, and routes complex cases with full context to senior agents.",
        delay: 5000,
      },
      {
        speaker: "client",
        text: "How quickly can this WebRTC dialer integrate with our existing database?",
        delay: 7800,
      },
      {
        speaker: "ai",
        text: "Our REST and WebSocket SDKs plug into PostgreSQL, MongoDB, and existing CRMs within 48 hours without legacy code overhaul.",
        delay: 10400,
      },
    ],
  },
  {
    id: "custom-erp",
    name: "Multi-Tenant Enterprise ERP",
    clientRole: "Managing Director, Global Supply Chain",
    avatar: "⚙️",
    intent: "Custom Workflow Modernization",
    sentiment: "94% Strategic Fit",
    costSaving: "3x Faster Decision Cycles",
    dialogue: [
      {
        speaker: "ai",
        text: "ATS Global Tech ERP Solution Desk active. Real-time telemetry synchronized across 8 manufacturing sites.",
        delay: 600,
      },
      {
        speaker: "client",
        text: "We need unified real-time inventory tracking, multi-currency invoicing, and role-based permissions across our 12 subsidiary companies.",
        delay: 2400,
      },
      {
        speaker: "ai",
        text: "ATS engineered BuildPro and Oranza on distributed event-driven microservices. We provide immutable audit trails, multi-tenant database isolation, and instant P&L analytics.",
        delay: 5200,
      },
      {
        speaker: "client",
        text: "Can we review an interactive prototype before full scale build?",
        delay: 8000,
      },
      {
        speaker: "ai",
        text: "Yes, our sprint model delivers a high-fidelity clickable prototype in Week 2, followed by continuous staging deployments.",
        delay: 10500,
      },
    ],
  },
];

interface LiveAiTelephonySimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export const LiveAiTelephonySimulatorModal: React.FC<
  LiveAiTelephonySimulatorModalProps
> = ({ isOpen, onClose, onOpenConsultation }) => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(
    SCENARIOS[0]
  );
  const [callState, setCallState] = useState<"idle" | "calling" | "connected">(
    "idle"
  );
  const [callDuration, setCallDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState(false);
  const [activeDialogueIndex, setActiveDialogueIndex] = useState<number>(-1);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  // Reset state when scenario changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCallState("idle");
      setCallDuration(0);
      setActiveDialogueIndex(-1);
      setIsMuted(false);
    }
  }, [isOpen, selectedScenario]);

  // Handle call progression
  useEffect(() => {
    let callTimer: any;
    let dialogueTimeouts: any[] = [];

    if (callState === "calling") {
      const connectTimeout = setTimeout(() => {
        setCallState("connected");
      }, 1400);

      return () => clearTimeout(connectTimeout);
    }

    if (callState === "connected") {
      // Duration counter
      callTimer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);

      // Play dialogue turns
      selectedScenario.dialogue.forEach((item, index) => {
        const t = setTimeout(() => {
          setActiveDialogueIndex(index);
          transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, item.delay);
        dialogueTimeouts.push(t);
      });
    }

    return () => {
      clearInterval(callTimer);
      dialogueTimeouts.forEach((t) => clearTimeout(t));
    };
  }, [callState, selectedScenario]);

  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeDialogueIndex]);

  // Format MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remaining
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStartCall = () => {
    setCallState("calling");
    setCallDuration(0);
    setActiveDialogueIndex(-1);
  };

  const handleEndCall = () => {
    setCallState("idle");
    setCallDuration(0);
    setActiveDialogueIndex(-1);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-gradient-to-b from-[#0A1629] via-[#0C1B33] to-[#071120] text-white rounded-3xl border border-blue-500/30 shadow-[0_25px_70px_rgba(0,102,255,0.35)] overflow-hidden z-10 my-auto"
        >
          {/* Top Cyber Glow Line */}
          <div className="h-1 w-full bg-gradient-to-r from-[#0052CC] via-[#00D2FF] to-[#0066FF]" />

          {/* Modal Header */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-slate-900/60 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-[#00D2FF] shadow-inner">
                <Headphones className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    ATS Web-Dialer & AI Copilot Simulator
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[10px] font-mono font-semibold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE WebRTC 48kHz
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  Experience real-time speech analytics, latency under 20ms, and automated CRM triage.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body: 2-Column Responsive Layout */}
          <div className="p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* Left Column (5 Cols): Scenario Picker & Telephony Controls */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {/* Scenario Picker */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>Select Interactive Simulation:</span>
                </label>
                <div className="flex flex-col gap-2">
                  {SCENARIOS.map((sc) => {
                    const isSelected = selectedScenario.id === sc.id;
                    return (
                      <button
                        key={sc.id}
                        onClick={() => {
                          if (callState !== "idle") handleEndCall();
                          setSelectedScenario(sc);
                        }}
                        className={`w-full text-left p-3 rounded-2xl transition-all border ${
                          isSelected
                            ? "bg-blue-600/20 border-blue-400/80 shadow-[0_0_20px_rgba(0,102,255,0.25)] ring-1 ring-blue-400"
                            : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-white flex items-center gap-2">
                            <span>{sc.avatar}</span>
                            <span>{sc.name}</span>
                          </span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                          )}
                        </div>
                        <p className="text-xs text-slate-400 truncate">
                          {sc.clientRole}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dialer Screen / Telephony Status Card */}
              <div className="bg-slate-900/80 rounded-2xl p-4 border border-white/10 shadow-inner flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0052CC] to-[#00D2FF] p-0.5 mb-3 shadow-lg">
                  <div className="w-full h-full bg-[#0A1629] rounded-2xl flex items-center justify-center">
                    <Bot className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white mb-0.5">
                  ATS AI Voice Copilot
                </h4>
                <p className="text-xs font-mono text-cyan-300 mb-2">
                  Dialer Extension: +1 (800) 287-AI-OPS
                </p>

                {/* Call Status Badge */}
                <div className="mb-4">
                  {callState === "idle" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium border border-white/5">
                      Ready to Connect
                    </span>
                  )}
                  {callState === "calling" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-semibold border border-amber-500/30 animate-pulse">
                      Establishing WebRTC Handshake...
                    </span>
                  )}
                  {callState === "connected" && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/40">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Connected &bull; {formatTime(callDuration)}
                    </span>
                  )}
                </div>

                {/* Waveform Visualizer during Connected Call */}
                <div className="w-full h-8 flex items-center justify-center gap-1 mb-4">
                  {[...Array(16)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={
                        callState === "connected" && !isMuted
                          ? {
                              height: [6, Math.floor(Math.random() * 24) + 6, 6],
                            }
                          : { height: 4 }
                      }
                      transition={{
                        repeat: Infinity,
                        duration: 0.6 + (i % 5) * 0.15,
                        ease: "easeInOut",
                      }}
                      className={`w-1 rounded-full ${
                        callState === "connected"
                          ? "bg-gradient-to-t from-[#0066FF] to-[#00D2FF]"
                          : "bg-slate-700"
                      }`}
                    />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 w-full">
                  {callState === "idle" ? (
                    <button
                      onClick={handleStartCall}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(16,185,129,0.35)] transition cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Start Live AI Simulation</span>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className={`p-3 rounded-xl border transition ${
                          isMuted
                            ? "bg-rose-500/20 border-rose-500/40 text-rose-400"
                            : "bg-slate-800 border-white/10 text-slate-300 hover:bg-slate-700"
                        }`}
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <MicOff className="w-4 h-4" />
                        ) : (
                          <Mic className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={handleEndCall}
                        className="flex-1 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(225,29,72,0.35)] transition cursor-pointer"
                      >
                        <PhoneOff className="w-4 h-4" />
                        <span>Hang Up Call</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols): Real-time AI Transcript & Telemetry HUD */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950/60 rounded-2xl border border-white/10 p-4 sm:p-5 h-[420px] sm:h-[460px]">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-mono">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Latency: 14ms</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>TLS 1.3 / E2EE</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <span>Sentiment:</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[#00D2FF] font-semibold border border-blue-400/20">
                    {selectedScenario.sentiment}
                  </span>
                </div>
              </div>

              {/* Real-time Streaming Transcript */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-3 font-sans">
                {callState === "idle" && (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                    <Bot className="w-10 h-10 text-blue-400/50 mb-3" />
                    <p className="text-sm font-semibold text-slate-300">
                      Simulator Idle
                    </p>
                    <p className="text-xs text-slate-500 max-w-xs mt-1">
                      Click <strong>"Start Live AI Simulation"</strong> to experience automated speech transcription, intent detection, and sub-second response.
                    </p>
                  </div>
                )}

                {callState === "calling" && (
                  <div className="h-full flex flex-col items-center justify-center text-center text-cyan-400">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mb-3" />
                    <p className="text-xs font-mono uppercase tracking-wider">
                      Negotiating SDP / ICE candidates...
                    </p>
                  </div>
                )}

                {callState === "connected" && (
                  <>
                    {selectedScenario.dialogue.map((item, index) => {
                      if (index > activeDialogueIndex) return null;
                      const isAi = item.speaker === "ai";
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex items-start gap-2.5 ${
                            isAi ? "justify-start" : "justify-end"
                          }`}
                        >
                          {isAi && (
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0052CC] to-[#00D2FF] flex items-center justify-center text-white shrink-0 text-xs shadow-xs mt-0.5">
                              <Bot className="w-4 h-4" />
                            </div>
                          )}

                          <div
                            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                              isAi
                                ? "bg-slate-900 border border-blue-500/30 text-slate-200"
                                : "bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3 text-[10px] font-mono text-slate-400 mb-1">
                              <span className="font-bold text-cyan-300">
                                {isAi
                                  ? "ATS AI Copilot"
                                  : selectedScenario.clientRole}
                              </span>
                              <span>LIVE SPEECH</span>
                            </div>
                            <p>{item.text}</p>
                          </div>

                          {!isAi && (
                            <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/20 flex items-center justify-center text-white shrink-0 text-xs shadow-xs mt-0.5">
                              <User className="w-4 h-4 text-slate-300" />
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                    <div ref={transcriptEndRef} />
                  </>
                )}
              </div>

              {/* Bottom Copilot Impact Bar */}
              <div className="pt-3 mt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/40 p-2.5 rounded-xl">
                <div className="flex items-center gap-2 text-xs">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-slate-300">
                    Projected Impact:{" "}
                    <strong className="text-emerald-400">
                      {selectedScenario.costSaving}
                    </strong>
                  </span>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    if (onOpenConsultation) {
                      onOpenConsultation();
                    } else {
                      const contactBtn = document.getElementById("contact-section");
                      contactBtn?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold transition cursor-pointer"
                >
                  <span>Build This For Your Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LiveAiTelephonySimulatorModal;
