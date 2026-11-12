import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Target,
  Eye,
  Heart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Building2,
  Code2,
  Cpu,
  Globe,
  Terminal,
  Clock,
  Layers,
  Phone,
  Mail,
  MapPin,
  Bot,
  Zap,
} from "lucide-react";
import Card3D from "./ui/Card3D";
import ajitCeoImg from "../assets/videos/Ajit-ceo.jpeg";
import AiProjectEstimatorModal from "./ui/AiProjectEstimatorModal";

export const About: FC = () => {
  const [openEstimator, setOpenEstimator] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#E8F4FD] text-slate-900 min-h-screen">
      {/* ============================================================ */}
      {/* 1. HERO HEADER (EXPANSIVE FULL-WIDTH & BALANCED PROPORTIONS) */}
      {/* ============================================================ */}
      <section className="relative pt-8 sm:pt-12 pb-14 sm:pb-20 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/70 via-[#F0F7FF] to-white">
        {/* Symmetrical Cyber Aura & Bokeh Orbs (Prevents Empty Side Space) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] lg:w-[1200px] h-[450px] bg-gradient-to-tr from-blue-400/15 via-cyan-300/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-12 -left-20 w-[450px] h-[350px] bg-blue-200/25 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-12 -right-20 w-[450px] h-[350px] bg-cyan-200/25 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1550px] mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/90 text-[11px] sm:text-xs font-semibold tracking-wider text-[#0066FF] mb-5 shadow-xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF] animate-pulse" />
            <span>ABOUT ATS GLOBAL TECH &bull; JAIPUR INNOVATION HUB &amp; GLOBAL DELIVERY</span>
          </div>

          {/* Expansive Full-Width Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[4rem] 2xl:text-[4.3rem] font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-5 max-w-6xl xl:max-w-7xl 2xl:max-w-[1450px] mx-auto font-display">
            Engineering Scalable Systems &amp; High-Velocity AI Platforms for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              Ambitious Global Businesses
            </span>
          </h1>

          {/* Expansive Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-4xl lg:max-w-5xl 2xl:max-w-6xl mx-auto leading-relaxed mb-8 font-normal">
            ATS Global Tech is an elite full-service software engineering &amp; AI innovation company headquartered in Jaipur. We partner directly with ambitious founders, high-growth startups, and global enterprises to architect, scale, and secure mission-critical web platforms, mobile ecosystems, custom ERPs, and next-gen AI systems.
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition btn-pulse-glow"
            >
              <span>Schedule Tech Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={() => setOpenEstimator(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-blue-300 hover:border-[#0066FF] text-[#0066FF] text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition"
            >
              <Bot className="w-4 h-4" />
              <span>Instant AI Project Scope Estimator</span>
            </button>

            <Link
              to="/work/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/80 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold shadow-xs transition"
            >
              <span>Explore Production Case Studies</span>
            </Link>
          </div>

          {/* Core Trust Metric Pills - Spread Accross Canvas */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-6xl xl:max-w-7xl mx-auto mb-10">
            {[
              "150+ Enterprise Platforms Shipped",
              "100% In-House Jaipur Tech Squad",
              "Direct Senior Architect Collaboration",
              "Full Source Code & IP Ownership",
              "99.98% High Availability & SLA",
              "Jaipur HQ &bull; Serving India, USA & Global Leaders",
            ].map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/95 border border-blue-200/90 text-xs font-semibold text-slate-700 shadow-xs hover:border-[#0066FF] transition"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: badge }} />
              </span>
            ))}
          </div>

          {/* Expansive 4-Pillar Engineering Bento Grid (Fills Horizontal Screen Width) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-6xl xl:max-w-7xl 2xl:max-w-[1450px] mx-auto">
            {[
              {
                icon: Award,
                tag: "PROVEN TRACK RECORD",
                title: "15+ Years Industry Experience",
                desc: "Founded in Jaipur with over a decade and a half of engineering resilience, delivering mission-critical web, mobile, and enterprise architectures.",
              },
              {
                icon: Users,
                tag: "NO OUTSOURCING",
                title: "100% In-House Developers",
                desc: "Every line of code is crafted by full-time engineers in our Jaipur engineering lab. Direct sprint collaboration with zero middlemen.",
              },
              {
                icon: ShieldCheck,
                tag: "ZERO VENDOR LOCK-IN",
                title: "100% IP & Code Ownership",
                desc: "You own full production source code, Git repositories, cloud deployment credentials, and Figma assets from Day 1.",
              },
              {
                icon: Cpu,
                tag: "ENTERPRISE RELIABILITY",
                title: "24/7 Ongoing SLA & Hypercare",
                desc: "Continuous automated CI/CD pipelines, automated regression testing, sub-second latency tuning, and proactive zero-downtime upgrades.",
              },
            ].map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pIdx}
                  className="bg-white/95 rounded-2xl p-5 border border-blue-100 hover:border-blue-300 shadow-xs hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF] group-hover:scale-105 group-hover:bg-[#0066FF] group-hover:text-white transition mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#0066FF] tracking-wider block mb-1">
                    {pillar.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive AI Project Estimator Modal */}
      <AiProjectEstimatorModal
        isOpen={openEstimator}
        onClose={() => setOpenEstimator(false)}
      />

      {/* ============================================================ */}
      {/* 2. LEADERSHIP SPOTLIGHT: AJEET SINGH (CEO & FOUNDER)         */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 bg-white border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* CEO Photo Frame (100% Unclipped 1:1 Creative Poster) */}
            <div className="lg:col-span-5 flex justify-center">
              <Card3D
                intensity={8}
                className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden cloud-card p-2 sm:p-2.5 border border-blue-200/90 shadow-xl"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white shadow-inner">
                  <img
                    src={ajitCeoImg}
                    alt="Ajeet Singh — CEO & Founder ATS Global Tech"
                    className="w-full h-full object-contain block rounded-2xl"
                  />
                </div>
              </Card3D>
            </div>

            {/* CEO Bio & Company Vision */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066FF] mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>LEADERSHIP & VISION</span>
              </div>

              <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 border-l-4 border-[#0066FF] pl-4 sm:pl-5 mb-4 italic font-display leading-snug">
                “We don't just write code &mdash; we create technology that solves real business challenges, streamlines operations, and scales with your growth.”
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                With over 15+ years of software industry experience, Ajeet founded ATS Global Tech with a mission to bridge the gap between complex enterprise technology and practical business success. Under his leadership, ATS has built robust web architectures, mobile ecosystems, AI call center software, and multi-tenant ERP platforms for businesses in India and across the globe.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Our philosophy is simple: <strong>People trust people, not logos.</strong> That is why every client works directly with senior engineers and architects who are accountable for your success from planning to post-launch hypercare.
              </p>

              {/* Verified Achievements */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "150+", label: "Projects Completed" },
                  { value: "100%", label: "In-House Team" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 sm:p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-center"
                  >
                    <div className="text-lg sm:text-xl font-bold text-[#0066FF] font-display">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-bold shadow-sm transition"
                >
                  <span>Connect With Leadership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/work/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-xs transition"
                >
                  <span>Explore Our Work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. OUR FOUR CORE VALUES & PRINCIPLES                         */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]/90 border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066FF] mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>HOW WE OPERATE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Our Core Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Guiding how we engineer software, communicate with clients, and deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Users,
                title: "Direct Collaboration",
                desc: "You collaborate directly with senior engineers and architects on your sprint calls. No non-technical sales middlemen.",
                tag: "TRANSPARENCY",
              },
              {
                icon: Code2,
                title: "Clean Modular Code",
                desc: "We write clean, strictly typed code and modern architectures (React, Node, Cloud) built to scale without expensive rewrites.",
                tag: "QUALITY FIRST",
              },
              {
                icon: Clock,
                title: "Agile On-Time Delivery",
                desc: "Weekly milestones, continuous staging access, and disciplined sprint delivery ensure your launch timeline is always met.",
                tag: "PUNCTUALITY",
              },
              {
                icon: ShieldCheck,
                title: "100% IP & Code Ownership",
                desc: "You own full production source code, design assets, and cloud credentials from Day 1. Zero vendor lock-in, ever.",
                tag: "FULL OWNERSHIP",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF] mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#0066FF] block mb-1">
                      {p.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 font-display">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. JAIPUR HEADQUARTERS & GLOBAL REACH                        */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 bg-white border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#F0F7FF] via-white to-[#EBF5FF] rounded-3xl border border-blue-200 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0066FF] text-xs font-mono font-bold mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>JAIPUR INNOVATION HEADQUARTERS</span>
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-display mb-2">
                Rooted in Jaipur, Serving Global Leaders
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Our core development center operates from Jaipur, Rajasthan. From here, our in-house engineering squad powers digital ecosystems for clients across India, the United States, Europe, and the Middle East.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-700 font-medium">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>info@atsglobaltech.in</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>+91 99298 25003</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-bold shadow-sm transition"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-xs transition"
              >
                <span>Join Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
