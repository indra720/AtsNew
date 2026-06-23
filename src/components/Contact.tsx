import React, { useState, useEffect, useCallback } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Zap,
  Users,
  Target,
  MessageSquare,
  ChevronsRight,
  CheckCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success";

interface NotificationProps {
  status: FormStatus;
  setStatus: React.Dispatch<React.SetStateAction<FormStatus>>;
}
const OFFICE_ADDRESS =
  "ATS building, 4/98, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur, Rajasthan 302021";
const Notification: React.FC<NotificationProps> = ({ status, setStatus }) => {
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 4000);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [status, setStatus]);

  if (status !== "success") return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center p-4">
      <div className="flex items-center p-4 bg-teal-600 text-white rounded-lg shadow-2xl transition-all duration-500 ease-in-out transform scale-100 opacity-100">
        <CheckCircle className="h-6 w-6 mr-3" />
        <span className="font-semibold">Message Sent!</span>
        <span className="ml-2 hidden sm:inline">
          Our team will be in touch shortly.
        </span>
      </div>
    </div>
  );
};
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    console.log("Submitting form data:", formData);

    setTimeout(() => {
      console.log("API response received: Success");
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      <Notification status={status} setStatus={setStatus} />


      <section className="relative pt-20 pb-12 bg-linear-to-br from-teal-50 via-white to-cyan-100 overflow-hidden">

        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 hidden lg:block"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 hidden lg:block"></div>


        <div className="relative z-10 w-full text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-teal-700">
            Get <span className="text-teal-500">In Touch</span>
          </h1>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700 mb-16">
            Ready to start your next project? We'd love to hear from you. Send
            us a message, and our team will reach out shortly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto text-left">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-teal-100 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                📧 Email Us
              </h3>
              <p className="text-gray-700 break-words mb-1">
                info@atsglobaltech.com
              </p>
            </div>


            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-teal-100 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                📞 Call Us
              </h3>
              <p className="text-gray-700 mb-1">+91 9929825003</p>
              <p className="text-gray-700">Mon – Sat, 10:00 AM – 6:00 PM</p>
            </div>


            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-teal-100 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                📍 Visit Us
              </h3>
              <p className="text-gray-700 mb-1">ATS Global Tech HQ</p>
              <p className="text-gray-700">{OFFICE_ADDRESS}</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 sm:py-20 bg-linear-to-r from-teal-50 via-white to-teal-100">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="bg-white border border-teal-200 rounded-2xl shadow-lg">
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-teal-700 mb-4">
                  Find Our Location
                </h3>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-teal-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.1606834398303!2d75.7529906!3d26.8983951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dee53548b5%3A0x66d9679054b4bcbd!2sATS%20GLOBAL%20TECH!5e0!3m2!1sen!2sin!4v1761739403746!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ATS GLOBAL TECH Office Location"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white border border-teal-200 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-teal-700 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-linear-to-r from-teal-500 to-cyan-500 p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Office Address
                    </h3>
                    <p className="text-gray-700">{OFFICE_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-linear-to-r from-teal-500 to-cyan-500 p-3 rounded-full shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-700">+91 9929825003</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-linear-to-r from-teal-500 to-cyan-500 p-3 rounded-full shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-700 break-words">
                      info@atsglobaltech.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-linear-to-r from-teal-500 to-cyan-500 p-3 rounded-full shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 10:00 AM - 6:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-white border border-teal-200 rounded-2xl shadow-lg">
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-teal-700 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name *"
                      className="w-full border border-teal-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 focus:outline-none transition duration-150"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email *"
                      className="w-full border border-teal-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 focus:outline-none transition duration-150"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full border border-teal-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 focus:outline-none transition duration-150"
                    />
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company (optional)"
                      className="w-full border border-teal-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 focus:outline-none transition duration-150"
                    />
                  </div>

                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject *"
                    className="w-full border border-teal-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 focus:outline-none transition duration-150"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Message *"
                    rows={5}
                    className="w-full border border-teal-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 focus:outline-none transition duration-150"
                  />

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`w-full flex items-center justify-center bg-linear-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-lg font-semibold transition duration-300 ${
                      status === "sending"
                        ? "opacity-75 cursor-not-allowed"
                        : "hover:from-teal-600 hover:to-cyan-600 shadow-md hover:shadow-lg"
                    }`}
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="inline-block mr-2 h-5 w-5 text-white" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-white border border-teal-200 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Quick Service Details
              </h3>
              <p className="text-gray-700 mb-6">
                Have an urgent requirement? Check out how we start
                collaboration.
              </p>
              <ul className="space-y-4 text-left">
                <li className="flex items-start text-gray-700">
                  <ChevronsRight className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-1" />
                  <span className="flex-1">
                    **Initial Consultation:** Free 30-minute discovery call to
                    understand your needs.
                  </span>
                </li>
                <li className="flex items-start text-gray-700">
                  <ChevronsRight className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-1" />
                  <span className="flex-1">
                    **Detailed Proposal:** Get a personalized, non-binding quote
                    within 48 hours.
                  </span>
                </li>
                <li className="flex items-start text-gray-700">
                  <ChevronsRight className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-1" />
                  <span className="flex-1">
                    **Dedicated Team:** We assign a project manager and expert
                    developers tailored to your stack.
                  </span>
                </li>
                <li className="flex items-start text-gray-700">
                  <ChevronsRight className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-1" />
                  <span className="flex-1">
                    **Global Reach:** Serving clients across Asia, Europe, and
                    North America.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-linear-to-r from-teal-50 via-white to-teal-100">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4">
            Why Work With Us?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            We're committed to delivering exceptional results and building
            lasting partnerships.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="text-white h-8 w-8" />,
                title: "Fast Response",
                text: "We respond to all inquiries within 2 hours.",
              },
              {
                icon: <Users className="text-white h-8 w-8" />,
                title: "Expert Team",
                text: "Work directly with senior developers.",
              },
              {
                icon: <Target className="text-white h-8 w-8" />,
                title: "Custom Solutions",
                text: "Tailored for your specific business needs.",
              },
              {
                icon: <MessageSquare className="text-white h-8 w-8" />,
                title: "24/7 Support",
                text: "Ongoing support and maintenance.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-teal-200 rounded-xl p-8 shadow-xl hover:shadow-teal-300/60 transition duration-300 transform hover:scale-[1.02]"
              >
                <div className="bg-linear-to-r from-teal-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
