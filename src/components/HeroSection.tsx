import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import Card3D from "./ui/Card3D";
import JupiterAIPlanet from "./ui/JupiterAIPlanet";

const slidingWords = ["future", "ideas", "vision", "growth"];

export const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidingWords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col justify-start overflow-hidden pt-2 sm:pt-4 pb-12 px-6 sm:px-10 lg:px-16 xl:px-24 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-[#FFFFFF]">
      {/* Ambient Sky-Blue & Royal Blue Luminous Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-[#BAE6FD]/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00D2FF]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#0066FF]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full">
        {/* Main 2-Column Hero Grid: Left Content, Right 3D Jupiter AI Planet */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-1 sm:pt-3 pb-4">
          
          {/* LEFT COLUMN: Headings, CTAs, and Business Value */}
          <div className="lg:col-span-7 flex flex-col items-start text-left -mt-2 sm:-mt-4">
            
            {/* Glowing Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-[0_4px_16px_rgba(0,102,255,0.08)] backdrop-blur-xl mb-4 group cursor-pointer hover:border-[#0066FF]/40 transition"
            >
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-ping" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-800 group-hover:text-[#0066FF] transition font-display">
                Next-Gen Enterprise AI & Digital Engineering
              </span>
              <ChevronRight className="w-4 h-4 text-[#0066FF] group-hover:translate-x-0.5 transition" />
            </motion.div>

            {/* Display Headline with Kinetic Word Flip */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.1rem] font-black tracking-tight font-display text-[#0A1629] leading-[1.08] mb-4 sm:mb-5"
            >
              Transforming Your{" "}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={slidingWords[index]}
                    initial={{ opacity: 0, y: 35, rotateX: -60 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -35, rotateX: 60 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]"
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
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-6 font-sans"
            >
              <strong className="text-slate-900 font-bold">ATS GLOBAL TECH</strong> crafts intelligent digital ecosystems, 
              scalable cloud architectures, and future-ready enterprise applications that accelerate growth and empower market leaders.
            </motion.p>

            {/* Dual Primary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-6"
            >
              <Link
                to="/lets-create"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_30px_rgba(0,102,255,0.35)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.5)] transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span>Let's Create Together</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                to="/work/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-slate-800 bg-white/95 hover:bg-white border border-blue-200/90 hover:border-[#0066FF]/40 backdrop-blur-xl transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto shadow-sm hover:shadow-md"
              >
                <span>Explore Work</span>
                <ChevronRight className="w-4 h-4 text-[#0066FF]" />
              </Link>
            </motion.div>

            {/* Micro Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-2 border-t border-blue-100/80 text-xs font-mono text-slate-500"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>ISO & SOC-2 Aligned</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>Zero Downtime Migration</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>24/7 Enterprise Support</span>
              </span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 3D Jupiter AI Planet with Auto-Rotating Orbital Rings */}
          <div className="lg:col-span-5 flex items-center justify-center relative w-full -mt-4 sm:-mt-8 lg:-mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <JupiterAIPlanet />
            </motion.div>
          </div>
        </div>

        {/* 3D Floating Bento Feature Telemetry Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left mt-10"
        >
          <Card3D intensity={10} className="cloud-card p-6 rounded-3xl">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-inner">
                <TrendingUp className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#EBF5FF] border border-blue-200 text-[#0066FF]">
                PROVEN
              </span>
            </div>
            <div className="text-3xl font-black text-slate-900 font-display mb-1">500+</div>
            <p className="text-xs text-slate-600 font-medium leading-snug">Enterprise Projects Delivered Globally</p>
          </Card3D>

          <Card3D intensity={10} className="cloud-card p-6 rounded-3xl">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-inner">
                <Zap className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#EBF5FF] border border-blue-200 text-[#0066FF]">
                UPTIME
              </span>
            </div>
            <div className="text-3xl font-black text-slate-900 font-display mb-1">99.99%</div>
            <p className="text-xs text-slate-600 font-medium leading-snug">Cloud Availability & High Scalability</p>
          </Card3D>

          <Card3D intensity={10} className="cloud-card p-6 rounded-3xl">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-inner">
                <Cpu className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#EBF5FF] border border-blue-200 text-[#0066FF]">
                INNOVATION
              </span>
            </div>
            <div className="text-3xl font-black text-slate-900 font-display mb-1">AI-Native</div>
            <p className="text-xs text-slate-600 font-medium leading-snug">Machine Learning & Automation Pipelines</p>
          </Card3D>

          <Card3D intensity={10} className="cloud-card p-6 rounded-3xl">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-inner">
                <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#EBF5FF] border border-blue-200 text-[#0066FF]">
                SECURITY
              </span>
            </div>
            <div className="text-3xl font-black text-slate-900 font-display mb-1">Zero-Trust</div>
            <p className="text-xs text-slate-600 font-medium leading-snug">Enterprise Bank-Grade Data Protection</p>
          </Card3D>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
