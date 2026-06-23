import React from "react";
import {
  ArrowRight,
  CircleCheckBig,
  Lightbulb,
  Users,
  Rocket,
  TrendingUp,
} from "lucide-react";

interface Feature {
  text: string;
}

interface Card {
  title: string;
  description: string;
  icon: React.ReactNode;
  videoPoster: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    { text: "24/7 Technical Support & Maintenance" },
    { text: "Agile Development Methodology" },
    { text: "Comprehensive Quality Assurance" },
    { text: "Scalable & Future-Proof Architecture" },
    { text: "Modern Technology Stack" },
    { text: "Cost-Effective Solutions" },
    { text: "Regular Progress Updates" },
    { text: "Post-Launch Support & Training" },
  ];

  const cards: Card[] = [
    {
      title: "Innovation First",
      description:
        "We implement modern, future-ready technologies that keep you ahead of market trends and competitors.",
      icon: <Lightbulb className="h-6 w-6 text-teal-600" />,
      videoPoster:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
    },
    {
      title: "Expert Team",
      description:
        "Our certified engineers, architects, and consultants bring years of real-world expertise to every project.",
      icon: <Users className="h-6 w-6 text-teal-600" />,
      videoPoster:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
    },
    {
      title: "Rapid Delivery",
      description:
        "Our agile workflows ensure your product ships faster with consistent quality and predictable timelines.",
      icon: <Rocket className="h-6 w-6 text-teal-600" />,
      videoPoster:
        "https://plus.unsplash.com/premium_photo-1747949065888-5a57b2d506db?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Scalable Solutions",
      description:
        "Every solution is designed to grow effortlessly as your business evolves, ensuring long-term sustainability.",
      icon: <TrendingUp className="h-6 w-6 text-teal-600" />,
      videoPoster:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section
      className="py-12 md:py-16 lg:py-24 bg-white overflow-x-hidden"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              data-aos="fade-right"
            >
              Why Choose ATS GLOBAL TECH?
            </h2>

            <p
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              We don’t just build digital solutions — we engineer long-lasting,
              scalable systems backed by innovation, deep expertise, and a
              commitment to helping businesses thrive in the modern digital era.
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <CircleCheckBig className="h-5 w-5 text-teal-600 mt-1 shrink-0" />
                  <span className="text-gray-700 font-medium text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <button
              data-aos="flip-up"
              data-aos-delay="400"
              className="inline-flex items-center justify-center gap-2
              bg-linear-to-r from-cyan-500 to-teal-600
              text-white h-11 rounded-md px-8 py-3
              text-base font-medium transition-all duration-300
              hover:scale-[1.02] hover:shadow-lg"
            >
              Learn More About Us
              <ArrowRight className="ml-1 h-5 w-5" />
            </button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-12 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 150}
                className="bg-white border border-gray-200 rounded-2xl
                overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1
                transition-all duration-500 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={card.videoPoster}
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://placehold.co/400x250/E2E8F0/475569?text=Image+Placeholder")
                    }
                    alt={card.title}
                    className="w-full h-full object-cover
                    group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

                  <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-md">
                    {card.icon}
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-bold text-gray-900 mb-2 text-xl">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
