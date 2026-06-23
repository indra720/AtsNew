import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { MapPin, Heart, Coffee, GraduationCap, Gift, X, Loader2, CheckCircle, AlertTriangle, } from "lucide-react";
const API_BASE_URL = "http://localhost:5000";
const jobs = [
    {
        title: "Senior Full Stack Developer",
        image: "https://placehold.co/600x400/0f766e/ffffff?text=Full+Stack",
        description: "Lead the development of scalable web applications and mentor junior developers, focusing on modern React and Node.js solutions.",
        tags: ["React", "Node.js", "TypeScript", "AWS"],
        location: "Jaipur, Rajasthan",
    },
    {
        title: "DevOps Engineer",
        image: "https://placehold.co/600x400/0f766e/ffffff?text=DevOps+Pipeline",
        description: "Design and maintain CI/CD pipelines and robust cloud infrastructure using containerization and automation tools.",
        tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
        location: "Remote",
    },
    {
        title: "UI/UX Designer",
        image: "https://placehold.co/600x400/0f766e/ffffff?text=UI%2FUX+Design",
        description: "Create intuitive and beautiful user experiences for our products. Focus on accessibility and modern design trends.",
        tags: ["Figma", "Adobe XD", "Prototyping", "User Research", "Accessibility"],
        location: "Jaipur, Rajasthan",
    },
    {
        title: "Data Scientist",
        image: "https://placehold.co/600x400/0f766e/ffffff?text=Data+Science",
        description: "Analyze complex data sets and build predictive models using advanced statistical methods and ML frameworks.",
        tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
        location: "Jaipur, Rajasthan",
    },
    {
        title: "Product Manager",
        image: "https://placehold.co/600x400/0f766e/ffffff?text=Product+Strategy",
        description: "Drive product vision and strategy for our key initiatives, working closely with engineering and marketing teams.",
        tags: ["Agile", "Leadership", "Analytics", "Strategy"],
        location: "Jaipur, Rajasthan",
    },
    {
        title: "Cybersecurity Specialist",
        image: "https://placehold.co/600x400/0f766e/ffffff?text=Security+Specialist",
        description: "Protect our systems, conduct vulnerability assessments, and ensure compliance with all security standards.",
        tags: ["Penetration Testing", "CISSP", "Network Security"],
        location: "Jaipur, Rajasthan",
    },
];
const CustomAlert = ({ type, message }) => {
    const isSuccess = type === 'success';
    const Icon = isSuccess ? CheckCircle : AlertTriangle;
    const bgColor = isSuccess ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700';
    return (_jsxs("div", { className: `mt-4 p-4 border rounded-xl flex items-center shadow-md ${bgColor}`, role: "alert", children: [_jsx(Icon, { className: "w-5 h-5 mr-3 shrink-0" }), _jsx("p", { className: "text-sm font-medium", children: message })] }));
};
const ApplyModal = ({ job, onClose }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        experience: "",
        resume: null,
        image: null,
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        const target = e.target;
        const { name, value, files } = target;
        setForm((prev) => ({
            ...prev,
            [name]: files && files.length > 0 ? files[0] : value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        setMessage('');
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            const success = Math.random() > 0.1;
            if (success) {
                setStatus('success');
                setMessage(`Thank you, ${form.name}! Your application for ${job.title} has been received.`);
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    experience: "",
                    resume: null,
                    image: null,
                    message: "",
                });
            }
            else {
                setStatus('error');
                setMessage("Application submission failed. Please check your inputs and try again.");
            }
        }
        catch (err) {
            setStatus('error');
            setMessage("A server error occurred during submission.");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "fixed inset-0 bg-black/60 flex items-start justify-center z-50 p-4 sm:p-8 overflow-y-auto", children: _jsxs("div", { className: "bg-white rounded-2xl shadow-2xl max-w-lg w-full mt-10 mb-10 p-6 relative", children: [_jsx("button", { onClick: onClose, className: "absolute top-4 right-4 text-gray-500 hover:text-teal-600 transition p-1 rounded-full bg-gray-50 hover:bg-teal-50", children: _jsx(X, { size: 24 }) }), _jsxs("h2", { className: "text-2xl font-bold text-teal-700 mb-6 border-b pb-3", children: ["Apply for ", _jsx("span", { className: "text-cyan-600", children: job.title })] }), _jsxs("p", { className: "text-sm text-gray-500 mb-4", children: ["Location: ", job.location] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { type: "text", name: "name", placeholder: "Full Name", value: form.name, onChange: handleChange, required: true, className: "w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" }), _jsx("input", { type: "email", name: "email", placeholder: "Email Address", value: form.email, onChange: handleChange, required: true, className: "w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" }), _jsx("input", { type: "tel", name: "phone", placeholder: "Phone Number (e.g., +91 98765 43210)", value: form.phone, onChange: handleChange, required: true, className: "w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" }), _jsx("input", { type: "text", name: "experience", placeholder: "Years of Experience (e.g., 5)", value: form.experience, onChange: handleChange, className: "w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [_jsxs("div", { children: [_jsxs("label", { className: "text-sm text-gray-700 block mb-1 font-medium", children: ["Upload Resume (PDF/DOC) ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { type: "file", name: "resume", accept: ".pdf,.doc,.docx", onChange: handleChange, required: true, className: "w-full border border-gray-300 rounded-xl p-2 text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-sm text-gray-700 block mb-1 font-medium", children: "Upload Image (Optional)" }), _jsx("input", { type: "file", name: "image", accept: "image/*", onChange: handleChange, className: "w-full border border-gray-300 rounded-xl p-2 text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer" })] })] }), _jsx("textarea", { name: "message", rows: 4, placeholder: "Why do you want to join us? (Cover Letter)", value: form.message, onChange: handleChange, className: "w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" }), _jsx("button", { type: "submit", disabled: loading, className: "w-full flex items-center justify-center bg-linear-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed", children: loading ? (_jsxs(_Fragment, { children: [_jsx(Loader2, { className: "h-5 w-5 mr-2 animate-spin" }), " Submitting..."] })) : ("Submit Application") })] }), status && _jsx(CustomAlert, { type: status, message: message }), _jsx("p", { className: "mt-4 text-xs text-center text-gray-500", children: "Note: This is a placeholder submission and will not be sent to a server." })] }) }));
};
const NonTechForm = () => {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        category: "",
        experience: "",
        resume: null,
        image: null,
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (!files || files.length === 0)
            return;
        setForm((prev) => ({
            ...prev,
            [name]: files[0],
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        setMessage('');
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            const success = Math.random() > 0.1;
            if (success) {
                setStatus('success');
                setMessage(`Thank you, ${form.fullName}! Your application for ${form.category || 'Other Role'} has been received.`);
                setForm({
                    fullName: "",
                    email: "",
                    phone: "",
                    category: "",
                    experience: "",
                    resume: null,
                    image: null,
                    message: "",
                });
            }
            else {
                setStatus('error');
                setMessage("Application submission failed. Please try again.");
            }
        }
        catch (err) {
            setStatus('error');
            setMessage("A server error occurred during submission.");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { className: "bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 h-fit lg:sticky lg:top-10", children: [_jsxs("h2", { className: "text-2xl font-bold text-teal-700 mb-4", children: ["Apply for ", _jsx("span", { className: "text-cyan-600", children: "Other Roles" })] }), _jsx("p", { className: "text-gray-500 text-sm mb-6", children: "If your expertise doesn't fit a specific technical role, tell us about yourself here." }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { type: "text", name: "fullName", placeholder: "Full Name", value: form.fullName, onChange: handleChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" }), _jsx("input", { type: "email", name: "email", placeholder: "Email Address", value: form.email, onChange: handleChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" }), _jsx("input", { type: "tel", name: "phone", placeholder: "Phone Number", value: form.phone, onChange: handleChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" }), _jsxs("select", { name: "category", value: form.category, onChange: handleChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition", children: [_jsx("option", { value: "", disabled: true, children: "Select Category *" }), _jsx("option", { value: "Non-Technical", children: "Non-Technical" }), _jsx("option", { value: "Support", children: "Support" }), _jsx("option", { value: "HR / Management", children: "HR / Management" }), _jsx("option", { value: "Marketing / Sales", children: "Marketing / Sales" }), _jsx("option", { value: "Other", children: "Other" })] }), _jsx("input", { type: "text", name: "experience", placeholder: "Years of Relevant Experience (e.g., 2)", value: form.experience, onChange: handleChange, className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsxs("label", { className: "block text-gray-700 text-sm mb-1 font-medium", children: ["Resume (PDF/DOC) ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { type: "file", name: "resume", accept: ".pdf,.doc,.docx", onChange: handleFileChange, required: true, className: "w-full border border-gray-300 rounded-xl px-3 py-2 text-sm file:mr-3 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 text-sm mb-1 font-medium", children: "Image (Optional)" }), _jsx("input", { type: "file", name: "image", accept: "image/*", onChange: handleFileChange, className: "w-full border border-gray-300 rounded-xl px-3 py-2 text-sm file:mr-3 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer" })] })] }), _jsx("textarea", { name: "message", placeholder: "Tell us why you want to join ATS GLOBAL TECH", rows: 4, value: form.message, onChange: handleChange, className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" }), _jsx("button", { type: "submit", disabled: loading, className: "w-full flex items-center justify-center bg-linear-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed", children: loading ? (_jsxs(_Fragment, { children: [_jsx(Loader2, { className: "h-5 w-5 mr-2 animate-spin" }), " Submitting..."] })) : ("Submit Non-Technical Application") }), status && _jsx(CustomAlert, { type: status, message: message })] })] }));
};
const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    return (_jsxs("div", { className: "min-h-screen font-sans bg-gray-50", children: [_jsxs("section", { className: "relative pt-20 pb-12 bg-linear-to-br from-teal-50 via-white to-cyan-100 text-gray-900 overflow-hidden", children: [_jsx("div", { className: "absolute -top-20 -left-20 w-[400px] h-[400px] bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30" }), _jsx("div", { className: "absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" }), _jsxs("div", { className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12", children: [_jsxs("div", { className: "text-left py-4", children: [_jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight", children: ["Join Our", _jsx("span", { className: "bg-linear-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent", children: "Amazing Team" })] }), _jsxs("p", { className: "text-lg md:text-xl text-gray-700 max-w-xl mb-10", children: ["Be part of a team that's shaping the digital future. Explore our open positions and grow your career with", _jsx("span", { className: "text-teal-600 font-bold", children: "ATS GLOBAL TECH" }), "."] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]", children: [_jsx("h3", { className: "text-xl font-semibold text-teal-600 mb-2", children: "\uD83D\uDE80 Innovative Projects" }), _jsx("p", { className: "text-gray-600 text-sm", children: "Work on tech solutions that challenge your creativity and impact millions of users." })] }), _jsxs("div", { className: "bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]", children: [_jsx("h3", { className: "text-xl font-semibold text-teal-600 mb-2", children: "\uD83C\uDF0D Global Culture" }), _jsx("p", { className: "text-gray-600 text-sm", children: "Collaborate with diverse and supportive teams across the globe, promoting inclusion." })] }), _jsxs("div", { className: "bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]", children: [_jsx("h3", { className: "text-xl font-semibold text-teal-600 mb-2", children: "\uD83D\uDCBC Career Growth" }), _jsx("p", { className: "text-gray-600 text-sm", children: "Learn & grow with structured mentorship, clear career paths, and generous learning budgets." })] }), _jsxs("div", { className: "bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]", children: [_jsx("h3", { className: "text-xl font-semibold text-teal-600 mb-2", children: "\uD83E\uDD1D Friendly Team" }), _jsx("p", { className: "text-gray-600 text-sm", children: "Enjoy a supportive, passionate, and collaborative work environment where your voice is heard." })] })] })] }), _jsx(NonTechForm, {})] })] }), _jsx("section", { className: "py-6 bg-white text-gray-900", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-4xl font-extrabold text-center text-teal-700 mb-12", children: "Technical Openings" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4", children: jobs.map((job) => (_jsxs("div", { className: "bg-white border border-gray-200 rounded-xl shadow-xl hover:shadow-2xl hover:border-teal-400 transition transform hover:-translate-y-1 overflow-hidden flex flex-col h-full", children: [_jsx("img", { src: job.image, alt: job.title, className: "w-full h-48 object-cover object-center", onError: (e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = `https://placehold.co/600x400/0f766e/ffffff?text=${encodeURIComponent(job.title)}`;
                                        } }), _jsxs("div", { className: "p-6 flex flex-col grow", children: [_jsx("h3", { className: "text-2xl font-bold text-teal-700 mb-2", children: job.title }), _jsx("p", { className: "text-gray-600 text-sm mb-4 grow", children: job.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4 mt-auto", children: job.tags.map((tag) => (_jsx("span", { className: "text-xs px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full font-medium border border-cyan-200", children: tag }, tag))) }), _jsxs("p", { className: "text-sm text-gray-600 flex items-center gap-2 mb-4 pt-3 border-t border-gray-100", children: [_jsx(MapPin, { className: "h-4 w-4 text-teal-500" }), " ", job.location] }), _jsx("button", { onClick: () => setSelectedJob(job), className: "w-full bg-linear-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-xl font-bold hover:from-teal-600 hover:to-cyan-600 transition shadow-md hover:shadow-lg", children: "Apply Now" })] })] }, job.title))) })] }) }), _jsx("section", { className: "py-6 bg-teal-50", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-3xl font-bold text-center text-teal-700 mb-12", children: "What We Offer You" }), _jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-8 text-center", children: [_jsxs("div", { className: "flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition", children: [_jsx(Heart, { className: "h-8 w-8 text-rose-500 mb-3" }), _jsx("p", { className: "text-base font-semibold text-gray-800", children: "Health & Wellness" }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Comprehensive coverage." })] }), _jsxs("div", { className: "flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition", children: [_jsx(Coffee, { className: "h-8 w-8 text-yellow-600 mb-3" }), _jsx("p", { className: "text-base font-semibold text-gray-800", children: "Flexible Hours" }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Work-life balance focus." })] }), _jsxs("div", { className: "flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition", children: [_jsx(GraduationCap, { className: "h-8 w-8 text-blue-500 mb-3" }), _jsx("p", { className: "text-base font-semibold text-gray-800", children: "Learning Budget" }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Invest in your skills." })] }), _jsxs("div", { className: "flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition", children: [_jsx(Gift, { className: "h-8 w-8 text-purple-600 mb-3" }), _jsx("p", { className: "text-base font-semibold text-gray-800", children: "Performance Bonus" }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Rewarding your success." })] })] })] }) }), selectedJob && (_jsx(ApplyModal, { job: selectedJob, onClose: () => setSelectedJob(null) }))] }));
};
export default Careers;
