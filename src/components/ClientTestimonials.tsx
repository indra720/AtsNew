import React from "react";
import { Star, Quote } from "lucide-react";

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
    image:
      "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=600&auto=format&fit=crop&q=60",
    quote:
      "ATS GLOBAL TECH transformed our entire digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance dramatically.",
    rating: 5,
  },
  {
    id: 2,
    name: "Saroj Gupta",
    role: "CTO, InnovateLtd",
    company: "InnovateLtd",
    image: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg",
    quote:
      "Working with ATS GLOBAL TECH was a game-changer. They delivered a complex AI-powered platform ahead of schedule and below budget. Exceptional team!",
    rating: 5,
  },
  {
    id: 3,
    name: "Milan Patel",
    role: "Founder, StartupX",
    company: "StartupX",
    image: "https://images.pexels.com/photos/7580971/pexels-photo-7580971.jpeg",
    quote:
      "From MVP to enterprise-scale solution, ATS GLOBAL TECH has been our technology partner every step of the way. Their scalable solutions grew with our business.",
    rating: 5,
  },
  {
    id: 4,
    name: "Esha Verma",
    role: "VP Technology, DataFlow",
    company: "DataFlow",
    image:
      "https://images.pexels.com/photos/32251444/pexels-photo-32251444.jpeg",
    quote:
      "The mobile app they developed for us has over 100K downloads and 4.8 stars on app stores. Outstanding user experience and rock-solid performance.",
    rating: 5,
  },
];

const ClientTestimonials: React.FC = () => {
  return (
    <section
      className="py-6 bg-white"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>


          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leaders across industries, our clients share how our
            expertise helped them accelerate innovation and achieve measurable
            success.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="rounded-2xl bg-white border border-gray-200 shadow-xl
              hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 p-6 md:p-10
              relative overflow-hidden group flex flex-col justify-between"
            >

              <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-10 w-10 md:h-12 md:w-12 text-teal-600" />
              </div>

              <div>

                <div className="flex justify-start mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 text-teal-500 fill-teal-500 drop-shadow-sm"
                    />
                  ))}
                </div>


                <blockquote className="text-gray-700 text-base md:text-lg italic mb-6 leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
              </div>


              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/64x64/E2E8F0/475569?text=User")
                  }
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-teal-600 object-cover shrink-0"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-base md:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-teal-600 font-medium text-sm md:text-base">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
