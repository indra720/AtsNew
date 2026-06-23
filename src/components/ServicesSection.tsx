"use client";

import React, { FC } from "react";
import {
  Star,
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
  CircleCheckBig,
  ArrowRight,
  ClipboardCheck,
  Lightbulb,
  Wrench,
  Rocket,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}
const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  price,
  features,
  icon,
  popular,
}) => (
  <div className="rounded-lg bg-white/60 backdrop-blur-md text-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-200 relative hover:-translate-y-1">
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="inline-flex items-center rounded-full text-xs font-semibold bg-teal-500 text-white px-4 py-1">
          <Star className="h-3 w-3 mr-1" /> Popular
        </div>
      </div>
    )}
    <div className="p-6 flex flex-col h-full">
      {" "}

      <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 grow">{description}</p>{" "}

      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-700">

            <CircleCheckBig className="h-4 w-4 text-teal-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      <p className="text-teal-600 font-semibold mb-4">Starting from ${price}</p>

      <button className="w-full bg-teal-500 hover:bg-teal-600 transition rounded-md py-2 text-white font-medium flex items-center justify-center gap-2 mt-auto">
        {" "}

        Learn More <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </div>
);
const servicesData: ServiceCardProps[] = [
  {
    title: "Custom Software Development",
    description:
      "Fully tailored software built for business growth, addressing unique operational requirements and scalability demands.",
    price: "25,000",
    features: [
      "Full-stack development",
      "API integration",
      "Testing & deployment",
      "Maintenance",
    ],
    icon: <Code className="h-6 w-6 text-white" />,
    popular: true,
  },
  {
    title: "Mobile App Development",
    description:
      "iOS & Android apps with smooth UI and performance, designed for maximum reach and user engagement across devices.",
    price: "18,000",
    features: [
      "Cross-platform options",
      "User-friendly design",
      "Push notifications",
      "App publishing",
    ],
    icon: <Smartphone className="h-6 w-6 text-white" />,
  },
  {
    title: "Web Development",
    description:
      "High-performance websites optimized for conversion, SEO, and lightning-fast loading speeds on any device.",
    price: "13,000",
    features: [
      "Responsive design",
      "SEO Optimization",
      "High performance",
      "Secure hosting",
    ],
    icon: <Globe className="h-6 w-6 text-white" />,
  },
  {
    title: "Database Solutions",
    description:
      "Secure, scalable and optimized database systems that ensure data integrity and fast access for mission-critical applications.",
    price: "12,000",
    features: [
      "Performance tuning",
      "Backup strategies",
      "Data migration",
      "Admin dashboards",
    ],
    icon: <Database className="h-6 w-6 text-white" />,
  },
  {
    title: "Cloud Architecture",
    description:
      "Cloud hosting, infrastructure & DevOps automation for resilient and cost-effective operations on platforms like AWS and Azure.",
    price: "24,000",
    features: [
      "Cloud migration",
      "CI/CD automation",
      "Monitoring & alerts",
      "Serverless deployment",
    ],
    icon: <Cloud className="h-6 w-6 text-white" />,
    popular: true,
  },
  {
    title: "Cybersecurity",
    description:
      "Protection against evolving threats and vulnerabilities, ensuring compliance and robust security posture for your digital assets.",
    price: "23,000",
    features: [
      "Security audits",
      "Risk assessments",
      "Implementation",
      "Compliance",
    ],
    icon: <Shield className="h-6 w-6 text-white" />,
  },
];
const processSteps = [
  {
    icon: <Lightbulb className="h-8 w-8 text-teal-500" />,
    title: "Discovery",
    desc: "We deeply understand your goals, unique needs, and technical challenges.",
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-teal-500" />,
    title: "Planning",
    desc: "We design a comprehensive, smart strategy and blueprint tailored to your business vision.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-teal-500" />,
    title: "Development",
    desc: "We meticulously build high-quality, scalable solutions using agile methodologies.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-teal-500" />,
    title: "Launch & Support",
    desc: "We seamlessly deploy and provide dedicated long-term support and maintenance.",
  },
];
const romanStyle: React.CSSProperties = {
  fontFamily: "'Times New Roman', serif",
  fontWeight: 700,
};
const ServicesSection: FC = () => (
  <main className="bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900 min-h-screen ">

    <section className="bg-gray-200 text-center py-14 px-4">
      {" "}

      <h1
        className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-gray-900"
        style={romanStyle}
      >
        Our <span className="text-teal-600">Services</span>
      </h1>
      <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-700 mb-8 md:mb-12">
        {" "}

        Professional solutions that help your business thrive in the digital
        world. We build, scale, and secure your digital assets.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols lg:grid-cols-4 gap-6 w-full">

        <div className="bg-gray-900 text-gray-200 p-6 md:p-8 rounded-xl shadow-lg border border-gray-700 hover:scale-[1.03] transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-teal-600">
            Web Development
          </h3>
          <p className="text-sm md:text-base">
            Modern, responsive, and high-performing websites built using the
            latest technologies like React, Next.js, and Tailwind CSS.
          </p>
        </div>


        <div className="bg-gray-900 text-gray-200 p-6 md:p-8 rounded-xl shadow-lg border border-gray-700 hover:scale-[1.03] transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-teal-600">
            Mobile App Development
          </h3>
          <p className="text-sm md:text-base">
            Cross-platform mobile apps for Android and iOS that provide seamless
            user experiences and strong performance.
          </p>
        </div>


        <div className="bg-gray-900 text-gray-200 p-6 md:p-8 rounded-xl shadow-lg border border-gray-700 hover:scale-[1.03] transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-teal-600">
            AI & Automation
          </h3>
          <p className="text-sm md:text-base">
            Harness the power of Artificial Intelligence and automation to
            streamline business operations and make data-driven decisions.
          </p>
        </div>


        <div className="bg-gray-900 text-gray-200 p-6 md:p-8 rounded-xl shadow-lg border border-gray-700 hover:scale-[1.03] transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-teal-600">
            Cloud Solutions
          </h3>
          <p className="text-sm md:text-base">
            Secure, scalable, and reliable cloud infrastructure setup and
            management using AWS, Azure, and Google Cloud.
          </p>
        </div>


        <div className="bg-gray-900 text-gray-200 p-6 md:p-8 rounded-xl shadow-lg border border-gray-700 hover:scale-[1.03] transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-teal-600">
            UI/UX Design
          </h3>
          <p className="text-sm md:text-base">
            Beautiful, user-focused interfaces that enhance usability and ensure
            your digital products stand out visually.
          </p>
        </div>


        <div className="bg-gray-900 text-gray-200 p-6 md:p-8 rounded-xl shadow-lg border border-gray-700 hover:scale-[1.03] transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-teal-600">
            Digital Marketing
          </h3>
          <p className="text-sm md:text-base">
            Comprehensive SEO, branding, and social media strategies to help
            your business grow and reach the right audience.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12">
        <a href="/contact">
          <button className="w-full sm:w-auto font-bold bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-md flex items-center justify-center gap-2 text-white shadow-lg">
            Get Started <ArrowRight className="h-5 w-5" />
          </button>
        </a>
        <a href="/projects">
          <button className="w-full sm:w-auto border border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-md shadow-md">
            View Our Work
          </button>
        </a>
      </div>
    </section>

    <section className="py-16  px-4 w-full">
      <h2
        className="text-center text-3xl md:text-4xl font-bold mb-10 md:mb-12"
        style={romanStyle}
      >
        Detailed Service Offerings
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {servicesData.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>


    <section className="py-6 border-t border-teal-200/50">

      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-gray-800"
        style={romanStyle}
      >
        Our Simple 4-Step Process
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full px-4">
        {processSteps.map((step, i) => (
          <div key={i} className="text-center">

            <div className="bg-white/70 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 border border-teal-300 shadow-md">
              {step.icon}
            </div>

            <h3 className="text-xl font-semibold text-teal-600 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>


    <section className="py-16 md:py-20 text-center bg-teal-50/50">

      <h2
        className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
        style={romanStyle}
      >
        Ready to build your future?
      </h2>
      <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Let's transform your brilliant idea into an impactful, high-performing
        digital product today.
      </p>

      <a href="/contact">
       
        <button className="bg-teal-600 hover:bg-teal-700 px-10 py-4 rounded-lg font-semibold text-white flex items-center gap-2 mx-auto transition shadow-xl hover:shadow-2xl">
          Get Free Consultation <ArrowRight className="h-5 w-5" />
        </button>
      </a>
    </section>
  </main>
);

export default ServicesSection;
