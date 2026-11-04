import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Users,
  Star,
  Building2,
  Cpu,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Github,
  Layers,
} from "lucide-react";
import { RealProject } from "../../data/projectsData";
import { Link } from "react-router-dom";

interface ProjectDetailModalProps {
  project: RealProject | null;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-slate-200 z-10 flex flex-col my-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-blue-50 text-[#0066FF] border border-blue-200">
                {project.badge}
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline-block">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Tagline */}
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-2">
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <Building2 className="w-3.5 h-3.5 text-[#0066FF]" />
                  Client: {project.client}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-semibold text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {project.rating} Rating
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-semibold text-slate-600">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Timeline: {project.timeline}
                </span>
                {project.rolesSupported && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-semibold text-indigo-600">
                      <Users className="w-3.5 h-3.5" />
                      {project.rolesSupported}
                    </span>
                  </>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-display mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#0066FF] font-semibold">
                {project.tagline}
              </p>
            </div>

            {/* Pristine Full Screenshot View with Browser Bezel */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <div className="flex items-center justify-between px-3.5 py-2 bg-slate-100 border-b border-slate-200 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="px-2.5 py-0.5 rounded bg-white text-[10px] text-slate-600 border border-slate-200 font-mono tracking-tight">
                  atsglobaltech.in/systems/{project.id}
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-600">PRODUCTION</span>
              </div>
              <div className="relative w-full bg-slate-50 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto block object-contain"
                />
              </div>
            </div>

            {/* Metrics Grid */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Performance Impact & ROI
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 border border-blue-100 shadow-xs"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                      {metric.value}
                    </div>
                    <div className="text-xs font-medium text-slate-600 mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview / Description */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Project Architecture & Business Solution
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Features Checklist */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Modules & Functional Capabilities
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Technologies & Architecture Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700 shadow-xs flex items-center gap-1.5"
                  >
                    <Cpu className="w-3.5 h-3.5 text-[#0066FF]" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-slate-50/95 backdrop-blur-md border-t border-slate-200">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Need an enterprise-grade solution built for your business?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                to="/lets-create"
                onClick={onClose}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#003EA3] shadow-md transition"
              >
                <span>Consult Our Architecture Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
