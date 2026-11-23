import React, { useState } from 'react';
import {
  ShieldAlert,
  AlertTriangle,
  Scale,
  FileCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  Info,
  BookOpen,
  Smartphone,
  UserCheck,
  Ban,
  MessageSquare,
  HelpCircle,
  ExternalLink,
  X,
  FileText,
  ShieldCheck,
  Check,
  Award,
} from 'lucide-react';
import { ExaminationSubNav } from '../components/ExaminationSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface OffencePolicy {
  id: string;
  title: string;
  subtitle: string;
  iconType: 'books' | 'device' | 'impersonation' | 'collusion' | 'tampering';
  category: 'Category I (Minor)' | 'Category II (Serious)' | 'Category III (Severe)' | 'Category IV (Criminal)';
  definition: string;
  examples: string[];
  immediateAction: string;
  prescribedPenalty: string;
  appealWindow: string;
}

const OFFENCE_POLICIES: OffencePolicy[] = [
  {
    id: 'unauthorised-materials',
    title: 'Unauthorised materials',
    subtitle: 'Use of notes, books or any other unapproved material.',
    iconType: 'books',
    category: 'Category I (Minor)',
    definition:
      'Possession of unwritten sheets, written notes, textbooks, formulas scribbled on geometric instruments, desk surfaces, or personal clothing inside the examination hall.',
    examples: [
      'Handwritten paper slips or micro-chits found in desk drawer, pencil case, or clothes.',
      'Formulas, circuit diagrams, or annotations scribbled on mathematical tables, codebooks, or calculators.',
      'Possession of unauthorized textbook or reference manual during closed-book assessment.',
    ],
    immediateAction:
      'Invigilator immediately seizes the unauthorized material along with the candidate answer booklet. A fresh answer booklet is issued for the remaining time. Candidate must submit written statement on the spot.',
    prescribedPenalty:
      'Cancellation of the specific course examination. Official warning letter entered into student academic record. Candidate must register for supplementary examination.',
    appealWindow: 'Representation to the Examination Malpractice Committee within 5 working days.',
  },
  {
    id: 'electronic-devices',
    title: 'Electronic devices',
    subtitle: 'Possession or use of mobile phones or other electronic devices.',
    iconType: 'device',
    category: 'Category II (Serious)',
    definition:
      'Possession or active operation of any unauthorized electronic, telecommunication, or digital storage equipment inside the examination precinct.',
    examples: [
      'Mobile phones (even if switched off), smartwatches, fitness bands, or smart glasses.',
      'Bluetooth audio transceivers, micro-earbuds, or wireless transmission modules.',
      'Programmable graphic calculators with formula storage capacity.',
    ],
    immediateAction:
      'Device confiscated immediately and sealed in an evidentiary tamper-evident envelope in the presence of the Hall Superintendent. Hall Superintendent files a formal disciplinary report to the CoE within 2 hours.',
    prescribedPenalty:
      'Cancellation of all examinations registered in the current session. The student is barred from appearing in supplementary or make-up exams for one subsequent academic cycle.',
    appealWindow: 'Formal appeal to the Examination Grievance Redressal Committee within 7 working days.',
  },
  {
    id: 'impersonation',
    title: 'Impersonation',
    subtitle: 'Writing the examination on behalf of another person or otherwise misrepresenting identity.',
    iconType: 'impersonation',
    category: 'Category IV (Criminal)',
    definition:
      'Arranging a proxy individual to impersonate or fraudulently write an examination, or writing an examination on behalf of another enrolled candidate.',
    examples: [
      'Procuring an external candidate or junior student to sit for the examination using a forged hall ticket.',
      'Fabricating or swapping photograph on the autonomous identity card or admit card.',
      'Colluding with external persons to transmit identity credentials.',
    ],
    immediateAction:
      'Both the impersonator and the candidate are detained immediately. The Chief Superintendent lodges an on-the-spot formal police complaint (FIR) under the State Prevention of Malpractices Act.',
    prescribedPenalty:
      'Immediate rustication and permanent expulsion of the enrolled student from Jyothi Engineering College. Handover to state law enforcement authorities for statutory criminal prosecution.',
    appealWindow: 'Subject to statutory criminal court and Governing Body tribunal.',
  },
  {
    id: 'misconduct-collusion',
    title: 'Misconduct & Collusion',
    subtitle: 'Exchanging answer scripts, communicating inside the hall, or disorderly conduct.',
    iconType: 'collusion',
    category: 'Category II (Serious)',
    definition:
      'Mutual copying, whispering, exchanging answer scripts, or disruptive, threatening, or insubordinate behavior directed at invigilators.',
    examples: [
      'Swapping answer books or loose continuation sheets between adjacent candidates.',
      'Signaling, whispering answers, or passing question papers with written solutions.',
      'Refusal to surrender answer scripts at bell or verbal harassment of invigilators.',
    ],
    immediateAction:
      'Both candidates are moved to separate isolated desks. Written statements recorded from both students and the invigilator. Answer scripts marked with official squad seal.',
    prescribedPenalty:
      'Cancellation of all examinations registered in the current term for both collaborating candidates, plus compulsory parental counseling.',
    appealWindow: 'Written petition to the EMIC within 5 working days.',
  },
  {
    id: 'script-tampering',
    title: 'Script Tampering & Forgery',
    subtitle: 'Defacing barcodes, tearing script sheets, or attempting unauthorized alteration.',
    iconType: 'tampering',
    category: 'Category III (Severe)',
    definition:
      'Deliberately peeling, scratching, smudging, or tampering with serialized 2D barcodes, tearing pages from the answer book, or attempting post-exam alterations.',
    examples: [
      'Tearing pages from the main answer booklet or smuggling answer sheets outside.',
      'Scratching or pasting over the candidate barcode label to obscure identity anonymity.',
      'Writing candidate roll number, mobile number, or emotional appeals inside answer script body.',
    ],
    immediateAction:
      'Booklet confiscated immediately. CoE initiates barcode audit and cross-references OMR dummy number serialization.',
    prescribedPenalty:
      'Cancellation of all examinations of current session and debarment for up to 1 academic year.',
    appealWindow: 'Hearing before the Autonomous Passing Board.',
  },
];

