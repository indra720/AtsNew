import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Shield, Zap, Globe, Orbit } from "lucide-react";

export default function JupiterAIPlanet() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none scale-[0.76] sm:scale-[0.88] lg:scale-100 origin-center transition-transform my-[-20px] sm:my-0">
      {/* Outer Atmospheric Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/25 via-[#00D2FF]/20 to-[#38BDF8]/10 rounded-full blur-[70px] sm:blur-[90px] pointer-events-none" />
      <div className="absolute w-[240px] sm:w-[300px] lg:w-[360px] h-[240px] sm:h-[300px] lg:h-[360px] bg-[#0066FF]/20 rounded-full blur-[50px] sm:blur-[60px] pointer-events-none" />

      {/* Orbit Track 1: Outer Tilted Counter-Clockwise Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute w-[330px] sm:w-[400px] lg:w-[460px] h-[330px] sm:h-[400px] lg:h-[460px] rounded-full border border-dashed border-[#0066FF]/35 pointer-events-none"
        style={{
          transform: "rotateX(70deg) rotateY(-18deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Orbiting Satellite Node 1 */}
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white shadow-[0_0_15px_#00D2FF] border-2 border-[#00D2FF] flex items-center justify-center">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#0066FF] animate-ping" />
          </div>
        </div>
      </motion.div>

      {/* Orbit Track 2: Middle Glowing Cyan Orbit with Continuous Clockwise Spin */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] sm:w-[340px] lg:w-[400px] h-[280px] sm:h-[340px] lg:h-[400px] rounded-full border border-dotted border-[#00D2FF]/55 pointer-events-none"
        style={{
          transform: "rotateX(62deg) rotateY(25deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Orbiting Satellite Node 2 */}
        <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 flex items-center gap-1.5">
          <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white shadow-[0_0_18px_#0066FF] border-2 border-[#0066FF] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
          </div>
        </div>
      </motion.div>

      {/* Orbit Track 3: Equatorial Saturn/Jupiter-Style Wide Glowing Ring System */}
      <div
        className="absolute w-[340px] sm:w-[410px] lg:w-[480px] h-[340px] sm:h-[410px] lg:h-[480px] pointer-events-none z-10 flex items-center justify-center"
        style={{
          transform: "rotateX(73deg) rotateY(-12deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Broad Semi-Translucent Ring Disc */}
        <div className="absolute inset-3 sm:inset-4 rounded-full border-[10px] sm:border-[14px] border-[#00D2FF]/20 shadow-[0_0_30px_rgba(0,210,255,0.4)]" />
        <div className="absolute inset-7 sm:inset-10 rounded-full border-[4px] sm:border-[6px] border-[#0066FF]/25 shadow-[0_0_20px_rgba(0,102,255,0.3)]" />
        
        {/* Rotating Energy Ring Dashes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute inset-1.5 sm:inset-2 rounded-full border border-dashed sm:border-2 border-white/80"
        />
      </div>

      {/* 🪐 THE JUPITER AI PLANET SPHERE */}
      <div className="relative w-[210px] sm:w-[260px] lg:w-[310px] h-[210px] sm:h-[260px] lg:h-[310px] rounded-full overflow-hidden shadow-[inset_-22px_-22px_55px_rgba(0,20,60,0.85),0_15px_50px_rgba(0,102,255,0.35),0_0_35px_rgba(0,210,255,0.25)] border border-white/40 z-0">
        
        {/* Base Gradient Surface */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D2FF] via-[#0066FF] to-[#051336]" />

        {/* Jupiter Banded Atmosphere SVG Layer */}
        <svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full opacity-90 mix-blend-overlay"
        >
          <defs>
            <linearGradient id="bandGrad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="bandGrad2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0040C1" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0066FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0040C1" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="bandGrad3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Jupiter's Signature Cloud Bands */}
          <rect y="15" width="300" height="18" fill="url(#bandGrad1)" />
          <rect y="38" width="300" height="24" fill="url(#bandGrad2)" />
          <rect y="68" width="300" height="16" fill="url(#bandGrad3)" />
          <rect y="90" width="300" height="28" fill="url(#bandGrad1)" />
          <rect y="124" width="300" height="22" fill="url(#bandGrad2)" />
          <rect y="152" width="300" height="26" fill="url(#bandGrad3)" />
          <rect y="184" width="300" height="20" fill="url(#bandGrad1)" />
          <rect y="210" width="300" height="30" fill="url(#bandGrad2)" />
          <rect y="246" width="300" height="20" fill="url(#bandGrad3)" />
          <rect y="272" width="300" height="18" fill="url(#bandGrad1)" />

          {/* Fluid Dynamic Atmospheric Swirls */}
          <path
            d="M-20,105 Q70,95 150,110 T320,100"
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="5"
          />
          <path
            d="M-20,140 Q80,150 160,135 T320,145"
            fill="none"
            stroke="rgba(0,210,255,0.8)"
            strokeWidth="4"
          />
          <path
            d="M-20,175 Q90,165 170,180 T320,170"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="4.5"
          />
          <path
            d="M-20,205 Q60,215 140,200 T320,210"
            fill="none"
            stroke="rgba(0,210,255,0.7)"
            strokeWidth="3.5"
          />
        </svg>

        {/* 🌀 THE GREAT AI NEURAL VORTEX (Jupiter's Great Spot - Reimagined as AI Core) */}
        <div className="absolute top-[52%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-18 sm:w-22 lg:w-24 h-12 sm:h-15 lg:h-16 rounded-[50%] bg-gradient-to-r from-white via-[#00D2FF] to-[#0066FF] shadow-[0_0_25px_#00D2FF,inset_0_0_15px_#FFFFFF] flex items-center justify-center rotate-[-12deg]">
          {/* Inner Swirling Core */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="w-12 sm:w-14 lg:w-16 h-8 sm:h-9 lg:h-10 rounded-[50%] border-2 border-white/90 border-t-[#0066FF] flex items-center justify-center shadow-inner"
          >
            <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white shadow-[0_0_12px_#FFFFFF] flex items-center justify-center">
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#0066FF] animate-ping" />
            </div>
          </motion.div>
        </div>

        {/* Spherical 3D Lighting & Shadow Overlays */}
        {/* 1. Top-Left Luminous Specular Sun Reflection */}
        <div className="absolute top-0 left-0 w-full h-full bg-radial from-white/60 via-transparent to-transparent opacity-80 pointer-events-none" />
        
        {/* 2. Crescent Atmosphere Shadow (Right & Bottom Depth) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#020A1E]/85 via-transparent to-transparent pointer-events-none" />
        
        {/* 3. Rim Glow */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(255,255,255,0.6)] pointer-events-none" />
      </div>

      {/* 🚀 FLOATING AI TELEMETRY BADGES AROUND THE PLANET */}
      
      {/* Badge 1: Top Left - "Neural AI Core" */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1 left-2 sm:top-4 sm:-left-4 z-20"
      >
        <div className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-blue-200/90 shadow-[0_8px_25px_rgba(0,102,255,0.15)] flex items-center gap-2 sm:gap-2.5">
          <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-xl bg-gradient-to-tr from-[#0052CC] to-[#0066FF] flex items-center justify-center text-white shadow-xs">
            <Cpu className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
          </div>
          <div>
            <p className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">AI Engine</p>
            <p className="text-[11px] sm:text-xs font-bold font-display text-slate-900">Neural Core v5.2</p>
          </div>
        </div>
      </motion.div>

      {/* Badge 2: Bottom Right - "Autonomous Grid" */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-3 right-2 sm:bottom-6 sm:-right-4 z-20"
      >
        <div className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-blue-200/90 shadow-[0_8px_25px_rgba(0,102,255,0.15)] flex items-center gap-2 sm:gap-2.5">
          <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-xl bg-gradient-to-tr from-[#00D2FF] to-[#0066FF] flex items-center justify-center text-white shadow-xs">
            <Zap className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
          </div>
          <div>
            <p className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Autonomous</p>
            <p className="text-[11px] sm:text-xs font-bold font-display text-slate-900">99.98% High Precision</p>
          </div>
        </div>
      </motion.div>

      {/* Badge 3: Center Bottom - "Quantum Shield" */}
      <motion.div
        animate={{ scale: [0.97, 1.03, 0.97] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1 sm:-bottom-2 left-6 sm:left-12 z-20"
      >
        <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-blue-200 shadow-md flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#0066FF]">
            Zero-Trust Mesh Active
          </span>
        </div>
      </motion.div>

      {/* Celestial Sparkles */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute top-10 right-10 text-[#00D2FF] pointer-events-none"
      >
        <Sparkles className="w-5 sm:w-6 h-5 sm:h-6" />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute bottom-16 left-4 text-[#0066FF] pointer-events-none"
      >
        <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />
      </motion.div>
    </div>
  );
}
