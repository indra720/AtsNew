import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Card3D from "./ui/Card3D";

export const InnovationJourney: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F0F7FF] via-[#E8F4FD] to-white text-slate-900 overflow-hidden border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOBAL ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
            Connect With ATS Global Tech
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Let’s collaborate, innovate, and engineer scalable systems together. Visit our innovation hub or connect online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Card */}
          <div className="lg:col-span-7">
            <Card3D intensity={8} className="cloud-card p-6 h-full border border-blue-100/90 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black text-slate-900 font-display">Innovation Headquarters</h3>
                  <span className="text-xs font-mono font-bold text-[#0066FF] px-3 py-1 rounded-full bg-blue-50 border border-blue-200 shadow-xs">
                    JAIPUR, INDIA
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 font-medium">
                  ATS building, 4/98, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur, Rajasthan 302021
                </p>
              </div>

              {/* Styled Map Viewport */}
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-blue-100 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.1606834398303!2d75.7529906!3d26.8983951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dee53548b5%3A0x66d9679054b4bcbd!2sATS%20GLOBAL%20TECH!5e0!3m2!1sen!2sin!4v1761739403746!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="border-0 opacity-95"
                  title="ATS Global Tech Location Map"
                />
                {/* Overlay radar beacon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-8 h-8 rounded-full bg-[#0066FF]/40 animate-ping absolute inset-0" />
                  <div className="w-8 h-8 rounded-full bg-[#0066FF] border-2 border-white shadow-[0_0_20px_#0066FF] flex items-center justify-center relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Social Hub & Direct Contact Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card3D intensity={8} className="cloud-card p-6 border border-blue-100/90 rounded-3xl">
              <h3 className="text-lg font-black text-slate-900 font-display mb-4">Direct Touchpoints</h3>
              <div className="space-y-4">
                <a
                  href="tel:+919929825003"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-blue-100 hover:border-[#0066FF]/50 transition group shadow-xs hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition shadow-inner">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-mono uppercase font-bold">Call Engineering Support</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#0066FF] transition">+91 9929825003 / +91 820 917 5003</div>
                  </div>
                </a>

                <a
                  href="mailto:info@atsglobaltech.in"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-blue-100 hover:border-[#0066FF]/50 transition group shadow-xs hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition shadow-inner">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-mono uppercase font-bold">Direct Inquiries</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#0066FF] transition">info@atsglobaltech.in</div>
                  </div>
                </a>
              </div>
            </Card3D>

            <Card3D intensity={8} className="cloud-card p-6 border border-blue-100/90 rounded-3xl grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900 font-display mb-2">Social Intelligence Hub</h3>
                <p className="text-xs text-slate-600 mb-6 font-medium">
                  Follow our engineering updates, product launches, tech webinars, and company milestones.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61574788298611", color: "hover:text-[#1877F2] hover:border-[#1877F2]/40" },
                  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/sudo.techlabs", color: "hover:text-[#E4405F] hover:border-[#E4405F]/40" },
                  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/sudo-techlabs-8b6708375", color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40" },
                  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com", color: "hover:text-[#FF0000] hover:border-[#FF0000]/40" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-3.5 rounded-2xl bg-white border border-blue-100 text-slate-700 text-xs font-bold ${item.color} shadow-xs hover:shadow-md transition duration-300`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </div>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  );
                })}
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationJourney;
