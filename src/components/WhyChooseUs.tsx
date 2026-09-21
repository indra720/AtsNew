import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  Users,
  Rocket,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const features = [
  "24/7 Technical Support & Proactive Maintenance",
  "Agile Sprint Methodology & Transparent Standups",
  "Rigorous Automated Testing & Quality Assurance",
  "Scalable, Resilient & Cloud-Native Architecture",
  "Cutting-Edge Modern Technology Stack",
  "Value-Driven, Cost-Effective Engineering",
  "Weekly Deliverables & Transparent Progress Reports",
  "Post-Launch Enterprise Hypercare & Staff Training",
];

const cards = [
  {
    title: "Innovation First",
    desc: "We pioneer modern, future-ready technologies keeping your enterprise ahead of evolving industry dynamics.",
    icon: Lightbulb,
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(0, 242, 254, 0.2)",
  },
  {
    title: "Expert Engineering",
    desc: "Certified solution architects and senior engineers bringing deep real-world domain mastery to every line of code.",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(59, 130, 246, 0.2)",
  },
  {
    title: "Rapid Agile Delivery",
    desc: "Disciplined sprints guarantee accelerated time-to-market with zero architectural debt or quality shortcuts.",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168, 85, 247, 0.2)",
  },
  {
    title: "Hyper-Scalable Systems",
    desc: "Every system is engineered to effortlessly scale from initial thousands to millions of concurrent active users.",
    icon: TrendingUp,
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.2)",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F0F7FF] via-[#E8F4FD] to-white text-slate-900 overflow-hidden border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-4 shadow-xs">
              <Award className="w-3.5 h-3.5" />
              <span>THE ATS ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-6">
              Why Global Leaders Choose ATS GLOBAL TECH
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-medium">
              We don’t just write software — we architect long-lasting, resilient systems backed by deep engineering 
              excellence, transparent communication, and an unwavering commitment to your business supremacy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_8px_25px_rgba(0,102,255,0.35)] transition transform hover:scale-[1.02]"
            >
              <span>Discover Our Company Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: 3D Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <Card3D
                  key={c.title}
                  intensity={14}
                  glowColor="rgba(0, 102, 255, 0.1)"
                  className="cloud-card p-6 border border-blue-100/90 hover:border-blue-300 rounded-3xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] mb-5 shadow-inner group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-display group-hover:text-[#0066FF] transition">
                      {c.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {c.desc}
                    </p>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
