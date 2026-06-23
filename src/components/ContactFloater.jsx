import React from "react";
import { Phone } from "lucide-react";

const WhatsAppIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className={className}
  >
    <path
      fill="#25D366"
      d="M4 24C4 12.96 12.96 4 24 4s20 8.96 20 20-8.96 20-20 20S4 35.04 4 24z"
    />
    <path
      fill="#fff"
      d="M34.6 28.2c-.5-.2-3-1.5-3.5-1.7-.5-.2-.8-.2-1.1.2-.3.4-1.3 1.7-1.6 2-.3.3-.6.3-1 .1-.5-.2-2.1-.8-4-2.6-1.5-1.4-2.6-3.2-2.9-3.7-.3-.5-.1-.8.2-1.1.3-.3.5-.6.7-.9.2-.3.3-.5.5-.9.1-.3.1-.5 0-.7-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.8-1-.8h-.9c-.3 0-.9.1-1.3.6-.5.5-1.8 1.8-1.8 4.3s1.9 5 2.2 5.4c.3.4 3.7 5.6 9.1 7.7 1.3.5 2.3.8 3 .9 1.3.4 2.5.3 3.4.2 1.1-.2 3.3-1.4 3.8-2.8.5-1.4.5-2.6.3-2.8-.2-.3-.6-.4-1.1-.6z"
    />
  </svg>
);

const ContactFloater = ({ phoneNumber = "YOUR_PHONE_NUMBER" }) => {
  return (
    <div
      className="
      fixed bottom-4 right-4 z-50
      flex flex-col gap-4
      bg-white shadow-xl
      p-3 rounded-2xl
      border border-gray-300
    "
    >
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=Hello`}
        target="_blank"
        rel="noopener noreferrer"
        className="transition"
      >
        <WhatsAppIcon className="h-10 w-10" />
      </a>

      {/* Phone */}
      <a
        href={`tel:${phoneNumber}`}
        className="text-gray-700 hover:text-red-500 transition"
      >
        <Phone className="h-8 w-8" />
      </a>
    </div>
  );
};

export default ContactFloater;
