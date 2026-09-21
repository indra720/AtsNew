import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Code,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Linkedin,
  Github,
  Sparkles,
  ArrowRight,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import Card3D from "../components/ui/Card3D";

interface Project {
  title: string;
  role: string;
  description: string;
  imageUrl: string;
  skills: string[];
  liveLink?: string;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  bulletPoints: string[];
}

interface Education {
  degree: string;
  institution: string;
  years: string;
}

const profileData = {
  name: "Pramod Saini",
  title: "Frontend Developer",
  location: "Jaipur, India",
  contact: {
    email: "pramodsaini189@gmail.com",
    phone: "+91 820 917 5003",
  },
  about:
    "A passionate Frontend Developer skilled in React, Tailwind CSS, JavaScript, and modern UI practices. Dedicated to building performant, 3D animated, accessible, and delightful digital user interfaces.",
  profileImageUrl: "/src/assets/Pramod.png",
  bannerImageUrl:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1500&q=80",
  social: {
    linkedin: "https://www.linkedin.com/in/pramod-saini-0577a5229/",
    github: "https://github.com/Pramod-saini",
  },
};

const featuredProjects: Project[] = [
  {
    title: "E-Commerce Platform",
    role: "Frontend Developer",
    description:
      "A modern e-commerce website with filtering, cart, and checkout features.",
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    skills: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    role: "Frontend Developer",
    description: "Personal portfolio with smooth animations and responsive UI.",
    imageUrl:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=60",
    skills: ["React", "Tailwind"],
  },
  {
    title: "Task Manager App",
    role: "UI Engineer",
    description:
      "Task manager with drag & drop functionality and clean UI layout.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=60",
    skills: ["React", "JavaScript"],
  },
  {
    title: "Weather Forecast App",
    role: "Frontend Developer",
    description:
      "Weather app using OpenWeather API with animated UI backgrounds.",
    imageUrl:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=60",
    skills: ["React", "API"],
  },
  {
    title: "Real Estate Landing Page",
    role: "UI Developer",
    description: "High-conversion landing page for real estate with modern UI.",
    imageUrl:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=60",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

const workExperience: Experience[] = [
  {
    title: "Frontend Developer (Intern)",
    company: "SudoTechLabs",
    duration: "Jun 2023 - Aug 2023 • Remote",
    bulletPoints: [
      "Built reusable UI components",
      "Improved responsiveness",
      "Worked on dashboard UI",
    ],
  },
  {
    title: "Open Source Contributor",
    company: "GitHub Community",
    duration: "2022 - Present",
    bulletPoints: [
      "Contributed to React projects",
      "Improved documentation",
      "Enhanced UI/UX designs",
    ],
  },
];

const educationData: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University of Rajasthan",
    years: "2021–2024",
  },
  {
    degree: "12th – Science",
    institution: "Govt. Senior Secondary School",
    years: "2021",
  },
];

const PramodProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F7FF] text-[#0A1629] font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Banner */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gradient-to-r from-blue-100 via-sky-100 to-indigo-100">
        <img
          src={profileData.bannerImageUrl}
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
                src={profileData.profileImageUrl}
                alt={profileData.name}
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl border-2 border-blue-200 shadow-xl object-cover bg-white"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/400x400/e0f2fe/0066ff?text=Pramod";
                }}
              />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-lg animate-pulse" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-xs font-mono font-semibold mb-2">
                <Sparkles className="w-3 h-3 text-[#00D2FF]" />
                <span>Available for Architecture & Projects</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0A1629]">
                {profileData.name}
              </h1>
              <p className="text-lg font-bold text-[#0066FF] font-display mt-1 mb-3">
                {profileData.title}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                  {profileData.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
                  {profileData.contact.email}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white border border-blue-200 hover:border-blue-400 text-slate-700 hover:text-[#0066FF] transition-all shadow-xs"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={profileData.social.github}
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

      {/* Main Grid */}
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
                {profileData.about}
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
                        alt={project.title}
                        className="w-full md:w-52 h-36 rounded-2xl object-cover border border-blue-100 shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold font-display text-[#0A1629]">{project.title}</h3>
                          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-[11px] font-mono font-semibold">
                            {project.role}
                          </span>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((s, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 bg-blue-50/70 border border-blue-100 rounded-lg text-xs font-mono text-[#0066FF]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience, Education, Contact */}
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
                    <p className="text-[11px] font-mono text-slate-500">{exp.duration}</p>
                    <ul className="space-y-1 pt-2">
                      {exp.bulletPoints.map((b, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="p-8 rounded-3xl cloud-card bg-white/90 border border-blue-100 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
              <h2 className="text-xl font-bold font-display text-[#0A1629] mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
                Education
              </h2>
              <div className="space-y-5">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="border-b border-blue-100 last:border-0 pb-4 last:pb-0">
                    <h3 className="font-bold text-[#0A1629] text-sm font-display">{edu.degree}</h3>
                    <p className="text-xs text-[#0066FF] font-semibold mt-0.5">{edu.institution}</p>
                    <p className="text-[11px] font-mono text-slate-500 mt-1">{edu.years}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white via-[#F0F7FF] to-[#E0F2FE] border border-blue-200/80 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,102,255,0.12)] text-center">
              <h3 className="text-lg font-bold font-display text-[#0A1629] mb-2">Initiate Collaboration</h3>
              <p className="text-xs text-slate-600 mb-6">Need a custom web application or UI consultation?</p>
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

export default PramodProfile;
