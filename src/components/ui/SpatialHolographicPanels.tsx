import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Cloud,
  Code2,
  Database,
} from "lucide-react";

export default function SpatialHolographicPanels() {
  return (
    <>
      {/* ============================================================ */}
      {/* PANEL 1: AI & AUTOMATION (Foreground-Left, Z: +65px) */}
      {/* ============================================================ */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "translateZ(65px)" }}
        className="absolute -top-3 sm:-top-4 -left-2 sm:-left-8 lg:-left-14 z-30 group cursor-default scale-[0.82] sm:scale-95 lg:scale-100 origin-top-left"
      >
        <div className="relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-xl border border-white/95 dark:border-blue-500/30 shadow-[0_12px_32px_rgba(0,102,255,0.16),0_0_0_1px_rgba(0,210,255,0.35)] hover:shadow-[0_18px_40px_rgba(0,102,255,0.28)] transition-all duration-300">
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#00D2FF]/25 to-transparent rounded-tr-2xl pointer-events-none" />

          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-[#0066FF] to-[#00D2FF] flex items-center justify-center text-white shadow-xs shrink-0">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-[#0066FF] uppercase">
                  AI & Automation
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 font-sans tracking-tight">
                Smarter Systems
              </div>
            </div>
          </div>

          <div className="mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-500">
            <span className="text-slate-400">PRECISION</span>
            <span className="font-bold text-[#0066FF]">99.4% NEURAL ACC</span>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* PANEL 2: CLOUD INFRASTRUCTURE (Background-Right, Z: -20px) */}
      {/* ============================================================ */}
      <motion.div
        animate={{
          y: [6, -6, 6],
          rotate: [0.5, -0.5, 0.5],
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
        style={{ transform: "translateZ(-20px) scale(0.92)" }}
        className="absolute top-2 -right-2 sm:-right-8 lg:-right-14 z-10 group cursor-default scale-[0.80] sm:scale-90 lg:scale-95 origin-top-right"
      >
        <div className="relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white/85 dark:bg-slate-900/80 backdrop-blur-lg border border-white/90 dark:border-blue-400/25 shadow-[0_10px_28px_rgba(0,102,255,0.12),0_0_0_1px_rgba(0,102,255,0.22)] hover:shadow-[0_16px_36px_rgba(0,102,255,0.22)] transition-all duration-300">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-[#0066FF] flex items-center justify-center text-white shadow-xs shrink-0">
              <Cloud className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-sky-600 uppercase">
                  Cloud Infrastructure
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 font-sans tracking-tight">
                Scalable & Secure
              </div>
            </div>
          </div>

          <div className="mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-500">
            <span className="text-slate-400">LATENCY</span>
            <span className="font-bold text-sky-600">8.4ms P99 SLA</span>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* PANEL 3: CUSTOM DEVELOPMENT (Mid-Left, Z: +30px) */}
      {/* ============================================================ */}
      <motion.div
        animate={{
          y: [-5, 6, -5],
          rotate: [-0.6, 0.4, -0.6],
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        style={{ transform: "translateZ(30px)" }}
        className="absolute bottom-12 -left-2 sm:-left-8 lg:-right-auto lg:-left-12 z-20 group cursor-default scale-[0.82] sm:scale-95 lg:scale-100 origin-bottom-left"
      >
        <div className="relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-xl border border-white/95 dark:border-blue-500/30 shadow-[0_12px_32px_rgba(0,102,255,0.14),0_0_0_1px_rgba(0,210,255,0.3)] hover:shadow-[0_18px_40px_rgba(0,102,255,0.25)] transition-all duration-300">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-[#00D2FF] flex items-center justify-center text-white shadow-xs shrink-0">
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-indigo-600 uppercase">
                  Custom Development
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 font-sans tracking-tight">
                Build What's Next
              </div>
            </div>
          </div>

          <div className="mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-500">
            <span className="text-slate-400">ENGINE</span>
            <span className="font-bold text-indigo-600">120 FPS FLUID UX</span>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* PANEL 4: DATA & ANALYTICS (Foreground-Right, Z: +50px) */}
      {/* ============================================================ */}
      <motion.div
        animate={{
          y: [5, -5, 5],
          rotate: [0.6, -0.4, 0.6],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.1,
        }}
        style={{ transform: "translateZ(50px)" }}
        className="absolute bottom-8 -right-2 sm:-right-8 lg:-right-14 z-25 group cursor-default scale-[0.82] sm:scale-95 lg:scale-100 origin-bottom-right"
      >
        <div className="relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-xl border border-white/95 dark:border-blue-500/30 shadow-[0_12px_32px_rgba(0,102,255,0.16),0_0_0_1px_rgba(0,210,255,0.35)] hover:shadow-[0_18px_40px_rgba(0,102,255,0.28)] transition-all duration-300">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-[#0052CC] to-[#00D2FF] flex items-center justify-center text-white shadow-xs shrink-0">
              <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-[#0066FF] uppercase">
                  Data & Analytics
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 font-sans tracking-tight">
                Insights That Grow
              </div>
            </div>
          </div>

          <div className="mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-500">
            <span className="text-slate-400">SECURITY</span>
            <span className="font-bold text-[#0066FF]">ZERO-TRUST VAULT</span>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 5. FLOATING TELEMETRY METRIC PILL (Bottom Center, Z: +80px) */}
      {/* ============================================================ */}
      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{ transform: "translateZ(80px)" }}
        className="absolute -bottom-8 sm:-bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto whitespace-nowrap scale-[0.88] sm:scale-100"
      >
        <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-2xl border border-blue-200/90 dark:border-blue-500/40 shadow-[0_12px_32px_rgba(0,102,255,0.18),0_0_0_1px_rgba(0,210,255,0.35)]">
          {/* Cyan Beacon */}
          <div className="relative flex items-center justify-center w-2.5 h-2.5 shrink-0">
            <span className="absolute inline-flex w-full h-full rounded-full bg-[#00D2FF] opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-[#0066FF]" />
          </div>

          {/* Metric Text */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs sm:text-sm font-mono font-bold text-slate-900 tracking-tight">
              142.5k+
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold text-slate-600">
              Systems Deployed
            </span>
          </div>

          {/* Mini Live Cyan Sparkline Chart */}
          <svg className="w-10 sm:w-12 h-3.5 sm:h-4 text-[#00D2FF]" viewBox="0 0 48 16" fill="none">
            <path
              d="M1 12L8 10L16 13L24 7L32 9L40 3L47 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </>
  );
}
