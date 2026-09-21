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
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface Job {
  title: string;
  image: string;
  description: string;
  tags: string[];
  location: string;
}

const jobs: Job[] = [
  {
    title: "Senior Full Stack Developer",
    image: "https://placehold.co/600x400/0f172a/00f2fe?text=Full+Stack",
    description: "Lead the architecture and implementation of scalable web applications, mentor junior developers, and engineer modern React and Node.js solutions.",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
    location: "Jaipur, Rajasthan (Hybrid)",
  },
  {
    title: "UI/UX Product Designer",
    image: "https://placehold.co/600x400/0f172a/6366f1?text=UI+UX+Design",
    description: "Create intuitive, aesthetically superior digital experiences for enterprise web and mobile platforms, working closely with engineering leads.",
    tags: ["Figma", "Design Systems", "Prototyping", "User Research"],
    location: "Jaipur, Rajasthan (Hybrid)",
  },
  {
    title: "Cloud DevOps Engineer",
    image: "https://placehold.co/600x400/0f172a/3b82f6?text=Cloud+DevOps",
    description: "Design and maintain resilient multi-region cloud infrastructure, automate CI/CD pipelines, and guarantee high-availability Kubernetes deployments.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    location: "Jaipur, Rajasthan (Hybrid)",
  },
  {
    title: "Lead Data Scientist / AI Engineer",
    image: "https://placehold.co/600x400/0f172a/a855f7?text=Data+Science",
    description: "Analyze complex enterprise data sets, train predictive machine learning models, and implement production-ready LLM automation pipelines.",
    tags: ["Python", "Machine Learning", "SQL", "TensorFlow", "PyTorch"],
    location: "Jaipur, Rajasthan (Hybrid)",
  },
  {
    title: "Technical Product Manager",
    image: "https://placehold.co/600x400/0f172a/f59e0b?text=Product+Strategy",
    description: "Drive product vision, roadmap strategy, and sprint execution for our key platforms, working cross-functionally across design and engineering.",
    tags: ["Agile/Scrum", "Tech Roadmap", "Analytics", "System Strategy"],
    location: "Jaipur, Rajasthan (Hybrid)",
  },
  {
    title: "Cybersecurity Specialist",
    image: "https://placehold.co/600x400/0f172a/10b981?text=Security+Specialist",
    description: "Perform penetration testing, zero-trust infrastructure audits, vulnerability remediation, and ensure compliance with SOC2 and ISO standards.",
    tags: ["Penetration Testing", "CISSP", "Zero-Trust", "Compliance"],
    location: "Jaipur, Rajasthan (Hybrid)",
  },
];

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setTimeout(() => {
        setStatus(null);
        setSelectedJob(null);
        setForm({ name: "", email: "", phone: "", experience: "", message: "" });
        setFileName("");
      }, 3000);
    }, 1200);
  };

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      {/* Header */}
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-xs font-mono font-bold text-[#0066FF] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOIN OUR INNOVATION HUB</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A1629] tracking-tight font-display mb-6">
            Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">ATS GLOBAL TECH</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-sans">
            We are looking for exceptional engineers, architects, and designers to build transformative software systems for global leaders.
          </p>

          {/* Perks Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-20">
            {[
              { title: "Work-Life Synergy", desc: "Flexible hybrid working options, generous time off, and respect for personal time.", icon: Coffee },
              { title: "Continuous Learning", desc: "Annual education stipends, conference tickets, and full access to certification courses.", icon: GraduationCap },
              { title: "Comprehensive Wellness", desc: "Premium health insurance for you and your dependents plus gym allowances.", icon: Heart },
              { title: "Equity & Fast Growth", desc: "Merit-driven promotion tracks, performance bonuses, and long-term equity options.", icon: Gift },
            ].map((perk, i) => {
              const Icon = perk.icon;
              return (
                <Card3D key={i} intensity={8} className="cloud-card p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] mb-4 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-2 font-display">{perk.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{perk.desc}</p>
                </Card3D>
              );
            })}
          </div>

          {/* Open Roles */}
          <div className="text-left mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-[#0A1629] font-display">
              Open Positions (Jaipur HQ / Hybrid)
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-sans">Select an opening to review requirements and submit your application.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {jobs.map((job, idx) => (
              <Card3D
                key={idx}
                intensity={10}
                className="cloud-card p-6 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#0066FF] font-mono font-bold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}</span>
                  </div>

                  <h3 className="text-xl font-black text-[#0A1629] mb-2 font-display group-hover:text-[#0066FF] transition">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {job.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-[#EBF5FF] border border-blue-200 text-[10px] font-mono font-bold text-[#0066FF]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_4px_16px_rgba(0,102,255,0.25)] transition duration-300 mt-auto cursor-pointer"
                >
                  <span>Apply For Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-white/95 border border-blue-200 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(0,102,255,0.2)] backdrop-blur-2xl">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 rounded-full bg-blue-50 hover:bg-blue-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-black text-[#0A1629] font-display mb-1">
              Apply for {selectedJob.title}
            </h3>
            <p className="text-xs text-[#0066FF] font-semibold mb-6">{selectedJob.location}</p>

            {status === "success" ? (
              <div className="p-6 text-center text-[#0066FF] space-y-2">
                <CheckCircle className="w-12 h-12 text-[#0066FF] mx-auto" />
                <h4 className="text-lg font-black text-slate-900 font-display">Application Transmitted!</h4>
                <p className="text-xs text-slate-600">Thank you! Our recruitment team will review your resume and contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1 uppercase">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-[#F0F7FF]/60 border border-blue-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:bg-white transition"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1 uppercase">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-[#F0F7FF]/60 border border-blue-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1 uppercase">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 9999999999"
                      className="w-full bg-[#F0F7FF]/60 border border-blue-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1 uppercase">Years of Relevant Experience *</label>
                  <input
                    type="text"
                    required
                    value={form.experience}
                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    placeholder="e.g. 5+ Years"
                    className="w-full bg-[#F0F7FF]/60 border border-blue-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1 uppercase">Resume / CV (PDF / DOCX) *</label>
                  <label className="border-2 border-dashed border-blue-200 hover:border-[#0066FF] rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer bg-[#F0F7FF]/40 hover:bg-blue-50/70 transition">
                    <UploadCloud className="w-6 h-6 text-[#0066FF] mb-1" />
                    <span className="text-xs text-slate-600 font-medium">{fileName || "Click to upload your resume"}</span>
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) setFileName(e.target.files[0].name);
                      }}
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1 uppercase">Brief Introduction</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Why are you excited to join ATS Global Tech?"
                    className="w-full bg-[#F0F7FF]/60 border border-blue-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:bg-white transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_6px_20px_rgba(0,102,255,0.3)] transition flex items-center justify-center gap-2 mt-4 cursor-pointer"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Application"}
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