
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const navigate = useNavigate();

  const slidingTexts = ["future", "ideas", "vision", "growth"];

  const topSlides = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=800&auto=format&fit=crop"
  ];

  const bottomSlides = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=800&auto=format&fit=crop"
  ];

  useEffect(() => {
    const topTimer = setInterval(
      () => setTopIndex((prev) => (prev + 1) % topSlides.length),
      3000
    );

    const bottomTimer = setInterval(
      () => setBottomIndex((prev) => (prev + 1) % bottomSlides.length),
      4000
    );

    const textTimer = setInterval(
      () => setTextIndex((prev) => (prev + 1) % slidingTexts.length),
      3200
    );

    return () => {
      clearInterval(topTimer);
      clearInterval(bottomTimer);
      clearInterval(textTimer);
    };
  }, []);

  const handleOpenContact = () => {
    navigate("/lets-create");
  };

  return (
    <section
      className="
      relative bg-gray-50 overflow-hidden font-serif
      min-h-[440px]
      sm:min-h-[480px]
      md:min-h-[520px]
      lg:min-h-[550px]
      xl:min-h-[580px]
      pb-[30px]
    "
    >
      <style>
        {`
          @keyframes smoothSlideUp {
            0% { transform: translateY(120%); opacity: 0; }
            15% { transform: translateY(0); opacity: 1; }
            85% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-120%); opacity: 0; }
          }
          .sliderWord {
            animation: smoothSlideUp 3.2s ease-in-out infinite;
            display: inline-block;
            text-transform: lowercase;
          }
        `}
      </style>

      <div className="flex flex-col lg:flex-row h-full w-full px-3 sm:px-4 gap-3">

        <div
          className="
          relative w-full lg:w-[60%] flex items-center justify-center text-white
          px-4 sm:px-6 md:px-10
          py-8 sm:py-10 rounded-xl overflow-hidden

          min-h-[260px]
          sm:min-h-[300px]
          md:min-h-[350px]
          lg:min-h-[380px]
          xl:min-h-[410px]
        "
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/company1.mp4"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0a1522]/70"></div>

          <div className="relative w-full max-w-xl text-center lg:text-left z-10">

            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-semibold rounded-full bg-white/10 border border-white/20 mb-4">
              ✨ empowering digital transformation
            </span>

            <h1 className="flex items-center justify-center lg:justify-start gap-2 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 whitespace-nowrap">
              <span>building the</span>
              <span key={textIndex} className="sliderWord text-cyan-400 ml-1">
                {slidingTexts[textIndex]}
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-7">
              <span className="text-white font-bold text-xl sm:text-2xl block mb-2">
                ATS GLOBAL TECH
              </span>

              We craft intelligent digital solutions that elevate businesses to the next level.
              Our team blends creativity with technology to build experiences people love.
              We believe in delivering innovation that empowers brands to grow faster and smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">

              <button
                onClick={handleOpenContact}
                className="relative inline-flex items-center justify-center px-5 sm:px-6 py-2.5 text-sm sm:text-lg font-medium text-white rounded-md overflow-hidden group"
              >
                <span className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-teal-500 transition-transform duration-500 group-hover:scale-110 rounded-md"></span>
                <span className="relative z-10">start your project</span>
              </button>

              <a href="/work/projects">
                <button className="relative inline-flex items-center justify-center px-5 sm:px-6 py-2.5 text-sm sm:text-lg font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-all duration-300">
                  explore works
                </button>
              </a>

            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] flex flex-col justify-between gap-3">

          <div className="relative w-full h-[200px] sm:h-[230px] md:h-[250px] lg:h-[260px] xl:h-[270px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
            {topSlides.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === topIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="relative w-full h-[200px] sm:h-[230px] md:h-[250px] lg:h-[260px] xl:h-[270px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
            {bottomSlides.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === bottomIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
