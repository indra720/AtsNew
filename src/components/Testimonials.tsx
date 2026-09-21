import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Quote,
  Star,
  TrendingUp,
  Building,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface Industry {
  name: string;
  projects: number;
}

const industries: Industry[] = [
  { name: "Technology", projects: 45 },
  { name: "Healthcare", projects: 32 },
  { name: "Finance", projects: 28 },
  { name: "Education", projects: 25 },
  { name: "Retail", projects: 20 },
  { name: "Manufacturing", projects: 18 },
  { name: "Logistics", projects: 15 },
  { name: "Real Estate", projects: 12 },
];

const indianMaleNames = [
  "Ravi Kumar",
  "Amit Sharma",
  "Vikram Singh",
  "Sandeep Menon",
  "Rajesh Patel",
  "Anil Gupta",
];

const indianFemaleNames = [
  "Priya Desai",
  "Anjali Verma",
  "Neha Singh",
  "Pooja Sharma",
  "Shruti Rao",
  "Kavita Reddy",
];

const getProfessionalDummyImageUrl = (isMale: boolean, index: number) => {
  const gender = isMale ? "men" : "women";
  return `https://randomuser.me/api/portraits/${gender}/${index + 10}.jpg`;
};

const designations = [
  "Software Engineer",
  "Marketing Manager",
  "Product Owner",
  "HR Director",
  "Financial Analyst",
  "Operations Lead",
];

const companies = [
  "Infosys Solutions",
  "Wipro Digital",
  "Tech Mahindra",
  "HCL Tech",
  "TCS Innovations",
  "Reliance Digital",
];

