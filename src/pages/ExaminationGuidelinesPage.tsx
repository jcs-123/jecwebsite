import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  Award,
  BookOpen,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Phone,
  Mail,
  HelpCircle,
  Calendar,
  GraduationCap,
  Layers,
  Smartphone,
  Check,
  X,
  ExternalLink,
  Download,
  Building2,
  BarChart3,
  UserCheck,
  Ban,
  FileCheck,
} from 'lucide-react';
import { ExaminationSubNav } from '../components/ExaminationSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

type GuidelineCategory = 'before' | 'inside' | 'assessment' | 'integrity';

const GRADING_SCALE = [
  { grade: 'O', label: 'Outstanding', points: '10.0', marks: '90% and above', desc: 'Exceptional mastery of course outcomes and higher-order Bloom levels' },
  { grade: 'A+', label: 'Excellent', points: '9.0', marks: '85% to < 90%', desc: 'Thorough analytical understanding and rigorous problem-solving' },
  { grade: 'A', label: 'Very Good', points: '8.5', marks: '80% to < 85%', desc: 'Substantial competence and high proficiency across all course modules' },
  { grade: 'B+', label: 'Good', points: '8.0', marks: '70% to < 80%', desc: 'Above average understanding with sound conceptual fundamentals' },
  { grade: 'B', label: 'Above Average', points: '7.0', marks: '60% to < 70%', desc: 'Satisfactory attainment of core course outcomes and concepts' },
  { grade: 'C', label: 'Average', points: '6.0', marks: '50% to < 60%', desc: 'Marginal performance meeting baseline syllabus requirements' },
  { grade: 'P', label: 'Pass', points: '5.0', marks: '40% to < 50%', desc: 'Minimum performance required to earn prescribed credits' },
  { grade: 'F', label: 'Fail', points: '0.0', marks: 'Below 40%', desc: 'Failed to attain course outcome threshold; candidate must re-appear' },
];

