import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import Card3D from "./ui/Card3D";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered E-Commerce Platform",
    client: "RetailMax Inc.",
    category: "Web & AI Engineering",
    image: "https://plus.unsplash.com/premium_photo-1747949065888-5a57b2d506db?w=600&auto=format&fit=crop&q=60",
    description: "A scalable AI-driven e-commerce platform offering personalized shopping experiences, dynamic product sorting, and advanced analytics.",
    points: [
      "AI recommendation engine with sub-10ms response",
      "60% faster page load across all mobile devices",
      "Automated real-time inventory tracking & sync",
    ],
    tags: ["AI/ML", "React", "Node.js", "MongoDB"],
    link: "/ai-page",
    metricVal: "+300%",
    metricLabel: "Revenue Uplift",
    glow: "rgba(0, 242, 254, 0.2)",
  },
  {
    id: 2,
    title: "Secure Banking Mobile App",
    client: "Community Bank",
    category: "FinTech & Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    description: "A robust mobile banking solution with real-time transactions, multi-layer security, biometric login, and a seamless UI experience.",
    points: [
      "Biometric FaceID & fingerprint authentication",
      "256-bit military grade data encryption",
      "Real-time ML fraud detection & instant push alerts",
    ],
    tags: ["React Native", "PostgreSQL", "AWS", "Security"],
    link: "/secure-page",
    metricVal: "99.9%",
    metricLabel: "Fraud Prevented",
    glow: "rgba(99, 102, 241, 0.2)",
  },
  {
    id: 3,
    title: "Enterprise Cloud Migration",
    client: "GlobalTech Corp",
    category: "Cloud Architecture",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    description: "Migrated a complete enterprise infrastructure to cloud with zero downtime, high availability, and automated deployment pipelines.",
    points: [
      "Zero-downtime database and system cutover",
      "45% infrastructure operational cost reduction",
      "Multi-region high availability Kubernetes clusters",
    ],
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    link: "/cloud-page",
    metricVal: "99.99%",
    metricLabel: "System Uptime",
    glow: "rgba(168, 85, 247, 0.2)",
  },
  {
    id: 4,
    title: "Healthcare Data Analytics Platform",
    client: "MedCare Solutions",
    category: "Healthcare Technology",
    image: "https://images.unsplash.com/photo-1657727534685-36b09f84e193?q=80&w=600&auto=format&fit=crop",
    description: "Healthcare analytics system built to track patient health, predict clinical risks, and streamline medical diagnostics in real-time.",
    points: [
      "Full HIPAA-compliant medical data encryption",
      "Predictive machine learning diagnostics models",
      "Real-time physician monitoring dashboards",
    ],
    tags: ["Python", "React", "Docker", "Data Lake"],
    link: "/health-page",
    metricVal: "+40%",
    metricLabel: "Diagnosis Speed",
    glow: "rgba(16, 185, 129, 0.2)",
  },
];

export const FeaturedSuccessStories: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F0F7FF] via-[#E8F4FD] to-white text-slate-900 overflow-hidden border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROVEN TRANSFORMATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
              Featured Success Stories
            </h2>
          </div>
          <Link
            to="/work/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0066FF] hover:text-[#0052CC] transition group"
          >
            <span>View All Enterprise Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* 3D Success Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Card3D
              key={study.id}
              intensity={10}
              glowColor="rgba(0, 102, 255, 0.1)"
              className="cloud-card overflow-hidden border border-blue-100/90 hover:border-blue-300 rounded-3xl flex flex-col justify-between group"
            >
              {/* Media banner */}
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-bold text-[#0066FF] border border-blue-200 shadow-sm">
                    {study.category}
                  </span>
                </div>

                {/* Floating Metric Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xl border border-blue-100 rounded-2xl p-3 text-right shadow-xl">
                  <div className="text-2xl font-black text-[#0066FF] font-display">{study.metricVal}</div>
                  <div className="text-[10px] uppercase font-mono font-bold text-slate-600">{study.metricLabel}</div>
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 sm:p-8 flex flex-col grow">
                <div className="text-xs text-slate-500 font-medium mb-1">
                  Client: <span className="text-slate-900 font-bold">{study.client}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3 font-display group-hover:text-[#0066FF] transition">
                  {study.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {study.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {study.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-mono font-semibold text-[#0066FF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={study.link}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_8px_25px_rgba(0,102,255,0.35)] transition-all duration-300"
                >
                  <span>Read Full Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSuccessStories;
