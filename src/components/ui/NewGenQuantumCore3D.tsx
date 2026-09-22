import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Cpu,
  Zap,
  ShieldCheck,
  Sparkles,
  Activity,
  Layers,
  Terminal,
  Lock,
  Box,
  Compass,
  Radio,
} from "lucide-react";

export default function NewGenQuantumCore3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic Mouse Tracking 3D Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [22, -22]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-25, 25]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px] aspect-square mx-auto flex items-center justify-center select-none cursor-grab active:cursor-grabbing perspective-[1400px] py-4"
    >
      {/* 1. Ambient Multi-Spectrum Neon Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/25 via-[#00D2FF]/30 to-[#38BDF8]/15 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute w-80 h-80 bg-[#0066FF]/20 rounded-full blur-[80px] pointer-events-none" />

      {/* 2. Master 3D Spatial Canvas with Preserved 3D Context */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[340px] sm:w-[420px] lg:w-[470px] h-[340px] sm:h-[420px] lg:h-[470px] flex items-center justify-center"
      >
        {/* ============================================================ */}
        {/* LAYER 0: BASE CYBER PLATFORM & ISOMETRIC GRID (Z: 0px) */}
        {/* ============================================================ */}
        <div
          style={{ transform: "translateZ(0px) rotateX(65deg)" }}
          className="absolute w-[360px] sm:w-[440px] lg:w-[490px] h-[360px] sm:h-[440px] lg:h-[490px] rounded-full border border-blue-300/40 pointer-events-none flex items-center justify-center"
        >
          {/* Concentric Glowing Neon Rings */}
          <div className="absolute inset-4 rounded-full border border-dashed border-[#00D2FF]/50 shadow-[0_0_25px_rgba(0,210,255,0.35)]" />
          <div className="absolute inset-14 rounded-full border border-blue-400/30" />
          
          {/* Rotating Laser Grid Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute inset-20 rounded-full border-2 border-dotted border-[#0066FF]/60"
          />

          {/* Holographic Compass Crosshairs */}
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D2FF]/60 to-transparent" />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#00D2FF]/60 to-transparent" />
        </div>

        {/* ============================================================ */}
        {/* LAYER 1: FLOATING PRISMATIC GLASS WAFER (Z: 40px) */}
        {/* ============================================================ */}
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          className="absolute w-[260px] sm:w-[320px] lg:w-[360px] h-[260px] sm:h-[320px] lg:h-[360px] rounded-3xl bg-white/70 backdrop-blur-2xl border-2 border-white/90 shadow-[0_20px_50px_rgba(0,102,255,0.2),inset_0_0_20px_rgba(255,255,255,0.8)] overflow-hidden flex items-center justify-center"
        >
          {/* Prismatic Iridescent Refraction Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-[#F0F7FF]/60 to-[#BAE6FD]/30" />
          
          {/* Cyber Etched Optical Circuit Lines */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-60">
            <path d="M 20,20 L 60,20 L 80,40 L 120,40 L 140,20 L 180,20" fill="none" stroke="#0066FF" strokeWidth="1.5" strokeDasharray="4 2" />
            <path d="M 20,180 L 60,180 L 80,160 L 120,160 L 140,180 L 180,180" fill="none" stroke="#00D2FF" strokeWidth="1.5" strokeDasharray="4 2" />
            <path d="M 20,60 L 20,140" fill="none" stroke="#0066FF" strokeWidth="1" />
            <path d="M 180,60 L 180,140" fill="none" stroke="#00D2FF" strokeWidth="1" />
            
            <circle cx="60" cy="20" r="3" fill="#0066FF" />
            <circle cx="140" cy="20" r="3" fill="#00D2FF" />
            <circle cx="60" cy="180" r="3" fill="#0066FF" />
            <circle cx="140" cy="180" r="3" fill="#00D2FF" />
          </svg>

          {/* Corner Hardware Mount Screws */}
          <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full border border-blue-400/80 bg-white/80 shadow-xs" />
          <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full border border-blue-400/80 bg-white/80 shadow-xs" />
          <div className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full border border-blue-400/80 bg-white/80 shadow-xs" />
          <div className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full border border-blue-400/80 bg-white/80 shadow-xs" />
        </motion.div>

        {/* ============================================================ */}
        {/* LAYER 2: THE 3D QUANTUM NEURAL HYPER-CORE (Z: 85px) */}
        {/* ============================================================ */}
        <motion.div
          style={{ transform: "translateZ(85px)" }}
          animate={{
            rotateZ: [0, 5, -5, 0],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[150px] sm:w-[180px] lg:w-[200px] h-[150px] sm:h-[180px] lg:h-[200px] flex items-center justify-center"
        >
          {/* High-Speed Rotating Outer Laser Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-3xl border-2 border-dashed border-[#00D2FF] shadow-[0_0_20px_#00D2FF]"
          />

          {/* Reverse Rotating Middle Quantum Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2.5 sm:inset-3 rounded-2xl border-2 border-white border-t-[#0066FF] border-b-[#00D2FF] shadow-[0_0_25px_rgba(0,102,255,0.4)]"
          />

          {/* 3D Glass Prism Diamond Core (Octagonal / High-Fashion Tech) */}
          <div className="relative w-[100px] sm:w-[120px] lg:w-[130px] h-[100px] sm:h-[120px] lg:h-[130px] rounded-2xl bg-gradient-to-br from-[#0A1629] via-[#0040C1] to-[#00D2FF] shadow-[0_15px_40px_rgba(0,102,255,0.6),inset_0_0_25px_rgba(255,255,255,0.4)] border-2 border-white flex flex-col items-center justify-center text-white overflow-hidden group">
            
            {/* Shimmering Specular Glass Light Beam */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
            />

            {/* Glowing Processor Micro-Icon */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#00D2FF] shadow-[0_0_20px_#00D2FF] mb-1">
              <Cpu className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
            </div>

            <p className="text-[10px] sm:text-[11px] font-black font-mono tracking-widest text-white uppercase">
              ATS NEURAL
            </p>
            <span className="text-[8px] sm:text-[9px] font-mono text-[#00D2FF] font-bold">
              QUANTUM CORE v4.8
            </span>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* LAYER 3: SPATIAL 3D FLOATING HOLOGRAPHIC CALLOUTS (Z: 130px) */}
        {/* ============================================================ */}
        
        {/* Hologram Card 1: Top-Right — Live AI Throughput Stream */}
        <motion.div
          style={{ transform: "translateZ(130px)" }}
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-2 sm:-top-8 sm:-right-4 lg:-right-6 z-30 pointer-events-auto"
        >
          <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-blue-200 shadow-[0_15px_35px_rgba(0,102,255,0.22)] flex items-center gap-2.5 min-w-[180px] sm:min-w-[210px]">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0052CC] to-[#0066FF] flex items-center justify-center text-white shadow-[0_0_12px_rgba(0,102,255,0.4)]">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 font-bold uppercase">AI STREAM</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <p className="text-xs sm:text-sm font-black font-mono text-slate-900">
                142.5k <span className="text-[10px] text-[#0066FF] font-semibold">tokens/s</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hologram Card 2: Bottom-Left — Low-Latency Cloud Mesh */}
        <motion.div
          style={{ transform: "translateZ(130px)" }}
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-6 -left-2 sm:-bottom-8 sm:-left-4 lg:-left-6 z-30 pointer-events-auto"
        >
          <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-blue-200 shadow-[0_15px_35px_rgba(0,102,255,0.22)] flex items-center gap-2.5 min-w-[180px] sm:min-w-[210px]">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#00D2FF] to-[#0066FF] flex items-center justify-center text-white shadow-[0_0_12px_rgba(0,210,255,0.4)]">
              <Zap className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-mono text-slate-500 font-bold uppercase">LATENCY SLA</p>
              <p className="text-xs sm:text-sm font-black font-mono text-emerald-600 flex items-center gap-1">
                8.4ms <span className="text-[10px] text-slate-500 font-normal">P99 Ultra-Fast</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hologram Card 3: Bottom-Right — SOC2 / Zero-Trust Security Pill */}
        <motion.div
          style={{ transform: "translateZ(110px)" }}
          animate={{ scale: [0.97, 1.03, 0.97] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-2 right-4 sm:bottom-0 sm:right-6 z-30 pointer-events-auto"
        >
          <div className="px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white backdrop-blur-xl border border-blue-400/40 shadow-lg flex items-center gap-2">
            <Lock className="w-3 h-3 text-[#00D2FF]" />
            <span className="text-[10px] font-mono font-bold tracking-wide">
              Zero-Trust // SOC-2 Type II
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Celestial Cyber Sparkles */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="absolute top-4 left-6 text-[#00D2FF] pointer-events-none"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.8 }}
          className="absolute bottom-8 right-6 text-[#0066FF] pointer-events-none"
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </div>
  );
}
