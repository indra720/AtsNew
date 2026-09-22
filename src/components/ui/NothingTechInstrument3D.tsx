import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Cpu,
  Zap,
  ShieldCheck,
  Radio,
  Sliders,
  Terminal,
  Lock,
  Activity,
  Maximize2,
  Volume2,
  Sparkles,
} from "lucide-react";

export default function NothingTechInstrument3D() {
  const [activeChannel, setActiveChannel] = useState<"neural" | "cloud" | "cipher">("neural");
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic Mouse Tracking 3D Physics (Teenage Engineering Tactile Device)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 140 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);

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
      className="relative w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[620px] mx-auto select-none cursor-grab active:cursor-grabbing perspective-[1400px] py-4"
    >
      {/* Ambient Cyber-Aura (Ultra-clean subtle illumination) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-[#0066FF]/15 via-[#00D2FF]/20 to-transparent rounded-3xl blur-[90px] pointer-events-none -z-10" />

      {/* 3D Preserved Spatial Stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full rounded-3xl bg-white/85 backdrop-blur-2xl border border-slate-900/15 shadow-[0_30px_70px_-15px_rgba(0,102,255,0.18),0_0_0_1px_rgba(255,255,255,0.9)_inset] p-5 sm:p-6"
      >
        {/* ============================================================ */}
        {/* HARDWARE INSTRUMENT HEADER (Teenage Engineering OP-1 Aesthetic) */}
        {/* ============================================================ */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-900/10 text-xs font-mono">
          <div className="flex items-center gap-2">
            {/* Technical Registration Crosshair */}
            <span className="text-[#0066FF] font-bold">[ + ]</span>
            <span className="font-bold text-slate-900 tracking-wider">ATS_INSTRUMENT // OP-01</span>
            <span className="text-[10px] px-2 py-0.5 rounded-sm bg-slate-900 text-white font-bold tracking-widest">
              REV_3.4
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              ONLINE
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-[#0066FF] font-bold">120 FPS</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ROTARY / TACTILE CHANNEL SWITCHER (3 Hardware Modes) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { id: "neural", num: "01", label: "NEURAL_SYNAPSE" },
            { id: "cloud", num: "02", label: "CLOUD_FABRIC" },
            { id: "cipher", num: "03", label: "CIPHER_VAULT" },
          ].map((channel) => (
            <button
              key={channel.id}
              onClick={() => setActiveChannel(channel.id as any)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                activeChannel === channel.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-white/90 text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold ${activeChannel === channel.id ? "text-[#00D2FF]" : "text-slate-400"}`}>
                  CH.{channel.num}
                </span>
                <div className={`w-1.5 h-1.5 rounded-full ${activeChannel === channel.id ? "bg-[#00D2FF] shadow-[0_0_6px_#00D2FF]" : "bg-slate-300"}`} />
              </div>
              <p className="text-[11px] font-mono font-bold tracking-tight truncate">{channel.label}</p>
            </button>
          ))}
        </div>

        {/* ============================================================ */}
        {/* 3D FLOATING CENTERSTAGE: ISOMETRIC WIREFRAME QUANTUM CORE */}
        {/* ============================================================ */}
        <div className="relative h-[220px] sm:h-[240px] rounded-2xl bg-gradient-to-b from-[#0A1629] via-[#0D1E3A] to-[#0A1629] border border-blue-400/20 p-4 overflow-hidden flex items-center justify-center text-white shadow-inner">
          
          {/* Subtle Dot Matrix Coordinates Grid */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#00D2FF 1px, transparent 1px)`,
              backgroundSize: '16px 16px'
            }}
          />

          {/* Corner Technical Markers */}
          <span className="absolute top-2 left-2 text-[9px] font-mono text-slate-500">[ 0,0 // ALPHA ]</span>
          <span className="absolute top-2 right-2 text-[9px] font-mono text-slate-500">[ 1,0 // BETA ]</span>
          <span className="absolute bottom-2 left-2 text-[9px] font-mono text-slate-500">[ 0,1 // GAMMA ]</span>
          <span className="absolute bottom-2 right-2 text-[9px] font-mono text-[#00D2FF] font-bold">[ LOCKED ]</span>

          {/* 3D Rotating Isometric Wireframe Polyhedra / Crystal */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Outer Rotating Laser Wireframe Box */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-32 h-32 rounded-2xl border border-dashed border-[#00D2FF]/60 shadow-[0_0_20px_rgba(0,210,255,0.25)]"
              style={{
                transform: "rotateX(55deg) rotateZ(45deg)",
                transformStyle: "preserve-3d",
              }}
            />

            {/* Inner Counter-Rotating Prismatic Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute w-28 h-28 rounded-full border-2 border-[#0066FF] shadow-[0_0_25px_rgba(0,102,255,0.4)]"
              style={{
                transform: "rotateY(60deg) rotateX(30deg)",
                transformStyle: "preserve-3d",
              }}
            />

            {/* Center Glowing Silicon Core */}
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-16 h-16 rounded-xl bg-gradient-to-tr from-[#0052CC] via-[#0066FF] to-[#00D2FF] border-2 border-white/90 flex flex-col items-center justify-center text-white shadow-[0_0_30px_#0066FF]"
            >
              <Cpu className="w-8 h-8 stroke-[2.2] text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="text-[7px] font-mono font-black tracking-widest mt-0.5">CORE X1</span>
            </motion.div>
          </div>

          {/* Real-Time Holographic Coordinates Overlays */}
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              SYSTEM_ENGAGED
            </span>
          </div>
          <div className="absolute bottom-3 right-4 text-[10px] font-mono text-blue-200">
            FREQ: <strong className="text-white">4.82 GHz</strong>
          </div>
        </div>

        {/* ============================================================ */}
        {/* OSCILLOSCOPE / AUDIO SYNTHESIZER FREQUENCY WAVEFORM */}
        {/* ============================================================ */}
        <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <Activity className="w-4 h-4 text-[#00D2FF]" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">LIVE TELEMETRY STREAM</p>
              <p className="text-xs font-bold text-slate-900 font-mono">142,500 Tokens/sec</p>
            </div>
          </div>

          {/* Animated Waveform Equalizer Bars */}
          <div className="flex items-end gap-1 h-6 pr-2">
            {[40, 80, 60, 100, 75, 90, 50, 85, 95, 60, 80, 45].map((height, i) => (
              <motion.span
                key={i}
                animate={{ height: [`${height * 0.3}%`, `${height}%`, `${height * 0.5}%`] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
                className="w-1 bg-gradient-to-t from-[#0066FF] to-[#00D2FF] rounded-full"
              />
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3D FLOATING HARDWARE SPEC TAGS (Outside with z-depth) */}
        {/* ============================================================ */}
        
        {/* Top-Right Floating Pill */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-3 z-30"
        >
          <div className="px-3 py-1.5 rounded-full bg-slate-900 text-white border border-slate-700 shadow-xl flex items-center gap-2 text-[10px] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>P99_LATENCY // 8.4MS</span>
          </div>
        </motion.div>

        {/* Bottom-Left Floating Pill */}
        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-3 -left-3 z-30"
        >
          <div className="px-3 py-1.5 rounded-full bg-white text-slate-900 border border-slate-300 shadow-xl flex items-center gap-2 text-[10px] font-mono font-bold">
            <Lock className="w-3 h-3 text-[#0066FF]" />
            <span>SOC2_TYPE_II // ENCRYPTED</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
