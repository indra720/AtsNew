import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Zap,
  Users,
  Award,
  ExternalLink,
  CircleCheckBig,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const caseStudiesList = [
  {
    title: "AI-Powered E-Commerce Revolution",
    industry: "E-Commerce",
    featured: true,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&h=600&fit=crop",
    challenge: "Low conversion rates, high cart abandonment, and inefficient inventory management were costing millions in lost revenue.",
    link: "/ai-page",
    metrics: [
      ["+300%", "Revenue Increase"],
      ["+85%", "Conversion Rate"],
      ["-60%", "Cart Abandonment"],
      ["96%", "Customer Satisfaction"],
    ],
  },
  {
    title: "Secure Banking Transformation",
    industry: "Financial Services",
    featured: false,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&h=600&fit=crop",
    challenge: "Legacy core banking systems hindered mobile adoption and lacked real-time fraud mitigation capabilities.",
    link: "/secure-page",
    metrics: [
      ["90%", "Mobile Adoption"],
      ["99.9%", "Fraud Prevention"],
      ["10x", "Processing Speed"],
      ["45%", "Cost Reduction"],
    ],
  },
  {
    title: "Healthcare Analytics Revolution",
    industry: "Healthcare",
    featured: false,
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    challenge: "Hospitals struggled with fragmented patient records, delayed emergency diagnoses, and strict compliance overhead.",
    link: "/health-page",
    metrics: [
      ["+40%", "Diagnosis Speed"],
      ["+35%", "Patient Outcomes"],
      ["$5M", "Annual Savings"],
      ["99.8%", "Data Accuracy"],
    ],
  },
  {
    title: "Enterprise Cloud Migration",
    industry: "Cloud Infrastructure",
    featured: false,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop",
    challenge: "On-prem data centers suffered recurring downtime, slow feature release cycles, and spiraling maintenance overhead.",
    link: "/cloud-page",
    metrics: [
      ["60%", "Cost Reduction"],
      ["99.99%", "System Uptime"],
      ["90%", "Faster Deployment"],
      ["15", "Countries Deployed"],
    ],
  },
  {
    title: "EdTech Learning Platform",
    industry: "Education Technology",
    featured: false,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=600&fit=crop",
    challenge: "Traditional static virtual classrooms lacked student engagement and personalized learning paths.",
    link: "/work/projects",
    metrics: [
      ["+75%", "Engagement Uplift"],
      ["85%", "Course Completion"],
      ["+50%", "Learning Efficiency"],
      ["500K+", "Active Students"],
    ],
  },
  {
    title: "Smart Logistics Optimization",
    industry: "Logistics & Fleet",
    featured: false,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&h=600&fit=crop",
    challenge: "Inefficient fleet dispatching and static routing were causing high fuel burn and delivery delays.",
    link: "/work/projects",
    metrics: [
      ["30%", "Fuel Savings"],
      ["95%", "On-Time Deliveries"],
      ["+40%", "Fleet Utilization"],
      ["92%", "Satisfaction Score"],
    ],
  },
];

export const CaseStudies: FC = () => {
  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      {/* Header */}
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-xs font-mono font-bold text-[#0066FF] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MEASURABLE BUSINESS OUTCOMES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A1629] tracking-tight font-display mb-6">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">Success Stories</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-sans">
            Discover how we've helped enterprises across industries achieve remarkable transformations through innovative, future-ready technology solutions.
          </p>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { val: "15+", label: "Enterprise Transformations", icon: Award, color: "text-[#0066FF]" },
              { val: "2,000+", label: "Clients & Partners Trusted", icon: Users, color: "text-[#0052CC]" },
              { val: "98%", label: "Client Satisfaction SLA", icon: CircleCheckBig, color: "text-emerald-600" },
              { val: "5+", label: "Global Industry Awards", icon: Target, color: "text-amber-500" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="cloud-card p-6 rounded-3xl text-center">
                  <div className={`w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 mx-auto flex items-center justify-center mb-3 shadow-inner ${stat.color}`}>
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0A1629] font-display mb-1">{stat.val}</div>
                  <div className="text-xs text-slate-500 font-mono font-bold">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Case Studies Cards List */}
          <div className="space-y-8 text-left">
            {caseStudiesList.map((study, idx) => (
              <Card3D
                key={idx}
                intensity={8}
                className="cloud-card overflow-hidden rounded-3xl group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white/90 via-white/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0066FF] border border-blue-200 shadow-sm text-[11px] font-mono font-bold uppercase">
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-[11px] font-mono font-bold uppercase shadow-sm">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#0A1629] mb-3 font-display group-hover:text-[#0066FF] transition">
                        {study.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                        <strong className="text-slate-900 font-bold">Business Challenge:</strong> {study.challenge}
                      </p>

                      {/* Metrics 4-grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        {study.metrics.map(([val, lbl], mIdx) => (
                          <div key={mIdx} className="p-3 rounded-2xl bg-[#F0F7FF] border border-blue-200 text-center">
                            <div className="text-xl sm:text-2xl font-black text-[#0066FF] font-display mb-0.5">{val}</div>
                            <div className="text-[10px] uppercase font-mono font-bold text-slate-500">{lbl}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={study.link}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_4px_16px_rgba(0,102,255,0.25)] transition w-full sm:w-auto self-start mt-auto cursor-pointer"
                    >
                      <span>Explore Technical Architecture</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#EBF5FF] to-white text-center border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1629] font-display mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto font-sans">
            Join hundreds of forward-thinking enterprise leaders who have modernized their infrastructure with ATS Global Tech.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition w-full sm:w-auto"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold text-slate-800 bg-white border border-blue-200 hover:border-[#0066FF]/40 shadow-sm transition w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
