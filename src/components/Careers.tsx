import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  MapPin,
  Heart,
  Coffee,
  GraduationCap,
  Gift,
  X,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const API_BASE_URL = "http://localhost:5000";

interface Job {
  title: string;
  image: string;
  description: string;
  tags: string[];
  location: string;
}

interface ApplyFormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  resume: File | null;
  image: File | null;
  message: string;
}

interface NonTechFormData {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  experience: string;
  resume: File | null;
  image: File | null;
  message: string;
}

interface ApplyModalProps {
  job: Job;
  onClose: () => void;
}


const jobs: Job[] = [
  {
    title: "Senior Full Stack Developer",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=Full+Stack",
    description:
      "Lead the development of scalable web applications and mentor junior developers, focusing on modern React and Node.js solutions.",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "DevOps Engineer",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=DevOps+Pipeline",
    description:
      "Design and maintain CI/CD pipelines and robust cloud infrastructure using containerization and automation tools.",
    tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
    location: "Remote",
  },
  {
    title: "UI/UX Designer",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=UI%2FUX+Design",
    description:
      "Create intuitive and beautiful user experiences for our products. Focus on accessibility and modern design trends.",
    tags: ["Figma", "Adobe XD", "Prototyping", "User Research", "Accessibility"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "Data Scientist",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=Data+Science",
    description: "Analyze complex data sets and build predictive models using advanced statistical methods and ML frameworks.",
    tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "Product Manager",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=Product+Strategy",
    description: "Drive product vision and strategy for our key initiatives, working closely with engineering and marketing teams.",
    tags: ["Agile", "Leadership", "Analytics", "Strategy"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "Cybersecurity Specialist",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=Security+Specialist",
    description:
      "Protect our systems, conduct vulnerability assessments, and ensure compliance with all security standards.",
    tags: ["Penetration Testing", "CISSP", "Network Security"],
    location: "Jaipur, Rajasthan",
  },
];


const CustomAlert: React.FC<{ type: 'success' | 'error', message: string }> = ({ type, message }) => {
    const isSuccess = type === 'success';
    const Icon = isSuccess ? CheckCircle : AlertTriangle;
    const bgColor = isSuccess ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700';

    return (
        <div className={`mt-4 p-4 border rounded-xl flex items-center shadow-md ${bgColor}`} role="alert">
            <Icon className="w-5 h-5 mr-3 shrink-0" />
            <p className="text-sm font-medium">{message}</p>
        </div>
    );
};

const ApplyModal: React.FC<ApplyModalProps> = ({ job, onClose }) => {
  const [form, setForm] = useState<ApplyFormData>({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    image: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [message, setMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, files } = target;

    setForm((prev) => ({
      ...prev,
      [name]: files && files.length > 0 ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
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
        } else {
            setStatus('error');
            setMessage("Application submission failed. Please check your inputs and try again.");
        }
    } catch (err) {
        setStatus('error');
        setMessage("A server error occurred during submission.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 p-4 sm:p-8 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mt-10 mb-10 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-teal-600 transition p-1 rounded-full bg-gray-50 hover:bg-teal-50"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-teal-700 mb-6 border-b pb-3">
          Apply for <span className="text-cyan-600">{job.title}</span>
        </h2>
        <p className="text-sm text-gray-500 mb-4">Location: {job.location}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (e.g., +91 98765 43210)"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />
          <input
            type="text"
            name="experience"
            placeholder="Years of Experience (e.g., 5)"
            value={form.experience}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Upload Resume (PDF/DOC) <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-2 text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Upload Image (Optional)
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-2 text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer"
              />
            </div>
          </div>

          <textarea
            name="message"
            rows={4}
            placeholder="Why do you want to join us? (Cover Letter)"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-linear-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" /> Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </form>

        {status && <CustomAlert type={status} message={message} />}

        <p className="mt-4 text-xs text-center text-gray-500">
            Note: This is a placeholder submission and will not be sent to a server.
        </p>
      </div>
    </div>
  );
};

const NonTechForm: React.FC = () => {
  const [form, setForm] = useState<NonTechFormData>({
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
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [message, setMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files || files.length === 0) return;
    setForm((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
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
        } else {
            setStatus('error');
            setMessage("Application submission failed. Please try again.");
        }
    } catch (err: any) {
        setStatus('error');
        setMessage("A server error occurred during submission.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 h-fit lg:sticky lg:top-10">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">
        Apply for <span className="text-cyan-600">Other Roles</span>
      </h2>
      <p className="text-gray-500 text-sm mb-6">
          If your expertise doesn't fit a specific technical role, tell us about yourself here.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        >
          <option value="" disabled>Select Category *</option>
          <option value="Non-Technical">Non-Technical</option>
          <option value="Support">Support</option>
          <option value="HR / Management">HR / Management</option>
          <option value="Marketing / Sales">Marketing / Sales</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          name="experience"
          placeholder="Years of Relevant Experience (e.g., 2)"
          value={form.experience}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1 font-medium">
              Resume (PDF/DOC) <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm file:mr-3 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1 font-medium">
              Image (Optional)
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm file:mr-3 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer"
            />
          </div>
        </div>

        <textarea
          name="message"
          placeholder="Tell us why you want to join ATS GLOBAL TECH"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center bg-linear-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" /> Submitting...
            </>
          ) : (
            "Submit Non-Technical Application"
          )}
        </button>

        {status && <CustomAlert type={status} message={message} />}
      </form>
    </div>
  );
};

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (

    <div className="min-h-screen font-sans bg-gray-50">
      <section className="relative pt-20 pb-12 bg-linear-to-br from-teal-50 via-white to-cyan-100 text-gray-900 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-left py-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Join Our
              <span className="bg-linear-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-10">
              Be part of a team that's shaping the digital future. Explore our
              open positions and grow your career with
              <span className="text-teal-600 font-bold">
                ATS GLOBAL TECH
              </span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  🚀 Innovative Projects
                </h3>
                <p className="text-gray-600 text-sm">
                  Work on tech solutions that challenge your creativity and impact millions of users.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  🌍 Global Culture
                </h3>
                <p className="text-gray-600 text-sm">
                  Collaborate with diverse and supportive teams across the globe, promoting inclusion.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  💼 Career Growth
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn & grow with structured mentorship, clear career paths, and generous learning budgets.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  🤝 Friendly Team
                </h3>
                <p className="text-gray-600 text-sm">
                  Enjoy a supportive, passionate, and collaborative work environment where your voice is heard.
                </p>
              </div>
            </div>
          </div>

          <NonTechForm />
        </div>
      </section>


      <section className="py-6 bg-white text-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-12">
                Technical Openings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
              {jobs.map((job) => (
                <div
                  key={job.title}
                  className="bg-white border border-gray-200 rounded-xl shadow-xl hover:shadow-2xl hover:border-teal-400 transition transform hover:-translate-y-1 overflow-hidden flex flex-col h-full"
                >
                  <img
                    src={job.image}
                    alt={job.title}

                    className="w-full h-48 object-cover object-center"

                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/600x400/0f766e/ffffff?text=${encodeURIComponent(job.title)}`;
                    }}
                  />
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-2xl font-bold text-teal-700 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 grow">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full font-medium border border-cyan-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-4 pt-3 border-t border-gray-100">
                      <MapPin className="h-4 w-4 text-teal-500" /> {job.location}
                    </p>

                    <button
                      onClick={() => setSelectedJob(job)}
                      className="w-full bg-linear-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-xl font-bold hover:from-teal-600 hover:to-cyan-600 transition shadow-md hover:shadow-lg"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>


      <section className="py-6 bg-teal-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
            What We Offer You
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <Heart className="h-8 w-8 text-rose-500 mb-3" />
              <p className="text-base font-semibold text-gray-800">
                Health & Wellness
              </p>
              <p className="text-xs text-gray-500 mt-1">Comprehensive coverage.</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <Coffee className="h-8 w-8 text-yellow-600 mb-3" />
              <p className="text-base font-semibold text-gray-800">
                Flexible Hours
              </p>
              <p className="text-xs text-gray-500 mt-1">Work-life balance focus.</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <GraduationCap className="h-8 w-8 text-blue-500 mb-3" />
              <p className="text-base font-semibold text-gray-800">
                Learning Budget
              </p>
              <p className="text-xs text-gray-500 mt-1">Invest in your skills.</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <Gift className="h-8 w-8 text-purple-600 mb-3" />
              <p className="text-base font-semibold text-gray-800">
                Performance Bonus
              </p>
              <p className="text-xs text-gray-500 mt-1">Rewarding your success.</p>
            </div>
          </div>
        </div>
      </section>


      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default Careers;