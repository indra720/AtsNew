import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Users,
  Clock,
  Zap,
  Shield,
  Smartphone,
  Cloud,
  Heart,
  ExternalLink,
  Sparkles,
  Layers,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  filterCat: string;
  industry: string;
  rating: number;
  users: string;
  timeline: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform Modernization",
    description: "Transforming retail with a high-performance cloud commerce solution built on a microservices architecture with AI recommendation engines.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "/ai-page",
    category: "Web Application",
    filterCat: "web",
    industry: "Retail & E-Commerce",
    rating: 4.8,
    users: "20K+",
    timeline: "9 Months",
    icon: <Zap className="h-5 w-5 text-cyan-400" />,
  },
  {
    title: "Healthcare Management System",
    description: "Next-gen healthcare data analytics and patient care portal for seamless hospital operations, real-time diagnostic reporting, and HIPAA compliance.",
    image: "https://images.unsplash.com/photo-1657727534685-36b09f84e193?w=600&auto=format&fit=crop&q=80",
    link: "/health-page",
    category: "SaaS Platform",
    filterCat: "saas",
    industry: "Healthcare",
    rating: 4.9,
    users: "5K+",
    timeline: "12 Months",
    icon: <Heart className="h-5 w-5 text-rose-400" />,
  },
  {
    title: "FinTech Mobile Banking App",
    description: "Secure mobile-first banking app with fast transactions, biometric login, multi-layer encryption, and personalized financial insights.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    link: "/fintech-page",
    category: "Mobile Application",
    filterCat: "mobile",
    industry: "FinTech",
    rating: 4.9,
    users: "1M+",
    timeline: "6 Months",
    icon: <Smartphone className="h-5 w-5 text-indigo-400" />,
  },
  {
    title: "Enterprise Cloud Migration",
    description: "Multi-region cloud infrastructure transformation migrating legacy monoliths to automated Docker & Kubernetes clusters with zero downtime.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    link: "/cloud-page",
    category: "Cloud Solutions",
    filterCat: "cloud",
    industry: "Enterprise Infrastructure",
    rating: 4.9,
    users: "50K+",
    timeline: "8 Months",
    icon: <Cloud className="h-5 w-5 text-blue-400" />,
  },
  {
    title: "AI-Powered Customer Support Assistant",
    description: "Multilingual AI support automation assistant resolving high-volume tickets with natural language processing and proactive sentiment analysis.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    link: "/aichat-page",
    category: "AI & Automation",
    filterCat: "ai",
    industry: "Support Automation",
    rating: 4.7,
    users: "89+ Langs",
    timeline: "4 Months",
    icon: <Sparkles className="h-5 w-5 text-purple-400" />,
  },
  {
    title: "SaaS Analytics Dashboard Platform",
    description: "High-throughput business intelligence engine delivering real-time streaming analytics, sub-second queries, and customizable drag-and-drop metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "/saas-page",
    category: "SaaS Platform",
    filterCat: "saas",
    industry: "Business Intelligence",
    rating: 4.8,
    users: "15K+",
    timeline: "7 Months",
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
  },
];

export const Projects: FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? projects : projects.filter((p) => p.filterCat === activeTab);

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      {/* Header */}
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-xs font-mono font-bold text-[#0066FF] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VERIFIED PORTFOLIO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A1629] tracking-tight font-display mb-6">
            Our Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">Projects</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            Explore our proven track record of architecting, scaling, and securing enterprise software systems across global markets.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {[
              { id: "all", label: "All Projects" },
              { id: "web", label: "Web Applications" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "cloud", label: "Cloud & DevOps" },
              { id: "saas", label: "SaaS Platforms" },
              { id: "ai", label: "AI & Automation" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white shadow-[0_4px_16px_rgba(0,102,255,0.3)]"
                    : "bg-white/80 border border-blue-200 text-slate-700 hover:text-[#0066FF] hover:border-blue-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 3D Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filtered.map((project, idx) => (
              <Card3D
                key={idx}
                intensity={10}
                className="cloud-card overflow-hidden rounded-3xl flex flex-col justify-between group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-mono font-bold text-[#0066FF] border border-blue-200 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-mono font-bold text-[#0066FF]">{project.industry}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{project.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#0A1629] mb-2 font-display group-hover:text-[#0066FF] transition">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-[#F0F7FF] border border-blue-200 text-xs mb-6">
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Scale</div>
                      <div className="font-black text-[#0A1629] font-display">{project.users} Users</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Timeline</div>
                      <div className="font-black text-[#0A1629] font-display">{project.timeline}</div>
                    </div>
                  </div>

                  <Link
                    to={project.link}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_4px_16px_rgba(0,102,255,0.25)] transition duration-300 mt-auto cursor-pointer"
                  >
                    <span>View Case Study Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#EBF5FF] to-white text-center border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1629] font-display mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto font-sans">
            Our engineering team will assess your scope and architect a scalable delivery roadmap.
          </p>
          <Link
            to="/lets-create"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
