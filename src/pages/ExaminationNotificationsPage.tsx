import React, { useState, useMemo } from 'react';
import {
  Bell,
  Search,
  Filter,
  FileText,
  ExternalLink,
  Download,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  X,
  Phone,
  Mail,
  Sparkles,
  Printer,
  Share2,
  ShieldCheck,
} from 'lucide-react';
import { ExaminationSubNav } from '../components/ExaminationSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface ExamCircular {
  id: string;
  refNo: string;
  date: string;
  title: string;
  category: 'Registration' | 'Timetable' | 'Revaluation' | 'Results';
  program: 'All' | 'B.Tech' | 'M.Tech' | 'Ph.D.';
  badge?: string;
  deadline?: string;
  summary: string;
  details: string[];
  fileSize: string;
}

const CIRCULARS: ExamCircular[] = [
  {
    id: 'circ-1',
    refNo: 'JEC/COE/CIR/2026/104',
    date: 'Nov 18, 2026',
    title: 'Examination registration notices',
    category: 'Registration',
    program: 'B.Tech',
    badge: 'Active Portal',
    deadline: 'Dec 02, 2026 (5:00 PM)',
    summary:
      'Registration portal opened for B.Tech Semesters 1, 3, and 5 Regular & Supplementary End Semester Examinations (Dec 2026). Remit fees via autonomous student dashboard.',
    details: [
      'Normal registration window closes on December 02, 2026 at 5:00 PM IST.',
      'Late fee of ₹500 applicable between December 03 and December 06, 2026.',
      'Hall tickets will be generated automatically for candidates with minimum 75% attendance and cleared CIE requirements.',
      'Course drop or audit requests must be counter-signed by the Head of Department before fee payment.',
    ],
    fileSize: '345 KB',
  },
  {
    id: 'circ-2',
    refNo: 'JEC/COE/CIR/2026/103',
    date: 'Nov 16, 2026',
    title: 'Semester examination timetable',
    category: 'Timetable',
    program: 'All',
    badge: 'Draft Published',
    summary:
      'Publication of tentative End Semester Examination (ESE) timetable for all undergraduate and postgraduate odd-semester programs (Dec 2026 – Jan 2027).',
    details: [
      'Theory examinations commence on December 15, 2026 in forenoon (9:30 AM – 12:30 PM) and afternoon sessions.',
      'Laboratory practical examinations scheduled between December 05 and December 12, 2026.',
      'Grievances regarding date clashes must be submitted through the department examination coordinator on or before Nov 24, 2026.',
      'Final ratified timetable will be released on Nov 28, 2026.',
    ],
    fileSize: '520 KB',
  },
  {
    id: 'circ-3',
    refNo: 'JEC/COE/CIR/2026/102',
    date: 'Nov 14, 2026',
    title: 'Revaluation announcements',
    category: 'Revaluation',
    program: 'B.Tech',
    badge: 'Window Closing',
    deadline: 'Nov 28, 2026',
    summary:
      'Applications invited for Answer Script Photocopy Verification and Centralized Double Revaluation for Monsoon 2026 ESE results (S5 & S7).',
    details: [
      'Fee for photocopy scrutiny: ₹300 per subject.',
      'Fee for revaluation: ₹750 per subject. Full refund if grade improves by two levels or marks vary by 15% or more.',
      'Candidates can apply online through the student portal without visiting the CoE office in person.',
      'Revaluation outcomes will be published within 21 working days from receipt of application.',
    ],
    fileSize: '290 KB',
  },
  {
    id: 'circ-4',
    refNo: 'JEC/COE/CIR/2026/101',
    date: 'Nov 10, 2026',
    title: 'Declaration of B.Tech & M.Tech Supplementary Results',
    category: 'Results',
    program: 'All',
    badge: 'Published',
    summary:
      'Provisional results of September 2026 Supplementary examinations declared. Authenticated digital grade sheets pushed to DigiLocker and National Academic Depository.',
    details: [
      'Results are accessible on the autonomous portal with university roll number and date of birth.',
      'Physical grade cards will be issued through respective departments by December 10, 2026.',
      'Digital mark transcripts are signed with verifiable 2048-bit PKI cryptographic signature.',
    ],
    fileSize: '380 KB',
  },
  {
    id: 'circ-5',
    refNo: 'JEC/COE/CIR/2026/100',
    date: 'Nov 06, 2026',
    title: 'Ph.D. Coursework Written Examination Registration',
    category: 'Registration',
    program: 'Ph.D.',
    badge: 'Active Window',
    deadline: 'Nov 25, 2026',
    summary:
      'Doctoral research scholars enrolled under KTU Autonomous Ph.D. regulations must register their elective and research methodology coursework examinations.',
    details: [
      'Supervisors must approve the course registration online prior to fee remittance.',
      'Hall tickets will be issued by the Research Deanery.',
      'Examinations will be held in the Administrative Block Seminar Hall A.',
    ],
    fileSize: '215 KB',
  },
  {
    id: 'circ-6',
    refNo: 'JEC/COE/CIR/2026/99',
    date: 'Oct 30, 2026',
    title: 'Guidelines on Approved Scientific Calculators & Examination Hall Stationery',
    category: 'Timetable',
    program: 'All',
    badge: 'Important Regulation',
    summary:
      'Norms regarding permissible non-programmable electronic calculators, digital drafting tools, and mathematical tables for all autonomous examinations.',
    details: [
      'Permitted models: Casio fx-82MS, fx-991MS, fx-991EX (matrix operations allowed, programmable memory models banned).',
      'Smartwatches, Bluetooth audio devices, and programmable storage devices strictly prohibited.',
      'Invigilators are authorized to confiscate non-compliant devices immediately.',
    ],
    fileSize: '410 KB',
  },
  {
    id: 'circ-7',
    refNo: 'JEC/COE/CIR/2026/98',
    date: 'Oct 22, 2026',
    title: 'Scrutiny of Internal Continuous Evaluation (CIE) Marks & Grievance Window',
    category: 'Results',
    program: 'B.Tech',
    badge: 'Completed',
    summary:
      'Departmental display of verified CIE-1 and CIE-2 marks along with assignment and laboratory continuous scores for student signature and grievance redressal.',
    details: [
      'Any discrepancy in internal mark tabulation must be represented to the Course Coordinator within 3 days.',
      'Ratified CIE marks are locked on the portal for end-semester passing board verification.',
    ],
    fileSize: '275 KB',
  },
];