const GUIDELINES_CONTENT = {
  before: {
    title: 'Before the Examination: Eligibility & Hall Ticket',
    intro: 'Essential pre-examination requirements, attendance prerequisites, and admit card download protocols.',
    points: [
      {
        num: '01',
        title: '75% Mandatory Attendance Threshold',
        desc: 'Candidates must maintain a minimum of 75% attendance in each enrolled theory and practical course. Condonation up to 10% is granted strictly on authenticated medical grounds approved by the Principal.',
      },
      {
        num: '02',
        title: 'Continuous Internal Evaluation (CIE) Cutoff',
        desc: 'A minimum score of 40% in internal continuous assessments (Series exams, assignments, quizzes, and laboratory work) is mandatory to be eligible for the End Semester Examination.',
      },
      {
        num: '03',
        title: 'Barcoded Hall Ticket Generation',
        desc: 'Eligible candidates must download the official barcoded hall ticket from the Autonomous Student Portal. Lamination of hall tickets is strictly prohibited to permit official invigilator verification stamping.',
      },
      {
        num: '04',
        title: 'Disability & Scribe Accommodations',
        desc: 'Candidates requiring extra time or an approved scribe must submit medical certificates to the Office of CoE at least 15 days prior to the commencement of the examination window.',
      },
    ],
  },
  inside: {
    title: 'Inside the Examination Hall: Rules & Seating Protocol',
    intro: 'Mandatory decorum, timing deadlines, answer booklet handling, and invigilation protocols.',
    points: [
      {
        num: '01',
        title: 'Punctuality & Strict Entry Cutoff',
        desc: 'Candidates must occupy designated seats 15 minutes before the session starts. Under no circumstances will a student be admitted after 30 minutes from the commencement of the examination.',
      },
      {
        num: '02',
        title: 'Identity Verification & RFID Student Card',
        desc: 'The physical printed hall ticket and valid college photo identity card must be displayed prominently on the upper corner of the desk throughout the session.',
      },
      {
        num: '03',
        title: 'Barcoded Answer Script Integrity',
        desc: 'Verify that the 2D barcode and serialized candidate slip on the 32-page answer book are intact. Do not tear, detach, or write identity markers or religious symbols anywhere in the answer script body.',
      },
      {
        num: '04',
        title: 'Hall Exit Restrictions',
        desc: 'No candidate is permitted to leave the hall during the first 60 minutes or during the final 15 minutes of the examination session. Answer books must be submitted directly to invigilators.',
      },
    ],
  },
  assessment: {
    title: 'Assessment & Grading: 10-Point Evaluation Framework',
    intro: 'How courses are graded, passing thresholds, SGPA/CGPA computation, and revaluation rules.',
    points: [
      {
        num: '01',
        title: 'End Semester Exam (ESE) Passing Threshold',
        desc: 'A student must score a minimum of 40% marks in the End Semester Examination (typically 40 out of 100) and an aggregate of at least 50% combining CIE and ESE to secure a credit pass.',
      },
      {
        num: '02',
        title: 'Autonomous 10-Point Grading Scale',
        desc: 'Academic evaluation adopts the internationally recognized Letter Grade scale ranging from "O" (Outstanding, 10 grade points) to "F" (Fail, 0 grade points).',
      },
      {
        num: '03',
        title: 'Semester Grade Point Average (SGPA)',
        desc: 'SGPA = Σ(Credits × Grade Points) / Σ(Registered Credits) in a given semester. CGPA represents the cumulative weighted average across all completed semesters.',
      },
      {
        num: '04',
        title: 'Answer Script Scrutiny & Revaluation',
        desc: 'Candidates can apply for digital photocopy scrutiny and centralized double revaluation within 10 days of provisional result publication. Full fee refund if grade improves by two levels.',
      },
    ],
  },
  integrity: {
    title: 'Academic Integrity: Code of Conduct & Compliance',
    intro: 'Zero-tolerance policy on malpractices, prohibited materials, and statutory committee penalties.',
    points: [
      {
        num: '01',
        title: 'Absolute Ban on Digital & Electronic Devices',
        desc: 'Mobile phones, smartwatches, Bluetooth audio buds, digital storage gadgets, and programmable devices are strictly banned inside examination halls. Possession incurs immediate confiscation.',
      },
      {
        num: '02',
        title: 'Permitted Scientific Calculators',
        desc: 'Only approved non-programmable models (Casio fx-82MS, fx-991MS, fx-991EX without alphanumeric programming storage) are allowed. Graphic calculators are prohibited.',
      },
      {
        num: '03',
        title: 'Malpractice Reporting & Evidence Preservation',
        desc: 'Any attempt to copy, assist others, exchange materials, or possess chits will be booked under the Examination Malpractice Code. Written statements are recorded on the spot.',
      },
      {
        num: '04',
        title: 'Statutory Penalties by EGRC Tribunal',
        desc: 'Penalties range from cancellation of the specific course examination, debarment from all examinations of the current session, to suspension for up to two academic semesters.',
      },
    ],
  },
};

const FAQS = [
  {
    q: 'What is the minimum passing criteria for an autonomous theory course?',
    a: 'A student must score a minimum of 40% marks in the End Semester Examination (ESE) and an overall combined aggregate of at least 50% (combining Continuous Internal Evaluation and ESE) to earn course credits.',
  },
  {
    q: 'Can I carry my programmable scientific calculator into the hall?',
    a: 'No. Only non-programmable scientific calculators (such as Casio fx-82MS, fx-991MS, fx-991EX without user-defined formula storage) are permitted. Graphic calculators or programmable models are strictly barred.',
  },
  {
    q: 'What should I do if I misplace or damage my hall ticket?',
    a: 'Report immediately to the Office of CoE (Room 208) with your original College ID card and one passport-size photograph. An emergency duplicate barcoded hall ticket will be issued.',
  },
  {
    q: 'Is there any negative marking in autonomous end-semester examinations?',
    a: 'No, there is no negative marking in the standard autonomous End Semester descriptive examinations.',
  },
];

