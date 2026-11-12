import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  MapPin,
  Heart,
  Coffee,
  GraduationCap,
  Gift,
  X,
  Loader2,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  UploadCloud,
  FileText,
  Laptop,
  Code2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Zap,
  Globe,
  Sliders,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface Job {
  id: string;
  title: string;
  category: string;
  experience: string;
  description: string;
  tags: string[];
  location: string;
  perks: string;
  dayInTheLife: string;
}

const JOBS: Job[] = [
  {
    id: "fullstack-lead",
    title: "Senior Full Stack Engineer (React 19 & Node)",
    category: "frontend",
    experience: "3 - 6 Years",
    description:
      "Architect and ship concurrent React 19 web applications, high-throughput Node.js microservices, and lead engineering sprint standups.",
    tags: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    location: "Jaipur HQ (Hybrid)",
    perks: "Top-Tier M3 MacBook Pro + Equity Opportunities",
    dayInTheLife: "Morning architect sync, building sub-second web components, code reviews, and pair programming on microservices.",
  },
  {
    id: "ai-engineer",
    title: "Lead AI & Voice Telephony Engineer",
    category: "ai",
    experience: "2 - 5 Years",
    description:
      "Build real-time WebRTC audio copilots, LLM RAG pipelines, and automated speech-to-text triage systems handling high concurrent streams.",
    tags: ["Python", "WebRTC", "FastAPI", "PyTorch", "LLM Orchestration"],
    location: "Jaipur HQ (Hybrid)",
    perks: "Dedicated GPU Compute Cloud + AI Conference Grants",
    dayInTheLife: "Fine-tuning prompt flows, optimizing WebRTC buffer latency under 20ms, and evaluating vector search accuracy.",
  },
  {
    id: "cloud-devops",
    title: "Senior Cloud & Kubernetes Architect",
    category: "cloud",
    experience: "4 - 7 Years",
    description:
      "Design multi-region AWS/GCP clusters, automate Terraform infrastructure-as-code, and maintain our strict 99.99% high-availability SLA.",
    tags: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "Prometheus"],
    location: "Jaipur HQ (Hybrid)",
    perks: "Full AWS/Kubernetes Certification Sponsorship",
    dayInTheLife: "Automating zero-downtime rolling deploys, running chaos engineering drills, and tuning multi-region failover.",
  },
  {
    id: "uiux-designer",
    title: "Lead UI/UX & Design Systems Architect",
    category: "design",
    experience: "2 - 5 Years",
    description:
      "Craft world-class Figma design systems, ergonomic desktop dashboards, and high-converting micro-interactions for global enterprise SaaS.",
    tags: ["Figma", "Design Systems", "Prototyping", "Micro-Interactions"],
    location: "Jaipur HQ (Hybrid)",
    perks: "Curved 4K Color-Accurate Dual Displays",
    dayInTheLife: "User journey mapping, creating fluid prototype animations, and collaborating with frontend leads on pixel-perfect CSS.",
  },
  {
    id: "mobile-engineer",
    title: "Cross-Platform Mobile Engineer (Flutter)",
    category: "frontend",
    experience: "2 - 5 Years",
    description:
      "Engineer 60fps native iOS and Android apps with offline-first synchronization, push notification infrastructures, and Bluetooth BLE.",
    tags: ["Flutter", "Dart", "iOS", "Android", "State Management", "REST"],
    location: "Jaipur HQ (Hybrid)",
    perks: "Latest Test Devices (iPhone 16 Pro + Pixel 9)",
    dayInTheLife: "Writing modular BLoC/Riverpod state logic, testing native hardware APIs, and submitting builds to TestFlight.",
  },
  {
    id: "cybersecurity-auditor",
    title: "Zero-Trust Security & Penetration Tester",
    category: "security",
    experience: "3 - 6 Years",
    description:
      "Conduct ethical penetration testing, code security audits, zero-trust network policy enforcement, and lead SOC-2 compliance preparation.",
    tags: ["Penetration Testing", "OWASP", "SOC-2", "ISO 27001", "Zero-Trust"],
    location: "Jaipur HQ (Hybrid)",
    perks: "SANS / CISSP Continuing Education Allowance",
    dayInTheLife: "Auditing pull request security, running automated container scans, and conducting red-team vulnerability simulations.",
  },
];

const SKILL_CATEGORIES = [
  { id: "all", label: "All Open Positions", count: 6 },
  { id: "frontend", label: "Frontend & Full Stack", count: 2 },
  { id: "ai", label: "AI & Telephony", count: 1 },
  { id: "cloud", label: "Cloud & DevOps", count: 1 },
  { id: "design", label: "UI/UX Product Design", count: 1 },
  { id: "security", label: "Cybersecurity", count: 1 },
];

