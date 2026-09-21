import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Lightbulb,
  Globe2,
  ShieldCheck,
  SmilePlus,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const pillars = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "We ensure rapid project turnaround and agile execution without compromising code architecture or quality.",
    badge: "AGILE SPEED",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(0, 242, 254, 0.2)",
  },
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    desc: "Bespoke, future-ready engineering uniquely tailored to overcome complex business challenges.",
    badge: "FUTURE TECH",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245, 158, 11, 0.2)",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Deploying high-impact distributed systems across multi-region international markets seamlessly.",
    badge: "WORLDWIDE",
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(59, 130, 246, 0.2)",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security",
    desc: "Enterprise-grade encryption, vulnerability auditing, and strict compliance protection for mission-critical data.",
    badge: "SOC2 & ISO",
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.2)",
  },
  {
    icon: SmilePlus,
    title: "Client-Centric Focus",
    desc: "Transparent workflows, real-time collaboration, and proactive support dedicated to your long-term success.",
    badge: "99% SATISFACTION",
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168, 85, 247, 0.2)",
  },
  {
    icon: Zap,
    title: "Peak Performance",
    desc: "Ultra-optimized cloud infrastructure, sub-second latency, and scalable databases built for hyper-growth.",
    badge: "HIGH THROUGHPUT",
    color: "from-cyan-400 to-teal-400",
    glow: "rgba(0, 242, 254, 0.2)",
  },
];

export const ProvenTrackRecord: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F0F7FF] text-slate-900 overflow-hidden border-t border-blue-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-4 shadow-xs"
          >
            <span>ENGINEERING EXCELLENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4"
          >
            Why Clients Love Working With Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans"
          >
            We engineer high-performance digital systems designed to accelerate business velocity, 
            enhance stability, and maintain competitive supremacy in an evolving technological landscape.
          </motion.p>
        </div>

        {/* Results That Speak Louder - Live KPI Telemetry Dashboard */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-mono font-bold text-[#0066FF] tracking-wider uppercase mb-1">
                Data-Driven Impact
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                Results That Speak <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00D2FF]">Louder</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-sm">
              Real metrics achieved across 120+ client deployments and scalable digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* KPI 1: 320% Traffic Surge */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-blue-100 shadow-[0_8px_30px_rgba(0,102,255,0.06)] hover:border-[#0066FF]/40 hover:shadow-[0_12px_35px_rgba(0,102,255,0.12)] transition-all group">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-display mb-1 group-hover:text-[#0066FF] transition-colors">
                320%
              </div>
              <div className="text-xs font-bold text-slate-600 mb-4 font-mono">
                Increase in Website Traffic
              </div>
              {/* Wave Graph */}
              <div className="h-16 w-full flex items-end">
                <svg className="w-full h-full" viewBox="0 0 120 45" fill="none">
                  <path
                    d="M 0 38 Q 20 42, 40 22 T 80 25 T 120 8"
                    stroke="#0066FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 38 Q 20 42, 40 22 T 80 25 T 120 8 L 120 45 L 0 45 Z"
                    fill="url(#traffic-gradient)"
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient id="traffic-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0066FF" />
                      <stop offset="100%" stopColor="#00D2FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* KPI 2: 200% Growth in Conversions */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-blue-100 shadow-[0_8px_30px_rgba(0,102,255,0.06)] hover:border-[#0066FF]/40 hover:shadow-[0_12px_35px_rgba(0,102,255,0.12)] transition-all group">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-display mb-1 group-hover:text-[#0052CC] transition-colors">
                200%
              </div>
              <div className="text-xs font-bold text-slate-600 mb-4 font-mono">
                Growth in Conversions
              </div>
              {/* Vertical Bars */}
              <div className="h-16 flex items-end justify-between gap-1.5 px-2">
                {[35, 48, 40, 65, 55, 80, 100].map((h, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${h}%` }}
                    className={`flex-1 rounded-t-md transition-all duration-300 ${
                      idx >= 5
                        ? "bg-gradient-to-t from-[#0066FF] to-[#00D2FF] shadow-xs"
                        : "bg-blue-100 group-hover:bg-blue-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* KPI 3: 150% ROAS */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-blue-100 shadow-[0_8px_30px_rgba(0,102,255,0.06)] hover:border-[#0066FF]/40 hover:shadow-[0_12px_35px_rgba(0,102,255,0.12)] transition-all group">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-display mb-1 group-hover:text-[#00D2FF] transition-colors">
                150%
              </div>
              <div className="text-xs font-bold text-slate-600 mb-4 font-mono">
                Increase in ROAS
              </div>
              {/* Radial Progress Ring */}
              <div className="h-16 flex items-center justify-center">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      className="text-blue-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      className="text-[#0066FF]"
                      strokeDasharray="75, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                  <span className="absolute text-[11px] font-black text-[#0066FF]">1.5x</span>
                </div>
              </div>
            </div>

            {/* KPI 4: 99.98% Retention & Uptime */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-blue-100 shadow-[0_8px_30px_rgba(0,102,255,0.06)] hover:border-[#0066FF]/40 hover:shadow-[0_12px_35px_rgba(0,102,255,0.12)] transition-all group">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-display mb-1 group-hover:text-emerald-600 transition-colors">
                99.98%
              </div>
              <div className="text-xs font-bold text-slate-600 mb-4 font-mono">
                Enterprise SLA Uptime
              </div>
              {/* Dual-orbit Radar Pulse */}
              <div className="h-16 flex items-center justify-center">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-emerald-400/40 animate-ping" />
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <Card3D
                key={item.title}
                intensity={12}
                glowColor="rgba(0, 102, 255, 0.1)"
                className="cloud-card p-8 group border border-blue-100/90 hover:border-blue-300 rounded-3xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-inner group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5 font-display group-hover:text-[#0066FF] transition flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProvenTrackRecord;
