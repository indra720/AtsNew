import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Sparkles,
  Bot,
  Brain,
  Cpu,
  Layers,
  Activity,
  Zap,
  ShieldCheck,
  Send,
  Eye,
  CheckCircle2,
  ArrowRight,
  Code,
  Terminal,
  Volume2,
  VolumeX,
  Share2,
} from "lucide-react";
import GenAiNeuralCore3DCanvas from "./GenAiNeuralCore3DCanvas";

interface GenAiCardDetails {
  id: string;
  title: string;
  tag: string;
  category: string;
  icon: React.ElementType;
  gradient: string;
  highlightColor: string;
  shortDesc: string;
  architectureSummary: string;
  metrics: { label: string; value: string }[];
  steps: { step: string; detail: string }[];
  samplePrompt: string;
  simulatedResponse: string;
}

const GEN_AI_CARDS: GenAiCardDetails[] = [
  {
    id: "agents",
    title: "Autonomous Agentic Orchestration",
    tag: "MULTI-AGENT SWARMS",
    category: "AGENTIC SYSTEMS",
    icon: Bot,
    gradient: "from-blue-600 via-cyan-500 to-indigo-600",
    highlightColor: "#00D2FF",
    shortDesc:
      "Self-directed AI agents that plan, reason, invoke custom APIs, execute tools, and self-correct without continuous human intervention.",
    architectureSummary:
      "Hierarchical agent swarms orchestrated via DAG execution graphs, state machine persistence, and automated sandboxed unit testing.",
    metrics: [
      { label: "Execution Speed", value: "3.8x Faster" },
      { label: "Autonomous Success", value: "98.7%" },
      { label: "Tool Protocols", value: "MCP / OpenAPI" },
    ],
    steps: [
      { step: "Task Ingestion", detail: "Deconstructs natural language goal into multi-step atomic sub-tasks." },
      { step: "Tool Calling", detail: "Executes real-world actions via REST/GraphQL APIs, databases & terminals." },
      { step: "Self-Reflection & Healing", detail: "Validates AST outputs, catches syntax errors, and auto-corrects code." },
    ],
    samplePrompt: "Deploy automated multi-agent code reviewer across pull requests with security audit.",
    simulatedResponse:
      "Agents spawned: CodeAuditorAgent, SecurityVulnAgent, PerfOptimizer. 4 vulnerabilities flagged, 2 auto-remediated via AST patches. PR ready for merge.",
  },
  {
    id: "rag",
    title: "Hybrid Neural RAG & Vector Knowledge",
    tag: "SUB-100MS RETRIEVAL",
    category: "ENTERPRISE KNOWLEDGE",
    icon: Brain,
    gradient: "from-cyan-500 via-blue-600 to-teal-500",
    highlightColor: "#38BDF8",
    shortDesc:
      "Connect private enterprise repositories, documents, and databases to LLMs with zero hallucination and strict multi-tenant access control.",
    architectureSummary:
      "Hybrid sparse-dense retrieval combining BM25 keyword search with Qdrant/Pinecone dense embeddings and Cohere cross-encoder reranking.",
    metrics: [
      { label: "Vector Search", value: "< 42ms" },
      { label: "Context Window", value: "2M+ Tokens" },
      { label: "Data Leakage Risk", value: "0.00%" },
    ],
    steps: [
      { step: "Context Chunking", detail: "Semantic document chunking with metadata tags and hierarchy graph mapping." },
      { step: "Dense Vector Embedding", detail: "Multi-vector dense embeddings indexed in high-throughput vector store." },
      { step: "Cross-Encoder Rerank", detail: "Sub-second reranking ensuring only highest relevance snippets reach LLM." },
    ],
    samplePrompt: "Retrieve Q3 financial covenants and cross-reference with updated regulatory compliance.",
    simulatedResponse:
      "Extracted 3 relevant clauses from CreditAgreement_Q3.pdf (similarity 0.94). Verified 100% compliance with Basel III leverage constraints.",
  },
  {
    id: "multimodal",
    title: "Multimodal Vision & Real-Time Audio",
    tag: "VOICE & SIGHT",
    category: "MULTIMODAL INTELLIGENCE",
    icon: Eye,
    gradient: "from-purple-600 via-indigo-600 to-blue-500",
    highlightColor: "#A855F7",
    shortDesc:
      "Real-time bidirectional video, high-resolution document vision inspection, and sub-300ms interactive conversational voice streams.",
    architectureSummary:
      "WebSocket streaming audio pipelines powered by Gemini Live API and WebRTC low-latency visual frame analysis.",
    metrics: [
      { label: "Audio Latency", value: "< 280ms" },
      { label: "Vision Resolution", value: "4K Native" },
      { label: "Languages", value: "95+ Global" },
    ],
    steps: [
      { step: "Frame Streaming", detail: "Analyzes continuous 30fps camera feeds for defect detection and live OCR." },
      { step: "Full-Duplex Voice", detail: "Native speech-to-speech with natural interruptions and expressive intonation." },
      { step: "Spatial Grounding", detail: "Locates and marks bounding boxes with pixel-level coordinate precision." },
    ],
    samplePrompt: "Analyze architectural blueprint blueprint_v4.png and verify fire egress compliance.",
    simulatedResponse:
      "Analyzed blueprint (4096x2160). Identified 2 egress corridors. Corridor #2 violates NFPA 101 width requirements by 14 inches. Marked with red bounding box.",
  },
  {
    id: "finetuning",
    title: "Domain Fine-Tuned Models & Governance",
    tag: "ZERO LEAKAGE • SOC-2",
    category: "PRIVATE DEPLOYMENTS",
    icon: ShieldCheck,
    gradient: "from-blue-600 via-indigo-700 to-cyan-500",
    highlightColor: "#60A5FA",
    shortDesc:
      "Custom LoRA/QLoRA fine-tuned open-source and proprietary models running on your private cloud with strict safety guardrails and determinism.",
    architectureSummary:
      "Distributed vLLM / TensorRT-LLM inference clusters with guaranteed structured JSON schema adherence and PII redaction filters.",
    metrics: [
      { label: "Accuracy Gain", value: "+34.2%" },
      { label: "Inference Cost", value: "-68% vs API" },
      { label: "Compliance", value: "SOC-2 / HIPAA" },
    ],
    steps: [
      { step: "Dataset Synthesis", detail: "Curates, de-duplicates, and scrubs proprietary domain training tokens." },
      { step: "PEFT / LoRA Adapters", detail: "Fine-tunes domain weights on high-efficiency multi-GPU clusters." },
      { step: "Deterministic Output", detail: "Enforces strict JSON schema validation and real-time safety guardrails." },
    ],
    samplePrompt: "Generate structured ICD-10 medical billing claim from anonymized doctor notes.",
    simulatedResponse:
      "Generated valid JSON claim: Code E11.9 (Type 2 diabetes mellitus), CPT 99214. PII scrubbed. 100% schema match verified.",
  },
];

