import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  Layers,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

export const HeroDashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] sm:max-w-[520px] mx-auto select-none">
      {/* Soft Ambient Background Glow (subtle & elegant) */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/15 via-cyan-300/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Clean Modern Dashboard Frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-blue-100/90 shadow-[0_15px_45px_rgba(0,102,255,0.08)] p-5 sm:p-6 text-slate-800"
      >
        {/* Top App Header */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-bold text-slate-400 ml-2">
              ats-cloud-platform.app
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live System
          </div>
        </div>

        {/* Dashboard Title & Quick Stats Row */}
        <div className="mb-4">
          <div className="text-[11px] font-mono font-bold text-[#0066FF] uppercase tracking-wider mb-1">
            Enterprise Architecture
          </div>
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-display">
            High-Performance Digital Overview
          </h3>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          <div className="p-3 rounded-2xl bg-[#F0F7FF] border border-blue-100">
            <div className="text-[10px] font-mono text-slate-500 font-bold">PROJECTS</div>
            <div className="text-lg sm:text-xl font-black text-[#0066FF] font-display mt-0.5">
              120+
            </div>
            <div className="text-[9px] text-emerald-600 font-bold flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="w-2.5 h-2.5" /> 100% Launch
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#F0F7FF] border border-blue-100">
            <div className="text-[10px] font-mono text-slate-500 font-bold">SPEED</div>
            <div className="text-lg sm:text-xl font-black text-slate-900 font-display mt-0.5">
              99.8%
            </div>
            <div className="text-[9px] text-slate-500 font-bold mt-0.5">Core Vitals</div>
          </div>

          <div className="p-3 rounded-2xl bg-[#F0F7FF] border border-blue-100">
            <div className="text-[10px] font-mono text-slate-500 font-bold">UPTIME</div>
            <div className="text-lg sm:text-xl font-black text-slate-900 font-display mt-0.5">
              99.98%
            </div>
            <div className="text-[9px] text-slate-500 font-bold mt-0.5">SLA Guaranteed</div>
          </div>
        </div>

        {/* Growth Sparkline Chart */}
        <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 mb-4">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-slate-700">Digital Growth Velocity</span>
            <span className="font-mono text-xs font-bold text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded-md">
              +250% Growth
            </span>
          </div>

          {/* SVG Smooth Sparkline */}
          <div className="h-14 w-full">
            <svg className="w-full h-full" viewBox="0 0 100 32" fill="none">
              <path
                d="M 0 26 Q 25 28, 45 14 T 75 16 T 100 6"
                stroke="#0066FF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 0 26 Q 25 28, 45 14 T 75 16 T 100 6 L 100 32 L 0 32 Z"
                fill="url(#sparkline-fill)"
                opacity="0.2"
              />
              <defs>
                <linearGradient id="sparkline-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0066FF" />
                  <stop offset="100%" stopColor="#00D2FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Core Technology Capabilities */}
        <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
            <span className="truncate">React & Next.js Platforms</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
            <span className="truncate">Mobile iOS & Android</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
            <span className="truncate">Cloud & DevOps Auto-Scale</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
            <span className="truncate">Custom Generative AI</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Pill Badge 1: Top-Right */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl border border-blue-200/90 shadow-[0_8px_25px_rgba(0,102,255,0.12)] p-2.5 flex items-center gap-2 text-xs font-bold text-slate-800"
      >
        <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066FF]">
          <Zap className="w-3.5 h-3.5" />
        </div>
        <span>120fps Modern UI/UX</span>
      </motion.div>

      {/* Floating Pill Badge 2: Bottom-Left */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl border border-blue-200/90 shadow-[0_8px_25px_rgba(0,102,255,0.12)] p-2.5 flex items-center gap-2 text-xs font-bold text-slate-800"
      >
        <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <span>Enterprise Security Aligned</span>
      </motion.div>
    </div>
  );
};

export default HeroDashboardMockup;
