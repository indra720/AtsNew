import React from "react";
import {
  ShieldCheck,
  CheckCircle,
  Cpu,
  Layers,
  Sparkles,
  Cloud,
  Database,
  Lock,
} from "lucide-react";

export const TechTrustMarquee: React.FC = () => {
  const items = [
    { label: "React 19 & Next.js 14", tag: "Frontend Framework", icon: Cpu },
    { label: "AWS Multi-Region", tag: "Cloud Scale", icon: Cloud },
    { label: "WebRTC Voice Telecom", tag: "Sub-50ms Latency", icon: Sparkles },
    { label: "PostgreSQL & ClickHouse", tag: "Database Architecture", icon: Database },
    { label: "ISO 27001 Aligned", tag: "Security Standard", icon: ShieldCheck },
    { label: "SOC-2 Type II Ready", tag: "Enterprise Compliance", icon: Lock },
    { label: "100% Indian GST & PAN", tag: "Direct Billing", icon: CheckCircle },
    { label: "Kubernetes & Docker", tag: "DevOps Orchestration", icon: Layers },
    { label: "Razorpay & Stripe", tag: "Secure Gateways", icon: Sparkles },
    { label: "Zero-Downtime CI/CD", tag: "Automated Deployments", icon: CheckCircle },
  ];

  // Duplicate items for infinite seamless scroll
  const marqueeItems = [...items, ...items];

  return (
    <div className="relative py-4 bg-white/80 border-y border-blue-100 overflow-hidden backdrop-blur-md">
      {/* Side Gradient Masks for Seamless Edge Fade */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee gap-4 items-center">
        {marqueeItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/70 border border-blue-100/90 shadow-2xs shrink-0"
            >
              <Icon className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
              <span className="text-xs font-bold text-slate-900 font-sans">
                {item.label}
              </span>
              <span className="text-[10px] font-mono font-medium text-slate-500 bg-white px-2 py-0.2 rounded-full border border-blue-100/80">
                {item.tag}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TechTrustMarquee;

