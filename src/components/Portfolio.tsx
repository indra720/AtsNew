import { FC, useState } from "react";
import {
  ExternalLink,
  Zap,
  Smartphone,
  Cloud,
  Heart,
  Brain,
  Lightbulb,
  Star,
  Users,
  Briefcase,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface Project {
  category: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  rating: number;
  users: string;
  timeline: string;
  industry: string;
}

const projects: Project[] = [
  {
    category: "Web Development",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard for global scale.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=672&h=375&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "TensorFlow"],
    link: "/work/projects",
    rating: 4.8,
    users: "20K+",
    timeline: "9 Months",
    industry: "Retail & Ecom",
  },
  {
    category: "Mobile App",
    title: "FinTech Mobile App",
    description:
      "Cross-platform mobile banking application with biometric authentication, real-time transactions, and advanced security features on Flutter/React Native.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=672&h=375&fit=crop",
    techStack: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    link: "/work/projects",
    rating: 4.9,
    users: "1M+",
    timeline: "6 Months",
    industry: "FinTech",
  },
  {
    category: "Cloud Solutions",
    title: "AI Analytics Dashboard",
    description:
      "A unified AI analytics platform providing real-time data insights, predictive modeling, and scalable cloud infrastructure for enterprise users.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=672&h=375&fit=crop",
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform"],
    link: "/work/projects",
    rating: 4.7,
    users: "5K+",
    timeline: "12 Months",
    industry: "Enterprise IT",
  },
  {
    category: "Healthcare Tech",
    title: "Patient Monitoring System",
    description:
      "HIPAA-compliant healthcare analytics platform with real-time patient monitoring, secure data handling, and predictive health insights.",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    techStack: ["Python", "React", "PostgreSQL", "Docker"],
    link: "/work/projects",
    rating: 4.6,
    users: "8K+",
    timeline: "4 Months",
    industry: "Healthcare",
  },
  {
    category: "AI & ML",
    title: "Marketing Automation Engine",
    description:
      "AI-powered marketing automation platform with personalized email campaigns, lead scoring, customer segmentation, and performance optimization.",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=672&h=375&fit=crop",
    techStack: ["Python", "TensorFlow", "React", "MongoDB"],
    link: "/work/projects",
    rating: 4.9,
    users: "30K+",
    timeline: "5 Months",
    industry: "Marketing Tech",
  },
  {
    category: "IoT Solutions",
    title: "Smart City Management",
    description:
      "IoT platform for smart city initiatives with real-time sensor data, predictive maintenance, and energy optimization for large infrastructure.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=672&h=375&fit=crop",
    techStack: ["Node.js", "MQTT", "PostgreSQL", "AWS IoT"],
    link: "/work/projects",
    rating: 4.5,
    users: "500K+",
    timeline: "10 Months",
    industry: "Smart City",
  },
];

interface Tech {
  name: string;
  image: string;
}

const technologies: Tech[] = [
  {
    name: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100",
  },
  {
    name: "Node.js",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100",
  },
  {
    name: "Python",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100",
  },
  {
    name: "Java",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100",
  },
  {
    name: "TypeScript",
    image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=100",
  },
  {
    name: "PHP",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=100",
  },
  {
    name: "Flutter",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100",
  },
  {
    name: "React Native",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100",
  },
  {
    name: "MySQL",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100",
  },
  {
    name: "HTML",
    image:
      "https://plus.unsplash.com/premium_photo-1685086785230-2233cf5d8f28?w=600",
  },
  {
    name: "CSS",
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=600",
  },
  {
    name: "JavaScript",
    image: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80",
  },
  {
    name: "Next.js",
    image:
      "https://plus.unsplash.com/premium_photo-1669530958591-15cbad83785b?w=600",
  },
  {
    name: "Django",
    image: "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?w=600",
  },
  {
    name: "AI",
    image:
      "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=600",
  },
  {
    name: "Machine Learning",
    image:
      "https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=600",
  },
];
const PRIMARY_COLOR = "teal-500";
const HOVER_COLOR = "teal-600";
const ACCENT_TEXT = "text-teal-600";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Web Development":
      return <Zap className={`h-5 w-5 text-white`} />;
    case "Mobile App":
      return <Smartphone className={`h-5 w-5 text-white`} />;
    case "Cloud Solutions":
      return <Cloud className={`h-5 w-5 text-white`} />;
    case "Healthcare Tech":
      return <Heart className={`h-5 w-5 text-white`} />;
    case "AI & ML":
      return <Brain className={`h-5 w-5 text-white`} />;
    case "IoT Solutions":
      return <Lightbulb className={`h-5 w-5 text-white`} />;
    default:
      return null;
  }
};

