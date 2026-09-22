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

      {/* 🌐 THE 3D GLOBAL AI NEURAL SPHERE */}
      <div className="relative w-[210px] sm:w-[260px] lg:w-[310px] h-[210px] sm:h-[260px] lg:h-[310px] rounded-full overflow-hidden shadow-[inset_-22px_-22px_55px_rgba(0,18,50,0.88),0_18px_60px_rgba(0,102,255,0.38),0_0_40px_rgba(0,210,255,0.28)] border border-white/50 z-0 group">
        
        {/* Base Rich Deep Sapphire & Cyan Gradient Surface */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D2FF] via-[#0052CC] to-[#040E26]" />

        {/* 3D Curved Digital Wireframe Mesh & Data Nodes SVG */}
        <svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full opacity-80"
        >
          <defs>
            <linearGradient id="globeLineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="pulseGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Spherical Latitude Isometric Curves */}
          <path d="M 45,65 Q 150,90 255,65" fill="none" stroke="url(#globeLineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 18,105 Q 150,135 282,105" fill="none" stroke="url(#globeLineGrad)" strokeWidth="1.8" />
          <path d="M 2,150 Q 150,180 298,150" fill="none" stroke="url(#globeLineGrad)" strokeWidth="2.2" />
          <path d="M 18,195 Q 150,225 282,195" fill="none" stroke="url(#globeLineGrad)" strokeWidth="1.8" />
          <path d="M 45,235 Q 150,260 255,235" fill="none" stroke="url(#globeLineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Spherical Longitude Curves */}
          <path d="M 150,2 Q 70,150 150,298" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" />
          <path d="M 150,2 Q 110,150 150,298" fill="none" stroke="rgba(0,210,255,0.4)" strokeWidth="1.2" strokeDasharray="4 4" />
          <path d="M 150,2 Q 150,150 150,298" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" />
          <path d="M 150,2 Q 190,150 150,298" fill="none" stroke="rgba(0,210,255,0.4)" strokeWidth="1.2" strokeDasharray="4 4" />
          <path d="M 150,2 Q 230,150 150,298" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" />

          {/* Global Network Hub Nodes */}
          <circle cx="85" cy="118" r="4" fill="#FFFFFF" />
          <circle cx="85" cy="118" r="8" fill="none" stroke="#00D2FF" strokeWidth="1.5" opacity="0.8" />
          
          <circle cx="150" cy="165" r="4.5" fill="#FFFFFF" />
          <circle cx="150" cy="165" r="10" fill="none" stroke="#00D2FF" strokeWidth="1.5" opacity="0.9" />

          <circle cx="215" cy="122" r="3.5" fill="#FFFFFF" />
          <circle cx="215" cy="122" r="7" fill="none" stroke="#00D2FF" strokeWidth="1.2" opacity="0.7" />

          <circle cx="115" cy="208" r="3.5" fill="#FFFFFF" />
          <circle cx="190" cy="204" r="3" fill="#FFFFFF" />

          {/* Interconnecting Data Lines */}
          <line x1="85" y1="118" x2="150" y2="165" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="150" y1="165" x2="215" y2="122" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="85" y1="118" x2="115" y2="208" stroke="rgba(0,210,255,0.6)" strokeWidth="1.2" />
          <line x1="150" y1="165" x2="190" y2="204" stroke="rgba(0,210,255,0.6)" strokeWidth="1.2" />
        </svg>

        {/* 🌀 THE CENTRAL AI NEURAL CORE (High-Precision Gyro Core) */}
        <div className="absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-20 sm:w-24 lg:w-28 h-14 sm:h-16 lg:h-18 rounded-[50%] bg-gradient-to-r from-white/90 via-[#00D2FF]/80 to-[#0066FF] shadow-[0_0_30px_#00D2FF,inset_0_0_18px_#FFFFFF] flex items-center justify-center rotate-[-10deg]">
          {/* Rotating High-Tech Core Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="w-14 sm:w-16 lg:w-18 h-9 sm:h-11 lg:h-12 rounded-[50%] border-2 border-white/95 border-t-[#0066FF] border-b-[#00D2FF] flex items-center justify-center shadow-inner"
          >
            <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white shadow-[0_0_14px_#FFFFFF] flex items-center justify-center">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#0066FF] animate-ping" />
            </div>
          </motion.div>
        </div>

        {/* Spherical 3D Lighting & Specular Glass Reflection */}
        {/* 1. Top-Left Luminous Specular Sun Glare */}
        <div className="absolute top-0 left-0 w-full h-full bg-radial from-white/70 via-transparent to-transparent opacity-85 pointer-events-none" />
        
        {/* 2. Deep Spherical Atmosphere Shadow (Bottom-Right Depth) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#020A1E]/85 via-transparent to-transparent pointer-events-none" />
        
        {/* 3. Luminous Outer Rim Glow */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_35px_rgba(255,255,255,0.65)] pointer-events-none" />
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