interface GenerativeAiModal3DProps {
  isOpen: boolean;
  onClose: () => void;
  initialCardId?: string;
}

export const GenerativeAiModal3D: React.FC<GenerativeAiModal3DProps> = ({
  isOpen,
  onClose,
  initialCardId,
}) => {
  const [activeCardId, setActiveCardId] = useState<string>(initialCardId || "agents");
  const [viewMode, setViewMode] = useState<"3d" | "video">("3d");
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [simulatedStream, setSimulatedStream] = useState<string>("");
  const [tokenCounter, setTokenCounter] = useState<number>(4820);

  const activeCard = GEN_AI_CARDS.find((c) => c.id === activeCardId) || GEN_AI_CARDS[0];

  // Live token speed ticker
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTokenCounter((prev) => prev + Math.floor(Math.random() * 45) - 20);
    }, 400);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Handle Interactive Prompt Execution
  const handleExecutePrompt = (promptText?: string) => {
    const query = promptText || customPrompt || activeCard.samplePrompt;
    setIsGenerating(true);
    setSimulatedStream("");

    const targetOutput = `[ATS-GENAI :: ${activeCard.tag}] Processing query: "${query}"...\n` + activeCard.simulatedResponse;
    let i = 0;
    const timer = setInterval(() => {
      setSimulatedStream(targetOutput.slice(0, i));
      i += 3;
      if (i > targetOutput.length) {
        clearInterval(timer);
        setIsGenerating(false);
      }
    }, 18);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto">
        {/* Backdrop with 3D Holographic Ambient Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040914]/85 backdrop-blur-2xl"
        />

        {/* 3D Generative AI Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="relative w-full max-w-7xl bg-[#091222]/95 border border-blue-500/30 rounded-3xl shadow-[0_25px_80px_rgba(0,102,255,0.35)] overflow-hidden text-white z-10 flex flex-col max-h-[94vh]"
        >
          {/* Top Holographic Navigation Bar */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-blue-500/20 bg-gradient-to-r from-blue-950/60 via-[#0A1629] to-blue-950/60 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0066FF] to-[#00D2FF] flex items-center justify-center shadow-[0_0_15px_#0066FF]">
                <Sparkles className="w-4 h-4 text-white animate-spin-slow" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-black tracking-wide font-display text-white">
                    ATS GENERATIVE AI STUDIO
                  </span>
                  <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-[#00D2FF] border border-blue-400/30">
                    3D NEURAL MATRIX v4.5
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE PIPELINE ACTIVE
                  </span>
                  <span>•</span>
                  <span>{tokenCounter.toLocaleString()} TOKENS/SEC</span>
                </div>
              </div>
            </div>

            {/* View Mode Switcher + Close */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-white/5 p-1 rounded-2xl border border-white/10 flex items-center gap-1">
                <button
                  onClick={() => setViewMode("3d")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === "3d"
                      ? "bg-[#0066FF] text-white shadow-[0_0_12px_#0066FF]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">3D Neural Core</span>
                  <span className="md:hidden">3D</span>
                </button>

                <button
                  onClick={() => setViewMode("video")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === "video"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_#00D2FF]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Live Stream / Video</span>
                  <span className="md:hidden">Video</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 border border-white/10 hover:border-rose-500/30 flex items-center justify-center transition-all"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
            
            {/* Top Interactive Stage: 3D Canvas / Video Player Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Stage (7 Cols): 3D Neural Matrix Canvas OR Video Stream */}
              <div className="lg:col-span-7 bg-[#050D1A] rounded-3xl border border-blue-500/25 p-4 sm:p-5 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[380px] sm:min-h-[440px]">
                
                {/* HUD Top Bar Overlay */}
                <div className="relative z-20 flex items-center justify-between text-xs font-mono mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 text-[#00D2FF] border border-blue-400/30 font-bold flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 animate-pulse text-[#00D2FF]" />
                      {viewMode === "3d" ? "REALTIME 3D QUANTUM SYNAPSE" : "ENTERPRISE AI PIPELINE DEMO"}
                    </span>
                  </div>

                  {viewMode === "video" && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                        className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                        title={isPlayingVideo ? "Pause" : "Play"}
                      >
                        {isPlayingVideo ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  )}
                </div>

                {/* Main View Area */}
                <div className="relative flex-1 rounded-2xl overflow-hidden bg-black/60 border border-blue-500/20 flex items-center justify-center">
                  {viewMode === "3d" ? (
                    <div className="absolute inset-0 w-full h-full">
                      <GenAiNeuralCore3DCanvas activeCapability={activeCard.title} />
                      
                      {/* Sub-HUD floating badge */}
                      <div className="absolute bottom-3 left-3 bg-[#0A1629]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-slate-300 pointer-events-none">
                        Interactive Core: Drag to rotate • Synapse stream active
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <video
                        src="/company.mp4"
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Futuristic Video AI HUD Grid Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
                      
                      {/* Scanning line animation */}
                      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent animate-scan pointer-events-none opacity-60" />

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-cyan-300 bg-black/70 backdrop-blur-md px-3 py-2 rounded-xl border border-cyan-500/30">
                        <span className="flex items-center gap-1.5">
                          <Zap className="w-3 h-3 text-[#00D2FF]" />
                          STREAM: /company.mp4 • AI VISION ENGINE
                        </span>
                        <span className="text-slate-400">1080p 60FPS</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Telemetry Footer Under Stage */}
                <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-slate-400 text-[10px]">AVG LATENCY</div>
                    <div className="text-sm font-bold text-[#00D2FF]">142ms TTFT</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-slate-400 text-[10px]">REASONING PASS</div>
                    <div className="text-sm font-bold text-emerald-400">99.8% F1</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-slate-400 text-[10px]">SECURITY LEVEL</div>
                    <div className="text-sm font-bold text-purple-400">SOC2 AIRGAP</div>
                  </div>
                </div>
              </div>

              {/* Right Stage (5 Cols): Active Generative AI Explanatory Detail Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#0D1C36] via-[#09152B] to-[#0A1830] rounded-3xl border border-blue-400/30 p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-blue-500/20 text-[#00D2FF] border border-blue-400/30">
                      {activeCard.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {activeCard.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white font-display mb-2.5">
                    {activeCard.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-4">
                    {activeCard.shortDesc}
                  </p>

                  {/* Architecture Pillars List */}
                  <div className="space-y-2 mb-5">
                    {activeCard.steps.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs"
                      >
                        <div className="w-5 h-5 rounded-lg bg-[#0066FF]/30 text-[#00D2FF] flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <strong className="text-white block font-semibold">{s.step}</strong>
                          <span className="text-slate-400 text-[11px] leading-relaxed">{s.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Metrics Pill Badges */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {activeCard.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-xl bg-blue-950/40 border border-blue-500/20 text-center font-mono"
                      >
                        <div className="text-[10px] text-slate-400">{m.label}</div>
                        <div className="text-xs font-bold text-white mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fast Action CTA */}
                <button
                  onClick={() => handleExecutePrompt(activeCard.samplePrompt)}
                  className="w-full mt-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-[#0066FF] to-[#00D2FF] hover:from-[#0052CC] hover:to-[#00B4D8] text-white font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(0,102,255,0.4)] flex items-center justify-center gap-2 transition-all transform active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Simulate This GenAI Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ========================================================== */}
            {/* 4 EXPLANATORY MODAL CARDS (Switch Active Pillar) */}
            {/* ========================================================== */}
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 font-display">
                  <Layers className="w-4 h-4 text-[#00D2FF]" />
                  <span>CORE GENERATIVE AI PILLARS AT ATS GLOBAL TECH</span>
                </h4>
                <span className="text-xs text-slate-400 font-mono">
                  Click any card to inspect architecture
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {GEN_AI_CARDS.map((card) => {
                  const Icon = card.icon;
                  const isSelected = card.id === activeCardId;

                  return (
                    <div
                      key={card.id}
                      onClick={() => {
                        setActiveCardId(card.id);
                        handleExecutePrompt(card.samplePrompt);
                      }}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                        isSelected
                          ? "bg-gradient-to-b from-[#0F244A] to-[#09152B] border-[#00D2FF] shadow-[0_0_25px_rgba(0,210,255,0.25)] scale-[1.02] ring-1 ring-[#00D2FF]"
                          : "bg-white/5 hover:bg-white/10 border-white/10 hover:border-blue-400/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${card.gradient} shadow-md`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40"
                              : "bg-white/10 text-slate-400"
                          }`}
                        >
                          {card.tag}
                        </span>
                      </div>

                      <h5 className="text-sm font-bold text-white mb-1 leading-snug">
                        {card.title}
                      </h5>

                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        {card.shortDesc}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">Latency: {card.metrics[0].value}</span>
                        <span className="text-[#00D2FF] font-bold flex items-center gap-1">
                          Inspect <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ========================================================== */}
            {/* LIVE PROMPT / OUTPUT INTERACTIVE STREAM TERMINAL */}
            {/* ========================================================== */}
            <div className="bg-[#050B14] rounded-2xl border border-blue-500/25 p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 mb-3 border-b border-white/10">
                <span className="flex items-center gap-2 text-[#00D2FF]">
                  <Terminal className="w-4 h-4" />
                  <span>NEURAL PROMPT EXECUTION SANDBOX</span>
                </span>
                <span className="text-[11px]">
                  Model: <strong className="text-white">ATS-GPT4o-FineTuned</strong> (Enterprise v4.5)
                </span>
              </div>

              {/* Prompt Input Form */}
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder={`Try query: "${activeCard.samplePrompt}"`}
                  className="flex-1 bg-white/5 border border-white/15 focus:border-[#00D2FF] rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder-slate-500 outline-hidden transition"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleExecutePrompt();
                  }}
                />
                <button
                  onClick={() => handleExecutePrompt()}
                  disabled={isGenerating}
                  className="px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-mono font-bold text-xs flex items-center gap-2 transition disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isGenerating ? "Streaming..." : "Run"}</span>
                </button>
              </div>

              {/* Streaming Output Box */}
              {(simulatedStream || isGenerating) && (
                <div className="p-3.5 rounded-xl bg-black/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs whitespace-pre-wrap leading-relaxed shadow-inner">
                  {simulatedStream}
                  {isGenerating && <span className="inline-block w-2 h-4 ml-1 bg-emerald-400 animate-pulse align-middle" />}
                </div>
              )}
            </div>

          </div>

          {/* Modal Footer Bar */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#070F1E] flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
            <div className="text-slate-400 text-xs">
              Need custom Generative AI deployment for your enterprise?
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 font-medium transition"
              >
                Close Window
              </button>
              <a
                href="/lets-create"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00D2FF] hover:from-[#0052CC] hover:to-[#00B4D8] text-white font-bold transition shadow-md flex items-center gap-1.5"
              >
                <span>Schedule AI Architecture Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GenerativeAiModal3D;
