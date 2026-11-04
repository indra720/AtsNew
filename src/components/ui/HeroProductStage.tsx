import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Phone,
  Building2,
  ShoppingCart,
  Hotel,
} from "lucide-react";
import { REAL_PROJECTS } from "../../data/projectsData";

export const HeroProductStage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 4 Top Flagship Platforms for Hero Spotlight
  const spotlightProjects = [
    {
      ...REAL_PROJECTS[0], // ATS Call Center
      tabLabel: "AI Call Center",
      icon: Phone,
    },
    {
      ...REAL_PROJECTS[1], // BuildPro Construction
      tabLabel: "Construction ERP",
      icon: Building2,
    },
    {
      ...REAL_PROJECTS[2], // ORANZA E-Commerce
      tabLabel: "Multi-Vendor Hub",
      icon: ShoppingCart,
    },
    {
      ...REAL_PROJECTS[4], // Aura Palms Resort
      tabLabel: "Resort & RMS",
      icon: Hotel,
    },
  ];

  const current = spotlightProjects[activeIndex];

  // Auto-cycle through projects every 6s if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % spotlightProjects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, spotlightProjects.length]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full max-w-5xl mx-auto mt-6 sm:mt-8 px-2 sm:px-4"
    >
      {/* Interactive Floating Product Tabs */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 overflow-x-auto py-1 scrollbar-none">
        {spotlightProjects.map((p, idx) => {
          const isActive = idx === activeIndex;
          const Icon = p.icon;
          return (
            <button
              key={p.id}
              onClick={() => setActiveIndex(idx)}
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shrink-0 ${
                isActive
                  ? "bg-white text-[#0066FF] shadow-[0_4px_20px_rgba(0,102,255,0.18)] border border-blue-200 scale-[1.02]"
                  : "bg-white/60 text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent"
              }`}
            >
              <Icon
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-[#0066FF]" : "text-slate-400"}`}
              />
              <span>{p.tabLabel}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Glass Stage & Framed App Window */}
      <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/90 via-white/80 to-blue-50/60 border border-blue-200/90 shadow-[0_20px_60px_rgba(0,102,255,0.12)] backdrop-blur-xl overflow-hidden">
        {/* Subtle Ambient Reflected Light Behind Window */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-blue-400/20 via-cyan-400/15 to-transparent rounded-full blur-2xl pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Top Browser Bezel */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-900 rounded-t-xl sm:rounded-t-2xl border-b border-slate-800 text-[10px] sm:text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 text-[10px] truncate max-w-[200px] sm:max-w-xs">
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">
                  atsglobaltech.in/systems/{current.id}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-blue-900/60 text-[#38BDF8] border border-blue-800/60 text-[10px] font-bold uppercase">
                  {current.badge}
                </span>
                <span className="text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE</span>
                </span>
              </div>
            </div>

            {/* Crystal-Clear High-Res Screenshot Canvas - 100% Visible, No Crop */}
            <div className="relative w-full bg-slate-950 overflow-hidden">
              <Link
                to={`/project-details/${current.id}`}
                className="block relative w-full overflow-hidden cursor-pointer group"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </Link>
            </div>

            {/* Bottom Info Bar Docked Below Screenshot (Zero Overlay Blocking UI) */}
            <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white rounded-b-xl sm:rounded-b-2xl">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] font-bold mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{current.category}</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white font-display">
                  {current.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-1 max-w-xl font-medium hidden sm:block">
                  {current.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {current.metrics[0] && (
                  <div className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-right">
                    <div className="text-sm font-black text-[#38BDF8] font-display">
                      {current.metrics[0].value}
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 uppercase">
                      {current.metrics[0].label}
                    </div>
                  </div>
                )}

                <Link
                  to={`/project-details/${current.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] shadow-md hover:from-[#0052CC] hover:to-[#0047BA] transition"
                >
                  <span>Inspect System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroProductStage;
