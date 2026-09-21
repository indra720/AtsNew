import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Brain,
  Bot,
  Layers,
  BarChart3,
  Code2,
  Server,
  ArrowUp,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface Segment {
  id: number;
  title: string;
  icon: React.ElementType;
  desc: string;
  stat: string;
  angle: number; // in degrees for radial distribution
}

const segments: Segment[] = [
  {
    id: 1,
    title: "S/4 Cloud Innovations",
    icon: Cloud,
    desc: "Next-gen hybrid cloud orchestration with sub-second failover and auto-scaling.",
    stat: "99.99% SLA",
    angle: 270, // Top
  },
  {
    id: 2,
    title: "AI And Machine Learning",
    icon: Brain,
    desc: "Custom LLMs, neural search, and predictive models built into daily workflows.",
    stat: "4x Faster Insights",
    angle: 321.4, // Top right
  },
  {
    id: 3,
    title: "ATS Business AI",
    icon: Bot,
    desc: "Autonomous AI agents and co-pilots trained on proprietary enterprise knowledge.",
    stat: "65% Deflection",
    angle: 12.8, // Right
  },
  {
    id: 4,
    title: "Google & Microsoft Integration",
    icon: Layers,
    desc: "Zero-friction connectors for Azure, AWS, GCP, and Microsoft 365 environments.",
    stat: "50+ Connectors",
    angle: 64.2, // Bottom right
  },
  {
    id: 5,
    title: "Integrated Analytics & Data Processing",
    icon: BarChart3,
    desc: "Unified lakehouse data processing with real-time dashboards and BI streams.",
    stat: "Sub-second Query",
    angle: 115.6, // Bottom
  },
  {
    id: 6,
    title: "Low-Code / Rapid Development",
    icon: Code2,
    desc: "Accelerate feature delivery by 5x using visual builders and modular APIs.",
    stat: "70% Faster TTM",
    angle: 167, // Bottom left
  },
  {
    id: 7,
    title: "Industry-Specific Cloud Solutions",
    icon: Server,
    desc: "Pre-configured compliance architectures for Banking, Health, Logistics & Retail.",
    stat: "HIPAA / PCI-DSS",
    angle: 218.4, // Top left
  },
];

