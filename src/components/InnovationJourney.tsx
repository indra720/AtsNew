import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const InnovationJourney: React.FC = () => {
  return (
    <section
      className=" bg-white"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-14 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Connect With ATS Global Tech
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Let’s collaborate, innovate, and grow together. Reach out to us
            through any platform below.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          <div
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 hover:shadow-2xl transition-all duration-500"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
              Our Office Location
            </h3>
            <p className="text-gray-600 mb-6">
              Visit our workspace anytime during business hours.
            </p>


            <div className="relative h-64 sm:h-96 lg:h-[420px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.1606834398303!2d75.7529906!3d26.8983951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dee53548b5%3A0x66d9679054b4bcbd!2sATS%20GLOBAL%20TECH!5e0!3m2!1sen!2sin!4v1761739403746!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>


          <div data-aos="fade-left" className="pt-0 lg:pt-6">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
              Social Media Hub
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mb-10">
              Stay updated with the latest news, insights & behind-the-scenes
              moments.
            </p>


            <div className="space-y-6 mb-12">
              {[
                {
                  icon: <MapPin className="h-7 w-7 text-teal-600" />,
                  info: "ATS building, 4/98, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur",
                  link: "#",
                },
                {
                  icon: <Phone className="h-7 w-7 text-teal-600" />,
                  info: "+91 9929825003",
                  link: "tel:+919929825003",
                  isStrong: true,
                },
                {
                  icon: <Mail className="h-7 w-7 text-teal-600" />,
                  info: "info@atsglobaltech.in",
                  link: "mailto:info@atsglobaltech.in",
                  isStrong: true,
                },
              ].map((item, index) => (
                <a
                  key={`contact-${index}`}
                  href={item.link}
                  className="flex items-start gap-4 group hover:text-teal-700 transition duration-300"
                >
                  <div className="shrink-0 pt-1">{item.icon}</div>
                  <p
                    className={`text-gray-800 text-lg ${
                      item.isStrong ? "font-semibold" : ""
                    } group-hover:text-teal-700`}
                  >
                    {item.info}
                  </p>
                </a>
              ))}
            </div>


            <h4 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">
              Follow Us
            </h4>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: <Facebook className="h-6 w-6" />,
                  name: "Facebook",
                  url: "https://www.facebook.com/profile.php?id=61574788298611",
                },
                {
                  icon: <Instagram className="h-6 w-6" />,
                  name: "Instagram",
                  url: "https://www.instagram.com/sudo.techlabs",
                },
                {
                  icon: <Linkedin className="h-6 w-6" />,
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/sudo-techlabs-8b6708375",
                },
                {
                  icon: <Youtube className="h-6 w-6" />,
                  name: "YouTube",
                  url: "https://www.youtube.com",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                  className="
                    group p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-lg
                    bg-white relative overflow-hidden cursor-pointer
                    hover:-translate-y-1 hover:shadow-teal-500/40
                    transition-all duration-300 block
                  "
                >

                  <div
                    className="absolute inset-0 bg-linear-to-br
                    from-cyan-500/20 to-teal-600/20
                    opacity-0 group-hover:opacity-100 backdrop-blur-md
                    transition-all duration-300"
                  ></div>


                  <div className="flex justify-center mb-3 relative z-10">
                    <div
                      className="p-3 sm:p-4 rounded-full text-white shadow-xl
                      bg-linear-to-r from-cyan-500 to-teal-600
                      group-hover:scale-110 transition-all duration-300"
                    >
                      {item.icon}
                    </div>
                  </div>

                
                  <p className="text-center text-gray-900 text-sm sm:text-base font-semibold relative z-10">
                    {item.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationJourney;
