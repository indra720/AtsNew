import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import HeroWaveFlowCanvas3D from "./ui/HeroWaveFlowCanvas3D";
import HeroWaveNodes3D from "./ui/HeroWaveNodes3D";
import GsapRollingText from "./ui/GsapRollingText";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-2 sm:pt-4 pb-4 sm:pb-6 bg-gradient-to-b from-[#FFFFFF] via-[#F4F9FF] to-[#EAF4FF] min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between">
      
      {/* ============================================================ */}
      {/* 1. FULL-VIEWPORT 3D PARTICLE WAVE TERRAIN CANVAS (z-0) */}
      {/* ============================================================ */}
      <HeroWaveFlowCanvas3D />

      {/* Floating 3D Service Nodes, 142.5K+ Card, Scroll Indicator & Far-Right Typography (z-20) */}
      <HeroWaveNodes3D />

      {/* Ambient Multi-Spectrum Volumetric Lights (Centered) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#0066FF]/14 via-[#00D2FF]/16 to-[#38BDF8]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[650px] h-96 bg-[#0066FF]/10 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* ============================================================ */}
      {/* 2. MAIN CENTERED HERO CONTENT (Full Width Across Hero) */}
      {/* ============================================================ */}
      <div className="relative z-10 w-full max-w-[96%] xl:max-w-[94%] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 my-auto flex flex-col items-center text-center">
        
        {/* Top Luxury Holographic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 border border-blue-200/90 dark:border-blue-500/40 shadow-[0_4px_20px_rgba(0,102,255,0.08)] backdrop-blur-xl mb-4 group cursor-pointer hover:border-[#0066FF]/50 transition"
        >
          <span className="px-2.5 py-0.5 rounded-full bg-[#0066FF] text-white text-[11px] font-bold font-sans shadow-xs">
            ATS 3.0
          </span>
          <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#0066FF] transition font-sans">
            Next-Gen Enterprise AI & Digital Engineering
          </span>
          <ChevronRight className="w-4 h-4 text-[#0066FF] group-hover:translate-x-0.5 transition" />
        </motion.div>

        {/* Display Headline with GSAP 3D Rolling Text (Full Width Spanning) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] 2xl:text-[4.4rem] font-bold text-[#0A1629] dark:text-white leading-[1.10] mb-5 tracking-tight font-editorial text-center w-full"
        >
          Transforming Your{" "}
          <GsapRollingText
            words={["Ideas", "Visions", "Innovations", "Products", "Future"]}
          />{" "}
          Into Digital Reality.
          <span className="inline-block w-1.5 sm:w-2 h-8 sm:h-12 lg:h-16 ml-2 sm:ml-3 align-middle bg-[#0066FF] rounded-full animate-pulse shadow-[0_0_12px_#0066FF]" />
        </motion.h1>

        {/* Supporting Paragraph (Spacious & Balanced) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-6 font-sans text-center"
        >
          <strong className="text-slate-900 dark:text-white font-semibold">ATS GLOBAL TECH</strong> crafts intelligent digital ecosystems, 
          scalable cloud architectures, and future-ready enterprise applications that accelerate growth and empower market leaders.
        </motion.p>

        {/* Dual Action Buttons (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-6"
        >
          <Link
            to="/lets-create"
            className="group relative overflow-hidden inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_25px_rgba(0,102,255,0.35)] hover:shadow-[0_14px_32px_rgba(0,102,255,0.45)] transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
            <Sparkles className="w-4 h-4 text-white" />
            <span>Let's Create Together</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            to="/work/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 bg-white/95 dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200/90 dark:border-slate-700 hover:border-[#0066FF]/40 shadow-xs hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4 text-[#0066FF]" />
          </Link>
        </motion.div>

        {/* Social Proof Rating (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-gradient-to-tr from-[#00D2FF] to-[#0066FF] flex items-center justify-center text-white text-[9px] font-bold shadow-xs">
              JD
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[9px] font-bold shadow-xs">
              SK
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-gradient-to-tr from-slate-700 to-slate-900 flex items-center justify-center text-white text-[9px] font-bold shadow-xs">
              MI
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-[#0066FF] flex items-center justify-center text-white text-[9px] font-bold shadow-xs">
              120+
            </div>
          </div>

          <div className="flex items-center gap-2 text-left">
            <span className="text-amber-400 text-xs">★★★★★</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white font-sans">4.9/5</span>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Enterprise Client Rating</span>
          </div>
        </motion.div>

        {/* Trust Indicators Row (Centered) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium pt-1"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>ISO & SOC-2 Aligned</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>Zero Downtime Migration</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>24/7 Enterprise Support</span>
          </span>
        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;
