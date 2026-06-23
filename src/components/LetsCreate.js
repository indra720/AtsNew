import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import logo from "/atslogo7.jpg";
const initialState = {
    projectName: "",
    frontendLanguage: "",
    backendLanguage: "",
    database: "",
    deployment: "",
    name: "",
    phone: "",
    email: "",
    description: "",
};
const API_BASE_URL = "http://localhost:5000";
const InputField = ({ label, ...props }) => (_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("label", { className: "text-sm font-semibold text-gray-700", children: label }), _jsx("input", { ...props, className: "w-full border border-gray-300 shadow-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none" })] }));
const SelectField = ({ label, children, ...props }) => (_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("label", { className: "text-sm font-semibold text-gray-700", children: label }), _jsx("select", { ...props, className: "w-full border border-gray-300 shadow-sm rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-400 outline-none", children: children })] }));
const LetsCreate = () => {
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${API_BASE_URL}/api/idea-bank`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok)
                throw new Error(data.message);
            setShowModal(true);
            setForm(initialState);
        }
        catch (err) {
            setError(err.message || "Unable to submit your idea.");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("section", { className: "min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-6 px-4 flex justify-center", children: [_jsxs("div", { className: "w-full max-w-7xl bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-3xl p-10", children: [_jsxs("div", { className: "text-center mb-10", children: [_jsxs("h1", { className: "text-4xl md:text-5xl font-extrabold text-gray-800", children: ["IDEABANK", _jsx("h6", { className: "text-blue-600", children: " Let's Create Your Vision & More" })] }), _jsx("p", { className: "mt-3 text-gray-600 max-w-xl mx-auto", children: "Share your project concept, preferred technologies, and deployment plans." })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [_jsx("div", { className: "grid md:grid-cols-1 gap-6", children: _jsx(InputField, { label: "Project Name", name: "projectName", required: true, value: form.projectName, onChange: handleChange }) }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs(SelectField, { label: "Frontend Language", name: "frontendLanguage", required: true, value: form.frontendLanguage, onChange: handleChange, children: [_jsx("option", { value: "", children: "Select Frontend" }), _jsx("option", { value: "HTML", children: "(HTML, CSS, JavaScript)" }), _jsx("option", { value: "React", children: "React" }), _jsx("option", { value: "Vue", children: "Vue.js" })] }), _jsxs(SelectField, { label: "Database", name: "database", required: true, value: form.database, onChange: handleChange, children: [_jsx("option", { value: "", children: "Select Database" }), _jsx("option", { value: "MongoDB", children: "MongoDB" }), _jsx("option", { value: "MySQL", children: "MySQL" }), _jsx("option", { value: "PostgreSQL", children: "PostgreSQL" })] })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs(SelectField, { label: "Backend Language", name: "backendLanguage", required: true, value: form.backendLanguage, onChange: handleChange, children: [_jsx("option", { value: "", children: "Select Backend" }), _jsx("option", { value: "Node.js", children: "Node.js (Express)" }), _jsx("option", { value: "PHP", children: "PHP" }), _jsx("option", { value: "Python", children: "Python (Django)" })] }), _jsxs(SelectField, { label: "Deployment Platform", name: "deployment", required: true, value: form.deployment, onChange: handleChange, children: [_jsx("option", { value: "", children: "Select Deployment" }), _jsx("option", { value: "Shared Host", children: "Shared Host" }), _jsx("option", { value: "AWS", children: "AWS" }), _jsx("option", { value: "VPS", children: "VPS" })] })] }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [_jsx(InputField, { label: "Your Name", name: "name", required: true, value: form.name, onChange: handleChange }), _jsx(InputField, { label: "Phone Number", name: "phone", required: true, value: form.phone, onChange: handleChange }), _jsx(InputField, { label: "Email", name: "email", required: true, value: form.email, onChange: handleChange })] }), _jsxs("div", { children: [_jsx("label", { className: "text-sm font-semibold text-gray-700 mb-1", children: "Project Description" }), _jsx("textarea", { name: "description", required: true, value: form.description, onChange: handleChange, rows: 4, className: "w-full border border-gray-300 rounded-xl px-4 py-3" })] }), _jsxs("div", { className: "flex flex-col items-center gap-3 mt-4", children: [_jsx("button", { type: "submit", disabled: loading, className: "px-10 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-xl", children: loading ? "Submitting..." : "Submit Your Project" }), error && (_jsx("div", { className: "w-full text-center text-red-600 bg-red-100 py-2 rounded-md", children: error }))] })] })] }), showModal && (_jsx("div", { className: "fixed inset-0 bg-black/50 flex justify-center items-center z-50", children: _jsxs("div", { className: "bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-6 flex gap-5", children: [_jsx("div", { className: "flex items-center justify-center w-1/3", children: _jsx("img", { src: logo, className: "w-24 h-24 object-contain" }) }), _jsxs("div", { className: "w-2/3", children: [_jsx("h2", { className: "text-xl font-bold text-green-600", children: "Successful \uD83C\uDF89" }), _jsx("p", { className: "text-gray-700 mt-1", children: "Your idea has been successfully submitted!" }), _jsx("button", { onClick: () => setShowModal(false), className: "mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg", children: "Close" })] })] }) }))] }));
};
export default LetsCreate;
