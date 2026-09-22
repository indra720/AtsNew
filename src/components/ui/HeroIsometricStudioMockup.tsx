import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Code2,
  Database,
  BarChart2,
} from "lucide-react";

export default function HeroIsometricStudioMockup() {
  return (
    <div className="relative w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[660px] xl:max-w-[680px] h-[410px] sm:h-[450px] lg:h-[480px] mx-auto flex items-center justify-center select-none">
      
      {/* Background Ambient Sky-Blue Diffuse Glow */}
      <div className="absolute w-[440px] h-[440px] bg-gradient-to-tr from-[#0066FF]/18 via-[#00D2FF]/22 to-transparent rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Floating Translucent Ambient Spheres with Depth (Matching Image) */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2 right-16 w-8 h-8 rounded-full bg-gradient-to-tr from-white via-sky-100 to-[#38BDF8]/40 shadow-[inset_-2px_-2px_6px_rgba(0,102,255,0.2),0_6px_16px_rgba(0,102,255,0.12)] border border-white/70 pointer-events-none"
      />
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 -left-2 w-6 h-6 rounded-full bg-gradient-to-tr from-white via-sky-100 to-[#00D2FF]/30 shadow-[inset_-2px_-2px_5px_rgba(0,102,255,0.2),0_5px_12px_rgba(0,102,255,0.1)] border border-white/60 pointer-events-none"
      />
      <motion.div
        animate={{ y: [8, -8, 8], scale: [0.97, 1.03, 0.97] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-4 -right-6 w-20 h-20 rounded-full bg-gradient-to-tr from-white/95 via-sky-100/70 to-[#0066FF]/25 shadow-[inset_-6px_-6px_18px_rgba(0,80,200,0.25),0_15px_30px_rgba(0,102,255,0.16)] border border-white/80 pointer-events-none blur-[0.5px]"
      />

      {/* ============================================================ */}
      {/* 3D CIRCULAR MULTI-TIER PEDESTAL STAGE */}
      {/* ============================================================ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Outer Circular Base Shadow & Soft Platform */}
        <div 
          className="absolute w-[360px] sm:w-[420px] lg:w-[450px] h-[360px] sm:h-[420px] lg:h-[450px] rounded-full bg-white/60 border border-blue-200/50 shadow-[0_20px_40px_rgba(0,102,255,0.12)]"
          style={{ transform: "rotateX(68deg) translateY(30px)" }}
        />

        {/* Outer Dashed Cyan Orbital Wire with Glowing Beads */}
        <div 
          className="absolute w-[350px] sm:w-[410px] lg:w-[440px] h-[350px] sm:h-[410px] lg:h-[440px] rounded-full border border-dashed border-[#00D2FF]/50"
          style={{ transform: "rotateX(68deg) translateY(18px)" }}
        >
          {/* Glowing Blue Orbital Beads */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-gradient-to-tr from-[#0052CC] to-[#00D2FF] shadow-[0_0_12px_#00D2FF] border-2 border-white" />
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-gradient-to-tr from-[#0052CC] to-[#00D2FF] shadow-[0_0_12px_#00D2FF] border-2 border-white" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0066FF] shadow-[0_0_10px_#0066FF] border border-white" />
        </div>

        {/* Middle Stage Tier with Engraved "IDEAS → TECHNOLOGY → GROWTH" Track */}
        <div 
          className="absolute w-[280px] sm:w-[330px] lg:w-[360px] h-[280px] sm:h-[330px] lg:h-[360px] rounded-full bg-white/85 border-2 border-white shadow-[0_12px_30px_rgba(0,102,255,0.15),inset_0_2px_8px_rgba(255,255,255,0.9)] flex items-center justify-center"
          style={{ transform: "rotateX(68deg) translateY(12px)" }}
        >
          {/* Inner Glowing Cyan Groove */}
          <div className="absolute inset-2.5 rounded-full border border-[#00D2FF]/40 shadow-[0_0_15px_rgba(0,210,255,0.25)]" />

          {/* SVG Curving Text along the Rim (Exact copy from image) */}
          <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full">
            <path
              id="pedestalRimPath"
              d="M 35,150 A 115,115 0 0,0 265,150"
              fill="none"
            />
            <text className="text-[10px] sm:text-[11px] font-bold font-mono tracking-[0.28em] fill-[#0066FF]/75">
              <textPath href="#pedestalRimPath" startOffset="50%" textAnchor="middle">
                IDEAS  →  TECHNOLOGY  →  GROWTH
              </textPath>
            </text>
          </svg>
        </div>

        {/* Elevated Cylinder Pedestal with Intense Cyan Rim */}
        <div 
          className="absolute w-[180px] sm:w-[210px] lg:w-[230px] h-[180px] sm:h-[210px] lg:h-[230px] rounded-full bg-gradient-to-b from-white via-sky-100/90 to-[#0066FF]/30 border-2 border-white shadow-[0_15px_30px_rgba(0,102,255,0.3),inset_0_0_20px_#00D2FF]"
          style={{ transform: "rotateX(68deg) translateY(-2px)" }}
        />
      </div>

      {/* ============================================================ */}
      {/* 2 BLUE HEXAGONAL BADGES ON THE PEDESTAL RIM (Exact match) */}
      {/* ============================================================ */}
      {/* Left Hexagon: Cloud Icon */}
      <div 
        className="absolute top-[56%] sm:top-[55%] left-[23%] sm:left-[24%] z-15 w-8 h-9 sm:w-9 sm:h-10 bg-gradient-to-b from-[#0052CC] to-[#0038A8] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,82,204,0.4)] border border-blue-300/40"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      >
        <Cloud className="w-4 h-4 text-white drop-shadow" />
      </div>

      {/* Right Hexagon: Bar Chart Icon */}
      <div 
        className="absolute top-[56%] sm:top-[55%] right-[23%] sm:right-[24%] z-15 w-8 h-9 sm:w-9 sm:h-10 bg-gradient-to-b from-[#0052CC] to-[#0038A8] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,82,204,0.4)] border border-blue-300/40"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      >
        <BarChart2 className="w-4 h-4 text-white drop-shadow" />
      </div>

      {/* ============================================================ */}
      {/* CENTERPIECE: 3D GLOWING FROSTED GLASS ISOMETRIC CUBE */}
      {/* ============================================================ */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-[-20px] sm:mt-[-25px]">
        
        {/* Top Floating Glass Chip with </> Symbol */}
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-11 sm:w-13 h-6 sm:h-7 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white shadow-[0_6px_16px_rgba(0,102,255,0.45)] border border-white/80 flex items-center justify-center mb-[-10px] z-20"
        >
          <Code2 className="w-4 h-4 stroke-[2.5]" />
        </motion.div>

        {/* 3D Frosted Glass Cube with Inner Sapphire Light Burst */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[125px] sm:w-[145px] lg:w-[155px] h-[125px] sm:h-[145px] lg:h-[155px] rounded-3xl bg-gradient-to-br from-white/95 via-sky-50/80 to-blue-100/40 backdrop-blur-2xl border-2 border-white shadow-[0_20px_45px_rgba(0,102,255,0.28),inset_0_0_20px_rgba(255,255,255,0.9)] flex items-center justify-center p-3"
        >
          {/* Inner Glowing Sapphire Core */}
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#00D2FF] via-[#0052CC] to-[#0A1629] p-2 flex items-center justify-center shadow-[0_0_35px_#00D2FF,inset_0_0_15px_#FFFFFF] border border-white/60 relative overflow-hidden">
            
            {/* Cyan Starburst / Flare */}
            <div className="absolute inset-1.5 rounded-xl bg-gradient-to-tr from-[#0040C1] via-[#00D2FF] to-white opacity-95 blur-[0.5px]" />
            
            {/* Center Core Microchip */}
            <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/25 backdrop-blur-md border border-white/70 flex items-center justify-center text-white shadow-[0_0_15px_#FFFFFF]">
              <Cpu className="w-5 h-5 stroke-[2.2] text-white" />
            </div>
          </div>

          {/* Specular Bevel Highlights */}
          <div className="absolute top-2 left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="absolute left-2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-white via-white/50 to-transparent" />
        </motion.div>

        {/* Cyan Glowing Elliptical Orbit Ring Wrapping AROUND the Cube */}
        <div 
          className="absolute w-[240px] sm:w-[270px] lg:w-[290px] h-[240px] sm:h-[270px] lg:h-[290px] rounded-full border-2 border-[#00D2FF]/60 shadow-[0_0_18px_#00D2FF] pointer-events-none"
          style={{ transform: "rotateX(72deg) rotateY(-8deg)" }}
        >
          {/* 4 Blue Glowing Spheres on the ring */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0066FF] border-2 border-white shadow-[0_0_10px_#00D2FF]" />
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0066FF] border-2 border-white shadow-[0_0_10px_#00D2FF]" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#00D2FF] border border-white shadow-[0_0_8px_#00D2FF]" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#00D2FF] border border-white shadow-[0_0_8px_#00D2FF]" />
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4 CLOSELY-WRAPPED FLOATING SERVICE CARDS (Exact match to image) */}
      {/* ============================================================ */}

      {/* CARD 1: Top-Left — AI Solutions (Directly above-left of the cube) */}
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[4%] left-[2%] sm:left-[5%] z-20"
      >
        <div className="px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-100 shadow-[0_10px_25px_rgba(0,102,255,0.12)] flex items-center gap-2.5 sm:gap-3 min-w-[160px] sm:min-w-[175px]">
          <div className="w-8 h-8 rounded-xl bg-[#EBF5FF] border border-blue-200/90 flex items-center justify-center text-[#0066FF] shadow-xs">
            <Cpu className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-900 font-sans leading-tight">AI Solutions</p>
            <p className="text-[10px] text-slate-500 font-medium">Smarter Automation</p>
          </div>
          {/* Mini Blue Rising Bar Chart */}
          <div className="flex items-end gap-0.5 h-4">
            <span className="w-1 h-2 bg-[#00D2FF] rounded-xs" />
            <span className="w-1 h-3 bg-[#0099FF] rounded-xs" />
            <span className="w-1 h-4 bg-[#0066FF] rounded-xs" />
          </div>
        </div>
      </motion.div>

      {/* CARD 2: Mid-Left — Cloud Infra (Directly left of the cube) */}
      <motion.div
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute top-[35%] -left-[3%] sm:left-[1%] z-20"
      >
        <div className="px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-100 shadow-[0_10px_25px_rgba(0,102,255,0.12)] flex items-center gap-2.5 sm:gap-3 min-w-[160px] sm:min-w-[175px]">
          <div className="w-8 h-8 rounded-xl bg-[#EBF5FF] border border-blue-200/90 flex items-center justify-center text-[#0066FF] shadow-xs">
            <Cloud className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-900 font-sans leading-tight">Cloud Infra</p>
            <p className="text-[10px] text-slate-500 font-medium">Scalable & Secure</p>
          </div>
          <div className="flex items-end gap-0.5 h-4">
            <span className="w-1 h-2 bg-[#00D2FF] rounded-xs" />
            <span className="w-1 h-3 bg-[#0099FF] rounded-xs" />
            <span className="w-1 h-4 bg-[#0066FF] rounded-xs" />
          </div>
        </div>
      </motion.div>

      {/* CARD 3: Top-Right — Custom Development (Directly above-right of the cube) */}
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-[6%] right-[2%] sm:right-[5%] z-20"
      >
        <div className="px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-100 shadow-[0_10px_25px_rgba(0,102,255,0.12)] flex items-center gap-2.5 sm:gap-3 min-w-[170px] sm:min-w-[185px]">
          <div className="w-8 h-8 rounded-xl bg-[#EBF5FF] border border-blue-200/90 flex items-center justify-center text-[#0066FF] shadow-xs">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-900 font-sans leading-tight">Custom Development</p>
            <p className="text-[10px] text-slate-500 font-medium">Build What's Next</p>
          </div>
          <div className="flex items-end gap-0.5 h-4">
            <span className="w-1 h-2 bg-[#00D2FF] rounded-xs" />
            <span className="w-1 h-3 bg-[#0099FF] rounded-xs" />
            <span className="w-1 h-4 bg-[#0066FF] rounded-xs" />
          </div>
        </div>
      </motion.div>

      {/* CARD 4: Mid-Right — Data & Analytics (Directly right of the cube) */}
      <motion.div
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[37%] -right-[3%] sm:right-[1%] z-20"
      >
        <div className="px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-100 shadow-[0_10px_25px_rgba(0,102,255,0.12)] flex items-center gap-2.5 sm:gap-3 min-w-[170px] sm:min-w-[185px]">
          <div className="w-8 h-8 rounded-xl bg-[#EBF5FF] border border-blue-200/90 flex items-center justify-center text-[#0066FF] shadow-xs">
            <Database className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-900 font-sans leading-tight">Data & Analytics</p>
            <p className="text-[10px] text-slate-500 font-medium">Insights That Grow</p>
          </div>
          <div className="flex items-end gap-0.5 h-4">
            <span className="w-1 h-2 bg-[#00D2FF] rounded-xs" />
            <span className="w-1 h-3 bg-[#0099FF] rounded-xs" />
            <span className="w-1 h-4 bg-[#0066FF] rounded-xs" />
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* FLOATING METRIC CARD (Bottom Left - 142.5k+ Systems Deployed) */}
      {/* ============================================================ */}
      <motion.div
        animate={{ y: [2, -2, 2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[2%] left-[4%] sm:left-[8%] z-20"
      >
        <div className="px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-100 shadow-[0_10px_25px_rgba(0,102,255,0.12)] flex items-center gap-3">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base font-black text-slate-900 font-sans">142.5k+</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[10px] text-slate-500 font-medium">Systems Deployed</p>
          </div>

          {/* Cyan Wave Sparkline Chart */}
          <svg width="55" height="22" viewBox="0 0 55 22" fill="none" className="text-[#00D2FF]">
            <path
              d="M2 16 L10 11 L18 17 L28 6 L38 13 L46 3 L52 7"
              stroke="#00D2FF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* FAR RIGHT VERTICAL WATERMARK TEXT (BUILD INNOVATE SCALE TOGETHER) */}
      {/* ============================================================ */}
      <div className="absolute right-0 bottom-8 hidden xl:flex flex-col items-center text-[10px] font-mono tracking-[0.25em] text-slate-400/80 uppercase pointer-events-none space-y-1 select-none">
        <span>BUILD</span>
        <span>INNOVATE</span>
        <span>SCALE</span>
        <span>TOGETHER</span>
        <span className="text-[#0066FF] font-bold">—</span>
      </div>
    </div>
  );
}
