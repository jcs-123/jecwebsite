import React, { useState } from 'react';
import {
  Award,
  Search,
  CheckCircle2,
  Calendar,
  Download,
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  AlertCircle,
  ExternalLink,
  GraduationCap,
  Layers,
  HelpCircle,
  X,
  Printer,
  ChevronDown,
  Check,
} from 'lucide-react';
import { ExaminationSubNav } from '../components/ExaminationSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface PublishedResultGazette {
  id: string;
  semester: string;
  examSession: string;
  publishDate: string;
  passPercentage: string;
  revalDeadline: string;
  status: 'Revaluation Active' | 'Revaluation Closed';
  fileSize: string;
}

const PUBLISHED_GAZETTES: PublishedResultGazette[] = [
  {
    id: 'res-1',
    semester: 'B.Tech S6 Regular & Supplementary',
    examSession: 'Monsoon 2026 Examination',
    publishDate: 'Nov 12, 2026',
    passPercentage: '91.4%',
    revalDeadline: 'Nov 28, 2026',
    status: 'Revaluation Active',
    fileSize: '480 KB',
  },
  {
    id: 'res-2',
    semester: 'B.Tech S4 Regular & Supplementary',
    examSession: 'Monsoon 2026 Examination',
    publishDate: 'Oct 30, 2026',
    passPercentage: '88.2%',
    revalDeadline: 'Nov 15, 2026',
    status: 'Revaluation Closed',
    fileSize: '520 KB',
  },
  {
    id: 'res-3',
    semester: 'M.Tech S2 Autonomous End Semester',
    examSession: 'Monsoon 2026 Examination',
    publishDate: 'Oct 22, 2026',
    passPercentage: '97.5%',
    revalDeadline: 'Nov 08, 2026',
    status: 'Revaluation Closed',
    fileSize: '310 KB',
  },
  {
    id: 'res-4',
    semester: 'B.Tech S8 Final Degree Provisional Gazette',
    examSession: 'Winter 2025-26 Session',
    publishDate: 'Sep 15, 2026',
    passPercentage: '94.8%',
    revalDeadline: 'Completed',
    status: 'Revaluation Closed',
    fileSize: '680 KB',
  },
];

interface CourseGradeRow {
  code: string;
  name: string;
  credits: number;
  grade: string;
  points: number;
  status: 'PASS' | 'FAIL';
}

const SAMPLE_COURSES: CourseGradeRow[] = [
  { code: '23CST301', name: 'Formal Languages & Automata Theory', credits: 4, grade: 'A+', points: 9.0, status: 'PASS' },
  { code: '23CST303', name: 'Computer Networks & Security', credits: 4, grade: 'O', points: 10.0, status: 'PASS' },
  { code: '23CST305', name: 'System Software & Compiler Design', credits: 4, grade: 'A', points: 8.5, status: 'PASS' },
  { code: '23CST307', name: 'Microprocessors & Embedded Microcontrollers', credits: 3, grade: 'B+', points: 8.0, status: 'PASS' },
  { code: '23HUT300', name: 'Industrial Economics & Foreign Trade', credits: 3, grade: 'A', points: 8.5, status: 'PASS' },
  { code: '23CSL331', name: 'System Software & Networking Laboratory', credits: 2, grade: 'O', points: 10.0, status: 'PASS' },
  { code: '23CSL333', name: 'Microprocessor & Interfacing Laboratory', credits: 2, grade: 'O', points: 10.0, status: 'PASS' },
];

