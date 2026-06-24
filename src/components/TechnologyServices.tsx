import React, { useEffect } from "react";
import {
  ArrowRight,
  Code,
  Cloud,
  Smartphone,
  Shield,
  Bot,
  Database,
  CircleCheckBig,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const AOS = {
  init: (config: any) => console.log("AOS initialized with config:", config),
};

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    title: "Custom Software Development",
    description:
      "We build bespoke software solutions tailored to your business needs using modern technologies like React, Node.js, Python, and cloud-native architectures.",
    icon: <Code className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    features: ["Full-stack development", "API integration", "Database design"],
  },
  {
    title: "Cloud Solutions & DevOps",
    description:
      "Comprehensive cloud migration, infrastructure setup, and DevOps implementation with AWS, Azure, and GCP platforms.",
    icon: <Cloud className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    features: [
      "Cloud migration",
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Monitoring & logging",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
    icon: <Smartphone className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
    features: [
      "iOS & Android native",
      "Cross-platform",
      "App Store optimization",
      "Push notifications",
    ],
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Advanced security implementations including penetration testing, security audits, and compliance management.",
    icon: <Shield className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop",
    features: [
      "Security audits",
      "Penetration testing",
      "Compliance (SOC2, HIPAA)",
    ],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions including chatbots, predictive analytics, and machine learning model development.",
    icon: <Bot className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    features: [
      "Custom AI models",
      "Natural language processing",
      "Computer vision",
    ],
  },
  {
    title: "Data Engineering",
    description:
      "Big data solutions, data warehousing, ETL pipelines, and business intelligence dashboards.",
    icon: <Database className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
    features: [
      "Data pipelines",
      "Real-time analytics",
      "Data warehousing",
      "Business intelligence",
    ],
  },
];

const TechnologyServices: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    title: string
  ) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = `https://placehold.co/400x250/111827/F9FAFB?text=${encodeURIComponent(
      title
    )}`;
  };

  return (
    <section
      className="py-3 sm:py-6 bg-white"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Comprehensive Technology Services
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Empowering businesses with scalable, secure, and innovative digital
            solutions engineered for long-term success.
          </p>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".tech-button-next",
              prevEl: ".tech-button-prev",
            }}
            className="pb-16 px-4"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto! flex">
                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group relative flex flex-col h-full w-full rounded-3xl bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(20,184,166,0.15)] border border-gray-100"
                >
                  <div className="relative h-60 w-full overflow-hidden rounded-2xl shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      onError={(e) => handleImageError(e, service.title)}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="flex flex-col p-6 grow">
                    <h3 className="mb-3 text-xl font-bold text-teal-600">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6 space-y-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50">
                            <CircleCheckBig className="h-3 w-3 text-teal-600" />
                          </div>
                          <span className="text-xs font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className="mt-auto group/btn flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition-all shadow-md shadow-teal-500/20"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="tech-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg text-teal-600 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all cursor-pointer border border-teal-100">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <div className="tech-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg text-teal-600 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all cursor-pointer border border-teal-100">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyServices;
