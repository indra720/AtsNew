import React, { FC, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Search,
} from "lucide-react";
import { REAL_PROJECTS, RealProject } from "../data/projectsData";
import ModernProjectCard from "./ui/ModernProjectCard";

const FILTER_TABS = [
  { id: "all", label: "All Projects" },
  { id: "telecom", label: "AI Contact Center" },
  { id: "construction", label: "Construction ERP" },
  { id: "ecommerce", label: "Multi-Vendor Marketplace" },
  { id: "edtech", label: "Campus ERP / LMS" },
  { id: "hospitality", label: "Resort & Hospitality" },
  { id: "realestate", label: "Real Estate & PropTech" },
  { id: "crm", label: "Enterprise CRM & PMS" },
];

export const Projects: FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return REAL_PROJECTS.filter((p) => {
      const matchesTab = activeTab === "all" || p.filterCat === activeTab;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesTab;
      const matchesQuery =
        p.title.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.industry.toLowerCase().includes(query) ||
        p.techStack.some((t) => t.toLowerCase().includes(query));
      return matchesTab && matchesQuery;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      {/* Header / Hero Section */}
      <section className="relative pt-6 sm:pt-10 pb-12 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/90 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-blue-200 shadow-xs text-xs font-mono font-bold text-[#0066FF] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            <span>REAL-WORLD ENTERPRISE ARCHITECTURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A1629] tracking-tight font-display mb-4">
            Our Production{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              Software Deployments
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
            Explore our real enterprise projects. Click on any project card to view complete architecture, screens, and functional modules.
          </p>

          {/* Search & Filter Controls */}
          <div className="max-w-3xl mx-auto space-y-3.5 mb-10">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search real projects by name, technology (e.g. React, Next.js, Zod) or industry..."
                className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-2xl bg-white/95 border border-blue-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] shadow-xs transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white shadow-xs scale-[1.02]"
                      : "bg-white/80 border border-blue-200 text-slate-700 hover:text-[#0066FF] hover:border-blue-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="text-[11px] text-slate-500 font-mono">
              Showing {filteredProjects.length} of {REAL_PROJECTS.length} verified real projects
            </div>
          </div>

          {/* Compact 3-Column Modern Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredProjects.map((project) => (
              <ModernProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="p-10 text-center bg-white rounded-3xl border border-blue-100">
              <p className="text-slate-600 mb-3 text-sm">
                No projects matched your search criteria "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveTab("all");
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0066FF]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Engineering Process */}
      <section className="py-14 bg-white border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0066FF] uppercase">
              How We Deliver
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display mt-2.5 mb-2">
              From Concept to Mission-Critical Production
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Every system we build follows an agile, security-first, and high-availability architecture tailored to enterprise scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Deep Architecture Discovery",
                desc: "We analyze your operational bottlenecks, business logic, user flows, and technical requirements.",
              },
              {
                step: "02",
                title: "UI/UX & System Blueprint",
                desc: "We engineer pixel-perfect wireframes, interactive prototypes, and scalable database schemas.",
              },
              {
                step: "03",
                title: "Agile Full-Stack Build",
                desc: "Clean, robust code engineered with React, Node, cloud services, and automated CI/CD pipelines.",
              },
              {
                step: "04",
                title: "Deploy, Scale & 24/7 SLA",
                desc: "Production deployment with automated monitoring, high availability clusters, and ongoing support.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#F0F7FF] to-white border border-blue-100 relative group hover:border-[#0066FF]/40 transition"
              >
                <div className="text-2xl font-black text-[#0066FF]/30 group-hover:text-[#0066FF] transition font-display mb-2">
                  {p.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-14 bg-gradient-to-b from-[#EBF5FF] to-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 text-xs font-mono font-bold text-[#0066FF] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S BUILD TOGETHER</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0A1629] font-display mb-3">
            Ready to Build Your Next Real-World System?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl mx-auto font-sans leading-relaxed">
            Our engineering team will assess your vision, provide a customized architectural blueprint, and deliver within predictable timelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/lets-create"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-md transition"
            >
              <span>Start Your Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0066FF] bg-white border border-blue-200 hover:border-blue-400 shadow-xs transition"
            >
              <span>Get in Touch Directly</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
