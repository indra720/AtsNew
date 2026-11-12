import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
  CircleCheckBig,
  ArrowRight,
  ClipboardCheck,
  Lightbulb,
  Wrench,
  Rocket,
  Sparkles,
  Bot,
  Cpu,
  Layers,
  Server,
  Terminal,
  Activity,
  CheckCircle2,
  Workflow,
  Clock,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Card3D from "./ui/Card3D";

// ================================================================
// DETAILED INTERACTIVE SERVICE ARCHITECTURES
// ================================================================
interface ServiceArchitecture {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  icon: any;
  gradient: string;
  techStack: string[];
  architecturePipeline: { step: string; detail: string }[];
  deliverables: string[];
  keyOutcome: string;
}

const SERVICE_ARCHITECTURES: ServiceArchitecture[] = [
  {
    id: "saas-web",
    name: "Full-Stack SaaS & Web Platforms",
    tagline: "Ultra-responsive, sub-second web applications built for hyper-growth.",
    badge: "ENTERPRISE CORE",
    icon: Code,
    gradient: "from-blue-600 via-cyan-500 to-blue-400",
    techStack: ["React 19", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis"],
    architecturePipeline: [
      { step: "01. Global Edge CDN", detail: "Cloudflare Edge network caches static assets with sub-50ms TTFB worldwide." },
      { step: "02. Reactive Frontend", detail: "React 19 concurrent rendering, server components, and 120fps fluid interfaces." },
      { step: "03. Scalable API Layer", detail: "Stateless Node.js microservices with JWT zero-trust authentication." },
      { step: "04. Multi-Tenant DB", detail: "PostgreSQL read-replicas with connection pooling and automated daily snapshots." },
    ],
    deliverables: [
      "100% Production Source Code & IP Ownership",
      "Interactive Figma Design System & Component Library",
      "Automated CI/CD Pipeline & GitHub Staging Setup",
      "End-to-End API Documentation & Postman Collections",
      "99.99% Availability Cloud SLA & 30-Day Hypercare",
    ],
    keyOutcome: "0.38s Page Load • 10x Concurrent User Scale • Zero Architectural Debt",
  },
  {
    id: "mobile-ecosystems",
    name: "Cross-Platform Mobile Apps",
    tagline: "Native 60fps performance across iOS and Android from a single code base.",
    badge: "MOBILE NATIVE",
    icon: Smartphone,
    gradient: "from-indigo-600 via-blue-500 to-cyan-400",
    techStack: ["Flutter", "React Native", "Swift / Kotlin", "Firebase", "WebSockets", "App Store Publishing"],
    architecturePipeline: [
      { step: "01. Shared Engine", detail: "Single clean architecture codebase powering both iOS and Android natively." },
      { step: "02. Offline-First Sync", detail: "Local SQLite/WatermelonDB syncing seamlessly with cloud upon reconnect." },
      { step: "03. Real-Time Telemetry", detail: "Bi-directional WebSocket streams for live push alerts, chat, and location tracking." },
      { step: "04. Native Hardware Interop", detail: "Biometrics, Bluetooth BLE, Camera, and background push notifications." },
    ],
    deliverables: [
      "Complete iOS and Android Native Production Builds",
      "App Store & Google Play Store Publishing Approval Support",
      "Automated Push Notification Infrastructure",
      "Crashlytics & Real-Time Performance Monitoring Setup",
      "Ongoing OS Compatibility Updates & Versioning",
    ],
    keyOutcome: "60fps Smooth Motion • 1.2s Cold Start • 4.9-Star User Experience",
  },
  {
    id: "ai-intelligent-agents",
    name: "Next-Gen AI & Voice Telephony",
    tagline: "Autonomous AI Copilots, speech-to-text intelligence, and automated triage.",
    badge: "AI INTELLIGENCE",
    icon: Bot,
    gradient: "from-purple-600 via-indigo-500 to-cyan-400",
    techStack: ["OpenAI / Claude / Gemini API", "PyTorch", "WebRTC", "Vector DBs (Pinecone/pgvector)", "FastAPI", "Audio Codecs"],
    architecturePipeline: [
      { step: "01. Live Audio & Text Stream", detail: "WebRTC 48kHz audio ingest with ultra-low 18ms latency buffering." },
      { step: "02. Real-Time Speech AI", detail: "Continuous speech-to-text transcription and live sentiment classification." },
      { step: "03. RAG & Vector Engine", detail: "Sub-second retrieval over enterprise documentation and CRM database history." },
      { step: "04. Autonomous Copilot Action", detail: "Automated ticket creation, CRM field updates, and next-best-action routing." },
    ],
    deliverables: [
      "Proprietary AI Agent Model Prompts & System Blueprints",
      "Custom Vector Search Index & Document Embeddings",
      "Integrated WebRTC Web-Dialer & Audio Copilot HUD",
      "Automated CRM Lead Enrichment & Transcription Logs",
      "Enterprise Data Privacy & PII Redaction Guarantees",
    ],
    keyOutcome: "65% Autonomous Query Resolution • Sub-Second Triage • 24/7 Agent Availability",
  },
  {
    id: "cloud-devops",
    name: "Cloud Architecture & High-Availability DevOps",
    tagline: "Multi-region cloud infrastructure, Kubernetes clusters, and zero-downtime CI/CD.",
    badge: "CLOUD INFRASTRUCTURE",
    icon: Cloud,
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    techStack: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus"],
    architecturePipeline: [
      { step: "01. Infrastructure-as-Code", detail: "Repeatable, version-controlled cloud environments managed via Terraform." },
      { step: "02. Container Orchestration", detail: "Kubernetes autoscaling clusters with zero-downtime rolling deploys." },
      { step: "03. Automated CI/CD", detail: "Pull-request preview environments, linting, unit tests, and security gating." },
      { step: "04. 24/7 Telemetry & Health", detail: "Prometheus & Grafana dashboards with automated PagerDuty alert escalation." },
    ],
    deliverables: [
      "Fully Automated Multi-Stage CI/CD Deployment Pipelines",
      "Autoscaling Kubernetes or Serverless Cloud Blueprints",
      "Disaster Recovery & Automated Multi-Region Backup Systems",
      "Cloud Cost Optimization Audit & Budget Alerts",
      "24/7 Monitoring Dashboards & Runbooks",
    ],
    keyOutcome: "99.99% Uptime Guarantee • Zero-Downtime Rollouts • 38% Cloud Bill Savings",
  },
  {
    id: "cybersecurity-zero-trust",
    name: "Zero-Trust Cybersecurity & Compliance Audits",
    tagline: "End-to-end vulnerability auditing, SOC-2 readiness, and bank-grade encryption.",
    badge: "ZERO TRUST SECURITY",
    icon: ShieldCheck,
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    techStack: ["TLS 1.3", "OAuth2 / OIDC", "Vault Secret Management", "OWASP ZAP", "SOC-2 Type II", "ISO 27001"],
    architecturePipeline: [
      { step: "01. Perimeter Hardening", detail: "Cloudflare WAF, automated DDoS mitigation, and strict rate-limiting rules." },
      { step: "02. Identity & Access", detail: "Role-based access control (RBAC), multi-factor auth, and immutable session logs." },
      { step: "03. Data-at-Rest Encryption", detail: "AES-256 encrypted database volumes and HSM-backed key management." },
      { step: "04. Continuous Auditing", detail: "Automated vulnerability scanning across container images and code repos." },
    ],
    deliverables: [
      "Comprehensive Threat & Penetration Testing Report",
      "SOC-2 Type II & ISO 27001 Compliance Readiness Checklist",
      "Zero-Trust Network Architecture & Role-Based Access Setup",
      "Secrets Management & Vault Configuration Blueprints",
      "Incident Response Runbook & Security SLA Protocol",
    ],
    keyOutcome: "Zero Unaudited Vulnerabilities • 100% Data Encryption • Compliance-Ready",
  },
];

// ================================================================
// 4-WEEK SPRINT VELOCITY ROADMAP DATA
// ================================================================
const SPRINT_STEPS = [
  {
    week: "WEEK 01",
    phase: "Discovery & Blueprint",
    icon: Lightbulb,
    headline: "System Architecture & Clickable Figma Prototype",
    desc: "We analyze technical hurdles, user journeys, database schemas, and deliver high-fidelity interactive wireframes for stakeholder sign-off.",
    deliverable: "Clickable Figma Prototype & Architecture Blueprint",
    tag: "REQUIREMENTS LOCKED",
  },
  {
    week: "WEEK 02",
    phase: "Core Architecture",
    icon: Database,
    headline: "Backend APIs, Database Modeling & Microservices",
    desc: "We spin up containerized development environments, scaffold database schemas, configure auth pipelines, and write core business logic.",
    deliverable: "Live Staging Environment & Working REST/WebSocket APIs",
    tag: "BACKEND OPERATIONAL",
  },
  {
    week: "WEEK 03",
    phase: "Frontend & QA Hardening",
    icon: Wrench,
    headline: "120fps UI Assembly, Security Auditing & Load Testing",
    desc: "Connecting the interactive frontend to live APIs, stress-testing under simulated concurrency, and running automated penetration tests.",
    deliverable: "End-to-End Integrated System & Automated Test Suites",
    tag: "SECURITY & QA PASSED",
  },
  {
    week: "WEEK 04",
    phase: "Deployment & Hypercare",
    icon: Rocket,
    headline: "Zero-Downtime Launch, Staff Training & 24/7 SLA",
    desc: "Seamless production DNS cutover, setting up real-time telemetry monitoring, handing over full source code, and providing dedicated hypercare.",
    deliverable: "Live Production Platform & 24/7 SLA Handover",
    tag: "LIVE IN PRODUCTION",
  },
];

// ================================================================
// ENGAGEMENT MODELS
// ================================================================
const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated Engineering Pod",
    badge: "MOST POPULAR FOR SCALING",
    popular: true,
    tagline: "Dedicated squad of senior engineers dedicated 100% to your product roadmap.",
    features: [
      "Dedicated Full-Stack Lead, UI Engineer & DevOps Architect",
      "Direct daily Slack / Teams collaboration & daily standups",
      "Flexible scope — iterate features as your business scales",
      "Bi-weekly sprint releases & continuous staging deployments",
      "Zero hiring overhead or long-term lock-in",
    ],
    idealFor: "Startups & Enterprises needing fast, dedicated velocity.",
  },
  {
    title: "Fixed-Scope Turnkey Project",
    badge: "MILESTONE DRIVEN",
    popular: false,
    tagline: "Guaranteed timeline, fixed budget, and clear scope for defined platforms.",
    features: [
      "Rigorous discovery phase locking 100% of scope & milestones",
      "Guaranteed on-time delivery with zero budget surprises",
      "Weekly milestone demos with clear acceptance criteria",
      "Full source code, IP rights & documentation handover",
      "30-day post-launch hypercare & bug-fix warranty",
    ],
    idealFor: "Companies with well-defined MVP or system modernization scopes.",
  },
  {
    title: "Enterprise Modernization & SLA",
    badge: "24/7 MISSION CRITICAL",
    popular: false,
    tagline: "Cloud migration, legacy refactoring, and 99.99% high-availability SLA.",
    features: [
      "Legacy codebase audit & microservices extraction roadmap",
      "Multi-region cloud failover & disaster recovery guarantee",
      "15-minute response SLA for critical infrastructure incidents",
      "SOC-2 / ISO compliance auditing & continuous penetration tests",
      "Quarterly cloud cost optimization reviews",
    ],
    idealFor: "Established enterprises with high-traffic production workloads.",
  },
];

