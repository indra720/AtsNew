import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Laptop,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Globe,
  Sparkles,
  CheckCircle2,
  X,
  Activity,
  Terminal,
  Brain,
  Cpu,
  Layers,
  Code2,
  Database,
  Server,
  ShieldCheck,
  ChevronRight,
  Maximize2,
  Download,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

// ================================================================
// THE 7 ARCHITECTURAL TIERS (EXACT 1:1 MATCH TO REFERENCE POSTER)
// ================================================================
interface TierInfo {
  id: number;
  leftTitle: string;
  leftDesc: string;
  leftIcon: React.ElementType;
  rightTitle: string;
  rightDesc: string;
  hotspotTopPercent: number; // Vertical position on the 3D model
  techStack: string[];
  architectureDetail: string;
}

const TIERS: TierInfo[] = [
  {
    id: 1,
    leftTitle: "PROMPT ENGINEERING",
    leftDesc: "Craft powerful inputs that drive intelligent outputs",
    leftIcon: Terminal,
    rightTitle: "USER INTERFACE",
    rightDesc: "Chat UI, dashboards, visualizations & interactions",
    hotspotTopPercent: 9,
    techStack: ["React 19", "Tailwind CSS", "Next.js", "WebSockets", "Streaming Markdown"],
    architectureDetail:
      "Enterprise conversational interfaces, dynamic real-time dashboards, and human-in-the-loop control panels with sub-100ms streaming latency.",
  },
  {
    id: 2,
    leftTitle: "LLMS & FOUNDATIONS",
    leftDesc: "Understand Large Language Models and how they work",
    leftIcon: Brain,
    rightTitle: "OUTPUT LAYER",
    rightDesc: "Generated text, images, code, insights & more",
    hotspotTopPercent: 24,
    techStack: ["Tokenizers", "Byte-Pair Encoding", "Multi-Head Attention", "AST Parsers"],
    architectureDetail:
      "Multi-modal synthesis pipeline transforming raw latent space vectors into deterministic code ASTs, natural language, and visual assets.",
  },
  {
    id: 3,
    leftTitle: "AI TOOLS & PLATFORMS",
    leftDesc: "Leverage cutting-edge tools to accelerate your workflow",
    leftIcon: Cpu,
    rightTitle: "AI MODELS",
    rightDesc: "LLMs, diffusion models, embedding models & more",
    hotspotTopPercent: 37,
    techStack: ["Claude 3.5 Sonnet", "GPT-4o", "LLaMA 3.3 70B", "Flux.1", "CLIP"],
    architectureDetail:
      "Foundation model layer hosting proprietary weights, domain fine-tuned LoRA checkpoints, and high-throughput quantizations (FP8 / AWQ).",
  },
  {
    id: 4,
    leftTitle: "MODEL INTEGRATION",
    leftDesc: "Connect AI models seamlessly into real-world applications",
    leftIcon: Code2,
    rightTitle: "AI ORCHESTRATION",
    rightDesc: "APIs, vector search, chains, agents & workflows",
    hotspotTopPercent: 49,
    techStack: ["MCP Protocol", "LangGraph", "Semantic Kernel", "Temporal DAGs"],
    architectureDetail:
      "Multi-agent swarm coordination engine executing complex decision trees, OpenAPI tool dispatch, memory state persistence, and self-healing loops.",
  },
  {
    id: 5,
    leftTitle: "DATA & CONTEXT LAYER",
    leftDesc: "Use data intelligently with embeddings, vectors & context management",
    leftIcon: Database,
    rightTitle: "DATA PIPELINE",
    rightDesc: "Data ingestion, processing, chunking & embeddings",
    hotspotTopPercent: 61,
    techStack: ["Qdrant", "Pinecone", "Apache Kafka", "Cohere Rerank", "Unstructured.io"],
    architectureDetail:
      "Sub-40ms hybrid vector retrieval pipeline combining semantic dense embeddings with BM25 keyword search over enterprise document stores.",
  },
  {
    id: 6,
    leftTitle: "INFRASTRUCTURE LAYER",
    leftDesc: "Built on scalable cloud infrastructure and APIs",
    leftIcon: Server,
    rightTitle: "CLOUD INFRASTRUCTURE",
    rightDesc: "Cloud services, GPUs, storage, scaling & deployment",
    hotspotTopPercent: 74,
    techStack: ["NVIDIA H100 SXM5", "vLLM", "TensorRT-LLM", "Kubernetes", "Slurm"],
    architectureDetail:
      "Distributed GPU inference cluster with dynamic KV-cache management, continuous batching, and multi-cloud failover across AWS, Azure & GCP.",
  },
  {
    id: 7,
    leftTitle: "ETHICS & GOVERNANCE",
    leftDesc: "Ensure responsible AI with privacy, fairness and transparency",
    leftIcon: ShieldCheck,
    rightTitle: "SECURITY & ETHICS",
    rightDesc: "Guardrails, bias checks, data privacy, compliance & ethics",
    hotspotTopPercent: 88,
    techStack: ["NeMo Guardrails", "Presidio PII", "SOC-2 Type II", "HIPAA Vault"],
    architectureDetail:
      "Air-gapped security shield providing real-time prompt injection defense, automated PII scrubbing, and tamper-evident cryptographic audit logs.",
  },
];

