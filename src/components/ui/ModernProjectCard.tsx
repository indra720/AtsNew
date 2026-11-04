import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  Github,
  Star,
  ExternalLink,
} from "lucide-react";
import { RealProject } from "../../data/projectsData";

interface ModernProjectCardProps {
  project: RealProject;
  onInspect?: (project: RealProject) => void;
}

export const ModernProjectCard: React.FC<ModernProjectCardProps> = ({
  project,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project-details/${project.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,102,255,0.12)] hover:border-[#0066FF]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      <div className="p-3.5 sm:p-4 pb-0">
        {/* Top Badges Row */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-[10px] font-mono font-bold uppercase truncate max-w-[70%]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0" />
            <span className="truncate">{project.badge}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-mono font-bold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>LIVE IN PROD</span>
          </span>
        </div>

        {/* Sleek App Window Bezel & 100% Complete Uncropped Screenshot */}
        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100/90 border border-slate-200 shadow-xs group/img">
          {/* Minimalist Browser Bezel */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 border-b border-slate-200 text-[10px] font-mono text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>
            <div className="px-2 py-0.5 rounded bg-white text-[9px] text-slate-500 border border-slate-200 font-mono tracking-tight truncate max-w-[170px]">
              atsglobaltech.in/{project.id}
            </div>
            <span className="text-[9px] font-mono font-bold text-emerald-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE</span>
            </span>
          </div>

          {/* Screenshot Container - Full Natural Proportions, Zero Cropping of Top/Bottom/Sides */}
          <div className="relative w-full bg-slate-50 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto block object-contain transition-transform duration-500 ease-out group-hover/img:scale-[1.02]"
              loading="lazy"
            />

            {/* Hover Action Pill */}
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-lg scale-95 group-hover:scale-100 transition-transform">
                <Eye className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>View Full System</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body - Clean, Compact & Proportional */}
      <div className="p-4 sm:p-5 flex flex-col grow justify-between">
        <div>
          {/* Industry & Rating Header */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mb-1.5">
            <span className="text-slate-600 font-semibold truncate max-w-[70%]">
              {project.industry}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>{project.rating}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight font-display mb-1 group-hover:text-[#0066FF] transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* 1-Line Tagline */}
          <p className="text-xs font-semibold text-[#0066FF] mb-2 line-clamp-1">
            {project.tagline}
          </p>

          {/* Short 2-Line Description */}
          <p className="text-xs text-slate-600 leading-relaxed mb-3 font-sans line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Compact Primary Metric Badge */}
          {project.metrics[0] && (
            <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-50/90 to-indigo-50/70 border border-blue-100 text-xs mb-3">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">
                {project.metrics[0].label}
              </span>
              <span className="font-black text-[#0066FF] font-display text-xs sm:text-sm">
                {project.metrics[0].value}
              </span>
            </div>
          )}

          {/* Tech Stack Pills (Top 3) */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-mono font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-1.5 py-0.5 rounded-md bg-blue-50 text-[10px] font-mono font-bold text-[#0066FF]">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Clean Action Button */}
        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
          <Link
            to={`/project-details/${project.id}`}
            onClick={(e) => e.stopPropagation()}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-xs hover:shadow-sm transition cursor-pointer"
          >
            <span>Project Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              title="GitHub Repo"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernProjectCard;
