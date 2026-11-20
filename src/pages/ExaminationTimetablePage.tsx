import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Clock,
  Search,
  Filter,
  Download,
  FileText,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  X,
  ExternalLink,
  ShieldCheck,
  Printer,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { ExaminationSubNav } from '../components/ExaminationSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface TimetablePublication {
  id: string;
  title: string;
  refNo: string;
  semester: string;
  examType: 'End Semester Regular' | 'Supplementary' | 'CIE Series';
  badgeType: 'END SEMESTER REGULAR' | 'SUPPLEMENTARY' | 'CIE SERIES';
  iconType: 'calendar' | 'document';
  publishDate: string;
  dateRange: string;
  fileSize: string;
  sessions: {
    date: string;
    day: string;
    time: string;
    code: string;
    course: string;
    branches: string;
    slot: string;
  }[];
}

const TIMETABLES_CATALOG: TimetablePublication[] = [
  {
    id: 'tt-pub-1',
    title: 'B.Tech End Semester Examinations',
    refNo: 'JEC/COE/TT/2026/BTECH-REG',
    semester: 'S3 B.Tech',
    examType: 'End Semester Regular',
    badgeType: 'END SEMESTER REGULAR',
    iconType: 'calendar',
    publishDate: 'Nov 16, 2026',
    dateRange: 'Dec 15, 2026 – Dec 30, 2026',
    fileSize: '620 KB',
    sessions: [
      {
        date: 'Dec 15, 2026',
        day: 'Tuesday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '23MAT201',
        course: 'Partial Differential Equations & Complex Analysis',
        branches: 'All Branches',
        slot: 'Slot A',
      },
      {
        date: 'Dec 17, 2026',
        day: 'Thursday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '23CST201',
        course: 'Data Structures using C / C++',
        branches: 'CSE, AI & DS',
        slot: 'Slot B',
      },
      {
        date: 'Dec 19, 2026',
        day: 'Saturday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '23ECT201',
        course: 'Network Theory & Analysis',
        branches: 'ECE, EEE',
        slot: 'Slot B',
      },
      {
        date: 'Dec 22, 2026',
        day: 'Tuesday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '23MET201',
        course: 'Mechanics of Solids',
        branches: 'ME, CE, RA',
        slot: 'Slot B',
      },
      {
        date: 'Dec 24, 2026',
        day: 'Thursday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '23CST203',
        course: 'Object Oriented Programming with Java',
        branches: 'CSE, AI & DS',
        slot: 'Slot C',
      },
      {
        date: 'Dec 29, 2026',
        day: 'Tuesday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '23HUT200',
        course: 'Professional Ethics & Sustainable Engineering',
        branches: 'All Branches',
        slot: 'Slot E',
      },
    ],
  },
  {
    id: 'tt-pub-2',
    title: 'Supplementary Examinations',
    refNo: 'JEC/COE/TT/2026/SUPPLY-ALL',
    semester: 'S1 B.Tech',
    examType: 'Supplementary',
    badgeType: 'SUPPLEMENTARY',
    iconType: 'document',
    publishDate: 'Nov 15, 2026',
    dateRange: 'Jan 04, 2027 – Jan 18, 2027',
    fileSize: '480 KB',
    sessions: [
      {
        date: 'Jan 04, 2027',
        day: 'Monday',
        time: '1:30 PM – 4:30 PM (AN)',
        code: '23MAT101',
        course: 'Linear Algebra & Calculus',
        branches: 'All Branches',
        slot: 'Slot A',
      },
      {
        date: 'Jan 06, 2027',
        day: 'Wednesday',
        time: '1:30 PM – 4:30 PM (AN)',
        code: '23PHT100',
        course: 'Engineering Physics',
        branches: 'CSE, ECE, EEE',
        slot: 'Slot B',
      },
      {
        date: 'Jan 08, 2027',
        day: 'Friday',
        time: '1:30 PM – 4:30 PM (AN)',
        code: '23CYT100',
        course: 'Engineering Chemistry',
        branches: 'ME, CE, AD',
        slot: 'Slot B',
      },
      {
        date: 'Jan 11, 2027',
        day: 'Monday',
        time: '1:30 PM – 4:30 PM (AN)',
        code: '23EST100',
        course: 'Engineering Mechanics',
        branches: 'All Branches',
        slot: 'Slot C',
      },
    ],
  },
  {
    id: 'tt-pub-3',
    title: 'M.Tech End Semester Examinations',
    refNo: 'JEC/COE/TT/2026/MTECH-REG',
    semester: 'M.Tech S1',
    examType: 'End Semester Regular',
    badgeType: 'END SEMESTER REGULAR',
    iconType: 'calendar',
    publishDate: 'Nov 14, 2026',
    dateRange: 'Dec 18, 2026 – Dec 30, 2026',
    fileSize: '410 KB',
    sessions: [
      {
        date: 'Dec 18, 2026',
        day: 'Friday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '24MCS101',
        course: 'Mathematical Foundations of Computing Systems',
        branches: 'M.Tech Computer Science',
        slot: 'Slot A',
      },
      {
        date: 'Dec 21, 2026',
        day: 'Monday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '24MEC101',
        course: 'Advanced Embedded System Design & RTOS',
        branches: 'M.Tech Embedded Systems',
        slot: 'Slot A',
      },
      {
        date: 'Dec 23, 2026',
        day: 'Wednesday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '24MCS102',
        course: 'Advanced Algorithms & Complexity Analysis',
        branches: 'M.Tech Computer Science',
        slot: 'Slot B',
      },
      {
        date: 'Dec 28, 2026',
        day: 'Monday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '24MPE101',
        course: 'Solid State Power Converters & Drives',
        branches: 'M.Tech Power Electronics',
        slot: 'Slot A',
      },
    ],
  },
  {
    id: 'tt-pub-4',
    title: 'Continuous Internal Assessment (CIE-2 / Series Exam II)',
    refNo: 'JEC/COE/TT/2026/CIE-SERIES-2',
    semester: 'S5 B.Tech',
    examType: 'CIE Series',
    badgeType: 'CIE SERIES',
    iconType: 'document',
    publishDate: 'Nov 10, 2026',
    dateRange: 'Dec 08, 2026 – Dec 12, 2026',
    fileSize: '315 KB',
    sessions: [
      {
        date: 'Dec 08, 2026',
        day: 'Tuesday',
        time: '10:00 AM – 12:00 PM',
        code: '23CST301',
        course: 'Formal Languages & Automata Theory',
        branches: 'CSE, AI & DS',
        slot: 'CIE 1',
      },
      {
        date: 'Dec 09, 2026',
        day: 'Wednesday',
        time: '10:00 AM – 12:00 PM',
        code: '23CST303',
        course: 'Computer Networks',
        branches: 'CSE, AI & DS',
        slot: 'CIE 2',
      },
      {
        date: 'Dec 10, 2026',
        day: 'Thursday',
        time: '10:00 AM – 12:00 PM',
        code: '23ECT301',
        course: 'Digital Signal Processing',
        branches: 'ECE',
        slot: 'CIE 1',
      },
      {
        date: 'Dec 11, 2026',
        day: 'Friday',
        time: '10:00 AM – 12:00 PM',
        code: '23MET301',
        course: 'Mechanics of Machinery',
        branches: 'ME',
        slot: 'CIE 1',
      },
    ],
  },
  {
    id: 'tt-pub-5',
    title: 'Final Year B.Tech (S7) End Semester Schedule',
    refNo: 'JEC/COE/TT/2026/BTECH-S7',
    semester: 'S7 B.Tech',
    examType: 'End Semester Regular',
    badgeType: 'END SEMESTER REGULAR',
    iconType: 'calendar',
    publishDate: 'Nov 08, 2026',
    dateRange: 'Dec 16, 2026 – Dec 28, 2026',
    fileSize: '540 KB',
    sessions: [
      {
        date: 'Dec 16, 2026',
        day: 'Wednesday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '23CST401',
        course: 'Artificial Intelligence & Deep Neural Networks',
        branches: 'CSE, AI & DS',
        slot: 'Slot A',
      },
      {
        date: 'Dec 19, 2026',
        day: 'Saturday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '23CST403',
        course: 'Cloud Computing & Distributed Systems',
        branches: 'CSE',
        slot: 'Slot B',
      },
      {
        date: 'Dec 22, 2026',
        day: 'Tuesday',
        time: '9:30 AM – 12:30 PM (FN)',
        code: '23ECO401',
        course: 'Open Elective - Embedded IoT Systems',
        branches: 'All Branches',
        slot: 'Slot D',
      },
    ],
  },
];

