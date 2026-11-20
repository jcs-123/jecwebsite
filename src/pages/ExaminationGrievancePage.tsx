import React, { useState } from 'react';
import {
  HelpCircle,
  Scale,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Phone,
  Mail,
  Sparkles,
  Send,
  X,
  Award,
  Check,
  ChevronDown,
  Building2,
  FileCheck,
  Calendar,
} from 'lucide-react';
import { ExaminationSubNav } from '../components/ExaminationSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface CommitteeMember {
  name: string;
  designation: string;
  dept: string;
  role: string;
  email: string;
  phone: string;
}

const COMMITTEE_MEMBERS: CommitteeMember[] = [
  {
    name: 'Dr. K. K. Babu',
    designation: 'Dean (Academic Affairs) & Committee Chairman',
    dept: 'Academic Governance Council',
    role: 'Statutory oversight of academic fairness, equity and appellate dispute resolution.',
    email: 'dean.academic@jecc.ac.in',
    phone: '+91 4884 259000 (Ext 201)',
  },
  {
    name: 'Dr. Vincent G.',
    designation: 'Controller of Examinations (Ex-Officio Member Secretary)',
    dept: 'Office of CoE',
    role: 'Presents verified evaluation audit trails, encrypted barcode sheets & scrutiny dossiers.',
    email: 'coe@jecc.ac.in',
    phone: '+91 4884 259000 (Ext 204)',
  },
  {
    name: 'Dr. Deepa V.',
    designation: 'Professor & Head (Scrutiny Member)',
    dept: 'Department of Basic Sciences',
    role: 'Independent mathematical audit of mark tabulation, moderation and CIE calculations.',
    email: 'deepa.math@jecc.ac.in',
    phone: '+91 4884 259000 (Ext 210)',
  },
  {
    name: 'Prof. Jinesh K. J.',
    designation: 'Associate Professor & Student Welfare Nominee',
    dept: 'Department of Electrical & Electronics',
    role: 'Student advocacy, procedural transparency, and due process compliance.',
    email: 'jinesh@jecc.ac.in',
    phone: '+91 4884 259000 (Ext 215)',
  },
];

const GRIEVANCE_CATEGORIES = [
  {
    id: 'out-of-syllabus',
    title: 'Out-of-Syllabus / Ambiguous Question Paper',
    deadline: 'Within 24 Hours of Exam',
    desc: 'Representation challenging question papers departing from approved syllabus or containing ambiguous wording.',
  },
  {
    id: 'cie-mismatch',
    title: 'Internal Assessment (CIE) Mark Mismatch',
    deadline: 'Within 3 Days of CIE Upload',
    desc: 'Discrepancy between verified series exam / assignment marksheets and marks published on student portal.',
  },
  {
    id: 'clerical-error',
    title: 'Clerical Entry or Totaling Error in Evaluation',
    deadline: 'Within 7 Days of Result Gazette',
    desc: 'Mathematical sum error or untabulated sub-question in scrutinized answer script.',
  },
  {
    id: 'revaluation-delay',
    title: 'Revaluation Result Delay or Second Valuation Dispute',
    deadline: 'Within 10 Days Post Window',
    desc: 'Representation regarding delayed photocopy issuance or anomalous score variance.',
  },
];

const RESOLUTION_STAGES = [
  {
    step: '01',
    title: 'Petition Registration',
    desc: 'Student submits representation via the portal with course code, hall ticket number, and supporting evidence.',
  },
  {
    step: '02',
    title: 'Independent Audit',
    desc: 'Member Secretary pulls encrypted barcode answer books and obtains independent review from a subject expert.',
  },
  {
    step: '03',
    title: 'Committee Hearing',
    desc: 'EGRC tribunal convenes to review the audit report and examine student representation with natural justice.',
  },
  {
    step: '04',
    title: 'Statutory Order',
    desc: 'Final resolution order ratified by Principal. Corrected grade card synchronized to DigiLocker within 7 days.',
  },
];

