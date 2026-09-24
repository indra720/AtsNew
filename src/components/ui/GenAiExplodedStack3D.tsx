import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Cpu,
  Database,
  Shield,
  Bot,
  Code2,
  Terminal,
  Server,
  Sparkles,
  ArrowRight,
  Zap,
  CheckCircle2,
  Maximize2,
  Sliders,
} from "lucide-react";

interface LayerData {
  id: number;
  levelName: string;
  category: string;
  leftCallout: { title: string; desc: string; icon: React.ElementType };
  rightCallout: { title: string; desc: string };
  accentColor: string;
  glowColor: string;
  visualDetails: string[];
}

const LAYERS: LayerData[] = [
  {
    id: 1,
    levelName: "LAYER 01 : USER INTERFACE",
    category: "INTERACTION",
    leftCallout: {
      title: "PROMPT ENGINEERING",
      desc: "Craft powerful inputs that drive intelligent outputs & deterministic controls.",
      icon: Terminal,
    },
    rightCallout: {
      title: "USER INTERFACE",
      desc: "Chat UI, dynamic dashboards, 3D visualizations & human-in-the-loop interactions.",
    },
    accentColor: "#00D2FF",
    glowColor: "rgba(0, 210, 255, 0.4)",
    visualDetails: ["Streaming Chat UI", "Voice Input Waveform", "3D Canvas Viewport"],
  },
  {
    id: 2,
    levelName: "LAYER 02 : OUTPUT SYNTHESIS",
    category: "GENERATION",
    leftCallout: {
      title: "LLMS & FOUNDATIONS",
      desc: "Understand Large Language Models, tokenizers, and multi-turn context retention.",
      icon: Bot,
    },
    rightCallout: {
      title: "OUTPUT LAYER",
      desc: "Generated code, structured JSON, high-res images, synthetic voice & analytics.",
    },
    accentColor: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.35)",
    visualDetails: ["AST Code Synthesis", "Markdown & JSON Formatter", "Audio Synthesizer"],
  },
  {
    id: 3,
    levelName: "LAYER 03 : AI FOUNDATION MODELS",
    category: "NEURAL CORE",
    leftCallout: {
      title: "AI TOOLS & PLATFORMS",
      desc: "Leverage cutting-edge LLMs, diffusion backbones, and fine-tuning pipelines.",
      icon: Cpu,
    },
    rightCallout: {
      title: "AI MODELS",
      desc: "GPT-4o, Claude 3.5, LLaMA 3.3, Flux, CLIP, and custom fine-tuned weights.",
    },
    accentColor: "#60A5FA",
    glowColor: "rgba(96, 165, 250, 0.4)",
    visualDetails: ["Transformer Attention", "MoE Routing Gates", "LoRA Weight Adapters"],
  },
  {
    id: 4,
    levelName: "LAYER 04 : AGENTIC ORCHESTRATION",
    category: "LOGIC & TOOLS",
    leftCallout: {
      title: "MODEL INTEGRATION",
      desc: "Connect AI models seamlessly into real-world enterprise databases & APIs.",
      icon: Code2,
    },
    rightCallout: {
      title: "AI ORCHESTRATION",
      desc: "MCP protocol, tool calling, multi-agent swarms, DAG execution & memory graphs.",
    },
    accentColor: "#0066FF",
    glowColor: "rgba(0, 102, 255, 0.45)",
    visualDetails: ["Tool Call Router", "Autonomous Goal Solver", "State Machine Memory"],
  },
  {
    id: 5,
    levelName: "LAYER 05 : DATA & CONTEXT PIPELINE",
    category: "KNOWLEDGE",
    leftCallout: {
      title: "DATA & CONTEXT LAYER",
      desc: "Use enterprise data intelligently with embeddings, vector search & RAG.",
      icon: Database,
    },
    rightCallout: {
      title: "DATA PIPELINE",
      desc: "Data ingestion, OCR extraction, semantic chunking & dense vector embeddings.",
    },
    accentColor: "#22D3EE",
    glowColor: "rgba(34, 211, 238, 0.4)",
    visualDetails: ["Qdrant / Pinecone Vectors", "Hybrid BM25 + Dense", "Reranker Engine"],
  },
  {
    id: 6,
    levelName: "LAYER 06 : CLOUD COMPUTE & INFRASTRUCTURE",
    category: "HARDWARE",
    leftCallout: {
      title: "INFRASTRUCTURE LAYER",
      desc: "Scalable cloud orchestration, high-throughput GPUs & Kubernetes clusters.",
      icon: Server,
    },
    rightCallout: {
      title: "CLOUD INFRASTRUCTURE",
      desc: "NVIDIA H100 clusters, TensorRT-LLM, vLLM distributed inference & multi-region VPC.",
    },
    accentColor: "#818CF8",
    glowColor: "rgba(129, 140, 248, 0.35)",
    visualDetails: ["NVIDIA H100 NVLink", "Kubernetes Auto-Scaler", "Sub-150ms TTFT"],
  },
  {
    id: 7,
    levelName: "LAYER 07 : ETHICS, GOVERNANCE & SECURITY",
    category: "GOVERNANCE",
    leftCallout: {
      title: "ETHICS & GOVERNANCE",
      desc: "Ensure responsible AI with privacy, fairness, audit trails and transparency.",
      icon: Shield,
    },
    rightCallout: {
      title: "SECURITY & ETHICS",
      desc: "Air-gapped guardrails, PII redaction, bias mitigation & SOC-2 / HIPAA compliance.",
    },
    accentColor: "#34D399",
    glowColor: "rgba(52, 211, 153, 0.4)",
    visualDetails: ["Zero-Leakage Airgap", "Real-Time PII Filter", "Deterministic Verifier"],
  },
];

