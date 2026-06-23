import {
  ArrowRight,
  Star,
  Users,
  Briefcase,
  Clock,
  Zap,
  Shield,
  Smartphone,
  ChartNoAxesColumnIncreasing,
  Cloud,
  Heart,
} from "lucide-react";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  industry: string;
  rating: number;
  users: string;
  timeline: string;
  icon: React.ReactNode;
}
const projects: Project[] = [
  {
    title: "E-Commerce Platform Modernization",
    description:
      "Transforming retail with a high-performance cloud commerce solution built on a microservices architecture.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "/ai-page",
    category: "Web Application",
    industry: "Retail",
    rating: 4.8,
    users: "20K+",
    timeline: "9 Months",
    icon: <Zap className="h-5 w-5 text-white" />,
  },
  {
    title: "Healthcare Management System",
    description:
      "Next-gen healthcare data analytics and patient care portal for seamless hospital operations and reporting.",
    image:
      "https://images.unsplash.com/photo-1657727534685-36b09f84e193?w=1200&auto=format&fit=crop&q=80",
    link: "/health-page",
    category: "SaaS Platform",
    industry: "Healthcare",
    rating: 4.9,
    users: "5K+",
    timeline: "12 Months",
    icon: <Heart className="h-5 w-5 text-white" />,
  },
  {
    title: "FinTech Mobile Banking App",
    description:
      "Secure mobile-first banking app with fast transactions, biometric login, and personalized financial insights.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop&q=80",
    link: "/fintech-page",
    category: "Mobile App",
    industry: "Finance",
    rating: 4.7,
    users: "1M+",
    timeline: "6 Months",
    icon: <Smartphone className="h-5 w-5 text-white" />,
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Full visibility into sales revenue, marketing KPIs, and user behavior through real-time, customizable dashboards.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=1200&auto=format&fit=crop&q=80",
    link: "/saas-page",
    category: "Data Analytics",
    industry: "B2B SaaS",
    rating: 4.6,
    users: "8K+",
    timeline: "4 Months",
    icon: <ChartNoAxesColumnIncreasing className="h-5 w-5 text-white" />,
  },
  {
    title: "Travel Booking Platform",
    description:
      "Smart travel booking platform integrating flight, hotel, and rental services with AI-driven price prediction.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    link: "/travel-page",
    category: "Cloud Solution",
    industry: "Travel & Hospitality",
    rating: 4.5,
    users: "500K+",
    timeline: "10 Months",
    icon: <Cloud className="h-5 w-5 text-white" />,
  },
  {
    title: "AI-Powered Chat Assistant",
    description:
      "A context-aware customer support automation tool, providing instant and accurate responses 24/7.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    link: "/aichat-page",
    category: "Artificial Intelligence",
    industry: "Customer Service",
    rating: 4.9,
    users: "30K+",
    timeline: "5 Months",
    icon: <Shield className="h-5 w-5 text-white" />,
  },
];



