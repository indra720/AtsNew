import React, { useState } from "react";
import {
  MessageSquare,
  Image as ImageIcon,
  Film,
  Code2,
  FileText,
  Volume2,
  Rocket,
  Target,
  ShieldCheck,
  Lightbulb,
  Send,
  Sparkles,
  X,
  ArrowRight,
  CheckCircle2,
  Activity,
  Play,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import GenAiHolographicBrain3D from "./GenAiHolographicBrain3D";

// ================================================================
// 6 FLOATING CAPABILITIES (EXACT POSTER REPRODUCTION)
// ================================================================
interface FloatingCapability {
  id: string;
  title: string;
  tag: string;
  icon: React.ElementType;
  shortDesc: string;
  fullDesc: string;
  metrics: { label: string; value: string }[];
  samplePrompt: string;
  simulatedOutput: string;
}

const FLOATING_CAPABILITIES: FloatingCapability[] = [
  {
    id: "conversations",
    title: "AI-Powered Conversations",
    tag: "CONVERSATIONAL AGENTS",
    icon: MessageSquare,
    shortDesc: "Intelligent multi-turn dialogue agents with context awareness & human-like nuance.",
    fullDesc:
      "Enterprise customer experience agents powered by fine-tuned LLMs with sub-100ms response streaming, memory retention, sentiment steering, and seamless escalation to human agents.",
    metrics: [
      { label: "Response Latency", value: "< 95ms" },
      { label: "Intent Recognition", value: "99.4%" },
      { label: "Resolution Rate", value: "88.2%" },
    ],
    samplePrompt: "Deploy automated Tier-1 enterprise customer support agent with CRM integration.",
    simulatedOutput:
      "✓ Agent Deployed:\n- Context Engine: 128k token rolling session memory\n- Integrations: Salesforce & Zendesk live webhooks active\n- Guardrails: 100% PII masked, sentiment score monitored in real time.",
  },
  {
    id: "content-generation",
    title: "Content Generation",
    tag: "CREATIVE & MARKETING",
    icon: ImageIcon,
    shortDesc: "High-impact copy, personalized campaign assets & marketing content at scale.",
    fullDesc:
      "Generate bespoke brand copy, technical whitepapers, localized documentation, and ad creatives matching exact brand tone, SEO keyword profiles, and compliance rules.",
    metrics: [
      { label: "Production Speed", value: "10x Faster" },
      { label: "Brand Tone Match", value: "99.1%" },
      { label: "Languages", value: "48+ Native" },
    ],
    samplePrompt: "Generate multi-channel launch campaign for ATS Cloud Migration Suite.",
    simulatedOutput:
      "✓ Campaign Synthesized:\n- 4 High-conversion LinkedIn thought-leadership articles\n- 8 Targeted technical email sequences\n- Complete SEO landing page copy with schema markup.",
  },
  {
    id: "multimedia",
    title: "Multimedia Creation",
    tag: "DYNAMIC ASSETS",
    icon: Film,
    shortDesc: "AI-generated video sequences, photorealistic imagery & interactive 3D assets.",
    fullDesc:
      "Diffusion models and generative video pipelines producing cinematic marketing clips, product renders, synthetic avatars, and interactive 3D scenes on demand.",
    metrics: [
      { label: "Render Quality", value: "4K UHD" },
      { label: "Generation Time", value: "Sub-Minute" },
      { label: "Format Support", value: "Video / 3D / WebP" },
    ],
    samplePrompt: "Generate 15-second cinematic 3D product teaser with ambient tech lighting.",
    simulatedOutput:
      "✓ 4K Media Package Generated:\n- 15s MP4 render at 60fps with motion graphics\n- High-resolution alpha transparent web assets\n- Synchronized synthetic ambient audio track.",
  },
  {
    id: "code-generation",
    title: "Code Generation",
    tag: "SOFTWARE SYNTHESIS",
    icon: Code2,
    shortDesc: "Automated full-stack architecture, API synthesis & AST code refactoring.",
    fullDesc:
      "Trained on millions of production repositories, generating type-safe TypeScript, Python, Go, and Rust with built-in unit tests, Dockerfiles, and CI/CD pipelines.",
    metrics: [
      { label: "Test Coverage", value: "> 95%" },
      { label: "Lint Errors", value: "0 Detected" },
      { label: "Refactor Speed", value: "Instant" },
    ],
    samplePrompt: "Generate GraphQL API with JWT auth and rate-limiting middleware.",
    simulatedOutput:
      "✓ Generated code package:\n- Schema: GraphQL SDL with query/mutation resolvers\n- Security: Argon2id password hashing + Redis token bucket\n- Vitest: 18 passing unit tests (100% branch coverage).",
  },
  {
    id: "smart-automation",
    title: "Smart Automation",
    tag: "ENTERPRISE WORKFLOWS",
    icon: FileText,
    shortDesc: "Complex document extraction, robotic process automation & decision DAGs.",
    fullDesc:
      "End-to-end intelligent document processing (IDP). Extracts tables, unstructured contracts, and PDFs, validating against business rules and executing automated ERP workflows.",
    metrics: [
      { label: "Extraction Accuracy", value: "99.8%" },
      { label: "Manual Effort Saved", value: "85%" },
      { label: "Processing Speed", value: "< 2s / Doc" },
    ],
    samplePrompt: "Extract line-item invoices, match with purchase orders, and flag discrepancies.",
    simulatedOutput:
      "✓ 42 Invoices Processed:\n- 40 Matched with POs & queued for payout\n- 2 Flagged for quantity mismatch (< 1% variance)\n- Complete audit trail logged to SAP ERP.",
  },
  {
    id: "voice-audio",
    title: "Voice & Audio Synthesis",
    tag: "NEURAL SOUND",
    icon: Volume2,
    shortDesc: "Ultra-realistic bidirectional voice streaming & expressive neural audio.",
    fullDesc:
      "Sub-200ms latency speech-to-speech pipelines supporting expressive multi-accent voice synthesis, real-time multilingual translation, and studio-grade sound design.",
    metrics: [
      { label: "Glass-to-Ear Latency", value: "180ms" },
      { label: "Voice Expressiveness", value: "Human-Grade" },
      { label: "Languages", value: "32+ Live" },
    ],
    samplePrompt: "Stream real-time bilingual voice translation for global executive meeting.",
    simulatedOutput:
      "✓ Real-time Audio Stream Active:\n- Input: English (London dialect) -> Output: Japanese\n- Latency: 165ms\n- Voice Tone: Professional executive timbre preserved.",
  },
];

// ================================================================
// 4 BOTTOM PILLAR CARDS (EXACT POSTER REPRODUCTION)
// ================================================================
const PILLAR_CARDS = [
  {
    icon: Rocket,
    title: "Faster Innovation",
    desc: "Accelerate ideas and go to market faster.",
  },
  {
    icon: Target,
    title: "Higher Efficiency",
    desc: "Automate tasks and optimize resources with AI.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable & Secure",
    desc: "Enterprise-grade security with scalable AI solutions.",
  },
  {
    icon: Lightbulb,
    title: "Future-Ready Solutions",
    desc: "Stay ahead with cutting-edge AI technologies.",
  },
];

export const GenerativeAiShowcasePoster: React.FC = () => {
  const [selectedCapability, setSelectedCapability] = useState<FloatingCapability | null>(null);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulatedText, setSimulatedText] = useState<string>("");

  const handleOpenModal = (cap: FloatingCapability) => {
    setSelectedCapability(cap);
    setSimulatedText("");
    setIsSimulating(false);
  };

  const handleRunSimulation = () => {
    if (!selectedCapability) return;
    setIsSimulating(true);
    setSimulatedText("");

    const fullOutput = selectedCapability.simulatedOutput;
    let idx = 0;
    const interval = setInterval(() => {
      idx += 5;
      setSimulatedText(fullOutput.slice(0, idx));
      if (idx >= fullOutput.length) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 20);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#020614] via-[#040D24] to-[#01040D] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-cyan-500/20">
      
      {/* Background Cybernetic Grid & Volumetric Neon Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#0066FF_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-cyan-400/15 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Container matching Poster Aspect */}
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* ============================================================ */}
        {/* 1. TOP LOGO & HEADER (MATCHES POSTER EXACTLY) */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full border-2 border-cyan-400/70 bg-[#0066FF]/20 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(0,210,255,0.5)]">
              <Sparkles className="w-5 h-5 text-cyan-300" />
            </div>
            <div className="text-left">
              <div className="text-sm sm:text-base font-black tracking-widest text-white uppercase font-sans">
                ATS GLOBAL TECH
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-400 uppercase">
                THINK • VALIDATE • EVOLVE
              </div>
            </div>
          </div>

          {/* Main Headline: Generative AI Development */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-display leading-[1.08]">
            Generative AI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#60A5FA] to-[#0066FF] drop-shadow-[0_0_35px_rgba(0,210,255,0.4)]">
              Development
            </span>
          </h2>

          {/* Hexagonal Subtitle Pill: Intelligent Solutions. Limitless Possibilities. */}
          <div className="mt-3.5 inline-flex items-center px-6 sm:px-8 py-1.5 rounded-full bg-[#051129]/90 border border-cyan-400/40 text-xs sm:text-sm font-mono font-bold text-cyan-300 shadow-[0_0_20px_rgba(0,210,255,0.25)]">
            Intelligent Solutions. Limitless Possibilities.
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. THE CENTERPIECE: 3D HOLOGRAPHIC BRAIN & 6 FLOATING CARDS */}
        {/* ============================================================ */}
        <div className="relative w-full max-w-5xl h-[560px] sm:h-[640px] lg:h-[700px] flex items-center justify-center my-4">
          
          {/* Centered 3D Canvas with Holographic Brain, Pedestal & Cyborg Hand */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <GenAiHolographicBrain3D />
          </div>

          {/* ============================================================ */}
          {/* 6 FLOATING NEON GLASS CARDS (EXACT POSTER POSITIONING) */}
          {/* ============================================================ */}

          {/* LEFT COLUMN CARDS */}
          {/* 1. AI-Powered Conversations (Top-Left) */}
          <div
            onClick={() => handleOpenModal(FLOATING_CAPABILITIES[0])}
            className="absolute top-[4%] sm:top-[8%] left-[1%] sm:left-[4%] lg:left-[3%] z-20 group cursor-pointer"
          >
            <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#06142E]/85 backdrop-blur-md border border-cyan-400/60 shadow-[0_0_20px_rgba(0,210,255,0.35)] hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(0,210,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[200px] lg:min-w-[240px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:bg-[#00D2FF] group-hover:text-slate-950 transition-colors shrink-0 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[10px] sm:text-xs lg:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight truncate">
                  {FLOATING_CAPABILITIES[0].title}
                </h4>
                <span className="text-[8px] sm:text-[10px] font-mono text-cyan-400/80 hidden sm:inline">Click to explore</span>
              </div>
            </div>
          </div>

          {/* 2. Content Generation (Mid-Left) */}
          <div
            onClick={() => handleOpenModal(FLOATING_CAPABILITIES[1])}
            className="absolute top-[40%] sm:top-[42%] left-[0%] sm:left-[2%] lg:left-[1%] z-20 group cursor-pointer"
          >
            <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#06142E]/85 backdrop-blur-md border border-cyan-400/60 shadow-[0_0_20px_rgba(0,210,255,0.35)] hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(0,210,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[200px] lg:min-w-[240px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:bg-[#00D2FF] group-hover:text-slate-950 transition-colors shrink-0 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[10px] sm:text-xs lg:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight truncate">
                  {FLOATING_CAPABILITIES[1].title}
                </h4>
                <span className="text-[8px] sm:text-[10px] font-mono text-cyan-400/80 hidden sm:inline">Click to explore</span>
              </div>
            </div>
          </div>

          {/* 3. Multimedia Creation (Bottom-Left) */}
          <div
            onClick={() => handleOpenModal(FLOATING_CAPABILITIES[2])}
            className="absolute bottom-[6%] sm:bottom-[10%] left-[1%] sm:left-[4%] lg:left-[3%] z-20 group cursor-pointer"
          >
            <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#06142E]/85 backdrop-blur-md border border-cyan-400/60 shadow-[0_0_20px_rgba(0,210,255,0.35)] hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[200px] lg:min-w-[240px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:bg-[#00D2FF] group-hover:text-slate-950 transition-colors shrink-0 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                <Film className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[10px] sm:text-xs lg:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight truncate">
                  {FLOATING_CAPABILITIES[2].title}
                </h4>
                <span className="text-[8px] sm:text-[10px] font-mono text-cyan-400/80 hidden sm:inline">Click to explore</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN CARDS */}
          {/* 4. Code Generation (Top-Right) */}
          <div
            onClick={() => handleOpenModal(FLOATING_CAPABILITIES[3])}
            className="absolute top-[4%] sm:top-[8%] right-[1%] sm:right-[4%] lg:right-[3%] z-20 group cursor-pointer"
          >
            <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#06142E]/85 backdrop-blur-md border border-cyan-400/60 shadow-[0_0_20px_rgba(0,210,255,0.35)] hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[200px] lg:min-w-[240px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:bg-[#00D2FF] group-hover:text-slate-950 transition-colors shrink-0 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[10px] sm:text-xs lg:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight truncate">
                  {FLOATING_CAPABILITIES[3].title}
                </h4>
                <span className="text-[8px] sm:text-[10px] font-mono text-cyan-400/80 hidden sm:inline">Click to explore</span>
              </div>
            </div>
          </div>

          {/* 5. Smart Automation (Mid-Right) */}
          <div
            onClick={() => handleOpenModal(FLOATING_CAPABILITIES[4])}
            className="absolute top-[40%] sm:top-[42%] right-[0%] sm:right-[2%] lg:right-[1%] z-20 group cursor-pointer"
          >
            <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#06142E]/85 backdrop-blur-md border border-cyan-400/60 shadow-[0_0_20px_rgba(0,210,255,0.35)] hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[200px] lg:min-w-[240px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:bg-[#00D2FF] group-hover:text-slate-950 transition-colors shrink-0 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[10px] sm:text-xs lg:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight truncate">
                  {FLOATING_CAPABILITIES[4].title}
                </h4>
                <span className="text-[8px] sm:text-[10px] font-mono text-cyan-400/80 hidden sm:inline">Click to explore</span>
              </div>
            </div>
          </div>

          {/* 6. Voice & Audio Synthesis (Bottom-Right) */}
          <div
            onClick={() => handleOpenModal(FLOATING_CAPABILITIES[5])}
            className="absolute bottom-[6%] sm:bottom-[10%] right-[1%] sm:right-[4%] lg:right-[3%] z-20 group cursor-pointer"
          >
            <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#06142E]/85 backdrop-blur-md border border-cyan-400/60 shadow-[0_0_20px_rgba(0,210,255,0.35)] hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[200px] lg:min-w-[240px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:bg-[#00D2FF] group-hover:text-slate-950 transition-colors shrink-0 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[10px] sm:text-xs lg:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight truncate">
                  {FLOATING_CAPABILITIES[5].title}
                </h4>
                <span className="text-[8px] sm:text-[10px] font-mono text-cyan-400/80 hidden sm:inline">Click to explore</span>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 3. FOUR BOTTOM PILLAR CARDS (MATCHES POSTER EXACTLY) */}
        {/* ============================================================ */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {PILLAR_CARDS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#051126]/90 border border-cyan-400/30 shadow-[0_10px_30px_rgba(0,102,255,0.2)] hover:border-cyan-400/70 hover:shadow-[0_0_25px_rgba(0,210,255,0.3)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-3 group-hover:bg-[#00D2FF] group-hover:text-slate-950 transition-colors shadow-[0_0_15px_rgba(0,210,255,0.25)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 font-sans">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* 4. BOTTOM CTA BANNER (MATCHES POSTER EXACTLY) */}
        {/* ============================================================ */}
        <div className="w-full max-w-2xl mt-8">
          <Link
            to="/lets-create"
            className="group w-full p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-blue-900/40 via-[#07193D] to-blue-900/40 border border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_30px_rgba(0,210,255,0.3)] hover:shadow-[0_0_45px_rgba(0,210,255,0.5)] transition-all flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_15px_#00D2FF] group-hover:scale-110 transition-transform">
                <Send className="w-4 h-4 ml-0.5" />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Let's Build the Future with Generative AI
                </div>
                <div className="text-xs text-cyan-400 font-medium">
                  Transform ideas into intelligent realities.
                </div>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full border border-cyan-400/40 flex items-center justify-center text-cyan-300 mr-2 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

      </div>

      {/* ============================================================ */}
      {/* 5. INTERACTIVE FEATURE EXPLANATION MODAL (USER REQUEST 5) */}
      {/* ============================================================ */}
      {selectedCapability && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-[#06122A] border border-cyan-400/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(0,210,255,0.4)] max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCapability(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#0066FF] border border-cyan-400/50 flex items-center justify-center text-white shadow-[0_0_20px_#0066FF]">
                <selectedCapability.icon className="w-7 h-7 text-cyan-300" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  {selectedCapability.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {selectedCapability.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="p-4 rounded-2xl bg-[#030A18] border border-blue-500/20 mb-6 text-sm text-slate-300 leading-relaxed">
              {selectedCapability.fullDesc}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {selectedCapability.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#030A18] border border-cyan-400/20 text-center">
                  <div className="text-[11px] text-slate-400 font-mono">{m.label}</div>
                  <div className="text-lg font-black text-cyan-300 mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Live Interactive Simulation Console */}
            <div className="p-4 rounded-2xl bg-[#02050E] border border-cyan-400/30 mb-6">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-blue-500/20">
                <div className="text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>Interactive Runtime Simulator</span>
                </div>
                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="px-3.5 py-1.5 rounded-lg bg-[#0066FF] hover:bg-[#00D2FF] hover:text-slate-950 text-white font-mono text-xs font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isSimulating ? "Simulating..." : "Test Simulation"}</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-slate-400 mb-1">
                Sample Query: <span className="text-cyan-200">"{selectedCapability.samplePrompt}"</span>
              </div>

              <div className="p-3 rounded-xl bg-[#010308] border border-blue-500/30 font-mono text-xs text-cyan-300 min-h-[90px] whitespace-pre-wrap">
                {simulatedText || (
                  <span className="text-slate-500 italic">
                    Click "Test Simulation" above to run this capability in real-time...
                  </span>
                )}
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-blue-500/20">
              <div className="text-xs text-slate-400">
                Want to integrate this capability into your enterprise systems?
              </div>
              <Link
                to="/lets-create"
                onClick={() => setSelectedCapability(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white font-bold text-xs sm:text-sm text-center shadow-lg hover:scale-105 transition"
              >
                Schedule Architecture Call
              </Link>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default GenerativeAiShowcasePoster;