export const CrystalDial3D: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<number>(2);

  return (
    <div className="relative w-full max-w-5xl mx-auto py-8 px-4 flex flex-col items-center select-none">
      
      {/* Top Extruded 3D Title Bar (Matching Image 1: "SAP S/4 HANA Just Got Even Better!") */}
      <div className="text-center mb-8 sm:mb-12 relative z-10">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2 flex-wrap">
          {/* Extruded Blue Badge */}
          <div className="relative group">
            <div className="px-5 sm:px-6 py-2 rounded-xl bg-gradient-to-b from-[#0084FF] via-[#0066FF] to-[#0047BA] text-white font-black text-2xl sm:text-4xl tracking-wider uppercase font-display shadow-[0_10px_25px_rgba(0,102,255,0.4),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.3)] border border-white/60">
              ATS AI
            </div>
            <div className="absolute -bottom-1.5 inset-x-2 h-2 bg-[#003B99] rounded-b-xl -z-10 blur-[1px]"></div>
          </div>

          {/* 3D Extruded Text */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0A1629] drop-shadow-[0_2px_2px_rgba(0,102,255,0.15)]">
            NEXT-GEN SUITE
          </h2>
        </div>

        <p className="text-xl sm:text-2xl font-extrabold text-[#0066FF] tracking-tight font-display mt-1">
          Enterprise Tech Just Got Even Better!
        </p>

        <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#0066FF]" />
          <span>7 Core Innovations Set To Shape The Future Of Businesses</span>
        </div>
      </div>

      {/* Main 3D Stage with Side Pedestals */}
      <div className="relative w-full flex items-center justify-center min-h-[460px] sm:min-h-[540px]">
        
        {/* Ambient Floor Reflection & Glow */}
        <div className="absolute bottom-2 inset-x-12 h-32 bg-gradient-to-t from-blue-400/15 via-blue-200/10 to-transparent rounded-[100%] blur-2xl pointer-events-none -z-10" />

        {/* LEFT PEDESTAL: 3D Crystal Cloud with Arrow (From Image 1) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:flex flex-col items-center absolute -left-4 lg:left-2 bottom-12 z-20 pointer-events-none"
        >
          {/* Floating 3D Crystal Cloud */}
          <div className="relative w-28 h-24 flex items-center justify-center">
            <div className="w-24 h-16 rounded-3xl bg-gradient-to-br from-white/90 via-[#BAE6FD]/60 to-[#0066FF]/20 backdrop-blur-xl border-2 border-white shadow-[0_12px_30px_rgba(0,102,255,0.2),inset_0_2px_6px_rgba(255,255,255,0.9)] flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0066FF] to-[#00D2FF] flex items-center justify-center text-white shadow-md">
                <ArrowUp className="w-5 h-5 stroke-[3]" />
              </div>
            </div>
            {/* Cloud bumps */}
            <div className="absolute top-1 left-3 w-10 h-10 rounded-full bg-white/85 border border-white -z-10 blur-[0.5px]"></div>
            <div className="absolute top-2 right-4 w-12 h-12 rounded-full bg-white/85 border border-white -z-10 blur-[0.5px]"></div>
          </div>

          {/* Tiered Glass Pedestal Base */}
          <div className="relative -mt-2 flex flex-col items-center">
            <div className="w-28 h-5 rounded-[100%] bg-gradient-to-b from-white via-blue-100 to-blue-200 border border-white/80 shadow-md"></div>
            <div className="w-36 h-6 rounded-[100%] bg-gradient-to-b from-white/90 via-blue-50 to-blue-100 border border-white/90 -mt-2 shadow-lg"></div>
          </div>
          <span className="text-[11px] font-bold text-slate-700 font-display mt-2 bg-white/80 px-2.5 py-0.5 rounded-full border border-blue-100 shadow-xs">
            Cloud Native
          </span>
        </motion.div>

        {/* RIGHT PEDESTAL: 3D Crystal Numeral '7' + Crystal Pillars (From Image 1) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="hidden md:flex flex-col items-center absolute -right-4 lg:right-2 bottom-12 z-20 pointer-events-none"
        >
          <div className="relative flex items-end justify-center gap-2 mb-1">
            {/* 3D Number 7 */}
            <span className="text-6xl font-black font-display text-transparent bg-clip-text bg-gradient-to-b from-[#0066FF] via-[#0084FF] to-[#BAE6FD] drop-shadow-[0_4px_12px_rgba(0,102,255,0.35)] -mr-1">
              7
            </span>
            {/* 3D Glass Bar Pillars */}
            <div className="flex items-end gap-1.5 pb-1">
              <div className="w-3 h-8 rounded-t-sm bg-gradient-to-t from-[#0052CC] to-[#00D2FF] shadow-sm border border-white/60"></div>
              <div className="w-3 h-14 rounded-t-sm bg-gradient-to-t from-[#0052CC] to-[#00D2FF] shadow-sm border border-white/60"></div>
              <div className="w-3 h-20 rounded-t-sm bg-gradient-to-t from-[#0052CC] to-[#00D2FF] shadow-md border border-white/60"></div>
            </div>
          </div>

          {/* Tiered Glass Pedestal Base */}
          <div className="relative flex flex-col items-center">
            <div className="w-28 h-5 rounded-[100%] bg-gradient-to-b from-white via-blue-100 to-blue-200 border border-white/80 shadow-md"></div>
            <div className="w-36 h-6 rounded-[100%] bg-gradient-to-b from-white/90 via-blue-50 to-blue-100 border border-white/90 -mt-2 shadow-lg"></div>
          </div>
          <span className="text-[11px] font-bold text-slate-700 font-display mt-2 bg-white/80 px-2.5 py-0.5 rounded-full border border-blue-100 shadow-xs">
            Pillars of Scale
          </span>
        </motion.div>

        {/* CENTERPIECE: The 3D Crystal Glass Gear Dial */}
        <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full flex items-center justify-center">
          
          {/* Outer Crystal Glass Ring with Bevel & Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/85 via-[#E0F2FE]/40 to-white/70 backdrop-blur-2xl border-4 border-white shadow-[0_20px_50px_rgba(0,102,255,0.18),inset_0_2px_8px_rgba(255,255,255,1),inset_0_-4px_12px_rgba(0,102,255,0.1)]" />

          {/* Segment Divider Lines (7 radial dividers like the glass pie in image 1) */}
          {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((deg, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-300/60 to-white origin-left pointer-events-none"
              style={{ transform: `rotate(${deg}deg)` }}
            />
          ))}

          {/* Inner 3D Blue Cogwheel / Gear with Teeth (From Image 1) */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[#0084FF] via-[#0066FF] to-[#0047BA] p-3 shadow-[0_10px_35px_rgba(0,102,255,0.45),inset_0_3px_6px_rgba(255,255,255,0.8),inset_0_-4px_8px_rgba(0,0,0,0.35)] flex items-center justify-center z-10">
            {/* Gear teeth notches */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-xs bg-[#0052CC] border border-white/40 -z-10"
                style={{
                  transform: `rotate(${deg}deg) translateY(-76px) rotate(45deg)`,
                }}
              />
            ))}

            {/* Inner Crystal Core with ATS Symbol */}
            <div className="w-full h-full rounded-full bg-gradient-to-b from-white via-[#F0F7FF] to-[#E0F2FE] border-2 border-white shadow-[inset_0_2px_8px_rgba(0,102,255,0.25),0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-2 text-center group cursor-pointer">
              <img
                src="/ats_white_symbol.png"
                alt="ATS Core"
                className="w-14 h-14 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_10px_rgba(0,102,255,0.35)] group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/ats_official_logo.png";
                }}
              />
              <span className="text-[10px] sm:text-xs font-black font-display text-[#0066FF] tracking-wider uppercase -mt-1">
                ATS CORE
              </span>
            </div>
          </div>

          {/* 7 Interactive Segment Nodes (Positioned radially around the ring) */}
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            const isSelected = activeSegment === seg.id;
            // Radius of placement in px (responsive)
            const rMobile = 120;
            const rDesktop = 165;
            const rad = (seg.angle * Math.PI) / 180;
            const xDesktop = Math.cos(rad) * rDesktop;
            const yDesktop = Math.sin(rad) * rDesktop;

            return (
              <div
                key={seg.id}
                onClick={() => setActiveSegment(seg.id)}
                className={`absolute z-20 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${
                  isSelected ? "scale-110 z-30" : "hover:scale-105 opacity-90"
                }`}
                style={{
                  transform: `translate(${xDesktop}px, ${yDesktop}px)`,
                }}
              >
                {/* Segment Glass Icon Capsule */}
                <div
                  className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-tr from-[#0066FF] to-[#00D2FF] text-white shadow-[0_8px_20px_rgba(0,102,255,0.45)] border-2 border-white scale-110"
                      : "bg-white/90 text-[#0066FF] border border-blue-200/90 shadow-md hover:bg-blue-50"
                  }`}
                >
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2]" />
                </div>

                {/* Segment Label */}
                <span
                  className={`mt-1 max-w-[85px] sm:max-w-[105px] text-[9px] sm:text-[11px] font-bold leading-tight font-display transition-colors px-1 py-0.5 rounded-md ${
                    isSelected
                      ? "text-[#0066FF] bg-white/95 shadow-xs"
                      : "text-slate-800 bg-white/75 backdrop-blur-xs"
                  }`}
                >
                  {seg.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Segment Detail Card Below Dial */}
      <div className="w-full max-w-xl mt-6 relative z-10">
        <AnimatePresence mode="wait">
          {(() => {
            const current = segments.find((s) => s.id === activeSegment) || segments[0];
            const Icon = current.icon;
            return (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="p-5 sm:p-6 rounded-3xl bg-white/90 backdrop-blur-2xl border-2 border-blue-100 shadow-[0_15px_35px_-10px_rgba(0,102,255,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shrink-0 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#0066FF] uppercase font-bold tracking-wider">
                      Innovation Pillar 0{current.id}
                    </span>
                    <h4 className="text-base sm:text-lg font-black font-display text-slate-900">
                      {current.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5 max-w-md">
                      {current.desc}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white shrink-0 shadow-md">
                  <p className="text-[10px] uppercase font-mono tracking-wider opacity-90">Benchmark</p>
                  <p className="text-sm font-black font-display">{current.stat}</p>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default CrystalDial3D;