const INQUIRY_STAGES = [
  {
    stage: '01',
    title: 'Spot Seizure & Statement',
    desc: 'The invigilator immediately confiscates contraband and the answer book. A fresh booklet is issued for remaining time. Hall Superintendent records a written statement from the candidate.',
  },
  {
    stage: '02',
    title: 'Statutory Notice by CoE',
    desc: 'Within 48 hours, the Controller of Examinations issues a formal show-cause notice detailing the nature of the booked offence and scheduling the inquiry hearing date.',
  },
  {
    stage: '03',
    title: 'EMIC Disciplinary Hearing',
    desc: 'The autonomous Examination Malpractices Inquiry Committee (EMIC) convenes a formal hearing. The student is afforded natural justice and complete right to present oral and written defense.',
  },
  {
    stage: '04',
    title: 'Sanction & Ratification',
    desc: 'The committee submits its findings and recommended disciplinary penalties to the Principal and Autonomous Governing Council for final statutory ratification.',
  },
  {
    stage: '05',
    title: 'Appellate Tribunal Review',
    desc: 'Candidates aggrieved by the EMIC decision can submit an appeal petition to the Autonomous Examination Grievance Redressal Committee (EGRC) within 15 days.',
  },
];

export const ExaminationMalpracticesPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [activePolicy, setActivePolicy] = useState<OffencePolicy | null>(null);

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
      <ExaminationSubNav activeRoute="examination-malpractices" onNavigate={onNavigate} />

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
                ACADEMIC INTEGRITY &amp; EXAMINATION CONDUCT
              </span>
              <div className="w-8 sm:w-10 h-[1px] bg-[#C59B4E]" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.12]">
              Malpractices &amp; Penalties
              <span className="block italic text-[#BD8E36] font-normal mt-1">
                Academic Integrity
              </span>
            </h2>

            {/* Subtitle text matching exact wording in image */}
            <p className="text-sm sm:text-base text-[#4A384F] font-normal leading-relaxed max-w-lg">
              Understand examination conduct, disciplinary procedures and the process for appeals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onNavigate('examination-guidelines')}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Examination guidelines</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('examination-grievances')}
                className="px-6 py-2.5 rounded-full bg-transparent hover:bg-black/5 text-[#28052B] font-semibold text-xs sm:text-sm border border-[#28052B] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Grievance &amp; appeals</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sweeping Curved Deep Plum Arc Graphic with 3D Certificate Scroll, Scales of Justice & Golden Shield */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[340px] flex items-center justify-end overflow-hidden rounded-3xl">
            {/* Deep Royal Plum Curved Arc Background */}
            <div className="absolute inset-y-0 right-0 w-full sm:w-[94%] bg-gradient-to-br from-[#380E3B] via-[#2D0A31] to-[#1E0523] rounded-tl-[130px] sm:rounded-tl-[170px] rounded-bl-[40px] sm:rounded-bl-[60px] shadow-2xl overflow-hidden">
              {/* L-shaped gold accent curve at top right corner */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 border-t-[2px] border-r-[2px] border-[#DFC06A] rounded-tr-2xl pointer-events-none" />

              {/* Text Block inside Top-Right Plum Arc: Divider + "Fairness & integrity" */}
              <div className="pt-8 sm:pt-9 pl-10 sm:pl-16 pr-8 flex items-start gap-4">
                {/* Vertical gold divider line */}
                <div className="w-[1.5px] h-14 bg-[#DFC06A]/50 shrink-0 mt-1" />

                <div>
                  <div className="font-['Playfair_Display',serif] italic text-2xl sm:text-3xl text-white font-medium leading-tight">
                    Fairness &amp;
                    <span className="block">integrity</span>
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-normal mt-1 tracking-wide">
                    Know the rules and your options.
                  </div>
                </div>
              </div>

              {/* 3D Illustration Area: Golden Shield + Stacked Books + Rolled Certificate Scroll + Golden Scales of Justice */}
              <div className="absolute bottom-0 left-2 sm:left-10 flex items-end select-none pointer-events-none">
                {/* Left: Floating Golden Shield with Checkmark + Stack of two books */}
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

                {/* Center: Curved Parchment Certificate Scroll titled "Academic Policy" */}
                <div className="relative z-20">
                  <div className="w-44 sm:w-52 bg-[#FDFBF7] rounded-t-2xl rounded-b-xl shadow-2xl border border-[#E7D6C1] p-4 sm:p-5 pb-6 relative rotate-1">
                    {/* Top curl banner */}
                    <div className="text-center pb-2 border-b border-[#E7D6C1]">
                      <div className="font-['Playfair_Display',serif] italic text-xs sm:text-sm font-bold text-[#28052B]">
                        Academic
                      </div>
                      <div className="font-['Playfair_Display',serif] italic text-xs sm:text-sm font-bold text-[#BD8E36] -mt-1">
                        Policy
                      </div>
                    </div>

                    {/* Checklist ticks */}
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

                    {/* Gold Circular Seal with ribbon at bottom right */}
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
                      {/* Central vertical pillar */}
                      <line x1="50" y1="18" x2="50" y2="108" />
                      {/* Base stand */}
                      <path d="M26 108 L74 108" strokeWidth="4" />
                      <path d="M36 102 L64 102" />
                      {/* Top horizontal beam */}
                      <line x1="16" y1="28" x2="84" y2="28" strokeWidth="3" />
                      {/* Center finial ornament */}
                      <circle cx="50" cy="16" r="5" fill="#DFC06A" />
                      {/* Left pan strings & pan */}
                      <line x1="16" y1="28" x2="8" y2="58" strokeWidth="1.2" />
                      <line x1="16" y1="28" x2="24" y2="58" strokeWidth="1.2" />
                      <path d="M6 58 Q16 66 26 58 Z" fill="#DFC06A" fillOpacity="0.4" strokeWidth="1.5" />
                      {/* Right pan strings & pan (slightly tilted) */}
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
          4. "Classification of offences" Section (Exact Replica of Reference Image)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-3">
        {/* Section Header: Title + Hairline extending right */}
        <div className="flex items-center gap-4">
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight shrink-0">
            Classification of offences
          </h2>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed">
          Review the applicable policy for each category.
        </p>

        {/* Two Columns Grid: Cards on Left + "Questions or appeals?" on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-3">
          {/* Left Column (8 cols): List of Offence Cards */}
          <div className="lg:col-span-8 space-y-4">
            {/* Card 1: Unauthorised materials */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7D6C1] hover:border-[#BD8E36] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-2xs">
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Rounded square icon in soft blush */}
                <div className="w-12 h-12 rounded-2xl bg-[#F5ECF5] border border-[#ECD9EC] flex items-center justify-center shrink-0 text-[#28052B] group-hover:text-[#BD8E36] transition-colors shadow-2xs">
                  <BookOpen className="w-6 h-6" />
                </div>

                {/* Vertical hairline separator */}
                <div className="w-[1px] h-8 bg-[#C59B4E]/40 shrink-0 hidden sm:block" />

                {/* Title & Subtitle */}
                <div className="min-w-0">
                  <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                    Unauthorised materials
                  </h3>
                  <p className="text-xs text-[#4A384F] leading-snug">
                    Use of notes, books or any other unapproved material.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActivePolicy(OFFENCE_POLICIES[0])}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors shrink-0 self-end sm:self-auto cursor-pointer"
              >
                <span>View policy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Card 2: Electronic devices */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7D6C1] hover:border-[#BD8E36] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-2xs">
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Rounded square icon in soft blush */}
                <div className="w-12 h-12 rounded-2xl bg-[#F5ECF5] border border-[#ECD9EC] flex items-center justify-center shrink-0 text-[#28052B] group-hover:text-[#BD8E36] transition-colors shadow-2xs relative">
                  <Smartphone className="w-6 h-6" />
                  <div className="absolute inset-2 border-b-2 border-rose-600 rotate-45 pointer-events-none" />
                </div>

                {/* Vertical hairline separator */}
                <div className="w-[1px] h-8 bg-[#C59B4E]/40 shrink-0 hidden sm:block" />

                {/* Title & Subtitle */}
                <div className="min-w-0">
                  <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                    Electronic devices
                  </h3>
                  <p className="text-xs text-[#4A384F] leading-snug">
                    Possession or use of mobile phones or other electronic devices.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActivePolicy(OFFENCE_POLICIES[1])}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors shrink-0 self-end sm:self-auto cursor-pointer"
              >
                <span>View policy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Card 3: Impersonation */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7D6C1] hover:border-[#BD8E36] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-2xs">
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Rounded square icon in soft blush */}
                <div className="w-12 h-12 rounded-2xl bg-[#F5ECF5] border border-[#ECD9EC] flex items-center justify-center shrink-0 text-[#28052B] group-hover:text-[#BD8E36] transition-colors shadow-2xs">
                  <UserCheck className="w-6 h-6" />
                </div>

                {/* Vertical hairline separator */}
                <div className="w-[1px] h-8 bg-[#C59B4E]/40 shrink-0 hidden sm:block" />

                {/* Title & Subtitle */}
                <div className="min-w-0">
                  <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                    Impersonation
                  </h3>
                  <p className="text-xs text-[#4A384F] leading-snug">
                    Writing the examination on behalf of another person or otherwise misrepresenting identity.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActivePolicy(OFFENCE_POLICIES[2])}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors shrink-0 self-end sm:self-auto cursor-pointer"
              >
                <span>View policy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Card 4: Misconduct & Collusion */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7D6C1] hover:border-[#BD8E36] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-2xs">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-[#F5ECF5] border border-[#ECD9EC] flex items-center justify-center shrink-0 text-[#28052B] group-hover:text-[#BD8E36] transition-colors shadow-2xs">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="w-[1px] h-8 bg-[#C59B4E]/40 shrink-0 hidden sm:block" />
                <div className="min-w-0">
                  <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                    Misconduct &amp; Collusion
                  </h3>
                  <p className="text-xs text-[#4A384F] leading-snug">
                    Exchanging answer scripts, communicating inside the hall, or disorderly conduct.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActivePolicy(OFFENCE_POLICIES[3])}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors shrink-0 self-end sm:self-auto cursor-pointer"
              >
                <span>View policy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column (4 cols): "Questions or appeals?" Bento Card matching exact image */}
          <div className="lg:col-span-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-2xs space-y-4 h-full flex flex-col justify-between">
              <div className="space-y-3.5">
                {/* Chat question bubble icon with sparkle rays */}
                <div className="relative inline-block">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5ECF5] border border-[#ECD9EC] flex items-center justify-center text-[#28052B]">
                    <HelpCircle className="w-6 h-6 text-[#28052B]" />
                  </div>
                  {/* Little sparkle rays */}
                  <div className="absolute -top-1 -right-1 flex gap-1">
                    <div className="w-1 h-2 bg-[#E5B656] rotate-45 rounded-full" />
                    <div className="w-1 h-2 bg-[#E5B656] -rotate-45 rounded-full" />
                  </div>
                </div>

                <h3 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-[#28052B]">
                  Questions or appeals?
                </h3>

                <p className="text-xs text-[#4A384F] leading-relaxed">
                  If you have a query about a malpractice or wish to appeal a decision, explore the formal process.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('examination-grievances')}
                  className="w-full py-3 px-5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Explore the appeals process</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. Disciplinary Inquiry Procedure (5-Stage Due Process)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight shrink-0">
            Disciplinary inquiry &amp; due process
          </h2>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {INQUIRY_STAGES.map((stg) => (
            <div
              key={stg.stage}
              className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-2xs space-y-2 relative group hover:border-[#BD8E36] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#28052B] text-white text-xs font-bold font-mono flex items-center justify-center">
                  {stg.stage}
                </span>
                <Clock className="w-3.5 h-3.5 text-[#BD8E36]" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-[#28052B] pt-1">
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
          6. Examination Malpractices Inquiry Committee (EMIC) Contact Bento
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
                <span>Statutory Disciplinary Secretariat</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
                Examination Malpractices Inquiry Committee (EMIC)
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                The apex autonomous disciplinary body constituted under Section 14 of the Academic Regulations to ensure fair hearings, examine confiscated evidence, uphold academic dignity, and preserve student rights of natural justice.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-white/90">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#DFC06A]" />
                  <span>EMIC Secretariat: +91 4884 259000 (Ext 205)</span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#DFC06A]" />
                  <span>emic@jecc.ac.in</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigate('examination-grievances')}
                className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>File Grievance / Appeal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('examination-guidelines')}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>General Guidelines</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. Interactive Policy Modal (When clicking "View policy →")
          ========================================================================= */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E7D6C1] overflow-hidden my-8 animate-fade-in">
            {/* Modal Header */}
            <div className="bg-[#28052B] text-white p-5 sm:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-[#DFC06A]/40 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-[#DFC06A]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#DFC06A]">
                    Official Disciplinary Policy
                  </div>
                  <div className="text-base sm:text-lg font-['Playfair_Display',serif] font-bold text-white">
                    {activePolicy.title}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActivePolicy(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 bg-[#FAF7F2] space-y-4 max-h-[60vh] overflow-y-auto text-xs text-[#4A384F]">
              <div className="flex items-center justify-between border-b border-[#E7D6C1] pb-3">
                <span className="font-bold text-[#28052B]">Statutory Classification:</span>
                <span className="px-3 py-1 rounded-full font-bold uppercase text-[10px] bg-rose-50 text-rose-900 border border-rose-200">
                  {activePolicy.category}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-[#28052B] text-sm">Regulatory Definition:</h4>
                <p className="leading-relaxed bg-white p-3 rounded-xl border border-[#E7D6C1]">
                  {activePolicy.definition}
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-[#28052B]">Typical Offence Instances:</h4>
                <ul className="space-y-1 pl-1">
                  {activePolicy.examples.map((ex, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 space-y-1 text-amber-900">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Immediate On-the-Spot Procedure:</span>
                </div>
                <p className="text-[11px] text-[#4A384F] pl-5">
                  {activePolicy.immediateAction}
                </p>
              </div>

              <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 space-y-1 text-rose-900">
                <div className="font-bold flex items-center gap-1.5">
                  <Ban className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>Statutory Penalties Prescribed:</span>
                </div>
                <p className="text-[11px] text-[#4A384F] pl-5">
                  {activePolicy.prescribedPenalty}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#E7D6C1]/60 text-[11px] text-[#4A384F]">
                <span><strong>Appeals Provision:</strong> {activePolicy.appealWindow}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#E7D6C1] flex items-center justify-between">
              <button
                onClick={() => {
                  setActivePolicy(null);
                  onNavigate('examination-grievances');
                }}
                className="text-xs font-bold text-[#BD8E36] hover:underline cursor-pointer"
              >
                Learn about Appeals Tribunal →
              </button>
              <button
                onClick={() => setActivePolicy(null)}
                className="px-5 py-2 rounded-full bg-[#28052B] text-white font-semibold text-xs hover:bg-[#3D0A41] transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExaminationMalpracticesPage;
