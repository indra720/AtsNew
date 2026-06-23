import React from "react";

const Services: React.FC = () => {
  return (
    <>
      <section className="relative py-24 lg:py-16 overflow-hidden bg-linear-to-r from-orange-400 to-red-300 sm:h-[550px] lg:h-[450px]">
        <div className="absolute inset-0 "></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovative Solutions
            <span className="block text-3xl md:text-5xl mt-2 font-normal">
              for Modern Challenges
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of technology solutions designed to
            accelerate your digital transformation, enhance operational
            efficiency, and drive sustainable business growth in today's
            competitive landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md bg-white text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-semibold shadow-lg">
              Explore Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-right ml-2 h-5 w-5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input hover:text-accent-foreground h-11 rounded-md bg-white text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg backdrop-blur-sm">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
