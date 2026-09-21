import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Brain,
  Cpu,
  Wrench,
  Code2,
  Database,
  Server,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  ArrowRight,
  Sliders,
  CheckCircle2,
  Terminal,
  Activity,
  Globe,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

export const GenAIEcosystem3D: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [58, 48]);
  const rotateZ = useTransform(mouseX, [-300, 300], [-36, -26]);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 25 });
  const springRotateZ = useSpring(rotateZ, { stiffness: 150, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Left 7 Pillars
  const leftPillars = [
    {
      id: 1,
      title: "PROMPT ENGINEERING",
      desc: "Craft powerful inputs that drive intelligent outputs",
      icon: Brain,
      color: "from-amber-400 to-orange-500",
    },
    {
      id: 2,
      title: "LLMS & FOUNDATIONS",
      desc: "Understand Large Language Models and how they work",
      icon: Cpu,
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: 3,
      title: "AI TOOLS & PLATFORMS",
      desc: "Leverage cutting-edge tools to accelerate your workflow",
      icon: Wrench,
      color: "from-indigo-400 to-blue-600",
    },
    {
      id: 4,
      title: "MODEL INTEGRATION",
      desc: "Connect AI models seamlessly into real-world applications",
      icon: Code2,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 5,
      title: "DATA & CONTEXT LAYER",
      desc: "Use data intelligently with embeddings, vectors & context management",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 6,
      title: "INFRASTRUCTURE LAYER",
      desc: "Built on scalable cloud infrastructure and APIs",
      icon: Server,
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: 7,
      title: "ETHICS & GOVERNANCE",
      desc: "Ensure responsible AI with privacy, fairness and transparency",
      icon: ShieldCheck,
      color: "from-cyan-500 to-blue-600",
    },
  ];

  // Right 7 Layers
  const rightLayers = [
    {
      id: 1,
      title: "USER INTERFACE",
      desc: "Chat UI, dashboards, visualizations & interactions",
      tech: "React 19, Three.js, Streaming Markdown",
    },
    {
      id: 2,
      title: "OUTPUT LAYER",
      desc: "Generated text, images, code, insights & more",
      tech: "SSE Streams, JSON Schema, Token Decode",
    },
    {
      id: 3,
      title: "AI MODELS",
      desc: "LLMs, diffusion models, embedding models & more",
      tech: "GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, LLaMA 3",
    },
    {
      id: 4,
      title: "AI ORCHESTRATION",
      desc: "APIs, vector search, chains, agents & workflows",
      tech: "LangGraph, AutoGen, CrewAI, Function Calling",
    },
    {
      id: 5,
      title: "DATA PIPELINE",
      desc: "Data ingestion, processing, chunking & embeddings",
      tech: "Pinecone, pgvector, Hybrid BM25, Reranking",
    },
    {
      id: 6,
      title: "CLOUD INFRASTRUCTURE",
      desc: "Cloud services, GPUs, storage, scaling & deployment",
      tech: "NVIDIA H100 Clusters, vLLM, Kubernetes Multi-Region",
    },
    {
      id: 7,
      title: "SECURITY & ETHICS",
      desc: "Guardrails, bias checks, data privacy, compliance & ethics",
      tech: "NeMo Guardrails, PII Masking, SOC2 & ISO 27001",
    },
  ];

  // Layer gap multipliers for exploded view
  const gap = expanded ? 48 : 28;

  return (
    <section className="relative pt-8 sm:pt-12 pb-16 bg-gradient-to-b from-[#0A1629] via-[#0D1D38] to-[#0A1629] text-white overflow-hidden border-t border-b border-blue-900/60 selection:bg-[#00D2FF]/30">
      {/* Background Cyber Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#0066FF_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#0066FF]/25 via-[#00D2FF]/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Block (Directly inspired by Reference Design) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-6">
          <div className="max-w-xl">
            {/* ATS Brand Monogram Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0066FF]/20 border border-[#00D2FF]/40 text-xs font-mono font-bold text-[#00D2FF] mb-3 shadow-[0_0_20px_rgba(0,210,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>ATS GLOBAL TECH • GEN-AI PLATFORM</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display leading-[1.05] text-white">
              MASTER THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-white">
                GEN AI
              </span> <br />
              REVOLUTION
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-mono font-medium mt-3 tracking-wide">
              Explore. Understand. Build. The Future is Generative.
            </p>
          </div>

          {/* Interactive 3D Exploded Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono font-bold text-white transition-all flex items-center gap-2 shadow-sm"
            >
              <Sliders className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>{expanded ? "Compact 3D View" : "Explode 3D Stack"}</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Interactive 3D Live Model
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 3-COLUMN MAIN STAGE (LEFT PILLARS - 3D ISOMETRIC TOWER - RIGHT LAYERS) */}
        {/* =================================================================== */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center min-h-[680px]"
        >
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: 7 PILLARS (Callout Cards)                      */}
          {/* ============================================================ */}
          <div className="lg:col-span-3 space-y-2.5 z-20">
            {leftPillars.map((p) => {
              const Icon = p.icon;
              const isTargeted = activeLayer === p.id;
              return (
                <div
                  key={p.id}
                  onMouseEnter={() => setActiveLayer(p.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group relative p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                    isTargeted
                      ? "bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#000c3d] border-[#00D2FF] shadow-[0_8px_25px_rgba(0,210,255,0.3)] scale-[1.03] translate-x-1"
                      : "bg-[#0A1629]/90 border-slate-800 hover:border-blue-500/50 hover:bg-[#0D1D38]"
                  }`}
                >
                  {/* Icon Medallion */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${p.color} shrink-0 shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-black text-white group-hover:text-[#00D2FF] transition-colors truncate">
                      {p.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 line-clamp-1">
                      {p.desc}
                    </p>
                  </div>

                  {/* Gold/Cyan Connecting Pointer Pin */}
                  <div className="flex items-center gap-1 shrink-0">
                    <div className="w-2 h-0.5 bg-amber-400/80 group-hover:w-3 group-hover:bg-[#00D2FF] transition-all" />
                    <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:bg-[#00D2FF] group-hover:scale-125 transition-all shadow-[0_0_8px_#F59E0B]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ============================================================ */}
          {/* CENTER COLUMN: THE 3D EXPLODED ISOMETRIC HARDWARE STACK     */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 flex items-center justify-center relative py-6 select-none">
            
            {/* Outer Ambient Perspective Stage */}
            <div className="relative w-full max-w-[480px] h-[580px] flex items-center justify-center perspective-[1200px]">
              
              {/* Floor Neon Oval Reflection */}
              <div className="absolute bottom-6 w-[360px] sm:w-[420px] h-[130px] rounded-[100%] border-2 border-[#00D2FF]/40 bg-gradient-to-t from-[#0066FF]/20 to-transparent blur-[8px] pointer-events-none transform -rotate-x-12" />

              {/* Dynamic 3D Isometric Stack Wrapper */}
              <motion.div
                style={{
                  rotateX: springRotateX,
                  rotateZ: springRotateZ,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-[320px] sm:w-[350px] flex flex-col items-center cursor-grab active:cursor-grabbing"
              >
                {/* 4 Vertical Chrome Guide Rods with Hex Bolts */}
                <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
                  {/* Top-Left Rod */}
                  <div className="absolute top-2 left-2 w-2 h-[420px] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600 rounded-full shadow-lg border border-white/40" />
                  {/* Top-Right Rod */}
                  <div className="absolute top-2 right-2 w-2 h-[420px] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600 rounded-full shadow-lg border border-white/40" />
                  {/* Bottom-Left Rod */}
                  <div className="absolute bottom-2 left-2 w-2 h-[420px] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600 rounded-full shadow-lg border border-white/40" />
                  {/* Bottom-Right Rod */}
                  <div className="absolute bottom-2 right-2 w-2 h-[420px] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600 rounded-full shadow-lg border border-white/40" />
                </div>

                {/* ------------------------------------------------------------- */}
                {/* PLATE 1 (TOP): USER INTERFACE TABLET (Brain Hologram)        */}
                {/* ------------------------------------------------------------- */}
                <motion.div
                  onMouseEnter={() => setActiveLayer(1)}
                  onMouseLeave={() => setActiveLayer(null)}
                  animate={{
                    y: -(gap * 3.2),
                    scale: activeLayer === 1 ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`w-full h-[100px] sm:h-[110px] rounded-2xl p-2.5 transition-all duration-300 relative border-2 ${
                    activeLayer === 1
                      ? "border-[#00D2FF] shadow-[0_0_40px_rgba(0,210,255,0.6)] bg-[#0C1A30]"
                      : "border-slate-600 shadow-[0_20px_40px_rgba(0,0,0,0.6)] bg-[#0A1629]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Tablet Bezel & Camera */}
                  <div className="flex items-center justify-between px-2 mb-1">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                  </div>

                  {/* Tablet Screen with Glowing Neural Brain & Title */}
                  <div className="h-[70px] sm:h-[78px] rounded-xl bg-gradient-to-b from-[#0F2347] to-[#0A1629] p-2 flex items-center justify-between border border-cyan-500/30">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                        <Brain className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-cyan-400 font-extrabold tracking-wider">
                          GENERATIVE AI
                        </div>
                        <div className="text-[9px] text-slate-300 font-sans">
                          Chat UI & Visualizations
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-white bg-blue-600/60 px-2 py-0.5 rounded-md border border-blue-400/30">
                      L1: UI TIER
                    </span>
                  </div>
                </motion.div>

                {/* ------------------------------------------------------------- */}
                {/* PLATE 2: OUTPUT LAYER (Optical Glass / Diffusion Wafer)      */}
                {/* ------------------------------------------------------------- */}
                <motion.div
                  onMouseEnter={() => setActiveLayer(2)}
                  onMouseLeave={() => setActiveLayer(null)}
                  animate={{
                    y: -(gap * 2.1),
                    scale: activeLayer === 2 ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`w-[94%] h-[60px] rounded-xl p-2 transition-all duration-300 relative border ${
                    activeLayer === 2
                      ? "border-cyan-400 shadow-[0_0_35px_rgba(0,210,255,0.5)] bg-white/20"
                      : "border-cyan-500/40 shadow-[0_15px_30px_rgba(0,0,0,0.5)] bg-white/10"
                  } backdrop-blur-md`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-200">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-300" />
                      Output Layer • Streaming Tokens
                    </span>
                    <span className="text-[8px] bg-cyan-400/20 px-1.5 py-0.5 rounded">
                      L2: INFERENCE
                    </span>
                  </div>
                  {/* Etched Optical Traces */}
                  <div className="mt-2 h-3 w-full rounded bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-around px-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                  </div>
                </motion.div>

                {/* ------------------------------------------------------------- */}
                {/* PLATE 3: AI MODELS (Neural Core Plate)                       */}
                {/* ------------------------------------------------------------- */}
                <motion.div
                  onMouseEnter={() => setActiveLayer(3)}
                  onMouseLeave={() => setActiveLayer(null)}
                  animate={{
                    y: -(gap * 1.0),
                    scale: activeLayer === 3 ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`w-[92%] h-[68px] rounded-xl p-2.5 transition-all duration-300 relative border-2 ${
                    activeLayer === 3
                      ? "border-[#00D2FF] shadow-[0_0_35px_rgba(0,210,255,0.5)] bg-[#0D2247]"
                      : "border-blue-700 shadow-[0_15px_30px_rgba(0,0,0,0.5)] bg-[#0B1A36]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: "10s" }} />
                      <span className="text-xs font-mono font-bold text-white">
                        AI Models • LLMs & Diffusion
                      </span>
                    </div>
                    <span className="text-[8px] font-mono text-cyan-300 bg-blue-500/20 px-1.5 py-0.5 rounded">
                      L3: FOUNDATIONS
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-[9px] font-mono text-slate-300">
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">GPT-4o</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">Claude 3.5</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">Gemini</span>
                  </div>
                </motion.div>

                {/* ------------------------------------------------------------- */}
                {/* PLATE 4: AI ORCHESTRATION (Rotating Mechanical Gears)        */}
                {/* ------------------------------------------------------------- */}
                <motion.div
                  onMouseEnter={() => setActiveLayer(4)}
                  onMouseLeave={() => setActiveLayer(null)}
                  animate={{
                    y: 0,
                    scale: activeLayer === 4 ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`w-[94%] h-[68px] rounded-xl p-2 transition-all duration-300 relative border-2 ${
                    activeLayer === 4
                      ? "border-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.5)] bg-slate-800"
                      : "border-slate-700 shadow-[0_15px_30px_rgba(0,0,0,0.5)] bg-slate-900"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-amber-300 mb-1">
                    <span className="flex items-center gap-1.5 font-bold">
                      ⚙️ AI Orchestration • Agent Gears
                    </span>
                    <span className="text-[8px] bg-amber-400/20 px-1.5 py-0.5 rounded">
                      L4: WORKFLOWS
                    </span>
                  </div>
                  {/* Rotating Interlocked Gears */}
                  <div className="flex items-center justify-center gap-3 py-1">
                    <svg className="w-7 h-7 text-amber-400 animate-spin" style={{ animationDuration: "6s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    <svg className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: "4s", animationDirection: "reverse" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                </motion.div>

                {/* ------------------------------------------------------------- */}
                {/* PLATE 5: DATA PIPELINE (Silicon Microchip Board PCB)         */}
                {/* ------------------------------------------------------------- */}
                <motion.div
                  onMouseEnter={() => setActiveLayer(5)}
                  onMouseLeave={() => setActiveLayer(null)}
                  animate={{
                    y: gap * 1.0,
                    scale: activeLayer === 5 ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`w-[92%] h-[68px] rounded-xl p-2 transition-all duration-300 relative border-2 ${
                    activeLayer === 5
                      ? "border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.5)] bg-[#092318]"
                      : "border-emerald-800 shadow-[0_15px_30px_rgba(0,0,0,0.5)] bg-[#071911]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-emerald-300">
                    <span className="font-bold flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5" />
                      Data Pipeline • Vector Chips
                    </span>
                    <span className="text-[8px] bg-emerald-400/20 px-1.5 py-0.5 rounded">
                      L5: EMBEDDINGS
                    </span>
                  </div>
                  {/* Microchip Silicon Array */}
                  <div className="grid grid-cols-4 gap-1.5 mt-1.5">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-4 bg-slate-900 border border-emerald-500/40 rounded flex items-center justify-center text-[7px] font-mono text-emerald-400">
                        CHIP-{i}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* ------------------------------------------------------------- */}
                {/* PLATE 6: CLOUD INFRASTRUCTURE (GPU Server Blade Rack)        */}
                {/* ------------------------------------------------------------- */}
                <motion.div
                  onMouseEnter={() => setActiveLayer(6)}
                  onMouseLeave={() => setActiveLayer(null)}
                  animate={{
                    y: gap * 2.1,
                    scale: activeLayer === 6 ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`w-[94%] h-[74px] rounded-xl p-2 transition-all duration-300 relative border-2 ${
                    activeLayer === 6
                      ? "border-blue-400 shadow-[0_0_40px_rgba(0,102,255,0.6)] bg-slate-900"
                      : "border-slate-700 shadow-[0_15px_30px_rgba(0,0,0,0.6)] bg-slate-950"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300 mb-1">
                    <span className="font-bold flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5" />
                      GPU Server Rack • H100 Clusters
                    </span>
                    <span className="text-[8px] bg-blue-500/20 px-1.5 py-0.5 rounded">
                      L6: COMPUTE
                    </span>
                  </div>
                  {/* Vertical Server Blade Slots with Blinking LEDs */}
                  <div className="flex items-center justify-between gap-1 mt-1 px-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                      <div key={s} className="flex-1 h-7 bg-slate-800 border border-blue-500/30 rounded flex flex-col justify-between p-0.5 items-center">
                        <div className={`w-1 h-1 rounded-full ${s % 2 === 0 ? "bg-cyan-400 animate-ping" : "bg-emerald-400"}`} />
                        <div className="w-full h-0.5 bg-slate-700" />
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* ------------------------------------------------------------- */}
                {/* PLATE 7 (BASE): ZERO-TRUST SECURITY & ETHICS SHIELD          */}
                {/* ------------------------------------------------------------- */}
                <motion.div
                  onMouseEnter={() => setActiveLayer(7)}
                  onMouseLeave={() => setActiveLayer(null)}
                  animate={{
                    y: gap * 3.2,
                    scale: activeLayer === 7 ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`w-full h-[85px] sm:h-[95px] rounded-2xl p-3 transition-all duration-300 relative border-2 ${
                    activeLayer === 7
                      ? "border-cyan-400 shadow-[0_0_50px_rgba(0,210,255,0.6)] bg-[#0C1E3C]"
                      : "border-slate-600 shadow-[0_25px_50px_rgba(0,0,0,0.7)] bg-[#081326]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300 mb-1">
                    <span className="font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Security & Ethics • Zero-Trust Base
                    </span>
                    <span className="text-[8px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                      L7: ENTERPRISE SHIELD
                    </span>
                  </div>

                  {/* Centered Glowing Zero-Trust Security Shield */}
                  <div className="flex items-center justify-center pt-1">
                    <div className="w-12 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                      <Lock className="w-5 h-5 text-cyan-300 animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: 7 LAYER CALLOUTS (Matching the Diagram)        */}
          {/* ============================================================ */}
          <div className="lg:col-span-3 space-y-2.5 z-20">
            {rightLayers.map((l) => {
              const isTargeted = activeLayer === l.id;
              return (
                <div
                  key={l.id}
                  onMouseEnter={() => setActiveLayer(l.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group relative p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                    isTargeted
                      ? "bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#000c3d] border-[#00D2FF] shadow-[0_8px_25px_rgba(0,210,255,0.3)] scale-[1.03] -translate-x-1"
                      : "bg-[#0A1629]/90 border-slate-800 hover:border-cyan-500/50 hover:bg-[#0D1D38]"
                  }`}
                >
                  {/* Cyan Connecting Pointer Pin on Left */}
                  <div className="flex items-center gap-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_8px_#00D2FF]" />
                    <div className="w-2 h-0.5 bg-cyan-400/80 group-hover:w-3 transition-all" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-white group-hover:text-[#00D2FF] transition-colors truncate">
                        {l.title}
                      </h4>
                      <span className="text-[9px] font-mono text-slate-400">
                        Tier 0{l.id}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 line-clamp-1">
                      {l.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================================== */}
        {/* BOTTOM BANNER: MILESTONES & CTA (Directly from Reference Template)  */}
        {/* =================================================================== */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* 4 Milestones */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-[#00D2FF] flex items-center justify-center">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white">Hands-on</div>
                <div className="text-[9px] text-slate-400">Engineering</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white">Real-world</div>
                <div className="text-[9px] text-slate-400">Projects</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white">Expert</div>
                <div className="text-[9px] text-slate-400">Architecture</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white">Enterprise</div>
                <div className="text-[9px] text-slate-400">Growth</div>
              </div>
            </div>
          </div>

          {/* Right Action CTA */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              to="/ai-page"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#0066FF] via-[#0052CC] to-[#00D2FF] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all duration-300 shadow-[0_8px_25px_rgba(0,102,255,0.3)] hover:scale-105"
            >
              <span>JOIN THE GEN AI MOVEMENT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Footer URL Ribbon */}
        <div className="mt-4 text-center">
          <a
            href="https://www.atsglobaltech.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-400 hover:text-[#00D2FF] transition flex items-center justify-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>www.atsglobaltech.in</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GenAIEcosystem3D;