export const Careers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    experience: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const filteredJobs =
    selectedCategory === "all"
      ? JOBS
      : JOBS.filter((j) => j.category === selectedCategory);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setTimeout(() => {
        setStatus(null);
        setSelectedJob(null);
        setForm({
          name: "",
          email: "",
          phone: "",
          portfolioUrl: "",
          experience: "",
          message: "",
        });
        setFileName("");
      }, 2500);
    }, 1200);
  };

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      {/* ============================================================ */}
      {/* 1. HERO HEADER                                               */}
      {/* ============================================================ */}
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[11px] sm:text-xs font-semibold text-[#0066FF] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>JOIN THE ATS JAIPUR ENGINEERING LAB</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-slate-900 tracking-tight leading-tight mb-3 font-display max-w-3xl mx-auto">
            Build The Future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              World-Class Engineers
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            We are looking for passionate engineers, system architects, and product designers who love clean code, zero-downtime systems, and cutting-edge AI.
          </p>

          {/* Developer Perks Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-10">
            {[
              {
                title: "Top-Tier Hardware",
                desc: "Latest Apple M-Series MacBook Pros with dual 4K monitors and ergonomic workstations.",
                icon: Laptop,
                badge: "HARDWARE",
              },
              {
                title: "Unlimited Learning Fund",
                desc: "100% sponsored AWS, Kubernetes, and AI certifications plus annual tech conference tickets.",
                icon: GraduationCap,
                badge: "EDUCATION",
              },
              {
                title: "Hackathon Fridays",
                desc: "Dedicated engineering time every Friday to build experimental AI and internal SaaS tools.",
                icon: Zap,
                badge: "INNOVATION",
              },
              {
                title: "Meritocracy & Equity",
                desc: "Transparent bi-annual performance promotions, performance bonuses, and long-term equity.",
                icon: Gift,
                badge: "GROWTH",
              },
            ].map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div
                  key={i}
                  className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-blue-100 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-inner">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        {perk.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1 font-display">
                      {perk.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. INTERACTIVE SKILL MATCHER & OPEN POSITIONS                */}
      {/* ============================================================ */}
      <section className="py-10 sm:py-14 bg-white border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1500px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200 text-xs font-semibold mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>ACTIVE OPENINGS &bull; JAIPUR HQ / HYBRID</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-display">
                Open Engineering Roles
              </h2>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Showing {filteredJobs.length} of {JOBS.length} positions
            </div>
          </div>

          {/* Interactive Skill Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#0066FF] text-white shadow-md scale-102"
                      : "bg-[#F8FAFC] text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-white"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Job Openings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-[#0066FF]/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold text-[#0066FF] px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                      {job.experience}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.location}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display group-hover:text-[#0066FF] transition-colors leading-tight">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {job.description}
                  </p>

                  {/* Day in the Life Snippet */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 mb-4 text-[11px] text-slate-600 leading-relaxed">
                    <strong className="text-slate-800 block mb-0.5">Day in the Life:</strong>
                    {job.dayInTheLife}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {job.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-lg bg-blue-50/70 border border-blue-100 text-[10px] font-semibold text-[#0066FF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-600 font-bold truncate max-w-[160px]">
                    {job.perks}
                  </span>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. APPLICATION MODAL                                         */}
      {/* ============================================================ */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 my-auto text-slate-900">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200 text-xs font-mono font-bold mb-2">
                APPLICATION &bull; {selectedJob.experience}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                Apply for {selectedJob.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Our engineering team reviews applications and responds within 48 hours.
              </p>
            </div>

            {status === "success" ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3 animate-bounce" />
                <h4 className="text-lg font-bold text-emerald-800">Application Submitted!</h4>
                <p className="text-xs text-emerald-600 mt-1">
                  Thank you, {form.name}. Our engineering lead will review your profile and reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="rahul@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">GitHub / Portfolio URL</label>
                    <input
                      type="url"
                      placeholder="https://github.com/yourname"
                      value={form.portfolioUrl}
                      onChange={(e) => setForm({ ...form, portfolioUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                    />
                  </div>
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Resume / CV (PDF or DOCX)</label>
                  <label className="border-2 border-dashed border-slate-200 hover:border-[#0066FF] rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition bg-slate-50">
                    <UploadCloud className="w-6 h-6 text-[#0066FF] mb-1" />
                    <span className="text-xs font-semibold text-slate-600">
                      {fileName ? fileName : "Click to select or drag resume here"}
                    </span>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Why do you want to join ATS? (Brief note)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the hardest engineering problem you solved recently..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:from-[#0052CC] hover:to-[#0040A8] transition cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