const Testimonials: FC = () => {
  const featured = [
    {
      quote:
        "ATS Global Tech helped us transform our outdated system into a modern, automated solution. Their team is simply the best!",
      author: "Rahul Kapoor",
      title: "CEO, Bharat Logistics",
      color: "from-cyan-500/20 to-blue-500/10",
      border: "hover:border-cyan-500/50",
    },
    {
      quote:
        "From UI/UX design to final delivery, their process was seamless. ATS Global Tech truly delivers quality and innovation.",
      author: "Sneha Reddy",
      title: "Founder, Nexa Startups",
      color: "from-indigo-500/20 to-purple-500/10",
      border: "hover:border-indigo-500/50",
    },
    {
      quote:
        "We wanted a robust AI dashboard and they nailed it. Exceptional attention to detail and great communication throughout.",
      author: "Dinesh Taneja",
      title: "CTO, Visionary Analytics",
      color: "from-purple-500/20 to-pink-500/10",
      border: "hover:border-purple-500/50",
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-[#F0F7FF] text-[#0A1629] relative overflow-hidden">
      {/* Background Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <section className="relative pt-6 sm:pt-8 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-[#0066FF] text-xs font-mono font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted By Industry Leaders</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0A1629] mb-6">
            Client{" "}
            <span className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] bg-clip-text text-transparent">
              Testimonials
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Real stories from our partners and clients who trusted{" "}
            <strong className="text-[#0066FF] font-bold">ATS GLOBAL TECH</strong> to turn
            their vision into reality.
          </p>
        </div>

        {/* Featured Testimonials 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, idx) => (
            <Card3D key={idx} className="h-full">
              <div
                className="cloud-card h-full p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <Quote className="h-8 w-8 text-[#0066FF]/40 mb-4" />
                  <p className="text-slate-700 italic mb-6 text-sm sm:text-base leading-relaxed font-sans">
                    “{item.quote}”
                  </p>
                </div>
                <div className="border-t border-blue-100 pt-4">
                  <h3 className="text-[#0066FF] font-black font-display text-base">
                    — {item.author}
                  </h3>
                  <p className="text-xs font-mono font-bold text-slate-500">{item.title}</p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* Telemetry Stats Bar */}
      <section className="py-12 border-y border-blue-100 bg-[#EBF5FF]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "150+", label: "Happy Clients", icon: Users, color: "text-[#0066FF]" },
              { value: "4.9/5", label: "Average Rating", icon: Star, color: "text-amber-500" },
              { value: "98%", label: "Success Rate", icon: TrendingUp, color: "text-emerald-600" },
              { value: "25+", label: "Industry Awards", icon: Award, color: "text-[#0052CC]" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center p-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-display text-[#0A1629] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Our Clients Say - Detailed Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Verified Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0A1629] mt-1 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Real feedback from real clients who have experienced the ATS GLOBAL TECH difference.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => {
            const isMale = i % 2 === 0;
            const clientName = isMale
              ? indianMaleNames[Math.floor(i / 2) % indianMaleNames.length]
              : indianFemaleNames[Math.floor(i / 2) % indianFemaleNames.length];
            const clientDesignation = designations[i % designations.length];
            const clientCompany = companies[i % companies.length];

            return (
              <Card3D key={i} className="h-full">
                <div className="cloud-card h-full rounded-3xl p-6 flex flex-col justify-between relative group">
                  <div className="absolute top-4 right-4 text-[#0066FF]/10 group-hover:text-[#0066FF]/20 transition-colors">
                    <Quote className="h-10 w-10" />
                  </div>

                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={getProfessionalDummyImageUrl(isMale, i)}
                        alt={`Client ${clientName}`}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#0066FF] shadow-sm"
                      />
                      <div>
                        <h3 className="font-black text-base text-[#0A1629] font-display">
                          {clientName}
                        </h3>
                        <p className="text-xs text-slate-500 font-mono font-medium">
                          {clientDesignation}
                        </p>
                        <p className="text-xs font-bold text-[#0066FF]">
                          {clientCompany}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-3.5 w-3.5 text-amber-400 fill-current"
                        />
                      ))}
                    </div>

                    <div className="inline-flex items-center rounded-full bg-[#EBF5FF] border border-blue-200 px-3 py-1 text-[11px] font-mono font-bold text-[#0066FF] mb-4">
                      Project Type {i + 1}
                    </div>

                    <p className="text-slate-600 mb-5 text-xs sm:text-sm leading-relaxed italic border-l-2 border-[#0066FF] pl-3 font-sans">
                      “ATS GLOBAL TECH exceeded our expectations by delivering an
                      innovative and scalable solution tailored to our needs.”
                    </p>
                  </div>

                  <div className="border-t border-blue-100 pt-4">
                    <h4 className="font-mono font-bold text-slate-500 text-[11px] uppercase tracking-wider mb-2">
                      Results Achieved:
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        "Increased ROI (25%)",
                        "Streamlined Operations (30% Faster)",
                        "Enhanced Client Satisfaction (4.9/5 Rating)",
                      ].map((r, k) => (
                        <li
                          key={k}
                          className="flex items-center text-xs text-slate-600 font-mono font-medium"
                        >
                          <TrendingUp className="h-3 w-3 text-[#0066FF] mr-2 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 border-t border-blue-100 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Domain Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0A1629] mt-1 mb-4">
            Industries We Serve
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            We've successfully delivered projects across diverse industries,
            bringing specialized expertise to each sector.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((industry) => (
            <Card3D key={industry.name} className="h-full">
              <div className="cloud-card h-full rounded-3xl p-6 text-center flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center mx-auto mb-3 text-[#0066FF] group-hover:scale-110 transition-transform shadow-inner">
                    <Building className="h-6 w-6" />
                  </div>
                  <h3 className="font-black text-[#0A1629] text-base font-display mb-2">
                    {industry.name}
                  </h3>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black font-display text-[#0066FF]">
                    {industry.projects}
                  </p>
                  <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">Projects Delivered</p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-white via-[#F0F7FF] to-[#EBF5FF] border border-blue-200 rounded-3xl p-8 sm:p-14 text-center shadow-[0_15px_40px_rgba(0,102,255,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0A1629] mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-sans">
            Let us help you achieve similar results. Start your digital
            transformation journey today and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] text-white font-bold px-8 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition duration-300 hover:scale-105 text-sm"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/work/projects"
              className="inline-flex items-center justify-center gap-2 border border-blue-200 hover:border-[#0066FF]/40 text-slate-800 hover:text-[#0066FF] font-bold px-8 py-4 rounded-2xl transition duration-300 bg-white shadow-sm text-sm"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
