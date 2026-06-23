

import React from "react";

const FeatureCard: React.FC<{
  title: string;
  desc: string;
}> = ({ title, desc }) => (
  <div className="bg-white border border-blue-200 p-6 rounded-2xl hover:shadow-md hover:shadow-blue-100 transition">
    <h4 className="text-lg font-semibold text-blue-800 mb-2">{title}</h4>
    <p className="text-sm leading-relaxed text-gray-700">{desc}</p>
  </div>
);

export default function SaaSAnalyticsDashboard() {
  return (
    <main className="bg-linear-to-b from-blue-50 via-white to-blue-100 min-h-screen text-gray-900 py-32 px-4">
      <div className="w-full">


        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
          <div>
            <p className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full inline-block font-medium">
              SaaS · Case Study
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight text-blue-900">
              SaaS Analytics Dashboard Modernization
            </h1>
            <p className="text-gray-700 text-lg mb-6 max-w-xl">
              A real-time analytics platform empowering SaaS businesses with smart insights,
              automated alerts, and predictive analysis to boost retention and revenue.
            </p>

            <div className="grid grid-cols-3 gap-5 max-w-md">
              {[
                { label: "User Retention", value: "+120%" },
                { label: "Daily API Events", value: "2M+" },
                { label: "Core Uptime", value: "99.98%" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-xl font-bold text-blue-800">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md">
              Download Case Study
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
            alt="Analytics dashboard"
            className="rounded-2xl shadow-lg w-full h-96 object-cover"
          />
        </section>


        <section className="grid gap-8 lg:grid-cols-3 mb-20">
          <div className="lg:col-span-2 bg-white border border-blue-200 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We redesigned a legacy SaaS dashboard into a modular data platform.
              The modernized system integrates real-time analytics, dynamic reporting,
              trend prediction, and automated growth insights for enterprise clients.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">
              Quick Info
            </h4>
            <p className="text-sm text-gray-700 mb-1">Duration: 6 Months</p>
            <p className="text-sm text-gray-700 mb-1">Team: 8 Devs · 2 BI Engineers</p>
            <p className="text-sm text-gray-700 mb-1">Stack: React · Node.js · Kafka · MongoDB</p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">
            Key Product Highlights
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Real-time Data" desc="Sub-second dashboard updates for faster business decisions." />
            <FeatureCard title="Preset Templates" desc="BI-powered insights for churn, performance, and revenue analytics." />
            <FeatureCard title="User Funnels" desc="Track conversion flows and automate optimization insights." />
            <FeatureCard title="Cohort Analysis" desc="Measure lifetime value with behavioral segmentation." />
            <FeatureCard title="Predictive Models" desc="Machine learning forecasts future user and revenue growth." />
            <FeatureCard title="Custom Alerts" desc="Trigger KPI notifications for spikes or drops instantly." />
          </div>
        </section>


        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
          <img
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop"
            alt="Data visualization"
            className="w-full h-96 object-cover rounded-2xl shadow-md"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-900">
              Visual-First Insights
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We designed a clean, modular analytics interface that allows teams to
              explore and act on data interactively — with visual drilldowns, export options,
              and customizable dashboards.
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-600 leading-relaxed space-y-2">
              <li>Export to PDF, PPT, or CSV</li>
              <li>Multi-tenant data isolation</li>
              <li>Custom themes & role-based access</li>
            </ul>
          </div>
        </section>


        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {["React", "Node.js", "Kafka", "MongoDB", "Redis", "AWS", "GraphQL", "Docker"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-5 text-blue-800">
            Client Feedback
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "The best analytics upgrade we’ve made — our product leads love the new cohort insights.",
                author: "VP of Product, SaaS Unicorn",
              },
              {
                quote:
                  "The modern dashboard boosted analytics adoption across our org — faster, smarter decisions.",
                author: "Chief Data Officer, Enterprise Tech",
              },
            ].map((f, i) => (
              <blockquote
                key={i}
                className="bg-white border border-blue-200 p-6 rounded-2xl shadow-sm"
              >
                <p className="italic text-gray-700 mb-4">“{f.quote}”</p>
                <footer className="text-sm text-blue-700">— {f.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>


        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">FAQs</h2>
          <div className="space-y-4">
            {[
              {
                q: "Does the dashboard support role-based control?",
                a: "Yes. Admins manage granular permissions by teams, regions, and access zones.",
              },
              {
                q: "Can clients build custom reports?",
                a: "Absolutely. Users can create, save, and share reports using the visual editor.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-blue-50 border border-blue-200 p-4 rounded-lg"
              >
                <summary className="font-medium text-blue-800 cursor-pointer">
                  {faq.q}
                </summary>
                <p className="text-gray-700 text-sm mt-2">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        
        <section className="bg-white border border-blue-200 p-10 rounded-2xl text-center shadow-sm">
          <h3 className="text-2xl font-semibold mb-3 text-blue-900">
            Ready to scale data-driven success?
          </h3>
          <p className="text-gray-700 mb-6">
            Partner with us to build actionable analytics tools your customers love.
          </p>
          <button className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md">
            Start Your Project
          </button>
        </section>
      </div>
    </main>
  );
}
