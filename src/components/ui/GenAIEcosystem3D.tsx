import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Brain,
  Code2,
  Cloud,
  Palette,
  ArrowRight,
  CheckCircle2,
  Zap,
  Activity,
  ShieldCheck,
  Bot,
  Layers,
  Send,
  MessageSquare,
  Cpu,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

export const GenAIEcosystem3D: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const solutions = [
    {
      id: 0,
      title: "Generative AI & LLMs",
      badge: "ENTERPRISE AI",
      icon: Brain,
      color: "from-blue-600 to-cyan-500",
      desc: "Custom large language models, RAG retrieval pipelines, and private AI agents tailored to your business knowledge base.",
      features: [
        "Private knowledge base RAG retrieval",
        "Fine-tuned domain LLMs (GPT-4o, Claude, LLaMA)",
        "Zero data leakage & SOC2 enterprise compliance",
      ],
      demoPrompt: "Analyze quarterly customer queries and summarize top support bottlenecks.",
      demoResponse:
        "Processed 14,820 tickets across 3 channels. Identified primary bottleneck in API authentication latency (38% of total volume). Automated resolution workflow active.",
      metric: "< 340ms Latency",
    },
    {
      id: 1,
      title: "Full-Stack Web & Mobile",
      badge: "HIGH VELOCITY",
      icon: Code2,
      color: "from-cyan-500 to-blue-600",
      desc: "Modern web platforms and cross-platform mobile apps engineered with React, Next.js, and Flutter for ultra-fluid 120fps performance.",
      features: [
        "Sub-second page rendering & Core Web Vitals 99+",
        "Cross-platform iOS and Android apps",
        "High-concurrency GraphQL and REST APIs",
      ],
      demoPrompt: "Run end-to-end checkout flow audit on mobile viewport.",
      demoResponse:
        "Audit completed. Lighthouse score: 99/100. First Contentful Paint: 0.42s. Friction points eliminated with 1-click biometric checkout.",
      metric: "99.8% Core Vitals",
    },
    {
      id: 2,
      title: "Cloud & Microservices",
      badge: "SCALE & RELIABILITY",
      icon: Cloud,
      color: "from-indigo-600 to-blue-500",
      desc: "Resilient cloud migration, Kubernetes auto-scaling clusters, and automated zero-downtime CI/CD deployment pipelines on AWS, Azure & GCP.",
      features: [
        "Zero-downtime multi-cloud migrations",
        "Automated CI/CD workflows and Docker/K8s clusters",
        "24/7 SLA monitoring and instant automated failover",
      ],
      demoPrompt: "Deploy v4.2 containerized service to AWS multi-region cluster.",
      demoResponse:
        "Deployment verified in us-east-1 and eu-central-1. Canary health check 100% passed. Traffic shifted seamlessly with zero dropped packets.",
      metric: "99.98% Uptime SLA",
    },
    {
      id: 3,
      title: "UI/UX & Design Systems",
      badge: "STUDIO GRADE",
      icon: Palette,
      color: "from-blue-500 to-indigo-600",
      desc: "Human-centered design systems, ergonomic interfaces, and interactive 3D prototypes crafted to maximize user engagement and conversion.",
      features: [
        "Comprehensive Figma design systems and tokens",
        "Interactive 120fps motion design & micro-interactions",
        "Data-backed conversion rate optimization (CRO)",
      ],
      demoPrompt: "Test dark/light theme tokens and ergonomic touch targets.",
      demoResponse:
        "Design tokens verified across 18 screen breakpoints. Touch target compliance: 100% WCAG AAA accessible with fluid motion curves.",
      metric: "120fps Fluidity",
    },
  ];

  const currentSolution = solutions[activeTab];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F0F7FF] text-slate-900 overflow-hidden border-t border-b border-blue-100/80">
      {/* Subtle Minimalist Background Grid & Ambient Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#0066FF_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean, Airy Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0066FF] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>ENGINEERED FOR IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-3">
            Intelligent Solutions Designed for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              Real Business Growth
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            From bespoke Generative AI applications and custom LLMs to high-performance web platforms and cloud architecture — we build software that drives measurable results.
          </p>
        </div>

        {/* ========================================================== */}
        {/* INTERACTIVE SHOWCASE: 4 SOLUTION TABS + LIVE PREVIEW STUDIO */}
        {/* ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Solution Selector Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3">
            {solutions.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white border-[#0066FF] shadow-[0_12px_30px_rgba(0,102,255,0.12)] scale-[1.02] ring-2 ring-blue-400/20"
                      : "bg-white/80 backdrop-blur-md border-blue-100 hover:border-blue-300 hover:bg-white shadow-xs"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${item.color} shadow-sm shrink-0 transition-transform ${
                        isActive ? "scale-110" : ""
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0066FF]">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-mono font-bold text-[#0066FF] px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Solution Studio (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-[0_15px_35px_rgba(0,102,255,0.08)]">
              {/* Studio Window Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono font-bold text-slate-500 ml-2">
                    ATS DIGITAL STUDIO • {currentSolution.badge}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0066FF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  <Activity className="w-3 h-3 text-[#0066FF] animate-pulse" />
                  <span>{currentSolution.metric}</span>
                </div>
              </div>

              {/* Active Solution Title & Features */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSolution.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-2">
                    {currentSolution.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {currentSolution.desc}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {currentSolution.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-700 font-medium bg-slate-50/80 p-2.5 rounded-xl border border-slate-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Live Prompt & Response Simulation */}
                  <div className="bg-[#0A1629] rounded-2xl p-4 sm:p-5 text-white shadow-inner border border-slate-800">
                    <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-2 pb-2 border-b border-white/10">
                      <span className="flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5" />
                        LIVE WORKFLOW PREVIEW
                      </span>
                      <span className="text-[10px] text-slate-400">Response time: 0.28s</span>
                    </div>

                    {/* Simulated Prompt */}
                    <div className="flex items-start gap-2.5 text-xs text-slate-300 mb-3 bg-white/5 p-2.5 rounded-xl border border-white/10">
                      <Send className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                      <p className="font-mono text-[11px]">{currentSolution.demoPrompt}</p>
                    </div>

                    {/* Simulated Response */}
                    <div className="flex items-start gap-2.5 text-xs text-emerald-400 bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
                      <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5 animate-pulse" />
                      <p className="font-mono text-[11px] leading-relaxed text-slate-200">
                        {currentSolution.demoResponse}
                      </p>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      Built for enterprise reliability and speed.
                    </span>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066FF] hover:text-[#0052CC] transition group"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Trust & Milestones Row */}
        <div className="mt-12 pt-8 border-t border-blue-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white/80 border border-blue-100 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-[#0066FF] font-display">120+</div>
            <div className="text-xs text-slate-600 font-bold uppercase tracking-wider font-mono mt-1">
              Projects Delivered
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-blue-100 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-[#0052CC] font-display">&lt; 400ms</div>
            <div className="text-xs text-slate-600 font-bold uppercase tracking-wider font-mono mt-1">
              Average Latency
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-blue-100 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-[#00D2FF] font-display">99.8%</div>
            <div className="text-xs text-slate-600 font-bold uppercase tracking-wider font-mono mt-1">
              Core Web Vitals
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-blue-100 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-display">100%</div>
            <div className="text-xs text-slate-600 font-bold uppercase tracking-wider font-mono mt-1">
              Enterprise SOC2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenAIEcosystem3D;
