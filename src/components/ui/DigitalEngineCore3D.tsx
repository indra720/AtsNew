import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, Code2, Sparkles } from "lucide-react";
import SpatialHolographicPanels from "./SpatialHolographicPanels";

export default function DigitalEngineCore3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic Mouse-Tracking 3D Perspective Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 26, stiffness: 130 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);

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
      className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[620px] aspect-square mx-auto flex items-center justify-center select-none cursor-grab active:cursor-grabbing perspective-[1400px] py-4 sm:py-6"
    >
      {/* Volumetric Radial Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/25 via-[#00D2FF]/20 to-[#38BDF8]/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute w-72 h-72 bg-[#00D2FF]/20 rounded-full blur-[70px] pointer-events-none" />

      {/* 3D Master Spatial Stage (Preserves Z-Depth) */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[280px] sm:w-[330px] lg:w-[370px] h-[280px] sm:h-[330px] lg:h-[370px] flex items-center justify-center"
      >
        {/* ============================================================ */}
        {/* LAYER 0: BACKGROUND ORBITAL METALLIC RINGS (Z: -30px) */}
        {/* ============================================================ */}
        <div
          style={{ transform: "translateZ(-30px) rotateX(72deg) rotateY(-18deg)" }}
          className="absolute w-[330px] sm:w-[390px] lg:w-[440px] h-[330px] sm:h-[390px] lg:h-[440px] rounded-full border border-dashed border-[#0066FF]/35 pointer-events-none flex items-center justify-center"
        >
          {/* Inner Cyan Track */}
          <div className="absolute inset-4 rounded-full border border-[#00D2FF]/40 shadow-[0_0_20px_rgba(0,210,255,0.25)]" />

          {/* Orbiting Metallic Satellite Nodes */}
          <div className="absolute top-1/2 -left-2.5 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-gradient-to-tr from-[#0052CC] to-[#00D2FF] shadow-[0_0_15px_#00D2FF] border-2 border-white flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>
          <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-white shadow-[0_0_12px_#0066FF] border-2 border-[#0066FF]" />
        </div>

        {/* Secondary Inclined Counter-Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          style={{ transform: "translateZ(-10px) rotateX(60deg) rotateY(30deg)" }}
          className="absolute w-[280px] sm:w-[330px] lg:w-[370px] h-[280px] sm:h-[330px] lg:h-[370px] rounded-full border-2 border-dotted border-[#00D2FF]/45 pointer-events-none"
        />

        {/* ============================================================ */}
        {/* LAYER 1: MULTI-FACETED TRANSPARENT GLASS SHELL (Z: 25px) */}
        {/* ============================================================ */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(25px)" }}
          className="relative w-[170px] sm:w-[210px] lg:w-[240px] h-[170px] sm:h-[210px] lg:h-[240px] rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-white/85 via-sky-50/70 to-blue-100/40 backdrop-blur-2xl border-2 border-white shadow-[0_25px_60px_rgba(0,102,255,0.25),inset_0_0_25px_rgba(255,255,255,0.9)] flex items-center justify-center p-3 overflow-hidden"
        >
          {/* Subtle Prismatic Laser Grid on Glass Surface */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-40">
            <line x1="20" y1="20" x2="180" y2="20" stroke="#0066FF" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="180" x2="180" y2="180" stroke="#00D2FF" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="20" x2="20" y2="180" stroke="#0066FF" strokeWidth="1" />
            <line x1="180" y1="20" x2="180" y2="180" stroke="#00D2FF" strokeWidth="1" />
            <circle cx="20" cy="20" r="3" fill="#0066FF" />
            <circle cx="180" cy="20" r="3" fill="#00D2FF" />
            <circle cx="20" cy="180" r="3" fill="#00D2FF" />
            <circle cx="180" cy="180" r="3" fill="#0066FF" />
          </svg>

          {/* Beveled Specular Highlights */}
          <div className="absolute top-2 left-2 right-2 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="absolute left-2 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-white via-white/50 to-transparent" />

          {/* ============================================================ */}
          {/* LAYER 2: LUMINOUS ENERGY CORE (Z: 60px inside shell) */}
          {/* ============================================================ */}
          <div className="relative w-full h-full rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-[#00D2FF] via-[#0052CC] to-[#0A1629] p-2.5 flex items-center justify-center shadow-[0_0_40px_#00D2FF,inset_0_0_20px_#FFFFFF] border border-white/60 overflow-hidden">
            {/* Pulsating Volumetric Light Mesh */}
            <motion.div
              animate={{ opacity: [0.75, 1, 0.75], scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-1 rounded-2xl bg-gradient-to-tr from-[#0040C1] via-[#00D2FF] to-white blur-[1px]"
            />

            {/* High-Speed Gyroscopic Inner Energy Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 sm:inset-4 rounded-2xl border-2 border-dashed border-white/80"
            />

            {/* Center Silicon Engine Microchip */}
            <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/80 flex flex-col items-center justify-center text-white shadow-[0_0_20px_#FFFFFF]">
              <Cpu className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[2.2] text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
              <span className="text-[7px] sm:text-[8px] font-mono font-black tracking-widest mt-0.5">CORE X1</span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* LAYER 3: FOREGROUND FLOATING GEOMETRY & CODE CHIP (Z: 110px) */}
        {/* ============================================================ */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          style={{ transform: "translateZ(110px)" }}
          className="absolute -top-3 sm:-top-5 z-20 pointer-events-auto"
        >
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white shadow-[0_8px_25px_rgba(0,102,255,0.45)] border border-white/90 flex items-center gap-1.5 sm:gap-2">
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider">ATS_ENGINE // ACTIVE</span>
          </div>
        </motion.div>

        {/* Celestial Cyber Sparkles */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute top-6 left-4 text-[#00D2FF] pointer-events-none"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
          className="absolute bottom-10 right-4 text-[#0066FF] pointer-events-none"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>

        {/* ============================================================ */}
        {/* LAYER 4: SPATIALLY DISTRIBUTED HOLOGRAPHIC PANELS (Z: -20px to +80px) */}
        {/* ============================================================ */}
        <SpatialHolographicPanels />
      </motion.div>
    </div>
  );
}
