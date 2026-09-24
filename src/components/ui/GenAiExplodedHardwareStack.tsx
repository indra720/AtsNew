import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Layers,
  Wrench,
  Code2,
  Database,
  Server,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Terminal,
  Activity,
  Sliders,
} from "lucide-react";
import { Link } from "react-router-dom";

interface LayerInfo {
  id: number;
  leftTitle: string;
  leftDesc: string;
  leftIcon: React.ElementType;
  rightTitle: string;
  rightDesc: string;
  badge: string;
  accent: string;
  metrics: string;
  // Specific vertical offsets for spacious exploded separation (NO CLUSTERING)
  baseY: number;
  baseZ: number;
}

const STACK_LAYERS: LayerInfo[] = [
  {
    id: 1,
    leftTitle: "PROMPT ENGINEERING",
    leftDesc: "Craft powerful inputs that drive intelligent outputs & deterministic controls",
    leftIcon: Terminal,
    rightTitle: "USER INTERFACE",
    rightDesc: "Chat UI, dynamic dashboards, 3D visualizations & human interactions",
    badge: "EXPERIENCE LAYER",
    accent: "#00D2FF",
    metrics: "120 FPS FLUIDITY",
    baseY: -255,
    baseZ: 150,
  },
  {
    id: 2,
    leftTitle: "LLMS & FOUNDATIONS",
    leftDesc: "Understand Large Language Models, tokenizers, and multi-turn context",
    leftIcon: Brain,
    rightTitle: "OUTPUT LAYER",
    rightDesc: "Generated text, images, code AST, synthetic voice & business insights",
    badge: "SYNTHESIS LAYER",
    accent: "#38BDF8",
    metrics: "SUB-SECOND GENERATION",
    baseY: -170,
    baseZ: 100,
  },
  {
    id: 3,
    leftTitle: "AI TOOLS & PLATFORMS",
    leftDesc: "Leverage cutting-edge LLMs, diffusion backbones, and fine-tuning pipelines",
    leftIcon: Cpu,
    rightTitle: "AI FOUNDATION MODELS",
    rightDesc: "GPT-4o, Claude 3.5, LLaMA 3.3, Flux, CLIP, and domain-tuned weights",
    badge: "NEURAL CORE",
    accent: "#0066FF",
    metrics: "4.8K TOKENS/SEC",
    baseY: -85,
    baseZ: 50,
  },
  {
    id: 4,
    leftTitle: "MODEL INTEGRATION",
    leftDesc: "Connect AI models seamlessly into real-world enterprise databases & APIs",
    leftIcon: Code2,
    rightTitle: "AGENTIC ORCHESTRATION",
    rightDesc: "MCP protocol, tool calling, multi-agent swarms, DAG execution & memory",
    badge: "LOGIC & TOOLS",
    accent: "#00D2FF",
    metrics: "98.7% AUTONOMOUS SUCCESS",
    baseY: 0,
    baseZ: 0,
  },
  {
    id: 5,
    leftTitle: "DATA & CONTEXT LAYER",
    leftDesc: "Use enterprise data intelligently with embeddings, vectors & context management",
    leftIcon: Database,
    rightTitle: "DATA PIPELINE",
    rightDesc: "Data ingestion, OCR extraction, semantic chunking & dense vector embeddings",
    badge: "KNOWLEDGE GRAPH",
    accent: "#38BDF8",
    metrics: "< 42MS VECTOR SEARCH",
    baseY: 85,
    baseZ: -50,
  },
  {
    id: 6,
    leftTitle: "INFRASTRUCTURE LAYER",
    leftDesc: "Built on scalable cloud orchestration, high-throughput GPUs & Kubernetes",
    leftIcon: Server,
    rightTitle: "CLOUD INFRASTRUCTURE",
    rightDesc: "NVIDIA H100 clusters, TensorRT-LLM, vLLM distributed inference & VPCs",
    badge: "COMPUTE & HARDWARE",
    accent: "#0066FF",
    metrics: "99.98% UPTIME SLA",
    baseY: 170,
    baseZ: -100,
  },
  {
    id: 7,
    leftTitle: "ETHICS & GOVERNANCE",
    leftDesc: "Ensure responsible AI with privacy, fairness, audit trails and transparency",
    leftIcon: ShieldCheck,
    rightTitle: "SECURITY & ETHICS",
    rightDesc: "Air-gapped guardrails, PII redaction, bias mitigation & SOC-2 / HIPAA",
    badge: "GOVERNANCE TIER",
    accent: "#10B981",
    metrics: "ZERO DATA LEAKAGE",
    baseY: 255,
    baseZ: -150,
  },
];

