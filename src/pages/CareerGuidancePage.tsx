import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Compass,
  Code2,
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  Lightbulb,
  Building2,
} from 'lucide-react';
import { PlacementsSubNav } from '../components/PlacementsSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

const FOUR_YEAR_MODULES = [
  {
    year: 'Year 1 (Semesters 1 & 2)',
    badge: 'Foundation Phase',
    title: 'Professional Communication & Personality Development',
    focus: 'Overcoming stage fright, mastering communicative English, professional etiquette, and collaborative team ethics.',
    skills: [
      'Language Laboratory & Accent Neutralization',
      'Extempore & Public Speaking Drills',
      'Active Listening & Business Writing Skills',
      'Team Building & Collaborative Problem Solving',
      'Goal Setting & Habit Engineering',
    ],
    hours: '60+ Training Hours',
  },
  {
    year: 'Year 2 (Semesters 3 & 4)',
    badge: 'Analytical Rigor',
    title: 'Quantitative Aptitude, Logic & Coding Bootcamps',
    focus: 'Mastering numerical reasoning, speed math, logical puzzles, and fundamental data structures in Python and Java.',
    skills: [
      'Quantitative Aptitude & Speed Math Drills',
      'Logical, Deductive & Abstract Reasoning',
      'Data Structures & Algorithms (C / C++ / Java)',
      'Object Oriented Programming & Git/GitHub',
      'Competitive Coding on HackerRank / LeetCode',
    ],
    hours: '90+ Training Hours',
  },
  {
    year: 'Year 3 (Semesters 5 & 6)',
    badge: 'Domain Mastery',
    title: 'Domain Certifications, Full-Stack & Diagnostic Benchmarks',
    focus: 'Industry-aligned track specializations, hackathons, mini-projects, and national employability benchmarking assessments.',
    skills: [
      'Cloud Architecture (AWS / Azure Foundations)',
      'Full Stack Web / Mobile App Development',
      'Embedded IoT, Microcontrollers & VLSI Design',
      'AMCAT, CoCubes & Wheebox Diagnostic Mock Tests',
      'Summer Industrial Internships with Corporate Mentors',
    ],
    hours: '120+ Training Hours',
  },
  {
    year: 'Year 4 (Semesters 7 & 8)',
    badge: 'Finishing School',
    title: 'Intensive Company Mock Rounds & Executive Panels',
    focus: 'Simulated multi-stage corporate hiring loops with real-world HR directors, resume clinics, and high-frequency company-specific test series.',
    skills: [
      'Company-Specific Test Series (TCS, Infosys, Bosch, Amazon)',
      'Simulated Technical Coding & Architecture Rounds',
      'Mock Group Discussions with Corporate Directors',
      'One-on-One HR Behavioral Interviews & Feedback',
      'Offer Negotiation, Professional Ethics & Transition Coaching',
    ],
    hours: '100+ Training Hours',
  },
];

const ALTERNATIVE_PATHWAYS = [
  {
    title: 'Higher Studies & Global Admissions',
    icon: GraduationCap,
    badge: 'Master’s & Ph.D.',
    desc: 'Structured guidance for competitive entrance examinations and master’s admissions at top universities in India, Europe, USA, and Singapore.',
    highlights: [
      'GATE Coaching in CSE, ECE, EEE, ME & CE',
      'GRE, IELTS & TOEFL Preparation Workshops',
      'Statement of Purpose (SOP) & Letter of Recommendation Assistance',
      'Alumni Mentorship from Top Global Universities',
    ],
  },
  {
    title: 'Civil Services & Defence Careers',
    icon: ShieldCheck,
    badge: 'UPSC / IES / PSU',
    desc: 'Equipping ambitious engineers to serve the nation through Indian Engineering Services (IES), Civil Services, Defence (CDS/AFCAT/SSB), and PSUs.',
    highlights: [
      'Indian Engineering Services (IES) Orientation',
      'PSU Selection Guidance via GATE Scorecards',
      'SSB Interview Personality Drills by Ex-Defence Officers',
      'Kerala PSC Technical Gazetted Exam Coaching',
    ],
  },
  {
    title: 'Entrepreneurship & Startup Incubation',
    icon: Lightbulb,
    badge: 'Jyothi TBI & KSUM',
    desc: 'For students aspiring to build their own technology ventures, supported by Jyothi Technology Business Incubator and MIT FabLab Kerala.',
    highlights: [
      'Access to Jyothi TBI 18+ Startup Incubator',
      'Seed Funding Grants & KSUM Ideation Schemes',
      'Rapid Hardware Prototyping at MIT FabLab',
      'Patent Filing & Intellectual Property Guidance',
    ],
  },
];

