import { FC } from "react";
import {
  House,
  Zap,
  CircleCheckBig,
  Target,
  TrendingUp,
  ArrowRight,
  Gamepad2,
  Heart,
  Banknote,
  ShoppingCart,
  GraduationCap,
  Building,
  Truck,
  Users,
  Globe,
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Industries: FC = () => {
  const stats = [
    {
      label: "Industries Served",
      value: "25+",
      icon: <Users className="h-10 w-10 text-teal-600" />,
    },
    {
      label: "Enterprise Clients",
      value: "200+",
      icon: <Building className="h-10 w-10 text-teal-600" />,
    },
    {
      label: "Countries",
      value: "5+",
      icon: <Globe className="h-10 w-10 text-teal-600" />,
    },
    {
      label: "Industry Awards",
      value: "15+",
      icon: <Award className="h-10 w-10 text-teal-600" />,
    },
  ];

  const industryCards = [
    {
      title: "Healthcare & Life Sciences",
      icon: <Heart className="h-8 w-8 text-teal-600" />,
      img: "https://plus.unsplash.com/premium_photo-1698421947098-d68176a8f5b2?w=600",
      features: [
        "Telemedicine Platforms",
        "AI Diagnostics & Analysis",
        "HIPAA Compliant Data Management",
      ],
    },
    {
      title: "Financial Services",
      icon: <Banknote className="h-8 w-8 text-teal-600" />,
      img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      features: [
        "Secure Mobile Banking Apps",
        "Real-Time Fraud Detection (AI/ML)",
        "Regulatory Compliance (PCI DSS)",
      ],
    },
    {
      title: "Retail & E-commerce",
      icon: <ShoppingCart className="h-8 w-8 text-teal-600" />,
      img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600",
      features: [
        "Omni-Channel Store Integration",
        "AI-Powered Product Recommendations",
        "Inventory & Supply Chain Optimization",
      ],
    },
    {
      title: "Education & EdTech",
      icon: <GraduationCap className="h-8 w-8 text-teal-600" />,
      img: "https://plus.unsplash.com/premium_photo-1750859860252-6d23c5598f7c?w=600",
      features: [
        "Virtual Classroom Solutions",
        "Adaptive Learning Platforms",
        "Student Performance Analytics",
      ],
    },
    {
      title: "Manufacturing & Industrial",
      icon: <Building className="h-8 w-8 text-teal-600" />,
      img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800",
      features: [
        "IoT Integration & Monitoring",
        "Predictive Maintenance Systems",
        "Robotic Process Automation (RPA)",
      ],
    },
    {
      title: "Transportation & Logistics",
      icon: <Truck className="h-8 w-8 text-teal-600" />,
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
      features: [
        "Real-Time GPS Fleet Tracking",
        "Route Optimization Algorithms",
        "Warehouse Management Systems (WMS)",
      ],
    },
    {
      title: "Real Estate & PropTech",
      icon: <House className="h-8 w-8 text-teal-600" />,
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      features: [
        "Immersive Virtual Property Tours",
        "Smart Building & IoT Integration",
        "Tenant & Owner Portal Solutions",
      ],
    },
    {
      title: "Entertainment & Media",
      icon: <Gamepad2 className="h-8 w-8 text-teal-600" />,
      img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800",
      features: [
        "High-Performance Streaming Platforms",
        "Audience Data Analytics",
        "Digital Rights Management (DRM)",
      ],
    },
  ];

  const whyChooseUs = [
    {
      title: "Industry Compliance",
      desc: "We ensure all solutions meet regulations like HIPAA, PCI DSS, and GDPR.",
      icon: <CircleCheckBig className="h-8 w-8 text-teal-600" />,
    },
    {
      title: "Domain Experts",
      desc: "Our team includes specialists with decades of experience.",
      icon: <Target className="h-8 w-8 text-teal-600" />,
    },
    {
      title: "Proven Track Record",
      desc: "With 200+ projects delivered, we bring experience that drives success.",
      icon: <TrendingUp className="h-8 w-8 text-teal-600" />,
    },
  ];

  return (
    <div className="font-serif">
      <section className="relative py-2 lg:py-6 bg-linear-to-r from-teal-50 via-white to-teal-100 overflow-hidden text-gray-900">
        <div className="relative w-full px-4 sm:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Industries We Serve
          </h1>

          <p className="text-xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
            We bring deep industry expertise and innovative technology solutions
            to transform businesses across diverse sectors, helping
            organizations achieve their digital transformation goals with
            tailored approaches that address specific industry challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 rounded-md bg-teal-500 text-white hover:bg-teal-600 px-10 py-4 text-sm lg:text-lg font-semibold shadow-lg transition-colors">
              Explore Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 rounded-md border-2 border-teal-500 text-teal-600 hover:bg-teal-100 px-10 py-4 text-sm lg:text-lg font-medium backdrop-blur-sm transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((item, i) => (
              <div
                key={i}
                className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition p-6"
              >
                <div className="bg-teal-100 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-2">
                  {item.value}
                </div>
                <div className="text-sm sm:text-base text-gray-700 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-teal-700">
              Specialized Industry Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our industry-specific expertise helps organizations overcome
              unique challenges and capitalize on opportunities in their
              respective markets.
            </p>
          </div>

          <div className="relative group">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              navigation={{
                nextEl: ".industry-button-next",
                prevEl: ".industry-button-prev",
              }}
              className="pb-12 flex! items-stretch!"
            >
              {industryCards.map((card, index) => (
                <SwiperSlide key={index} className="h-auto! flex">
                  <div className="rounded-xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-md hover:shadow-xl transition-all flex flex-col h-full w-full">
                    <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col grow">
                      <div className="flex items-center gap-3 mb-3">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-teal-700 mb-3">
                        {card.title}
                      </h3>

                      <ul className="space-y-2 text-gray-700 mb-6 grow">
                        {card.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-teal-500 mt-1 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium bg-teal-500 text-white hover:bg-teal-600 h-10 px-4 py-2 w-full transition-all mt-auto">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="industry-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg text-teal-600 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all cursor-pointer border border-teal-100">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <div className="industry-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg text-teal-600 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all cursor-pointer border border-teal-100">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6  bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Us for Your Industry?
          </h2>
          <p className="text-lg text-gray-700 mb-10 md:mb-12 max-w-3xl mx-auto">
            Our deep industry knowledge combined with cutting-edge technology
            expertise makes us the ideal partner for your digital
            transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((box, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-2xl bg-white/70 hover:bg-white/90 border border-teal-100 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">{box.icon}</div>
                <h3 className="text-xl font-bold text-teal-700 mb-4">
                  {box.title}
                </h3>
                <p className="text-gray-700">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-teal-700">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg mb-10 md:mb-12 text-gray-700 max-w-3xl mx-auto">
            Let's discuss how our industry-specific solutions can help you
            achieve breakthrough results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 rounded-md bg-teal-500 text-white hover:bg-teal-600 px-10 py-4 text-lg font-semibold shadow-lg">
              Schedule Industry Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 rounded-md border-2 border-teal-500 text-teal-600 hover:bg-teal-100 px-10 py-4 text-lg font-medium">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
