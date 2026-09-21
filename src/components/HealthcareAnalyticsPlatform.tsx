import React from "react";
import { Link } from "react-router-dom";
import {
  Pill,
  NotebookText,
  Calendar,
  MonitorCheck,
  Receipt,
  Brain,
  AreaChart,
  HeartHandshake,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Activity,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface ModuleCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  Icon,
}) => (
  <Card3D className="h-full">
    <div className="h-full cloud-card bg-white/90 border border-blue-100/80 hover:border-blue-300 rounded-3xl p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_-5px_rgba(0,102,255,0.08)] hover:shadow-[0_15px_35px_rgba(0,102,255,0.15)]">
      <div>
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-blue-50 border border-blue-100 p-3 rounded-2xl w-14 h-14 flex items-center justify-center text-[#0066FF] shrink-0 group-hover:scale-110 transition-transform">
            {Icon ? <Icon className="w-6 h-6" /> : <Pill className="w-6 h-6 text-[#0066FF]" />}
          </div>
          <div>
            <h4 className="text-lg font-bold font-display text-[#0A1629] group-hover:text-[#0066FF] transition-colors mt-1">
              {title}
            </h4>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
          {description}
        </p>
      </div>
    </div>
  </Card3D>
);

export default function HealthcareAnalyticsPlatform() {
  const stats = [
    { value: "99.98%", label: "System Uptime", glow: "text-[#0066FF]" },
    { value: "-40%", label: "Admin Overhead", glow: "text-emerald-600" },
    { value: "+30%", label: "Care Efficiency", glow: "text-indigo-600" },
    { value: "Real-time", label: "Clinical Alerts", glow: "text-purple-600" },
  ];

  const coreModules = [
    {
      title: "Electronic Health Records (EHR)",
      description:
        "Unified patient record with clinical notes, medication, lab results, and a comprehensive audit trail.",
      Icon: NotebookText,
    },
    {
      title: "Scheduling & Workflow",
      description:
        "Automated appointment scheduling, intelligent patient triage rules, and clinician workload balancing.",
      Icon: Calendar,
    },
    {
      title: "Telemedicine & Remote Monitoring",
      description:
        "Secure, encrypted video consults, patient-provider messaging, and real-time vitals tracking integration.",
      Icon: MonitorCheck,
    },
    {
      title: "Revenue Cycle & Billing",
      description:
        "Automated claims management, seamless payer integration, and smart denials tracking for faster revenue.",
      Icon: Receipt,
    },
    {
      title: "Clinical Decision Support",
      description:
        "AI-driven alerts, personalized evidence-based order sets, and predictive models for proactive care.",
      Icon: Brain,
    },
    {
      title: "Analytics & Population Health",
      description:
        "Interactive dashboards for quality measures, risk analysis, resource utilization, and capacity planning.",
      Icon: AreaChart,
    },
  ];

  const stack = [
    "React (TypeScript)",
    "Node.js (API Gateway)",
    "PostgreSQL (Encrypted)",
    "Docker & Kubernetes",
    "AWS (EKS, Lambda, RDS)",
    "Redis (Caching)",
    "FHIR (Health Interoperability)",
    "GraphQL (Data Fetching)",
  ];

  const testimonials = [
    {
      quote:
        "The unified EHR finally gave our clinicians a single source of truth, drastically improving diagnostic speed and overall patient care experience. The auditability is key for compliance.",
      author: "Dr. Evelyn Reed, Chief Medical Officer, Regional Hospital",
    },
    {
      quote:
        "Integrating remote monitoring directly into the platform helped us flag high-risk patients earlier than ever before, leading to a measurable reduction in readmission rates.",
      author: "Sarah Kim, Director of Care Management, Primary Care Network",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F0F7FF] text-[#0A1629] pt-6 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <header className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0066FF] bg-white border border-blue-200 px-3.5 py-1.5 rounded-full mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Case Study · HIPAA Compliant Tech</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0A1629] leading-tight mb-6">
              Unified Healthcare{" "}
              <span className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] bg-clip-text text-transparent">
                Management System
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              A secure, HIPAA-aligned platform that unifies clinical workflows,
              patient records, telehealth, and analytics to boost care quality
              and operational efficiency across the entire hospital network.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition duration-300 hover:scale-[1.02]"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>Request Demo</span>
              </Link>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 border border-blue-200 bg-white hover:border-blue-400 text-slate-800 px-6 py-4 rounded-xl text-sm font-semibold transition shadow-xs"
              >
                <span>See Core Modules</span>
                <ChevronRight className="w-4 h-4 text-[#0066FF]" />
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/90 border border-blue-100 backdrop-blur-xl max-w-2xl shadow-md">
              {stats.map((item, i) => (
                <div key={i} className="text-center">
                  <p className={`text-2xl sm:text-3xl font-black font-display ${item.glow} mb-0.5`}>
                    {item.value}
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#0066FF]/20 to-[#00D2FF]/20 blur-xl opacity-50" />
            <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.15)] bg-white">
              <img
                src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
                alt="Healthcare dashboard visual"
                className="w-full h-72 sm:h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/1200x800/e0f2fe/0066ff?text=Secure+EHR+System";
                }}
              />
            </div>
          </div>
        </header>

        {/* Project Overview & Snapshot */}
        <section className="grid gap-8 lg:grid-cols-3 items-start mb-20">
          <div className="lg:col-span-2 cloud-card bg-white/90 border border-blue-100 rounded-3xl p-8 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0A1629] mb-4">
              Project Overview
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 border-l-4 border-[#0066FF] pl-4 italic">
              We built a modern, single-pane-of-glass Healthcare Management
              System to replace multiple fragmented legacy applications. The
              platform centralizes EHR, scheduling, billing, telemedicine, and
              analytics in a high-compliance, secure environment with granular
              role-based access.
            </p>

            <h3 className="text-lg font-bold font-display text-[#0066FF] mb-3">
              Primary Challenges Addressed
            </h3>
            <ul className="space-y-3">
              {[
                "Fragmented patient records causing clinical workflow delays and errors.",
                "Manual, labor-intensive scheduling and complex revenue cycle processes.",
                "Limited or non-existent telehealth capabilities for remote patient care.",
                "Navigating strict regulatory (HIPAA, HITECH) and audit requirements.",
              ].map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                  <ChevronRight className="w-4 h-4 text-[#0066FF] mt-1 shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="cloud-card bg-white/90 border border-blue-200/80 rounded-3xl p-7 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
            <h4 className="text-xl font-bold font-display text-[#0A1629] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0066FF]" />
              Project Snapshot
            </h4>
            <div className="space-y-3.5 text-sm text-slate-700 font-mono">
              <p className="flex justify-between border-b border-blue-100 pb-2">
                <span className="text-slate-500">Duration:</span>
                <span className="text-[#0A1629] font-bold">7 months</span>
              </p>
              <p className="flex justify-between border-b border-blue-100 pb-2">
                <span className="text-slate-500">Team:</span>
                <span className="text-[#0A1629] font-bold">~17 specialists</span>
              </p>
              <p className="flex justify-between border-b border-blue-100 pb-2">
                <span className="text-slate-500">Core Stack:</span>
                <span className="text-[#0A1629] font-bold">React, Node, Postgres</span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-500">Compliance:</span>
                <span className="text-emerald-600 font-bold">HIPAA-ready</span>
              </p>
            </div>
          </aside>
        </section>

        {/* Core Modules Grid */}
        <section id="modules" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-semibold">Integrated Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0A1629] mt-1">
              Platform Core Modules
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreModules.map((m, i) => (
              <ModuleCard
                key={i}
                title={m.title}
                description={m.description}
                Icon={m.Icon}
              />
            ))}
          </div>
        </section>

        {/* Operational Impact */}
        <section className="mb-20 grid gap-10 lg:grid-cols-2 items-center cloud-card bg-white/85 border border-blue-100 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,102,255,0.08)]">
          <div className="lg:order-2 rounded-2xl overflow-hidden border border-blue-100 shadow-xl bg-white">
            <img
              src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop"
              alt="doctor and patient collaborating on tablet"
              className="w-full h-64 sm:h-80 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/1200x800/e0f2fe/0066ff?text=Operational+Impact";
              }}
            />
          </div>

          <div className="lg:order-1">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-semibold">Clinical Optimization</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#0A1629] mt-1 mb-4">
              Measurable Operational Impact
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
              The system's unified nature immediately reduced administrative
              burden, accelerated revenue cycles, and improved patient
              throughput while maintaining strict regulatory compliance and
              auditable logs.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-blue-50/70 border border-blue-100 p-5 rounded-2xl text-center">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                  Avg. Scheduling Time Reduction
                </p>
                <p className="text-3xl font-black font-display text-[#0066FF]">3 mins</p>
              </div>
              <div className="bg-emerald-50/70 border border-emerald-100 p-5 rounded-2xl text-center">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                  Claims Processing Cycle
                </p>
                <p className="text-3xl font-black font-display text-emerald-600">-45%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="mb-20 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Interoperability & Data Layers</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#0A1629] mt-1 mb-6">
            Built on a Secure, Modern Stack
          </h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {stack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-white border border-blue-100 text-xs font-mono text-[#0066FF] rounded-xl hover:border-blue-300 shadow-xs hover:shadow-md transition-all"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-semibold">Hospital Feedback</span>
            <h2 className="text-3xl font-extrabold font-display text-[#0A1629] mt-1">
              Client Success Stories
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Card3D key={i} className="h-full">
                <div className="h-full cloud-card bg-white/90 border border-blue-100 rounded-3xl p-8 backdrop-blur-xl shadow-[0_10px_30px_-5px_rgba(0,102,255,0.08)] flex flex-col justify-between">
                  <p className="text-base sm:text-lg text-slate-700 italic mb-6 leading-relaxed">
                    “{t.quote}”
                  </p>
                  <p className="text-xs font-mono text-[#0066FF] font-bold border-t border-blue-100 pt-4">
                    — {t.author}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="bg-gradient-to-br from-white via-[#F0F7FF] to-[#E0F2FE] border border-blue-200/80 rounded-3xl p-8 sm:p-12 text-center shadow-[0_20px_50px_rgba(0,102,255,0.12)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-[#0A1629] mb-4">
            Ready to modernize clinical operations?
          </h3>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Book a technical assessment today and receive a custom digital
            transformation roadmap tailored for your organization's compliance
            and growth needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 transition duration-300 hover:scale-105"
            >
              Request Assessment
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl border border-blue-200 hover:border-blue-400 text-slate-800 font-bold text-sm transition duration-300 bg-white shadow-xs"
            >
              Contact Sales
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
