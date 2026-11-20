import React, { useState } from 'react';
import {
  Bell,
  Calendar,
  BarChart3,
  FileText,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Download,
  Award,
  Sparkles,
  HelpCircle,
  X,
  Send,
  Building2,
  FileCheck,
} from 'lucide-react';
import { ExaminationSubNav } from '../components/ExaminationSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface OfficerInfo {
  initials: string;
  name: string;
  role: string;
  qualification: string;
  office: string;
  email: string;
  phone: string;
  consultationHours: string;
  responsibilities: string;
}

const OFFICERS: OfficerInfo[] = [
  {
    initials: 'VG',
    name: 'Dr. Vincent G.',
    role: 'Controller of Examinations',
    qualification: 'Ph.D., M.Tech, FIE',
    office: 'Administrative Block (South Wing), Room 204',
    email: 'coe@jecc.ac.in',
    phone: '+91 4884 259000 (Extn: 204)',
    consultationHours: 'Monday – Friday: 10:00 AM – 1:00 PM & 2:30 PM – 4:00 PM',
    responsibilities: 'Overall supervision of evaluation policies, academic passing boards, question paper confidentiality, result publication & KTU autonomous coordination.',
  },
  {
    initials: 'TG',
    name: 'Prof. Thomas George',
    role: 'Additional Controller of Examinations',
    qualification: 'M.Tech (Computer Science), Ph.D. (Pursuing)',
    office: 'Central Evaluation Suite, Room 206',
    email: 'addl.coe@jecc.ac.in',
    phone: '+91 4884 259000 (Extn: 206)',
    consultationHours: 'Monday – Friday: 11:00 AM – 3:30 PM',
    responsibilities: 'Question paper bank audits, centralized valuation camps, OMR barcode telemetry & dummy numbering administration.',
  },
  {
    initials: 'RK',
    name: 'Prof. Reshma K. M.',
    role: 'Deputy Controller',
    qualification: 'M.Tech (VLSI & Embedded Systems)',
    office: 'Student Examination Service Desk, Room 208',
    email: 'dycoe.pre@jecc.ac.in',
    phone: '+91 4884 259000 (Extn: 208)',
    consultationHours: 'Monday – Friday: 9:30 AM – 4:00 PM',
    responsibilities: 'Examination registration, fee reconciliation, hall ticket dispatch, seating plans, and special scribe accommodations.',
  },
];

const EVALUATION_MANDATES = [
  {
    num: '01',
    title: 'Question Paper Confidentiality & Bank',
    desc: 'Randomized automated question paper generation from double-blind audited subject matter panels across peer autonomous universities and premier technical institutes.',
    tag: 'Pre-Exam Protocol',
  },
  {
    num: '02',
    title: 'Centralized Double-Blind Evaluation',
    desc: 'Each answer book features encrypted 2D QR and Code-128 barcodes ensuring total anonymity of candidate identity during centralized blind valuation camps.',
    tag: 'Evaluation Integrity',
  },
  {
    num: '03',
    title: 'Result Scrutiny & Passing Board',
    desc: 'Statutory scrutiny committee review of difficulty indices, moderation parameters, and outcome-based continuous internal evaluation (CIE).',
    tag: 'Result Governance',
  },
  {
    num: '04',
    title: 'DigiLocker & National Academic Depository',
    desc: 'Instant digital synchronization of authenticated grade cards, provisional degree certificates, and official transcripts with the National Academic Depository (NAD).',
    tag: 'Digital Credentials',
  },
];

const LIFECYCLE_STAGES = [
  { stage: 'Stage 01', title: 'Curriculum & Blueprint', desc: 'Approved course outcomes, Bloom’s taxonomy mapping & question paper blueprints.' },
  { stage: 'Stage 02', title: 'Encrypted Generation', desc: 'Randomized paper generation 90 minutes before exam under double biometrics.' },
  { stage: 'Stage 03', title: 'Barcoded Examination', desc: 'High-security answer booklets with anti-tamper tear-off candidate slips.' },
  { stage: 'Stage 04', title: 'Double Blind Valuation', desc: 'Independent 1st & 2nd valuations with automated variance escalation (>15%).' },
  { stage: 'Stage 05', title: 'Gazette & DigiLocker', desc: 'Passing board ratification, online result publication & NAD certificate sync.' },
];

