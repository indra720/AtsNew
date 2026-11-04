import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Star,
  Building2,
  Calendar,
  Users,
  CheckCircle2,
  Cpu,
  Sparkles,
  Layers,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { REAL_PROJECTS, RealProject } from "../data/projectsData";

export const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find project by id or fallback to first project
  const projectIndex = REAL_PROJECTS.findIndex((p) => p.id === id);
  const project: RealProject =
    projectIndex !== -1 ? REAL_PROJECTS[projectIndex] : REAL_PROJECTS[0];

  const prevProject =
    projectIndex > 0 ? REAL_PROJECTS[projectIndex - 1] : REAL_PROJECTS[REAL_PROJECTS.length - 1];
  const nextProject =
    projectIndex < REAL_PROJECTS.length - 1 ? REAL_PROJECTS[projectIndex + 1] : REAL_PROJECTS[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      {/* Top Breadcrumb Header */}
      <section className="pt-6 pb-6 bg-white border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Link
              to="/work/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0066FF] hover:text-[#0052CC] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects Gallery</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-xs font-mono font-bold uppercase">
                {project.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold hidden sm:inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live In Production
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Header */}
      <section className="relative py-10 sm:py-14 bg-gradient-to-b from-white via-[#F0F7FF] to-[#EBF5FF]/50 border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono mb-3">
              <span className="flex items-center gap-1.5 font-bold text-slate-800">
                <Building2 className="w-4 h-4 text-[#0066FF]" />
                {project.client}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold text-amber-500">
                <Star className="w-4 h-4 fill-amber-400" />
                {project.rating} Rating
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-600">
                <Calendar className="w-4 h-4 text-slate-400" />
                {project.timeline} Delivery
              </span>
              <span>•</span>
              <span className="font-semibold text-indigo-600">{project.industry}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight font-display mb-3">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl font-bold text-[#0066FF] mb-4">
              {project.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              {project.fullDescription}
            </p>

            {/* GitHub Link & CTA */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white border border-slate-300 hover:bg-slate-100 shadow-xs transition"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}
              <Link
                to="/lets-create"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-md transition"
              >
                <span>Request Similar Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12">
          {/* Crystal-Clear Fullscreen Screenshot Showcase with Browser Header */}
          <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.06)] bg-white p-3 sm:p-4">
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              {/* Browser Bezel */}
              <div className="flex items-center justify-between px-4 py-2 bg-slate-100 border-b border-slate-200 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="px-3 py-1 rounded-md bg-white text-slate-600 border border-slate-200 text-xs font-mono tracking-tight">
                  https://atsglobaltech.in/systems/{project.id}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                    PRODUCTION
                  </span>
                </div>
              </div>

              {/* 100% Unclipped Full High-Res Screenshot */}
              <div className="relative w-full bg-slate-50 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto block object-contain shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Key Performance ROI Impact Cards */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-[#0066FF]" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-display">
                Key Performance Impact & ROI
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-blue-100 shadow-xs hover:border-[#0066FF]/40 transition"
                >
                  <div className="text-3xl sm:text-4xl font-black text-[#0066FF] font-display">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 uppercase font-mono">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Modules & Capabilities */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-[#0066FF]" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-display">
                Core Modules & Functional Architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#F0F7FF]/70 border border-blue-100 text-xs sm:text-sm text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Supported Personas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Tech Stack */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-[#0066FF]" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-display">
                  Technologies & Architecture Stack
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-100 text-xs font-mono font-semibold text-[#0066FF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Roles / Scale */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#0066FF]" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-display">
                  Scale & User Personas Supported
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Built to support multi-tenant scale with granular Role-Based Access Control (RBAC).
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-800">
                {project.rolesSupported || `Scale: ${project.scale}`}
              </div>
            </div>
          </div>

          {/* Bottom Next / Previous Project Navigation */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => navigate(`/project-details/${prevProject.id}`)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#0066FF] hover:border-[#0066FF] transition cursor-pointer w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: {prevProject.title}</span>
            </button>

            <Link
              to="/work/projects"
              className="text-xs sm:text-sm font-bold text-[#0066FF] hover:underline"
            >
              View All 8+ Projects
            </Link>

            <button
              onClick={() => navigate(`/project-details/${nextProject.id}`)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#0066FF] hover:border-[#0066FF] transition cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsPage;

