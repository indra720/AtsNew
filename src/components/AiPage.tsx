import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  Server,
  Cpu,
  Layers,
  Zap,
  Globe2,
  Database,
  Terminal,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface FeatureCardProps {
  title: string;
  text: string;
  icon?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, text, icon }) => {
  return (
    <Card3D className="h-full">
      <div className="cloud-card h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between group">
        <div>
          <div className="flex items-start gap-4 mb-4">
            <div className="text-[#0066FF] bg-[#EBF5FF] border border-blue-200 rounded-2xl p-3 w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
              {icon ?? <Cpu className="w-6 h-6 text-[#0066FF]" />}
            </div>
            <h4 className="text-lg font-black font-display text-[#0A1629] group-hover:text-[#0066FF] transition-colors mt-1">
              {title}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{text}</p>
        </div>
      </div>
    </Card3D>
  );
};

export default function ECommerceModernization() {
  const stats = [
    { value: "+62%", label: "Conversion uplift", glow: "text-cyan-400" },
    { value: "-35%", label: "Infrastructure cost", glow: "text-emerald-400" },
    { value: "99.99%", label: "Availability SLA", glow: "text-indigo-400" },
    { value: "Real-time", label: "Analytics & personalization", glow: "text-purple-400" },
  ];

  const coreFeatures = [
    {
      title: "Headless Commerce",
      text: "Decoupled frontend and APIs for rapid experimentation — replace UX without touching backend commerce rules.",
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "AI Personalization",
      text: "Real-time recommendations and personalized catalogs powered by hybrid models for speed and scalability.",
      icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Fast Global CDN",
      text: "Edge-rendered critical paths for sub-200ms TTFB across regions, with A/B testing at the edge.",
      icon: <Globe2 className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "Scalable Microservices",
      text: "Containerized services with autoscaling and circuit breakers for reliability under peak loads.",
      icon: <Server className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Resilient Checkout",
      text: "Modular checkout pipeline with optimized payment routing and resumable transactions.",
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
    },
    {
      title: "Observability & SRE",
      text: "Distributed tracing, error budgets, and automated rollback for safe releases.",
      icon: <Terminal className="w-6 h-6 text-pink-400" />,
    },
  ];

  const architectureCards = [
    {
      title: "Data & AI Layer",
      desc: "Centralized event stream and model pipelines for real-time personalization.",
      points: ["Event bus (Kafka/Kinesis)", "Model registry & CI", "Feature serving"],
      color: "border-indigo-500/30",
    },
    {
      title: "Platform & Infra",
      desc: "Kubernetes platform with Terraform IaC and multi-region failover.",
      points: ["Terraform + GitOps", "Autoscaler & failover", "Canary deployments"],
      color: "border-cyan-500/30",
    },
    {
      title: "Frontend & UX",
      desc: "React SSR + edge rendering, accessible components, optimized images.",
      points: ["Headless CMS", "Image CDN", "Web Vitals monitoring"],
      color: "border-teal-500/30",
    },
  ];

  const techList = [
    "React",
    "Next.js",
    "Node.js",
    "GraphQL",
    "Postgres",
    "Redis",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Kafka",
    "PyTorch",
  ];

  const testimonials = [
    {
      quote:
        "The migration was seamless — performance improved immediately, and our marketing team can now iterate promotions independently.",
      author: "VP Product, Retail Brand",
    },
    {
      quote:
        "Operational overhead dropped significantly. The SRE automation saved hours during peak traffic events.",
      author: "Director of Engineering",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F0F7FF] text-[#0A1629] pt-6 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Radial Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <header className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF] bg-white border border-blue-200 shadow-xs px-3.5 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Case Study · Web Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0A1629] leading-tight mb-6">
              E-Commerce Platform{" "}
              <span className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] bg-clip-text text-transparent">
                Modernization
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-sans">
              Modernizing legacy storefronts into scalable, AI-ready e-commerce
              platforms — faster checkouts, personalized merchandising,
              resilient infrastructure, and measurable revenue uplift.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] text-white font-bold px-7 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,102,255,0.3)] transition duration-300 hover:scale-[1.02]"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center gap-2 border border-blue-200 bg-white hover:border-[#0066FF]/40 text-slate-800 shadow-xs px-6 py-3.5 rounded-2xl text-sm font-bold transition"
              >
                See Features
              </a>
            </div>

            {/* KPI Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-3xl cloud-card">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl sm:text-3xl font-black font-display text-[#0066FF]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-blue-200 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1400&auto=format&fit=crop"
                alt="Modern e-commerce design"
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </header>

        {/* Overview & Project Snapshot */}
        <section className="grid gap-8 lg:grid-cols-3 items-start mb-20">
          <div className="lg:col-span-2 cloud-card rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-black font-display text-[#0A1629] mb-4">
              Overview
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6 font-sans">
              We partnered with a top retail brand to modernize their monolithic
              e-commerce stack. The objective: migrate to a{" "}
              <strong className="text-[#0066FF] font-bold">composable, headless architecture</strong>, enable
              AI-driven personalization, and reduce latency for global customers
              while cutting operational costs.
            </p>

            <h3 className="text-lg font-black font-display text-[#0066FF] mb-3">
              Key Challenges
            </h3>

            <ul className="space-y-3">
              {[
                "Legacy checkout causing poor conversion and cart abandonment.",
                "Single-region hosting causing high latency for global markets.",
                "Limited instrumentation — no real-time insights for merchandising.",
                "Rigid catalog and slow release cycles.",
              ].map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-sans">
                  <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="cloud-card rounded-3xl p-7 shadow-xl">
            <h4 className="text-lg font-black font-display text-[#0A1629] mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#0066FF]" />
              Project Snapshot
            </h4>

            <div className="space-y-3.5 text-sm text-slate-600 font-mono font-medium">
              <p>
                <strong className="text-slate-900 font-bold">Duration:</strong> 6 months
              </p>
              <p>
                <strong className="text-slate-900 font-bold">Team:</strong> 14 engineers, 2 data scientists, 1 product manager
              </p>
              <p>
                <strong className="text-slate-900 font-bold">Stack:</strong> React, Node.js, Kubernetes, Redis, Postgres
              </p>
              <div className="p-3.5 rounded-2xl bg-[#EBF5FF] border border-blue-200 mt-4">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">Measured Outcome</p>
                <p className="text-base font-black text-[#0066FF] font-display">62% conversion uplift in 90 days</p>
              </div>
            </div>
          </aside>
        </section>

        {/* Core Capabilities */}
        <section id="features" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Next-Gen Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0A1629] mt-1">
              Core Capabilities & Modern Features
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((f, i) => (
              <FeatureCard key={i} title={f.title} text={f.text} icon={f.icon} />
            ))}
          </div>
        </section>

        {/* Architecture Highlights */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">System Blueprint</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0A1629] mt-1">
              Architecture Highlights
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {architectureCards.map((card, i) => (
              <Card3D key={i} className="h-full">
                <div className="cloud-card h-full rounded-3xl p-7 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-black font-display text-[#0A1629] mb-2">{card.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm mb-5 leading-relaxed font-sans">{card.desc}</p>
                  </div>
                  <ul className="space-y-2 border-t border-blue-100 pt-4">
                    {card.points.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-mono font-bold text-[#0066FF]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card3D>
            ))}
          </div>
        </section>

        {/* Merchandising Dashboard Showcase */}
        <section className="mb-20 grid gap-8 lg:grid-cols-2 items-center cloud-card rounded-3xl p-6 sm:p-10">
          <div className="rounded-2xl overflow-hidden border border-blue-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
              alt="merchandising dashboard"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Live Control Plane</span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mt-1 mb-4">
              Merchandising Dashboard
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              Unified dashboard for performance, promotions, and analytics.
              Empower marketing teams to act independently with real-time
              insights.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white border border-blue-200 p-4 rounded-2xl text-center shadow-xs">
                <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">Active A/B Tests</p>
                <p className="text-2xl font-black font-display text-[#0066FF]">12</p>
              </div>

              <div className="bg-white border border-blue-200 p-4 rounded-2xl text-center shadow-xs">
                <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">Avg. Order Value</p>
                <p className="text-2xl font-black font-display text-emerald-600">$124.50</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Badges */}
        <section className="mb-20 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Engineered With</span>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mt-1 mb-6">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-2.5 justify-center max-w-3xl mx-auto">
            {techList.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white border border-blue-200 text-xs font-mono font-bold text-[#0066FF] rounded-2xl shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Customer Success */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Client Feedback</span>
            <h2 className="text-3xl font-black font-display text-[#0A1629] mt-1">
              Customer Success
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Card3D key={i} className="h-full">
                <div className="cloud-card h-full rounded-3xl p-8 flex flex-col justify-between">
                  <p className="italic text-slate-700 text-base sm:text-lg mb-6 leading-relaxed font-sans">
                    “{t.quote}”
                  </p>
                  <p className="text-xs font-mono text-[#0066FF] font-bold tracking-wider">
                    — {t.author}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>
        </section>

        {/* CTA Footer Card */}
        <footer className="bg-gradient-to-r from-white via-[#F0F7FF] to-[#EBF5FF] border border-blue-200 rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mb-3">
            Ready to modernize your e-commerce platform?
          </h3>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-sans">
            Schedule a free technical assessment and get a roadmap for your modernization.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] text-white px-8 py-3.5 rounded-2xl font-bold text-sm tracking-wide shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition duration-300"
            >
              Request Assessment
            </Link>

            <Link
              to="/work/projects"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl border border-blue-200 hover:border-[#0066FF]/40 text-slate-800 hover:text-[#0066FF] text-sm font-bold transition duration-300 bg-white shadow-xs"
            >
              View More Projects
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
