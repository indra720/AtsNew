import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  TrendingUp,
  HandCoins,
  Sparkles,
  ArrowRight,
  Zap,
  Lock,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  Icon,
}) => (
  <Card3D className="h-full">
    <div className="cloud-card h-full p-6 sm:p-7 rounded-3xl flex flex-col justify-between group">
      <div>
        <div className="flex items-start space-x-4 mb-4">
          <div className="text-[#0066FF] bg-[#EBF5FF] border border-blue-200 p-3 rounded-2xl shadow-inner shrink-0 group-hover:scale-110 transition-transform">
            {Icon && <Icon className="w-6 h-6 stroke-[2]" />}
          </div>
          <h4 className="text-lg font-black font-display text-[#0A1629] group-hover:text-[#0066FF] transition-colors mt-1">
            {title}
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pl-13">
          {description}
        </p>
      </div>
    </div>
  </Card3D>
);

export default function FinTechMobileBankingApp() {
  const coreFeatures = [
    {
      title: "Biometric Login",
      description:
        "Face and fingerprint recognition for secure access with fallback PIN.",
      Icon: ShieldCheck,
    },
    {
      title: "Instant Transfers",
      description:
        "Real-time peer-to-peer payments with advanced fraud protection.",
      Icon: HandCoins,
    },
    {
      title: "Card Controls",
      description:
        "Freeze cards instantly, set limits, manage merchants and track usage.",
      Icon: ShieldCheck,
    },
    {
      title: "Spending Insights",
      description:
        "Categorized reports, personalized financial goals, and proactive budgeting reminders.",
      Icon: TrendingUp,
    },
    {
      title: "Digital Onboarding",
      description:
        "KYC verification and e-signatures completed entirely within the app in minutes.",
      Icon: HandCoins,
    },
    {
      title: "Push Notifications",
      description:
        "Instant, configurable alerts for every transaction and suspicious activity.",
      Icon: Zap,
    },
  ];

  const metrics = [
    { value: "4.8", label: "App Store rating", glow: "text-cyan-400" },
    { value: "+60%", label: "User Engagement", glow: "text-emerald-400" },
    { value: "-35%", label: "Fraud Attempts", glow: "text-indigo-400" },
    { value: "99.99%", label: "API Uptime", glow: "text-purple-400" },
  ];

  const stack = [
    "React Native (Cross-platform)",
    "Node.js (Microservices)",
    "PostgreSQL (Encrypted)",
    "AWS (Cloud Infrastructure)",
    "Kafka (Event Streaming)",
    "JWT (Authentication)",
    "GraphQL (Data Fetching)",
    "Docker & Kubernetes",
  ];

  return (
    <main className="min-h-screen bg-[#F0F7FF] text-[#0A1629] pt-6 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <section className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF] bg-white border border-blue-200 shadow-xs px-3.5 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Case Study · FinTech Digital Transformation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0A1629] leading-tight mb-6">
              Next-Gen Mobile{" "}
              <span className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] bg-clip-text text-transparent">
                Banking Experience
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl font-sans">
              A secure, cross-platform banking solution offering biometric
              authentication, instant payments, card controls, and proactive
              fraud detection.
            </p>

            {/* Quick Hero Telemetry */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-3xl cloud-card mb-8 max-w-2xl">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-black font-display text-[#0066FF]">3M+</p>
                <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1">Active users</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-black font-display text-emerald-600">99.95%</p>
                <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1">Uptime SLA</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-black font-display text-[#0052CC]">PCI-DSS</p>
                <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1">Compliance</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-black font-display text-indigo-600">2ms</p>
                <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1">Avg. Transfer</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] text-white font-bold px-8 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,102,255,0.3)] transition duration-300 hover:scale-[1.02]"
            >
              <span>Download Full Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-blue-200 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop"
                alt="Mobile banking mockup"
                className="w-full h-72 sm:h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/1200x900/0f172a/00f2fe?text=Mobile+Banking+App";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </section>

        {/* Project Overview & Snapshot */}
        <section className="grid gap-8 lg:grid-cols-3 items-start mb-20">
          <div className="lg:col-span-2 cloud-card rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mb-4">
              Project Overview
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed border-l-2 border-[#0066FF] pl-4 italic font-sans">
              The goal was to build a secure, feature-rich banking app that
              combines next-gen digital payments, real-time insights, and
              personalized controls — empowering users with trust and
              transparency across iOS and Android platforms.
            </p>
          </div>

          <div className="cloud-card rounded-3xl p-7 shadow-xl">
            <h4 className="text-xl font-black font-display text-[#0A1629] mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#0066FF]" />
              Project Snapshot
            </h4>
            <div className="space-y-3 text-sm text-slate-600 font-mono font-medium">
              <p className="flex justify-between border-b border-blue-100 pb-2">
                <span className="text-slate-500">Duration:</span>
                <span className="text-slate-900 font-bold">8 months</span>
              </p>
              <p className="flex justify-between border-b border-blue-100 pb-2">
                <span className="text-slate-500">Team Size:</span>
                <span className="text-slate-900 font-bold">15 specialists</span>
              </p>
              <p className="flex justify-between border-b border-blue-100 pb-2">
                <span className="text-slate-500">Core Stack:</span>
                <span className="text-slate-900 font-bold">React Native, Node.js</span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-500">Compliance:</span>
                <span className="text-[#0066FF] font-bold">PCI DSS aligned</span>
              </p>
            </div>
          </div>
        </section>

        {/* Platform Core Features */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0A1629] mt-1">
              Platform Core Features
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((f, i) => (
              <FeatureCard
                key={i}
                title={f.title}
                description={f.description}
                Icon={f.Icon}
              />
            ))}
          </div>
        </section>

        {/* Bank-Grade Security Architecture */}
        <section className="grid gap-10 lg:grid-cols-2 mb-20 items-center cloud-card rounded-3xl p-6 sm:p-10">
          <div className="rounded-2xl overflow-hidden border border-blue-200 shadow-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1744843242870-f1635044c7eb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1000"
              alt="Secure mobile banking"
              className="w-full h-64 sm:h-80 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/1200x800/0f172a/00f2fe?text=Bank-Grade+Security";
              }}
            />
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Zero-Compromise Security</span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mt-1 mb-4">
              Bank-Grade Security Architecture
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              The app includes multi-layered encryption, continuous risk
              monitoring, and adaptive fraud detection — ensuring full financial
              safety for every transaction.
            </p>

            <ul className="space-y-3">
              {[
                "Encrypted end-to-end communication (TLS 1.3)",
                "Device binding and tokenization for sensitive data",
                "Adaptive, anomaly-based fraud detection engine",
                "Strict role-based access controls (RBAC)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <ShieldCheck className="w-5 h-5 text-[#0066FF] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Impact & Performance Metrics */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Verifiable Results</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0A1629] mt-1">
              Impact & Performance Metrics
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {metrics.map((stat, i) => (
              <div
                key={i}
                className="cloud-card p-6 rounded-3xl text-center shadow-md"
              >
                <p className="text-4xl font-black font-display text-[#0066FF] mb-1">
                  {stat.value}
                </p>
                <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Frameworks & Infrastructure</span>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mt-1 mb-6">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {stack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-white border border-blue-200 rounded-2xl text-xs font-mono font-bold text-[#0066FF] shadow-xs hover:border-[#0066FF]/40 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-gradient-to-r from-white via-[#F0F7FF] to-[#EBF5FF] border border-blue-200 rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-black font-display text-[#0A1629] mb-4">
            Ready to deliver a next-generation banking experience?
          </h3>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-3xl mx-auto font-sans">
            Let’s build a secure, future-ready financial platform that drives
            user adoption and financial trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition duration-300 hover:scale-105"
            >
              Start Your Project Assessment
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-2xl border border-blue-200 hover:border-[#0066FF]/40 text-slate-800 hover:text-[#0066FF] font-bold text-sm transition duration-300 bg-white shadow-xs"
            >
              Contact FinTech Experts
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
