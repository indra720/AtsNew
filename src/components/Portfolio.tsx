import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Zap,
  Smartphone,
  Cloud,
  Heart,
  Star,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface Project {
  category: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  rating: number;
  users: string;
  timeline: string;
  industry: string;
}

const projects: Project[] = [
  {
    category: "Web Development",
    title: "E-Commerce Enterprise Platform",
    description: "Full-stack e-commerce solution with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard for global scale.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=672&h=375&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "TensorFlow"],
    link: "/ai-page",
    rating: 4.8,
    users: "20K+",
    timeline: "9 Months",
    industry: "Retail & E-Commerce",
  },
  {
    category: "Mobile App",
    title: "FinTech Mobile Banking App",
    description: "Cross-platform mobile banking application with biometric authentication, real-time transactions, and advanced security features on Flutter & React Native.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=672&h=375&fit=crop",
    techStack: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    link: "/fintech-page",
    rating: 4.9,
    users: "1M+",
    timeline: "6 Months",
    industry: "FinTech",
  },
  {
    category: "Healthcare",
    title: "Healthcare Analytics Portal",
    description: "Next-gen healthcare data analytics and patient care portal for seamless hospital operations and real-time clinical diagnostic reporting.",
    image: "https://images.unsplash.com/photo-1657727534685-36b09f84e193?w=672&h=375&fit=crop",
    techStack: ["Python", "Django", "React", "Docker"],
    link: "/health-page",
    rating: 4.9,
    users: "5K+",
    timeline: "12 Months",
    industry: "Healthcare",
  },
  {
    category: "Cloud Solutions",
    title: "Enterprise Multi-Region Cloud Migration",
    description: "Migrated a complete enterprise infrastructure to cloud with zero downtime, high availability, and automated Kubernetes CI/CD deployment pipelines.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=672&h=375&fit=crop",
    techStack: ["AWS", "Kubernetes", "Terraform", "Docker"],
    link: "/cloud-page",
    rating: 4.9,
    users: "50K+",
    timeline: "8 Months",
    industry: "Cloud Solutions",
  },
  {
    category: "AI & Automation",
    title: "AI Conversational Support Assistant",
    description: "A multilingual AI assistant that automates customer support with smart routing, sentiment insights, and personalized responses in 89+ languages.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=672&h=375&fit=crop",
    techStack: ["Python", "Rasa", "FastAPI", "PostgreSQL"],
    link: "/aichat-page",
    rating: 4.7,
    users: "89+ Langs",
    timeline: "4 Months",
    industry: "Support Automation",
  },
  {
    category: "SaaS Platform",
    title: "Real-Time SaaS Analytics Dashboard",
    description: "High-throughput business intelligence engine delivering real-time streaming analytics, sub-second queries, and customizable drag-and-drop metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=672&h=375&fit=crop",
    techStack: ["Next.js", "ClickHouse", "Go", "Tailwind"],
    link: "/saas-page",
    rating: 4.8,
    users: "15K+",
    timeline: "7 Months",
    industry: "Business Intelligence",
  },
];

export const Portfolio: FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web Development", "Mobile App", "Healthcare", "Cloud Solutions", "AI & Automation", "SaaS Platform"];

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-xs font-mono font-bold text-[#0066FF] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO MATRIX</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A1629] tracking-tight font-display mb-6">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">Portfolio</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            A comprehensive matrix of bespoke software platforms, cloud modernizations, and mobile apps deployed for enterprise leaders.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white shadow-[0_4px_16px_rgba(0,102,255,0.3)]"
                    : "bg-white/80 border border-blue-200 text-slate-700 hover:text-[#0066FF] hover:border-blue-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 3D Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filtered.map((item, idx) => (
              <Card3D
                key={idx}
                intensity={10}
                className="cloud-card overflow-hidden rounded-3xl flex flex-col justify-between group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-mono font-bold text-[#0066FF] border border-blue-200 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-mono font-bold text-[#0066FF]">{item.industry}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#0A1629] mb-2 font-display group-hover:text-[#0066FF] transition">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full bg-[#EBF5FF] border border-blue-200 text-[10px] font-mono font-bold text-[#0066FF]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-[#F0F7FF] border border-blue-200 text-xs mb-6 mt-auto">
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Scale</div>
                      <div className="font-black text-[#0A1629] font-display">{item.users}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Timeline</div>
                      <div className="font-black text-[#0A1629] font-display">{item.timeline}</div>
                    </div>
                  </div>

                  <Link
                    to={item.link}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_4px_16px_rgba(0,102,255,0.25)] transition duration-300 cursor-pointer"
                  >
                    <span>View Architecture Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
