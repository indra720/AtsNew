import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Calendar, Target, Sparkles } from "lucide-react";
import Card3D from "./ui/Card3D";

export const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#F0F7FF] to-[#E0F2FE] text-slate-900 overflow-hidden border-t border-blue-100">
      {/* Dynamic Ambient Sky-Blue Glow Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ACCELERATE YOUR FUTURE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-display max-w-4xl mx-auto mb-6 leading-tight">
          Ready to Architect Your Next Breakthrough?
        </h2>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
          Partner with ATS GLOBAL TECH to modernize legacy systems, automate complex workflows, and deploy resilient 
          enterprise solutions that create measurable enterprise value.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition transform hover:scale-[1.02] w-full sm:w-auto"
          >
            <span>Start Your Project Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-slate-800 bg-white border border-blue-200 hover:border-[#0066FF]/40 shadow-sm transition w-full sm:w-auto hover:bg-slate-50"
          >
            Explore Services Catalog
          </Link>
        </div>

        {/* 3 Guarantees Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
          {[
            {
              icon: MessageSquare,
              title: "Free Architecture Consultation",
              desc: "Collaborate directly with senior solution architects tailored to your specific system requirements.",
            },
            {
              icon: Calendar,
              title: "Rapid 24-Hour Response",
              desc: "Dedicated project onboarding team ensures quick turnarounds and zero communication lag.",
            },
            {
              icon: Target,
              title: "Bespoke Enterprise Fit",
              desc: "Every system is custom-engineered to align seamlessly with your enterprise scale and security standards.",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card3D key={idx} intensity={10} glowColor="rgba(0, 102, 255, 0.1)" className="cloud-card p-6 border border-blue-100/90 rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] mb-4 shadow-inner">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 font-display">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