export const ExaminationGrievancePage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [regNo, setRegNo] = useState('');
  const [studentName, setStudentName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [showCharterModal, setShowCharterModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regNo.trim()) {
      setRegNo('JEC23CS042');
    }
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const ticket = `JECC-EGRC-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedTicket(ticket);

      setTimeout(() => {
        const el = document.getElementById('ticket-status-display');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }, 700);
  };

  const handleScrollToPortal = () => {
    const el = document.getElementById('grievance-portal-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#28052B] pb-24 selection:bg-[#28052B] selection:text-[#F3CF7A]">
      {/* =========================================================================
          1. Top Institutional Crest & Motto Strip (Exact Match to Reference Image)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Left: Jyothi Engineering College ( AUTONOMOUS ) */}
          <div className="flex items-baseline gap-3">
            <h1 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-[#28052B] tracking-tight">
              Jyothi Engineering College
            </h1>
            <span className="text-[10px] sm:text-[10.5px] tracking-[0.25em] font-semibold text-[#4A384F] uppercase">
              ( A U T O N O M O U S )
            </span>
          </div>

          {/* Right: Hairline Rule + Motto */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <div className="w-8 sm:w-12 h-[1px] bg-[#C59B4E]" />
            <span className="font-['Playfair_Display',serif] italic font-normal text-sm sm:text-base text-[#9E731E] tracking-wide">
              Excellence. Integrity. Trust.
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. Sub-Navigation Bar matching exact image
          ========================================================================= */}
      <ExaminationSubNav activeRoute="examination-grievances" onNavigate={onNavigate} />

      {/* =========================================================================
          3. Hero Section (Exact Replica of Reference Theme)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Flanked Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-10 h-[1px] bg-[#C59B4E]" />
              <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#28052B]">
                STATUTORY APPELLATE TRIBUNAL
              </span>
              <div className="w-8 sm:w-10 h-[1px] bg-[#C59B4E]" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.12]">
              Examination Grievance
              <span className="block italic text-[#BD8E36] font-normal mt-1">
                Redressal Committee
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#4A384F] font-normal leading-relaxed max-w-lg">
              A statutory appellate tribunal ensuring fair resolution of examination disputes, valuation grievances, and student representations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={handleScrollToPortal}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Submit grievance</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('office-of-coe')}
                className="px-6 py-2.5 rounded-full bg-transparent hover:bg-black/5 text-[#28052B] font-semibold text-xs sm:text-sm border border-[#28052B] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Office of CoE</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sweeping Curved Deep Plum Arc Graphic with 3D Scales of Justice, Redressal Charter & Golden Shield */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[340px] flex items-center justify-end overflow-hidden rounded-3xl">
            {/* Deep Royal Plum Curved Arc Background */}
            <div className="absolute inset-y-0 right-0 w-full sm:w-[94%] bg-gradient-to-br from-[#380E3B] via-[#2D0A31] to-[#1E0523] rounded-tl-[130px] sm:rounded-tl-[170px] rounded-bl-[40px] sm:rounded-bl-[60px] shadow-2xl overflow-hidden">
              {/* L-shaped gold accent curve at top right corner */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 border-t-[2px] border-r-[2px] border-[#DFC06A] rounded-tr-2xl pointer-events-none" />

              {/* Text Block inside Top-Right Plum Arc: Divider + "Justice & fairness assured" */}
              <div className="pt-8 sm:pt-9 pl-10 sm:pl-16 pr-8 flex items-start gap-4">
                {/* Vertical gold divider line */}
                <div className="w-[1.5px] h-14 bg-[#DFC06A]/50 shrink-0 mt-1" />

                <div>
                  <div className="font-['Playfair_Display',serif] italic text-2xl sm:text-3xl text-white font-medium leading-tight">
                    Justice &amp;
                    <span className="block">fairness</span>
                    <span className="block">assured</span>
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-normal mt-1 tracking-wide">
                    Statutory redressal tribunal.
                  </div>
                </div>
              </div>

              {/* 3D Illustration Area: Golden Shield + Stack of Case Records + Redressal Charter + Scales of Justice */}
              <div className="absolute bottom-0 left-2 sm:left-10 flex items-end select-none pointer-events-none">
                {/* Left: Stack of two books / records */}
                <div className="relative -mr-6 mb-2 z-10 hidden sm:block">
                  {/* Golden Shield badge above books */}
                  <div className="w-11 h-13 rounded-b-2xl rounded-t-md bg-gradient-to-b from-[#E5B656] to-[#BD8E36] border-2 border-[#FFE898] shadow-lg flex items-center justify-center text-[#28052B] absolute -top-12 left-4 z-20">
                    <Check className="w-5 h-5 stroke-[3] text-[#28052B]" />
                  </div>

                  {/* Top book */}
                  <div className="w-24 h-7 bg-[#4E1A52] rounded-r-md rounded-l-xs shadow-md border-y border-r border-[#692A6E] relative flex items-center px-2">
                    <div className="w-full h-[1px] bg-[#E8DCB8]/40" />
                  </div>
                  {/* Bottom book */}
                  <div className="w-28 h-8 bg-[#330A36] rounded-r-md rounded-l-xs shadow-lg border-y border-r border-[#511857] -mt-1 flex items-center px-2">
                    <div className="w-full h-[1px] bg-[#E8DCB8]/30" />
                  </div>
                </div>

                {/* Center: Redressal Charter Sheet with Golden Seal */}
                <div className="relative z-20">
                  <div className="w-44 sm:w-52 bg-[#FDFBF7] rounded-t-2xl rounded-b-xl shadow-2xl border border-[#E7D6C1] p-4 sm:p-5 pb-6 relative rotate-1">
                    <div className="text-center pb-2 border-b border-[#E7D6C1]">
                      <div className="font-['Playfair_Display',serif] italic text-xs sm:text-sm font-bold text-[#28052B]">
                        Appellate
                      </div>
                      <div className="font-['Playfair_Display',serif] italic text-xs sm:text-sm font-bold text-[#BD8E36] -mt-1">
                        Resolution
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-xs border border-[#BD8E36] bg-[#E5B656]/30 flex items-center justify-center shrink-0">
                          <Check className="w-2 h-2 text-[#BD8E36] stroke-[3]" />
                        </div>
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full w-full" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-xs border border-[#BD8E36] bg-[#E5B656]/30 flex items-center justify-center shrink-0">
                          <Check className="w-2 h-2 text-[#BD8E36] stroke-[3]" />
                        </div>
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full w-4/5" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-xs border border-[#BD8E36] bg-[#E5B656]/30 flex items-center justify-center shrink-0">
                          <Check className="w-2 h-2 text-[#BD8E36] stroke-[3]" />
                        </div>
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full w-5/6" />
                      </div>
                    </div>

                    {/* Gold Circular Seal with ribbon */}
                    <div className="absolute -bottom-3 right-4 flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-[#E5B656] border-2 border-[#FFE898] shadow-md flex items-center justify-center">
                        <Award className="w-3.5 h-3.5 text-[#28052B]" />
                      </div>
                      <div className="w-3 h-3 bg-[#BD8E36] clip-ribbon -mt-0.5" />
                    </div>
                  </div>
                </div>

                {/* Right: Golden Brass Balance Scales of Justice */}
                <div className="relative -ml-4 mb-2 z-30">
                  <div className="w-20 h-24 sm:w-24 sm:h-28 flex flex-col items-center justify-end text-[#DFC06A]">
                    <svg viewBox="0 0 100 120" className="w-full h-full stroke-current fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="50" y1="18" x2="50" y2="108" />
                      <path d="M26 108 L74 108" strokeWidth="4" />
                      <path d="M36 102 L64 102" />
                      <line x1="16" y1="28" x2="84" y2="28" strokeWidth="3" />
                      <circle cx="50" cy="16" r="5" fill="#DFC06A" />
                      <line x1="16" y1="28" x2="8" y2="58" strokeWidth="1.2" />
                      <line x1="16" y1="28" x2="24" y2="58" strokeWidth="1.2" />
                      <path d="M6 58 Q16 66 26 58 Z" fill="#DFC06A" fillOpacity="0.4" strokeWidth="1.5" />
                      <line x1="84" y1="28" x2="76" y2="56" strokeWidth="1.2" />
                      <line x1="84" y1="28" x2="92" y2="56" strokeWidth="1.2" />
                      <path d="M74 56 Q84 64 94 56 Z" fill="#DFC06A" fillOpacity="0.4" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. "STATUTORY GRIEVANCE PORTAL" / "Submit an examination grievance"
          ========================================================================= */}
      <section id="grievance-portal-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-4">
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-2xs p-6 sm:p-8 space-y-5">
          <div className="space-y-1">
            <span className="text-[10.5px] uppercase font-bold tracking-[0.25em] text-[#BD8E36] block">
              STATUTORY GRIEVANCE PORTAL
            </span>
            <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Submit an examination grievance
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4">
              {/* Field 1: KTU Register No. */}
              <div className="md:col-span-4 space-y-1.5">
                <label className="block text-xs font-bold text-[#28052B]">
                  KTU Register No.
                </label>
                <input
                  type="text"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  placeholder="e.g. JEC23CS042"
                  className="w-full px-4 py-2.5 bg-[#FAF7F2] rounded-full border border-[#E7D6C1] text-xs text-[#28052B] placeholder:text-[#4A384F]/50 focus:outline-none focus:border-[#BD8E36] transition-all font-mono"
                />
              </div>

              {/* Field 2: Grievance Category */}
              <div className="md:col-span-4 space-y-1.5">
                <label className="block text-xs font-bold text-[#28052B]">
                  Grievance Category
                </label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FAF7F2] rounded-full border border-[#E7D6C1] text-xs text-[#28052B] focus:outline-none focus:border-[#BD8E36] transition-all appearance-none cursor-pointer pr-9"
                  >
                    <option value="">Select grievance category</option>
                    {GRIEVANCE_CATEGORIES.map((g) => (
                      <option key={g.id} value={g.title}>{g.title}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#4A384F]/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Field 3: Course Code & Subject */}
              <div className="md:col-span-4 space-y-1.5">
                <label className="block text-xs font-bold text-[#28052B]">
                  Course Code &amp; Subject
                </label>
                <input
                  type="text"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                  placeholder="e.g. 23CST301 - Formal Languages"
                  className="w-full px-4 py-2.5 bg-[#FAF7F2] rounded-full border border-[#E7D6C1] text-xs text-[#28052B] placeholder:text-[#4A384F]/50 focus:outline-none focus:border-[#BD8E36] transition-all"
                />
              </div>
            </div>

            {/* Description textarea */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#28052B]">
                Factual Narrative of Grievance (Include specific question number, hall slot, or discrepancy):
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="State your representation clearly with dates, marks challenged, or invigilator report details..."
                className="w-full px-4 py-3 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1] text-xs text-[#28052B] placeholder:text-[#4A384F]/50 focus:outline-none focus:border-[#BD8E36] transition-all resize-none"
              />
            </div>

            {/* Submit Button Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-[#4A384F]">
                <HelpCircle className="w-4 h-4 text-[#BD8E36]" />
                <button
                  type="button"
                  onClick={() => setShowCharterModal(true)}
                  className="font-bold text-[#28052B] hover:underline cursor-pointer"
                >
                  Need guidance with the appeals procedure?
                </button>
                <span className="text-[#C59B4E]/60 hidden sm:inline">|</span>
                <span className="text-[11px] sm:text-xs text-[#4A384F]/80">
                  Review the statutory tribunal charter and resolution timeline.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-7 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60 shrink-0 self-end sm:self-auto"
              >
                <span>{isSubmitting ? 'Submitting to Tribunal...' : 'Submit representation'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* =========================================================================
          5. Live Submitted Representation Confirmation Display
          ========================================================================= */}
      {submittedTicket && (
        <section id="ticket-status-display" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 animate-fade-in">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#BD8E36]">
                    Grievance Docket Generated
                  </div>
                  <h4 className="font-['Playfair_Display',serif] text-lg sm:text-xl font-bold text-[#28052B]">
                    Representation Logged: {submittedTicket}
                  </h4>
                </div>
              </div>

              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-amber-50 text-amber-900 border border-amber-200 self-start sm:self-auto">
                Status: Under Review by Member Secretary
              </span>
            </div>

            <p className="text-xs text-[#4A384F] leading-relaxed">
              Your formal appeal has been assigned to the Examination Grievance Redressal Committee. The confidential answer book audit trail will be summoned from the Office of CoE, and the matter will be reviewed during the statutory passing board hearing.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-[#4A384F] border-t border-[#FAF7F2]">
              <span>Hearing Window: Within 7 working days of result gazette publication</span>
              <button
                onClick={() => setSubmittedTicket(null)}
                className="text-xs font-bold text-[#BD8E36] hover:underline cursor-pointer"
              >
                Submit another petition
              </button>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          6. Four-Stage Redressal Procedure
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-4">
        <div className="flex items-center gap-4">
          <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight shrink-0">
            Tribunal procedure &amp; due process
          </h3>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RESOLUTION_STAGES.map((stg) => (
            <div
              key={stg.step}
              className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-2xs space-y-2 hover:border-[#BD8E36] transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#28052B] text-white text-xs font-bold font-mono flex items-center justify-center">
                  {stg.step}
                </span>
                <Clock className="w-3.5 h-3.5 text-[#BD8E36]" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-[#28052B] pt-1 group-hover:text-[#BD8E36] transition-colors">
                {stg.title}
              </h4>
              <p className="text-[11px] text-[#4A384F] leading-relaxed">
                {stg.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. Statutory Committee Members
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-4">
        <div className="flex items-center gap-4">
          <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight shrink-0">
            Statutory committee constitution
          </h3>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {COMMITTEE_MEMBERS.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-3 hover:border-[#BD8E36] transition-all group"
            >
              <div className="flex items-start justify-between gap-3 pb-2 border-b border-[#FAF7F2]">
                <div>
                  <h4 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                    {m.name}
                  </h4>
                  <div className="text-xs text-[#BD8E36] font-semibold">{m.designation}</div>
                  <div className="text-[11px] text-[#4A384F]/70">{m.dept}</div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center text-[#28052B] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
              </div>

              <p className="text-xs text-[#4A384F] leading-relaxed">
                {m.role}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] text-[#4A384F]/80">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#BD8E36]" />
                  <span>{m.email}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#BD8E36]" />
                  <span>{m.phone}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          8. Statutory Helpline Bento
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="relative">
          {/* Gold accent corners */}
          <div className="hidden sm:block absolute -top-2.5 -left-2.5 w-7 h-7 border-t-[1.5px] border-l-[1.5px] border-[#DFC06A] rounded-tl-lg pointer-events-none" />
          <div className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-7 h-7 border-b-[1.5px] border-r-[1.5px] border-[#DFC06A] rounded-br-lg pointer-events-none" />

          <div className="rounded-3xl bg-[#28052B] text-white p-7 sm:p-10 border border-[#3E1043] shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#390F3B] text-[#DFC06A] border border-[#DFC06A]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
                <span>Statutory Appellate Tribunal Secretariat</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
                Require Immediate Urgent Hearing for Degree Ratification?
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                Graduating final-year students with urgent placement, higher study visa deadlines, or severe valuation variances may request an expedited bench hearing before the Controller of Examinations.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-white/90">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#DFC06A]" />
                  <span>Tribunal Helpline: +91 4884 259000 (Ext 204)</span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#DFC06A]" />
                  <span>egrc@jecc.ac.in</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigate('office-of-coe')}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Office of CoE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('examination-results')}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Check Results</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. Charter Help Modal
          ========================================================================= */}
      {showCharterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E7D6C1] overflow-hidden my-8 animate-fade-in">
            <div className="bg-[#28052B] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-[#DFC06A]" />
                <h4 className="font-['Playfair_Display',serif] text-base font-bold text-white">
                  Statutory Tribunal Charter &amp; Norms
                </h4>
              </div>
              <button
                onClick={() => setShowCharterModal(false)}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-3.5 text-xs text-[#4A384F]">
              <div className="space-y-1">
                <span className="font-bold text-[#28052B]">1. Filing Deadline:</span>
                <p>All representations must be logged within 7 days of result gazette publication or within 24 hours for out-of-syllabus challenges.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#28052B]">2. Natural Justice &amp; Confidentiality:</span>
                <p>Every examinee is afforded complete natural justice. Answer scripts are verified independently under double-blind barcode anonymity.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#28052B]">3. Binding Nature:</span>
                <p>The decision of the EGRC is ratified by the Principal and the Autonomous Governing Body and is final and binding.</p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF7F2] border-t border-[#E7D6C1] text-right">
              <button
                onClick={() => setShowCharterModal(false)}
                className="px-5 py-2 rounded-full bg-[#28052B] text-white font-semibold text-xs hover:bg-[#3D0A41] cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExaminationGrievancePage;
