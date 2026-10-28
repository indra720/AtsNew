import React, { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Target, Eye, Heart, ArrowRight } from "lucide-react";
import Card3D from "./ui/Card3D";

export const About: FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#E8F4FD] text-slate-900 min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1600px] mx-auto px-[3px] sm:px-4 lg:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHO WE ARE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight font-display mb-6 max-w-4xl mx-auto"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              ATS GLOBAL TECH
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-medium"
          >
            ATS Global Tech empowers businesses through innovation, digital
            transformation, and future-ready software engineering.
          </motion.p>

          {/* Mission, Vision, Values Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "Deliver scalable, secure & innovative tech solutions that accelerate global business growth.",
                badge: "MISSION",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To lead the future of digital transformation with intelligence, engineering precision, and innovation.",
                badge: "VISION",
              },
              {
                icon: Heart,
                title: "Core Values",
                text: "Integrity, Excellence, Relentless Innovation, Customer First & Collaborative Transparency.",
                badge: "VALUES",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <Card3D
                  key={card.title}
                  intensity={10}
                  glowColor="rgba(0, 102, 255, 0.1)"
                  className="cloud-card p-8 border border-blue-100/90 rounded-3xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-inner">
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#0066FF] px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200">
                        {card.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {card.text}
                    </p>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEO & Leadership Spotlight */}
      <section className="py-24 bg-[#F8FAFC]/90 border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1600px] mx-auto px-[3px] sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* CEO Photo Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <Card3D
                intensity={10}
                className="relative w-full max-w-sm rounded-3xl overflow-hidden cloud-card p-2 border border-blue-200/90 shadow-xl"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/ceo.png"
                    alt="Ajeet Singh - CEO & Founder"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/400x500/0066ff/ffffff?text=CEO+Ajeet+Singh";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest block mb-0.5 font-bold">
                      CEO & Founder
                    </span>
                    <h4 className="text-2xl font-black text-white font-display">
                      Ajeet Singh
                    </h4>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* CEO Bio & Achievements */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] sm:text-xs font-mono font-semibold text-[#0066FF] mb-6 shadow-xs">
                <span>LEADERSHIP • STRATEGY • INNOVATION</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-[#0066FF] pl-6 mb-6 italic font-display">
                “We don’t just create technology — we create growth,
                opportunity, and success.”
              </blockquote>

              <p className="text-base text-slate-600 leading-relaxed mb-4 font-medium">
                With 15+ years of global tech experience, he believes in
                building futuristic digital ecosystems.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 font-normal">
                He has worked with startups, mid-scale companies, and global
                enterprises, helping them adopt modern technologies such as
                Cloud, AI Automation, Full-Stack Engineering, Data-Driven
                Architecture, Cybersecurity, and Scalable Digital Platforms. His
                focus is on building systems that are fast, reliable,
                future-ready, and capable of supporting large-scale growth.
              </p>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 mb-8">
                {[
                  { value: "15+", label: "Years Leading" },
                  { value: "500+", label: "Projects Done" },
                  { value: "60+", label: "Enterprise Clients" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 sm:p-4 rounded-2xl bg-white border border-blue-100 text-center shadow-xs"
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#0066FF] font-display mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 font-mono font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-500 italic border-l-2 border-blue-200 pl-4">
                “Leadership is not a position — it's an influence that creates
                change.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Journey CTA */}
      <section className="py-6 bg-gradient-to-b from-[#F8FAFC] to-[#F0F7FF] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display mb-4">
            Join Our Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto font-medium">
            Whether you want to architect an enterprise platform or accelerate
            your engineering career — we’d love to connect.
          </p>
          <div className="flex flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_8px_25px_rgba(0,102,255,0.35)] transition w-full sm:w-auto"
            >
              <span className="hidden sm:flex"> Get In Touch</span>
              <span className="flex sm:hidden"> Get </span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/careers"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-slate-800 bg-white border border-blue-200 hover:bg-slate-50 transition w-full sm:w-auto shadow-sm"
            >
              <span className="hidden sm:flex">View Open Careers</span>
              <span className="flex sm:hidden gap-2">
                <Eye /> Careers
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
