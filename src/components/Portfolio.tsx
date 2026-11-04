import React, { FC, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Search,
  ArrowRight,
} from "lucide-react";
import { REAL_PROJECTS, RealProject } from "../data/projectsData";
import ModernProjectCard from "./ui/ModernProjectCard";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "telecom", label: "AI Contact Center" },
  { id: "construction", label: "Construction ERP" },
  { id: "ecommerce", label: "E-Commerce Hub" },
  { id: "edtech", label: "EdTech & LMS" },
  { id: "hospitality", label: "Resort & Hospitality" },
  { id: "realestate", label: "Real Estate & PropTech" },
  { id: "crm", label: "Enterprise CRM & PMS" },
];

export const Portfolio: FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return REAL_PROJECTS.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.filterCat === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.industry.toLowerCase().includes(query) ||
        p.techStack.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      <section className="relative pt-6 sm:pt-10 pb-12 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-xs font-mono font-bold text-[#0066FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO MATRIX & LIVE CASE ARCHIVES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A1629] tracking-tight font-display mb-4">
            Enterprise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              Portfolio Matrix
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
            A comprehensive matrix of bespoke software platforms, industry ERPs,
            telecom networks, and e-commerce ecosystems deployed by ATS Global Tech.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-6">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword, tech or client..."
              className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-2xl bg-white border border-blue-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0066FF] shadow-xs"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white shadow-xs scale-[1.02]"
                    : "bg-white/80 border border-blue-200 text-slate-700 hover:text-[#0066FF] hover:border-blue-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 3-Column Compact Modern Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filtered.map((item) => (
              <ModernProjectCard
                key={item.id}
                project={item}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="p-10 text-center bg-white rounded-3xl border border-blue-100">
              <p className="text-slate-600 mb-3 text-sm">
                No projects found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0066FF]"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-b from-[#EBF5FF] to-white text-center border-t border-blue-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A1629] font-display mb-2">
            Want to Discuss Your Next Software Platform?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-5 font-sans">
            Connect directly with our solutions architects to evaluate timelines, tech stacks, and delivery roadmaps.
          </p>
          <Link
            to="/lets-create"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-sm transition"
          >
            <span>Initiate Project Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
