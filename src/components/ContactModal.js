import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { X, Send } from "lucide-react";
const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        details: "",
    });
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);
    if (!isOpen)
        return null;
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for reaching out! We'll get back to you soon.");
        console.log("Form Submitted:", formData);
        onClose();
    };
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3", children: ["\\   ", _jsxs("div", { className: "relative w-[90%] sm:w-[400px] bg-linear-to-b from-teal-50 via-white to-gray-100 rounded-2xl p-6 shadow-xl animate-fadeInUp border border-teal-200", children: [_jsx("button", { onClick: onClose, className: "absolute top-3 right-3 bg-teal-100 hover:bg-teal-200 rounded-full p-2 text-teal-700 transition", children: _jsx(X, { className: "w-5 h-5" }) }), _jsx("h3", { className: "text-lg font-semibold text-teal-900 mb-4 text-center", children: "Contact Us" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-3 text-sm", children: [_jsxs("div", { children: [_jsx("label", { className: "text-teal-800 text-xs font-medium", children: "Full Name" }), _jsx("input", { name: "fullName", value: formData.fullName, onChange: handleChange, placeholder: "Enter Full Name", className: "w-full h-10 rounded-md border border-gray-200 bg-white text-gray-800 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-teal-800 text-xs font-medium", children: "Email" }), _jsx("input", { name: "email", type: "email", value: formData.email, onChange: handleChange, placeholder: "Enter Email", className: "w-full h-10 rounded-md border border-gray-200 bg-white text-gray-800 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-teal-800 text-xs font-medium", children: "Phone" }), _jsx("input", { name: "phone", type: "tel", value: formData.phone, onChange: handleChange, placeholder: "Enter Phone Number", className: "w-full h-10 rounded-md border border-gray-200 bg-white text-gray-800 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-teal-800 text-xs font-medium", children: "Company" }), _jsx("input", { name: "company", value: formData.company, onChange: handleChange, placeholder: "Enter Company Name", className: "w-full h-10 rounded-md border border-gray-200 bg-white text-gray-800 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-teal-800 text-xs font-medium", children: "Project Details" }), _jsx("textarea", { name: "details", rows: 3, value: formData.details, onChange: handleChange, placeholder: "Tell us about your project...", className: "w-full rounded-md border border-gray-200 bg-white text-gray-800 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 transition" })] }), _jsxs("button", { type: "submit", className: "w-full h-10 rounded-md bg-linear-to-r from-teal-500 to-teal-600 text-white flex justify-center items-center gap-2 font-semibold hover:from-teal-600 hover:to-teal-700 shadow-md transition", children: [_jsx(Send, { className: "w-4 h-4" }), "Send Message"] })] })] })] }));
};
export default ContactModal;
