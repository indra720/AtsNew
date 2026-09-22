import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  ShieldCheck,
  Sparkles,
  Server,
  Activity,
  Globe2,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function HeroAIStack3D() {
  return (
    <div className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[620px] aspect-square mx-auto flex items-center justify-center select-none py-6">
      {/* 1. Ambient Background Multi-Spectrum Glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/20 via-[#00D2FF]/25 to-[#38BDF8]/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute w-72 h-72 bg-[#0066FF]/25 rounded-full blur-[80px] pointer-events-none" />

      {/* 2. 3D Tilted Orbital Rings System */}
      {/* Ring 1: Outer Inclined Orbit (Counter-Clockwise) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute w-[360px] sm:w-[450px] lg:w-[510px] h-[360px] sm:h-[450px] lg:h-[510px] rounded-full border border-dashed border-[#0066FF]/35 pointer-events-none"
        style={{
          transform: "rotateX(68deg) rotateY(-20deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Orbiting Satellite Node 1 */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-white shadow-[0_0_20px_#00D2FF] border-2 border-[#00D2FF] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#0066FF] animate-ping" />
          </div>
        </div>
      </motion.div>

      {/* Ring 2: Inner Clockwise Orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] sm:w-[380px] lg:w-[440px] h-[300px] sm:h-[380px] lg:h-[440px] rounded-full border border-dotted border-[#00D2FF]/55 pointer-events-none"
        style={{
          transform: "rotateX(62deg) rotateY(25deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Orbiting Satellite Node 2 */}
        <div className="absolute top-1/2 -right-3 -translate-y-1/2 flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_18px_#0066FF] border-2 border-[#0066FF] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
          </div>
        </div>
      </motion.div>

      {/* Ring 3: Equatorial Translucent Energy Ring */}
      <div
        className="absolute w-[380px] sm:w-[460px] lg:w-[530px] h-[380px] sm:h-[460px] lg:h-[530px] pointer-events-none z-10 flex items-center justify-center"
        style={{
          transform: "rotateX(74deg) rotateY(-10deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-4 rounded-full border-[12px] border-[#00D2FF]/20 shadow-[0_0_35px_rgba(0,210,255,0.4)]" />
        <div className="absolute inset-8 rounded-full border-[4px] border-[#0066FF]/30 shadow-[0_0_20px_rgba(0,102,255,0.3)]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-2 border-dashed border-white/90"
        />
      </div>

      {/* 3. Central 3D Holographic AI Neural Sphere */}
      <div className="relative w-[220px] sm:w-[270px] lg:w-[320px] h-[220px] sm:h-[270px] lg:h-[320px] rounded-full overflow-hidden shadow-[inset_-24px_-24px_60px_rgba(0,16,46,0.92),0_20px_60px_rgba(0,102,255,0.4),0_0_45px_rgba(0,210,255,0.3)] border border-white/60 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D2FF] via-[#0052CC] to-[#040E26]" />

        {/* Isometric Curved Wireframe Grid & Constellations */}
        <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full opacity-85">
          <defs>
            <linearGradient id="globeMeshGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Latitude Curves */}
          <path d="M 45,65 Q 150,90 255,65" fill="none" stroke="url(#globeMeshGrad)" strokeWidth="1.6" strokeDasharray="3 3" />
          <path d="M 18,105 Q 150,135 282,105" fill="none" stroke="url(#globeMeshGrad)" strokeWidth="2" />
          <path d="M 2,150 Q 150,180 298,150" fill="none" stroke="url(#globeMeshGrad)" strokeWidth="2.4" />
          <path d="M 18,195 Q 150,225 282,195" fill="none" stroke="url(#globeMeshGrad)" strokeWidth="2" />
          <path d="M 45,235 Q 150,260 255,235" fill="none" stroke="url(#globeMeshGrad)" strokeWidth="1.6" strokeDasharray="3 3" />

          {/* Longitude Curves */}
          <path d="M 150,2 Q 70,150 150,298" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />
          <path d="M 150,2 Q 110,150 150,298" fill="none" stroke="rgba(0,210,255,0.45)" strokeWidth="1.2" strokeDasharray="4 4" />
          <path d="M 150,2 Q 150,150 150,298" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.8" />
          <path d="M 150,2 Q 190,150 150,298" fill="none" stroke="rgba(0,210,255,0.45)" strokeWidth="1.2" strokeDasharray="4 4" />
          <path d="M 150,2 Q 230,150 150,298" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />

          {/* Hub Nodes */}
          <circle cx="85" cy="118" r="4.5" fill="#FFFFFF" />
          <circle cx="85" cy="118" r="9" fill="none" stroke="#00D2FF" strokeWidth="1.5" />
          
          <circle cx="150" cy="165" r="5" fill="#FFFFFF" />
          <circle cx="150" cy="165" r="11" fill="none" stroke="#00D2FF" strokeWidth="1.6" />

          <circle cx="215" cy="122" r="4" fill="#FFFFFF" />
          <circle cx="215" cy="122" r="8" fill="none" stroke="#00D2FF" strokeWidth="1.5" />

          <circle cx="115" cy="208" r="3.5" fill="#FFFFFF" />
          <circle cx="190" cy="204" r="3.5" fill="#FFFFFF" />

          {/* Network Interconnect Lines */}
          <line x1="85" y1="118" x2="150" y2="165" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeDasharray="2 2" />
          <line x1="150" y1="165" x2="215" y2="122" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeDasharray="2 2" />
          <line x1="85" y1="118" x2="115" y2="208" stroke="rgba(0,210,255,0.7)" strokeWidth="1.4" />
          <line x1="150" y1="165" x2="190" y2="204" stroke="rgba(0,210,255,0.7)" strokeWidth="1.4" />
        </svg>

        {/* Gyroscopic AI Core */}
        <div className="absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-22 sm:w-26 lg:w-30 h-15 sm:h-17 lg:h-20 rounded-[50%] bg-gradient-to-r from-white via-[#00D2FF] to-[#0066FF] shadow-[0_0_35px_#00D2FF,inset_0_0_20px_#FFFFFF] flex items-center justify-center rotate-[-10deg]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="w-14 sm:w-17 lg:w-20 h-9 sm:h-11 lg:h-13 rounded-[50%] border-2 border-white border-t-[#0066FF] border-b-[#00D2FF] flex items-center justify-center shadow-inner"
          >
            <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white shadow-[0_0_15px_#FFFFFF] flex items-center justify-center">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#0066FF] animate-ping" />
            </div>
          </motion.div>
        </div>

        {/* Lighting Glare & Deep 3D Shadow */}
        <div className="absolute top-0 left-0 w-full h-full bg-radial from-white/75 via-transparent to-transparent opacity-85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#01091C]/90 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(255,255,255,0.7)] pointer-events-none" />
      </div>

      {/* 4. FOREGROUND 3D FLOATING SOFTWARE TELEMETRY CARDS */}

      {/* Card A: Top-Right — Live AI Agent Pipeline Stream */}
      <motion.div
        animate={{ y: [-6, 6, -6], x: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 -right-2 sm:top-1 sm:-right-4 lg:-right-6 z-20"
      >
        <div className="p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-blue-200 shadow-[0_12px_35px_rgba(0,102,255,0.18)] min-w-[210px] sm:min-w-[240px]">
          <div className="flex items-center justify-between gap-3 mb-2 border-b border-blue-100 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">AI Pipeline</p>
                <p className="text-xs font-bold text-slate-900 font-display">LLM Agent Mesh</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              LIVE
            </span>
          </div>

          <div className="flex items-baseline justify-between pt-1">
            <span className="text-[11px] text-slate-500 font-medium">Throughput:</span>
            <span className="text-xs sm:text-sm font-black text-[#0066FF] font-mono">142,500 tps</span>
          </div>
          <div className="w-full bg-blue-50 h-1.5 rounded-full overflow-hidden mt-1.5">
            <motion.div
              animate={{ width: ["45%", "85%", "65%", "95%", "75%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#0066FF] to-[#00D2FF] rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Card B: Bottom-Left — Global Cloud Mesh Telemetry */}
      <motion.div
        animate={{ y: [6, -6, 6], x: [0, -3, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute -bottom-4 -left-2 sm:bottom-0 sm:-left-4 lg:-left-6 z-20"
      >
        <div className="p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-blue-200 shadow-[0_12px_35px_rgba(0,102,255,0.18)] min-w-[210px] sm:min-w-[245px]">
          <div className="flex items-center justify-between gap-3 mb-2 border-b border-blue-100 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF]">
                <Globe2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Cloud Engine</p>
                <p className="text-xs font-bold text-slate-900 font-display">Multi-Region Mesh</p>
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold text-[#0066FF]">8ms avg</span>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-600 font-mono">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              US-East
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              EU-Central
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              AP-South
            </span>
          </div>
        </div>
      </motion.div>

      {/* Card C: Bottom Center-Right — Zero-Trust Security Pill */}
      <motion.div
        animate={{ scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-2 right-6 sm:bottom-2 sm:right-8 z-20"
      >
        <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-blue-200 shadow-md flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-[#0066FF]" />
          <span className="text-[11px] font-mono font-bold text-slate-800">
            SOC2 Type II & ISO Aligned
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </motion.div>

      {/* Subtle Sparkle Particles */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2.8, repeat: Infinity }}
        className="absolute top-12 left-10 text-[#00D2FF] pointer-events-none"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 text-[#0066FF] pointer-events-none"
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>
    </div>
  );
}