const Projects: FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setactiveCategory] = useState("All");
  const filteredProjects: Project[] = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);
  return (
    <>

      <section className="relative pt-4 **pb-20 md:pb-40** bg-linear-to-br from-teal-50 via-white to-white text-gray-900 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[450px] h-[450px] bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-teal-600">Projects</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-16">
            At <span className="font-semibold ml-1 text-teal-600">ATS Global Tech</span>
            , we build impactful digital solutions that empower organizations,
            redefine user experiences, and drive sustainable business growth
            across industries.
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left mb-4">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-teal-100 transition-all duration-300 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                alt="Web Development"
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-2">
                  E-Commerce Platform
                </h3>

                <p className="text-gray-700 text-sm">
                  A scalable online platform built with React and Next.js,
                  enabling seamless global shopping experiences.
                </p>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-teal-100 transition-all duration-300 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
                alt="Mobile App"
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-2">
                  FinTech Mobile App
                </h3>

                <p className="text-gray-700 text-sm">
                  A cross-platform app for financial analytics, offering
                  real-time data visualization and performance insights.
                </p>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-teal-100 transition-all duration-300 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=900&q=80"
                alt="Analytics Dashboard"
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-2">
                  AI Analytics Dashboard
                </h3>

                <p className="text-gray-700 text-sm">
                  A data intelligence dashboard that provides predictive
                  insights using AI and machine learning algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Happy client section  */}
      <section className="py-16 bg-white text-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-18">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-stretch justify-around">
            <div className="bg-white shadow-lg border border-teal-100 p-6 rounded-2xl flex flex-col items-center justify-center transition-all transform duration-300 cursor-pointer hover:scale-105 h-full">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                15+
              </div>

              <div className="text-gray-700">Projects Completed</div>
            </div>

            <div className="bg-white shadow-lg border border-teal-100 p-6 rounded-2xl flex flex-col items-center justify-center transition-all transform duration-300 cursor-pointer hover:scale-105 h-full">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                50+
              </div>
              <div className="text-gray-700">Happy Clients</div>
            </div>

            <div className="bg-white shadow-lg border border-teal-100 p-6 rounded-2xl flex flex-col items-center justify-center transition-all transform duration-300 cursor-pointer hover:scale-105 h-full">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                5+
              </div>

              <div className="text-gray-700">Industries Served</div>
            </div>

            <div className="bg-white shadow-lg border border-teal-100 p-6 rounded-2xl flex flex-col items-center justify-center transition-all transform duration-300 cursor-pointer hover:scale-105 h-full">              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
              98%
            </div>
              <div className="text-gray-700">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-teal-50 text-gray-900">
        <div className="w-full px-4 sm:px-6 ">

          <div className="flex flex-wrap justify-center gap-2">
            {[
              "All",
              "Web Application",
              "Mobile App",
              "Data Analytics",
              "SaaS Platform",
              "Cloud Solution",
              "Artificial Intelligence",
            ].map((category, i) => (
              <button
                key={i} onClick={() => setactiveCategory(category)}
                className={`inline-flex items-center justify-center gap-2 text-sm font-medium h-9 rounded-md px-3 transition ${activeCategory === category
                  ? "bg-linear-to-r from-teal-400 to-cyan-500 text-white" // Active Button
                  : "border border-teal-300 text-teal-700 hover:bg-teal-100" // Inactive Button
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-2 md:py-6 bg-white text-gray-900">
        <div className="w-full px-4 sm:px-8 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-700">Our Projects</h2>

            <p className="mt-4 text-gray-700">
              A selection of our most impactful work, showcasing innovation,
              design, and results.
            </p>
          </div>


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.title}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col border border-gray-100"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-t-2xl w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 flex flex-col grow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-teal-500 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                          {project.icon}
                        </div>
                        <span className="inline-flex items-center rounded-full border border-teal-300 px-2.5 py-0.5 text-xs font-semibold text-teal-600">
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-center space-x-1 text-teal-600 text-sm">
                        <Star className="h-4 w-4 fill-teal-500 stroke-teal-500" />
                        <span className="font-semibold">{project.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-teal-700 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 mb-4 text-sm grow">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-3 mt-auto">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4 text-teal-500" />
                        {project.industry}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-teal-500" />
                        {project.timeline}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-teal-500" />
                        {project.users}
                      </span>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0">
                    <button
                      onClick={() => navigate(project.link)}
                      className="text-teal-500 hover:text-teal-700 font-medium inline-flex items-center transition"
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="py-10 bg-teal-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-700">
            Ready to Start Your Project?
          </h2>

          <p className="text-lg mb-8 text-gray-700">
            Let's discuss your project requirements and create something amazing
            together. We're excited to bring your vision to life.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-teal-500 text-white hover:bg-teal-600 h-11 rounded-md px-8 py-3 w-full sm:w-auto">
                Start Your Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2 h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </a>

            <a href="/services">
              <button className="inline-flex items-center justify-center gap-2 border border-teal-400 text-teal-600 hover:bg-teal-100 h-11 rounded-md px-8 py-3 w-full sm:w-auto">
                View Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
