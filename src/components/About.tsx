import React, { FC } from "react";
const About: FC = () => {
  // const teamMembers = [
  //   {
  //     name: "Pramod Saini",
  //     role: "Senior Frontend Developer",
  //     description:
  //       "06 months in tech leadership, former SudoTechlabs engineer with expertise in scalable systems.",
  //     imgSrc: "./Pramod.png",
  //     imgAlt: "Pramod Saini",
  //     navigationPath: "/team-members",
  //     skills: ["React", "Tailwind", "JavaScript", "UI/UX"],
  //   },
  //   {
  //     name: "Aakash Kumawat",
  //     role: "Senior Backend Developer",
  //     description:
  //       "Enterprise backend engineer with expertise in distributed systems & APIs.",
  //     imgSrc: "./Aakash.jpeg",
  //     imgAlt: "Aakash Kumawat",
  //     navigationPath: "/team-members3",
  //     skills: ["Python", "Django", "MySql", "System Design"],
  //   },
  //   {
  //     name: "Rahul Kumawat",
  //     role: "MERN Stack Developer",
  //     description:
  //       "MERN developer skilled in building scalable full-stack applications.",
  //     imgSrc: "./Rahul5.jpg",
  //     imgAlt: "Rahul Kumar",
  //     navigationPath: "/team-members2",
  //     skills: ["React", "Node.js", "MongoDB", "Express.js"],
  //   },
  //   {
  //     name: "Kamlesh Kumar Sharma",
  //     role: "Full Stack Developer",
  //     description:
  //       "Full Stack developer skilled in building scalable digital solutions.",
  //     imgSrc: "./kamal1.jpg",
  //     imgAlt: "Kamlesh Sharma",
  //     navigationPath: "/team-members4",
  //     skills: ["JS", "React", "c#", ".NET", "MySQL"],
  //   },
  // ];

  return (
    <div
      className="bg-white text-gray-900 min-h-screen"
      style={{ fontFamily: "Times New Roman, serif" }}
    >

      <section className="relative py-6 sm:py-16  text-center flex items-center justify-center min-h-[500px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative w-full px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
            About <span className="text-white">ATS GLOBAL TECH</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            ATS Global Tech empowers businesses through innovation, digital
            transformation, and future-ready software engineering.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Our Mission",
                text: "Deliver scalable, secure & innovative tech solutions that accelerate global business growth.",
              },
              {
                title: "Our Vision",
                text: "To lead the future of digital transformation with intelligence and innovation.",
              },
              {
                title: "Core Values",
                text: "Integrate, Excellence, Innovation, Customer First & Collaboration.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md text-gray-100 p-8 rounded-2xl shadow-xl border border-white/20 hover:scale-[1.05] transition duration-300 transform hover:shadow-2xl"
              >
                <h2 className="text-2xl font-semibold text-teal-300 mb-3">
                  {card.title}
                </h2>
                <p className="text-gray-200">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>
            <img
              src="./ceo.png"
              alt="CEO"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://placehold.co/400x500/0F766E/ffffff?text=CEO+Image";
              }}
              className="rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md object-cover mx-auto aspect-4/5 transform hover:scale-[1.02] transition duration-500"
            />
          </div>


          <div>
            <span className="px-4 py-1 text-sm bg-white rounded-full shadow-md mb-4 inline-block font-sans text-gray-700">
              Leadership • Strategy • Innovation
            </span>

            <blockquote className="text-2xl md:text-3xl italic text-gray-700 mb-6 border-l-4 border-teal-500 pl-4">
              “We don’t just create technology — we create growth, opportunity,
              and success.”
            </blockquote>

            <h3 className="text-4xl font-bold bg-linear-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">
              Ajeet Singh
            </h3>

            <p className="text-gray-900 text-xl font-semibold mb-6">
              CEO & Founder — ATS Global Tech
            </p>

            <p className="text-gray-700 mb-4">
              With 15+ years of global tech experience, Abhay believes in
              building futuristic digital ecosystems.
            </p>

            <p className="text-gray-700 mb-4">
              He has worked with startups, mid-scale companies, and global
              enterprises, helping them adopt modern technologies such as Cloud,
              AI Automation, Full-Stack Engineering, Data-Driven Architecture,
              Cybersecurity, and Scalable Digital Platforms. His focus is on
              building systems that are fast, reliable, future-ready, and
              capable of supporting large-scale growth.
            </p>


            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "15+", label: "Years Leading" },
                { value: "500+", label: "Projects Done" },
                { value: "60+", label: "Enterprise Clients" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-white p-4 sm:p-5 rounded-xl text-center shadow-lg hover:-translate-y-1 transition duration-300 border border-gray-100"
                >
                  <div className="text-xl sm:text-3xl font-bold text-cyan-600">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-600 italic border-l-4 border-cyan-600 pl-4">
              “Leadership is not a position — it's an influence that creates
              change.”
            </p>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
        <div className="w-full px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>

          <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto mt-4">
            Our team blends creativity, engineering excellence, and strategy to
            build future-ready solutions.
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((m, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.02] flex flex-col items-center"
              >
                <img
                  src={m.imgSrc}
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://placehold.co/100x100/A7F3D0/0F766E?text=${m.name.charAt(
                      0
                    )}`;
                  }}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 ring-4 ring-teal-200"
                  alt={m.imgAlt}
                />

                <h3 className="font-semibold text-xl">{m.name}</h3>
                <p className="text-teal-600 text-sm mb-3">{m.role}</p>

                <p className="text-gray-600 text-sm mb-4 grow">
                  {m.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {m.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-teal-100 text-teal-700 rounded-full border border-teal-300 font-sans"
                    >
                      {skill}
                    </span>
                  ))}
                </div>


                <a
                  href={m.navigationPath}
                  className="w-full"
                >
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300 mt-auto shadow-md hover:shadow-lg w-full">
                    View Portfolio
                  </button>
                </a>

              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* <section className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold">Join Our Journey</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mt-4">
          Whether you want to collaborate or build your dream career — we’d love
          to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 px-4">
         
          <a href="/contact">
            <button className="w-full sm:w-auto bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition shadow-lg">
              Get In Touch
            </button>
          </a>
          <a href="/careers">
            <button className="w-full sm:w-auto border border-teal-300 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition hover:border-teal-400 shadow-md">
              View Careers
            </button>
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default About;
