import React, { useState, useEffect } from "react";
import { Loader2, ShieldCheck } from "lucide-react";
const romanFont = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
  .font-roman { font-family: 'Playfair Display', serif; }
`;

const API_KEY = "";
const IMAGE_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`;
const IMAGE_PROMPT =
  "A sleek, professional banner image for a privacy policy page. The design should feature abstract, glowing data flow lines, subtle teal and orange colors, and a prominent shield icon protecting stylized binary code. High-quality digital art, wide aspect ratio (16:9).";

const PrivacyPolicy: React.FC = () => {
  const [heroImageUrl, setHeroImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cardStyle =
    "p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100";
  const generateImage = async () => {
    const payload = {
      instances: [{ prompt: IMAGE_PROMPT }],
      parameters: { sampleCount: 1 },
    };

    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {
      try {
        const response = await fetch(IMAGE_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          if (response.status === 429 && attempts < maxAttempts - 1) {
            const delay = Math.pow(2, attempts) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
            attempts++;
            continue;
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (
          result.predictions &&
          result.predictions.length > 0 &&
          result.predictions[0].bytesBase64Encoded
        ) {
          const base64Data = result.predictions[0].bytesBase64Encoded;
          const imageUrl = `data:image/png;base64,${base64Data}`;
          setHeroImageUrl(imageUrl);
          setError(null);
        } else {
          setError("Image generation failed: No image data returned.");
        }
      } catch (err) {
        console.error("Image API fetch failed:", err);
        setError("Failed to fetch image due to network or API error.");
      } finally {
        setIsLoading(false);
      }
      break;
    }

    if (attempts === maxAttempts) {
      setIsLoading(false);
      setError("Image generation failed after multiple retries.");
    }
  };

  useEffect(() => {
    generateImage();
  }, []);

  return (
    <>
      <style>{romanFont}</style>

      <div className="bg-linear-to-br from-white to-orange-50 text-gray-900 min-h-screen pt-20 pb-16 px-4 sm:px-6 font-roman">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-orange-600 mb-4">
              Our Privacy Commitment
            </h1>
            <p className="text-xl text-gray-700">
              Your security and trust are our highest priority.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: November 11, 2025 | ATS GLOBAL TECH, India
            </p>
          </div>


          <div className="flex justify-center mb-20 w-full h-[250px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center text-gray-600">
                <Loader2 className="w-8 h-8 animate-spin mb-3 text-orange-600" />
                <p>Generating secure data visualization banner...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center text-red-600 p-8">
                <ShieldCheck className="w-8 h-8 mb-3" />
                <p className="font-semibold">Image Load Error:</p>
                <p className="text-sm text-center">{error}</p>
                <p className="text-xs mt-2">
                  Using default placeholder for layout.
                </p>
              </div>
            ) : (
              <img
                src={
                  heroImageUrl ||
                  "https://plus.unsplash.com/premium_photo-1709713745246-acd3260f16a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNvbXBhbnklMjBwcml2YWN5JTIwcG9saWN5JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
                }
                alt="Privacy Policy Security Banner"
                className="w-full h-full object-cover"
              />
            )}
          </div>


          <div className="space-y-24">
            <div
              className={`grid md:grid-cols-2 gap-10 items-start ${cardStyle}`}
            >
              <img
                src="https://placehold.co/500x350/f0f9ff/0e7490?text=Data+Collection+Process"
                alt="Data Collection Process"
                className="rounded-xl shadow-lg w-full h-auto object-cover border-4 border-teal-100"
              />
              <div className="md:order-last">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">
                  1. Information We Collect and Why
                </h2>
                <p className="text-gray-900 leading-relaxed mb-4">
                  We collect several data types to improve your overall
                  experience including **Personal Identifiable Information
                  (PII)** such as your full name, email address, phone number,
                  company affiliation, and project details, which are
                  voluntarily provided when you fill out contact forms or sign
                  up for services.
                </p>
                <p className="text-gray-900 leading-relaxed">
                  We also gather **Non-Personal Data** including device details
                  (browser type, operating system), IP address, time spent on
                  the site, and interaction logs. This helps us ensure we offer
                  an optimized service tailored for your device and analyze site
                  performance. **Cookies and similar tracking technologies** are
                  used for better personalization, smoother navigation, and
                  accurate traffic analysis across the platform.
                </p>
              </div>
            </div>

            <div
              className={`grid md:grid-cols-2 gap-10 items-start ${cardStyle}`}
            >
              <div className="md:order-first">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">
                  2. How Your Data Is Used
                </h2>
                <p className="text-gray-900 leading-relaxed mb-4">
                  Your data is primarily used to **provide, maintain, and
                  improve our services**. We utilize your information to fulfill
                  your requests, customize the services you see, enhance website
                  speed and performance, and manage our relationship with you,
                  including accurate troubleshooting whenever needed.
                </p>
                <p className="text-gray-900 leading-relaxed">
                  Data insights allow us to conduct internal research, prevent
                  potential illegal activities, and enhance site security.
                  Furthermore, your preferences enable personalized
                  communication and delivery of relevant updates and marketing
                  materials (only with your consent). We adhere strictly to
                  using data only for platform enhancement and business
                  operations as outlined herein.
                </p>
              </div>
              <img
                src="https://placehold.co/500x350/fdf2f8/e11d48?text=Data+Usage+Optimization"
                alt="Data Usage Optimization"
                className="rounded-xl shadow-lg w-full h-auto object-cover border-4 border-pink-100"
              />
            </div>

            <div
              className={`grid md:grid-cols-2 gap-10 items-start ${cardStyle}`}
            >
              <img
                src="https://placehold.co/500x350/eff6ff/1d4ed8?text=Controlled+Data+Transfer"
                alt="Data Sharing and Disclosure"
                className="rounded-xl shadow-lg w-full h-auto object-cover border-4 border-blue-100"
              />
              <div className="md:order-last">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">
                  3. Data Sharing and Disclosure
                </h2>
                <p className="text-gray-900 leading-relaxed mb-4">
                  We do not sell, trade, or rent your Personal Identifiable
                  Information to others. We may share generic aggregated
                  demographic information not linked to any PII regarding
                  visitors and users with our business partners, trusted
                  affiliates, and advertisers for the purposes outlined above.
                </p>
                <p className="text-gray-900 leading-relaxed">
                  We may disclose your personal information in the good faith
                  belief that such action is necessary to: **comply with a legal
                  obligation**, protect and defend the rights or property of ATS
                  Global Tech, prevent or investigate possible wrongdoing in
                  connection with the Service, protect the personal safety of
                  users of the Service or the public, or protect against legal
                  liability.
                </p>
              </div>
            </div>

            <div
              className={`grid md:grid-cols-2 gap-10 items-start ${cardStyle}`}
            >
              <div className="md:order-first">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">
                  4. Data Retention and Security
                </h2>
                <p className="text-gray-900 leading-relaxed mb-4">
                  We will retain your Personal Data only for as long as is
                  necessary for the purposes set out in this Privacy Policy. We
                  will retain and use your information to the extent necessary
                  to comply with our legal obligations (for example, if we are
                  required to retain your data to comply with applicable laws).
                </p>
                <p className="text-gray-900 leading-relaxed">
                  We follow **industry-standard protocols** to protect your
                  data. This includes advanced **encryption** during data
                  storage and transmission, secure server configuration, access
                  restriction policies, and regular security audits. Only
                  authorized team members have access to sensitive data under
                  strict compliance guidelines.
                </p>
              </div>
              <img
                src="https://placehold.co/500x350/fff7ed/f97316?text=Secure+Storage+and+Retention"
                alt="Data Retention and Security"
                className="rounded-xl shadow-lg w-full h-auto object-cover border-4 border-orange-100"
              />
            </div>

            <div className={`md:col-span-2 ${cardStyle}`}>
              <h2 className="text-3xl font-bold text-orange-600 mb-4">
                5. Children's Privacy
              </h2>
              <p className="text-gray-900 leading-relaxed">
                Our Service does not address anyone under the age of 13
                ("Children"). We do not knowingly collect personally
                identifiable information from anyone under the age of 13. If you
                are a parent or guardian and you are aware that your child has
                provided us with Personal Data, please contact us. If we become
                aware that we have collected Personal Data from children without
                verification of parental consent, we take steps to remove that
                information from our servers.
              </p>
            </div>

            <div className={`md:col-span-2 ${cardStyle}`}>
              <h2 className="text-3xl font-bold text-orange-600 mb-4">
                6. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-900 leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. We will let you know via email and/or a prominent
                notice on our Service, prior to the change becoming effective
                and update the "Last updated" date at the top of this Privacy
                Policy. You are advised to review this Privacy Policy
                periodically for any changes. Changes to this Privacy Policy are
                effective when they are posted on this page.
              </p>
            </div>
          </div>

        
          <div className="text-center mt-24 pt-6 border-t-2 border-orange-200">
            <p className="text-gray-500 text-md">
              <span className="font-semibold text-gray-700">
                Need immediate assistance or have privacy concerns?
              </span>
              Contact our dedicated team at
              <a
                href="mailto:info@atsglobaltech.in"
                className="text-orange-600 hover:text-orange-800 transition font-semibold"
              >

                info@atsglobaltech.in
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