export const ExaminationTimetablePage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('All');
  const [selectedExamType, setSelectedExamType] = useState('All');
  const [activeModalTimetable, setActiveModalTimetable] = useState<TimetablePublication | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const semesters = ['All', 'S1 B.Tech', 'S3 B.Tech', 'S5 B.Tech', 'S7 B.Tech', 'M.Tech S1'];
  const examTypes = ['All', 'End Semester Regular', 'Supplementary', 'CIE Series'];

  const filteredTimetables = useMemo(() => {
    return TIMETABLES_CATALOG.filter((item) => {
      // Semester filter
      if (selectedSemester !== 'All' && item.semester !== selectedSemester) {
        return false;
      }
      // Exam Type filter
      if (selectedExamType !== 'All' && item.examType !== selectedExamType) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesRef = item.refNo.toLowerCase().includes(q);
        const matchesSem = item.semester.toLowerCase().includes(q);
        const matchesCourses = item.sessions.some(
          (s) =>
            s.code.toLowerCase().includes(q) ||
            s.course.toLowerCase().includes(q) ||
            s.branches.toLowerCase().includes(q)
        );
        if (!matchesTitle && !matchesRef && !matchesSem && !matchesCourses) return false;
      }
      return true;
    });
  }, [selectedSemester, selectedExamType, searchQuery]);

  const handleDownload = (item: TimetablePublication) => {
    setDownloadToast(`Official Timetable "${item.title}" (${item.refNo}) downloaded successfully.`);
    setTimeout(() => setDownloadToast(null), 3500);
  };

  const handleScrollToBrowse = () => {
    const el = document.getElementById('browse-schedules-section');
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
      <ExaminationSubNav activeRoute="examination-timetable" onNavigate={onNavigate} />

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
                ACADEMIC EXAMINATION SCHEDULES
              </span>
              <div className="w-8 sm:w-10 h-[1px] bg-[#C59B4E]" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.12]">
              Examination Timetables
              <span className="block italic text-[#BD8E36] font-normal mt-1">
                Session Schedules
              </span>
            </h2>

            {/* Subtitle text matching exact wording in image */}
            <p className="text-sm sm:text-base text-[#4A384F] font-normal leading-relaxed max-w-lg">
              Find end-semester, supplementary and internal examination schedules in one place.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={handleScrollToBrowse}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Browse timetables</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('examination-guidelines')}
                className="px-6 py-2.5 rounded-full bg-transparent hover:bg-black/5 text-[#28052B] font-semibold text-xs sm:text-sm border border-[#28052B] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Exam guidelines</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sweeping Curved Deep Plum Arc Graphic with 3D Calendar, Analog Clock, Stacked Books & "Plan your examination" */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[340px] flex items-center justify-end overflow-hidden rounded-3xl">
            {/* Deep Royal Plum Curved Arc Background */}
            <div className="absolute inset-y-0 right-0 w-full sm:w-[94%] bg-gradient-to-br from-[#380E3B] via-[#2D0A31] to-[#1E0523] rounded-tl-[130px] sm:rounded-tl-[170px] rounded-bl-[40px] sm:rounded-bl-[60px] shadow-2xl overflow-hidden">
              {/* L-shaped gold accent curve at top right corner */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 border-t-[2px] border-r-[2px] border-[#DFC06A] rounded-tr-2xl pointer-events-none" />

              {/* Text Block inside Top-Right Plum Arc: Divider + "Plan your examination" + Subtitle */}
              <div className="pt-8 sm:pt-9 pl-10 sm:pl-16 pr-8 flex items-start gap-4">
                {/* Vertical gold divider line */}
                <div className="w-[1.5px] h-14 bg-[#DFC06A]/50 shrink-0 mt-1" />

                <div>
                  <div className="font-['Playfair_Display',serif] italic text-2xl sm:text-3xl text-white font-medium tracking-wide">
                    Plan your examination
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-normal mt-1 tracking-wide">
                    Schedules by programme and semester
                  </div>
                </div>
              </div>

              {/* 3D Illustration Area: Stacked Books + Standing Desk Calendar + Analog Clock */}
              <div className="absolute bottom-0 left-4 sm:left-12 flex items-end select-none pointer-events-none">
                {/* Left: Stack of two books */}
                <div className="relative -mr-4 mb-2 z-10 hidden sm:block">
                  {/* Top book */}
                  <div className="w-24 h-7 bg-[#4E1A52] rounded-r-md rounded-l-xs shadow-md border-y border-r border-[#692A6E] relative flex items-center px-2">
                    <div className="w-full h-[1px] bg-[#E8DCB8]/40" />
                  </div>
                  {/* Bottom book */}
                  <div className="w-28 h-8 bg-[#330A36] rounded-r-md rounded-l-xs shadow-lg border-y border-r border-[#511857] -mt-1 flex items-center px-2">
                    <div className="w-full h-[1px] bg-[#E8DCB8]/30" />
                  </div>
                </div>

                {/* Center: Standing Desk Calendar */}
                <div className="relative z-20">
                  {/* Sparkle burst rays above calendar */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#DFC06A]">
                    <div className="w-1 h-3 -rotate-45 bg-[#DFC06A] rounded-full" />
                    <div className="w-1 h-4 bg-[#DFC06A] rounded-full -mt-1" />
                    <div className="w-1 h-3 rotate-45 bg-[#DFC06A] rounded-full" />
                  </div>

                  {/* Calendar Top Golden Spiral Rings */}
                  <div className="flex justify-center gap-4 sm:gap-6 -mb-2 relative z-30 px-6">
                    <div className="w-3.5 h-6 rounded-full border-2 border-[#DFC06A] bg-[#BD8E36] shadow-sm" />
                    <div className="w-3.5 h-6 rounded-full border-2 border-[#DFC06A] bg-[#BD8E36] shadow-sm" />
                    <div className="w-3.5 h-6 rounded-full border-2 border-[#DFC06A] bg-[#BD8E36] shadow-sm" />
                    <div className="w-3.5 h-6 rounded-full border-2 border-[#DFC06A] bg-[#BD8E36] shadow-sm" />
                  </div>

                  {/* Standing Calendar Card (Beige / Warm Cream) */}
                  <div className="w-48 sm:w-56 bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#E7D6C1] p-3 sm:p-4 pt-5">
                    {/* Calendar grid representation */}
                    <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />

                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                      {/* Highlighted Golden Date Square */}
                      <div className="h-4 sm:h-5 rounded-md bg-[#E5B656] shadow-sm ring-2 ring-[#DFC06A]/40" />
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />

                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                      <div className="h-4 sm:h-5 rounded-md bg-[#EFE7DC]" />
                    </div>
                  </div>
                </div>

                {/* Right: Round Analog Desk Clock */}
                <div className="relative -ml-6 mb-1 z-30">
                  <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#FAF7F2] border-4 border-[#DFC06A] shadow-2xl flex items-center justify-center relative">
                    {/* Dial hour tick markers */}
                    <div className="absolute top-1 w-1 h-1.5 bg-[#28052B] rounded-full" />
                    <div className="absolute bottom-1 w-1 h-1.5 bg-[#28052B] rounded-full" />
                    <div className="absolute left-1 w-1.5 h-1 bg-[#28052B] rounded-full" />
                    <div className="absolute right-1 w-1.5 h-1 bg-[#28052B] rounded-full" />

                    {/* Clock hands pointing to ~10:10 */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Center pin */}
                      <div className="w-2 h-2 rounded-full bg-[#BD8E36] z-10" />
                      {/* Hour hand */}
                      <div className="absolute w-1 h-5 bg-[#28052B] rounded-full -translate-y-2.5 -rotate-45 origin-bottom" />
                      {/* Minute hand */}
                      <div className="absolute w-0.5 h-7 bg-[#28052B] rounded-full -translate-y-3.5 rotate-35 origin-bottom" />
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
          4. "Browse examination schedules" Section (Exact Replica of Reference Image)
          ========================================================================= */}
      <section id="browse-schedules-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-5">
        {/* Section Header: Title + Hairline extending right */}
        <div className="flex items-center gap-4">
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight shrink-0">
            Browse examination schedules
          </h2>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        {/* Large Rounded Container matching image */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-2xs p-5 sm:p-7 space-y-5">
          {/* Top Control Bar: Search on Left + Divider + Semester on Right */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Pill Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-[#4A384F]/50 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search course, branch or code"
                className="w-full pl-11 pr-9 py-2.5 bg-[#FAF7F2] rounded-full border border-[#E7D6C1] text-xs text-[#28052B] placeholder:text-[#4A384F]/50 focus:outline-none focus:border-[#BD8E36] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Vertical Hairline Divider */}
            <div className="w-[1px] h-6 bg-[#C59B4E]/40 shrink-0 hidden lg:block" />

            {/* Semester Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-[#28052B] mr-1">Semester:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {semesters.map((sem) => {
                  const isActive = selectedSemester === sem;
                  return (
                    <button
                      key={sem}
                      onClick={() => setSelectedSemester(sem)}
                      className={`px-4 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#28052B] text-white font-bold shadow-xs'
                          : 'bg-[#FAF7F2] text-[#4A384F] hover:bg-slate-100 border border-[#E7D6C1]/70 font-medium'
                      }`}
                    >
                      {sem}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Exam Type Filter Row */}
          <div className="pt-2 border-t border-[#E7D6C1]/60 flex flex-wrap items-center gap-2 sm:gap-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#28052B] mr-2">
              <Filter className="w-3.5 h-3.5 text-[#BD8E36]" />
              <span>Exam Type:</span>
            </div>

            {examTypes.map((type) => {
              const isActive = selectedExamType === type;
              return (
                <button
                  key={type}
                  onClick={() => setSelectedExamType(type)}
                  className={`px-4 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E5B656] text-[#28052B] font-bold shadow-2xs'
                      : 'bg-[#FAF7F2] text-[#4A384F] hover:bg-amber-50/60 border border-[#E7D6C1]/70'
                  }`}
                >
                  {type}
                </button>
              );
            })}

            {(selectedSemester !== 'All' || selectedExamType !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedSemester('All');
                  setSelectedExamType('All');
                  setSearchQuery('');
                }}
                className="ml-auto text-xs font-semibold text-rose-700 hover:text-rose-900 underline flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Timetable List Rows matching exact image cards */}
          <div className="space-y-3 pt-2">
            {filteredTimetables.map((item) => (
              <div
                key={item.id}
                className="group p-4 sm:p-5 rounded-2xl bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] border border-[#E7D6C1] hover:border-[#BD8E36] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left Side: Icon in Rounded Square + Thin Vertical Bar + Title */}
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Rounded square icon */}
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E7D6C1] flex items-center justify-center shrink-0 text-[#28052B] group-hover:text-[#BD8E36] group-hover:border-[#BD8E36] transition-colors shadow-2xs">
                    {item.iconType === 'calendar' ? (
                      <Calendar className="w-5 h-5" />
                    ) : (
                      <FileText className="w-5 h-5" />
                    )}
                  </div>

                  {/* Vertical hairline separator */}
                  <div className="w-[1px] h-7 bg-[#C59B4E]/50 shrink-0 hidden sm:block" />

                  {/* Title & info */}
                  <div className="min-w-0 space-y-0.5">
                    <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-[#4A384F]/70">
                      <span className="font-mono text-[#BD8E36] font-semibold">{item.semester}</span>
                      <span>•</span>
                      <span>{item.dateRange}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Exam Type Badge in Soft Blush Pill + View PDF Link */}
                <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#E7D6C1]/50">
                  {/* Category Pill in Soft Lavender / Blush */}
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#F5ECF5] text-[#28052B] border border-[#ECD9EC]">
                    {item.badgeType}
                  </span>

                  {/* Vertical hairline divider */}
                  <div className="w-[1px] h-6 bg-[#C59B4E]/40 shrink-0 hidden md:block" />

                  {/* View PDF action button */}
                  <button
                    onClick={() => setActiveModalTimetable(item)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#28052B] group-hover:text-[#BD8E36] hover:underline cursor-pointer transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-[#BD8E36]" />
                    <span>View PDF</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}

            {filteredTimetables.length === 0 && (
              <div className="text-center py-14 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1] space-y-2">
                <Calendar className="w-8 h-8 text-[#4A384F]/40 mx-auto" />
                <h4 className="text-sm font-bold text-[#28052B]">No timetables found matching your search</h4>
                <p className="text-xs text-[#4A384F]">Try adjusting your search query, semester or exam type filter.</p>
                <button
                  onClick={() => {
                    setSelectedSemester('All');
                    setSelectedExamType('All');
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
          5. Official Examination Shift & Session Timing System
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Forenoon Session Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-3 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-50 text-amber-800 border border-amber-200">
                Morning (FN)
              </span>
              <Clock className="w-4 h-4 text-[#BD8E36]" />
            </div>
            <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Forenoon Session
            </h4>
            <div className="text-2xl font-black text-[#28052B] tracking-tight">9:30 AM – 12:30 PM</div>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              Standard 3-hour theory assessment. Candidates must report at hall entrance by 9:15 AM sharp.
            </p>
          </div>

          {/* Afternoon Session Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-3 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-purple-50 text-purple-800 border border-purple-200">
                Afternoon (AN)
              </span>
              <Clock className="w-4 h-4 text-[#BD8E36]" />
            </div>
            <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Afternoon Session
            </h4>
            <div className="text-2xl font-black text-[#28052B] tracking-tight">1:30 PM – 4:30 PM</div>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              Supplementary &amp; elective course assessment. Hall admission gates close at 1:20 PM.
            </p>
          </div>

          {/* CIE Series Assessment Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-3 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200">
                Internal CIE
              </span>
              <Calendar className="w-4 h-4 text-emerald-600" />
            </div>
            <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Series Exam Slot
            </h4>
            <div className="text-2xl font-black text-[#28052B] tracking-tight">10:00 AM – 12:00 PM</div>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              Centralized continuous internal assessment (CIE-1 &amp; CIE-2) in departmental exam halls.
            </p>
          </div>

          {/* Hall Ticket & Barcode Admit Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-3 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-50 text-blue-800 border border-blue-200">
                Mandatory
              </span>
              <ShieldCheck className="w-4 h-4 text-blue-600" />
            </div>
            <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Hall Ticket Verification
            </h4>
            <div className="text-2xl font-black text-[#28052B] tracking-tight">Barcoded Pass</div>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              Physical printed hall ticket with College ID card is mandatory for entry into all exam blocks.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. Examination Timetable Support & Clash Representation Bento
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
                <span>Autonomous Timetable Grievance Desk</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
                Identified an Examination Slot Clash or Anomaly?
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                Students appearing for supplementary or regular examinations simultaneously with overlapping course schedules must submit a clash representation through their respective Head of Department within 5 days of draft timetable publication.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-white/90">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#DFC06A]" />
                  <span>Timetable Desk: +91 4884 259000 (Ext 206)</span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#DFC06A]" />
                  <span>timetable@jecc.ac.in</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigate('examination-guidelines')}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Read Exam Guidelines</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('examination-notifications')}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Notifications</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. Interactive PDF Timetable Preview Modal (When clicking "View PDF")
          ========================================================================= */}
      {activeModalTimetable && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#E7D6C1] overflow-hidden my-8 animate-fade-in">
            {/* Modal Header */}
            <div className="bg-[#28052B] text-white p-5 sm:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-[#DFC06A]/40 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#DFC06A]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#DFC06A]">
                    Official Examination Timetable
                  </div>
                  <div className="text-sm sm:text-base font-['Playfair_Display',serif] font-bold text-white">
                    {activeModalTimetable.title} • {activeModalTimetable.refNo}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveModalTimetable(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Timetable Body (Parchment Styled Official Document) */}
            <div className="p-6 sm:p-8 bg-[#FAF7F2] space-y-5 max-h-[65vh] overflow-y-auto">
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

              {/* Meta strip */}
              <div className="flex flex-wrap justify-between items-center text-xs text-[#28052B] font-mono border-b border-[#E7D6C1]/60 pb-3 gap-2">
                <div>
                  <span className="font-bold">Programme:</span> {activeModalTimetable.semester}
                </div>
                <div>
                  <span className="font-bold">Assessment Window:</span> {activeModalTimetable.dateRange}
                </div>
                <div>
                  <span className="font-bold">Published:</span> {activeModalTimetable.publishDate}
                </div>
              </div>

              {/* Timetable Schedule Matrix Table */}
              <div className="overflow-x-auto rounded-2xl border border-[#E7D6C1] bg-white">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#28052B] text-white">
                    <tr>
                      <th className="py-2.5 px-3.5 font-bold">Date &amp; Day</th>
                      <th className="py-2.5 px-3.5 font-bold">Session &amp; Time</th>
                      <th className="py-2.5 px-3.5 font-bold">Course Code</th>
                      <th className="py-2.5 px-3.5 font-bold">Course Title</th>
                      <th className="py-2.5 px-3.5 font-bold">Slot</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7D6C1]/50 text-[#28052B]">
                    {activeModalTimetable.sessions.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#FAF7F2] transition-colors">
                        <td className="py-3 px-3.5 font-semibold whitespace-nowrap">
                          <div>{row.date}</div>
                          <div className="text-[10px] text-[#4A384F]/70 font-normal">{row.day}</div>
                        </td>
                        <td className="py-3 px-3.5 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] border border-[#E7D6C1] text-[#28052B]">
                            {row.time}
                          </span>
                        </td>
                        <td className="py-3 px-3.5 font-mono font-bold text-[#BD8E36] whitespace-nowrap">
                          {row.code}
                        </td>
                        <td className="py-3 px-3.5">
                          <div className="font-medium text-[#28052B]">{row.course}</div>
                          <div className="text-[10px] text-[#4A384F]/70">{row.branches}</div>
                        </td>
                        <td className="py-3 px-3.5 font-semibold text-[#4A384F] whitespace-nowrap">
                          {row.slot}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Regulatory Directives Notice */}
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-1.5 text-xs text-amber-900">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Important Examination Instructions:</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-[11px] text-[#4A384F]">
                  <li>Students must occupy designated seats 15 minutes prior to the commencement of the exam.</li>
                  <li>Programmable calculators, electronic smartwatches, and study notes are strictly forbidden inside the hall.</li>
                  <li>No candidate will be permitted to enter the examination hall after 30 minutes of commencement.</li>
                </ul>
              </div>

              {/* Signature Block */}
              <div className="pt-2 flex justify-between items-end text-xs text-[#28052B]">
                <div className="text-[11px] text-[#4A384F]/70">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 inline mr-1" />
                  Statutory Ratification by Autonomous Passing Board
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
                File size: <strong>{activeModalTimetable.fileSize}</strong> (PDF Timetable Document)
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownload(activeModalTimetable)}
                  className="px-5 py-2 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Timetable PDF</span>
                </button>

                <button
                  onClick={() => setActiveModalTimetable(null)}
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

export default ExaminationTimetablePage;
