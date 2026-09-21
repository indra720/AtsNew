import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  Code,
  Users,
  Server,
  Layers,
} from "lucide-react";
import Card3D from "../components/ui/Card3D";

interface ProjectCardProps {
  title: string;
  desc: string;
  image: string;
  tech: string[];
}

const KamleshProfile: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Accounting Management System",
      desc: "Role-based secure accounting platform with financial modules, audit tracking & reports.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&w=900&q=80",
      tech: ["C#", ".NET", "SQL Server", "WinForms"],
    },
    {
      title: "Hospital Management System",
      desc: "OPD, billing, patient records, medical store & appointment management built in C#.",
      image:
        "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&w=900&q=80",
      tech: ["C#", ".NET", "SQL Server", "Desktop App"],
    },
    {
      title: "Inventory Management System",
      desc: "Barcode-based stock tracking, supplier records, purchase history & alerts.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&w=900&q=80",
      tech: ["C#", ".NET", "SQL Server", "WinForms"],
    },
    {
      title: "Portfolio Builder System",
      desc: "A tool to generate developer portfolio templates using .NET backend.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=900&q=80",
      tech: ["C#", ".NET Core", "Razor Pages"],
    },
    {
      title: "Admin Dashboard (API Integrated)",
      desc: "Secure admin panel with analytics, CRUD operations and token-protected APIs.",
      image:
        "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&w=900&q=80",
      tech: [".NET Core API", "SQL Server", "Authentication"],
    },
    {
      title: "Student Result Portal",
      desc: "A secure .NET Core portal for managing student marks, results & reports.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=900&q=80",
      tech: ["C#", ".NET Core", "SQL Server"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0F7FF] text-[#0A1629] font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Banner */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gradient-to-r from-blue-100 via-sky-100 to-indigo-100">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&w=1200&q=80"
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
                src="/kamal1.jpg"
                alt="Kamlesh Kumar Sharma"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl border-2 border-blue-200 shadow-xl object-cover bg-white"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/400x400/e0f2fe/0066ff?text=Kamlesh";
                }}
              />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-lg animate-pulse" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-xs font-mono font-semibold mb-2">
                <Sparkles className="w-3 h-3 text-[#00D2FF]" />
                <span>Enterprise .NET & C# Architect</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0A1629]">
                Kamlesh Kumar Sharma
              </h1>
              <p className="text-lg font-bold text-[#0066FF] font-display mt-1 mb-3">
                Full Stack Developer (C# / .NET / SQL)
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                  Jaipur, Rajasthan, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
                  sharmakamal11601@gmail.com
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  7877383709
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white border border-blue-200 hover:border-blue-400 text-slate-700 hover:text-[#0066FF] transition-all shadow-xs"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        {/* About Card */}
        <div className="p-8 sm:p-10 rounded-3xl cloud-card bg-white/90 border border-blue-100 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
          <h2 className="text-xl font-bold font-display text-[#0A1629] mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#0066FF]" />
            About Developer
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            I am a dedicated <strong className="text-[#0066FF]">Full Stack Developer</strong> with strong expertise in{" "}
            <strong className="text-[#0A1629]">C#, .NET Framework, .NET Core, SQL Server, WinForms, API Development, Desktop Applications, and Enterprise Systems</strong>. I focus on building secure, scalable and high-performance business software with clean architecture, optimized database structures, and interactive UI components. My experience spans the full SDLC, from requirement gathering to deployment.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#0A1629] flex items-center gap-2">
              <Code className="w-6 h-6 text-[#0066FF]" />
              Featured Enterprise Projects
            </h2>
            <span className="text-xs font-mono text-slate-500 font-semibold">{projects.length} Architected Systems</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card3D key={index} className="h-full">
                <div className="h-full rounded-3xl cloud-card bg-white/90 border border-blue-100 hover:border-blue-300 p-6 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(0,102,255,0.08)] hover:shadow-[0_15px_35px_rgba(0,102,255,0.15)] flex flex-col justify-between group">
                  <div>
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 border border-blue-100 bg-white">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-lg font-bold font-display text-[#0A1629] group-hover:text-[#0066FF] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-blue-100">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-blue-50/70 border border-blue-100 rounded-lg text-xs font-mono text-[#0066FF]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>

        {/* Bottom Collaboration CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-[#F0F7FF] to-[#E0F2FE] border border-blue-200/80 text-center shadow-[0_20px_50px_rgba(0,102,255,0.12)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#0A1629] mb-3">
            Need Enterprise .NET & SQL Architecture?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Consult directly on desktop applications, high-performance database design, or .NET microservices.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] text-white px-8 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase font-mono shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
          >
            <span>Start Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KamleshProfile;
