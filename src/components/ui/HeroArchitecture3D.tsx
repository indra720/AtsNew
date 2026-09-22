import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  ShieldCheck,
  Server,
  Globe2,
  Terminal,
  Activity,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Database,
  Lock,
  Boxes,
  Code2,
  Play,
  Layers,
} from "lucide-react";

export default function HeroArchitecture3D() {
  const [activeTab, setActiveTab] = useState<"architecture" | "telemetry" | "security">("architecture");

  return (
    <div className="relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[620px] mx-auto py-4 select-none">
      {/* Ambient Multi-Spectrum Background Glow (No Balls, pure soft lighting) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-[#0066FF]/15 via-[#00D2FF]/20 to-[#38BDF8]/10 rounded-3xl blur-[80px] pointer-events-none -z-10" />

      {/* 3D Isometric Tilt Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 6, rotateY: -8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative perspective-[1200px]"
      >
        {/* Main Floating Platform Studio Window */}
        <div className="relative rounded-3xl bg-white/90 backdrop-blur-2xl border border-blue-200/90 shadow-[0_25px_60px_-15px_rgba(0,102,255,0.18),0_0_0_1px_rgba(255,255,255,0.8)_inset] p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_30px_70px_-15px_rgba(0,102,255,0.25)]">
          
          {/* Top Window Control Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-100/90">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400/80 border border-rose-500/20" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/20" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80 border border-emerald-500/20" />
              </div>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 ml-2 px-2.5 py-0.5 rounded-lg bg-blue-50/80 border border-blue-100">
                ats-platform.live
              </span>
            </div>

            {/* Live Environment Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-emerald-700">
                Cluster: Production
              </span>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 mb-4 p-1 rounded-xl bg-slate-100/80 border border-slate-200/80 text-xs font-mono font-bold">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex-1 py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "architecture"
                  ? "bg-white text-[#0066FF] shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Boxes className="w-3.5 h-3.5" />
              <span>AI Mesh</span>
            </button>
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`flex-1 py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "telemetry"
                  ? "bg-white text-[#0066FF] shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Real-Time SLA</span>
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`flex-1 py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "security"
                  ? "bg-white text-[#0066FF] shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Zero-Trust</span>
            </button>
          </div>

          {/* TAB 1: ARCHITECTURE NODE WORKFLOW (THE CORE 3D VISUAL) */}
          {activeTab === "architecture" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {/* Node 1: Ingestion Gateway */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-sky-50/60 to-white border border-blue-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-xs">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Ingestion Layer</p>
                    <p className="text-xs font-bold text-slate-900 font-display">Global Edge Traffic Router</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black font-mono text-[#0066FF]">48.2k req/s</span>
                  <p className="text-[9px] text-slate-500 font-mono">0.01s Latency</p>
                </div>
              </div>

              {/* Connecting Data Highway Beam */}
              <div className="flex justify-center -my-1">
                <div className="h-5 w-[2px] bg-gradient-to-b from-[#0066FF] to-[#00D2FF] relative">
                  <motion.div
                    animate={{ y: [0, 20] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                    className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] -left-[2px] absolute shadow-[0_0_8px_#00D2FF]"
                  />
                </div>
              </div>

              {/* Node 2: Central Intelligent AI Engine (Featured Card) */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0A1629] via-[#0F2248] to-[#0A1629] text-white shadow-[0_12px_30px_rgba(0,102,255,0.25)] border border-blue-400/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF]/20 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0066FF] to-[#00D2FF] flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,102,255,0.5)]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-bold font-display text-white">ATS AI Neural Orchestrator</p>
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[#00D2FF] text-[9px] font-mono border border-blue-400/30">
                          v3.2 Active
                        </span>
                      </div>
                      <p className="text-[10px] text-blue-200/80 font-mono">Autonomous Routing & Multi-Agent Mesh</p>
                    </div>
                  </div>
                </div>

                {/* Live Model Stream Console */}
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/10 font-mono text-[11px] flex items-center justify-between text-blue-200">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>LLM Engine: <strong className="text-white">GPT-4o + Claude 3.5 Sonnet</strong></span>
                  </div>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    99.8% Match
                  </span>
                </div>
              </div>

              {/* Connecting Split Beam */}
              <div className="flex justify-center -my-1">
                <div className="h-5 w-[2px] bg-gradient-to-b from-[#0066FF] to-[#00D2FF] relative">
                  <motion.div
                    animate={{ y: [0, 20] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] -left-[2px] absolute shadow-[0_0_8px_#00D2FF]"
                  />
                </div>
              </div>

              {/* Node 3 & 4: Dual Outputs (Cloud Mesh & Security) */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-white border border-blue-200 shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Server className="w-4 h-4 text-[#0066FF]" />
                    <span className="text-xs font-bold text-slate-900 font-display">Kubernetes Mesh</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-mono">Multi-Cloud Auto-Scale</p>
                  <p className="text-xs font-bold text-emerald-600 font-mono mt-1">99.99% Uptime</p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-blue-200 shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
                    <span className="text-xs font-bold text-slate-900 font-display">Zero-Trust Vault</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-mono">End-to-End Encryption</p>
                  <p className="text-xs font-bold text-[#0066FF] font-mono mt-1">SOC-2 Type II</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: TELEMETRY & LIVE PERFORMANCE */}
          {activeTab === "telemetry" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 py-2"
            >
              <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Core Availability SLA</span>
                  <span className="text-emerald-400 font-bold">99.998%</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Global Average P99 Latency</span>
                  <span className="text-[#00D2FF] font-bold">8.4ms</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Total Queries Processed</span>
                  <span className="text-white font-bold">142.8M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Active Auto-Scaled Nodes</span>
                  <span className="text-purple-400 font-bold">64 Pods</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: ZERO-TRUST SECURITY AUDIT */}
          {activeTab === "security" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 py-2"
            >
              <div className="p-4 rounded-2xl bg-white border border-blue-200 text-xs font-mono space-y-3">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    AES-256 Bit Encryption
                  </span>
                  <span className="font-bold text-emerald-600">Active</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    SOC2 Type II Audit
                  </span>
                  <span className="font-bold text-emerald-600">Certified</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ISO 27001 Information Security
                  </span>
                  <span className="font-bold text-emerald-600">Compliant</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Zero Vulnerabilities Detected
                  </span>
                  <span className="font-bold text-emerald-600">100% Clean</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* 3D FLOATING CALLOUT BADGES (Floating outside with realistic depth) */}
        
        {/* Floating Badge 1: Top Right */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 z-20"
        >
          <div className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-200/90 shadow-[0_12px_30px_rgba(0,102,255,0.18)] flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#EBF5FF] text-[#0066FF] flex items-center justify-center">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[9px] font-mono text-slate-500 font-semibold uppercase">Velocity</p>
              <p className="text-xs font-bold font-display text-slate-900">+250% Speedup</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Badge 2: Bottom Left */}
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 z-20"
        >
          <div className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-200/90 shadow-[0_12px_30px_rgba(0,102,255,0.18)] flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[9px] font-mono text-slate-500 font-semibold uppercase">Reliability</p>
              <p className="text-xs font-bold font-display text-slate-900">Zero Downtime</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
