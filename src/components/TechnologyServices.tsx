import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Smartphone,
  Shield,
  Bot,
  Database,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Palette,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const services = [
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    desc: "Human-centered design systems, clickable wireframes, interactive 3D prototypes, and ergonomic interfaces crafted for ultra-high conversion.",
    features: ["Figma Design Systems & Tokens", "Interactive 3D Motion Prototyping", "UX Usability Audits & User Research"],
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    borderGlow: "rgba(244, 63, 94, 0.3)",
    tag: "STUDIO GRADE",
    link: "/services",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    desc: "We build bespoke software architectures tailored to your business operations using React, Node.js, Python, and cloud-native frameworks.",
    features: ["Full-stack architecture", "Scalable REST & GraphQL APIs", "Microservices database design"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "rgba(0, 242, 254, 0.3)",
    tag: "CORE EXPERTISE",
    link: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    desc: "Seamless enterprise cloud migration, resilient multi-region infrastructure, and automated zero-downtime CI/CD deployment pipelines on AWS, Azure, & GCP.",
    features: ["Zero-downtime cloud migration", "Automated CI/CD workflows", "Kubernetes & Terraform IaC"],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderGlow: "rgba(59, 130, 246, 0.3)",
    tag: "CLOUD SCALE",
    link: "/cloud-page",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native iOS & Android apps plus high-performance cross-platform solutions using Flutter and React Native delivering fluid 120fps mobile experiences.",
    features: ["iOS & Android native apps", "Cross-platform mobile apps", "App Store optimization & push alerts"],
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    borderGlow: "rgba(99, 102, 241, 0.3)",
    tag: "CROSS-PLATFORM",
    link: "/services/mobile",
  },
  {
    icon: Bot,
    title: "AI & Machine Learning",
    desc: "Cutting-edge artificial intelligence, custom large language models, smart automation bots, computer vision, and predictive machine learning models.",
    features: ["Custom AI & ML algorithms", "Natural Language Processing (NLP)", "Predictive intelligence & analytics"],
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderGlow: "rgba(168, 85, 247, 0.3)",
    tag: "GEN-AI NATIVE",
    link: "/ai-page",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    desc: "Proactive enterprise security auditing, ethical penetration testing, automated threat detection, and stringent SOC2/HIPAA compliance management.",
    features: ["Vulnerability & penetration tests", "Zero-trust network architecture", "SOC2, HIPAA & PCI DSS compliance"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "rgba(168, 85, 247, 0.3)",
    tag: "ENTERPRISE SHIELD",
    link: "/secure-page",
  },
];

export const TechnologyServices: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F0F7FF] via-[#E8F4FD] to-white text-slate-900 overflow-hidden border-t border-blue-100">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMPREHENSIVE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
              Core Technology Services
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md font-medium">
            From visionary prototypes to global enterprise platforms, we engineer resilient software systems engineered for scale.
          </p>
        </div>

        {/* 3D Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <Card3D
                key={item.title}
                intensity={12}
                glowColor="rgba(0, 102, 255, 0.1)"
                className="cloud-card p-8 group border border-blue-100/90 hover:border-blue-300 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300 shadow-inner">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-[#0066FF] transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8 pt-4 border-t border-blue-100">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={item.link}
                  className="inline-flex items-center justify-between w-full py-3 px-5 rounded-2xl text-xs font-bold text-[#0066FF] bg-blue-50/80 hover:bg-[#0066FF] hover:text-white border border-blue-200 hover:border-[#0066FF] transition-all duration-300 mt-auto shadow-xs"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyServices;