export const GenAiExplodedStack3D: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<number>(3); // Default to AI Models
  const [explodedMultiplier, setExplodedMultiplier] = useState<number>(1.2); // 0.8 = compact, 1.6 = ultra-exploded
  const [isHoveringLayer, setIsHoveringLayer] = useState<number | null>(null);

  const activeLayer = LAYERS.find((l) => l.id === selectedLayerId) || LAYERS[2];

  return (
    <div className="w-full bg-[#050D1A] rounded-3xl border border-blue-500/30 p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden shadow-2xl">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#0066FF]/20 text-[#00D2FF] border border-blue-400/30">
              3D ARCHITECTURAL EXPLODED MODEL
            </span>
            <span className="text-xs font-mono text-slate-400">• FULL STACK DECOMPOSITION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-display">
            The Generative AI Layered Stack
          </h3>
        </div>

        {/* Explosion Gap Slider */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl text-xs font-mono">
          <Sliders className="w-3.5 h-3.5 text-[#00D2FF]" />
          <span className="text-slate-300">Explode Stack:</span>
          <button
            onClick={() => setExplodedMultiplier(0.7)}
            className={`px-2.5 py-1 rounded-lg transition ${
              explodedMultiplier === 0.7 ? "bg-[#0066FF] text-white font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            Compact
          </button>
          <button
            onClick={() => setExplodedMultiplier(1.2)}
            className={`px-2.5 py-1 rounded-lg transition ${
              explodedMultiplier === 1.2 ? "bg-[#0066FF] text-white font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            Normal
          </button>
          <button
            onClick={() => setExplodedMultiplier(1.6)}
            className={`px-2.5 py-1 rounded-lg transition ${
              explodedMultiplier === 1.6 ? "bg-[#0066FF] text-white font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            Wide
          </button>
        </div>
      </div>

      {/* Main 3-Column Layout: Left Callouts | Center 3D Isometric Exploded Stack | Right Callouts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        
        {/* Left Column: Left Pin Annotations (lg:col-span-3) */}
        <div className="lg:col-span-3 space-y-3.5 order-2 lg:order-1">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
            FOUNDATIONS & INPUTS
          </div>

          {LAYERS.map((layer) => {
            const isSelected = layer.id === selectedLayerId;
            const Icon = layer.leftCallout.icon;

            return (
              <div
                key={`left-${layer.id}`}
                onClick={() => setSelectedLayerId(layer.id)}
                onMouseEnter={() => setIsHoveringLayer(layer.id)}
                onMouseLeave={() => setIsHoveringLayer(null)}
                className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-950/80 to-[#0A1629] border-[#00D2FF] shadow-[0_0_20px_rgba(0,210,255,0.25)] translate-x-1"
                    : "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${layer.accentColor}25`,
                      color: layer.accentColor,
                      border: `1px solid ${layer.accentColor}40`,
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white flex items-center gap-1">
                      {layer.leftCallout.title}
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-ping" />}
                    </h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5 line-clamp-2">
                      {layer.leftCallout.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Column: The 3D Isometric Exploded Layer Stack (lg:col-span-6) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center py-6 order-1 lg:order-2">
          
          {/* 3D Stage Container with CSS Perspective */}
          <div
            className="relative w-full max-w-[420px] h-[520px] sm:h-[580px] flex items-center justify-center"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "50% 45%",
            }}
          >
            {/* The Floating Exploded Stack */}
            <div
              className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(58deg) rotateZ(-32deg) translateY(-20px)",
              }}
            >
              {LAYERS.map((layer, index) => {
                const isSelected = layer.id === selectedLayerId;
                const isHovered = layer.id === isHoveringLayer;

                // Base Z displacement for exploded isometric stack
                const baseSpacing = 68 * explodedMultiplier;
                // Layer 1 is at top (high Z), Layer 7 is at bottom (low Z)
                const zOffset = (LAYERS.length - 1 - index) * baseSpacing;
                // Elevate selected layer even further for inspection
                const elevatedZ = isSelected ? zOffset + 32 : isHovered ? zOffset + 14 : zOffset;

                return (
                  <motion.div
                    key={layer.id}
                    onClick={() => setSelectedLayerId(layer.id)}
                    onMouseEnter={() => setIsHoveringLayer(layer.id)}
                    onMouseLeave={() => setIsHoveringLayer(null)}
                    animate={{
                      z: elevatedZ,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    }}
                    className="absolute w-[290px] sm:w-[320px] h-[175px] sm:h-[190px] rounded-3xl cursor-pointer transition-shadow duration-300"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `translateZ(${elevatedZ}px)`,
                      background: isSelected
                        ? `linear-gradient(135deg, rgba(10, 22, 41, 0.95), rgba(15, 36, 74, 0.92))`
                        : `linear-gradient(135deg, rgba(9, 18, 34, 0.88), rgba(6, 12, 23, 0.94))`,
                      border: isSelected
                        ? `2px solid ${layer.accentColor}`
                        : `1px solid rgba(255, 255, 255, 0.15)`,
                      boxShadow: isSelected
                        ? `0 0 35px ${layer.glowColor}, 0 20px 40px rgba(0,0,0,0.8)`
                        : `0 10px 25px rgba(0,0,0,0.6)`,
                    }}
                  >
                    {/* Layer Inner Circuit Traces & Microchip Visualization */}
                    <div className="relative w-full h-full p-4 flex flex-col justify-between overflow-hidden rounded-3xl">
                      {/* Top Header on Plate */}
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${layer.accentColor}25`,
                            color: layer.accentColor,
                            border: `1px solid ${layer.accentColor}40`,
                          }}
                        >
                          {layer.category}
                        </span>

                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                          <span className="text-[10px] font-mono text-slate-400">0{layer.id}</span>
                        </div>
                      </div>

                      {/* Plate Center Hardware & Neural Graphic */}
                      <div className="flex items-center justify-center gap-3 my-auto">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform"
                          style={{
                            backgroundColor: `${layer.accentColor}30`,
                            color: layer.accentColor,
                            border: `1px solid ${layer.accentColor}`,
                            boxShadow: isSelected ? `0 0 15px ${layer.accentColor}` : "none",
                            transform: isSelected ? "scale(1.15)" : "scale(1)",
                          }}
                        >
                          {React.createElement(layer.leftCallout.icon, { className: "w-5 h-5" })}
                        </div>

                        <div>
                          <div className="text-xs font-black text-white font-mono tracking-tight">
                            {layer.rightCallout.title}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {layer.visualDetails[0]}
                          </div>
                        </div>
                      </div>

                      {/* Plate Bottom Connection Screws & Status Pins */}
                      <div className="flex items-center justify-between text-[8px] font-mono text-slate-400 border-t border-white/10 pt-1.5">
                        <span>SYNAPSE: ACTIVE</span>
                        <span style={{ color: layer.accentColor }}>{isSelected ? "INSPECTING" : "CLICK TO VIEW"}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <p className="text-xs text-slate-400 font-mono text-center mt-2">
            Tip: Click any 3D layer plate to inspect its architecture details
          </p>
        </div>

        {/* Right Column: Right Pin Annotations (lg:col-span-3) */}
        <div className="lg:col-span-3 space-y-3.5 order-3">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            OUTPUTS & EXECUTION
          </div>

          {LAYERS.map((layer) => {
            const isSelected = layer.id === selectedLayerId;

            return (
              <div
                key={`right-${layer.id}`}
                onClick={() => setSelectedLayerId(layer.id)}
                onMouseEnter={() => setIsHoveringLayer(layer.id)}
                onMouseLeave={() => setIsHoveringLayer(null)}
                className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-l from-blue-950/80 to-[#0A1629] border-[#00D2FF] shadow-[0_0_20px_rgba(0,210,255,0.25)] -translate-x-1"
                    : "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                      {layer.rightCallout.title}
                      {isSelected && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-[#00D2FF]/20 text-[#00D2FF]">
                          ACTIVE
                        </span>
                      )}
                    </h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5 line-clamp-2">
                      {layer.rightCallout.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Layer Technical Deep-Dive Footer Banner */}
      <div className="mt-8 pt-6 border-t border-white/10 bg-gradient-to-r from-blue-950/40 via-[#0A1629] to-blue-950/40 rounded-2xl p-4 sm:p-5 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D2FF] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ACTIVE ARCHITECTURAL INSPECTION</span>
            </div>
            <h4 className="text-lg font-black text-white font-display">
              {activeLayer.levelName}
            </h4>
            <p className="text-xs text-slate-300 font-medium max-w-2xl mt-1 leading-relaxed">
              {activeLayer.rightCallout.desc}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {activeLayer.visualDetails.map((detail, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
              >
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default GenAiExplodedStack3D;
