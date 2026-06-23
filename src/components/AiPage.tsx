import React from "react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  text: string;
  icon?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, text, icon }) => {
  return (
    <article className="bg-white border border-teal-200 rounded-2xl p-6 shadow-md hover:shadow-teal-300/40 transition duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="text-teal-500 bg-teal-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center shrink-0">
          {icon ?? (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          )}
        </div>

        <h4 className="text-lg font-semibold text-teal-700 mt-1">{title}</h4>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </article>
  );
};

export default function ECommerceModernization() {
  return (
    <main className="min-h-screen bg-linear-to-b from-teal-50 via-white to-cyan-100 text-gray-900 py-16 md:py-32 px-4 font-serif">
      <div className="w-full">
        <header className="grid gap-8 lg:grid-cols-2 items-center mb-16">
          <div>
            <p className="inline-block text-sm text-teal-600 font-medium bg-teal-100 px-3 py-1 rounded-full mb-4">
              Case Study · Web Development
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-teal-800">
              E-Commerce Platform Modernization
            </h1>

            <p className="text-lg text-gray-700 mb-6 max-w-2xl">
              Modernizing legacy storefronts into scalable, AI-ready e-commerce
              platforms — faster checkouts, personalized merchandising,
              resilient infrastructure, and measurable revenue uplift.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-5 py-3 rounded-xl shadow-md transition duration-300 transform hover:scale-[1.02]">
                Request Demo
              </button>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 border border-teal-300 px-4 py-3 rounded-xl text-sm text-teal-700 hover:bg-teal-50 transition"
              >
                See Features
              </a>
            </div>


            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "+62%", label: "Conversion uplift" },
                { value: "-35%", label: "Infrastructure cost" },
                { value: "99.99%", label: "Availability SLA" },
                { value: "Real-time", label: "Analytics & personalization" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-teal-700">
                    {stat.value}
                  </p>

                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1400&auto=format&fit=crop"
              alt="Modern e-commerce design"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </header>
        <hr className="border-teal-100 my-10" />


        <section className="grid gap-8 lg:grid-cols-3 items-start mb-16">
          <div className="lg:col-span-2 bg-white border border-teal-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-teal-700">
              Overview
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We partnered with a top retail brand to modernize their monolithic
              e-commerce stack. The objective: migrate to a **composable,
              headless architecture**, enable AI-driven personalization, and
              reduce latency for global customers while cutting operational
              costs.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-teal-700">
              Key Challenges
            </h3>

            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Legacy checkout causing poor conversion and cart abandonment.
              </li>

              <li>
                Single-region hosting causing high latency for global markets.
              </li>

              <li>
                Limited instrumentation — no real-time insights for
                merchandising.
              </li>
              <li>Rigid catalog and slow release cycles.</li>
            </ul>
          </div>

          <aside className="bg-teal-50 border border-teal-200 rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-teal-700">
              Project Snapshot
            </h4>

            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Duration:</strong> 6 months
              </p>

              <p>
                <strong>Team:</strong> 14 engineers, 2 data scientists, 1
                product manager
              </p>

              <p>
                <strong>Stack:</strong> React, Node.js, Kubernetes, Redis,
                Postgres
              </p>

              <p>
                <strong>Outcome:</strong>
                <span className="font-bold text-teal-600">
                  62% conversion uplift
                </span>
                in 90 days
              </p>
            </div>
          </aside>
        </section>
        <hr className="border-teal-100 my-10" />
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-teal-800 text-center">
            Core Capabilities & Modern Features
          </h2>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Headless Commerce"
              text="Decoupled frontend and APIs for rapid experimentation — replace UX without touching backend commerce rules."
            />

            <FeatureCard
              title="AI Personalization"
              text="Real-time recommendations and personalized catalogs powered by hybrid models for speed and scalability."
            />

            <FeatureCard
              title="Fast Global CDN"
              text="Edge-rendered critical paths for sub-200ms TTFB across regions, with A/B testing at the edge."
            />

            <FeatureCard
              title="Scalable Microservices"
              text="Containerized services with autoscaling and circuit breakers for reliability under peak loads."
            />

            <FeatureCard
              title="Resilient Checkout"
              text="Modular checkout pipeline with optimized payment routing and resumable transactions."
            />

            <FeatureCard
              title="Observability & SRE"
              text="Distributed tracing, error budgets, and automated rollback for safe releases."
            />
          </div>
        </section>
        <hr className="border-teal-100 my-10" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-teal-800 text-center">
            Architecture Highlights
          </h2>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Data & AI Layer",
                desc: "Centralized event stream and model pipelines for real-time personalization.",
                points: [
                  "Event bus (Kafka/Kinesis)",
                  "Model registry & CI",
                  "Feature serving",
                ],
              },
              {
                title: "Platform & Infra",
                desc: "Kubernetes platform with Terraform IaC and multi-region failover.",
                points: [
                  "Terraform + GitOps",
                  "Autoscaler & failover",
                  "Canary deployments",
                ],
              },
              {
                title: "Frontend & UX",
                desc: "React SSR + edge rendering, accessible components, optimized images.",
                points: ["Headless CMS", "Image CDN", "Web Vitals monitoring"],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-teal-200 rounded-2xl p-6 shadow-sm"
              >
                <h4 className="text-lg font-semibold mb-3 text-teal-700">
                  {card.title}
                </h4>

                <p className="text-gray-700 text-sm mb-3">{card.desc}</p>

                <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                  {card.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <hr className="border-teal-100 my-10" />

        <section className="mb-16 grid gap-6 lg:grid-cols-2 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
              alt="merchandising dashboard"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-teal-700">
              Merchandising Dashboard
            </h3>

            <p className="text-gray-700 mb-4">
              Unified dashboard for performance, promotions, and analytics.
              Empower marketing teams to act independently with real-time
              insights.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600">Active A/B Tests</p>
                <p className="text-xl font-bold text-teal-700">12</p>
              </div>

              <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600">Avg. Order Value</p>

                <p className="text-xl font-bold text-teal-700">$124.50</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-teal-100 my-10" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-teal-800 text-center">
            Technology Stack
          </h2>


          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React",
              "Next.js",
              "Node.js",
              "GraphQL",
              "Postgres",
              "Redis",
              "Kubernetes",
              "Docker",
              "Terraform",
              "Kafka",
              "PyTorch",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-teal-50 border border-teal-200 text-sm text-teal-700 rounded-full font-medium whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
        <hr className="border-teal-100 my-10" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-teal-800 text-center">
            Customer Success
          </h2>


          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                quote:
                  "The migration was seamless — performance improved immediately, and our marketing team can now iterate promotions independently.",
                author: "VP Product, Retail Brand",
              },
              {
                quote:
                  "Operational overhead dropped significantly. The SRE automation saved hours during peak traffic events.",
                author: "Director of Engineering",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white border border-teal-200 p-6 rounded-2xl shadow-lg"
              >
                <p className="italic text-gray-700 mb-3 text-lg">“{t.quote}”</p>

                <p className="text-sm font-medium text-teal-700">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </section>
        <hr className="border-teal-100 my-10" />
        <footer className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-semibold text-teal-700 mb-3">
            Ready to modernize your e-commerce platform?
          </h3>

          <p className="text-gray-700 mb-6">
            Schedule a free technical assessment and get a roadmap for your
            modernization.
          </p>


          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <button className="w-full sm:w-auto bg-linear-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 transition duration-300">
              Request Assessment
            </button>

            <Link
              to="/projects" 
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-teal-300 text-teal-700 hover:bg-teal-100 transition duration-300"
            >
              View More Projects
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
