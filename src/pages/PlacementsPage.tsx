import React from 'react';
import { 
  Briefcase, Award, TrendingUp, CheckCircle2, 
  Building2, ArrowRight, ShieldCheck, Users, BookOpen 
} from 'lucide-react';
import { PLACEMENT_STATS, RECRUITERS } from '../data/collegeData';
import { VerificationBadge } from '../components/VerificationBadge';

interface Props {
  onOpenApply: () => void;
}

export const PlacementsPage: React.FC<Props> = ({ onOpenApply }) => {
  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-jyothi-purple-950 via-jyothi-purple-900 to-jyothi-purple-950 text-white p-8 md:p-14 border border-jyothi-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jyothi-gold-500/20 text-jyothi-gold-300 border border-jyothi-gold-400/30 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              Career & Corporate Relations
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-brand leading-tight">
              Placements & Industry Partnerships
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Our Training and Placement Cell (PAT) bridges academic rigor with corporate expectations through 360° finishing school training, mock assessment drills, industry MoUs, and direct on-campus hiring drives.
            </p>
          </div>
        </div>
      </section>

      {/* Year-on-Year Verified Stats Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
              Verified Records
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950 mt-2">
              Four-Year Campus Placement Trajectory
            </h2>
          </div>
          <VerificationBadge status="Confirmed by College" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-jyothi-purple-900">
              ₹24 LPA
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Highest CTC Offered</div>
            <div className="text-[11px] text-jyothi-purple-700 mt-0.5">Top Tech Recruiter</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-jyothi-purple-900">
              462+
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Total Job Offers</div>
            <div className="text-[11px] text-emerald-600 mt-0.5">Academic Year 2024-25</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-jyothi-purple-900">
              ₹5.4 LPA
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Average Batch CTC</div>
            <div className="text-[11px] text-emerald-600 mt-0.5">Rising Trends</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-jyothi-purple-900">
              94+
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Companies Recruited</div>
            <div className="text-[11px] text-jyothi-purple-700 mt-0.5">Fortune 500 & MNCs</div>
          </div>
        </div>

        {/* Desktop Detailed Table */}
        <div className="hidden md:block bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-jyothi-purple-950 text-white text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="p-4 pl-6">Recruitment Batch</th>
                <th className="p-4">Total Offers</th>
                <th className="p-4">Highest Package</th>
                <th className="p-4">Average Package</th>
                <th className="p-4">Companies Visited</th>
                <th className="p-4 pr-6">Placement %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {PLACEMENT_STATS.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 pl-6 font-bold text-jyothi-purple-950">{row.year}</td>
                  <td className="p-4 font-semibold text-emerald-700">{row.offers} Offers</td>
                  <td className="p-4 font-bold text-jyothi-purple-900">{row.highestPackage}</td>
                  <td className="p-4 font-medium text-slate-700">{row.averagePackage}</td>
                  <td className="p-4 text-slate-600">{row.participatingCompanies} MNCs</td>
                  <td className="p-4 pr-6">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
                      {row.placementPercentage}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Year Cards */}
        <div className="md:hidden space-y-3">
          {PLACEMENT_STATS.map((row, idx) => (
            <div key={idx} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-jyothi-purple-950">Batch {row.year}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
                  {row.placementPercentage}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="p-2 bg-slate-50 rounded-xl">
                  <span className="text-slate-400 block text-[10px]">Total Offers</span>
                  <span className="font-bold text-emerald-700">{row.offers}</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-xl">
                  <span className="text-slate-400 block text-[10px]">Highest CTC</span>
                  <span className="font-bold text-jyothi-purple-900">{row.highestPackage}</span>
                </div>
              </div>
              <div className="text-[11px] text-slate-500 pt-1 flex justify-between">
                <span>Avg Package: <strong>{row.averagePackage}</strong></span>
                <span>Recruiters: <strong>{row.participatingCompanies} MNCs</strong></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruiter Roster */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
            Corporate Patrons
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950">
            Top Hiring Partners Across Engineering Sectors
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {RECRUITERS.map((r, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-jyothi-purple-300 transition-all space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800">{r.category}</div>
              <h4 className="font-bold text-sm text-jyothi-purple-950">{r.name}</h4>
              <p className="text-[11px] text-slate-500">{r.sector}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Training & Finishing School */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
              PAT Finishing School
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950">
              4-Year Comprehensive Employability Training Model
            </h2>
            <p className="text-sm text-slate-600">
              From Semester 1 through graduation, students undergo structured career readiness modules seamlessly integrated into the autonomous curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "Year 1", title: "Soft Skills & Language", desc: "Communication fluency, professional etiquette, public speaking, and team building workshops." },
              { year: "Year 2", title: "Data Structures & Aptitude", desc: "Quantitative aptitude drills, algorithmic coding bootcamps in Python & Java, and Git mastery." },
              { year: "Year 3", title: "Domain Certifications", desc: "Cloud computing (AWS/Azure), full-stack development, VLSI simulation, and industrial internships." },
              { year: "Year 4", title: "Mock GDs & Technical PIs", desc: "Simulated HR interviews by corporate directors, resume profiling, and continuous company-specific tests." }
            ].map((m, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 relative">
                <span className="px-2.5 py-0.5 rounded-full bg-jyothi-purple-100 text-jyothi-purple-900 font-bold text-xs">
                  {m.year}
                </span>
                <h4 className="font-bold text-base text-jyothi-purple-950 pt-1">{m.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

