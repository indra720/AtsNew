

import React, { useState, FormEvent, ChangeEvent } from "react";
import logo from "/atslogo7.jpg";

type FrontendLang = "HTML" | "CSS" | "JavaScript" | "React" | "Vue";
type BackendLang = "Node.js" | "PHP" | "Python";
type DatabaseType = "MongoDB" | "MySQL" | "PostgreSQL";
type DeploymentType = "Lambda" | "Shared Host" | "AWS" | "VPS";

interface FormData {
  projectName: string;
  frontendLanguage: FrontendLang | "";
  backendLanguage: BackendLang | "";
  database: DatabaseType | "";
  deployment: DeploymentType | "";
  name: string;
  phone: string;
  email: string;
  description: string;
}

const initialState: FormData = {
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

const InputField = ({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    <input
      {...props}
      className="w-full border border-gray-300 shadow-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
    />
  </div>
);

const SelectField = ({
  label,
  children,
  ...props
}: { label: string; children: React.ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    <select
      {...props}
      className="w-full border border-gray-300 shadow-sm rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
    >
      {children}
    </select>
  </div>
);

const LetsCreate: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialState);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
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
      if (!res.ok) throw new Error(data.message);

      setShowModal(true);
      setForm(initialState);
    } catch (err: any) {
      setError(err.message || "Unable to submit your idea.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-6 px-4 flex justify-center">
      <div className="w-full max-w-7xl bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-3xl p-10">

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            IDEABANK
            <h6 className="text-blue-600"> Let's Create Your Vision & More</h6>
          </h1>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Share your project concept, preferred technologies, and deployment plans.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-1 gap-6">
            <InputField
              label="Project Name"
              name="projectName"
              required
              value={form.projectName}
              onChange={handleChange}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <SelectField
              label="Frontend Language"
              name="frontendLanguage"
              required
              value={form.frontendLanguage}
              onChange={handleChange}
            >
              <option value="">Select Frontend</option>
              <option value="HTML">(HTML, CSS, JavaScript)</option>
              <option value="React">React</option>
              <option value="Vue">Vue.js</option>
            </SelectField>

            <SelectField
              label="Database"
              name="database"
              required
              value={form.database}
              onChange={handleChange}
            >
              <option value="">Select Database</option>
              <option value="MongoDB">MongoDB</option>
              <option value="MySQL">MySQL</option>
              <option value="PostgreSQL">PostgreSQL</option>
            </SelectField>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <SelectField
              label="Backend Language"
              name="backendLanguage"
              required
              value={form.backendLanguage}
              onChange={handleChange}
            >
              <option value="">Select Backend</option>
              <option value="Node.js">Node.js (Express)</option>
              <option value="PHP">PHP</option>
              <option value="Python">Python (Django)</option>
            </SelectField>

            <SelectField
              label="Deployment Platform"
              name="deployment"
              required
              value={form.deployment}
              onChange={handleChange}
            >
              <option value="">Select Deployment</option>
              <option value="Shared Host">Shared Host</option>
              <option value="AWS">AWS</option>
              <option value="VPS">VPS</option>
            </SelectField>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <InputField
              label="Your Name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <InputField
              label="Phone Number"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
            />
            <InputField
              label="Email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              name="description"
              required
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            ></textarea>
          </div>

          <div className="flex flex-col items-center gap-3 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-xl"
            >
              {loading ? "Submitting..." : "Submit Your Project"}
            </button>

            {error && (
              <div className="w-full text-center text-red-600 bg-red-100 py-2 rounded-md">
                {error}
              </div>
            )}
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-6 flex gap-5">

            <div className="flex items-center justify-center w-1/3">
              <img src={logo} className="w-24 h-24 object-contain" />
            </div>

            <div className="w-2/3">
              <h2 className="text-xl font-bold text-green-600">
                Successful 🎉
              </h2>

              <p className="text-gray-700 mt-1">
                Your idea has been successfully submitted!
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default LetsCreate;
