import React from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card3D from "./ui/Card3D";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aditya Sharma",
    role: "CEO, TechCorp Industries",
    company: "TechCorp Industries",
    image: "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=600&auto=format&fit=crop&q=60",
    quote: "ATS GLOBAL TECH transformed our entire digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance dramatically.",
    rating: 5,
  },
  {
    id: 2,
    name: "Saroj Gupta",
    role: "CTO, InnovateLtd",
    company: "InnovateLtd",
    image: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg",
    quote: "Working with ATS GLOBAL TECH was a game-changer. They delivered a complex AI-powered platform ahead of schedule and below budget. Exceptional team!",
    rating: 5,
  },
  {
    id: 3,
    name: "Milan Patel",
    role: "Founder, StartupX",
    company: "StartupX",
    image: "https://images.pexels.com/photos/7580971/pexels-photo-7580971.jpeg",
    quote: "From MVP to enterprise-scale solution, ATS GLOBAL TECH has been our technology partner every step of the way. Their scalable solutions grew with our business.",
    rating: 5,
  },
  {
    id: 4,
    name: "Esha Verma",
    role: "VP Technology, DataFlow",
    company: "DataFlow",
    image: "https://images.pexels.com/photos/32251444/pexels-photo-32251444.jpeg",
    quote: "The mobile app they developed for us has over 100K downloads and 4.8 stars on app stores. Outstanding user experience and rock-solid performance.",
    rating: 5,
  },
];

export const ClientTestimonials: React.FC = () => {
  return (
    <section className="relative py-24 bg-white/90 text-slate-900 overflow-hidden border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENTERPRISE ENDORSEMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
            What Our Clients Say
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Trusted by technology leaders across industries, our partners share how our architecture helped them accelerate innovation and achieve market dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <Card3D
              key={t.id}
              intensity={12}
              glowColor="rgba(0, 102, 255, 0.1)"
              className="cloud-card p-6 flex flex-col justify-between border border-blue-100/90 hover:border-blue-300 rounded-3xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#0066FF]/30 group-hover:text-[#0066FF] transition" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic font-medium">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-blue-100 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#0066FF]/60 shadow-sm"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/100x100/0066FF/ffffff?text=${t.name.charAt(0)}`;
                  }}
                />
                <div>
                  <div className="text-sm font-bold text-slate-900 font-display group-hover:text-[#0066FF] transition">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">{t.role}</div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
