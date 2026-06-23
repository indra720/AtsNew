import React from "react";
import {
  Pill,
  NotebookText,
  Calendar,
  MonitorCheck,
  Receipt,
  Brain,
  AreaChart,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";
interface ModuleCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}
const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  Icon,
}) => (
  <div className="bg-white border border-teal-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-teal-300/50 transition duration-300 transform hover:-translate-y-1">
    <div className="flex items-start gap-4 mb-4">
      <div className="bg-teal-100 p-3 rounded-xl w-14 h-14 flex items-center justify-center text-teal-700 shadow-inner">
        {Icon ? <Icon className="w-7 h-7" /> : <Pill className="w-7 h-7" />}
      </div>
      <div>
        <h4 className="text-xl font-bold text-teal-800 mt-1">{title}</h4>
      </div>
    </div>
    <p className="text-base text-gray-700 leading-relaxed">{description}</p>
  </div>
);
export default function App() {
  const stats = [
    { value: "99.98%", label: "System Uptime" },
    { value: "-40%", label: "Admin Overhead" },
    { value: "+30%", label: "Care Coordination Efficiency" },
    { value: "Real-time", label: "Clinical Alerts" },
  ];

  const coreModules = [
    {
      title: "Electronic Health Records (EHR)",
      description:
        "Unified patient record with clinical notes, medication, lab results, and a comprehensive audit trail.",
      Icon: NotebookText,
    },
    {
      title: "Scheduling & Workflow",
      description:
        "Automated appointment scheduling, intelligent patient triage rules, and clinician workload balancing.",
      Icon: Calendar,
    },
    {
      title: "Telemedicine & Remote Monitoring",
      description:
        "Secure, encrypted video consults, patient-provider messaging, and real-time vitals tracking integration.",
      Icon: MonitorCheck,
    },
    {
      title: "Revenue Cycle & Billing",
      description:
        "Automated claims management, seamless payer integration, and smart denials tracking for faster revenue.",
      Icon: Receipt,
    },
    {
      title: "Clinical Decision Support",
      description:
        "AI-driven alerts, personalized evidence-based order sets, and predictive models for proactive care.",
      Icon: Brain,
    },
    {
      title: "Analytics & Population Health",
      description:
        "Interactive dashboards for quality measures, risk analysis, resource utilization, and capacity planning.",
      Icon: AreaChart,
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-teal-50 via-white to-cyan-100 text-gray-900 py-16 md:py-32 px-4 font-serif antialiased">
      <div className="w-full">
        <header className="grid gap-10 lg:grid-cols-2 items-center mb-24">
          <div className="lg:pr-8">

            <p className="inline-block text-sm text-teal-600 font-medium bg-teal-100 px-4 py-1.5 rounded-full shadow-sm mb-4">
              Case Study · HIPAA Compliant Tech
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-teal-900">
              Unified Healthcare Management System
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              A secure, HIPAA-aligned platform that unifies clinical workflows,
              patient records, telehealth, and analytics to boost care quality
              and operational efficiency across the entire hospital network.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <button className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-teal-400/40 transition duration-300 transform hover:scale-105">
                <HeartHandshake className="w-5 h-5" />
                Request Demo
              </button>
              <a
                href="#modules"
                className="inline-flex items-center justify-center gap-2 border-2 border-teal-300 px-6 py-3.5 rounded-full text-base font-medium text-teal-700 hover:bg-teal-100 transition duration-300 shadow-sm"
              >
                See Core Modules
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-inner border border-teal-100">
              {stats.map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-extrabold text-teal-700 mb-0.5">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl transition duration-500">
            <img
              src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
              alt="Healthcare dashboard visual"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/1200x800/80CBC4/1E88E5?text=Secure+EHR+System";
              }}
            />
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-3 items-start mb-24">
          <div className="lg:col-span-2 bg-white border border-teal-200 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-teal-800">
              Project Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 border-l-4 border-teal-400 pl-4 italic">
              We built a modern, single-pane-of-glass Healthcare Management
              System to replace multiple fragmented legacy applications. The
              platform centralizes EHR, scheduling, billing, telemedicine, and
              analytics in a high-compliance, secure environment with granular
              role-based access.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3 text-teal-800">
              Primary Challenges Addressed
            </h3>
            <ul className="list-inside text-gray-700 space-y-2">
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 mr-2 shrink-0" />
                Fragmented patient records causing clinical workflow delays and
                errors.
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 mr-2 shrink-0" />
                Manual, labor-intensive scheduling and complex revenue cycle
                processes.
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 mr-2 shrink-0" />
                Limited or non-existent telehealth capabilities for remote
                patient care.
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 mr-2 shrink-0" />
                Navigating strict regulatory (HIPAA, HITECH) and audit
                requirements.
              </li>
            </ul>
          </div>

          <aside className="bg-teal-100 border border-teal-300 rounded-3xl p-8 shadow-xl">
            <h4 className="text-2xl font-bold mb-4 text-teal-800">
              Project Snapshot
            </h4>
            <div className="space-y-4 text-base text-gray-800">
              <p className="flex justify-between border-b border-teal-200 pb-2">
                <span className="font-semibold">Duration:</span>
                <span>7 months</span>
              </p>
              <p className="flex justify-between border-b border-teal-200 pb-2">
                <span className="font-semibold">Team:</span>
                <span>~17 specialists</span>
              </p>
              <p className="flex justify-between border-b border-teal-200 pb-2">
                <span className="font-semibold">Core Stack:</span>
                <span>React, Node.js, PostgreSQL</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Compliance:</span>
                <span className="text-teal-700 font-bold">HIPAA-ready</span>
              </p>
            </div>
          </aside>
        </section>

        <section id="modules" className="mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-teal-800">
            Platform Core Modules
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreModules.map((m, i) => (
              <ModuleCard
                key={i}
                title={m.title}
                description={m.description}
                Icon={m.Icon}
              />
            ))}
          </div>
        </section>

        <section className="mb-24 grid gap-10 lg:grid-cols-2 items-center">
          <div className="lg:order-2 rounded-3xl overflow-hidden shadow-2xl transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop"
              alt="doctor and patient collaborating on tablet"
              className="w-full h-64 sm:h-80 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/1200x800/50C2C7/ffffff?text=Operational+Impact";
              }}
            />
          </div>

          <div className="lg:order-1">
            <h3 className="text-3xl font-bold mb-4 text-teal-800">
              Measurable Operational Impact
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The system's unified nature immediately reduced administrative
              burden, accelerated revenue cycles, and improved patient
              throughput while maintaining strict regulatory compliance and
              auditable logs.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-teal-100 border-2 border-teal-300 p-6 rounded-xl text-center shadow-md">
                <p className="text-sm text-gray-600 uppercase tracking-wider mb-1">
                  Avg. Scheduling Time Reduction
                </p>
                <p className="text-4xl font-extrabold text-teal-700">3 mins</p>
              </div>
              <div className="bg-teal-100 border-2 border-teal-300 p-6 rounded-xl text-center shadow-md">
                <p className="text-sm text-gray-600 uppercase tracking-wider mb-1">
                  Claims Processing Cycle
                </p>
                <p className="text-4xl font-extrabold text-teal-700">-45%</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24 text-center">
          <h2 className="text-3xl font-bold mb-6 text-teal-800">
            Built on a Secure, Modern Stack
          </h2>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {[
              "React (TypeScript)",
              "Node.js (API Gateway)",
              "PostgreSQL (Encrypted)",
              "Docker & Kubernetes",
              "AWS (EKS, Lambda, RDS)",
              "Redis (Caching)",
              "FHIR (Health Interoperability)",
              "GraphQL (Data Fetching)",
            ].map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-teal-50 border border-teal-300 text-sm font-medium text-teal-700 rounded-full shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-800">
            Client Success Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                quote:
                  "The unified EHR finally gave our clinicians a single source of truth, drastically improving diagnostic speed and overall patient care experience. The auditability is key for compliance.",
                author:
                  "Dr. Evelyn Reed, Chief Medical Officer, Regional Hospital",
              },
              {
                quote:
                  "Integrating remote monitoring directly into the platform helped us flag high-risk patients earlier than ever before, leading to a measurable reduction in readmission rates.",
                author:
                  "Sarah Kim, Director of Care Management, Primary Care Network",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white border-2 border-teal-200 p-8 rounded-2xl shadow-xl transition duration-300 hover:border-teal-400"
              >
                <p className="text-xl text-gray-700 italic mb-4 leading-relaxed">
                  <span className="text-3xl font-serif text-teal-600 mr-2">
                    “
                  </span>
                  {t.quote}
                  <span className="text-3xl font-serif text-teal-600 ml-2">
                    ”
                  </span>
                </p>
                <p className="text-base font-semibold text-teal-800 border-t border-teal-200 pt-3 mt-4">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-teal-100 border-2 border-teal-300 rounded-3xl p-10 sm:p-12 text-center shadow-2xl shadow-teal-300/40">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-teal-900">
            Ready to modernize clinical operations?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Book a technical assessment today and receive a custom digital
            transformation roadmap tailored for your organization's compliance
            and growth needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:shadow-teal-400/50 transition duration-300 transform hover:scale-105 w-full sm:w-auto">
              Request Assessment
            </button>
            <a
              href="#" 
              className="px-8 py-4 rounded-full border-2 border-teal-300 text-teal-700 font-bold hover:bg-teal-200 transition duration-300 w-full sm:w-auto"
            >
              Contact Sales
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
