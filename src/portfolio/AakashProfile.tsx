import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Code,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Calendar,
  Sparkles,
  ArrowRight,
  GraduationCap,
  ExternalLink,
  Cpu,
} from "lucide-react";
import Card3D from "../components/ui/Card3D";
import AakashImage from "../assets/Aakash.jpeg";

const AakashProfile: React.FC = () => {
  const projects = [
    {
      title: "ConnectSphere",
      description:
        "A social media platform built with Django, offering secure login, posts, and profile customization.",
      imageUrl:
        "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&h=400&fit=crop",
      skills: ["Django", "Python", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "SmartTask Web Application",
      description:
        "A task management web app allowing users to create, update, and track tasks using Django & Bootstrap.",
      imageUrl:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
      skills: ["Django", "Bootstrap", "JavaScript"],
    },
  ];

  const experience = [
    {
      title: "Python Developer — SudoTechlabs",
      duration: "Apr 2025 – Present • Jaipur, Rajasthan",
      points: [
        "Integrated third-party APIs for automation tools.",
        "Improved backend efficiency by 15%.",
        "Collaborated with frontend teams on scalable systems.",
      ],
    },
    {
      title: "Python Developer — TechnoGlobe",
      duration: "Jul 2024 – Mar 2025 • Jaipur, Rajasthan",
      points: [
        "Optimized SQL queries and reduced response time by 20%.",
        "Built scalable Django REST APIs.",
        "Improved data flow and server-side performance.",
      ],
    },
  ];

  const skills = {
    frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    backend: ["Python", "Django"],
    tools: ["Git", "GitHub", "VS Code", "Docker"],
  };

  const education = [
    {
      title: "Python Developer Certification",
      institution: "TechnoGlobe, Jaipur — Jul 2024 – Dec 2024",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Parishkar College, Jaipur — 2018–2021",
      gpa: "GPA: 75.33%",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0F7FF] text-[#0A1629] font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Banner */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gradient-to-r from-blue-100 via-sky-100 to-indigo-100">
        <img
          src="https://images.unsplash.com/photo-1761319914911-71b059a655d8?auto=format&fit=crop&w=1200&q=60"
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
                src={AakashImage}
                alt="Aakash Kumawat"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl border-2 border-blue-200 shadow-xl object-cover bg-white"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/400x400/e0f2fe/0066ff?text=Aakash";
                }}
              />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-lg animate-pulse" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-xs font-mono font-semibold mb-2">
                <Sparkles className="w-3 h-3 text-[#00D2FF]" />
                <span>Python & Django Backend Specialist</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0A1629]">
                Aakash Kumawat
              </h1>
              <p className="text-lg font-bold text-[#0066FF] font-display mt-1 mb-3">
                Python Developer
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                  Jaipur, Rajasthan, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#0066FF]" />
                  Joined April 2025
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/akshmat243"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white border border-blue-200 hover:border-blue-400 text-slate-700 hover:text-[#0066FF] transition-all shadow-xs"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/akshmat243"
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
                Python Developer with a BCA degree and strong skills in{" "}
                <strong className="text-[#0066FF]">Django</strong>,{" "}
                <strong className="text-[#0A1629]">Python</strong>, and{" "}
                <strong className="text-[#0A1629]">JavaScript</strong>. Experienced in building responsive and scalable web applications, improving performance, and integrating third-party APIs. Passionate about delivering user-centric and efficient solutions.
              </p>
            </div>

            {/* Featured Projects */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold font-display text-[#0A1629] flex items-center gap-2">
                  <Code className="w-6 h-6 text-[#0066FF]" />
                  Featured Projects
                </h2>
                <span className="text-xs font-mono text-slate-500 font-semibold">{projects.length} Built</span>
              </div>

              <div className="space-y-6">
                {projects.map((project, idx) => (
                  <Card3D key={idx}>
                    <div className="p-6 sm:p-7 rounded-3xl cloud-card bg-white/90 border border-blue-100 hover:border-blue-300 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(0,102,255,0.08)] hover:shadow-[0_15px_35px_rgba(0,102,255,0.15)] flex flex-col md:flex-row gap-6 items-center">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full md:w-52 h-36 rounded-2xl object-cover border border-blue-100 shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold font-display text-[#0A1629] mb-2">{project.title}</h3>
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

            {/* Work Experience */}
            <div className="p-8 rounded-3xl cloud-card bg-white/90 border border-blue-100 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
              <h2 className="text-xl font-bold font-display text-[#0A1629] mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#0066FF]" />
                Work Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div key={idx} className="border-l-4 border-[#0066FF] pl-4 space-y-1.5">
                    <h3 className="font-bold text-[#0A1629] text-base font-display">{exp.title}</h3>
                    <p className="text-[11px] font-mono text-slate-500">{exp.duration}</p>
                    <ul className="space-y-1.5 pt-2">
                      {exp.points.map((p, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills, Education, Contact */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className="p-8 rounded-3xl cloud-card bg-white/90 border border-blue-100 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
              <h3 className="text-lg font-bold font-display text-[#0A1629] mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#0066FF]" />
                Technical Skills
              </h3>
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((s) => (
                      <span key={s} className="px-2.5 py-1 bg-blue-50/70 border border-blue-100 rounded-lg text-xs font-mono text-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0066FF] font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((s) => (
                      <span key={s} className="px-2.5 py-1 bg-blue-50 border border-blue-200 rounded-lg text-xs font-mono text-[#0066FF] font-bold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((s) => (
                      <span key={s} className="px-2.5 py-1 bg-blue-50/70 border border-blue-100 rounded-lg text-xs font-mono text-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="p-8 rounded-3xl cloud-card bg-white/90 border border-blue-100 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
              <h3 className="text-lg font-bold font-display text-[#0A1629] mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
                Education
              </h3>
              <div className="space-y-5">
                {education.map((edu, idx) => (
                  <div key={idx} className="border-b border-blue-100 last:border-0 pb-4 last:pb-0">
                    <h4 className="font-bold text-[#0A1629] text-sm font-display">{edu.title}</h4>
                    <p className="text-xs text-[#0066FF] mt-0.5">{edu.institution}</p>
                    {edu.gpa && <p className="text-[11px] font-mono text-emerald-600 font-bold mt-1">{edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-8 rounded-3xl cloud-card bg-white/90 border border-blue-100 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
              <h3 className="text-lg font-bold font-display text-[#0A1629] mb-4">Contact Info</h3>
              <div className="space-y-3 text-xs sm:text-sm font-mono text-slate-600">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0066FF]" />
                  <span>akshmat243@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0066FF]" />
                  <span>+91 820 917 5003</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0066FF]" />
                  <span>Jaipur, Rajasthan, India</span>
                </p>
              </div>
            </div>

            {/* Direct Contact Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white via-[#F0F7FF] to-[#E0F2FE] border border-blue-200/80 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,102,255,0.12)] text-center">
              <h3 className="text-lg font-bold font-display text-[#0A1629] mb-2">Initiate Collaboration</h3>
              <p className="text-xs text-slate-600 mb-6">Need high-performance Python services or REST API design?</p>
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

export default AakashProfile;
