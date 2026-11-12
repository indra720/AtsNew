import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Sliders,
  Zap,
  ShieldAlert,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Clock,
  ArrowRight,
  Server,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

export const EnterpriseModernizationSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const COMPARISON_ITEMS = [
    {
      metric: "Global Page Load & Response Latency",
      before: "4.8s (Laggy SQL Queries & Server Bloat)",
      after: "0.38s (Sub-second Edge Caching & CDN)",
      beforeIcon: Clock,
      afterIcon: Zap,
    },
    {
      metric: "Infrastructure Availability & Reliability",
      before: "94.5% (Frequent Unplanned Outages & Drops)",
      after: "99.99% High Availability SLA Multi-Region",
      beforeIcon: AlertTriangle,
      afterIcon: CheckCircle2,
    },
    {
      metric: "Monthly Cloud Infrastructure Spending",
      before: "$19,200/mo (Overprovisioned Idle Compute)",
      after: "38% Net Reduction (Autoscaling Cloud)",
      beforeIcon: TrendingDown,
      afterIcon: TrendingUp,
    },
    {
      metric: "Enterprise Workflow & Data Visibility",
      before: "Disconnected Excel Silos & Manual Entry",
      after: "Unified AI-Copilot & Real-Time Telemetry",
      beforeIcon: Server,
      afterIcon: Cpu,
    },
    {
      metric: "Security, Compliance & Vulnerability",
      before: "Outdated Dependencies & Unaudited Code",
      after: "SOC-2 & ISO 27001 Aligned Zero-Trust Architecture",
      beforeIcon: ShieldAlert,
      afterIcon: ShieldCheck,
    },
  ];

  return (
    <section className="relative py-14 sm:py-18 lg:py-22 bg-gradient-to-b from-[#FFFFFF] via-[#F0F7FF] to-[#E6F0FA] text-slate-900 overflow-hidden border-t border-b border-blue-100">
      {/* Ambient Cyber Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#38BDF8]/15 via-[#0066FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[11px] sm:text-xs font-semibold tracking-wider text-[#0066FF] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>ENTERPRISE TRANSFORMATION BENCHMARK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display mb-3">
            Legacy Bottlenecks{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              vs. Future-Ready ATS
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Drag the comparison slider below to see how ATS Global Tech transforms brittle legacy tech stacks into high-performance, cost-efficient cloud architectures.
          </p>

          {/* Quick Preset Buttons */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-xs mt-4">
            <button
              onClick={() => setSliderPosition(15)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                sliderPosition < 30
                  ? "bg-rose-50 text-rose-600 border border-rose-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Inspect Legacy
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                sliderPosition >= 30 && sliderPosition <= 70
                  ? "bg-blue-50 text-[#0066FF] border border-blue-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              50/50 Split
            </button>
            <button
              onClick={() => setSliderPosition(85)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                sliderPosition > 70
                  ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Inspect ATS
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE COMPARISON CONTAINER                             */}
        {/* ============================================================ */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-[0_20px_60px_rgba(0,102,255,0.12)] select-none cursor-ew-resize bg-slate-900 min-h-[460px] sm:min-h-[420px]"
        >
          {/* -------------------------------------------------- */}
          {/* LAYER 1: AFTER ATS (RIGHT SIDE - FULL BACKGROUND)  */}
          {/* -------------------------------------------------- */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#061426] via-[#0A1D36] to-[#040C1A] text-white p-5 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-end mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-xs font-bold font-mono tracking-wide">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>AFTER ATS &bull; FUTURE-READY CLOUD</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-xl ml-auto text-right">
              {COMPARISON_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-blue-950/40 border border-blue-400/20 p-3 sm:p-3.5 rounded-2xl backdrop-blur-sm shadow-xs"
                >
                  <p className="text-[10px] sm:text-[11px] text-cyan-300 font-mono font-medium mb-1 uppercase tracking-wider">
                    {item.metric}
                  </p>
                  <div className="flex items-center justify-end gap-2 text-xs sm:text-sm font-bold text-white">
                    <span>{item.after}</span>
                    <item.afterIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-end gap-2 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered with React 19, TypeScript, Next-Gen AI & AWS Cloud</span>
            </div>
          </div>

          {/* -------------------------------------------------- */}
          {/* LAYER 2: BEFORE ATS (LEFT SIDE - CLIPPED OVERLAY) */}
          {/* -------------------------------------------------- */}
          <div
            style={{ width: `${sliderPosition}%` }}
            className="absolute inset-y-0 left-0 bg-gradient-to-br from-[#1E1218] via-[#2A1620] to-[#170E13] text-white p-5 sm:p-8 flex flex-col justify-between overflow-hidden border-r-2 border-white/60 shadow-[5px_0_35px_rgba(0,0,0,0.5)]"
          >
            <div className="w-[100vw] max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1500px]">
              <div className="flex items-center justify-start mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-400 text-xs font-bold font-mono tracking-wide">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>BEFORE ATS &bull; LEGACY BOTTLENECKS</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-xl text-left">
                {COMPARISON_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-rose-950/30 border border-rose-500/20 p-3 sm:p-3.5 rounded-2xl backdrop-blur-sm shadow-xs"
                  >
                    <p className="text-[10px] sm:text-[11px] text-rose-300 font-mono font-medium mb-1 uppercase tracking-wider">
                      {item.metric}
                    </p>
                    <div className="flex items-center justify-start gap-2 text-xs sm:text-sm font-bold text-rose-100">
                      <item.beforeIcon className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{item.before}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-start gap-2 text-xs font-mono text-rose-300">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Legacy Debt: Slow manual pipelines, security exposure & high churn</span>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------- */}
          {/* DRAGGABLE HANDLE DIVIDER                           */}
          {/* -------------------------------------------------- */}
          <div
            style={{ left: `${sliderPosition}%` }}
            className="absolute inset-y-0 -translate-x-1/2 flex items-center justify-center pointer-events-none z-30"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#0066FF] shadow-[0_0_25px_rgba(0,102,255,0.7)] border-2 border-[#0066FF] flex items-center justify-center font-bold text-xs pointer-events-auto cursor-ew-resize">
              <Sliders className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-3xl bg-white border border-blue-100 shadow-[0_10px_30px_rgba(0,102,255,0.06)]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 font-display">
                Ready to Upgrade Your Enterprise Stack?
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                Our senior cloud architects analyze your current tech debt and deliver a 14-day migration blueprint.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0040A8] hover:to-[#0052CC] text-white text-xs sm:text-sm font-bold shadow-md transition shrink-0"
          >
            <span>Request Free Architecture Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseModernizationSlider;
