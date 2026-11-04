import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Award,
  ExternalLink,
  CircleCheckBig,
  Sparkles,
  ArrowRight,
  Building,
  Eye,
  Github,
} from "lucide-react";
import { REAL_PROJECTS, RealProject } from "../data/projectsData";
import ProjectDetailModal from "./ui/ProjectDetailModal";

export const CaseStudies: FC = () => {
  const [selectedProject, setSelectedProject] = useState<RealProject | null>(
    null,
  );

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Header */}
      <section className="relative pt-8 sm:pt-12 pb-16 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-xs font-mono font-bold text-[#0066FF] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MEASURABLE BUSINESS OUTCOMES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A1629] tracking-tight font-display mb-6">
            Real Case{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              Transformations
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-sans">
            Explore deep architectural insights and proven business impact
            across our deployed real-world systems in AI telecom, civil
            construction, multi-vendor e-commerce, and campus ERP.
          </p>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              {
                val: "8+ Suites",
                label: "Enterprise Deployments",
                icon: Award,
                color: "text-[#0066FF]",
              },
              {
                val: "500K+",
                label: "End Users Empowered",
                icon: Users,
                color: "text-[#0052CC]",
              },
              {
                val: "99.98%",
                label: "High Availability SLA",
                icon: CircleCheckBig,
                color: "text-emerald-600",
              },
              {
                val: "100%",
                label: "Proprietary Architecture",
                icon: Target,
                color: "text-amber-500",
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl text-center bg-white border border-blue-100 shadow-xs"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 mx-auto flex items-center justify-center mb-3 shadow-inner ${stat.color}`}
                  >
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0A1629] font-display mb-1">
                    {stat.val}
                  </div>
                  <div className="text-xs text-slate-500 font-mono font-bold">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Case Studies Cards List */}
          <div className="space-y-8 text-left">
            {REAL_PROJECTS.map((study) => (
              <div
                key={study.id}
                className="overflow-hidden rounded-3xl border border-slate-200/90 hover:border-[#0066FF]/40 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,102,255,0.1)] transition-all duration-500 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Column: Clean Floating Screenshot Showcase with Browser Bezel */}
                  <div className="lg:col-span-5 p-4 sm:p-6 lg:pr-0 flex items-center">
                    <Link
                      to={`/project-details/${study.id}`}
                      className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs cursor-pointer group/img block"
                    >
                      {/* Browser Bezel */}
                      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 border-b border-slate-200 text-[10px] font-mono text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                          <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="px-2 py-0.5 rounded bg-white text-[9px] text-slate-500 border border-slate-200 font-mono tracking-tight truncate max-w-[160px]">
                          atsglobaltech.in/{study.id}
                        </div>
                        <span className="text-[9px] font-mono font-bold text-emerald-600 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>LIVE</span>
                        </span>
                      </div>

                      {/* Full Natural Screenshot - 100% Zero Crop */}
                      <div className="relative w-full bg-slate-50 overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-auto block object-contain group-hover/img:scale-[1.02] transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-bold text-xs shadow-xl">
                            <Eye className="w-4 h-4 text-[#0066FF]" />
                            <span>Inspect Full Architecture</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Right Column: Case Story, Metrics & Solution */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono mb-2">
                        <span className="flex items-center gap-1 text-slate-700 font-semibold">
                          <Building className="w-3.5 h-3.5 text-[#0066FF]" />
                          {study.client}
                        </span>
                        <span>•</span>
                        <span>
                          Timeline:{" "}
                          <strong className="text-slate-900">
                            {study.timeline}
                          </strong>
                        </span>
                        <span>•</span>
                        <span className="text-indigo-600 font-semibold">
                          {study.industry}
                        </span>
                      </div>

                      <h3
                        onClick={() => setSelectedProject(study)}
                        className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-1.5 font-display hover:text-[#0066FF] transition cursor-pointer"
                      >
                        {study.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-[#0066FF] mb-3">
                        {study.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                        {study.shortDescription}
                      </p>

                      {/* Metrics 3-grid */}
                      <div className="grid grid-cols-3 gap-2.5 mb-6 p-3 rounded-2xl bg-blue-50/70 border border-blue-100">
                        {study.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="text-center sm:text-left">
                            <div className="text-[10px] uppercase font-mono font-bold text-slate-500 truncate">
                              {m.label}
                            </div>
                            <div className="text-base sm:text-xl font-black text-slate-900 font-display mt-0.5">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {study.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-mono font-semibold text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
                      <Link
                        to={`/project-details/${study.id}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_4px_16px_rgba(0,102,255,0.25)] transition cursor-pointer"
                      >
                        <span>Inspect Architecture & Screenshots</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>

                      {study.githubUrl && (
                        <a
                          href={study.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}

                      <Link
                        to="/lets-create"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0066FF] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition"
                      >
                        <span>Build Similar Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-[#EBF5FF] to-white text-center border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1629] font-display mb-4">
            Ready to Build Your Scalable Platform?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto font-sans">
            Join hundreds of forward-thinking enterprises that trust ATS Global
            Tech for full-stack engineering and mission-critical systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/lets-create"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition w-full sm:w-auto"
            >
              <span>Schedule Free Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/work/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold text-slate-800 bg-white border border-blue-200 hover:border-[#0066FF]/40 shadow-sm transition w-full sm:w-auto"
            >
              View All Projects Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
