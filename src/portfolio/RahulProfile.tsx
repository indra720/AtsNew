import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Code,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  TrendingUp,
  Linkedin,
  Github,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Card3D from "../components/ui/Card3D";
import RahulImage from "/Rahul5.jpg";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  skills: string[];
  stats?: string[];
  liveLink: string;
  caseStudyLink?: string;
}

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  bulletPoints: string[];
}

const RahulProfile: React.FC = () => {
  const featuredProjects: ProjectCardProps[] = [
    {
      title: "Modern E-Commerce Platform",
      role: "Full Stack Developer",
      description:
        "A complete MERN eCommerce system with product filters, cart, payments, and admin analytics.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
      imageAlt: "Ecommerce",
      skills: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      stats: ["Automated cart system", "Payment gateway added"],
      liveLink: "#",
    },
    {
      title: "Employee Management System (EMS)",
      role: "MERN Developer",
      description:
        "Attendance, roles, payroll & admin dashboard with secure authentication.",
      imageUrl:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop",
      imageAlt: "EMS",
      skills: ["React", "Node.js", "MongoDB", "JWT"],
      stats: ["RBAC Security", "Realtime Insights"],
      liveLink: "#",
    },
    {
      title: "Dynamic Portfolio Builder",
      role: "Frontend Developer",
      description:
        "Users create portfolios with drag-and-drop blocks and live preview.",
      imageUrl:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop",
      imageAlt: "Portfolio Builder",
      skills: ["React", "TailwindCSS", "Framer Motion"],
      liveLink: "#",
    },
    {
      title: "Smart Admin Dashboard",
      role: "React Developer",
      description:
        "Charts, dark mode, API integration & user management dashboard.",
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop",
      imageAlt: "Dashboard",
      skills: ["React", "Recharts", "TailwindCSS"],
      stats: ["+40% UX improvement", "Faster API performance"],
      liveLink: "#",
    },
    {
      title: "Blog CMS Platform",
      role: "Full Stack Developer",
      description:
        "Users publish, edit & manage blog content with full CMS features.",
      imageUrl:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&auto=format&fit=crop",
      imageAlt: "Blog CMS",
      skills: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
    },
    {
      title: "Innomind B2B Informatic Website",
      role: "Frontend Developer",
      description:
        "Corporate website showcasing professional lighting solutions.",
      imageUrl:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&auto=format&fit=crop",
      imageAlt: "Innomind",
      skills: ["React", "TailwindCSS", "JavaScript"],
      stats: ["+30% SEO boost", "-45% Page load"],
      liveLink: "#",
    },
  ];

  const workExperience: ExperienceItemProps[] = [
    {
      title: "Full Stack (MERN) Developer Intern",
      company: "SudoTechLabs",
      duration: "March 2025 – Present",
      location: "Jaipur, Rajasthan",
      bulletPoints: [
        "Developed robust modules using MERN stack",
        "Optimized APIs and improved UI workflow",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0F7FF] text-[#0A1629] font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Banner */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gradient-to-r from-blue-100 via-sky-100 to-indigo-100">
        <img
          src="https://images.unsplash.com/photo-1761319914911-71b059a655d8?auto=format&fit=crop&w=1200&q=80"
          alt="Banner"
          className="w-full h-full object-cover opacity-25 filter"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F0F7FF] via-transparent to-transparent" />
      </div>

      {/* Profile Header Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 relative z-10 mb-16">
        <div className="p-8 sm:p-10 rounded-3xl cloud-card bg-white/90 border border-blue-100 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,102,255,0.08)] flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="relative">
              <img
                src={RahulImage}
                alt="Rahul Kumawat"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl border-2 border-blue-200 shadow-xl object-cover bg-white"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/400x400/e0f2fe/0066ff?text=Rahul";
                }}
              />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-lg animate-pulse" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-xs font-mono font-semibold mb-2">
                <Sparkles className="w-3 h-3 text-[#00D2FF]" />
                <span>MERN Full-Stack Specialist</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0A1629]">
                Rahul Kumawat
              </h1>
              <p className="text-lg font-bold text-[#0066FF] font-display mt-1 mb-3">
                MERN Developer
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                  Jaipur, Rajasthan
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#0066FF]" />
                  Joined Oct. 2025
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white border border-blue-200 hover:border-blue-400 text-slate-700 hover:text-[#0066FF] transition-all shadow-xs"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Rahul800589"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white border border-blue-200 hover:border-blue-400 text-slate-700 hover:text-[#0066FF] transition-all shadow-xs"
            >
              <Github className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-bold text-xs tracking-wider uppercase font-mono shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
            >
              Hire Developer
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (2 cols): About & Projects */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Card */}
            <div className="p-8 rounded-3xl cloud-card bg-white/90 border border-blue-100 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
              <h2 className="text-xl font-bold font-display text-[#0A1629] mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#0066FF]" />
                About Developer
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Passionate <strong className="text-[#0066FF]">MERN Developer</strong> creating fast, scalable, and modern products with clean UI & optimized backend logic. Expertise in <strong className="text-[#0A1629]">React</strong> for frontend, <strong className="text-[#0A1629]">Node.js/Express</strong> for APIs, and <strong className="text-[#0A1629]">MongoDB</strong> for database management.
              </p>
            </div>

            {/* Featured Projects */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold font-display text-[#0A1629] flex items-center gap-2">
                  <Code className="w-6 h-6 text-[#0066FF]" />
                  Featured Projects
                </h2>
                <span className="text-xs font-mono text-slate-500 font-semibold">{featuredProjects.length} Built</span>
              </div>

              <div className="space-y-6">
                {featuredProjects.map((project, idx) => (
                  <Card3D key={idx}>
                    <div className="p-6 sm:p-7 rounded-3xl cloud-card bg-white/90 border border-blue-100 hover:border-blue-300 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(0,102,255,0.08)] hover:shadow-[0_15px_35px_rgba(0,102,255,0.15)] flex flex-col md:flex-row gap-6 items-center">
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        className="w-full md:w-52 h-36 rounded-2xl object-cover border border-blue-100 shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold font-display text-[#0A1629]">{project.title}</h3>
                          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-[11px] font-mono font-semibold">
                            {project.role}
                          </span>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.skills.map((s, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 bg-blue-50/70 border border-blue-100 rounded-lg text-xs font-mono text-[#0066FF]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        {project.stats && (
                          <div className="flex flex-wrap gap-4 text-xs font-mono text-emerald-600 font-semibold">
                            {project.stats.map((st, i) => (
                              <span key={i} className="flex items-center gap-1.5">
                                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                                {st}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Contact Info */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="p-8 rounded-3xl cloud-card bg-white/90 border border-blue-100 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
              <h2 className="text-xl font-bold font-display text-[#0A1629] mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#0066FF]" />
                Work Experience
              </h2>
              <div className="space-y-6">
                {workExperience.map((exp, idx) => (
                  <div key={idx} className="border-l-4 border-[#0066FF] pl-4 space-y-1.5">
                    <h3 className="font-bold text-[#0A1629] text-base font-display">{exp.title}</h3>
                    <p className="text-xs font-semibold text-[#0066FF]">{exp.company}</p>
                    <p className="text-[11px] font-mono text-slate-500">{exp.duration} • {exp.location}</p>
                    <ul className="space-y-1.5 pt-2">
                      {exp.bulletPoints.map((b, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <Star className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="p-8 rounded-3xl cloud-card bg-white/90 border border-blue-100 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
              <h3 className="text-lg font-bold font-display text-[#0A1629] mb-4">Contact Info</h3>
              <div className="space-y-3 text-xs sm:text-sm font-mono text-slate-600">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0066FF]" />
                  <span>rahulkumawat0992@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0066FF]" />
                  <span>+91 8005894312</span>
                </p>
              </div>
            </div>

            {/* Direct Contact Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white via-[#F0F7FF] to-[#E0F2FE] border border-blue-200/80 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,102,255,0.12)] text-center">
              <h3 className="text-lg font-bold font-display text-[#0A1629] mb-2">Initiate Collaboration</h3>
              <p className="text-xs text-slate-600 mb-6">Need a full-stack MERN solution or API architecture?</p>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] text-white text-xs font-bold font-mono uppercase tracking-wider shadow-lg shadow-blue-500/25 hover:scale-105 transition-transform"
              >
                <span>Send Direct Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RahulProfile;
