import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Phone,
  Building2,
  ShoppingCart,
  Hotel,
  GraduationCap,
} from "lucide-react";
import { REAL_PROJECTS } from "../data/projectsData";

export const FeaturedSuccessStories: React.FC = () => {
  const callCenter = REAL_PROJECTS[0]; // ATS Call Center
  const buildPro = REAL_PROJECTS[1];   // BuildPro Construction
  const oranza = REAL_PROJECTS[2];     // ORANZA Multi-Vendor
  const eduflow = REAL_PROJECTS[3];    // EduFlow AI
  const auraPalms = REAL_PROJECTS[4];  // Aura Palms Resort

  return (
    <section className="relative py-14 sm:py-18 lg:py-20 bg-gradient-to-b from-[#F0F7FF] via-[#E8F4FD] to-white text-slate-900 overflow-hidden border-t border-blue-100">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#38BDF8]/15 via-[#0066FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-2.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRODUCTION-GRADE SYSTEMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
              Enterprise Ecosystem{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
                Bento Grid
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-xl font-sans">
              Discover real-world systems engineered, scaled, and secured by ATS Global Tech for market-leading enterprises.
            </p>
          </div>
          <Link
            to="/work/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-blue-200 text-xs sm:text-sm font-bold text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition group shrink-0 shadow-xs"
          >
            <span>Explore All 8+ Real Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ============================================================ */}
        {/* BALANCED BENTO GRID: 2 Flagship (6+6) + 3 Specialized (4+4+4) */}
        {/* Responsive on MD: Cards have full-width metric rows           */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          {/* -------------------------------------------------- */}
          {/* ROW 1 - FLAGSHIP 1: ATS Call Center (6 Cols)      */}
          {/* -------------------------------------------------- */}
          <Link
            to={`/project-details/${callCenter.id}`}
            className="lg:col-span-6 group relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,102,255,0.12)] hover:border-[#0066FF]/40 transition-all duration-300 p-5 sm:p-6 lg:p-7 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div>
              {/* Badges */}
              <div className="flex items-center justify-between mb-3 gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200 text-[11px] sm:text-xs font-mono font-bold uppercase truncate">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>FLAGSHIP TELEPHONY CRM</span>
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>87+ Screens</span>
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-display mb-1 group-hover:text-[#0066FF] transition-colors leading-tight">
                {callCenter.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#0066FF] mb-2 leading-snug line-clamp-1">
                {callCenter.tagline}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-2">
                {callCenter.shortDescription}
              </p>

              {/* App Window Frame - 100% Unclipped Natural Screenshot */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs group/img mb-4">
                {/* Browser Bezel */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 border-b border-slate-200 text-[10px] font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="px-2.5 py-0.5 rounded bg-white text-[9px] text-slate-500 border border-slate-200 font-mono tracking-tight truncate max-w-[180px]">
                    atsglobaltech.in/call-center
                  </div>
                  <span className="text-[9px] font-mono font-bold text-emerald-600 flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>LIVE</span>
                  </span>
                </div>

                {/* Screenshot */}
                <div className="relative w-full bg-slate-50 overflow-hidden">
                  <img
                    src={callCenter.image}
                    alt={callCenter.title}
                    className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-lg">
                      View Full Architecture →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics & Action Footer (Full-Width Responsive on MD) */}
            <div className="pt-3.5 border-t border-slate-100 flex flex-col gap-3">
              <div className="grid grid-cols-3 gap-2 w-full">
                {callCenter.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="px-2 py-1.5 sm:py-2 rounded-xl bg-blue-50/80 border border-blue-100/90 text-center flex flex-col justify-center min-w-0"
                  >
                    <div className="text-xs sm:text-sm font-black text-[#0066FF] font-display whitespace-nowrap">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-mono text-slate-600 font-semibold leading-tight mt-0.5 truncate">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#0066FF] group-hover:text-[#0052CC] pt-0.5">
                <span className="group-hover:translate-x-0.5 transition-transform">
                  View Full Case Study
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </div>
          </Link>

          {/* -------------------------------------------------- */}
          {/* ROW 1 - FLAGSHIP 2: ORANZA E-Commerce (6 Cols)    */}
          {/* -------------------------------------------------- */}
          <Link
            to={`/project-details/${oranza.id}`}
            className="lg:col-span-6 group relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,102,255,0.12)] hover:border-[#0066FF]/40 transition-all duration-300 p-5 sm:p-6 lg:p-7 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div>
              {/* Badges */}
              <div className="flex items-center justify-between mb-3 gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-200 text-[11px] sm:text-xs font-mono font-bold uppercase truncate">
                  <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
                  <span>COMMERCE MARKETPLACE</span>
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200 flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  <span>57+ Routes</span>
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-display mb-1 group-hover:text-[#0066FF] transition-colors leading-tight">
                {oranza.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-orange-600 mb-2 leading-snug line-clamp-1">
                {oranza.tagline}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-2">
                {oranza.shortDescription}
              </p>

              {/* App Window Frame - 100% Unclipped Natural Screenshot */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs group/img mb-4">
                {/* Browser Bezel */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 border-b border-slate-200 text-[10px] font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="px-2.5 py-0.5 rounded bg-white text-[9px] text-slate-500 border border-slate-200 font-mono tracking-tight truncate max-w-[180px]">
                    atsglobaltech.in/oranza
                  </div>
                  <span className="text-[9px] font-mono font-bold text-emerald-600 flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>LIVE</span>
                  </span>
                </div>

                {/* Screenshot */}
                <div className="relative w-full bg-slate-50 overflow-hidden">
                  <img
                    src={oranza.image}
                    alt={oranza.title}
                    className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-lg">
                      Explore Marketplace Architecture →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics & Action Footer (Full-Width Responsive on MD) */}
            <div className="pt-3.5 border-t border-slate-100 flex flex-col gap-3">
              <div className="grid grid-cols-3 gap-2 w-full">
                {oranza.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="px-2 py-1.5 sm:py-2 rounded-xl bg-orange-50/80 border border-orange-100/90 text-center flex flex-col justify-center min-w-0"
                  >
                    <div className="text-xs sm:text-sm font-black text-orange-600 font-display whitespace-nowrap">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-mono text-slate-600 font-semibold leading-tight mt-0.5 truncate">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-orange-600 group-hover:text-orange-700 pt-0.5">
                <span className="group-hover:translate-x-0.5 transition-transform">
                  View Full Case Study
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </div>
          </Link>

          {/* -------------------------------------------------- */}
          {/* ROW 2 - CARD 3: BuildPro Construction ERP (4 Cols) */}
          {/* -------------------------------------------------- */}
          <Link
            to={`/project-details/${buildPro.id}`}
            className="md:col-span-1 lg:col-span-4 group relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,102,255,0.12)] hover:border-[#0066FF]/40 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-mono font-bold uppercase">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>CONSTRUCTION ERP</span>
                </span>
                <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                  85+ Sites
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-950 font-display mb-1 group-hover:text-[#0066FF] transition-colors line-clamp-1">
                {buildPro.title}
              </h3>
              <p className="text-xs font-semibold text-amber-600 mb-2 line-clamp-1">
                Site Operations & Materials Procurement
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-2">
                {buildPro.shortDescription}
              </p>

              {/* App Window Frame - 100% Complete Uncropped Screenshot */}
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs group/img mb-4">
                <div className="flex items-center justify-between px-2.5 py-1 bg-slate-100 border-b border-slate-200 text-[9px] font-mono text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="px-2 py-0.5 rounded bg-white text-[8px] text-slate-500 border border-slate-200 font-mono tracking-tight truncate max-w-[140px]">
                    atsglobaltech.in/buildpro
                  </div>
                  <span className="text-[8px] font-mono font-bold text-emerald-600">LIVE</span>
                </div>
                <div className="relative w-full bg-slate-50 overflow-hidden">
                  <img
                    src={buildPro.image}
                    alt={buildPro.title}
                    className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-amber-50/70 border border-amber-100 text-xs font-mono mb-2">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Waste Saved</span>
                <span className="font-black text-amber-700 font-display">22% Reduction</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0066FF]">
              <span>View Civil ERP Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* -------------------------------------------------- */}
          {/* ROW 2 - CARD 4: Aura Palms Resort RMS (4 Cols)     */}
          {/* -------------------------------------------------- */}
          <Link
            to={`/project-details/${auraPalms.id}`}
            className="md:col-span-1 lg:col-span-4 group relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,102,255,0.12)] hover:border-[#0066FF]/40 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-bold uppercase">
                  <Hotel className="w-3.5 h-3.5" />
                  <span>HOSPITALITY RMS</span>
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  9+ Roles
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-950 font-display mb-1 group-hover:text-[#0066FF] transition-colors line-clamp-1">
                {auraPalms.title}
              </h3>
              <p className="text-xs font-semibold text-emerald-600 mb-2 line-clamp-1">
                Direct Booking Engine & Multi-Tenant SaaS
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-2">
                {auraPalms.shortDescription}
              </p>

              {/* App Window Frame - 100% Complete Uncropped Screenshot */}
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs group/img mb-4">
                <div className="flex items-center justify-between px-2.5 py-1 bg-slate-100 border-b border-slate-200 text-[9px] font-mono text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="px-2 py-0.5 rounded bg-white text-[8px] text-slate-500 border border-slate-200 font-mono tracking-tight truncate max-w-[140px]">
                    atsglobaltech.in/aura-palms
                  </div>
                  <span className="text-[8px] font-mono font-bold text-emerald-600">LIVE</span>
                </div>
                <div className="relative w-full bg-slate-50 overflow-hidden">
                  <img
                    src={auraPalms.image}
                    alt={auraPalms.title}
                    className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs font-mono mb-2">
                <span className="text-[10px] text-slate-500 uppercase font-bold">OTA Dependency</span>
                <span className="font-black text-emerald-700 font-display">0% Commission</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0066FF]">
              <span>Explore Resort ERP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* -------------------------------------------------- */}
          {/* ROW 2 - CARD 5: EduFlow AI Campus ERP (4 Cols)     */}
          {/* Symmetrical on MD (col-span-2) & 4 Cols on LG     */}
          {/* -------------------------------------------------- */}
          <Link
            to={`/project-details/${eduflow.id}`}
            className="md:col-span-2 lg:col-span-4 group relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,102,255,0.12)] hover:border-[#0066FF]/40 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-mono font-bold uppercase">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>CAMPUS ERP / LMS</span>
                </span>
                <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                  184K+ Students
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-950 font-display mb-1 group-hover:text-[#0066FF] transition-colors line-clamp-1">
                {eduflow.title}
              </h3>
              <p className="text-xs font-semibold text-purple-600 mb-2 line-clamp-1">
                AI Lesson Planner & UPI QR Fee Collection
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-2">
                {eduflow.shortDescription}
              </p>

              {/* App Window Frame - 100% Complete Uncropped Screenshot */}
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs group/img mb-4">
                <div className="flex items-center justify-between px-2.5 py-1 bg-slate-100 border-b border-slate-200 text-[9px] font-mono text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="px-2 py-0.5 rounded bg-white text-[8px] text-slate-500 border border-slate-200 font-mono tracking-tight truncate max-w-[140px]">
                    atsglobaltech.in/eduflow
                  </div>
                  <span className="text-[8px] font-mono font-bold text-emerald-600">LIVE</span>
                </div>
                <div className="relative w-full bg-slate-50 overflow-hidden">
                  <img
                    src={eduflow.image}
                    alt={eduflow.title}
                    className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-purple-50/70 border border-purple-100 text-xs font-mono mb-2">
                <span className="text-[10px] text-slate-500 uppercase font-bold">AI Assistant</span>
                <span className="font-black text-purple-700 font-display">1.8M+ Requests</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0066FF]">
              <span>Explore EduFlow LMS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSuccessStories;