const ASSESSMENT_PLATFORMS = [
  { name: 'HackerRank', type: 'Coding & Algorithmic Assessments', desc: 'Weekly code sprints and algorithmic battles evaluated on automated test suites.' },
  { name: 'AMCAT (Aspiring Minds)', type: 'National Employability Test', desc: 'Standardized benchmarking across quantitative aptitude, logical reasoning, and English fluency.' },
  { name: 'CoCubes / Aon', type: 'Industry Hiring Assessment', desc: 'Pre-assessment drills used directly by Fortune 500 tech firms for recruitment shortlisting.' },
  { name: 'Wheebox', type: 'Cognitive & Soft Skill Matrix', desc: 'Comprehensive behavioral, domain knowledge, and problem-solving evaluation.' },
];

export const CareerGuidancePage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  return (
    <div className="bg-[#FAF7F0] min-h-screen pb-16 space-y-12">
      {/* Sub Navigation Bar for Placements Section */}
      <PlacementsSubNav activeRoute="career-guidance" onNavigate={onNavigate} />

      {/* Editorial Slanted Bento Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#1A0626] via-[#2A083B] to-[#12031B] text-white p-8 md:p-14 border border-[#DFC06A]/35 shadow-2xl relative overflow-hidden">
          <div className="absolute right-[-20px] top-4 w-72 h-72 opacity-10 pointer-events-none">
            <Compass className="w-full h-full text-[#DFC06A]" />
          </div>

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFC06A]/20 text-[#FDE68A] border border-[#DFC06A]/40 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#DFC06A]" />
              Placement &amp; Training (PAT) Finishing School
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-['Playfair_Display',serif] leading-tight text-white">
              Career Guidance Cell &amp;
              <span className="block italic text-[#DFC06A] mt-1">4-Year Training Architecture.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
              From Semester 1 through graduation, our Career Guidance Cell seamlessly integrates rigorous soft skills training, algorithmic problem-solving bootcamps, and mock assessment loops into the autonomous engineering curriculum.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenApply}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C79628] to-[#DFC06A] text-[#170525] font-bold text-xs sm:text-sm hover:brightness-110 transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Join Jyothi Engineering</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('career-navigator')}
                className="px-5 py-2.5 rounded-full bg-[#DFC06A]/20 hover:bg-[#DFC06A]/30 text-[#FDE68A] font-semibold text-xs sm:text-sm border border-[#DFC06A]/40 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#DFC06A]" />
                <span>Career Navigator Tool</span>
              </button>
              <button
                onClick={() => onNavigate('placement-records')}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>View Placement Results</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Training Pillars Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl bg-white border border-[#DFC06A]/30 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-[#210532]">370+</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Structured Training Hours</div>
            <div className="text-[11px] text-[#C79628] font-bold mt-0.5">Spread Over 8 Semesters</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-[#DFC06A]/30 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-[#210532]">100%</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Student Coverage</div>
            <div className="text-[11px] text-emerald-600 font-bold mt-0.5">Mandatory Credit Modules</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-[#DFC06A]/30 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-[#210532]">45+</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Corporate Guest Trainers</div>
            <div className="text-[11px] text-[#210532] font-bold mt-0.5">Industry HRs &amp; Architects</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-[#DFC06A]/30 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-[#210532]">12+</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Mock Interview Drills</div>
            <div className="text-[11px] text-emerald-600 font-bold mt-0.5">Per Student in Final Year</div>
          </div>
        </div>
      </section>

      {/* 4-Year Progressive Employability Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#210532] bg-[#EFE8F6] px-3 py-1 rounded-full border border-purple-200">
            Progressive Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
            The 4-Year PAT Employability Journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Each academic year targets a specific dimension of student growth, transforming freshmen into polished, confident engineering professionals.
          </p>
        </div>

        {/* Year Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {FOUR_YEAR_MODULES.map((m, idx) => (
            <button
              key={idx}
              onClick={() => setActiveYearIndex(idx)}
              className={`p-4 rounded-2xl text-left transition-all cursor-pointer ${
                activeYearIndex === idx
                  ? 'bg-[#210532] text-white shadow-md border border-[#DFC06A]/50'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wider block ${activeYearIndex === idx ? 'text-[#FDE68A]' : 'text-[#C79628]'}`}>
                {m.badge}
              </span>
              <span className="font-bold text-xs sm:text-sm mt-0.5 block">
                {m.year}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Module View */}
        {(() => {
          const mod = FOUR_YEAR_MODULES[activeYearIndex];
          return (
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EFE8F6] text-[#210532] border border-purple-200">
                    {mod.badge} • {mod.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#210532] mt-2">
                    {mod.title}
                  </h3>
                </div>
                <div className="text-xs font-bold px-4 py-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 w-fit">
                  {mod.hours}
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {mod.focus}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Competencies &amp; Training Modules Covered:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mod.skills.map((skill, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FAF7F0] border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-[#210532]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Alternative Career Pathways (Beyond Campus IT Placements) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#210532] bg-[#EFE8F6] px-3 py-1 rounded-full border border-purple-200">
            Diverse Aspirations
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
            Beyond IT Placements: Multi-Track Guidance
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Not every engineer aspires to a standard corporate desk. Our Career Guidance Cell provides tailored mentorship for higher studies, public administration, and technology entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ALTERNATIVE_PATHWAYS.map((p, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-[#DFC06A] hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#EFE8F6] flex items-center justify-center text-[#210532]">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#210532]">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Key Support Highlights:
                </div>
                {p.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diagnostic Assessment Testing Platforms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#210532] bg-[#EFE8F6] px-3 py-1 rounded-full border border-purple-200">
            Diagnostic Rigor
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
            Industry-Standard Assessment Partners
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            We partner with leading national testing engines so students gain real-time metrics and diagnostic benchmarking before the actual corporate drives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ASSESSMENT_PLATFORMS.map((ap, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <Code2 className="w-6 h-6 text-[#210532]" />
              <h4 className="font-bold text-sm text-[#210532]">{ap.name}</h4>
              <p className="text-[11px] font-semibold text-[#C79628]">{ap.type}</p>
              <p className="text-[11px] text-slate-600 leading-relaxed">{ap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PAT Cell Mentorship Team & Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="rounded-3xl bg-white border border-[#DFC06A]/40 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#210532] bg-[#EFE8F6] px-3 py-1 rounded-full border border-purple-200">
              Guidance Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#210532]">
              Need One-on-One Career Mentorship?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              The Career Guidance Cell is open daily from 9:00 AM to 5:00 PM on Level 2 of the Eastern Academic Block. Dedicated counselors assist with resume audits, mock technical prep, and internship placement queries.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-700">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#C79628]" />
                <span>+91 4884 259000 / Extn 224</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#C79628]" />
                <span>careerguidance@jecc.ac.in</span>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('career-navigator')}
              className="px-6 py-2.5 rounded-full bg-[#210532] hover:bg-[#340A4E] text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#DFC06A]" />
              <span>Launch Career Navigator</span>
            </button>
            <button
              onClick={() => onNavigate('corporate-recruiters')}
              className="px-5 py-2.5 rounded-full bg-[#FAF7F0] hover:bg-amber-100/60 border border-amber-300 text-[#210532] font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>View Corporate Recruiters</span>
              <ArrowRight className="w-4 h-4 text-[#C79628]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
