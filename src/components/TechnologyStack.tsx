import React, { useEffect } from "react";
const AOS = {
  init: (config: any) => console.log("AOS initialized with config:", config),
};

const TechnologyStack: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);
  const languages = [
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "PHP",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "C++",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Kotlin",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    },
    {
      name: "Swift",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    },
  ];
  const cloud = [
    {
      name: "Azure",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Google Cloud",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Docker",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "GitHub",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Jenkins",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    },
    {
      name: "AWS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "Terraform",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    },
  ];
  const more = [
    {
      name: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Firebase",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "SQLite",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    },
    {
      name: "Redis",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
      name: "Oracle",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
    {
      name: "GraphQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
  ];
  const TechCard = ({
    tech,
    index,
  }: {
    tech: { name: string; img: string };
    index: number;
  }) => {
    const handleImageError = (
      e: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src =
        "https://placehold.co/40x40/E2E8F0/475569?text=Icon";
      e.currentTarget.className += " p-2";
    };

    return (
      <div
        data-aos="zoom-in"
        data-aos-delay={index * 70}
        className="text-center group"
        style={{ fontFamily: "Times New Roman, serif" }}
      >
        <div
          className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-2xl overflow-hidden shadow-md
                group-hover:shadow-2xl transition-all duration-300 bg-gray-50 flex items-center justify-center
                border border-gray-200 group-hover:border-teal-600 group-hover:bg-linear-to-r
                group-hover:from-cyan-500/10 group-hover:to-teal-600/10 backdrop-blur-sm"
        >
          <img
            src={tech.img}
            alt={tech.name}
            onError={handleImageError}
            className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <p className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-teal-700 transition-colors">
          {tech.name}
        </p>
      </div>
    );
  };

  return (
    <section
      className="py-6 bg-white"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2  ">
            Cutting-Edge Technology Stack
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            A robust collection of modern technologies that ensures speed,
            scalability, security, and long-term innovation for your business.
          </p>
        </div>


        <h3
          className="text-xl md:text-2xl font-bold text-gray-900 mb-6"
          data-aos="fade-up"
        >
          Programming Languages
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-8 mb-12 md:mb-16 justify-items-center">
          {languages.map((tech, i) => (
            <TechCard key={i} tech={tech} index={i} />
          ))}
        </div>


        <h3
          className="text-xl md:text-2xl font-bold text-gray-900 mb-6"
          data-aos="fade-up"
        >
          Cloud & DevOps
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-4 md:gap-8 mb-12 md:mb-16 justify-items-center">
          {cloud.map((tech, i) => (
            <TechCard key={i} tech={tech} index={i} />
          ))}
        </div>

       
        <h3
          className="text-xl md:text-2xl font-bold text-gray-900 mb-6"
          data-aos="fade-up"
        >
          Databases & Tools
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-8 justify-items-center">
          {more.map((tech, i) => (
            <TechCard key={i} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