const DOWNLOADABLE_FORMS = [
  { title: 'Revaluation & Answer Script Photocopy Requisition Form', ref: 'JECC/COE/FORM-01', size: '240 KB' },
  { title: 'Official Academic Transcript & Duplicate Grade Card Application', ref: 'JECC/COE/FORM-02', size: '180 KB' },
  { title: 'Examination Grievance & Anomaly Representation Template', ref: 'JECC/COE/FORM-03', size: '165 KB' },
  { title: 'Special Accommodation / Scribe Allocation Medical Application', ref: 'JECC/COE/FORM-04', size: '210 KB' },
];

export const OfficeOfCoePage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [selectedOfficer, setSelectedOfficer] = useState<OfficerInfo | null>(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryRegNo, setInquiryRegNo] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState<string | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryRegNo || !inquiryMessage) return;
    setInquirySuccess(`Your inquiry to ${selectedOfficer?.name} has been logged. An official acknowledgment has been sent to your student portal.`);
    setTimeout(() => {
      setInquirySuccess(null);
      setSelectedOfficer(null);
      setInquiryName('');
      setInquiryRegNo('');
      setInquiryMessage('');
    }, 3000);
  };

  const handleDownload = (title: string) => {
    setDownloadToast(`Official document "${title}" downloaded successfully.`);
    setTimeout(() => setDownloadToast(null), 3500);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#28052B] pb-24 selection:bg-[#28052B] selection:text-[#F3CF7A]">
      {/* 1. Top Institutional Crest & Motto Strip (Exact Match to Image) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Left: Gear & Lamp Emblem + College Name (Autonomous) */}
          <div className="flex items-center gap-3">
            {/* Gear + Lamp + Open Book SVG Crest in deep plum */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 text-[#28052B]">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current" aria-label="Jyothi Engineering College Crest">
                {/* 12-tooth cogwheel */}
                <path d="M50 8 C47.5 8 45.5 10 45.5 12.5 L45.5 15.5 C42.2 16.3 39.1 17.6 36.3 19.3 L34.1 17.1 C32.3 15.3 29.5 15.3 27.7 17.1 L23.5 21.3 C21.7 23.1 21.7 25.9 23.5 27.7 L25.7 29.9 C24 32.7 22.7 35.8 21.9 39.1 L18.9 39.1 C16.4 39.1 14.4 41.1 14.4 43.6 L14.4 49.6 C14.4 52.1 16.4 54.1 18.9 54.1 L21.9 54.1 C22.7 57.4 24 60.5 25.7 63.3 L23.5 65.5 C21.7 67.3 21.7 70.1 23.5 71.9 L27.7 76.1 C29.5 77.9 32.3 77.9 34.1 76.1 L36.3 73.9 C39.1 75.6 42.2 76.9 45.5 77.7 L45.5 80.7 C45.5 83.2 47.5 85.2 50 85.2 L56 85.2 C58.5 85.2 60.5 83.2 60.5 80.7 L60.5 77.7 C63.8 76.9 66.9 75.6 69.7 73.9 L71.9 76.1 C73.7 77.9 76.5 77.9 78.3 76.1 L82.5 71.9 C84.3 70.1 84.3 67.3 82.5 65.5 L80.3 63.3 C82 60.5 83.3 57.4 84.1 54.1 L87.1 54.1 C89.6 54.1 91.6 52.1 91.6 49.6 L91.6 43.6 C91.6 41.1 89.6 39.1 87.1 39.1 L84.1 39.1 C83.3 35.8 82 32.7 80.3 29.9 L82.5 27.7 C84.3 25.9 84.3 23.1 82.5 21.3 L78.3 17.1 C76.5 15.3 73.7 15.3 71.9 17.1 L69.7 19.3 C66.9 17.6 63.8 16.3 60.5 15.5 L60.5 12.5 C60.5 10 58.5 8 56 8 L50 8 Z M53 22 C68.5 22 81 34.5 81 50 C81 65.5 68.5 78 53 78 C37.5 78 25 65.5 25 50 C25 34.5 37.5 22 53 22 Z" />
                {/* Flame in center */}
                <path d="M53 30 C53 30 46 39 46 45 C46 49 49 52 53 52 C57 52 60 49 60 45 C60 39 53 30 53 30 Z" />
                {/* Open book at bottom */}
                <path d="M37 58 Q53 62 53 66 Q53 62 69 58 L69 64 Q53 68 53 72 Q53 68 37 64 Z" />
              </svg>
            </div>

            {/* Vertical thin gold divider */}
            <div className="w-[1px] h-8 bg-[#C59B4E]/60 shrink-0" />

            {/* Name + ( AUTONOMOUS ) */}
            <div>
              <div className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-[#28052B] tracking-tight leading-tight">
                Jyothi Engineering College
              </div>
              <div className="text-[10px] sm:text-[10.5px] tracking-[0.25em] font-semibold text-[#4A384F] uppercase">
                ( AUTONOMOUS )
              </div>
            </div>
          </div>

          {/* Right: Golden Hairline + Motto */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <div className="w-8 sm:w-12 h-[1px] bg-[#C59B4E]" />
            <span className="font-['Playfair_Display',serif] italic font-normal text-sm sm:text-base text-[#9E731E] tracking-wide">
              Excellence. Integrity. Trust.
            </span>
          </div>
        </div>
      </section>

      {/* 2. Sub-Navigation Bar matching image */}
      <ExaminationSubNav activeRoute="office-of-coe" onNavigate={onNavigate} />

      {/* 3. Hero Section (Exact Replica of the Image) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Flanked Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-10 h-[1px] bg-[#C59B4E]" />
              <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#28052B]">
                AUTONOMOUS EXAMINATION CELL
              </span>
              <div className="w-8 sm:w-10 h-[1px] bg-[#C59B4E]" />
            </div>

            {/* Serif Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.12]">
              Office of the Controller of
              <span className="block italic text-[#BD8E36] font-normal mt-1">
                Examinations
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#4A384F] font-normal leading-relaxed max-w-lg">
              The statutory administrative apex body orchestrating end-semester examinations, assessments, continuous internal evaluation (CIE), valuation, and maintenance of academic records.
            </p>

            {/* Action Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onNavigate('examination-notifications')}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Exam Notifications</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('examination-timetable')}
                className="px-6 py-2.5 rounded-full bg-white/80 hover:bg-white text-[#28052B] font-semibold text-xs sm:text-sm border border-[#28052B] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>View Timetable</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Curved Plum Graphic with Watermark Seal, Examination Paper & Floating Services Card */}
          <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[400px] flex items-center justify-end overflow-hidden rounded-3xl">
            {/* Deep Plum Curved Arc Background sweeping in */}
            <div className="absolute inset-y-0 right-0 w-[92%] sm:w-[88%] bg-gradient-to-br from-[#380E3B] via-[#2D0A31] to-[#1E0523] rounded-tl-[140px] sm:rounded-tl-[180px] rounded-bl-[40px] sm:rounded-bl-[60px] shadow-2xl overflow-hidden pointer-events-none">
              {/* Circular Watermark Seal on the plum background */}
              <div className="absolute top-4 left-6 sm:left-10 w-44 h-44 sm:w-56 sm:h-56 opacity-20 pointer-events-none text-[#DFC06A]">
                <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-current" strokeWidth="1.5">
                  <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
                  <circle cx="100" cy="100" r="76" strokeWidth="2" />
                  <path id="curveTop" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" stroke="none" />
                  <path id="curveBottom" d="M 170,100 A 70,70 0 0,1 30,100" fill="none" stroke="none" />
                  <text className="text-[10px] uppercase font-bold tracking-[0.2em] fill-current">
                    <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
                      JYOTHI ENGINEERING COLLEGE
                    </textPath>
                  </text>
                  <text className="text-[9px] uppercase font-bold tracking-[0.28em] fill-current">
                    <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
                      AUTONOMOUS
                    </textPath>
                  </text>
                  <circle cx="100" cy="100" r="42" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="16" fill="currentColor" fillOpacity="0.15" />
                </svg>
              </div>

              {/* Diagonal Gold accent line along the bottom arc */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-[#DFC06A]/30 rounded-full pointer-events-none" />
            </div>

            {/* Realistic Tilted Examination Paper Booklet with Pen */}
            <div className="absolute left-2 sm:left-6 bottom-4 sm:bottom-6 w-72 sm:w-88 bg-[#FCFAF7] rounded-xl p-4 sm:p-5 shadow-2xl border border-slate-200/90 rotate-[-5deg] z-10 transition-transform hover:rotate-[-3deg] pointer-events-none">
              {/* Top of exam paper */}
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <div className="w-5 h-5 text-[#28052B]">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" fill="none" />
                    <circle cx="50" cy="50" r="14" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Playfair_Display',serif] text-xs font-bold text-[#28052B] leading-none">
                    Jyothi Engineering College
                  </div>
                  <div className="text-[8px] text-[#4A384F] font-semibold">(Autonomous)</div>
                </div>
              </div>

              {/* Title on paper */}
              <div className="text-center py-2">
                <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#28052B] uppercase border-y border-slate-300 py-1">
                  EXAMINATION PAPER
                </div>
              </div>

              {/* Form lines */}
              <div className="space-y-1 text-[9.5px] text-[#4A384F] font-mono pt-1">
                <div className="flex">
                  <span className="w-20 text-slate-500">Programme</span>
                  <span className="font-semibold text-[#28052B]">: B.Tech.</span>
                </div>
                <div className="flex">
                  <span className="w-20 text-slate-500">Semester</span>
                  <span className="font-semibold text-[#28052B]">: End Semester Examination (Autonomous)</span>
                </div>
                <div className="flex">
                  <span className="w-20 text-slate-500">Course Code</span>
                  <span className="font-semibold text-[#BD8E36]">: 23MAT201 (Slot A)</span>
                </div>
              </div>

              {/* Realistic Burgundy & Gold Pen resting across */}
              <div className="absolute -bottom-3 -right-4 w-44 sm:w-52 h-4 pointer-events-none rotate-[-25deg] drop-shadow-md">
                <div className="w-full h-full bg-gradient-to-r from-[#3D0A28] via-[#5C163C] to-[#240618] rounded-full border border-[#DFC06A] relative flex items-center justify-between px-2">
                  <div className="w-2.5 h-full bg-[#DFC06A] rounded-l-full" />
                  <div className="w-1.5 h-full bg-[#DFC06A]" />
                  <div className="w-4 h-full bg-gradient-to-r from-[#DFC06A] to-amber-200 rounded-r-full" />
                </div>
              </div>
            </div>

            {/* Floating "Examination Services" Card on the right */}
            <div className="relative z-20 my-4 mr-1 sm:mr-3">
              {/* L-shaped gold accent bracket curve at top-right */}
              <div className="hidden sm:block absolute -top-2.5 -right-2.5 w-8 h-8 border-t-[1.5px] border-r-[1.5px] border-[#DFC06A] rounded-tr-2xl pointer-events-none" />

              {/* Card Container */}
              <div className="w-68 sm:w-76 rounded-3xl bg-white/98 backdrop-blur-xs p-5 sm:p-6 shadow-2xl border border-slate-200/90 space-y-3.5">
                <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] pb-2.5 border-b border-slate-100">
                  Examination Services
                </h3>

                {/* 4 Interactive Service Rows */}
                <div className="space-y-1.5 text-xs">
                  {/* Service 1: Notifications */}
                  <button
                    onClick={() => onNavigate('examination-notifications')}
                    className="w-full p-2 rounded-2xl hover:bg-[#FAF7F2] text-left flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1]/60 flex items-center justify-center shrink-0">
                        <Bell className="w-4 h-4 text-[#28052B]" />
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                        Notifications
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Service 2: Timetable */}
                  <button
                    onClick={() => onNavigate('examination-timetable')}
                    className="w-full p-2 rounded-2xl hover:bg-[#FAF7F2] text-left flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1]/60 flex items-center justify-center shrink-0">
                        <Calendar className="w-4 h-4 text-[#28052B]" />
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                        Timetable
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Service 3: Results */}
                  <button
                    onClick={() => onNavigate('examination-results')}
                    className="w-full p-2 rounded-2xl hover:bg-[#FAF7F2] text-left flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1]/60 flex items-center justify-center shrink-0">
                        <BarChart3 className="w-4 h-4 text-[#28052B]" />
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                        Results
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Service 4: Guidelines */}
                  <button
                    onClick={() => onNavigate('examination-guidelines')}
                    className="w-full p-2 rounded-2xl hover:bg-[#FAF7F2] text-left flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1]/60 flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4 text-[#28052B]" />
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                        Guidelines
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section Below Hero: "Office leadership & administration" (Exact Match to Image) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-5">
        {/* Section Heading with Hairline Gold Rule */}
        <div className="flex items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#28052B] whitespace-nowrap">
            Office leadership &amp; administration
          </h2>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        {/* 3 Leadership Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {OFFICERS.map((officer) => (
            <div
              key={officer.initials}
              className="p-5 sm:p-6 bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#C59B4E] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
            >
              {/* Top row: Dark plum square badge with initials + Name & Role */}
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-2xl bg-[#28052B] text-white flex items-center justify-center font-serif font-black text-lg shadow-xs shrink-0 tracking-wider">
                  {officer.initials}
                </div>
                <div>
                  <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] leading-tight">
                    {officer.name}
                  </h3>
                  <div className="text-xs text-[#BD8E36] font-semibold mt-0.5">
                    {officer.role}
                  </div>
                </div>
              </div>

              {/* Bottom row: Contact Office Action */}
              <div className="pt-3.5 border-t border-[#FAF7F2]">
                <button
                  onClick={() => setSelectedOfficer(officer)}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#28052B] hover:text-[#BD8E36] transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-3.5 h-3.5 text-[#BD8E36]" />
                    <span>Contact office</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Autonomous Quality Mandates & Key Functions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#BD8E36]">
              Quality Assurance in Evaluation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#28052B]">
            Core Evaluation &amp; Regulatory Mandates
          </h2>
          <p className="text-xs sm:text-sm text-[#4A384F]/80 max-w-2xl">
            Under the autonomous statutes, the Office of the Controller of Examinations operates with complete statutory autonomy, confidentiality, and integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EVALUATION_MANDATES.map((m, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-2xs hover:border-[#C59B4E] transition-all space-y-3"
            >
              <div className="w-9 h-9 rounded-xl bg-[#28052B] text-[#DFC06A] font-black text-xs flex items-center justify-center font-mono">
                {m.num}
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#BD8E36] border border-[#E7D6C1]">
                {m.tag}
              </span>
              <h3 className="font-bold text-sm text-[#28052B]">{m.title}</h3>
              <p className="text-xs text-[#4A384F]/80 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Evaluation Lifecycle & Security Pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#28052B] whitespace-nowrap">
            Evaluation lifecycle &amp; security pipeline
          </h2>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {LIFECYCLE_STAGES.map((s, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl border border-[#E7D6C1] shadow-2xs space-y-2 relative"
            >
              <div className="text-[10px] font-mono font-bold text-[#BD8E36] uppercase tracking-wider">
                {s.stage}
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-[#28052B]">{s.title}</h4>
              <p className="text-[11px] text-[#4A384F]/75 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Downloadable Official Examination Forms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#28052B]">
              Official Forms &amp; Requisition Templates
            </h2>
            <p className="text-xs sm:text-sm text-[#4A384F]/80">
              Download authenticated templates for revaluations, official transcripts, and medical accommodations.
            </p>
          </div>
          <span className="text-xs font-bold text-[#BD8E36] bg-white px-3 py-1.5 rounded-xl border border-[#E7D6C1] self-start sm:self-auto">
            Season 2026–27
          </span>
        </div>

        {downloadToast && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 flex items-center gap-2 animate-fade-in shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{downloadToast}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DOWNLOADABLE_FORMS.map((form, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl border border-[#E7D6C1] hover:border-[#C59B4E] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#BD8E36]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#28052B] truncate">{form.title}</h4>
                  <div className="text-[11px] text-[#4A384F]/70 flex items-center gap-2 mt-0.5">
                    <span>Order: {form.ref}</span>
                    <span>•</span>
                    <span>PDF ({form.size})</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDownload(form.title)}
                className="px-3.5 py-1.5 rounded-xl bg-[#FAF7F2] hover:bg-[#E5B656] text-[#28052B] font-bold text-xs border border-[#E7D6C1] transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CoE Operating Hours, Helpdesk & Location Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="relative">
          <div className="hidden sm:block absolute -top-2.5 -left-2.5 w-7 h-7 border-t-[1.5px] border-l-[1.5px] border-[#DFC06A] rounded-tl-lg pointer-events-none" />
          <div className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-7 h-7 border-b-[1.5px] border-r-[1.5px] border-[#DFC06A] rounded-br-lg pointer-events-none" />

          <div className="rounded-3xl bg-[#28052B] text-white p-7 sm:p-10 border border-[#3E1043] shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#390F3B] text-[#DFC06A] border border-[#DFC06A]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
                <span>Office of the Controller of Examinations</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
                Visiting Hours &amp; Confidential Examination Helpdesk
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                The Office of CoE is situated on the 2nd Floor of the Administrative Block (South Wing). Student consultation and genuine certificate verification counters are open Monday through Friday from 9:00 AM to 4:00 PM.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-white/90">
                <a href="tel:+914884259000" className="flex items-center gap-2 hover:text-[#DFC06A] transition-colors">
                  <Phone className="w-4 h-4 text-[#DFC06A]" />
                  <span>+91 4884 259000 / Extn: 204 / 208</span>
                </a>
                <a href="mailto:coe@jecc.ac.in" className="flex items-center gap-2 hover:text-[#DFC06A] transition-colors">
                  <Mail className="w-4 h-4 text-[#DFC06A]" />
                  <span>coe@jecc.ac.in / examcell@jecc.ac.in</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigate('examination-results')}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Check Student Results</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('examination-grievances')}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-[#DFC06A]" />
                <span>Grievance Redressal</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Interactive Contact Office Modal */}
      {selectedOfficer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-[#E7D6C1] shadow-2xl p-6 sm:p-7 space-y-4 relative">
            <button
              onClick={() => setSelectedOfficer(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-slate-200 text-[#28052B] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3.5 pr-8">
              <div className="w-13 h-13 rounded-2xl bg-[#28052B] text-white flex items-center justify-center font-serif font-black text-lg shadow-xs shrink-0 tracking-wider">
                {selectedOfficer.initials}
              </div>
              <div>
                <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
                  {selectedOfficer.name}
                </h3>
                <div className="text-xs text-[#BD8E36] font-semibold">{selectedOfficer.role}</div>
                <div className="text-[11px] text-[#4A384F]/70">{selectedOfficer.qualification}</div>
              </div>
            </div>

            <div className="p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1] text-xs space-y-1.5 text-[#4A384F]">
              <div><strong>Cabin:</strong> {selectedOfficer.office}</div>
              <div><strong>Phone Extension:</strong> {selectedOfficer.phone}</div>
              <div><strong>Official Email:</strong> {selectedOfficer.email}</div>
              <div><strong>Student Consultation Hours:</strong> {selectedOfficer.consultationHours}</div>
            </div>

            {inquirySuccess ? (
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-300 text-xs text-emerald-900 animate-fade-in space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Inquiry Dispatched!</span>
                </div>
                <p>{inquirySuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-[#28052B] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Anjali Nair"
                      className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs focus:outline-none focus:border-[#BD8E36]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#28052B] mb-1">KTU Register No *</label>
                    <input
                      type="text"
                      required
                      value={inquiryRegNo}
                      onChange={(e) => setInquiryRegNo(e.target.value.toUpperCase())}
                      placeholder="e.g. JEC23CS042"
                      className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs font-mono uppercase focus:outline-none focus:border-[#BD8E36]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#28052B] mb-1">Message / Consultation Query *</label>
                  <textarea
                    rows={3}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Briefly state your examination inquiry..."
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs focus:outline-none focus:border-[#BD8E36]"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setSelectedOfficer(null)}
                    className="px-4 py-2 rounded-full bg-[#FAF7F2] hover:bg-slate-200 text-[#4A384F] font-semibold text-xs cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send to Office</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficeOfCoePage;
