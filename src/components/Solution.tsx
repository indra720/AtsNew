import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cpu,
  Cloud,
  BarChart3,
  Shield,
  Smartphone,
  Code,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const solutions = [
  {
    title: "AI & Machine Learning Solutions",
    description: "Leverage Artificial Intelligence, custom LLMs, and predictive machine learning models to automate workflows, optimize operational decisions, and scale your business.",
    icon: Cpu,
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(0, 242, 254, 0.25)",
    items: ["Custom Predictive Analytics", "Chatbots & Conversational NLP", "End-to-End AI Automation"],
    link: "/ai-page",
  },
  {
    title: "Cloud Computing & Modernization",
    description: "High-resilience cloud infrastructure for seamless global deployment, automated DevOps CI/CD pipelines, and zero-downtime scaling across AWS, Azure, & GCP.",
    icon: Cloud,
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(59, 130, 246, 0.25)",
    items: ["Zero-Downtime Cloud Migration", "Automated DevOps & CI/CD", "Multi-Cloud Kubernetes Solutions"],
    link: "/cloud-page",
  },
  {
    title: "Advanced Data Analytics & BI",
    description: "Transform raw enterprise data into actionable executive insights with modern data lakehouses, streaming pipelines, and real-time business intelligence dashboards.",
    icon: BarChart3,
    color: "from-indigo-500 to-purple-600",
    glow: "rgba(99, 102, 241, 0.25)",
    items: ["Executive BI Dashboards", "Predictive Machine Modeling", "Big Data Lakehouse Warehousing"],
    link: "/saas-page",
  },
  {
    title: "Enterprise Cybersecurity & Zero-Trust",
    description: "Protect critical enterprise digital assets with zero-trust security frameworks, vulnerability assessments, real-time intrusion detection, and regulatory compliance.",
    icon: Shield,
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.25)",
    items: ["Zero-Trust Network Security", "End-to-End 256-bit Encryption", "Continuous Risk & Vulnerability Auditing"],
    link: "/secure-page",
  },
  {
    title: "High-Performance Mobile Development",
    description: "Build ultra-responsive, cross-platform mobile apps for iOS and Android using React Native and Flutter delivering fluid 120fps animations and high conversion.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168, 85, 247, 0.25)",
    items: ["Native iOS & Android Applications", "High-Speed Flutter & React Native", "App Store Optimization & Security"],
    link: "/fintech-page",
  },
  {
    title: "Web Platform Engineering",
    description: "Develop modern, scalable, and SEO-optimized web applications with sub-second page loads, microservices architectures, and exceptional user experiences.",
    icon: Code,
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245, 158, 11, 0.25)",
    items: ["Ultra-Responsive 120fps Web Apps", "High-Conversion E-Commerce Stores", "Custom Enterprise Web Platforms"],
    link: "/ai-page",
  },
];

export const Solution: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F7FF] text-[#0A1629]">
      {/* Header */}
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-xs font-mono font-bold text-[#0066FF] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL DOMAINS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A1629] tracking-tight font-display mb-6">
            Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">Solutions</span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl mt-2 font-bold text-slate-700">
              for Modern Challenges
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-sans">
            Discover our comprehensive suite of technology solutions designed to accelerate your digital transformation, 
            enhance operational efficiency, and drive sustainable growth.
          </p>

          {/* Solutions 3D Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <Card3D
                  key={index}
                  intensity={12}
                  glowColor={sol.glow}
                  className="cloud-card p-8 rounded-3xl flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.color} p-0.5 mb-6 flex items-center justify-center shadow-md`}
                    >
                      <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center group-hover:bg-transparent transition-colors">
                        <Icon className="w-7 h-7 text-[#0066FF] group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-[#0A1629] mb-3 font-display group-hover:text-[#0066FF] transition">
                      {sol.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                      {sol.description}
                    </p>

                    <ul className="space-y-2.5 mb-8 pt-4 border-t border-blue-100">
                      {sol.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle className="w-4 h-4 text-[#0066FF] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={sol.link}
                    className="inline-flex items-center justify-between w-full py-3 px-5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_4px_16px_rgba(0,102,255,0.25)] transition duration-300 mt-auto cursor-pointer"
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#EBF5FF] to-white text-center border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1629] font-display mb-4">
            Transform Your Engineering Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto font-sans">
            Discuss your system constraints with senior architects and discover how ATS Global Tech accelerates time-to-market.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition"
          >
            <span>Consult Our Solution Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solution;
