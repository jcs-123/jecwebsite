import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { DEPARTMENTS } from '../data/collegeData';
import { RevealBlock } from '../components/RevealBlock';
import { AdmissionsSubNav } from '../components/AdmissionsSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

const QUOTAS = [
  {
    pct: '50%',
    title: 'Government Merit Quota',
    sub: 'CEE KEAM Centralised Allotment',
    desc: 'Filled through Commissioner for Entrance Examinations (CEE) Kerala based on KEAM rank. Choose College Code JEC.',
  },
  {
    pct: '35%',
    title: 'Management Merit Quota',
    sub: 'Direct Institutional Merit',
    desc: 'Awarded based on +2 Physics, Chemistry, Mathematics (PCM) aggregate and KEAM score. Eligible for institutional scholarships.',
  },
  {
    pct: '15%',
    title: 'NRI / Expatriate Quota',
    sub: 'Direct Admission (No KEAM)',
    desc: 'Reserved for wards of Non-Resident Indians. KEAM qualification is not mandatory; selection is based on +2 PCM marks.',
  },
];

const ELIGIBILITY_RULES = [
  {
    title: 'B.Tech Regular (4 Years)',
    points: [
      'Pass in Higher Secondary (+2 / equivalent) with 45% aggregate in Physics, Mathematics, and Chemistry / CS / Biotech.',
      'Valid KEAM rank required for Government & Management Merit seats.',
      'KEAM not mandatory for 15% NRI Quota seats.',
    ],
  },
  {
    title: 'B.Tech Lateral Entry (3 Years)',
    points: [
      '3-year Engineering Diploma in relevant stream with minimum 45% aggregate marks.',
      'Direct admission into 2nd Year (3rd Semester) B.Tech.',
      'Separate LET rank & institutional merit seats available across all branches.',
    ],
  },
  {
    title: 'Required Documents',
    points: [
      '10th & 12th (or Diploma) Mark Lists & Pass Certificates.',
      'KEAM Admit Card, Score Card & Allotment Memo (where applicable).',
      'Transfer Certificate (TC), Conduct Certificate & Passport-size Photos.',
    ],
  },
];

