import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Cloud,
  Code2,
  Database,
  ArrowRight,
  Terminal,
  Activity,
  CheckCircle2,
  Lock,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceStep {
  id: string;
  tabLabel: string;
  icon: React.ElementType;
  badge: string;
  title: string;
  description: string;
  metric1: { val: string; label: string };
  metric2: { val: string; label: string };
  consoleSnippet: string;
  color: string;
}

const services: ServiceStep[] = [
  {
    id: "ai",
    tabLabel: "AI Solutions",
    icon: Cpu,
    badge: "AUTOMATION // NEURAL MESH",
    title: "Enterprise AI Solutions & Multi-Agent Swarms",
    description: "Self-orchestrating intelligent agents with proprietary domain fine-tuning and autonomous production workflows.",
    metric1: { val: "99.4%", label: "Model Accuracy SLA" },
    metric2: { val: "142.5k tps", label: "Token Throughput" },
    consoleSnippet: "Prompt Input → Autonomous Agent → Production API [99.4% Match]",
    color: "#0066FF",
  },
  {
    id: "cloud",
    tabLabel: "Cloud Infra",
    icon: Cloud,
    badge: "INFRASTRUCTURE // HIGH AVAILABILITY",
    title: "Multi-Cloud Infrastructure & Kubernetes Mesh",
    description: "Enterprise-grade multi-region cloud deployment with sub-10ms response times and automated zero-downtime failover.",
    metric1: { val: "99.99%", label: "SLA Uptime Guaranteed" },
    metric2: { val: "8.4ms", label: "Global Latency P99" },
    consoleSnippet: "Cluster Active: US-East (8ms) • EU-Central (14ms) • AP-South (19ms)",
    color: "#00D2FF",
  },
  {
    id: "dev",
    tabLabel: "Custom Development",
    icon: Code2,
    badge: "ENGINEERING // FULL-STACK",
    title: "Next-Gen Scalable Custom Software Platforms",
    description: "High-performance reactive microservices and enterprise web/mobile applications built for multi-million user scale.",
    metric1: { val: "120 FPS", label: "Fluid Interface UX" },
    metric2: { val: "0.02s", label: "P99 Query Time" },
    consoleSnippet: "Stack: React 19 • Next.js 15 • Python AI Core • Microservices",
    color: "#0052CC",
  },
  {
    id: "data",
    tabLabel: "Data & Analytics",
    icon: Database,
    badge: "GOVERNANCE // ZERO-TRUST VAULT",
    title: "Predictive Analytics & Bank-Grade Security",
    description: "Real-time streaming intelligence pipelines equipped with AES-256 GCM cryptographic vaults and continuous SOC-2 audits.",
    metric1: { val: "Zero-Trust", label: "SOC-2 Type II & ISO" },
    metric2: { val: "100% Clean", label: "Zero Vulnerabilities" },
    consoleSnippet: "AES-256 GCM Encryption Active • Continuous Audit Verified",
    color: "#10B981",
  },
];