export const ExaminationNotificationsPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [selectedProgram, setSelectedProgram] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCircularModal, setActiveCircularModal] = useState<ExamCircular | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const programs = ['All', 'B.Tech', 'M.Tech', 'Ph.D.'];
  const categories = ['All', 'Registration', 'Timetable', 'Revaluation', 'Results'];

  const filteredCirculars = useMemo(() => {
    return CIRCULARS.filter((c) => {
      // Program filter
      if (selectedProgram !== 'All' && c.program !== 'All' && c.program !== selectedProgram) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'All' && c.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesRef = c.refNo.toLowerCase().includes(q);
        const matchesSummary = c.summary.toLowerCase().includes(q);
        const matchesCat = c.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesRef && !matchesSummary && !matchesCat) return false;
      }
      return true;
    });
  }, [selectedProgram, selectedCategory, searchQuery]);

  const handleDownload = (c: ExamCircular) => {
    setDownloadToast(`Official circular ${c.refNo} downloaded successfully.`);
    setTimeout(() => setDownloadToast(null), 3500);
  };

  const handleScrollToCirculars = () => {
    const el = document.getElementById('latest-circulars-section');
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
          {/* Left: Gear & Lamp Crest + College Name (Autonomous) */}
          <div className="flex items-center gap-3">
            {/* Gear + Lamp + Open Book SVG Crest in deep royal plum */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 text-[#28052B]">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full fill-current"
                aria-label="Jyothi Engineering College Crest"
              >
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

      {/* =========================================================================
          2. Sub-Navigation Bar matching exact image
          ========================================================================= */}
      <ExaminationSubNav activeRoute="examination-notifications" onNavigate={onNavigate} />

      {/* =========================================================================
          3. Hero Section (Exact Replica of Reference Image)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Heading, Subtitle & Eyebrow */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Flanked Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-10 h-[1px] bg-[#C59B4E]" />
              <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#28052B]">
                OFFICE OF THE CONTROLLER OF EXAMINATIONS
              </span>
              <div className="w-8 sm:w-10 h-[1px] bg-[#C59B4E]" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.12]">
              Examination Notifications
              <span className="block italic text-[#BD8E36] font-normal mt-1">
                Official Circulars
              </span>
            </h1>

            {/* Subtitle text matching exact wording in image */}
            <p className="text-sm sm:text-base text-[#4A384F] font-normal leading-relaxed max-w-lg">
              Find examination notices, registration updates, timetables and circulars in one place.
            </p>
          </div>

          {/* Right Column: Sweeping Curved Deep Plum Arc Graphic with Stay Informed & Stacked Circular Sheets */}
          <div className="lg:col-span-6 relative min-h-[290px] sm:min-h-[320px] flex items-center justify-end overflow-hidden rounded-3xl">
            {/* Deep Royal Plum Curved Arc Background */}
            <div className="absolute inset-y-0 right-0 w-full sm:w-[94%] bg-gradient-to-br from-[#380E3B] via-[#2D0A31] to-[#1E0523] rounded-tl-[130px] sm:rounded-tl-[170px] rounded-bl-[40px] sm:rounded-bl-[60px] shadow-2xl overflow-hidden">
              {/* L-shaped gold accent curve at top right corner */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 border-t-[2px] border-r-[2px] border-[#DFC06A] rounded-tr-2xl pointer-events-none" />

              {/* Top Row inside Plum Arc: Ringing Bell + Divider + "Stay informed" */}
              <div className="pt-8 sm:pt-9 pl-10 sm:pl-16 pr-8 flex items-center gap-4">
                {/* Bell with acoustic ringing waves */}
                <div className="relative text-[#DFC06A] shrink-0">
                  <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-9 sm:h-9 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 7 C14.5 7 11 11.5 11 18 C11 23 9 26 7 28 L33 28 C31 26 29 23 29 18 C29 11.5 25.5 7 20 7 Z" />
                    <path d="M17 31 C17 32.7 18.3 34 20 34 C21.7 34 23 32.7 23 31" />
                    {/* Ringing Sound Wave lines */}
                    <path d="M7 14 C5.5 16 5 18 5 21" strokeDasharray="1 1" />
                    <path d="M33 14 C34.5 16 35 18 35 21" strokeDasharray="1 1" />
                    <path d="M25 5 L28 2" />
                    <path d="M15 5 L12 2" />
                  </svg>
                </div>

                {/* Vertical Divider line */}
                <div className="w-[1px] h-8 bg-[#DFC06A]/40 shrink-0" />

                {/* "Stay informed" Text */}
                <div className="font-['Playfair_Display',serif] italic text-2xl sm:text-3xl text-white font-medium tracking-wide">
                  Stay informed
                </div>
              </div>

              {/* Action Buttons Row matching exact image */}
              <div className="pl-10 sm:pl-16 pr-8 pt-5 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleScrollToCirculars}
                  className="px-5 py-2 sm:py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-1.5 cursor-pointer group"
                >
                  <span>View latest notices</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('examination-timetable')}
                  className="px-5 py-2 sm:py-2.5 rounded-full bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm border border-white/60 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Exam timetable</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Layered White Notice Circular Sheets at Bottom-Left */}
              <div className="absolute -bottom-6 left-12 sm:left-20 w-52 sm:w-60 pointer-events-none select-none">
                {/* Back Sheet (slight angle) */}
                <div className="absolute -top-3 left-4 w-44 sm:w-52 h-36 bg-[#EBE3D5] rounded-xl shadow-md rotate-3 border border-[#DFC06A]/30 opacity-70" />

                {/* Front White Circular Sheet */}
                <div className="relative w-44 sm:w-52 bg-white rounded-xl shadow-2xl p-4 sm:p-5 -rotate-3 border border-[#E7D6C1] space-y-2.5">
                  <div className="text-center">
                    <span className="font-['Playfair_Display',serif] text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#28052B] uppercase">
                      CIRCULAR
                    </span>
                  </div>
                  <div className="h-[1.5px] bg-[#E7D6C1] w-full" />
                  <div className="space-y-1.5 pt-0.5">
                    <div className="h-1.5 bg-[#EFE7DC] rounded-full w-full" />
                    <div className="h-1.5 bg-[#EFE7DC] rounded-full w-4/5" />
                    <div className="h-1.5 bg-[#EFE7DC] rounded-full w-11/12" />
                    <div className="h-1.5 bg-[#EFE7DC] rounded-full w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Alert Toast */}
      {downloadToast && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 flex items-center justify-between shadow-xs animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">{downloadToast}</span>
            </div>
            <button
              onClick={() => setDownloadToast(null)}
              className="text-emerald-700 hover:text-emerald-900 font-bold text-xs"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          4. "Latest circulars" Section (Exact Match to Reference Image)
          ========================================================================= */}
      <section id="latest-circulars-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-5">
        {/* Section Header: Title + Hairline extending right */}
        <div className="flex items-center gap-4">
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight shrink-0">
            Latest circulars
          </h2>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        {/* Large Rounded Container */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-2xs p-5 sm:p-7 space-y-5">
          {/* Top Control Bar: Search on Left + Program on Right */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Pill Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-[#4A384F]/50 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search circulars"
                className="w-full pl-11 pr-9 py-2.5 bg-[#FAF7F2] rounded-full border border-[#E7D6C1] text-xs text-[#28052B] placeholder:text-[#4A384F]/50 focus:outline-none focus:border-[#BD8E36] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Program Filter Pills */}
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-[#28052B]">Program:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {programs.map((prog) => {
                  const isActive = selectedProgram === prog;
                  return (
                    <button
                      key={prog}
                      onClick={() => setSelectedProgram(prog)}
                      className={`px-4 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#28052B] text-white font-bold shadow-xs'
                          : 'bg-[#FAF7F2] text-[#4A384F] hover:bg-slate-100 border border-[#E7D6C1]/70 font-medium'
                      }`}
                    >
                      {prog}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Category Filter Row */}
          <div className="pt-2 border-t border-[#E7D6C1]/60 flex flex-wrap items-center gap-2 sm:gap-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#28052B] mr-2">
              <Filter className="w-3.5 h-3.5 text-[#BD8E36]" />
              <span>Category Filter:</span>
            </div>

            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E5B656] text-[#28052B] font-bold shadow-2xs'
                      : 'bg-[#FAF7F2] text-[#4A384F] hover:bg-amber-50/60 border border-[#E7D6C1]/70'
                  }`}
                >
                  {cat}
                </button>
              );
            })}

            {(selectedCategory !== 'All' || selectedProgram !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedProgram('All');
                  setSearchQuery('');
                }}
                className="ml-auto text-xs font-semibold text-rose-700 hover:text-rose-900 underline flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Circular List Rows */}
          <div className="space-y-3 pt-2">
            {filteredCirculars.map((circ) => (
              <div
                key={circ.id}
                className="group p-4 sm:p-5 rounded-2xl bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] border border-[#E7D6C1] hover:border-[#BD8E36] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left Side: Document Icon in Rounded Square + Thin Vertical Bar + Title */}
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Rounded square document icon */}
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E7D6C1] flex items-center justify-center shrink-0 text-[#28052B] group-hover:text-[#BD8E36] group-hover:border-[#BD8E36] transition-colors shadow-2xs">
                    <FileText className="w-5 h-5" />
                  </div>

                  {/* Vertical hairline separator */}
                  <div className="w-[1px] h-7 bg-[#C59B4E]/50 shrink-0 hidden sm:block" />

                  {/* Title & Ref info */}
                  <div className="min-w-0 space-y-0.5">
                    <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors truncate">
                      {circ.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-[#4A384F]/70">
                      <span className="font-mono text-[#BD8E36] font-semibold">{circ.refNo}</span>
                      <span>•</span>
                      <span>{circ.date}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Category Badge in Soft Blush Pill + View PDF Link */}
                <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#E7D6C1]/50">
                  {/* Category Pill in Soft Lavender / Blush */}
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#F5ECF5] text-[#28052B] border border-[#ECD9EC]">
                    {circ.category}
                  </span>

                  {/* Vertical hairline divider before action */}
                  <div className="w-[1px] h-6 bg-[#C59B4E]/40 shrink-0 hidden md:block" />

                  {/* View PDF action button */}
                  <button
                    onClick={() => setActiveCircularModal(circ)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#28052B] group-hover:text-[#BD8E36] hover:underline cursor-pointer transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-[#BD8E36]" />
                    <span>View PDF</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}

            {filteredCirculars.length === 0 && (
              <div className="text-center py-14 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1] space-y-2">
                <FileText className="w-8 h-8 text-[#4A384F]/40 mx-auto" />
                <h4 className="text-sm font-bold text-[#28052B]">No circulars found matching your criteria</h4>
                <p className="text-xs text-[#4A384F]">Try adjusting your search query or selected category filter.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedProgram('All');
                    setSearchQuery('');
                  }}
                  className="mt-2 text-xs text-[#BD8E36] font-bold hover:underline cursor-pointer"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. Important Critical Deadlines Bento (Interactive & Informative)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Registration Window */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-3 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-50 text-amber-800 border border-amber-200">
                Active Cutoff
              </span>
              <Clock className="w-4 h-4 text-[#BD8E36]" />
            </div>
            <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Exam Registration Closes
            </h4>
            <div className="text-2xl font-black text-[#28052B] tracking-tight">Dec 02, 2026</div>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              Applicable for B.Tech S1 &amp; S3 odd semester end assessments. Portal locks at 5:00 PM sharp.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setSelectedCategory('Registration')}
                className="text-xs font-bold text-[#BD8E36] hover:text-[#9E731E] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Registration circulars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Revaluation Scrutiny Window */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-3 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-rose-50 text-rose-800 border border-rose-200">
                Final Call
              </span>
              <AlertCircle className="w-4 h-4 text-rose-600" />
            </div>
            <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Revaluation Submissions
            </h4>
            <div className="text-2xl font-black text-[#28052B] tracking-tight">Nov 28, 2026</div>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              Monsoon 2026 S5 &amp; S7 answer script photocopy verification and re-scrutiny representations.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setSelectedCategory('Revaluation')}
                className="text-xs font-bold text-[#BD8E36] hover:text-[#9E731E] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Revaluation circulars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Hall Ticket Release */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-3 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200">
                Hall Tickets
              </span>
              <Calendar className="w-4 h-4 text-emerald-600" />
            </div>
            <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Admit Card Generation
            </h4>
            <div className="text-2xl font-black text-[#28052B] tracking-tight">Dec 08, 2026</div>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              Students can download barcoded admit cards after verification of minimum 75% attendance.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('examination-timetable')}
                className="text-xs font-bold text-[#BD8E36] hover:text-[#9E731E] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>View timetable</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. Official CoE Notification Assistance Bento
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="relative">
          {/* Gold accent corners */}
          <div className="hidden sm:block absolute -top-2.5 -left-2.5 w-7 h-7 border-t-[1.5px] border-l-[1.5px] border-[#DFC06A] rounded-tl-lg pointer-events-none" />
          <div className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-7 h-7 border-b-[1.5px] border-r-[1.5px] border-[#DFC06A] rounded-br-lg pointer-events-none" />

          <div className="rounded-3xl bg-[#28052B] text-white p-7 sm:p-10 border border-[#3E1043] shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#390F3B] text-[#DFC06A] border border-[#DFC06A]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
                <span>Autonomous Circular Verification System</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
                Require Clarification on an Official Circular?
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                All circulars published on this portal carry legal validity ratified by the Controller of Examinations. For queries related to eligibility, timetable clash representations, or special scribe permissions, contact the examination secretariat.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-white/90">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#DFC06A]" />
                  <span>Exam Cell: +91 4884 259000 (Ext 208)</span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#DFC06A]" />
                  <span>examcell@jecc.ac.in</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigate('examination-timetable')}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Check Exam Timetable</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('office-of-coe')}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Office of CoE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. Interactive PDF Preview Modal (When clicking "View PDF")
          ========================================================================= */}
      {activeCircularModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E7D6C1] overflow-hidden my-8 animate-fade-in">
            {/* Modal Header */}
            <div className="bg-[#28052B] text-white p-5 sm:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-[#DFC06A]/40 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#DFC06A]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#DFC06A]">
                    Official Circular Document
                  </div>
                  <div className="text-sm sm:text-base font-['Playfair_Display',serif] font-bold text-white">
                    {activeCircularModal.refNo}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveCircularModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Document Body (Parchment Styled Official Letterhead) */}
            <div className="p-6 sm:p-8 bg-[#FAF7F2] space-y-5 max-h-[60vh] overflow-y-auto">
              {/* College Official Letterhead */}
              <div className="text-center pb-4 border-b border-[#E7D6C1]">
                <div className="font-['Playfair_Display',serif] text-xl font-black text-[#28052B]">
                  Jyothi Engineering College
                </div>
                <div className="text-[10px] tracking-[0.25em] font-bold text-[#4A384F] uppercase">
                  ( AUTONOMOUS ) • CHERUTHURUTHY, THRISSUR
                </div>
                <div className="text-xs text-[#BD8E36] font-semibold mt-1">
                  OFFICE OF THE CONTROLLER OF EXAMINATIONS
                </div>
              </div>

              {/* Ref No & Date */}
              <div className="flex justify-between items-center text-xs text-[#28052B] font-mono border-b border-[#E7D6C1]/60 pb-3">
                <div>
                  <span className="font-bold">Ref No:</span> {activeCircularModal.refNo}
                </div>
                <div>
                  <span className="font-bold">Date:</span> {activeCircularModal.date}
                </div>
              </div>

              {/* Subject Title */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#BD8E36]">Subject:</span>
                <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] leading-snug">
                  {activeCircularModal.title}
                </h3>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed bg-white p-4 rounded-xl border border-[#E7D6C1]">
                {activeCircularModal.summary}
              </p>

              {/* Detailed Points */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#28052B] uppercase tracking-wide">
                  Order &amp; Regulatory Directives:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#4A384F]">
                  {activeCircularModal.details.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BD8E36] shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deadline Alert if any */}
              {activeCircularModal.deadline && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center gap-2 text-xs text-amber-900">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>
                    <strong>Cutoff Deadline:</strong> {activeCircularModal.deadline}
                  </span>
                </div>
              )}

              {/* Signature Block */}
              <div className="pt-4 flex justify-between items-end text-xs text-[#28052B]">
                <div className="text-[11px] text-[#4A384F]/70">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 inline mr-1" />
                  Digitally Authenticated with Autonomous PKI Seal
                </div>
                <div className="text-right">
                  <div className="font-bold font-['Playfair_Display',serif] text-[#28052B]">Dr. Vincent G.</div>
                  <div className="text-[11px] text-[#4A384F]">Controller of Examinations</div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#E7D6C1] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#4A384F]/70">
                File size: <strong>{activeCircularModal.fileSize}</strong> (PDF Document)
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownload(activeCircularModal)}
                  className="px-5 py-2 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Official PDF</span>
                </button>

                <button
                  onClick={() => setActiveCircularModal(null)}
                  className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#28052B] font-semibold text-xs transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExaminationNotificationsPage;
