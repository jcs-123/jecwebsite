import React, { useState } from 'react';
import { 
  GraduationCap, Sparkles, CheckCircle2, Phone, Mail, 
  FileText, ArrowRight, ShieldCheck, DollarSign, Calendar, Award 
} from 'lucide-react';
import { DEPARTMENTS, COLLEGE_INFO } from '../data/collegeData';
import { VerificationBadge } from '../components/VerificationBadge';

interface Props {
  onOpenApply: () => void;
}

export const AdmissionsPage: React.FC<Props> = ({ onOpenApply }) => {
  const [activeTab, setActiveTab] = useState<'btech' | 'lateral' | 'mtech' | 'phd'>('btech');

  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-jyothi-purple-950 via-jyothi-purple-900 to-jyothi-purple-950 text-white p-8 md:p-14 border border-jyothi-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jyothi-gold-500/20 text-jyothi-gold-300 border border-jyothi-gold-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Admissions 2025-26
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-brand leading-tight">
              Join Jyothi Engineering College (Autonomous)
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Admissions are open for B.Tech, B.Tech Lateral Entry, M.Tech, and Ph.D. programmes under Government Merit (KEAM), Management Merit, and NRI quotas with attractive Archdiocesan scholarships.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenApply}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-jyothi-gold-400 to-jyothi-gold-500 text-jyothi-purple-950 font-black text-sm shadow-glow-gold hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <span>Start Online Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Quotas & Helpline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full inline-block">
              50% Government Merit Quota
            </div>
            <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">CEE KEAM Allotment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Allotted through Commissioner for Entrance Examinations (CEE) Kerala centralized counselling based on KEAM rank and option submission.
            </p>
            <div className="text-xs text-jyothi-purple-900 font-bold">College Code: JEC</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-gold-100 px-3 py-1 rounded-full inline-block">
              35% Management Merit Quota
            </div>
            <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">Direct College Merit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Merit admission based on +2 Physics, Chemistry, Mathematics (PCM) aggregate marks. Eligible for institutional fee concessions.
            </p>
            <div className="text-xs text-jyothi-purple-900 font-bold">Apply Directly Online</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full inline-block">
              15% NRI Quota
            </div>
            <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">NRI / Expatriate Children</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Reserved for wards of Non-Resident Indians. KEAM qualification not mandatory; admission awarded based on +2 PCM aggregate.
            </p>
            <div className="text-xs text-emerald-700 font-bold">Dedicated NRI Desk</div>
          </div>
        </div>
      </section>

      {/* Programme Tabs & Seat Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
              Sanctioned Intake
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950 mt-2">
              Approved B.Tech Programmes & Seat Allocation
            </h2>
          </div>
          <VerificationBadge status="Confirmed by College" />
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-jyothi-purple-950 text-white text-xs font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-4 pl-6">Department & Specialization</th>
                  <th className="p-4">Degree Code</th>
                  <th className="p-4">Annual Intake</th>
                  <th className="p-4">Accreditation</th>
                  <th className="p-4 pr-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {DEPARTMENTS.map((dept) => (
                  <tr key={dept.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 pl-6 font-bold text-jyothi-purple-950">
                      {dept.name}
                      <span className="block text-xs font-normal text-slate-500">{dept.degree}</span>
                    </td>
                    <td className="p-4 font-mono font-semibold text-jyothi-purple-800">{dept.code}</td>
                    <td className="p-4 font-bold text-slate-700">{dept.intake} Seats</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                        NBA / NAAC 'A'
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <button
                        onClick={onOpenApply}
                        className="px-3.5 py-1.5 rounded-lg bg-jyothi-purple-800 hover:bg-jyothi-purple-900 text-jyothi-gold-300 font-bold text-xs shadow-xs"
                      >
                        Apply Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Responsive Cards View */}
        <div className="md:hidden space-y-3">
          {DEPARTMENTS.map((dept) => (
            <div key={dept.id} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="px-2 py-0.5 rounded-md bg-jyothi-gold-100 text-jyothi-purple-900 font-mono text-[11px] font-bold">
                    {dept.code}
                  </span>
                  <h4 className="font-bold text-sm text-jyothi-purple-950 mt-1">{dept.name}</h4>
                  <p className="text-[11px] text-slate-500">{dept.degree}</p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 rounded-lg text-slate-700 shrink-0">
                  {dept.intake} Seats
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-emerald-700">NBA / NAAC 'A'</span>
                <button
                  onClick={onOpenApply}
                  className="px-3 py-1.5 rounded-lg bg-jyothi-purple-800 text-jyothi-gold-300 font-bold text-xs shadow-xs"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scholarships & Fee Concessions */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
              Financial Aid
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950">
              Archdiocesan Merit Scholarships & Fee Waivers
            </h2>
            <p className="text-sm text-slate-600">
              The Catholic Archdiocese of Trichur and Jyothi Management disburse over ₹3 Crores annually in merit scholarships so that financial constraints never impede talented engineering aspirants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <Award className="w-8 h-8 text-jyothi-gold-600" />
              <h4 className="font-bold text-base text-jyothi-purple-950">100% Tuition Fee Waiver</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Awarded to candidates with KEAM rank under 5,000 or scoring &gt;95% in +2 Mathematics, Physics, and Chemistry.
              </p>
              <div className="text-[11px] font-semibold text-emerald-700">T&C Apply • Renewable Every Year</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <Award className="w-8 h-8 text-jyothi-gold-600" />
              <h4 className="font-bold text-base text-jyothi-purple-950">50% Tuition Fee Concession</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Awarded to students with KEAM rank between 5,001 and 15,000 or scoring &gt;90% aggregate in +2 science subjects.
              </p>
              <div className="text-[11px] font-semibold text-emerald-700">Management Merit Scholarship</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <Award className="w-8 h-8 text-jyothi-gold-600" />
              <h4 className="font-bold text-base text-jyothi-purple-950">Archdiocesan Parish Support</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Special financial aid for Catholic candidates from Archdiocese of Trichur parishes and economically weaker sections (EWS).
              </p>
              <div className="text-[11px] font-semibold text-emerald-700">Need-Based Welfare Grant</div>
            </div>
          </div>

        </div>
      </section>

      {/* Step-by-Step Application Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
            Admissions Walkthrough
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950">
            How to Secure Your Seat in 4 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Online Registration", desc: "Fill out the online application with candidate details and preferred engineering branch." },
            { step: "02", title: "Counselling & Verification", desc: "Attend online or in-person verification with 10th & 12th marklists and KEAM admit card." },
            { step: "03", title: "Seat Allocation & Fee", desc: "Receive provisional admission allotment letter and confirm admission by fee remittance." },
            { step: "04", title: "Campus Induction", desc: "Join the autonomous student orientation, meet faculty mentors, and hostel allotment." }
          ].map((s, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm relative space-y-2">
              <span className="text-4xl font-black font-brand text-jyothi-purple-100 absolute top-4 right-4">
                {s.step}
              </span>
              <h4 className="font-bold text-base text-jyothi-purple-950">{s.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Admission Helpline Contact Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-jyothi-purple-950 to-jyothi-purple-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-jyothi-gold-400/30">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-brand text-white">Have Admission Queries? Speak to Our Dean of Admissions</h3>
            <p className="text-xs text-slate-300">Helpline: +91 95269 24455 / +91 95269 34455 • admissions@jecc.ac.in</p>
          </div>
          <button
            onClick={onOpenApply}
            className="px-6 py-3 rounded-xl bg-jyothi-gold-400 text-jyothi-purple-950 font-bold text-xs sm:text-sm shadow-glow-gold hover:bg-jyothi-gold-300 transition-all shrink-0"
          >
            Submit Application Now
          </button>
        </div>
      </section>

    </div>
  );
};

