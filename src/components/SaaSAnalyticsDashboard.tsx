import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  TrendingUp,
  Activity,
  Layers,
  Sparkles,
  ArrowRight,
  Database,
  PieChart,
  Zap,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const FeatureCard: React.FC<{
  title: string;
  desc: string;
}> = ({ title, desc }) => (
  <Card3D className="h-full">
    <div className="h-full cloud-card bg-white/90 border border-blue-100/80 hover:border-blue-300 p-6 sm:p-7 rounded-3xl backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_-5px_rgba(0,102,255,0.08)] hover:shadow-[0_15px_35px_rgba(0,102,255,0.15)]">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-4 group-hover:scale-110 transition-transform">
          <Activity className="w-6 h-6" />
        </div>
        <h4 className="text-lg font-bold font-display text-[#0A1629] group-hover:text-[#0066FF] transition-colors mb-2">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  </Card3D>
);

export default function SaaSAnalyticsDashboard() {
  const stats = [
    { label: "User Retention", value: "+120%", glow: "text-[#0066FF]" },
    { label: "Daily API Events", value: "2M+", glow: "text-emerald-600" },
    { label: "Core Uptime", value: "99.98%", glow: "text-indigo-600" },
  ];

  const highlights = [
    { title: "Real-time Data", desc: "Sub-second dashboard updates for faster business decisions." },
    { title: "Preset Templates", desc: "BI-powered insights for churn, performance, and revenue analytics." },
    { title: "User Funnels", desc: "Track conversion flows and automate optimization insights." },
    { title: "Cohort Analysis", desc: "Measure lifetime value with behavioral segmentation." },
    { title: "Predictive Models", desc: "Machine learning forecasts future user and revenue growth." },
    { title: "Custom Alerts", desc: "Trigger KPI notifications for spikes or drops instantly." },
  ];

  const stack = [
    "React",
    "Node.js",
    "Kafka",
    "MongoDB",
    "Redis",
    "AWS",
    "GraphQL",
    "Docker",
  ];

  const testimonials = [
    {
      quote:
        "The best analytics upgrade we’ve made — our product leads love the new cohort insights.",
      author: "VP of Product, SaaS Unicorn",
    },
    {
      quote:
        "The modern dashboard boosted analytics adoption across our org — faster, smarter decisions.",
      author: "Chief Data Officer, Enterprise Tech",
    },
  ];

  const faqs = [
    {
      q: "Does the dashboard support role-based control?",
      a: "Yes. Admins manage granular permissions by teams, regions, and access zones.",
    },
    {
      q: "Can clients build custom reports?",
      a: "Absolutely. Users can create, save, and share reports using the visual editor.",
    },
  ];

  return (
    <main className="bg-[#F0F7FF] min-h-screen text-[#0A1629] pt-6 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0066FF] bg-white border border-blue-200 px-3.5 py-1.5 rounded-full mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>SaaS · Case Study</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0A1629] leading-tight mb-6">
              SaaS Analytics Dashboard{" "}
              <span className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] bg-clip-text text-transparent">
                Modernization
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              A real-time analytics platform empowering SaaS businesses with smart insights,
              automated alerts, and predictive analysis to boost retention and revenue.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white/90 border border-blue-100 backdrop-blur-xl mb-8 max-w-md shadow-md">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className={`text-2xl sm:text-3xl font-black font-display ${stat.glow}`}>{stat.value}</p>
                  <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition duration-300 hover:scale-[1.02]"
            >
              <span>Download Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#0066FF]/20 to-[#00D2FF]/20 blur-xl opacity-50" />
            <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.15)] bg-white">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
                alt="Analytics dashboard"
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Overview & Quick Info */}
        <section className="grid gap-8 lg:grid-cols-3 mb-20 items-start">
          <div className="lg:col-span-2 cloud-card bg-white/90 border border-blue-100 p-8 rounded-3xl backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0A1629] mb-4">
              Project Overview
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed border-l-4 border-[#0066FF] pl-4 italic">
              We redesigned a legacy SaaS dashboard into a modular data platform.
              The modernized system integrates real-time analytics, dynamic reporting,
              trend prediction, and automated growth insights for enterprise clients.
            </p>
          </div>

          <div className="cloud-card bg-white/90 border border-blue-200/80 p-7 rounded-3xl backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
            <h4 className="text-xl font-bold font-display text-[#0A1629] mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#0066FF]" />
              Quick Info
            </h4>
            <div className="space-y-3 text-sm text-slate-700 font-mono">
              <p className="flex justify-between border-b border-blue-100 pb-2">
                <span className="text-slate-500">Duration:</span>
                <span className="text-[#0A1629] font-bold">6 Months</span>
              </p>
              <p className="flex justify-between border-b border-blue-100 pb-2">
                <span className="text-slate-500">Team:</span>
                <span className="text-[#0A1629] font-bold">8 Devs · 2 BI</span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-500">Stack:</span>
                <span className="text-[#0066FF] font-bold">React · Node · Kafka</span>
              </p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-semibold">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0A1629] mt-1">
              Key Product Highlights
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <FeatureCard key={i} title={h.title} desc={h.desc} />
            ))}
          </div>
        </section>

        {/* Visual-First Insights */}
        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20 cloud-card bg-white/85 border border-blue-100 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,102,255,0.08)]">
          <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl bg-white">
            <img
              src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop"
              alt="Data visualization"
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-semibold">Interactive Architecture</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#0A1629] mt-1 mb-4">
              Visual-First Insights
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              We designed a clean, modular analytics interface that allows teams to
              explore and act on data interactively — with visual drilldowns, export options,
              and customizable dashboards.
            </p>
            <ul className="space-y-3">
              {[
                "Export to PDF, PPT, or CSV",
                "Multi-tenant data isolation",
                "Custom themes & role-based access",
              ].map((point, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Platform Stack</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#0A1629] mt-1 mb-6">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white border border-blue-100 rounded-xl text-xs font-mono text-[#0066FF] hover:border-blue-300 shadow-xs hover:shadow-md transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Client Feedback */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-semibold">Enterprise Adoption</span>
            <h2 className="text-3xl font-extrabold font-display text-[#0A1629] mt-1">
              Client Feedback
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((f, i) => (
              <Card3D key={i} className="h-full">
                <blockquote className="h-full cloud-card bg-white/90 border border-blue-100 rounded-3xl p-8 backdrop-blur-xl shadow-[0_10px_30px_-5px_rgba(0,102,255,0.08)] flex flex-col justify-between">
                  <p className="italic text-slate-700 text-base sm:text-lg mb-6 leading-relaxed">“{f.quote}”</p>
                  <footer className="text-xs font-mono text-[#0066FF] font-bold border-t border-blue-100 pt-4">
                    — {f.author}
                  </footer>
                </blockquote>
              </Card3D>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-semibold">Clarifications</span>
            <h2 className="text-3xl font-extrabold font-display text-[#0A1629] mt-1">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white/90 border border-blue-100 p-5 rounded-2xl backdrop-blur-xl group transition-all shadow-xs"
              >
                <summary className="font-bold text-[#0A1629] text-base cursor-pointer flex items-center justify-between list-none">
                  <span>{faq.q}</span>
                  <HelpCircle className="w-5 h-5 text-[#0066FF] group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-slate-600 text-sm mt-3 pt-3 border-t border-blue-100 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-white via-[#F0F7FF] to-[#E0F2FE] border border-blue-200/80 p-8 sm:p-12 rounded-3xl text-center shadow-[0_20px_50px_rgba(0,102,255,0.12)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-[#0A1629] mb-3">
            Ready to scale data-driven success?
          </h3>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to build actionable analytics tools your customers love.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-500/25 transition duration-300 hover:scale-105"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
