import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import HeroIsometricStudioMockup from "./ui/HeroIsometricStudioMockup";

const slidingWords = ["ideas", "future", "vision", "growth"];

export const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidingWords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col justify-start overflow-hidden pt-2 sm:pt-4 pb-14 px-6 sm:px-10 lg:px-16 xl:px-24 bg-gradient-to-b from-[#EBF5FF]/90 via-[#F3F8FF] to-[#FFFFFF]">
      
      {/* Soft Ambient Sky-Blue & Royal Blue Luminous Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-[#BAE6FD]/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00D2FF]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#0066FF]/12 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Floating Translucent Ambient Spheres in Background (Matching image) */}
      <div className="absolute top-12 left-1/3 w-8 h-8 rounded-full bg-gradient-to-tr from-white to-sky-200/50 shadow-md border border-white/80 pointer-events-none opacity-80" />
      <div className="absolute bottom-16 left-1/4 w-12 h-12 rounded-full bg-gradient-to-tr from-white to-blue-200/40 shadow-lg border border-white/60 pointer-events-none opacity-70 blur-[1px]" />
      <div className="absolute top-1/4 right-8 w-14 h-14 rounded-full bg-gradient-to-tr from-white to-sky-200/40 shadow-lg border border-white/60 pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full">
        {/* Main 2-Column Hero Grid: Left Content, Right 3D Isometric Studio Platform */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center pt-2 sm:pt-4 pb-6">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Badge, Headline, Sub-headline, CTAs, Social Proof */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left -mt-2 sm:-mt-4">
            
            {/* Glowing Top Badge (ATS 3.0 Next-Gen Enterprise AI & Digital Engineering >) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/95 border border-blue-200/90 shadow-[0_4px_16px_rgba(0,102,255,0.08)] backdrop-blur-xl mb-5 group cursor-pointer hover:border-[#0066FF]/40 transition"
            >
              <span className="px-2.5 py-0.5 rounded-full bg-[#0066FF] text-white text-xs font-bold font-sans shadow-xs">
                ATS 3.0
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0066FF] transition font-sans">
                Next-Gen Enterprise AI & Digital Engineering
              </span>
              <ChevronRight className="w-4 h-4 text-[#0066FF] group-hover:translate-x-0.5 transition" />
            </motion.div>

            {/* Display Headline with High-Contrast Serif Font (Matching Image) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.2rem] font-bold text-[#0A1629] leading-[1.12] mb-5 tracking-tight font-serif"
            >
              Transforming Your{" "}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={slidingWords[index]}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#00D2FF]"
                  >
                    {slidingWords[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              Into Digital Reality.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed mb-6 font-sans"
            >
              <strong className="text-slate-900 font-bold">ATS GLOBAL TECH</strong> crafts intelligent digital ecosystems, 
              scalable cloud architectures, and future-ready enterprise applications that accelerate growth and empower market leaders.
            </motion.p>

            {/* Dual Action Buttons (Matching Image: Let's Create Together & Explore Work) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-6"
            >
              <Link
                to="/lets-create"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold text-white bg-[#0066FF] hover:bg-[#0052CC] shadow-[0_10px_25px_rgba(0,102,255,0.38)] hover:shadow-[0_15px_35px_rgba(0,102,255,0.5)] transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span>Let's Create Together</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                to="/work/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#0066FF]/40 shadow-xs hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4 text-[#0066FF]" />
              </Link>
            </motion.div>

            {/* Social Proof Rating Bar (JD, SK, MI, 120+ | ★★★★★ 4.9/5) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-tr from-[#00D2FF] to-[#0066FF] flex items-center justify-center text-white text-[10px] font-bold shadow-xs">
                  JD
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-bold shadow-xs">
                  SK
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-tr from-slate-700 to-slate-900 flex items-center justify-center text-white text-[10px] font-bold shadow-xs">
                  MI
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#0066FF] flex items-center justify-center text-white text-[9px] font-bold shadow-xs">
                  120+
                </div>
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 text-xs">★★★★★</span>
                  <span className="text-xs font-bold text-slate-900 font-sans">4.9/5</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Enterprise Client Rating</span>
              </div>
            </motion.div>

            {/* Trust Indicators (ISO & SOC-2, Zero Downtime, 24/7 Support) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 text-xs text-slate-600 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>ISO & SOC-2 Aligned</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>Zero Downtime Migration</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>24/7 Enterprise Support</span>
              </span>
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: 3D Isometric Cyber-Cube Platform & 4 Service Cards */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative w-full mt-4 lg:mt-0">
            <HeroIsometricStudioMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