export const ExaminationGuidelinesPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [activeTab, setActiveTab] = useState<GuidelineCategory>('before');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleDownloadHandbook = () => {
    setDownloadToast('Autonomous Examination Code of Conduct & Examinee Manual (PDF) downloaded successfully.');
    setTimeout(() => setDownloadToast(null), 3500);
  };

  const handleScrollToGuidelines = () => {
    const el = document.getElementById('explore-guidelines-section');
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
      <ExaminationSubNav activeRoute="examination-guidelines" onNavigate={onNavigate} />

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
                ACADEMIC STANDARDS &amp; CODE OF CONDUCT
              </span>
              <div className="w-8 sm:w-10 h-[1px] bg-[#C59B4E]" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.12]">
              General Examination Guidelines
              <span className="block italic text-[#BD8E36] font-normal mt-1">
                Examinee Regulations
              </span>
            </h2>

            {/* Subtitle text matching exact wording in image */}
            <p className="text-sm sm:text-base text-[#4A384F] font-normal leading-relaxed max-w-lg">
              Find essential information on examination eligibility, hall conduct and assessment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={handleScrollToGuidelines}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Read guidelines</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('examination-timetable')}
                className="px-6 py-2.5 rounded-full bg-transparent hover:bg-black/5 text-[#28052B] font-semibold text-xs sm:text-sm border border-[#28052B] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>View timetable</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sweeping Curved Deep Plum Arc Graphic with 3D Open Book, Golden Shield, Stacked Books & "Your examination guide" */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[340px] flex items-center justify-end overflow-hidden rounded-3xl">
            {/* Deep Royal Plum Curved Arc Background */}
            <div className="absolute inset-y-0 right-0 w-full sm:w-[94%] bg-gradient-to-br from-[#380E3B] via-[#2D0A31] to-[#1E0523] rounded-tl-[130px] sm:rounded-tl-[170px] rounded-bl-[40px] sm:rounded-bl-[60px] shadow-2xl overflow-hidden">
              {/* L-shaped gold accent curve at top right corner */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 border-t-[2px] border-r-[2px] border-[#DFC06A] rounded-tr-2xl pointer-events-none" />

              {/* Text Block inside Top-Right Plum Arc: Divider + "Your examination guide" */}
              <div className="pt-8 sm:pt-9 pl-10 sm:pl-16 pr-8 flex items-start gap-4">
                {/* Vertical gold divider line */}
                <div className="w-[1.5px] h-14 bg-[#DFC06A]/50 shrink-0 mt-1" />

                <div>
                  <div className="font-['Playfair_Display',serif] italic text-2xl sm:text-3xl text-white font-medium leading-tight">
                    Your
                    <span className="block">examination</span>
                    <span className="block">guide</span>
                  </div>
                </div>
              </div>

              {/* 3D Illustration Area: Stack of books + Standing document + Open Book with checklist & Golden Shield */}
              <div className="absolute bottom-0 left-2 sm:left-10 flex items-end select-none pointer-events-none">
                {/* Left: Stack of two books and standing document behind */}
                <div className="relative -mr-6 mb-2 z-10 hidden sm:block">
                  {/* Standing sheet behind books */}
                  <div className="w-16 h-20 bg-white/90 rounded-t-lg shadow-md border border-[#E7D6C1] absolute -top-8 left-3 p-1.5 space-y-1 rotate-3 opacity-90">
                    <div className="h-1 bg-[#BD8E36]/50 rounded-full w-full" />
                    <div className="h-1 bg-[#BD8E36]/30 rounded-full w-4/5" />
                    <div className="h-1 bg-[#BD8E36]/30 rounded-full w-3/4" />
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

                {/* Center / Right: Open Hardcover Book with Ribbon & Floating Golden Shield */}
                <div className="relative z-20">
                  {/* Floating Golden Shield with Checkmark & Sparkles */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    {/* Sparkle burst rays */}
                    <div className="flex items-center gap-1.5 text-[#DFC06A] -mb-1">
                      <div className="w-1 h-3 -rotate-45 bg-[#DFC06A] rounded-full" />
                      <div className="w-1 h-3.5 bg-[#DFC06A] rounded-full -mt-0.5" />
                      <div className="w-1 h-3 rotate-45 bg-[#DFC06A] rounded-full" />
                    </div>

                    {/* Shield */}
                    <div className="w-12 h-14 rounded-b-2xl rounded-t-md bg-gradient-to-b from-[#E5B656] to-[#BD8E36] border-2 border-[#FFE898] shadow-xl flex items-center justify-center text-[#28052B]">
                      <Check className="w-6 h-6 stroke-[3] text-[#28052B]" />
                    </div>
                  </div>

                  {/* Open Book Wings (Deep Plum Cover + Cream Pages) */}
                  <div className="relative pt-6">
                    {/* Plum outer cover binding edges */}
                    <div className="w-56 sm:w-64 bg-[#3E1043] rounded-b-xl rounded-t-sm p-1.5 shadow-2xl">
                      {/* Cream open pages */}
                      <div className="bg-[#FDFBF7] rounded-lg p-3 sm:p-4 grid grid-cols-2 gap-3 border border-[#E7D6C1] relative">
                        {/* Center spine shadow divider */}
                        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-3 bg-gradient-to-r from-black/10 via-black/20 to-black/10" />

                        {/* Left Page (Guidelines lines) */}
                        <div className="space-y-1.5 pr-2">
                          <div className="h-1.5 bg-[#EFE7DC] rounded-full w-full" />
                          <div className="h-1.5 bg-[#EFE7DC] rounded-full w-4/5" />
                          <div className="h-1.5 bg-[#EFE7DC] rounded-full w-full" />
                          <div className="h-1.5 bg-[#EFE7DC] rounded-full w-3/4" />
                          <div className="h-1.5 bg-[#EFE7DC] rounded-full w-5/6" />
                        </div>

                        {/* Right Page (Checklist items) */}
                        <div className="space-y-1.5 pl-2">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-sm border border-[#BD8E36] bg-[#E5B656]/30 flex items-center justify-center shrink-0">
                              <div className="w-1 h-1 bg-[#BD8E36] rounded-xs" />
                            </div>
                            <div className="h-1.5 bg-[#EFE7DC] rounded-full w-full" />
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-sm border border-[#BD8E36] bg-[#E5B656]/30 flex items-center justify-center shrink-0">
                              <div className="w-1 h-1 bg-[#BD8E36] rounded-xs" />
                            </div>
                            <div className="h-1.5 bg-[#EFE7DC] rounded-full w-4/5" />
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-sm border border-[#BD8E36] bg-[#E5B656]/30 flex items-center justify-center shrink-0">
                              <div className="w-1 h-1 bg-[#BD8E36] rounded-xs" />
                            </div>
                            <div className="h-1.5 bg-[#EFE7DC] rounded-full w-5/6" />
                          </div>
                        </div>

                        {/* Dangling Yellow Bookmark Ribbon */}
                        <div className="absolute -bottom-4 right-10 w-4 h-6 bg-[#E5B656] shadow-md clip-ribbon border-x border-[#BD8E36]" />
                      </div>
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
          4. "Examination essentials" Section (Exact Replica of Reference Image)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-5">
        {/* Section Header: Title + Hairline extending right */}
        <div className="flex items-center gap-4">
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight shrink-0">
            Examination essentials
          </h2>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        {/* Large Rounded Container with 4 Metric Columns matching image */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-2xs p-5 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E7D6C1]">
            {/* Metric 1: 75% Attendance */}
            <div className="flex items-center gap-4 lg:px-6 first:lg:pl-2">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center shrink-0 text-[#28052B] shadow-2xs">
                <Calendar className="w-6 h-6 text-[#28052B]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#28052B] tracking-tight font-['Playfair_Display',serif]">
                  75%
                </div>
                <div className="text-xs text-[#4A384F] font-medium mt-0.5">
                  Minimum attendance
                </div>
              </div>
            </div>

            {/* Metric 2: 40% Passing Threshold */}
            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center shrink-0 text-[#28052B] shadow-2xs">
                <GraduationCap className="w-6 h-6 text-[#28052B]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#28052B] tracking-tight font-['Playfair_Display',serif]">
                  40%
                </div>
                <div className="text-xs text-[#4A384F] font-medium mt-0.5">
                  Minimum passing threshold
                </div>
              </div>
            </div>

            {/* Metric 3: 10.0 Grading Scale */}
            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center shrink-0 text-[#28052B] shadow-2xs">
                <Layers className="w-6 h-6 text-[#28052B]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#28052B] tracking-tight font-['Playfair_Display',serif]">
                  10.0
                </div>
                <div className="text-xs text-[#4A384F] font-medium mt-0.5">
                  10-point grading scale
                </div>
              </div>
            </div>

            {/* Metric 4: Zero Electronic Devices */}
            <div className="flex items-center gap-4 lg:px-6 last:lg:pr-2">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center shrink-0 text-[#28052B] shadow-2xs relative">
                {/* Phone icon with ban slash */}
                <Smartphone className="w-6 h-6 text-[#28052B]" />
                <div className="absolute inset-2 border-b-2 border-rose-600 rotate-45 pointer-events-none" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#28052B] tracking-tight font-['Playfair_Display',serif]">
                  Zero
                </div>
                <div className="text-xs text-[#4A384F] font-medium mt-0.5">
                  Electronic devices
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. "Explore the guidelines" Section (Exact Replica of Reference Image)
          ========================================================================= */}
      <section id="explore-guidelines-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-5">
        {/* Section Header: Title + Hairline extending right */}
        <div className="flex items-center gap-4">
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight shrink-0">
            Explore the guidelines
          </h2>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        {/* 4 Navigation Cards matching exact image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Before the examination */}
          <button
            onClick={() => setActiveTab('before')}
            className={`p-4 sm:p-5 rounded-2xl border transition-all text-left flex items-center justify-between gap-3 group cursor-pointer ${
              activeTab === 'before'
                ? 'bg-white border-[#28052B] shadow-md ring-1 ring-[#28052B]'
                : 'bg-white border-[#E7D6C1] hover:border-[#BD8E36] hover:bg-[#FAF7F2]'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center shrink-0 text-[#28052B] group-hover:text-[#BD8E36] transition-colors shadow-2xs">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-xs sm:text-sm text-[#28052B] group-hover:text-[#BD8E36] transition-colors truncate">
                  Before the examination
                </div>
                <div className="text-[11px] text-[#4A384F]/70 truncate">
                  Eligibility and hall tickets
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#BD8E36] shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card 2: Inside the examination hall */}
          <button
            onClick={() => setActiveTab('inside')}
            className={`p-4 sm:p-5 rounded-2xl border transition-all text-left flex items-center justify-between gap-3 group cursor-pointer ${
              activeTab === 'inside'
                ? 'bg-white border-[#28052B] shadow-md ring-1 ring-[#28052B]'
                : 'bg-white border-[#E7D6C1] hover:border-[#BD8E36] hover:bg-[#FAF7F2]'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center shrink-0 text-[#28052B] group-hover:text-[#BD8E36] transition-colors shadow-2xs">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-xs sm:text-sm text-[#28052B] group-hover:text-[#BD8E36] transition-colors truncate">
                  Inside the examination hall
                </div>
                <div className="text-[11px] text-[#4A384F]/70 truncate">
                  Rules and procedures
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#BD8E36] shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card 3: Assessment & grading */}
          <button
            onClick={() => setActiveTab('assessment')}
            className={`p-4 sm:p-5 rounded-2xl border transition-all text-left flex items-center justify-between gap-3 group cursor-pointer ${
              activeTab === 'assessment'
                ? 'bg-white border-[#28052B] shadow-md ring-1 ring-[#28052B]'
                : 'bg-white border-[#E7D6C1] hover:border-[#BD8E36] hover:bg-[#FAF7F2]'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center shrink-0 text-[#28052B] group-hover:text-[#BD8E36] transition-colors shadow-2xs">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-xs sm:text-sm text-[#28052B] group-hover:text-[#BD8E36] transition-colors truncate">
                  Assessment &amp; grading
                </div>
                <div className="text-[11px] text-[#4A384F]/70 truncate">
                  Evaluation and grading system
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#BD8E36] shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card 4: Academic integrity */}
          <button
            onClick={() => setActiveTab('integrity')}
            className={`p-4 sm:p-5 rounded-2xl border transition-all text-left flex items-center justify-between gap-3 group cursor-pointer ${
              activeTab === 'integrity'
                ? 'bg-white border-[#28052B] shadow-md ring-1 ring-[#28052B]'
                : 'bg-white border-[#E7D6C1] hover:border-[#BD8E36] hover:bg-[#FAF7F2]'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center shrink-0 text-[#28052B] group-hover:text-[#BD8E36] transition-colors shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-xs sm:text-sm text-[#28052B] group-hover:text-[#BD8E36] transition-colors truncate">
                  Academic integrity
                </div>
                <div className="text-[11px] text-[#4A384F]/70 truncate">
                  Conduct and compliance
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#BD8E36] shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Dynamic Detailed Content Display corresponding to the active card */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-2xs p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#E7D6C1]/60 pb-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#BD8E36]">
              Detailed Directive
            </span>
            <h3 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-[#28052B] mt-1">
              {GUIDELINES_CONTENT[activeTab].title}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A384F] mt-1 leading-relaxed">
              {GUIDELINES_CONTENT[activeTab].intro}
            </p>
          </div>

          {/* 4 Structured Points for the chosen category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {GUIDELINES_CONTENT[activeTab].points.map((pt) => (
              <div
                key={pt.num}
                className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2 hover:border-[#BD8E36] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#28052B] text-white text-xs font-bold font-mono flex items-center justify-center shrink-0">
                    {pt.num}
                  </span>
                  <h4 className="font-bold text-sm text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                    {pt.title}
                  </h4>
                </div>
                <p className="text-xs text-[#4A384F] leading-relaxed pl-10">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

          {/* If Assessment is active, show the full 10-Point Grading Scale Table */}
          {activeTab === 'assessment' && (
            <div className="pt-4 space-y-3">
              <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
                Official 10-Point Letter Grading Scale (Autonomous Framework)
              </h4>
              <div className="overflow-x-auto rounded-2xl border border-[#E7D6C1]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#28052B] text-white">
                    <tr>
                      <th className="py-2.5 px-3.5 font-bold">Letter Grade</th>
                      <th className="py-2.5 px-3.5 font-bold">Grade Points</th>
                      <th className="py-2.5 px-3.5 font-bold">Qualitative Standard</th>
                      <th className="py-2.5 px-3.5 font-bold">Percentage Marks Range</th>
                      <th className="py-2.5 px-3.5 font-bold">Academic Attainment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7D6C1]/50 text-[#28052B]">
                    {GRADING_SCALE.map((row) => (
                      <tr key={row.grade} className="hover:bg-[#FAF7F2] transition-colors">
                        <td className="py-2.5 px-3.5 font-bold font-mono text-[#BD8E36] text-sm">
                          {row.grade}
                        </td>
                        <td className="py-2.5 px-3.5 font-bold">{row.points}</td>
                        <td className="py-2.5 px-3.5 font-semibold">{row.label}</td>
                        <td className="py-2.5 px-3.5 font-mono text-xs">{row.marks}</td>
                        <td className="py-2.5 px-3.5 text-xs text-[#4A384F]">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Quick link button to Timetable or Malpractices */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-[#E7D6C1]/60">
            <span className="text-[#4A384F]/70">
              Authority: Statutory Regulations of Autonomous Academic Council, Jyothi Engineering College
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('examination-malpractices')}
                className="text-xs font-bold text-[#BD8E36] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>View Malpractices &amp; Penalties</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. Permitted vs Prohibited Items Comparison Bento
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Permitted Items */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]/60">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
                  Permitted Hall Materials
                </h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                Authorized
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-[#4A384F]">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Hall ticket &amp; College ID card:</strong> Printed physical admit card with clear photograph.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Writing Instruments:</strong> Blue or black ballpoint pens, pencils, erasers in transparent pouches.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Non-programmable Calculators:</strong> Approved models (Casio fx-82MS, fx-991MS, fx-991EX).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Mathematical Tables &amp; Data Books:</strong> Issued exclusively by the college exam cell.</span>
              </li>
            </ul>
          </div>

          {/* Prohibited Items */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]/60">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700">
                  <Ban className="w-5 h-5" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
                  Prohibited Contraband
                </h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
                Zero Tolerance
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-[#4A384F]">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>Smartphones &amp; Smartwatches:</strong> Any digital communication gadget or fitness tracker.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>Programmable Calculators:</strong> Devices with graphic displays or formula storage memory.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>Study Materials &amp; Notes:</strong> Books, loose papers, formula chits, or scribbled stationery.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>Opaque Pencil Cases &amp; Pouches:</strong> Only clear see-through pouches are permitted.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. Frequently Asked Questions Accordion
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-4">
        <div className="flex items-center gap-4">
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight shrink-0">
            Frequently asked questions
          </h2>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E7D6C1] bg-white transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/50 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm text-[#28052B] flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#BD8E36] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#4A384F] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#BD8E36]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#4A384F] leading-relaxed border-t border-[#FAF7F2] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          8. Official CoE Handbook & Helpline Bento
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
                <span>Official Examinee Handbook Edition 2026-27</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
                Download the Complete Autonomous Examination Manual
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                Contains full academic ordinances, moderation policies, passing board statutes, attendance condonation criteria, and scribe request forms.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-white/90">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#DFC06A]" />
                  <span>Exam Cell: +91 4884 259000 (Ext 208)</span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#DFC06A]" />
                  <span>examguidelines@jecc.ac.in</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={handleDownloadHandbook}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Handbook (PDF)</span>
              </button>

              <button
                onClick={() => onNavigate('examination-timetable')}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Timetable</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExaminationGuidelinesPage;