export const ServicesSection: FC = () => {
  const [selectedArchId, setSelectedArchId] = useState<string>("saas-web");
  const [activeSprintWeek, setActiveSprintWeek] = useState<number>(0);

  const activeArch =
    SERVICE_ARCHITECTURES.find((a) => a.id === selectedArchId) ||
    SERVICE_ARCHITECTURES[0];

  return (
    <div className="bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#E8F4FD] text-slate-900 min-h-screen">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[11px] sm:text-xs font-semibold tracking-wider text-[#0066FF] mb-4 shadow-xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>ATS ENTERPRISE CAPABILITIES</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-slate-900 tracking-tight leading-tight mb-3 font-display max-w-3xl mx-auto">
            Engineering Services{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              Engineered For Scale
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            We architect high-throughput digital platforms, real-time AI systems, and mission-critical cloud infrastructure built for reliability and growth.
          </p>

          {/* Quick Metrics Ticker */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { val: "99.99%", lbl: "SLA Uptime Standard" },
              { val: "0.38s", lbl: "Median Response TTFB" },
              { val: "100%", lbl: "In-House Engineers" },
              { val: "150+", lbl: "Production Deployments" },
            ].map((m, i) => (
              <div
                key={i}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-blue-100 shadow-xs text-center backdrop-blur-sm"
              >
                <div className="text-xl sm:text-2xl font-black text-[#0066FF] font-display">
                  {m.val}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                  {m.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. INTERACTIVE SERVICE ARCHITECTURE EXPLORER (TABBED)        */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-18 bg-[#F8FAFC]/90 border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1500px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066FF] mb-3 shadow-xs">
              <Layers className="w-3.5 h-3.5" />
              <span>DEEP-DIVE TECHNICAL CAPABILITY</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight font-display mb-2">
              Explore Our Architecture Blueprint
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">
              Click any engineering domain below to inspect live data pipelines, deliverables, and underlying tech stacks.
            </p>
          </div>

          {/* Interactive Domain Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {SERVICE_ARCHITECTURES.map((arch) => {
              const Icon = arch.icon;
              const isSelected = arch.id === selectedArchId;
              return (
                <button
                  key={arch.id}
                  onClick={() => setSelectedArchId(arch.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-[#0066FF] text-white shadow-[0_8px_25px_rgba(0,102,255,0.35)] scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-cyan-200" : "text-[#0066FF]"}`} />
                  <span>{arch.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Architecture Viewer Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeArch.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-blue-100/90 shadow-[0_15px_45px_rgba(0,102,255,0.08)] overflow-hidden p-6 sm:p-8 lg:p-10"
            >
              {/* Header inside Card */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200 text-xs font-bold font-mono uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{activeArch.badge}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                    {activeArch.name}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium mt-1">
                    {activeArch.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
                  <span>{activeArch.keyOutcome}</span>
                </div>
              </div>

              {/* 2-Column Responsive Blueprint */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left (7 Cols): Data Flow Architecture Pipeline */}
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-[#0066FF]" />
                    <span>Production Architecture & Dataflow:</span>
                  </h4>

                  <div className="space-y-3">
                    {activeArch.architecturePipeline.map((pipe, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-blue-300 transition-all flex items-start gap-3.5 group"
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF] font-bold text-xs shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition">
                          {pIdx + 1}
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-slate-900 mb-0.5">
                            {pipe.step}
                          </h5>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {pipe.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block mb-2">
                      Verified Technology Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeArch.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-xl bg-white border border-blue-200/90 text-xs font-semibold text-slate-700 shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right (5 Cols): Deliverables Checklist & Action */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#F0F7FF] to-[#E6F0FA] rounded-2xl border border-blue-200 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 font-display mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
                      <span>Enterprise Deliverables:</span>
                    </h4>

                    <ul className="space-y-3 mb-6">
                      {activeArch.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0040A8] hover:to-[#0052CC] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition text-center"
                  >
                    <span>Request Architecture Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. INTERACTIVE 4-WEEK SPRINT VELOCITY ROADMAP                 */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-18 bg-white border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1500px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066FF] mb-3 shadow-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>TRANSPARENT SPRINT TIMELINE</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight font-display mb-2">
              How We Ship in 4 Agile Weeks
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">
              Click any sprint week to preview exact milestones, deliverables, and standup checkpoints.
            </p>
          </div>

          {/* Interactive Week Selector Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {SPRINT_STEPS.map((sprint, idx) => {
              const Icon = sprint.icon;
              const isActive = activeSprintWeek === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveSprintWeek(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-50/90 border-[#0066FF] shadow-[0_10px_25px_rgba(0,102,255,0.15)] ring-2 ring-[#0066FF]/20"
                      : "bg-[#F8FAFC] border-slate-200 hover:border-blue-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-[#0066FF]">
                      {sprint.week}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#0066FF]" : "text-slate-400"}`} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{sprint.phase}</h4>
                </button>
              );
            })}
          </div>

          {/* Active Sprint Detail Card */}
          <div className="bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0F7FF] rounded-3xl border border-blue-200/90 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-[#0066FF] text-xs font-mono font-bold mb-3">
                <span>{SPRINT_STEPS[activeSprintWeek].week} &bull; {SPRINT_STEPS[activeSprintWeek].tag}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-2">
                {SPRINT_STEPS[activeSprintWeek].headline}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">
                {SPRINT_STEPS[activeSprintWeek].desc}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF]">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>Deliverable: {SPRINT_STEPS[activeSprintWeek].deliverable}</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs sm:text-sm shadow-md transition shrink-0"
            >
              <span>Lock Sprint Slot</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. TRANSPARENT ENGAGEMENT MODELS                             */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-18 bg-[#F8FAFC]/90 border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1500px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066FF] mb-3 shadow-xs">
              <Users className="w-3.5 h-3.5" />
              <span>FLEXIBLE PARTNERSHIP</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight font-display mb-2">
              Choose How We Collaborate
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">
              Transparent engagement models designed for startups, high-growth scale-ups, and global enterprise teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <div
                key={i}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  model.popular
                    ? "bg-white border-2 border-[#0066FF] shadow-[0_15px_45px_rgba(0,102,255,0.12)] scale-102"
                    : "bg-white border border-slate-200 hover:border-blue-300 shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${
                        model.popular
                          ? "bg-blue-50 text-[#0066FF] border border-blue-200"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                    {model.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {model.tagline}
                  </p>

                  <ul className="space-y-3 mb-6 pt-4 border-t border-slate-100">
                    {model.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] text-slate-500 font-medium mb-4 italic">
                    Best for: {model.idealFor}
                  </p>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition text-center ${
                      model.popular
                        ? "bg-[#0066FF] hover:bg-[#0052CC] text-white shadow-md"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>Consult on This Model</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. BOTTOM HIGH-CONVERTING CTA                                */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F8FAFC] to-[#F0F7FF] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066FF] mb-4 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>2-HOUR ARCHITECT RESPONSE GUARANTEE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-display mb-3">
            Have a Complex Engineering Problem?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 max-w-xl mx-auto font-normal">
            Speak directly with a senior solutions architect, not a sales representative. Receive a custom technical roadmap in 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition cursor-pointer"
          >
            <span>Book Free Technical Discovery Call</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