export const EligibilitySeatMatrixPage: React.FC<Props> = ({
  onNavigate,
  onOpenApply,
}) => {
  const [filterQuota, setFilterQuota] = useState<'all' | 'accredited'>('all');

  const visibleDepartments =
    filterQuota === 'accredited'
      ? DEPARTMENTS.filter((d) => ['CSE', 'ECE', 'EEE', 'ME'].includes(d.code))
      : DEPARTMENTS;

  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      <AdmissionsSubNav activeRoute="eligibility-seat-matrix" onNavigate={onNavigate} />

      {/* Editorial Header + Sweeping Curved Campus Showcase */}
      <section className="relative w-full overflow-x-clip pt-6 sm:pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <RevealBlock direction="left">
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-[#DFC06A]/90" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8E611E]">
                      Admissions
                    </span>
                    <span className="h-[1px] w-8 bg-[#DFC06A]/90" />
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#250836] leading-[1.08] font-['Playfair_Display',serif]">
                    Eligibility &amp;{' '}
                    <span className="italic font-bold text-[#A87627]">
                      Seat Matrix
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-lg">
                    Explore admission pathways, KEAM / Management / NRI quota distribution, and branch-wise intake requirements.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
                    <button
                      onClick={onOpenApply}
                      className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-[#29073D] hover:bg-[#3B1159] text-white font-semibold text-xs sm:text-sm shadow-md inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Check Eligibility &amp; Apply</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onNavigate('merit-scholarships')}
                      className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-white hover:bg-[#FAF5EB] text-[#250836] font-semibold text-xs sm:text-sm border border-[#250836]/40 shadow-xs inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Explore Scholarships</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </RevealBlock>
            </div>

            <div className="lg:col-span-6">
              <RevealBlock direction="right" delay={140}>
                <div className="relative rounded-3xl lg:rounded-bl-[6rem] lg:rounded-tl-3xl lg:rounded-tr-3xl lg:rounded-br-3xl overflow-hidden border-2 border-[#DFC06A]/70 shadow-xl aspect-[16/10] bg-white">
                  <img
                    src="/assets/admissions_eligibility_hero.jpg"
                    alt="Jyothi Engineering College Autonomous Campus Building"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF7F0]/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Quota Cards with Top Accent Line & Split Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUOTAS.map((q, idx) => (
            <RevealBlock
              key={q.title}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 100}
              className="h-full"
            >
              <div
                className={`h-full rounded-3xl bg-white border border-amber-200/80 shadow-sm overflow-hidden flex flex-col justify-between border-t-4 ${
                  idx === 1 ? 'border-t-[#C79628]' : 'border-t-[#250836]'
                }`}
              >
                <div className="p-5 sm:p-6 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                      idx === 1
                        ? 'bg-[#FBF2DC] text-[#A87627]'
                        : 'bg-[#250836]/8 text-[#250836]'
                    }`}
                  >
                    <Scale className="w-6 h-6" />
                  </div>
                  <div className="h-10 w-[1px] bg-[#DFC06A]/65 shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#A87627]">
                      {q.pct} &bull; {q.sub}
                    </div>
                    <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836] leading-snug">
                      {q.title}
                    </h3>
                  </div>
                </div>
                <div
                  className={`px-5 sm:px-6 py-4 text-xs text-slate-700 leading-relaxed ${
                    idx === 1 ? 'bg-[#FBF7EE]' : 'bg-[#F7F3FA]'
                  }`}
                >
                  {q.desc}
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock direction="up" delay={120}>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-[1px] flex-1 max-w-[140px] bg-[#DFC06A]/65" />
            <span className="px-4 py-1.5 rounded-full bg-white border border-[#DFC06A]/80 text-[11px] font-medium italic text-[#5C3A14]">
              Quota shares and eligibility: 50% Govt (KEAM) &bull; 35% Management &bull; 15% NRI
            </span>
            <span className="h-[1px] flex-1 max-w-[140px] bg-[#DFC06A]/65" />
          </div>
        </RevealBlock>
      </section>

      {/* Interactive Branch-Wise Seat Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <RevealBlock direction="up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
                Branch-Wise Seat Matrix (2025-26)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Approved intake distribution across Government Merit (50%), Management (35%), and NRI (15%).
              </p>
            </div>
            <div className="inline-flex p-1 rounded-full bg-white border border-amber-200/80 shadow-2xs self-start">
              <button
                onClick={() => setFilterQuota('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filterQuota === 'all'
                    ? 'bg-[#250836] text-[#FDE68A]'
                    : 'text-[#250836] hover:bg-amber-50'
                }`}
              >
                All 7 Branches
              </button>
              <button
                onClick={() => setFilterQuota('accredited')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filterQuota === 'accredited'
                    ? 'bg-[#250836] text-[#FDE68A]'
                    : 'text-[#250836] hover:bg-amber-50'
                }`}
              >
                NBA Accredited
              </button>
            </div>
          </div>
        </RevealBlock>

        <RevealBlock direction="up">
          <div className="rounded-3xl bg-white border border-amber-200/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#250836] text-[#FDE68A] text-xs uppercase tracking-wider">
                    <th className="py-4 px-5 font-bold">B.Tech Programme</th>
                    <th className="py-4 px-4 font-bold text-center">Total Intake</th>
                    <th className="py-4 px-4 font-bold text-center">Govt (50%)</th>
                    <th className="py-4 px-4 font-bold text-center">Mgmt (35%)</th>
                    <th className="py-4 px-4 font-bold text-center">NRI (15%)</th>
                    <th className="py-4 px-5 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100 text-xs sm:text-sm">
                  {visibleDepartments.map((dept) => {
                    const govt = Math.round(dept.intake * 0.5);
                    const mgmt = Math.round(dept.intake * 0.35);
                    const nri = dept.intake - govt - mgmt;
                    return (
                      <tr key={dept.id} className="hover:bg-[#FAF7F0]/80 transition-colors">
                        <td className="py-3.5 px-5 font-bold text-[#250836]">{dept.name}</td>
                        <td className="py-3.5 px-4 text-center font-black text-[#250836]">
                          {dept.intake}
                        </td>
                        <td className="py-3.5 px-4 text-center text-slate-700">{govt}</td>
                        <td className="py-3.5 px-4 text-center text-slate-700">{mgmt}</td>
                        <td className="py-3.5 px-4 text-center text-slate-700">{nri}</td>
                        <td className="py-3.5 px-5">
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5C3A14] bg-[#FBF2DC] px-2.5 py-1 rounded-full border border-[#DFC06A]/60">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#A87627]" />
                            {['CSE', 'ECE', 'EEE', 'ME'].includes(dept.code)
                              ? 'NBA Accredited'
                              : 'KTU Approved'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </RevealBlock>
      </section>

      {/* Eligibility & Documents Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ELIGIBILITY_RULES.map((block, idx) => (
            <RevealBlock
              key={block.title}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 100}
              className="h-full"
            >
              <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  {idx === 2 ? (
                    <FileText className="w-5 h-5 text-[#A87627]" />
                  ) : (
                    <ClipboardCheck className="w-5 h-5 text-[#A87627]" />
                  )}
                  <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                    {block.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {block.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#A87627] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>
    </div>
  );
};
