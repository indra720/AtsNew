import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  Plane,
  TrendingUp,
  Briefcase,
  ShoppingCart,
  Landmark,
  CreditCard,
  Sparkles,
  Zap,
  Cpu,
  ArrowRight,
  Phone,
  Globe,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Interactive3DShowcase: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const leftServices = [
    {
      id: 1,
      title: "School Websites",
      desc: "Student portals & LMS portals",
      icon: GraduationCap,
      color: "from-blue-600 to-cyan-500",
      link: "/services",
    },
    {
      id: 2,
      title: "Blog & Web App",
      desc: "Fast CMS & dynamic platforms",
      icon: Laptop,
      color: "from-cyan-500 to-teal-500",
      link: "/services",
    },
    {
      id: 3,
      title: "Travel Agency",
      desc: "Booking engines & itineraries",
      icon: Plane,
      color: "from-indigo-600 to-blue-500",
      link: "/services/industries",
    },
    {
      id: 4,
      title: "Investment Platform",
      desc: "Live analytics & trading dashboards",
      icon: TrendingUp,
      color: "from-blue-600 to-indigo-700",
      link: "/services",
    },
  ];

  const rightServices = [
    {
      id: 5,
      title: "Portfolio Website",
      desc: "Creative brand & design studios",
      icon: Briefcase,
      color: "from-blue-600 to-cyan-600",
      link: "/work/portfolio",
    },
    {
      id: 6,
      title: "E-Commerce Store",
      desc: "High-converting online shops",
      icon: ShoppingCart,
      color: "from-cyan-600 to-teal-500",
      link: "/services",
    },
    {
      id: 7,
      title: "Online Banking",
      desc: "Secure FinTech & loan portals",
      icon: Landmark,
      color: "from-indigo-500 to-blue-600",
      link: "/services",
    },
    {
      id: 8,
      title: "Payment Systems",
      desc: "Multi-currency gateway API sync",
      icon: CreditCard,
      color: "from-blue-500 to-cyan-400",
      link: "/services",
    },
  ];

  return (
    <section className="relative pt-6 sm:pt-8 pb-10 bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#EBF5FF] text-slate-900 overflow-hidden border-t border-b border-blue-100">
      {/* Subtle Tech Cyber Grid & Radiant Background Light */}
      <div className="absolute inset-0 bg-[radial-gradient(#0066FF_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-400/20 via-cyan-300/20 to-transparent rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact, Punchy Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0066FF] mb-2 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>FULL-STACK DIGITAL ECOSYSTEM</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-1.5"
          >
            Need a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              Modern Website
            </span>{" "}
            or Web App?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto mb-2"
          >
            We build modern, fast & high-converting websites that grow your business.
          </motion.p>

          {/* "Our Services" Orb Badge directly above the 3D showcase */}
          <div className="inline-block relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 blur-sm opacity-50 animate-pulse" />
            <span className="relative inline-flex items-center gap-1.5 px-5 py-1 rounded-full bg-[#000c3d] text-white text-xs font-mono font-bold tracking-wider uppercase border border-cyan-400/40 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-ping" />
              Our Services
            </span>
          </div>
        </div>

        {/* Cohesive 3D Showcase Arena (Zero Empty Gap) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-6 my-2">
          
          {/* Left Service Cards (4 items stacked tightly) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 z-20">
            {leftServices.map((srv) => {
              const Icon = srv.icon;
              const isHovered = activeNode === srv.id;
              return (
                <Link
                  to={srv.link}
                  key={srv.id}
                  onMouseEnter={() => setActiveNode(srv.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`group relative flex items-center justify-between p-3 rounded-2xl transition-all duration-300 ${
                    isHovered
                      ? "bg-white shadow-[0_12px_30px_rgba(0,102,255,0.2)] border-[#0066FF] scale-[1.03] translate-x-1"
                      : "bg-white/95 backdrop-blur-md shadow-[0_4px_16px_rgba(0,102,255,0.06)] border border-blue-100 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${srv.color} shadow-sm shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#0066FF] transition-colors truncate">
                        {srv.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                  {/* Visual Node Pin */}
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-300 group-hover:bg-[#0066FF] group-hover:scale-125 transition-all ml-2 shrink-0 shadow-xs" />
                </Link>
              );
            })}
          </div>

          {/* Central 3D Device & Neon Pedestal (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative py-4 lg:py-2">
            
            {/* Background Neon Orbital Rings & Floor Light */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[380px] sm:w-[480px] h-[160px] rounded-[100%] border-2 border-[#0066FF]/50 bg-gradient-to-t from-[#0066FF]/15 to-transparent shadow-[0_0_60px_rgba(0,102,255,0.3)] mt-24" />
              <div className="absolute w-[280px] sm:w-[360px] h-[110px] rounded-[100%] border border-[#00D2FF]/60 shadow-[0_0_35px_rgba(0,210,255,0.35)] mt-24" />
            </div>

            {/* Realistic 3D MacBook Laptop */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[420px] sm:max-w-[480px]"
            >
              {/* Laptop Screen Top Lid */}
              <div className="relative mx-auto w-[360px] sm:w-[430px] bg-[#0A1629] rounded-t-2xl p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(0,102,255,0.3)] border-2 border-slate-700">
                {/* Camera Notch */}
                <div className="flex justify-center mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-cyan-400" />
                  </div>
                </div>

                {/* High-Impact Screen Content */}
                <div className="bg-gradient-to-b from-[#0C1A30] to-[#0A1629] rounded-xl p-3 sm:p-4 text-white font-sans overflow-hidden border border-blue-900/60 shadow-inner">
                  {/* Top Screen App Bar */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-mono text-cyan-300 ml-2 font-bold tracking-wider">
                        ATS GLOBAL TECH
                      </span>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/20 text-[#00D2FF] font-mono border border-blue-400/30">
                      LIVE PLATFORM
                    </span>
                  </div>

                  {/* Hero Content inside Laptop Screen */}
                  <div className="my-1.5">
                    <p className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      Digital Solutions
                    </p>
                    <h3 className="text-sm sm:text-base font-black tracking-tight text-white leading-tight">
                      For Modern Business & Enterprise
                    </h3>
                    <p className="text-[10px] text-slate-300 mt-1 line-clamp-2">
                      We build stunning, responsive websites and AI platforms that drive traffic and increase sales.
                    </p>
                  </div>

                  {/* Metric Chips inside Laptop Screen */}
                  <div className="grid grid-cols-3 gap-1.5 my-2 pt-2 border-t border-white/10 text-center">
                    <div className="bg-white/5 rounded-lg p-1.5 border border-white/10">
                      <div className="text-xs sm:text-sm font-black text-[#00D2FF]">+250%</div>
                      <div className="text-[8px] text-slate-300 uppercase font-mono">Growth</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-1.5 border border-white/10">
                      <div className="text-xs sm:text-sm font-black text-emerald-400">98%</div>
                      <div className="text-[8px] text-slate-300 uppercase font-mono">Satisfaction</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-1.5 border border-white/10">
                      <div className="text-xs sm:text-sm font-black text-amber-300">24/7</div>
                      <div className="text-[8px] text-slate-300 uppercase font-mono">Support</div>
                    </div>
                  </div>

                  {/* CTA row inside Laptop */}
                  <div className="flex items-center justify-between mt-1 pt-1">
                    <span className="text-[9px] text-slate-400 font-mono">
                      Sub-second latency & 99.98% SLA
                    </span>
                    <span className="text-[9px] font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#00D2FF] px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                      Get Started <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard Base & Hinge */}
              <div className="relative mx-auto w-[390px] sm:w-[470px] h-[13px] bg-gradient-to-b from-slate-400 via-slate-300 to-slate-500 rounded-b-xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <div className="w-14 h-1.5 bg-slate-600 rounded-full" />
              </div>
            </motion.div>

            {/* Floating Glass Widget 1: Speed Gauge (Bottom-Left) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-2 sm:left-2 z-30 bg-white/95 backdrop-blur-xl border border-blue-200 rounded-2xl p-2.5 sm:p-3 shadow-[0_12px_30px_rgba(0,102,255,0.15)] flex items-center gap-2.5"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15" className="text-blue-100" strokeWidth="3.5" stroke="currentColor" fill="none" />
                  <circle cx="18" cy="18" r="15" className="text-[#0066FF]" strokeDasharray="98, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" />
                </svg>
                <span className="absolute text-[10px] font-black text-slate-900">98%</span>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase font-mono">Website Speed</div>
                <div className="text-xs font-black text-[#0066FF] flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-current text-[#0066FF]" /> Ultra Fast
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Widget 2: Live Analytics (Bottom-Right) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-2 sm:right-2 z-30 bg-white/95 backdrop-blur-xl border border-blue-200 rounded-2xl p-2.5 sm:p-3 shadow-[0_12px_30px_rgba(0,102,255,0.15)] min-w-[155px]"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">Analytics</span>
                <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">+36%</span>
              </div>
              <svg className="w-full h-5 mb-1" viewBox="0 0 100 24" fill="none">
                <path d="M 0 18 Q 20 6, 40 14 T 80 6 T 100 10" stroke="#0066FF" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <div className="flex justify-between text-[9px] font-black text-slate-800">
                <span>24.6K Visitors</span>
                <span className="text-[#0066FF]">83.2K Views</span>
              </div>
            </motion.div>

            {/* Floating Glass Widget 3: AI Neural Chip (Top-Right) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-0 -right-2 sm:right-4 z-30 bg-[#0A1629] text-white border border-cyan-400/40 rounded-xl p-2 shadow-lg flex items-center gap-2"
            >
              <div className="p-1 rounded-lg bg-blue-500/20 text-[#00D2FF]">
                <Cpu className="w-3.5 h-3.5 animate-pulse" />
              </div>
              <div>
                <div className="text-[9px] font-mono text-cyan-400 font-bold uppercase">AI POWERED</div>
                <div className="text-[10px] font-extrabold text-white">Next Gen-AI</div>
              </div>
            </motion.div>
          </div>

          {/* Right Service Cards (4 items stacked tightly) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 z-20">
            {rightServices.map((srv) => {
              const Icon = srv.icon;
              const isHovered = activeNode === srv.id;
              return (
                <Link
                  to={srv.link}
                  key={srv.id}
                  onMouseEnter={() => setActiveNode(srv.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`group relative flex items-center justify-between p-3 rounded-2xl transition-all duration-300 ${
                    isHovered
                      ? "bg-white shadow-[0_12px_30px_rgba(0,102,255,0.2)] border-[#0066FF] scale-[1.03] -translate-x-1"
                      : "bg-white/95 backdrop-blur-md shadow-[0_4px_16px_rgba(0,102,255,0.06)] border border-blue-100 hover:border-blue-300"
                  }`}
                >
                  {/* Visual Node Pin */}
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-300 group-hover:bg-[#0066FF] group-hover:scale-125 transition-all mr-2 shrink-0 shadow-xs" />
                  
                  <div className="flex items-center gap-3 min-w-0 flex-1 justify-between">
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#0066FF] transition-colors truncate">
                        {srv.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
                        {srv.desc}
                      </p>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${srv.color} shadow-sm shrink-0 group-hover:scale-105 transition-transform ml-2`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Contact / Brand Bar (Directly Inspired by Reference Template) */}
        <div className="mt-6 pt-4 border-t border-blue-100/90 flex flex-wrap items-center justify-between gap-4 bg-white/80 backdrop-blur-md rounded-2xl px-6 py-3 border border-blue-100 shadow-sm">
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="tel:+919929825003"
              className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0066FF] transition"
            >
              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>+91 9929825003</span>
            </a>

            <a
              href="https://www.atsglobaltech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0066FF] transition"
            >
              <div className="w-7 h-7 rounded-full bg-cyan-50 flex items-center justify-center text-[#00D2FF]">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <span>www.atsglobaltech.in</span>
            </a>

            <a
              href="mailto:info@atsglobaltech.in"
              className="hidden md:flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0066FF] transition"
            >
              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF]">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span>info@atsglobaltech.in</span>
            </a>
          </div>

          <Link
            to="/lets-create"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#86909e] shadow-[0_4px_15px_rgba(1,45,148,0.35)] hover:scale-105 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Interactive3DShowcase;
