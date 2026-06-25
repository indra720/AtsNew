import React from "react";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  points: string[];
  tags: string[];
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "AI-Powered E-Commerce Platform",
    client: "RetailMax Inc.",
    category: "Web Development",
    image:
      "https://plus.unsplash.com/premium_photo-1747949065888-5a57b2d506db?w=600&auto=format&fit=crop&q=60",
    description:
      "A scalable AI-driven e-commerce platform offering personalized shopping experiences, dynamic product sorting, and advanced analytics.",
    points: [
      "AI recommendation engine",
      "60% faster page load",
      "Automated inventory tracking",
    ],
    tags: ["AI", "React", "Node.js", "MongoDB"],
    link: "/ai-page",
  },
  {
    id: 2,
    title: "Secure Banking Mobile App",
    client: "Community Bank",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
    description:
      "A robust mobile banking solution with real-time transactions, multi-layer security, and a seamless UI experience.",
    points: ["Biometric login", "256-bit encryption", "Fraud detection alerts"],
    tags: ["React Native", "PostgreSQL", "AWS"],
    link: "/secure-page",
  },
  {
    id: 3,
    title: "Enterprise Cloud Migration",
    client: "GlobalTech Corp",
    category: "Cloud Solutions",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
    description:
      "Migrated a complete enterprise infrastructure to cloud with zero downtime and enhanced automated deployment pipelines.",
    points: [
      "Zero-downtime migration",
      "45% cost reduction",
      "High availability setup",
    ],
    tags: ["AWS", "Docker", "Kubernetes"],
    link: "/cloud-page",
  },
  {
    id: 4,
    title: "Healthcare Data Analytics Platform",
    client: "MedCare Solutions",
    category: "Healthcare Tech",
    image:
      "https://images.unsplash.com/photo-1657727534685-36b09f84e193?q=80&w=1170&auto=format&fit=crop",
    description:
      "Healthcare analytics system built to track patient health, predict risks, and improve clinical workflows in real-time.",
    points: ["HIPAA-compliant", "Predictive analytics", "Real-time dashboards"],
    tags: ["Python", "React", "Docker"],
    link: "/health-page",
  },
];

const FeaturedSuccessStories = () => {
  const navigate = (path: string) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <section
      className="py-6 bg-white"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Featured Success Stories
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore powerful, real-world transformations where our technology,
            strategy, and innovation helped businesses achieve remarkable
            growth.
          </p>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".featured-button-next",
              prevEl: ".featured-button-prev",
            }}
            className="pb-12 flex!
 items-stretch!
!"
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={study.id} className="flex flex-col h-auto pb-2">
                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg
                  hover:shadow-2xl hover:-translate-y-1 transition-all duration-500
                  group overflow-hidden flex flex-col h-full"
                >

                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden shrink-0">
                    <img
                      src={study.image}
                      alt={study.title}
                      onError={(e) =>
                      (e.currentTarget.src = `https://placehold.co/600x400/E2E8F0/475569?text=${encodeURIComponent(
                        study.title
                      )}`)
                      }
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />


                    <div
                      className="absolute top-4 left-4 bg-black/60 backdrop-blur-md
                  text-white px-3 py-1 rounded-full text-xs tracking-wide shadow-md"
                    >
                      {study.category}
                    </div>
                  </div>


                  <div className="p-6 md:p-8 flex flex-col grow">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>

                    <p className="text-gray-500 text-sm mb-3">
                      Client: <span className="font-semibold">{study.client}</span>
                    </p>

                    <p className="text-gray-700 text-sm mb-4 h-20 ">
                      {study.description}
                    </p>


                    <ul className="space-y-1 mb-5 min-h-[90px]">
                      {study.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-700 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>


                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>


                    <button
                      onClick={() => navigate(study.link)}
                      className="inline-flex items-center justify-center gap-2 text-base font-medium
                    text-white h-10 rounded-md px-5 w-full
                    bg-linear-to-r from-cyan-500 to-teal-600
                    hover:scale-[1.01] transition-all mt-auto"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="featured-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg text-teal-600 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all cursor-pointer border border-teal-100">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <div className="featured-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg text-teal-600 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all cursor-pointer border border-teal-100">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16" data-aos="fade-up">
          <button
            onClick={() => navigate("/work/projects")}
            className="inline-flex items-center gap-3 text-base font-medium
            text-white px-8 py-3 rounded-md
            bg-linear-to-r from-cyan-500 to-teal-600
            hover:scale-105 transition-all shadow-xl"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default FeaturedSuccessStories;