const Portfolio: FC = () => {

  const [activeCategory, setactiveCategory] = useState("All");
  const filteredProjects: Project[] = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);
  return (
    <>
      <section
        className={`relative flex flex-col items-center justify-center pt-0 pb-16 min-h-[200px] overflow-hidden text-gray-900 bg-linear-to-br from-teal-50 to-blue-50`}
      >
        <div className="w-full">
          <div className="pt-6 relative z-10 text-center px-6 w-full">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Our
              <span className={`${ACCENT_TEXT} drop-shadow-sm ml-1`}>Portfolio</span>
            </h1>

            <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed mb-8">
              At **ATS Global Tech**, we build impactful digital solutions that
              empower organizations and drive business growth.
            </p>


            <div className="max-w-7xl mx-auto ">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                <li className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                  <CheckCircle
                    className={`h-5 w-5 mt-1 text-${PRIMARY_COLOR} shrink-0`}
                  />

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Innovative Design
                    </h4>

                    <p className="text-sm text-gray-500">
                      Focus on UX/UI that converts and delights users.
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                  <CheckCircle
                    className={`h-5 w-5 mt-1 text-${PRIMARY_COLOR} shrink-0`}
                  />

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Scalable Solutions
                    </h4>

                    <p className="text-sm text-gray-500">
                      Built on modern, cloud-native architecture.
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                  <CheckCircle
                    className={`h-5 w-5 mt-1 text-${PRIMARY_COLOR} shrink-0`}
                  />

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Data-Driven Growth
                    </h4>

                    <p className="text-sm text-gray-500">
                      Integration of AI/ML for actionable insights.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-gray-900 border-t border-gray-100">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            ["15+", "Projects Completed"],
            ["50+", "Happy Clients"],
            ["50+", "Team Members"],
            ["7", "Years Experience"],
            ["100%", "Client Satisfaction"],
            ["24/7", "Support Available"],
          ].map(([num, label]) => (
            <div key={label} className="bg-white shadow-lg border border-teal-100 p-6 rounded-2xl flex flex-col items-center justify-center transition-all transform duration-300 cursor-pointer hover:scale-105 h-full">
              <div className={`text-4xl font-bold ${ACCENT_TEXT} mb-2`}>
                {num}
              </div>

              <div className="text-gray-600 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-50 text-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          {[
            "All",
            "Web Development",
            "Mobile App",
            "Cloud Solutions",
            "Healthcare Tech",
            "AI & ML",
            "IoT Solutions",
          ].map((category, i) => (
            <button
              key={i} onClick={() => setactiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${activeCategory === category
                ? `bg-${PRIMARY_COLOR} text-white shadow-md hover:bg-${HOVER_COLOR}`
                : `border border-gray-300 text-gray-700 hover:bg-teal-50 hover:border-${PRIMARY_COLOR}`
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="py-0 bg-white text-gray-900" id="portfolio">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            More Featured Case Studies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.title}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5 flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover"
                    />

                    <div
                      className={`absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm p-3 text-center`}
                    >
                      <h3 className="text-lg font-bold text-gray-800">
                        {project.title}
                      </h3>
                    </div>
                  </div>


                  <div className="p-6 pt-2 flex flex-col grow">
                    <div className="flex items-center justify-between mb-3 border-b pb-3">
                      <div className="flex items-center gap-2">

                        <div
                          className={`p-1 rounded-full bg-teal-500 shrink-0`}
                        >
                          {getCategoryIcon(project.category)}
                        </div>

                        <span
                          className={`text-xs font-semibold ${ACCENT_TEXT} uppercase tracking-wider`}
                        >
                          {project.category}
                        </span>
                      </div>

                      <div
                        className={`flex items-center space-x-1 ${ACCENT_TEXT} text-sm`}
                      >
                        <Star
                          className={`h-4 w-4 fill-teal-500 stroke-teal-500`}
                        />

                        <span className="font-bold">{project.rating}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 grow">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 text-xs text-gray-500 border-y py-3 mb-4">
                      <div className="flex flex-col items-center">
                        <Briefcase className={`h-4 w-4 ${ACCENT_TEXT}`} />

                        <span className="font-medium mt-1 text-center">
                          {project.industry}
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <Users className={`h-4 w-4 ${ACCENT_TEXT}`} />

                        <span className="font-medium mt-1 text-center">
                          {project.users}
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <Clock className={`h-4 w-4 ${ACCENT_TEXT}`} />

                        <span className="font-medium mt-1 text-center">
                          {project.timeline}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-teal-50 text-teal-700 text-xs font-medium px-3 py-1 rounded-full border border-teal-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className={`inline-flex items-center justify-center w-full bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white text-sm font-medium rounded-lg px-4 py-2 transition shadow-md shadow-teal-200 mt-auto`}
                    >
                      View Project Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
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

      <section id="technologies" className="py-6 bg-teal-50 text-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold ${ACCENT_TEXT} mb-4`}>
            Technologies We Master
          </h2>

          <p className="text-xl text-gray-600 mb-12">
            We leverage the latest technologies to deliver cutting-edge,
            scalable solutions across all major platforms.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="text-center group p-3 rounded-lg hover:bg-white transition duration-300 shadow-sm border border-transparent hover:border-teal-200"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-16 h-16 mx-auto mb-2 rounded-full object-cover transition-transform group-hover:scale-110 shadow-lg border-2 border-teal-500/30"
                />

                <p className="text-gray-700 font-medium mt-2">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 bg-${PRIMARY_COLOR} text-white text-center`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>

          <p className="text-lg mb-8">
            Let's discuss your vision and explore how our expertise can drive
            your next success story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="w-full sm:w-auto">
              <button
                className={`bg-white text-${PRIMARY_COLOR} hover:bg-gray-100 h-11 rounded-md px-8 py-3 text-sm font-medium transition shadow-xl w-full`}
              >
                Get In Touch Today
              </button>
            </a>

            <a href="/services" className="w-full sm:w-auto">
              <button className="border border-white text-white hover:bg-white/10 h-11 rounded-md px-8 py-3 text-sm font-medium transition w-full">
                View Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