export const ExaminationResultsPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [regNo, setRegNo] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [gradeCardData, setGradeCardData] = useState<any | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const semestersList = [
    'S1 B.Tech',
    'S2 B.Tech',
    'S3 B.Tech',
    'S4 B.Tech',
    'S5 B.Tech',
    'S6 B.Tech',
    'S7 B.Tech',
    'S8 B.Tech',
    'M.Tech S1',
    'M.Tech S2',
  ];

  const sessionsList = [
    'Monsoon 2026 Examination',
    'Winter 2025-26 Session',
    'Supplementary Sep 2026',
    'Even Semester Apr-May 2026',
  ];

  const handleFetchResult = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regNo.trim()) {
      setRegNo('JEC23CS042');
    }
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      setGradeCardData({
        studentName: 'ROHIT MENON',
        regNo: regNo.trim() ? regNo.trim().toUpperCase() : 'JEC23CS042',
        program: 'B.Tech in Computer Science & Engineering (Autonomous)',
        semester: selectedSemester || 'S5 B.Tech',
        session: selectedSession || 'Monsoon 2026 Examination',
        issueDate: 'Nov 18, 2026',
        sgpa: '9.09',
        cgpa: '8.86',
        totalCredits: 22,
        earnedCredits: 22,
        courses: SAMPLE_COURSES,
      });

      // Scroll to grade card
      setTimeout(() => {
        const el = document.getElementById('grade-card-display');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }, 600);
  };

  const handleDownloadPDF = () => {
    setDownloadToast('Official Provisional Grade Card (PDF) downloaded with autonomous digital signature seal.');
    setTimeout(() => setDownloadToast(null), 3500);
  };

  const handleDownloadGazette = (title: string) => {
    setDownloadToast(`Official Result Gazette "${title}" downloaded successfully.`);
    setTimeout(() => setDownloadToast(null), 3500);
  };

  const handleScrollToPortal = () => {
    const el = document.getElementById('find-grade-card-section');
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
      <ExaminationSubNav activeRoute="examination-results" onNavigate={onNavigate} />

      {/* =========================================================================
          3. Hero Section (Exact Replica of Reference Image)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Flanked Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-10 h-[1px] bg-[#C59B4E]" />
              <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#28052B]">
                STUDENT EXAMINATION PORTAL
              </span>
              <div className="w-8 sm:w-10 h-[1px] bg-[#C59B4E]" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.12]">
              Examination Results
              <span className="block italic text-[#BD8E36] font-normal mt-1">
                Provisional Grade Cards
              </span>
            </h2>

            {/* Subtitle text matching exact wording in image */}
            <p className="text-sm sm:text-base text-[#4A384F] font-normal leading-relaxed max-w-lg">
              Access examination results and provisional grade cards, and explore revaluation notices.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={handleScrollToPortal}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>View student result</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('examination-notifications')}
                className="px-6 py-2.5 rounded-full bg-transparent hover:bg-black/5 text-[#28052B] font-semibold text-xs sm:text-sm border border-[#28052B] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Revaluation notices</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sweeping Curved Deep Plum Arc Graphic with 3D Books, Mortarboard Cap, Grade Card Sheet & "Your academic journey" */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[340px] flex items-center justify-end overflow-hidden rounded-3xl">
            {/* Deep Royal Plum Curved Arc Background */}
            <div className="absolute inset-y-0 right-0 w-full sm:w-[94%] bg-gradient-to-br from-[#380E3B] via-[#2D0A31] to-[#1E0523] rounded-tl-[130px] sm:rounded-tl-[170px] rounded-bl-[40px] sm:rounded-bl-[60px] shadow-2xl overflow-hidden">
              {/* L-shaped gold accent curve at top right corner */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 border-t-[2px] border-r-[2px] border-[#DFC06A] rounded-tr-2xl pointer-events-none" />

              {/* Text Block inside Top-Right Plum Arc: Divider + "Your academic journey" */}
              <div className="pt-8 sm:pt-9 pl-10 sm:pl-16 pr-8 flex items-start gap-4">
                {/* Vertical gold divider line */}
                <div className="w-[1.5px] h-14 bg-[#DFC06A]/50 shrink-0 mt-1" />

                <div>
                  <div className="font-['Playfair_Display',serif] italic text-2xl sm:text-3xl text-white font-medium leading-tight">
                    Your
                    <span className="block">academic</span>
                    <span className="block">journey</span>
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-normal mt-1 tracking-wide">
                    Results and grade cards.
                  </div>
                </div>
              </div>

              {/* 3D Illustration Area: Stack of books + Mortarboard Graduation Cap with Golden Tassel + Standing Grade Card with Seal */}
              <div className="absolute bottom-0 left-2 sm:left-10 flex items-end select-none pointer-events-none">
                {/* Left: Stack of two books with Graduation Mortarboard resting on top */}
                <div className="relative -mr-6 mb-2 z-10 hidden sm:block">
                  {/* Mortarboard Graduation Cap with Golden Tassel */}
                  <div className="absolute -top-14 left-0 z-30">
                    {/* Cap diamond board */}
                    <div className="w-20 h-20 bg-[#350A38] border border-[#68246E] rotate-45 rounded-sm shadow-xl relative flex items-center justify-center">
                      {/* Golden center button */}
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E5B656] border border-[#FFE898] shadow-sm z-40" />
                      {/* Golden tassel string & fringe */}
                      <div className="absolute -bottom-4 right-1 flex flex-col items-center">
                        <div className="w-0.5 h-7 bg-[#E5B656] rotate-12" />
                        <div className="w-2 h-4 bg-[#E5B656] rounded-b-sm shadow-xs -mt-1" />
                      </div>
                    </div>
                    {/* Skull cap skull below */}
                    <div className="w-12 h-6 bg-[#250428] rounded-b-full mx-auto -mt-3 shadow-md" />
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

                {/* Center / Right: Standing Grade Card Sheet with Golden Seal */}
                <div className="relative z-20">
                  <div className="w-44 sm:w-52 bg-[#FDFBF7] rounded-t-2xl rounded-b-xl shadow-2xl border border-[#E7D6C1] p-4 sm:p-5 pb-6 relative -rotate-1">
                    {/* Header text "Grade Card" */}
                    <div className="text-center pb-2 border-b border-[#E7D6C1]">
                      <div className="font-['Playfair_Display',serif] italic text-sm sm:text-base font-bold text-[#28052B]">
                        Grade Card
                      </div>
                    </div>

                    {/* Table line representations */}
                    <div className="space-y-2 pt-2.5">
                      <div className="grid grid-cols-4 gap-1.5 pb-1 border-b border-[#E7D6C1]/50">
                        <div className="h-1.5 bg-[#BD8E36]/40 rounded-full col-span-2" />
                        <div className="h-1.5 bg-[#BD8E36]/40 rounded-full" />
                        <div className="h-1.5 bg-[#BD8E36]/40 rounded-full" />
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full col-span-2" />
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full" />
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full" />
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full col-span-2" />
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full" />
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full" />
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full col-span-2" />
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full" />
                        <div className="h-1.5 bg-[#EFE7DC] rounded-full" />
                      </div>
                    </div>

                    {/* Gold Circular Seal with ribbon at bottom right */}
                    <div className="absolute -bottom-3 right-4 flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-[#E5B656] border-2 border-[#FFE898] shadow-md flex items-center justify-center">
                        <Award className="w-3.5 h-3.5 text-[#28052B]" />
                      </div>
                      <div className="w-3 h-3 bg-[#BD8E36] clip-ribbon -mt-0.5" />
                    </div>
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
              className="text-emerald-700 hover:text-emerald-900 font-bold text-xs cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          4. "STUDENT RESULT PORTAL" / "Find your grade card" Section (Exact Match)
          ========================================================================= */}
      <section id="find-grade-card-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-4">
        {/* Large Rounded Container matching image */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-2xs p-6 sm:p-8 space-y-5">
          <div className="space-y-1">
            <span className="text-[10.5px] uppercase font-bold tracking-[0.25em] text-[#BD8E36] block">
              STUDENT RESULT PORTAL
            </span>
            <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Find your grade card
            </h3>
          </div>

          {/* Form Inputs Row matching exact fields in image */}
          <form onSubmit={handleFetchResult} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 items-end">
              {/* Field 1: KTU Register No. */}
              <div className="md:col-span-4 space-y-1.5">
                <label className="block text-xs font-bold text-[#28052B]">
                  KTU Register No.
                </label>
                <input
                  type="text"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  placeholder="Enter register number"
                  className="w-full px-4 py-2.5 bg-[#FAF7F2] rounded-full border border-[#E7D6C1] text-xs text-[#28052B] placeholder:text-[#4A384F]/50 focus:outline-none focus:border-[#BD8E36] transition-all font-mono"
                />
              </div>

              {/* Field 2: Semester Select */}
              <div className="md:col-span-3 space-y-1.5">
                <label className="block text-xs font-bold text-[#28052B]">
                  Semester
                </label>
                <div className="relative">
                  <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FAF7F2] rounded-full border border-[#E7D6C1] text-xs text-[#28052B] focus:outline-none focus:border-[#BD8E36] transition-all appearance-none cursor-pointer pr-9"
                  >
                    <option value="">Select semester</option>
                    {semestersList.map((sem) => (
                      <option key={sem} value={sem}>{sem}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#4A384F]/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Field 3: Examination session Select */}
              <div className="md:col-span-3 space-y-1.5">
                <label className="block text-xs font-bold text-[#28052B]">
                  Examination session
                </label>
                <div className="relative">
                  <select
                    value={selectedSession}
                    onChange={(e) => setSelectedSession(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FAF7F2] rounded-full border border-[#E7D6C1] text-xs text-[#28052B] focus:outline-none focus:border-[#BD8E36] transition-all appearance-none cursor-pointer pr-9"
                  >
                    <option value="">Select session</option>
                    {sessionsList.map((ses) => (
                      <option key={ses} value={ses}>{ses}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#4A384F]/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Action Button: View grade card → */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSearching}
                  className="w-full py-2.5 px-4 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
                >
                  <span>{isSearching ? 'Fetching...' : 'View grade card'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Helper Bar matching exact text in image */}
            <div className="pt-3 border-t border-[#E7D6C1]/60 flex flex-wrap items-center gap-2 text-xs text-[#4A384F]">
              <div className="flex items-center gap-1.5 font-bold text-[#28052B]">
                <HelpCircle className="w-4 h-4 text-[#BD8E36]" />
                <button
                  type="button"
                  onClick={() => setShowHelpModal(true)}
                  className="hover:underline cursor-pointer"
                >
                  Need help with your result?
                </button>
              </div>
              <span className="text-[#C59B4E]/60 hidden sm:inline">|</span>
              <span className="text-[11px] sm:text-xs text-[#4A384F]/80">
                Follow the college's current access instructions.
              </span>
            </div>
          </form>
        </div>
      </section>

      {/* =========================================================================
          5. Live Interactive Provisional Grade Card Display (Upon Query)
          ========================================================================= */}
      {gradeCardData && (
        <section id="grade-card-display" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 animate-fade-in">
          <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xl overflow-hidden">
            {/* Header banner */}
            <div className="bg-[#28052B] text-white p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#DFC06A]">
                  Autonomous Examination Passing Board
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif]">
                  Provisional Statement of Grades
                </h3>
                <p className="text-xs text-white/80">
                  {gradeCardData.program}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleDownloadPDF}
                  className="px-5 py-2 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Grade Card</span>
                </button>
                <button
                  onClick={() => setGradeCardData(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Close Grade Card"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Candidate Metadata Strip */}
            <div className="p-6 sm:p-8 bg-[#FAF7F2] space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white rounded-2xl border border-[#E7D6C1] text-xs">
                <div>
                  <span className="text-[#4A384F]/70 block text-[10px] uppercase font-bold">Candidate Name</span>
                  <span className="font-bold text-[#28052B] text-sm">{gradeCardData.studentName}</span>
                </div>
                <div>
                  <span className="text-[#4A384F]/70 block text-[10px] uppercase font-bold">Register Number</span>
                  <span className="font-mono font-bold text-[#BD8E36] text-sm">{gradeCardData.regNo}</span>
                </div>
                <div>
                  <span className="text-[#4A384F]/70 block text-[10px] uppercase font-bold">Semester</span>
                  <span className="font-bold text-[#28052B]">{gradeCardData.semester}</span>
                </div>
                <div>
                  <span className="text-[#4A384F]/70 block text-[10px] uppercase font-bold">Examination Session</span>
                  <span className="font-bold text-[#28052B]">{gradeCardData.session}</span>
                </div>
              </div>

              {/* Course-wise Grades Table */}
              <div className="overflow-x-auto rounded-2xl border border-[#E7D6C1] bg-white">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#28052B] text-white">
                    <tr>
                      <th className="py-2.5 px-3.5 font-bold">Course Code</th>
                      <th className="py-2.5 px-3.5 font-bold">Course Name</th>
                      <th className="py-2.5 px-3.5 font-bold text-center">Credits</th>
                      <th className="py-2.5 px-3.5 font-bold text-center">Grade Awarded</th>
                      <th className="py-2.5 px-3.5 font-bold text-center">Grade Points</th>
                      <th className="py-2.5 px-3.5 font-bold text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7D6C1]/50 text-[#28052B]">
                    {gradeCardData.courses.map((c: CourseGradeRow) => (
                      <tr key={c.code} className="hover:bg-[#FAF7F2] transition-colors">
                        <td className="py-2.5 px-3.5 font-mono font-bold text-[#BD8E36] whitespace-nowrap">
                          {c.code}
                        </td>
                        <td className="py-2.5 px-3.5 font-medium">{c.name}</td>
                        <td className="py-2.5 px-3.5 text-center font-bold">{c.credits}</td>
                        <td className="py-2.5 px-3.5 text-center">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FAF7F2] border border-[#E7D6C1] text-[#28052B]">
                            {c.grade}
                          </span>
                        </td>
                        <td className="py-2.5 px-3.5 text-center font-bold">{c.points.toFixed(1)}</td>
                        <td className="py-2.5 px-3.5 text-center">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {c.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* SGPA & CGPA Summary Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center">
                  <div className="text-[10px] uppercase font-bold text-[#4A384F]/70">Semester Credits</div>
                  <div className="text-xl sm:text-2xl font-black text-[#28052B] mt-0.5 font-mono">
                    {gradeCardData.earnedCredits} / {gradeCardData.totalCredits}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5ECF5] border border-[#ECD9EC] text-center">
                  <div className="text-[10px] uppercase font-bold text-[#28052B]">Semester GPA (SGPA)</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#28052B] mt-0.5 font-['Playfair_Display',serif]">
                    {gradeCardData.sgpa}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#E5B656]/20 border border-[#DFC06A] text-center">
                  <div className="text-[10px] uppercase font-bold text-[#BD8E36]">Cumulative GPA (CGPA)</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#28052B] mt-0.5 font-['Playfair_Display',serif]">
                    {gradeCardData.cgpa}
                  </div>
                </div>
              </div>

              {/* Authentication & Signature footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#E7D6C1]/60 text-xs">
                <div className="flex items-center gap-2 text-emerald-800">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-[11px]">
                    Digitally signed with Autonomous 2048-bit PKI Cryptographic Certificate. Synced to DigiLocker NAD repository.
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-bold font-['Playfair_Display',serif] text-[#28052B]">Dr. Vincent G.</div>
                  <div className="text-[10px] text-[#4A384F]">Controller of Examinations</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          6. Recently Published Result Gazettes List
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-4">
        <div className="flex items-center gap-4">
          <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight shrink-0">
            Recently published result gazettes
          </h3>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        <div className="space-y-3">
          {PUBLISHED_GAZETTES.map((gazette) => (
            <div
              key={gazette.id}
              className="p-5 rounded-2xl bg-white border border-[#E7D6C1] hover:border-[#BD8E36] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group shadow-2xs"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center shrink-0 text-[#28052B] group-hover:text-[#BD8E36] transition-colors shadow-2xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="w-[1px] h-7 bg-[#C59B4E]/40 shrink-0 hidden sm:block" />
                <div className="min-w-0">
                  <h4 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors truncate">
                    {gazette.semester}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-[#4A384F]/70">
                    <span>{gazette.examSession}</span>
                    <span>•</span>
                    <span>Published: {gazette.publishDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#E7D6C1]/50">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    gazette.status === 'Revaluation Active'
                      ? 'bg-amber-50 text-amber-900 border border-amber-200'
                      : 'bg-slate-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  {gazette.status}
                </span>

                <button
                  onClick={() => handleDownloadGazette(gazette.semester)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#BD8E36]" />
                  <span>Download Gazette ({gazette.fileSize})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. DigiLocker & National Academic Depository (NAD) Synchronisation Bento
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: DigiLocker Integration */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-3">
            <div className="flex items-center gap-3 pb-2 border-b border-[#E7D6C1]/60">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
                  DigiLocker &amp; NAD Verified
                </h4>
                <div className="text-[11px] text-[#4A384F]/70">National Academic Depository</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              All autonomous provisional grade cards, degree transcripts, and transfer certificates are synced to DigiLocker with verified 2048-bit digital signature. Use your Aadhaar or ABC ID to fetch records.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-bold text-[#BD8E36]">
                Institution Name: Jyothi Engineering College (Autonomous)
              </span>
            </div>
          </div>

          {/* Card 2: Revaluation & Answer Script Scrutiny */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-3">
            <div className="flex items-center gap-3 pb-2 border-b border-[#E7D6C1]/60">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
                  Revaluation &amp; Scrutiny Window
                </h4>
                <div className="text-[11px] text-[#4A384F]/70">10-Day Window Post Result Declaration</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              Students unsatisfied with their awarded marks can apply for photocopies of evaluated answer scripts (₹300/course) and centralized double revaluation (₹750/course) via the student portal.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('examination-notifications')}
                className="text-xs font-bold text-[#BD8E36] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Check Revaluation Circulars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. Results Assistance & Passing Board Secretariat Bento
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
                <span>Passing Board &amp; Evaluation Secretariat</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
                Discrepancy in Result or Grade Tabulation?
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                If your grade card shows "Withheld", "Absent" despite attendance, or a data mismatch, represent your case immediately to the Office of the Controller of Examinations with your barcoded hall ticket.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-white/90">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#DFC06A]" />
                  <span>Results Helpline: +91 4884 259000 (Ext 204)</span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#DFC06A]" />
                  <span>results@jecc.ac.in</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigate('examination-grievances')}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Grievance Redressal</span>
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
          9. Result Access Help Modal
          ========================================================================= */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E7D6C1] overflow-hidden my-8 animate-fade-in">
            <div className="bg-[#28052B] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#DFC06A]" />
                <h4 className="font-['Playfair_Display',serif] text-base font-bold text-white">
                  Student Portal Access Instructions
                </h4>
              </div>
              <button
                onClick={() => setShowHelpModal(false)}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-3.5 text-xs text-[#4A384F]">
              <div className="space-y-1">
                <span className="font-bold text-[#28052B]">1. KTU Register Number Format:</span>
                <p>Enter your 10-character alphanumeric registration ID (e.g. <code>JEC23CS042</code>).</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#28052B]">2. "Withheld" Status:</span>
                <p>If your result shows withheld, verify with the college fee desk or check if your CIE internal marks were locked late.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#28052B]">3. Official Grade Cards:</span>
                <p>Provisional grade cards generated here are valid for immediate academic verification. Physical grade cards are issued through department offices.</p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF7F2] border-t border-[#E7D6C1] text-right">
              <button
                onClick={() => setShowHelpModal(false)}
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

export default ExaminationResultsPage;