export default function AutoServiceStepCard3D() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-Cycle Timer (3.8 seconds per step)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % services.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = services[activeIdx];
  const CurrentIcon = current.icon;

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-4xl mx-auto select-none mt-4 sm:mt-6"
    >
      {/* Ambient Blue Halo underneath */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#0066FF]/20 via-[#00D2FF]/25 to-[#0052CC]/20 rounded-3xl blur-xl opacity-75 pointer-events-none -z-10" />

      {/* Main Frosted Glass 3D Stage Card */}
      <div className="relative rounded-3xl bg-white/90 backdrop-blur-2xl border border-blue-200/90 shadow-[0_20px_50px_rgba(0,102,255,0.12),0_1px_3px_rgba(0,0,0,0.02)] p-5 sm:p-7 transition-all duration-300">
        
        {/* ============================================================ */}
        {/* STEP CONTROLLER PILLS (4 TABS WITH AUTOMATIC PROGRESS BARS) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
          {services.map((svc, idx) => {
            const SvcIcon = svc.icon;
            const isActive = idx === activeIdx;

            return (
              <button
                key={svc.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative overflow-hidden p-3 rounded-2xl border text-left transition-all ${
                  isActive
                    ? "bg-white border-[#0066FF] shadow-md shadow-blue-500/10"
                    : "bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300"
                }`}
              >
                {/* Active Step Filling Progress Line */}
                {isActive && !isPaused && (
                  <motion.div
                    key={`prog-${idx}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3.8, ease: "linear" }}
                    className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#0066FF] to-[#00D2FF]"
                  />
                )}

                <div className="flex items-center justify-between mb-1.5">
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${isActive ? "bg-[#0066FF] text-white shadow-xs" : "bg-white text-slate-600 border border-slate-200"}`}>
                    <SvcIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${isActive ? "text-[#0066FF]" : "text-slate-400"}`}>
                    0{idx + 1}
                  </span>
                </div>

                <p className={`text-xs font-bold truncate font-sans ${isActive ? "text-slate-900" : "text-slate-600"}`}>
                  {svc.tabLabel}
                </p>
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* DYNAMIC SERVICE CONTENT (ANIMATED FADE/SLIDE TRANSITIONS) */}
        {/* ============================================================ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-5"
          >
            {/* Header Row: Title, Badge, Rising Chart */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-100">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0052CC] to-[#0066FF] flex items-center justify-center text-white shadow-md shadow-blue-500/25 shrink-0">
                  <CurrentIcon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] uppercase tracking-wider">
                    {current.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mt-1">
                    {current.title}
                  </h3>
                </div>
              </div>

              {/* Rising Bar Chart Graphic */}
              <div className="flex items-center gap-2 self-start sm:self-auto px-3 py-1.5 rounded-xl bg-blue-50/70 border border-blue-100">
                <span className="text-[11px] font-mono font-bold text-[#0066FF]">METRIC SCALE</span>
                <div className="flex items-end gap-1 h-4">
                  <span className="w-1.5 h-2 bg-[#00D2FF] rounded-xs" />
                  <span className="w-1.5 h-3 bg-[#0099FF] rounded-xs" />
                  <span className="w-1.5 h-4.5 bg-[#0066FF] rounded-xs" />
                </div>
              </div>
            </div>

            {/* Description & Dual Metrics Grid */}
            <div className="grid sm:grid-cols-12 gap-4 items-center">
              <p className="sm:col-span-7 text-sm text-slate-600 leading-relaxed font-sans">
                {current.description}
              </p>

              <div className="sm:col-span-5 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50/90 to-sky-50/50 border border-blue-100 shadow-xs">
                  <p className="text-lg sm:text-xl font-black text-slate-900 font-mono">{current.metric1.val}</p>
                  <p className="text-[10px] text-slate-500 font-medium font-sans leading-tight mt-0.5">{current.metric1.label}</p>
                </div>
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50/90 to-sky-50/50 border border-blue-100 shadow-xs">
                  <p className="text-lg sm:text-xl font-black text-[#0066FF] font-mono">{current.metric2.val}</p>
                  <p className="text-[10px] text-slate-500 font-medium font-sans leading-tight mt-0.5">{current.metric2.label}</p>
                </div>
              </div>
            </div>

            {/* Live Terminal Diagnostic Console Preview */}
            <div className="p-3 rounded-2xl bg-slate-900 text-white font-mono text-xs flex flex-wrap items-center justify-between gap-2 shadow-inner">
              <div className="flex items-center gap-2 text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span className="truncate">{current.consoleSnippet}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                STATUS: LIVE
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ============================================================ */}
        {/* CARD FOOTER: 142.5k+ SYSTEMS DEPLOYED & ACTION CTA */}
        {/* ============================================================ */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 mt-5 border-t border-blue-100/90">
          {/* Metric Pill: 142.5k+ Systems Deployed */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-black text-slate-900 font-mono">142.5k+</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-600 font-medium">Systems Deployed Globally</span>
            </div>

            {/* Cyan Wave Sparkline */}
            <svg width="55" height="20" viewBox="0 0 55 20" fill="none" className="text-[#00D2FF]">
              <path
                d="M2 15 L10 10 L18 16 L28 5 L38 12 L46 2 L52 6"
                stroke="#00D2FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Quick Action Link */}
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066FF] hover:text-[#0052CC] font-mono group"
          >
            <span>EXPLORE ALL SERVICES</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
}
