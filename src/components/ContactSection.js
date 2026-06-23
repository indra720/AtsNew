import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    details: "",
};
const ContactSection = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [submitStatus, setSubmitStatus] = useState("idle");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitStatus === "submitting")
            return;
        setSubmitStatus("submitting");
        console.log("Form Submitted:", formData);
        setTimeout(() => {
            const isSuccess = true;
            if (isSuccess) {
                setSubmitStatus("success");
                setFormData(initialFormData);
            }
            else {
                setSubmitStatus("error");
            }
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }, 1500);
    };
    const isSubmitting = submitStatus === "submitting";
    return (_jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-white", style: { fontFamily: "Times New Roman, serif" }, children: _jsx("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start", children: [_jsxs("div", { "data-aos": "fade-right", children: [_jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight", children: "Let's Start Building Something Amazing Together" }), _jsx("p", { className: "text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed", "data-aos": "fade-right", "data-aos-delay": "100", children: "Ready to transform your business with cutting-edge technology? Connect with our experts and turn your vision into reality." }), _jsx("p", { className: "text-base sm:text-lg text-gray-700 mb-10 leading-relaxed", "data-aos": "fade-right", "data-aos-delay": "200", children: "We follow a **transparent, client-first** approach \u2014 from idea validation to complete development. You\u2019ll receive structured project planning, fast communication, and consistent progress updates so your experience stays smooth, clear, and fully reliable throughout the journey." }), _jsx("div", { className: "space-y-7", children: [
                                    {
                                        icon: _jsx(Phone, { className: "h-6 w-6 text-teal-600" }),
                                        title: "Call Us",
                                        info: "+91 820 917 5003",
                                        link: "tel:+918209175003",
                                    },
                                    {
                                        icon: _jsx(Mail, { className: "h-6 w-6 text-teal-600" }),
                                        title: "Email Us",
                                        info: "info@atsglobaltech.in",
                                        link: "mailto:info@atsglobaltech.in",
                                    },
                                    {
                                        icon: _jsx(MapPin, { className: "h-6 w-6 text-teal-600" }),
                                        title: "Visit Us",
                                        info: "Capital City Road, Jaipur (302021)",
                                        link: "#map-location",
                                    },
                                ].map((item, idx) => (_jsxs("a", { href: item.link, className: "flex items-center space-x-4 group", "data-aos": "fade-up", "data-aos-delay": idx * 120, children: [_jsx("div", { className: "p-3 rounded-full bg-teal-50 shadow-sm group-hover:bg-teal-100 transition duration-200", children: item.icon }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-gray-900 text-lg group-hover:text-teal-700", children: item.title }), _jsx("p", { className: "text-gray-700", children: item.info })] })] }, idx))) })] }), _jsxs("div", { className: "rounded-2xl shadow-2xl border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 lg:sticky lg:top-8 self-start", "data-aos": "fade-left", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("h3", { className: "font-semibold text-2xl mb-2 text-gray-900", children: "Get Free Consultation" }), _jsx("p", { className: "text-sm text-gray-600", children: "Fill out the form and our team will contact you within 24 hours." })] }), submitStatus === "success" && (_jsxs("div", { className: "mb-4 p-4 rounded-lg bg-teal-50 border border-teal-300 flex items-center gap-3", children: [_jsx(CheckCircle, { className: "h-6 w-6 text-teal-600" }), _jsx("span", { className: "text-teal-800 font-medium", children: "Thank you! Your message has been sent successfully. We will be in touch shortly." })] })), submitStatus === "error" && (_jsxs("div", { className: "mb-4 p-4 rounded-lg bg-red-50 border border-red-300 flex items-center gap-3", children: [_jsx(Mail, { className: "h-6 w-6 text-red-600" }), _jsx("span", { className: "text-red-800 font-medium", children: "Oops! Something went wrong. Please try sending the message again." })] })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                                            {
                                                name: "firstName",
                                                label: "First Name",
                                                placeholder: "Your good name...",
                                            },
                                            {
                                                name: "lastName",
                                                label: "Last Name",
                                                placeholder: "Last name",
                                            },
                                        ].map((field) => (_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: field.label }), _jsx("input", { name: field.name, value: formData[field.name], onChange: handleChange, placeholder: field.placeholder, required: true, className: "h-11 w-full rounded-lg border border-gray-300 bg-gray-50\n                      px-3 py-2 text-gray-900 focus:ring-2 focus:ring-teal-500 outline-none transition duration-150" })] }, field.name))) }), [
                                        {
                                            name: "email",
                                            type: "email",
                                            label: "Email",
                                            placeholder: "email@example.com",
                                            required: true,
                                        },
                                        {
                                            name: "phone",
                                            type: "tel",
                                            label: "Phone",
                                            placeholder: "+91 999 999 9999 (Optional)",
                                            required: false,
                                        },
                                        {
                                            name: "company",
                                            type: "text",
                                            label: "Company",
                                            placeholder: "Your company name (Optional)",
                                            required: false,
                                        },
                                    ].map((field) => (_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: field.label }), _jsx("input", { type: field.type, name: field.name, value: formData[field.name], onChange: handleChange, placeholder: field.placeholder, required: field.required, className: "h-11 w-full rounded-lg border border-gray-300 bg-gray-50\n                    px-3 py-2 text-gray-900 focus:ring-2 focus:ring-teal-500 outline-none transition duration-150" })] }, field.name))), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Project Details" }), _jsx("textarea", { name: "details", value: formData.details, onChange: handleChange, placeholder: "Tell us about your project or query...", rows: 4, required: true, className: "w-full rounded-lg border border-gray-300 bg-gray-50\n                  px-3 py-2 text-gray-900 focus:ring-2 focus:ring-teal-500 outline-none transition duration-150" })] }), _jsx("button", { type: "submit", disabled: isSubmitting, className: `inline-flex items-center justify-center gap-3 w-full
                h-12 px-6 rounded-lg font-medium text-white text-lg
                bg-linear-to-r from-cyan-500 to-teal-600
                transition-all duration-300 shadow-md ${isSubmitting
                                            ? "opacity-70 cursor-not-allowed"
                                            : "hover:scale-[1.02] hover:shadow-xl"}`, children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx(Loader2, { className: "h-5 w-5 animate-spin" }), "Submitting..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { className: "h-5 w-5" }), "Send Message"] })) })] })] })] }) }) }));
};
export default ContactSection;