export const GenAiExplodedHardwareStack: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(3);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [explosionGap, setExplosionGap] = useState<number>(1.0); // Spacing multiplier
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const activeLayerData = STACK_LAYERS.find((l) => l.id === activeLayer) || STACK_LAYERS[2];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-gradient-to-b from-[#0A162B] via-[#071122] to-[#040B18] text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-3xl border border-blue-500/30 shadow-[0_20px_70px_rgba(0,102,255,0.18)]"
    >
      {/* Ambient ATS Blue & Cyan Volumetric Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-b from-[#0066FF]/20 via-[#00D2FF]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[350px] bg-[#0066FF]/12 rounded-full blur-[130px] pointer-events-none" />

      {/* ============================================================ */}
      {/* SECTION HEADER: ATS GLOBAL TECH BRANDED */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-blue-500/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-xs font-mono font-bold text-[#00D2FF] mb-3 shadow-[0_0_15px_rgba(0,210,255,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>ATS GLOBAL TECH • GENERATIVE AI ARCHITECTURE</span>
            </div>

            <div className="text-xs font-mono tracking-widest text-blue-300/80 uppercase font-bold">
              ENTERPRISE 3D EXPLODED STACK
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-display text-white mt-1 leading-[1.05]">
              Master The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#0066FF]">
                Gen AI Revolution
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 max-w-xl leading-relaxed">
              Explore the 7-tier modular architecture powering enterprise Large Language Models, autonomous agentic swarms, and private neural vector pipelines.
            </p>
          </div>

          {/* Right Status & Spacing Control Pill */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-blue-950/70 px-3.5 py-2 rounded-2xl border border-blue-400/30 shrink-0">
              <Activity className="w-4 h-4 text-[#00D2FF] animate-pulse" />
              <span>TIER: {activeLayerData.badge}</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-2xl border border-white/10 text-xs font-mono">
              <span className="text-slate-400 text-[11px]">Explosion:</span>
              <button
                onClick={() => setExplosionGap(0.85)}
                className={`px-2 py-0.5 rounded-lg transition ${
                  explosionGap === 0.85 ? "bg-[#0066FF] text-white font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => setExplosionGap(1.15)}
                className={`px-2 py-0.5 rounded-lg transition ${
                  explosionGap === 1.15 ? "bg-[#0066FF] text-white font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                Spacious
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MAIN 3-COLUMN EXPLODED ARCHITECTURE STACK */}
      {/* Left Column (Inputs) | Center (Spacious 3D Slabs) | Right Column (Execution) */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: 7 Left Callout Pins (Alters with each tier) */}
        {/* ============================================================ */}
        <div className="lg:col-span-3 space-y-2.5 order-2 lg:order-1">
          <div className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
            FOUNDATIONS & INPUTS
          </div>

          {STACK_LAYERS.map((layer) => {
            const isSelected = activeLayer === layer.id;
            const Icon = layer.leftIcon;

            return (
              <div
                key={`left-${layer.id}`}
                onClick={() => setActiveLayer(layer.id)}
                className={`group p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-900/70 via-blue-950/80 to-[#0A1629] border-[#00D2FF] shadow-[0_0_20px_rgba(0,210,255,0.3)] translate-x-1"
                    : "bg-[#09152B]/60 hover:bg-[#0E2042] border-blue-500/20 hover:border-blue-400/40"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      isSelected
                        ? "bg-[#00D2FF] text-[#0A1629] font-bold shadow-[0_0_12px_#00D2FF]"
                        : "bg-white/10 text-cyan-300 group-hover:text-white group-hover:bg-[#0066FF]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`text-xs font-bold tracking-tight font-mono uppercase ${
                          isSelected ? "text-cyan-300" : "text-white group-hover:text-cyan-300"
                        }`}
                      >
                        {layer.leftTitle}
                      </h4>
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 transition-all ${
                          isSelected
                            ? "bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]"
                            : "bg-slate-600 group-hover:bg-[#00D2FF]"
                        }`}
                      />
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 leading-relaxed mt-0.5 line-clamp-2">
                      {layer.leftDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* CENTER COLUMN: SPATIAL 3D EXPLODED HARDWARE ASSEMBLY */}
        {/* Generous vertical explosion spacing so CARDS NEVER CHIPKO / OVERLAP! */}
        {/* ============================================================ */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center py-2 min-h-[660px] sm:min-h-[720px] order-1 lg:order-2">
          
          {/* Subtle Ambient Floor Light */}
          <div className="absolute bottom-4 w-72 h-16 bg-gradient-to-r from-[#0066FF]/35 to-[#00D2FF]/25 rounded-full blur-2xl pointer-events-none" />

          {/* 3D Exploded Perspective Viewport */}
          <div
            className="relative w-full max-w-[380px] h-[660px] sm:h-[720px] flex items-center justify-center"
            style={{
              perspective: "1350px",
              perspectiveOrigin: "50% 45%",
            }}
          >
            {/* The Rotating / Tilting 3D Exploded Assembly */}
            <div
              className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${48 + mousePos.y * 10}deg) rotateZ(${-26 + mousePos.x * 12}deg)`,
              }}
            >
              {/* ==================================================== */}
              {/* 4 PRECISION VERTICAL CHROME THREADED RODS */}
              {/* Spans cleanly between Top Layer 1 and Bottom Layer 7 */}
              {/* ==================================================== */}
              <div
                className="absolute w-1.5 h-[580px] bg-gradient-to-b from-cyan-200 via-slate-300 to-slate-500 rounded-full shadow-lg"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translate3d(-138px, 0px, 0px)",
                }}
              />
              <div
                className="absolute w-1.5 h-[580px] bg-gradient-to-b from-cyan-200 via-slate-300 to-slate-500 rounded-full shadow-lg"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translate3d(138px, 0px, 0px)",
                }}
              />

              {/* ==================================================== */}
              {/* LAYER 1: USER INTERFACE TABLET (Top Layer) */}
              {/* Placed at top with generous space */}
              {/* ==================================================== */}
              <motion.div
                onClick={() => setActiveLayer(1)}
                whileHover={{ scale: 1.03 }}
                animate={{
                  y: STACK_LAYERS[0].baseY * explosionGap,
                  z: activeLayer === 1 ? STACK_LAYERS[0].baseZ + 35 : STACK_LAYERS[0].baseZ,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className={`absolute w-[285px] h-[120px] rounded-2xl cursor-pointer transition-all ${
                  activeLayer === 1
                    ? "ring-2 ring-[#00D2FF] shadow-[0_0_35px_rgba(0,210,255,0.75)]"
                    : "shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, #0A1629, #030814)",
                  border: "2px solid rgba(0, 210, 255, 0.65)",
                }}
              >
                {/* Corner Chrome Washers */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />

                <div className="relative w-full h-full p-2.5 flex flex-col items-center justify-between rounded-2xl overflow-hidden bg-black/85">
                  <div className="w-full flex items-center justify-between text-[8px] font-mono text-cyan-300">
                    <span>ATS GENERATIVE UI</span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      LIVE
                    </span>
                  </div>

                  <div className="relative w-12 h-10 flex items-center justify-center my-auto">
                    <div className="absolute inset-0 bg-[#00D2FF]/30 rounded-full blur-md animate-pulse" />
                    <Brain className="w-8 h-8 text-[#00D2FF] drop-shadow-[0_0_8px_#00D2FF]" />
                  </div>

                  <div className="text-center font-black tracking-widest text-[10px] font-mono text-white drop-shadow-[0_0_6px_#00D2FF]">
                    GENERATIVE AI
                  </div>
                </div>
              </motion.div>

              {/* ==================================================== */}
              {/* LAYER 2: OUTPUT SYNTHESIS LAYER */}
              {/* ==================================================== */}
              <motion.div
                onClick={() => setActiveLayer(2)}
                whileHover={{ scale: 1.03 }}
                animate={{
                  y: STACK_LAYERS[1].baseY * explosionGap,
                  z: activeLayer === 2 ? STACK_LAYERS[1].baseZ + 35 : STACK_LAYERS[1].baseZ,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className={`absolute w-[285px] h-[120px] rounded-2xl cursor-pointer transition-all ${
                  activeLayer === 2
                    ? "ring-2 ring-[#38BDF8] shadow-[0_0_35px_rgba(56,189,248,0.75)]"
                    : "shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, rgba(14, 34, 68, 0.92), rgba(6, 16, 34, 0.96))",
                  border: "2px solid rgba(56, 189, 248, 0.55)",
                }}
              >
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />

                <div className="w-full h-full p-2.5 flex flex-col justify-between rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between text-[8px] font-mono text-cyan-200">
                    <span>OUTPUT MATRIX</span>
                    <span>LAYER 02</span>
                  </div>

                  <div className="grid grid-cols-8 gap-1.5 my-auto px-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-2 rounded-xs bg-blue-900/70 border border-cyan-400/40"
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[8px] font-mono text-cyan-300">
                    <span>SYNTHESIS: CODE / TEXT / AUDIO</span>
                    <span>120 FPS</span>
                  </div>
                </div>
              </motion.div>

              {/* ==================================================== */}
              {/* LAYER 3: AI FOUNDATION MODELS (Neural Die) */}
              {/* ==================================================== */}
              <motion.div
                onClick={() => setActiveLayer(3)}
                whileHover={{ scale: 1.03 }}
                animate={{
                  y: STACK_LAYERS[2].baseY * explosionGap,
                  z: activeLayer === 3 ? STACK_LAYERS[2].baseZ + 35 : STACK_LAYERS[2].baseZ,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className={`absolute w-[285px] h-[120px] rounded-2xl cursor-pointer transition-all ${
                  activeLayer === 3
                    ? "ring-2 ring-[#0066FF] shadow-[0_0_40px_rgba(0,102,255,0.85)]"
                    : "shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, #0B1D40, #030D20)",
                  border: "2px solid rgba(0, 102, 255, 0.8)",
                }}
              >
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />

                <div className="w-full h-full p-2.5 flex flex-col justify-between rounded-2xl overflow-hidden relative">
                  <div className="flex items-center justify-between text-[8px] font-mono text-cyan-300">
                    <span>NEURAL FOUNDATION MODELS</span>
                    <span>LAYER 03</span>
                  </div>

                  <div className="relative w-18 h-11 mx-auto my-auto flex items-center justify-center bg-blue-950/80 rounded-xl border border-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.5)]">
                    <div className="absolute inset-0 bg-[#00D2FF]/20 animate-pulse rounded-xl" />
                    <Cpu className="w-6 h-6 text-[#00D2FF]" />
                  </div>

                  <div className="flex items-center justify-between text-[8px] font-mono text-cyan-300">
                    <span>LLMS • MULTIMODAL • DIFFUSION</span>
                    <span>4.8K T/S</span>
                  </div>
                </div>
              </motion.div>

              {/* ==================================================== */}
              {/* LAYER 4: AGENTIC ORCHESTRATION (Planetary Gears) */}
              {/* ==================================================== */}
              <motion.div
                onClick={() => setActiveLayer(4)}
                whileHover={{ scale: 1.03 }}
                animate={{
                  y: STACK_LAYERS[3].baseY * explosionGap,
                  z: activeLayer === 4 ? STACK_LAYERS[3].baseZ + 35 : STACK_LAYERS[3].baseZ,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className={`absolute w-[285px] h-[120px] rounded-2xl cursor-pointer transition-all ${
                  activeLayer === 4
                    ? "ring-2 ring-cyan-400 shadow-[0_0_35px_rgba(0,210,255,0.75)]"
                    : "shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, #091E3A, #041020)",
                  border: "2px solid rgba(0, 210, 255, 0.65)",
                }}
              >
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />

                <div className="w-full h-full p-2.5 flex flex-col justify-between rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between text-[8px] font-mono text-cyan-300">
                    <span>AGENTIC ORCHESTRATION</span>
                    <span>LAYER 04</span>
                  </div>

                  <div className="flex items-center justify-center gap-3 my-auto">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 rounded-full border-3 border-dashed border-[#00D2FF] flex items-center justify-center text-[#00D2FF] shadow-[0_0_10px_#00D2FF]"
                    >
                      ⚙️
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 rounded-full border-3 border-dashed border-blue-400 flex items-center justify-center text-blue-300"
                    >
                      ⚙️
                    </motion.div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                      className="w-7 h-7 rounded-full border-3 border-dashed border-cyan-300 flex items-center justify-center text-cyan-300"
                    >
                      ⚙️
                    </motion.div>
                  </div>

                  <div className="flex items-center justify-between text-[8px] font-mono text-blue-200">
                    <span>MULTI-AGENT SWARMS • MCP</span>
                    <span>AUTONOMOUS</span>
                  </div>
                </div>
              </motion.div>

              {/* ==================================================== */}
              {/* LAYER 5: DATA & CONTEXT PIPELINE (RAM & PCB) */}
              {/* ==================================================== */}
              <motion.div
                onClick={() => setActiveLayer(5)}
                whileHover={{ scale: 1.03 }}
                animate={{
                  y: STACK_LAYERS[4].baseY * explosionGap,
                  z: activeLayer === 5 ? STACK_LAYERS[4].baseZ + 35 : STACK_LAYERS[4].baseZ,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className={`absolute w-[285px] h-[120px] rounded-2xl cursor-pointer transition-all ${
                  activeLayer === 5
                    ? "ring-2 ring-blue-400 shadow-[0_0_35px_rgba(56,189,248,0.75)]"
                    : "shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, #071936, #030D1D)",
                  border: "2px solid rgba(56, 189, 248, 0.55)",
                }}
              >
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />

                <div className="w-full h-full p-2.5 flex flex-col justify-between rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between text-[8px] font-mono text-cyan-300">
                    <span>DATA & CONTEXT PIPELINE</span>
                    <span>LAYER 05</span>
                  </div>

                  <div className="flex items-center justify-around my-auto px-4">
                    <div className="w-11 h-5 bg-blue-900/80 border border-cyan-400 rounded-xs flex items-center justify-center text-[7px] font-mono text-cyan-200">
                      VECTOR
                    </div>
                    <div className="w-12 h-5 bg-blue-900/80 border border-cyan-400 rounded-xs flex items-center justify-center text-[7px] font-mono text-cyan-200">
                      EMBED
                    </div>
                    <div className="w-11 h-5 bg-blue-900/80 border border-cyan-400 rounded-xs flex items-center justify-center text-[7px] font-mono text-cyan-200">
                      RAG
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[8px] font-mono text-cyan-300">
                    <span>CHUNKING • HYBRID SEARCH</span>
                    <span>&lt; 42MS</span>
                  </div>
                </div>
              </motion.div>

              {/* ==================================================== */}
              {/* LAYER 6: CLOUD INFRASTRUCTURE (Blade Chassis) */}
              {/* ==================================================== */}
              <motion.div
                onClick={() => setActiveLayer(6)}
                whileHover={{ scale: 1.03 }}
                animate={{
                  y: STACK_LAYERS[5].baseY * explosionGap,
                  z: activeLayer === 6 ? STACK_LAYERS[5].baseZ + 35 : STACK_LAYERS[5].baseZ,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className={`absolute w-[285px] h-[120px] rounded-2xl cursor-pointer transition-all ${
                  activeLayer === 6
                    ? "ring-2 ring-[#0066FF] shadow-[0_0_35px_rgba(0,102,255,0.75)]"
                    : "shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, #06142E, #020918)",
                  border: "2px solid rgba(0, 102, 255, 0.65)",
                }}
              >
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-300 border border-slate-500 shadow-xs" />

                <div className="w-full h-full p-2.5 flex flex-col justify-between rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between text-[8px] font-mono text-blue-300">
                    <span>CLOUD INFRASTRUCTURE</span>
                    <span>LAYER 06</span>
                  </div>

                  <div className="grid grid-cols-6 gap-2 my-auto px-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-7 bg-slate-900 border border-blue-500/40 rounded-xs flex flex-col items-center justify-between p-0.5 shadow-sm"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
                        <span className="text-[6px] font-mono text-slate-400">H100</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[8px] font-mono text-cyan-300">
                    <span>NVIDIA H100 GPU CLUSTERS</span>
                    <span>99.98% SLA</span>
                  </div>
                </div>
              </motion.div>

              {/* ==================================================== */}
              {/* LAYER 7: SECURITY & ETHICS BASE (Titanium Base) */}
              {/* ==================================================== */}
              <motion.div
                onClick={() => setActiveLayer(7)}
                whileHover={{ scale: 1.03 }}
                animate={{
                  y: STACK_LAYERS[6].baseY * explosionGap,
                  z: activeLayer === 7 ? STACK_LAYERS[6].baseZ + 35 : STACK_LAYERS[6].baseZ,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className={`absolute w-[295px] h-[130px] rounded-2xl cursor-pointer transition-all ${
                  activeLayer === 7
                    ? "ring-2 ring-emerald-400 shadow-[0_0_35px_rgba(52,211,153,0.75)]"
                    : "shadow-[0_16px_36px_rgba(0,0,0,0.85)]"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, #04251B, #01110B)",
                  border: "2px solid rgba(52, 211, 153, 0.65)",
                }}
              >
                <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 rounded-full bg-slate-200 border border-slate-400 shadow-xs" />
                <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-slate-200 border border-slate-400 shadow-xs" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 rounded-full bg-slate-200 border border-slate-400 shadow-xs" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-slate-200 border border-slate-400 shadow-xs" />

                <div className="w-full h-full p-2.5 flex flex-col justify-between rounded-2xl overflow-hidden relative">
                  <div className="flex items-center justify-between text-[8px] font-mono text-emerald-300">
                    <span>SECURITY & ETHICS BASE</span>
                    <span>GOVERNANCE</span>
                  </div>

                  <div className="relative w-14 h-11 mx-auto my-auto flex items-center justify-center">
                    <div className="absolute inset-0 bg-emerald-500/25 rounded-full blur-md animate-pulse" />
                    <ShieldCheck className="w-7 h-7 text-emerald-400 drop-shadow-[0_0_10px_#34D399]" />
                  </div>

                  <div className="flex items-center justify-between text-[8px] font-mono text-emerald-300">
                    <span>AIR-GAPPED GUARDRAILS • PII</span>
                    <span>SOC-2 COMPLIANT</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          <div className="mt-1 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 bg-blue-950/70 px-3 py-1 rounded-full border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Click any tier to inspect layer architecture</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: 7 Right Callout Pins */}
        {/* ============================================================ */}
        <div className="lg:col-span-3 space-y-2.5 order-3">
          <div className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            OUTPUTS & EXECUTION
          </div>

          {STACK_LAYERS.map((layer) => {
            const isSelected = activeLayer === layer.id;

            return (
              <div
                key={`right-${layer.id}`}
                onClick={() => setActiveLayer(layer.id)}
                className={`group p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative ${
                  isSelected
                    ? "bg-gradient-to-l from-blue-900/70 via-blue-950/80 to-[#0A1629] border-[#00D2FF] shadow-[0_0_20px_rgba(0,210,255,0.3)] -translate-x-1"
                    : "bg-[#09152B]/60 hover:bg-[#0E2042] border-blue-500/20 hover:border-blue-400/40"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 mt-1 transition-all ${
                      isSelected
                        ? "bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]"
                        : "bg-slate-600 group-hover:bg-[#00D2FF]"
                    }`}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`text-xs font-bold tracking-tight font-mono uppercase ${
                          isSelected ? "text-cyan-300" : "text-white group-hover:text-cyan-300"
                        }`}
                      >
                        {layer.rightTitle}
                      </h4>
                      {isSelected && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] font-bold">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 leading-relaxed mt-0.5 line-clamp-2">
                      {layer.rightDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ============================================================ */}
      {/* BOTTOM FOOTER BAR */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto mt-6 sm:mt-8 pt-4 border-t border-blue-500/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-300 font-medium font-sans">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Full-Stack AI Engineering</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Zero-Leakage Airgap</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>SOC-2 Aligned</span>
            </span>
          </div>

          <Link
            to="/lets-create"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#00D2FF] hover:from-[#0052CC] hover:to-[#00B4D8] text-white font-bold text-xs sm:text-sm font-sans shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all transform hover:scale-[1.02]"
          >
            <span>Schedule AI Architecture Session</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </div>

    </div>
  );
};

export default GenAiExplodedHardwareStack;
