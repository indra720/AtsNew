import React, { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Eye,
  Heart,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const teamMembers = [
  {
    name: "Pramod Saini",
    role: "Senior Frontend Developer",
    description: "UI architecture leadership with expertise in building responsive, accessible, high-performance web systems.",
    imgSrc: "./Pramod.png",
    navigationPath: "/team-members",
    skills: ["React", "Tailwind CSS", "JavaScript", "UI/UX Systems"],
  },
  {
    name: "Aakash Kumawat",
    role: "Senior Backend Developer",
    description: "Enterprise backend engineer with expertise in high-throughput distributed systems, RESTful APIs, and database architecture.",
    imgSrc: "./Aakash.jpeg",
    navigationPath: "/team-members3",
    skills: ["Python", "Django", "MySQL", "System Architecture"],
  },
  {
    name: "Rahul Kumawat",
    role: "MERN Stack Developer",
    description: "Full-stack engineer dedicated to developing scalable cloud applications with resilient Node.js backends and modern React frontends.",
    imgSrc: "./Rahul5.jpg",
    navigationPath: "/team-members2",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    name: "Kamlesh Kumar Sharma",
    role: "Full Stack Developer",
    description: "Full-stack engineer skilled in building robust enterprise digital solutions across modern JavaScript and Microsoft .NET ecosystems.",
    imgSrc: "./kamal1.jpg",
    navigationPath: "/team-members4",
    skills: ["JavaScript", "React", "C#", ".NET Core", "MySQL"],
  },
];

export const About: FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#E8F4FD] text-slate-900 min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">ATS GLOBAL TECH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-medium"
          >
            ATS Global Tech empowers businesses through innovation, digital transformation, and future-ready software engineering.
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
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{card.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">{card.text}</p>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEO & Leadership Spotlight */}
      <section className="py-24 bg-[#F8FAFC]/90 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* CEO Photo Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <Card3D intensity={10} className="relative w-full max-w-sm rounded-3xl overflow-hidden cloud-card p-2 border border-blue-200/90 shadow-xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/ceo.png"
                    alt="Ajeet Singh - CEO & Founder"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x500/0066ff/ffffff?text=CEO+Ajeet+Singh";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest block mb-0.5 font-bold">CEO & Founder</span>
                    <h4 className="text-2xl font-black text-white font-display">Ajeet Singh</h4>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* CEO Bio & Achievements */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-6 shadow-xs">
                <span>LEADERSHIP • STRATEGY • INNOVATION</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-[#0066FF] pl-6 mb-6 italic font-display">
                “We don’t just create technology — we create growth, opportunity, and success.”
              </blockquote>

              <p className="text-base text-slate-600 leading-relaxed mb-4 font-medium">
                With 15+ years of global tech experience, he believes in building futuristic digital ecosystems.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 font-normal">
                He has worked with startups, mid-scale companies, and global enterprises, helping them adopt modern technologies such as Cloud, AI Automation, Full-Stack Engineering, Data-Driven Architecture, Cybersecurity, and Scalable Digital Platforms. His focus is on building systems that are fast, reliable, future-ready, and capable of supporting large-scale growth.
              </p>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "15+", label: "Years Leading" },
                  { value: "500+", label: "Projects Done" },
                  { value: "60+", label: "Enterprise Clients" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl bg-white border border-blue-100 text-center shadow-xs">
                    <div className="text-2xl sm:text-3xl font-black text-[#0066FF] font-display mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-mono font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-500 italic border-l-2 border-blue-200 pl-4">
                “Leadership is not a position — it's an influence that creates change.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Team Section */}
      <section className="py-24 bg-white/90 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE BUILDERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
              Meet Our Engineering Leadership
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Our team blends technical mastery, software craftsmanship, and strategic architecture to build future-ready solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m) => (
              <Card3D
                key={m.name}
                intensity={12}
                glowColor="rgba(0, 102, 255, 0.1)"
                className="cloud-card p-6 flex flex-col justify-between border border-blue-100/90 hover:border-blue-300 rounded-3xl group"
              >
                <div>
                  <div className="relative w-24 h-24 mx-auto mb-5 rounded-2xl overflow-hidden border-2 border-[#0066FF]/40 p-1 bg-[#EBF5FF] shadow-md group-hover:scale-105 transition duration-300">
                    <img
                      src={m.imgSrc}
                      alt={m.name}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/100x100/0066FF/ffffff?text=${m.name.charAt(0)}`;
                      }}
                    />
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-[#0066FF] transition">{m.name}</h3>
                    <p className="text-xs font-mono text-[#0066FF] font-semibold">{m.role}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 text-center font-normal">
                    {m.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                    {m.skills.map((s, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono text-[#0066FF] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={m.navigationPath}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-xs font-bold text-[#0066FF] bg-blue-50/80 hover:bg-[#0066FF] hover:text-white border border-blue-200 hover:border-[#0066FF] transition-all duration-300 mt-auto shadow-xs"
                >
                  <span>View Engineering Portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Journey CTA */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#F0F7FF] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display mb-4">
            Join Our Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto font-medium">
            Whether you want to architect an enterprise platform or accelerate your engineering career — we’d love to connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_8px_25px_rgba(0,102,255,0.35)] transition w-full sm:w-auto"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-slate-800 bg-white border border-blue-200 hover:bg-slate-50 transition w-full sm:w-auto shadow-sm"
            >
              View Open Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
