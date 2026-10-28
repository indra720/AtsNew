import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";
import HeroInteractiveCyberGrid from "./ui/HeroInteractiveCyberGrid";
import HeroWaveNodes3D from "./ui/HeroWaveNodes3D";
import GsapRollingText from "./ui/GsapRollingText";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-4 sm:pt-6 pb-6 sm:pb-8 bg-gradient-to-b from-[#FFFFFF] via-[#F4F9FF] to-[#EAF4FF] min-h-[80vh] lg:min-h-[85vh] flex flex-col justify-center">
      {/* ============================================================ */}
      {/* 1. INTERACTIVE CYBER GRID (Desktop & Tablet only: md/lg/xl) */}
      {/* Hidden on mobile to keep mobile screen clean & zero clutter */}
      {/* ============================================================ */}
      <div className="hidden md:block">
        <HeroInteractiveCyberGrid />
        <HeroWaveNodes3D />
      </div>

      {/* Ambient Soft Glow Background (Clean & Particle-Free on Mobile) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-b from-blue-200/40 via-cyan-100/25 to-transparent rounded-full blur-[100px] sm:blur-[130px]" />
        <div className="absolute top-1/2 -right-24 w-[350px] sm:w-[500px] h-[300px] bg-blue-100/40 rounded-full blur-[90px]" />
        <div className="absolute -bottom-10 -left-20 w-[350px] sm:w-[500px] h-[300px] bg-indigo-100/35 rounded-full blur-[90px]" />
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN CENTERED HERO CONTENT (High-Contrast & Clean) */}
      {/* ============================================================ */}
      <div className="relative z-10 w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1600px] mx-auto px-[3px] sm:px-4 lg:px-6 my-auto flex flex-col items-center text-center">
        {/* Top Luxury Badge (Shifted down 10px on mobile for perfect spacing) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-blue-300 shadow-sm mt-[10px] sm:mt-0 mb-4 sm:mb-5 group cursor-pointer hover:border-[#0066FF] transition max-w-full"
        >
          <span className="px-2.5 py-0.5 rounded-full bg-[#0066FF] text-white text-[11px] font-extrabold font-sans shadow-xs shrink-0">
            ATS 3.0
          </span>
          <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0066FF] transition font-sans truncate">
            Next-Gen Enterprise AI & Engineering
          </span>
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0066FF] group-hover:translate-x-0.5 transition shrink-0" />
        </motion.div>

        {/* Display Headline with High-Contrast GSAP 3D Rolling Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[4rem] font-black text-slate-950 leading-[1.2] sm:leading-[1.12] mb-4 sm:mb-5 tracking-tight font-display text-center w-full"
        >
          <span className="inline text-slate-950">Transforming Your</span>{" "}
          <span className="inline-block text-[#0038A8]">
            <GsapRollingText
              words={["Ideas", "Visions", "Innovations", "Products", "Future"]}
            />
          </span>{" "}
          <span className="inline text-slate-950">Into Digital Reality.</span>
          <span className="inline-block w-1.5 sm:w-2 h-5 sm:h-9 lg:h-12 ml-1.5 sm:ml-2 align-middle bg-[#0052CC] rounded-full animate-pulse shadow-[0_0_10px_#0052CC]" />
        </motion.h1>

        {/* High-Contrast Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-800 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-7 font-sans text-center px-1 font-medium"
        >
          <strong className="text-slate-950 font-black">ATS GLOBAL TECH</strong>{" "}
          crafts intelligent digital ecosystems, scalable cloud architectures,
          and future-ready enterprise applications that accelerate growth and
          empower market leaders.
        </motion.p>

        {/* Dual Action Buttons (High Contrast & Clear Hierarchy) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-6 sm:mb-7"
        >
          <Link
            to="/lets-create"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-black text-white bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#0047BA] hover:from-[#0047BA] hover:to-[#0038A8] shadow-[0_10px_25px_rgba(0,102,255,0.4)] hover:shadow-[0_14px_32px_rgba(0,102,255,0.5)] transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto min-h-[48px]"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
            <Sparkles className="w-4 h-4 text-white" />
            <span>Let's Create Together</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            to="/work/projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-[#0066FF] shadow-xs hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto min-h-[48px]"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4 text-[#0066FF]" />
          </Link>
        </motion.div>

        {/* Social Proof Rating (High Contrast) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-5 sm:mb-6"
        >
          <div className="flex -space-x-2 shrink-0">
            <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-tr from-cyan-600 to-[#0066FF] flex items-center justify-center text-white text-[9px] font-black shadow-xs">
              JD
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-[9px] font-black shadow-xs">
              SK
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-tr from-slate-800 to-slate-950 flex items-center justify-center text-white text-[9px] font-black shadow-xs">
              MI
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white bg-[#0052CC] flex items-center justify-center text-white text-[9px] font-black shadow-xs">
              120+
            </div>
          </div>

          <div className="flex items-center gap-2 text-left">
            <span className="text-amber-500 text-sm tracking-tight font-black">
              ★★★★★
            </span>
            <span className="text-sm font-black text-slate-950 font-sans">
              4.9/5
            </span>
            <span className="text-slate-400 font-bold">|</span>
            <span className="text-xs font-bold text-slate-800">
              Enterprise Client Rating
            </span>
          </div>
        </motion.div>

        {/* Trust Indicators Row (Deep Contrast & Sharp Text) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 sm:gap-8 text-xs sm:text-sm text-slate-900 font-bold pt-1 pb-3"
        >
          <span className="flex items-center gap-1.5 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#0066FF] stroke-[2.5]" />
            <span>ISO & SOC-2 Aligned</span>
          </span>
          <span className="flex items-center gap-1.5 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#0066FF] stroke-[2.5]" />
            <span>Zero Downtime Migration</span>
          </span>
          <span className="flex items-center gap-1.5 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#0066FF] stroke-[2.5]" />
            <span>24/7 Enterprise Support</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