export const MasterGenAIRevolution3D: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number>(3); // Default to Tier 3 (AI Models)
  const [inspectModalTier, setInspectModalTier] = useState<TierInfo | null>(null);
  const [posterModalOpen, setPosterModalOpen] = useState<boolean>(false);
  const [centerViewMode, setCenterViewMode] = useState<"model" | "poster">("model");

  // Subtle interactive 3D mouse parallax on the hardware stack
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const currentTier = TIERS.find((t) => t.id === activeTier) || TIERS[2];

  return (
    <section
      id="gen-ai-ecosystem"
      className="relative w-full bg-[#030712] text-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-3 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-blue-900/40 select-none scroll-mt-32"
    >
      {/* Background Volumetric Gold & Sapphire Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[750px] h-[400px] bg-gradient-to-b from-[#00D2FF]/10 via-[#0066FF]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[750px] h-[400px] bg-gradient-to-t from-[#FBBF24]/10 via-[#0066FF]/8 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1360px] mx-auto relative z-10">

        {/* ============================================================ */}
        {/* 1. TOP HEADER: ATS GLOBAL TECH REVOLUTION BRANDING */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 mb-8 border-b border-slate-800/80">
          
          {/* Left Column: Brand Badge + Headline */}
          <div className="space-y-2">
            {/* ATS Brand Emblem Badge */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00D2FF] via-[#0066FF] to-[#0A1629] text-white font-black flex items-center justify-center text-xl font-mono shadow-[0_0_25px_rgba(0,102,255,0.6)] border-2 border-cyan-400 shrink-0">
                AT
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-black tracking-widest text-[#00D2FF] uppercase font-mono">
                    ATS GLOBAL TECH
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 border border-cyan-400/30">
                    ENTERPRISE
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Enterprise Generative AI Architecture & Engineering Stack
                </div>
              </div>
            </div>

            {/* Headline: MASTER THE GEN AI REVOLUTION */}
            <div className="pt-2">
              <div className="text-xs sm:text-sm font-black tracking-widest text-slate-300 uppercase font-mono">
                MASTER THE
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none font-display">
                GEN AI
              </h2>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-[#FBBF24] via-amber-300 to-[#F59E0B] bg-clip-text text-transparent leading-none font-display">
                REVOLUTION
              </div>
              <div className="text-xs sm:text-sm font-bold tracking-widest text-[#00D2FF] uppercase font-mono mt-1.5 flex items-center gap-2">
                <span>BY ATS GLOBAL TECH</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
            </div>
          </div>

          {/* Right Column: Subtitle, Blueprint Trigger & Active Tier Pill */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
            <div className="text-left lg:text-right max-w-sm">
              <div className="text-base sm:text-lg font-bold text-white font-sans">
                Explore. Understand. Build.
              </div>
              <div className="text-base sm:text-lg font-black text-[#00D2FF] font-sans">
                The Future is Generative.
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                An architectural breakdown of the 7 enterprise tiers powering generative artificial intelligence.
              </p>
            </div>

            {/* Active Tier Pill & Blueprint Button */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setPosterModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition shadow-sm cursor-pointer"
                title="View Full Architecture Diagram"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>Full Blueprint</span>
              </button>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#09152B] border border-cyan-400/40 text-xs font-mono shadow-[0_0_20px_rgba(0,210,255,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-slate-300">TIER {currentTier.id}:</span>
                <span className="font-bold text-[#00D2FF] uppercase">{currentTier.rightTitle}</span>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 2. THE 3-COLUMN ARCHITECTURAL EXPLODED HARDWARE STACK */}
        {/* Left 7 Callouts | Center Real 3D Hardware Stack | Right 7 Callouts */}
        {/* ============================================================ */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative py-4"
        >
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: 7 FOUNDATION TIERS */}
          {/* ============================================================ */}
          <div className="lg:col-span-3 space-y-2.5 order-2 lg:order-1">
            <div className="text-[11px] font-mono font-bold text-[#00D2FF] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
              FOUNDATIONS & INPUTS
            </div>

            {TIERS.map((tier) => {
              const isSelected = activeTier === tier.id;
              const Icon = tier.leftIcon;

              return (
                <div
                  key={`left-${tier.id}`}
                  onClick={() => setActiveTier(tier.id)}
                  className={`group relative p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                    isSelected
                      ? "bg-gradient-to-r from-[#0066FF]/30 via-[#0A1629] to-[#0A1629] border-[#00D2FF] shadow-[0_0_25px_rgba(0,210,255,0.3)] translate-x-1"
                      : "bg-[#081224]/80 hover:bg-[#0D1C38] border-slate-800 hover:border-cyan-400/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Icon in badge */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        isSelected
                          ? "bg-gradient-to-br from-[#00D2FF] to-[#0066FF] text-white font-bold shadow-[0_0_15px_#00D2FF]"
                          : "bg-white/10 text-slate-300 group-hover:text-white group-hover:bg-[#0066FF]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4
                          className={`text-xs font-bold tracking-tight font-mono uppercase ${
                            isSelected ? "text-[#00D2FF]" : "text-white group-hover:text-[#00D2FF]"
                          }`}
                        >
                          {tier.leftTitle}
                        </h4>
                        {/* Cyan connector dot pointing toward the 3D model */}
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 transition-all ${
                            isSelected
                              ? "bg-[#00D2FF] shadow-[0_0_10px_#00D2FF] scale-125"
                              : "bg-slate-700 group-hover:bg-[#00D2FF]"
                          }`}
                        />
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5 line-clamp-2">
                        {tier.leftDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ============================================================ */}
          {/* CENTER COLUMN: THE PHOTOREALISTIC 3D HARDWARE STACK */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] order-1 lg:order-2">
            
            {/* Glowing Ambient Core Light behind the 3D Model */}
            <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#0066FF]/35 via-[#00D2FF]/20 to-transparent blur-[100px] pointer-events-none" />

            {/* Mode Switcher: Clean 3D Model vs Full Blueprint Poster */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#081224]/90 border border-slate-700/80 mb-4 z-20 shadow-xl backdrop-blur-md">
              <button
                type="button"
                onClick={() => setCenterViewMode("model")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  centerViewMode === "model"
                    ? "bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white shadow-[0_0_15px_rgba(0,210,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>3D Model (Interactive)</span>
              </button>
              <button
                type="button"
                onClick={() => setCenterViewMode("poster")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  centerViewMode === "poster"
                    ? "bg-[#FBBF24] text-slate-950 font-black shadow-[0_0_15px_rgba(251,191,36,0.5)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Full Blueprint Poster</span>
              </button>
            </div>

            {/* Center Content: Either Clean 3D Model or Full Blueprint Poster */}
            {centerViewMode === "model" ? (
              <div
                style={{
                  transform: `perspective(1000px) rotateY(${mouseOffset.x * 0.35}deg) rotateX(${mouseOffset.y * 0.35}deg)`,
                  transition: "transform 0.15s ease-out",
                }}
                className="relative w-full max-w-[440px] flex items-center justify-center"
              >
                {/* 100% Clean Photorealistic 3D Exploded Technology Stack (STRICTLY NO background text, NO cutoffs, TRUE TRANSPARENT PNG) */}
                <img
                  src="/images/genai-3d-model-transparent.png"
                  alt="Pristine 3D Exploded Generative AI Technology Assembly"
                  className="w-full h-auto object-contain max-h-[720px] drop-shadow-[0_25px_60px_rgba(0,102,255,0.45)] filter brightness-105"
                />

                {/* Pulsating Hotspot Pins on each layer with glowing beacon ring */}
                {TIERS.map((tier) => {
                  const isSelected = activeTier === tier.id;
                  return (
                    <button
                      key={`hotspot-${tier.id}`}
                      onClick={() => setActiveTier(tier.id)}
                      style={{ top: `${tier.hotspotTopPercent}%` }}
                      className="absolute right-[49%] -translate-y-1/2 group/pin z-20 cursor-pointer"
                      title={`Inspect Layer ${tier.id}: ${tier.rightTitle}`}
                    >
                      <span className="relative flex h-6 w-6 items-center justify-center">
                        {isSelected && (
                          <>
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75" />
                            <span className="absolute -inset-3 rounded-full bg-cyan-400/20 blur-sm pointer-events-none" />
                          </>
                        )}
                        <span
                          className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 transition-all ${
                            isSelected
                              ? "bg-[#00D2FF] border-white shadow-[0_0_15px_#00D2FF] scale-125"
                              : "bg-[#030712] border-amber-400/80 group-hover/pin:border-cyan-400 group-hover/pin:scale-125"
                          }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Full Blueprint Poster View with complete uncropped text */
              <div
                onClick={() => setPosterModalOpen(true)}
                className="relative w-full max-w-[420px] flex flex-col items-center justify-center cursor-pointer group"
              >
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 group-hover:border-[#00D2FF] transition-all shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  <img
                    src="/images/genai-poster-ats.png"
                    alt="Full ATS Gen AI Architecture Blueprint Poster"
                    className="w-full h-auto object-contain max-h-[680px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <span className="px-4 py-2 rounded-xl bg-[#0066FF] text-white text-xs font-mono font-bold flex items-center gap-2 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to Enlarge Fullscreen</span>
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-mono mt-2 flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3 text-cyan-400" />
                  <span>Click poster to expand in high-definition</span>
                </p>
              </div>
            )}

            {/* Active Layer Quick Info Badge at bottom of model */}
            <div className="mt-4 px-4 py-2 rounded-2xl bg-[#09152B]/90 border border-slate-700/80 backdrop-blur-md flex items-center gap-3 shadow-lg">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">Tier {currentTier.id}:</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#00D2FF]">{currentTier.rightTitle}</span>
              <button
                onClick={() => setInspectModalTier(currentTier)}
                className="ml-2 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00D2FF] hover:brightness-110 text-white transition flex items-center gap-1 cursor-pointer shadow-md"
              >
                <span>Specs</span>
                <ChevronRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => setPosterModalOpen(true)}
                className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1 cursor-pointer border border-slate-700"
                title="View Full High-Resolution Infographic Blueprint"
              >
                <Maximize2 className="w-3 h-3 text-[#FBBF24]" />
                <span>Full Poster</span>
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: 7 EXECUTION TIERS */}
          {/* ============================================================ */}
          <div className="lg:col-span-3 space-y-2.5 order-3">
            <div className="text-[11px] font-mono font-bold text-[#FBBF24] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24] shadow-[0_0_8px_#FBBF24]" />
              OUTPUTS & EXECUTION
            </div>

            {TIERS.map((tier) => {
              const isSelected = activeTier === tier.id;

              return (
                <div
                  key={`right-${tier.id}`}
                  onClick={() => setActiveTier(tier.id)}
                  className={`group relative p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                    isSelected
                      ? "bg-gradient-to-l from-[#0066FF]/30 via-[#0A1629] to-[#0A1629] border-[#00D2FF] shadow-[0_0_25px_rgba(0,210,255,0.3)] -translate-x-1"
                      : "bg-[#081224]/80 hover:bg-[#0D1C38] border-slate-800 hover:border-amber-400/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Amber / Cyan connector dot pointing toward the 3D model */}
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 mt-1 transition-all ${
                        isSelected
                          ? "bg-[#00D2FF] shadow-[0_0_10px_#00D2FF] scale-125"
                          : "bg-slate-700 group-hover:bg-[#FBBF24]"
                      }`}
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4
                          className={`text-xs font-bold tracking-tight font-mono uppercase ${
                            isSelected ? "text-[#00D2FF]" : "text-white group-hover:text-[#FBBF24]"
                          }`}
                        >
                          {tier.rightTitle}
                        </h4>
                        {isSelected && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-cyan-400/20 text-[#00D2FF] font-bold border border-cyan-400/30">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5 line-clamp-2">
                        {tier.rightDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ============================================================ */}
        {/* 3. BOTTOM FOOTER BAR: 4 PILLARS & ATS CTA */}
        {/* ============================================================ */}
        <div className="mt-10 pt-6 border-t border-slate-800/80">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: FROM ZERO TO GEN AI EXPERT with 4 Pillars */}
            <div className="space-y-2.5 w-full lg:w-auto">
              <div className="text-xs sm:text-sm font-black font-mono tracking-wider text-[#00D2FF] uppercase text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-[#FBBF24]" />
                <span>FROM ZERO TO GEN AI EXPERT</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 bg-[#081224] px-3 py-2 rounded-xl border border-slate-800">
                  <BookOpen className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span className="font-medium text-[11px]">Hands-on Learning</span>
                </div>
                <div className="flex items-center gap-2 bg-[#081224] px-3 py-2 rounded-xl border border-slate-800">
                  <Laptop className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span className="font-medium text-[11px]">Real-world Projects</span>
                </div>
                <div className="flex items-center gap-2 bg-[#081224] px-3 py-2 rounded-xl border border-slate-800">
                  <GraduationCap className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span className="font-medium text-[11px]">Expert Mentorship</span>
                </div>
                <div className="flex items-center gap-2 bg-[#081224] px-3 py-2 rounded-xl border border-slate-800">
                  <TrendingUp className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span className="font-medium text-[11px]">Career Growth</span>
                </div>
              </div>
            </div>

            {/* Right: JOIN THE GEN AI MOVEMENT Card CTA */}
            <Link
              to="/lets-create"
              className="group p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 via-[#0A1629] to-[#0A1629] border border-cyan-400/50 hover:border-[#00D2FF] shadow-[0_0_25px_rgba(0,102,255,0.25)] hover:shadow-[0_0_35px_rgba(0,210,255,0.4)] transition-all flex items-center gap-4 shrink-0 text-left"
            >
              <div>
                <div className="text-[11px] font-mono font-bold tracking-wider text-[#00D2FF] uppercase">
                  JOIN THE GEN AI MOVEMENT
                </div>
                <div className="text-xs sm:text-sm font-black tracking-widest text-white uppercase mt-0.5">
                  LEARN | BUILD | INNOVATE
                </div>
                <div className="text-[11px] text-slate-300">with ATS Global Tech</div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D2FF] to-[#0066FF] text-white flex items-center justify-center group-hover:scale-110 transition-all shadow-md">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

          </div>

          {/* Website Link in Center */}
          <div className="text-center mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
            <Globe className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>www.atsglobaltech.in</span>
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* 4. TIER DEEP-DIVE INSPECTION MODAL */}
      {/* ============================================================ */}
      {inspectModalTier && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#09152B] border border-cyan-400/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(0,210,255,0.3)] max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setInspectModalTier(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00D2FF] to-[#0066FF] text-white flex items-center justify-center font-bold shadow-lg">
                <inspectModalTier.leftIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-[#00D2FF] uppercase">
                  TIER {inspectModalTier.id} ARCHITECTURE SPECIFICATION
                </span>
                <h3 className="text-2xl font-black text-white">
                  {inspectModalTier.rightTitle}
                </h3>
              </div>
            </div>

            {/* Detail */}
            <div className="p-4 rounded-2xl bg-[#040A18] border border-slate-800 mb-5 text-sm text-slate-300 leading-relaxed">
              {inspectModalTier.architectureDetail}
            </div>

            {/* Technology Stack Tags */}
            <div className="mb-6">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">
                Supported Technologies & Frameworks:
              </div>
              <div className="flex flex-wrap gap-2">
                {inspectModalTier.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-[#0066FF]/20 border border-cyan-400/30 text-xs font-mono text-cyan-300 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                Want to deploy Tier {inspectModalTier.id} capabilities in your enterprise?
              </div>
              <Link
                to="/lets-create"
                onClick={() => setInspectModalTier(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#0066FF] hover:brightness-110 text-white font-bold text-xs sm:text-sm text-center shadow-md transition"
              >
                Schedule Architecture Consultation
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. FULL ARCHITECTURE BLUEPRINT POSTER MODAL */}
      {/* ============================================================ */}
      {posterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-4xl bg-[#030712] border border-cyan-400/40 rounded-3xl p-4 sm:p-6 shadow-[0_0_100px_rgba(0,102,255,0.4)] max-h-[92vh] flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <div>
                  <h3 className="text-lg font-black text-white font-display">
                    GEN AI REVOLUTION — SYSTEM BLUEPRINT
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    High-Resolution Technical Reference Poster by ATS Global Tech
                  </p>
                </div>
              </div>

              <button
                onClick={() => setPosterModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Image Container */}
            <div className="flex-1 overflow-auto py-4 flex items-center justify-center">
              <img
                src="/images/genai-poster-ats.png"
                alt="ATS Global Tech Gen AI Full Architecture Blueprint"
                className="max-h-[70vh] w-auto object-contain rounded-xl border border-slate-800 shadow-2xl"
              />
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 font-mono">
                ATS Global Tech &bull; Enterprise AI Architecture
              </span>
              <a
                href="/images/genai-poster-ats.png"
                download="ATS_GenAI_Architecture_Blueprint.png"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#0066FF] text-white font-bold font-mono text-xs flex items-center gap-2 hover:brightness-110 transition shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download High-Res Blueprint</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default MasterGenAIRevolution3D;
