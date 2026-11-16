import React from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Cpu,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { DEPARTMENTS } from '../data/collegeData';
import { RevealBlock } from '../components/RevealBlock';
import { AdmissionsSubNav } from '../components/AdmissionsSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Online Registration & Option Entry',
    desc: 'Apply online for Management/NRI Merit via the Jyothi Admissions Portal or choose College Code JEC during CEE KEAM centralised counselling.',
  },
  {
    step: '02',
    title: 'Merit Verification & Scholarship Review',
    desc: 'Submit +2 PCM marks and KEAM scorecards for instant eligibility check and automatic Archdiocesan / institutional scholarship slab mapping.',
  },
  {
    step: '03',
    title: 'Document Verification & Enrolment',
    desc: 'Complete campus or guided online document verification, confirm your branch allotment, and join the Autonomous induction cohort.',
  },
];

export const AdmissionsPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      <AdmissionsSubNav activeRoute="admissions" onNavigate={onNavigate} />

      {/* Overlapping Editorial Card + Left Engineering Students Showcase */}
      <section className="relative w-full overflow-x-clip pt-6 sm:pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-0">
            {/* Left Large Engineering Lab Photo */}
            <div className="lg:col-span-7">
              <RevealBlock direction="left">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#DFC06A]/50 bg-[#210532] aspect-[16/10] lg:aspect-auto lg:h-[400px]">
                  <img
                    src="/assets/admissions_mtech_students.jpg"
                    alt="Jyothi Engineering College students on campus"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </RevealBlock>
            </div>

            {/* Right Overlapping Cream Editorial Card */}
            <div className="lg:col-span-5 lg:-ml-20 relative z-20">
              <RevealBlock direction="right" delay={120}>
                <div className="rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/70 shadow-2xl p-6 sm:p-8 lg:p-10 space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5C3A14]">
                      B.Tech Admissions 2025-26
                    </span>
                    <span className="hidden sm:block h-[1px] flex-1 bg-[#DFC06A]/80" />
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#250836] leading-[1.06] font-['Playfair_Display',serif]">
                    <span className="block">Begin your</span>
                    <span className="italic font-bold text-[#A87627] block">
                      B.Tech journey.
                    </span>
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Explore B.Tech programmes and admission pathways at Jyothi Engineering College (Autonomous) under KEAM Government Merit, Management Merit, and NRI quotas.
                  </p>

                  <div className="pt-1 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
                    <button
                      onClick={onOpenApply}
                      className="w-full sm:w-auto justify-center px-5 py-2.5 sm:py-3 rounded-full bg-[#29073D] hover:bg-[#3B1159] text-white font-semibold text-xs sm:text-sm shadow-md inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Start Online Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onNavigate('eligibility-seat-matrix')}
                      className="w-full sm:w-auto justify-center px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-[#FAF5EB] text-[#250836] font-semibold text-xs sm:text-sm border border-[#250836]/45 shadow-xs inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>View Seat Matrix</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>

          {/* Rounded-Full Admission Pathways Strip */}
          <RevealBlock direction="up" delay={160}>
            <div className="rounded-2xl lg:rounded-full bg-white/95 border border-[#DFC06A]/65 shadow-sm px-5 sm:px-8 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center text-center lg:divide-x lg:divide-[#DFC06A]/55">
                <div className="text-base sm:text-lg font-['Playfair_Display',serif] italic font-bold text-[#A87627] lg:pr-4">
                  Admission pathways
                </div>
                <div className="text-sm sm:text-base font-bold text-[#250836] lg:px-4">
                  KEAM Government Merit
                </div>
                <div className="text-sm sm:text-base font-bold text-[#250836] lg:px-4">
                  Management Merit
                </div>
                <div className="text-sm sm:text-base font-bold text-[#250836] lg:px-4">
                  NRI Quota
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* 7 B.Tech Streams Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <RevealBlock direction="up">
          <div className="flex items-center gap-4">
            <span className="h-[1px] flex-1 bg-amber-300/80" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
              7 B.Tech Engineering Programmes
            </h2>
            <span className="h-[1px] flex-1 bg-amber-300/80" />
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept, idx) => (
            <RevealBlock
              key={dept.id}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 80}
              className="h-full"
            >
              <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/60">
                      Intake: {dept.intake} Seats
                    </span>
                    <Cpu className="w-5 h-5 text-[#A87627]" />
                  </div>
                  <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {dept.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-100 flex items-center justify-between text-[11px] font-semibold text-[#5C3A14]">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A87627]" />
                    Est. {dept.established} &bull; {dept.code}
                  </span>
                  <button
                    onClick={onOpenApply}
                    className="text-[#250836] hover:text-[#A87627] font-bold inline-flex items-center gap-1 cursor-pointer"
                  >
                    Apply <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 3-Step Admission Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        <RevealBlock direction="up">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5C3A14] bg-[#FBF2DC] px-3 py-1 rounded-full border border-[#DFC06A]">
              <GraduationCap className="w-3.5 h-3.5 text-[#A87627]" />
              How to Apply
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
              3-Step B.Tech Admission Process
            </h2>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADMISSION_STEPS.map((item, idx) => (
            <RevealBlock
              key={item.step}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 120}
              className="h-full"
            >
              <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-3">
                <div className="w-11 h-11 rounded-full border border-[#DFC06A] bg-[#FBF2DC] text-[#5C3A14] font-black font-['Playfair_Display',serif] flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>
    </div>
  );
};
