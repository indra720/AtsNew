import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
  Zap,
  Building2,
  DollarSign,
} from "lucide-react";

interface IndustryData {
  name: string;
  hourMultiplier: number;
  revenueLiftBase: number;
  typicalTimelineWeeks: number;
  metricLabel: string;
}

const INDUSTRIES: Record<string, IndustryData> = {
  callcenter: {
    name: "AI Call Center & Telephony",
    hourMultiplier: 24,
    revenueLiftBase: 38,
    typicalTimelineWeeks: 12,
    metricLabel: "Active Calling Agents",
  },
  construction: {
    name: "Civil Construction & Engineering",
    hourMultiplier: 32,
    revenueLiftBase: 22,
    typicalTimelineWeeks: 14,
    metricLabel: "Active Construction Sites",
  },
  ecommerce: {
    name: "Multi-Vendor E-Commerce",
    hourMultiplier: 40,
    revenueLiftBase: 44,
    typicalTimelineWeeks: 10,
    metricLabel: "Monthly Order Volume (in K)",
  },
  hospitality: {
    name: "Luxury Resorts & Hotel Chains",
    hourMultiplier: 28,
    revenueLiftBase: 35,
    typicalTimelineWeeks: 11,
    metricLabel: "Room & Villa Inventory",
  },
  edtech: {
    name: "Campus ERP & EdTech LMS",
    hourMultiplier: 20,
    revenueLiftBase: 30,
    typicalTimelineWeeks: 9,
    metricLabel: "Enrolled Students (in Hundreds)",
  },
  realestate: {
    name: "Real Estate & Township Portals",
    hourMultiplier: 30,
    revenueLiftBase: 40,
    typicalTimelineWeeks: 8,
    metricLabel: "Properties / Units Managed",
  },
};

export const RoiCalculator: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("callcenter");
  const [scale, setScale] = useState<number>(25);

  const ind = INDUSTRIES[selectedIndustry];

  const estimatedHoursSaved = Math.round(scale * ind.hourMultiplier);
  const estimatedRevenueLift = Math.min(
    75,
    Math.round(ind.revenueLiftBase + (scale / 100) * 15)
  );
  const deliveryWeeks = ind.typicalTimelineWeeks;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#F0F7FF] to-white border-t border-blue-100">
      <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0066FF] mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ROI ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display mb-2">
            Calculate Your Digital Transformation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              Impact & ROI
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            See how much operational time and revenue velocity your enterprise can unlock with ATS custom software architecture.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-[0_15px_50px_rgba(0,102,255,0.08)] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls (Inputs) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Select Industry */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-500 mb-2">
                  1. Select Target Domain / Platform
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.entries(INDUSTRIES).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedIndustry(key)}
                      className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                        selectedIndustry === key
                          ? "bg-[#0066FF] text-white shadow-md scale-[1.02]"
                          : "bg-slate-50 hover:bg-blue-50 text-slate-700 border border-slate-200/80"
                      }`}
                    >
                      <span className="line-clamp-1">{data.name.split("&")[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider Scale */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-700 mb-2">
                  <span className="uppercase text-slate-500">
                    2. Adjust Scale ({ind.metricLabel})
                  </span>
                  <span className="text-sm font-black text-[#0066FF] font-display">
                    {scale} {scale >= 100 ? "+" : ""}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  className="w-full h-2.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>Starter (5)</span>
                  <span>Mid-Scale (50)</span>
                  <span>Enterprise (100+)</span>
                </div>
              </div>
            </div>

            {/* Right Output Display (Results) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-blue-50/90 border border-blue-100 flex flex-col justify-between space-y-5">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-slate-500">
                  Projected Annual Impact
                </span>

                <div className="mt-3 space-y-4">
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#0066FF] font-display">
                      {estimatedHoursSaved.toLocaleString()}+ hrs
                    </div>
                    <div className="text-xs font-semibold text-slate-700">
                      Team Manual Operations Saved / Year
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-display">
                      +{estimatedRevenueLift}%
                    </div>
                    <div className="text-xs font-semibold text-slate-700">
                      Projected Pipeline & Conversion Velocity
                    </div>
                  </div>

                  <div className="pt-2 border-t border-blue-200/60 flex items-center justify-between text-xs font-mono text-slate-600">
                    <span>Target Delivery Roadmap:</span>
                    <strong className="text-slate-900 font-bold font-sans">
                      ~{deliveryWeeks} Weeks
                    </strong>
                  </div>
                </div>
              </div>

              <Link
                to="/lets-create"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-md transition"
              >
                <span>Request Custom Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;

