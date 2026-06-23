import React from "react";
import { motion } from "framer-motion";

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen pt-28 pb-16 px-6 font-roman">
      <div className="w-full">

        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-orange-500 mb-4"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Please read these terms carefully before using our website or
            services. These terms define your rights and responsibilities when
            engaging with ATS GLOBAL TECH.
          </motion.p>
        </div>


        <div className="flex justify-center mb-12">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt="Terms of Service Illustration"
            className="w-full md:w-3/4 rounded-2xl shadow-lg"
          />
        </div>


        <div className="space-y-20">

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
              className="rounded-2xl shadow-md"
            />
            <div>
              <h2 className="text-3xl font-semibold text-orange-500 mb-4">
                Usage Agreement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By using our website, you acknowledge that you have read and
                understood our Terms of Service and agree to comply with all
                applicable rules, policies, and guidelines.
              </p>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-orange-500 mb-4">
                User Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Users must ensure that all interactions with our platform remain
                lawful. You must not engage in hacking, unauthorized access,
                spreading malware, or any form of harmful activity.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
              className="rounded-2xl shadow-md"
            />
          </div>


          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
              className="rounded-2xl shadow-md"
            />
            <div>
              <h2 className="text-3xl font-semibold text-orange-500 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All website content including graphics, code, and branding
                belongs solely to ATS GLOBAL TECH. Reproduction or commercial
                usage without permission is strictly prohibited.
              </p>
            </div>
          </div>
        </div>


        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            ...[
              {
                title: "Limitation of Liability",
                text: "ATS GLOBAL TECH is not responsible for indirect, incidental, or consequential damages arising from service use.",
              },
              {
                title: "Governing Law",
                text: "All disputes are governed by Indian law and handled within the jurisdiction of New Delhi courts.",
              },
              {
                title: "Termination Rights",
                text: "We may suspend or terminate access if users violate the Terms or engage in prohibited activities.",
              },
              {
                title: "Account Responsibilities",
                text: "Users are responsible for keeping their login credentials confidential and securing their accounts.",
              },
              {
                title: "Third‑Party Links",
                text: "We may provide third‑party links; however, we are not responsible for external website content.",
              },
              {
                title: "Contact Information",
                text: "For any queries, reach us at info@atsglobaltech.in. We respond within 24–48 business hours.",
              },
            ],
          ]
            .flat()
            .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold mb-3 text-orange-500">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
        </div>

       
      </div>
    </div>
  );
};

export default TermsOfService;
