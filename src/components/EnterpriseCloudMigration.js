import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Cloud, TrendingUp, Lock, HardHat, FileText, Settings, Zap, } from "lucide-react";
const CloudFeature = ({ title, desc, img, Icon, }) => (_jsxs("div", { className: "bg-white border border-teal-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-teal-300/40 transition duration-300 transform hover:-translate-y-1", children: [_jsxs("div", { className: "relative w-full h-44", children: [_jsx("img", { src: img, alt: title, className: "w-full h-full object-cover", onError: (e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                            "https://placehold.co/600x400/80CBC4/1E88E5?text=Cloud+Feature";
                    } }), _jsx("div", { className: "absolute top-0 right-0 m-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-teal-600", children: _jsx(Icon, { className: "w-6 h-6" }) })] }), _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "font-bold text-xl text-teal-800 mb-2", children: title }), _jsx("p", { className: "text-gray-700 text-base leading-relaxed", children: desc })] })] }));
export default function App() {
    const migrationPhases = [
        {
            title: "1️⃣ Assessment",
            detail: "Comprehensive application audit, technical feasibility study, and Total Cost of Ownership (TCO) estimation to form a clear transformation roadmap.",
            Icon: FileText,
        },
        {
            title: "2️⃣ Planning & Architecture",
            detail: "Designing the target cloud-native solution (e.g., microservices, serverless) using AWS/GCP best practices and compliance standards.",
            Icon: Settings,
        },
        {
            title: "3️⃣ Migration Execution",
            detail: "Phased execution strategy: from simple Lift & Shift to complex Replatforming and Microservices decomposition, utilizing automated tools.",
            Icon: HardHat,
        },
        {
            title: "4️⃣ Optimization & FinOps",
            detail: "Continuous monitoring, performance refinement, auto-scaling configuration, and FinOps practices to ensure cost efficiency post-migration.",
            Icon: TrendingUp,
        },
    ];
    return (_jsx("main", { className: "bg-linear-to-b from-teal-50 via-white to-cyan-100 text-gray-900 min-h-screen py-16 md:py-32 px-4 font-serif antialiased", children: _jsxs("div", { className: "w-full", children: [_jsxs("section", { className: "grid gap-12 lg:grid-cols-2 items-center mb-24", children: [_jsxs("div", { className: "lg:pr-8", children: [_jsx("span", { className: "text-sm bg-teal-100 text-teal-700 px-4 py-1 rounded-full font-medium shadow-sm inline-block mb-4", children: "Cloud Solutions \u00B7 Enterprise \u00B7 DevOps" }), _jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-3 mb-6 text-teal-900", children: "Accelerate Enterprise Cloud Transformation" }), _jsx("p", { className: "text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-xl", children: "High-scale cloud transformation ensuring peak performance, zero-trust security, and maximum cost efficiency. We move your legacy infrastructure to modern cloud-native architecture \u2014 seamlessly executed with a zero-downtime strategy." }), _jsx("button", { className: "bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:shadow-teal-400/40 transition duration-300 transform hover:scale-105", children: "Start Your Journey" })] }), _jsx("img", { src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1400", alt: "Cloud Migration Strategy", className: "rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover transition duration-500", onError: (e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src =
                                    "https://placehold.co/1400x900/50C2C7/ffffff?text=Enterprise+Cloud";
                            } })] }), _jsx("section", { className: "grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-24 p-6 bg-white rounded-2xl shadow-inner", children: [
                        { label: "Infra Cost Savings", value: "60%" },
                        { label: "Downtime Reduced", value: "95%" },
                        { label: "Faster Deployment", value: "4x" },
                        { label: "Microservices Shift", value: "100%" },
                    ].map((stat) => (_jsxs("div", { className: "border-r last:border-r-0 border-teal-100 px-2", children: [_jsx("p", { className: "text-4xl font-extrabold text-teal-600 mb-1", children: stat.value }), _jsx("p", { className: "text-sm text-gray-600 uppercase tracking-wider", children: stat.label })] }, stat.label))) }), _jsxs("section", { className: "mb-24", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-center mb-12 text-teal-800", children: "Why Migrate to the Cloud?" }), _jsxs("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: [_jsx(CloudFeature, { title: "Scalability & Flexibility", desc: "Leverage auto-scaling to guarantee consistent performance under fluctuating loads while precisely optimizing resource costs.", img: "https://images.pexels.com/photos/2387532/pexels-photo-2387532.jpeg?auto=compress&cs=tinysrgb&w=1200", Icon: Cloud }), _jsx(CloudFeature, { title: "Improved Performance", desc: "Achieve sub-millisecond latency and high availability with globally distributed compute and robust storage solutions.", img: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200", Icon: Zap }), _jsx(CloudFeature, { title: "Zero Trust Security", desc: "Implement identity-aware access management, granular control policies, and continuous compliance checks across your entire environment.", img: "https://images.pexels.com/photos/5965892/pexels-photo-5965892.jpeg?auto=compress&cs=tinysrgb&w=1200", Icon: Lock })] })] }), _jsxs("section", { className: "mb-24", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-8 text-teal-800", children: "Our Proven Migration Process" }), _jsx("div", { className: "grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto", children: migrationPhases.map((step) => (_jsxs("div", { className: "p-6 border-2 border-teal-200 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300", children: [_jsx(step.Icon, { className: "w-8 h-8 text-teal-600 mb-3" }), _jsx("h4", { className: "font-extrabold text-lg text-teal-700 mb-2", children: step.title }), _jsx("p", { className: "text-sm text-gray-700", children: step.detail })] }, step.title))) })] }), _jsxs("section", { className: "mb-24", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-6 text-teal-800", children: "Core Technology Expertise" }), _jsx("div", { className: "flex gap-3 justify-center flex-wrap max-w-4xl mx-auto", children: [
                                "AWS/Azure/GCP",
                                "Docker Containers",
                                "Kubernetes (EKS/AKS/GKE)",
                                "Terraform / Ansible",
                                "NoSQL (MongoDB/DynamoDB)",
                                "Event Streaming (Kafka)",
                                "CI/CD Pipelines (GitOps)",
                                "Serverless Computing",
                            ].map((item) => (_jsx("span", { className: "px-4 py-2 bg-teal-50 border border-teal-300 rounded-full text-sm font-semibold text-teal-700 shadow-sm whitespace-nowrap", children: item }, item))) })] }), _jsxs("section", { className: "p-8 sm:p-12 bg-white border-2 border-teal-300 rounded-3xl text-center shadow-2xl shadow-teal-200/50", children: [_jsx("h3", { className: "text-3xl md:text-4xl font-extrabold mb-4 text-teal-900", children: "Ready for a Digital-First Infrastructure?" }), _jsx("p", { className: "text-lg text-gray-700 mb-8 max-w-2xl mx-auto", children: "Transform your infrastructure with future-proof cloud modernization and unlock significant operational efficiencies." }), _jsx("button", { className: "bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:shadow-teal-400/50 transition duration-300 transform hover:scale-105", children: "Book a Free Consultation" })] })] }) }));
}
