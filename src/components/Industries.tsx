import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Banknote,
  ShoppingCart,
  GraduationCap,
  Building,
  Truck,
  House,
  Gamepad2,
  Users,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const stats = [
  { label: "Industries Served", value: "25+", icon: Users, color: "text-cyan-400" },
  { label: "Enterprise Clients", value: "200+", icon: Building, color: "text-indigo-400" },
  { label: "Global Reach", value: "5+ Countries", icon: Globe, color: "text-purple-400" },
  { label: "Industry Awards", value: "15+", icon: Award, color: "text-amber-400" },
];

const industryCards = [
  {
    title: "Healthcare & Life Sciences",
    icon: Heart,
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(0, 242, 254, 0.2)",
    image: "https://plus.unsplash.com/premium_photo-1698421947098-d68176a8f5b2?w=600",
    features: [
      "Secure Telemedicine & Virtual Care Platforms",
      "AI Diagnostics & Predictive Health Analytics",
      "HIPAA Compliant Cloud Data Management",
    ],
  },
  {
    title: "Financial Services & Banking",
    icon: Banknote,
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(59, 130, 246, 0.2)",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600",
    features: [
      "Ultra-Secure Mobile Banking Applications",
      "Real-Time AI/ML Fraud Detection Engines",
      "Strict Regulatory Compliance (PCI DSS, SOC2)",
    ],
  },
  {
    title: "Retail & E-commerce",
    icon: ShoppingCart,
    color: "from-indigo-500 to-purple-600",
    glow: "rgba(99, 102, 241, 0.2)",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
    features: [
      "Omni-Channel Multi-Store Integration",
      "AI-Driven Personalized Merchandising",
      "Automated Supply Chain & Inventory Sync",
    ],
  },
  {
    title: "Education & EdTech",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168, 85, 247, 0.2)",
    image: "https://plus.unsplash.com/premium_photo-1750859860252-6d23c5598f7c?w=600",
    features: [
      "Interactive Virtual Classroom Platforms",
      "AI-Adaptive Personalized Learning Systems",
      "Comprehensive Student Performance Analytics",
    ],
  },
  {
    title: "Manufacturing & Industrial",
    icon: Building,
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245, 158, 11, 0.2)",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600",
    features: [
      "Industrial IoT Monitoring & Telemetry",
      "Predictive Equipment Maintenance Systems",
      "Robotic Process Automation (RPA) Workflows",
    ],
  },
  {
    title: "Logistics & Supply Chain",
    icon: Truck,
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.2)",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600",
    features: [
      "Real-Time GPS Fleet Tracking & Dispatch",
      "AI Dynamic Route Optimization Algorithms",
      "Automated Warehouse Logistics Systems",
    ],
  },
  {
    title: "Real Estate & PropTech",
    icon: House,
    color: "from-cyan-500 to-teal-400",
    glow: "rgba(0, 242, 254, 0.2)",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
    features: [
      "Interactive 3D Virtual Property Tours",
      "Automated Tenant Billing & Lease Management",
      "Real Estate Multi-Listing Marketplaces",
    ],
  },
  {
    title: "Gaming & Entertainment",
    icon: Gamepad2,
    color: "from-pink-500 to-rose-500",
    glow: "rgba(244, 63, 94, 0.2)",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
    features: [
      "Multiplayer Low-Latency Game Backends",
      "High-Throughput Streaming & Global CDN",
      "Interactive Digital Media & Web3 Solutions",
    ],
  },
];

export const Industries: FC = () => {
  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      {/* Header */}
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-xs font-mono font-bold text-[#0066FF] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INDUSTRY DOMAIN EXPERTISE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A1629] tracking-tight font-display mb-6">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">Transform</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-sans">
            We deliver tailored, industry-specific digital solutions designed to navigate regulatory compliance, enhance operational velocity, and unlock competitive dominance.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="cloud-card p-6 rounded-3xl text-center">
                  <div className={`w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 mx-auto flex items-center justify-center mb-3 text-[#0066FF] shadow-inner`}>
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0A1629] font-display mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-mono font-bold">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* 8 Industry 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {industryCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Card3D
                  key={idx}
                  intensity={10}
                  glowColor={card.glow}
                  className="cloud-card overflow-hidden rounded-3xl flex flex-col justify-between group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black text-[#0A1629] font-display">{card.title}</span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col grow">
                    <ul className="space-y-2 mb-6 grow">
                      {card.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_4px_14px_rgba(0,102,255,0.25)] transition-all duration-300 mt-auto cursor-pointer"
                    >
                      <span>Inquire Industry Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
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
            Accelerate Your Industry Vertical
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto font-sans">
            Our domain architects are ready to design solutions that comply with your sector's strictest standards.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition"
          >
            <span>Schedule Industry Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;
