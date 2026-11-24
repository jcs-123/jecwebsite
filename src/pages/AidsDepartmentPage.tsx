import React, { useState, useEffect } from 'react';
import {
  Brain, Users, GraduationCap, Sparkles, BookOpen, Building2,
  Award, Phone, Mail, Calendar, CheckCircle2, ChevronRight,
  Download, ExternalLink, FileText, MapPin, Laptop, Briefcase,
  Layers, ArrowRight, ShieldCheck, UserCheck, Compass, Cpu,
  Database, Rocket, Image as ImageIcon, MessageSquare, Globe,
  Library, Trophy
} from 'lucide-react';
import { AidsDepartmentSubNav, AidsTabId } from '../components/AidsDepartmentSubNav';

interface Props {
  subSection?: string;
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

export const AidsDepartmentPage: React.FC<Props> = ({ subSection, onNavigate, onOpenApply }) => {
  const [activeTab, setActiveTab] = useState<AidsTabId>('people');

  useEffect(() => {
    if (subSection) {
      if (['bos', 'advisory-board', 'faculty', 'non-teaching', 'adjunct-faculty', 'students', 'alumni', 'people'].includes(subSection)) {
        setActiveTab('people');
      } else if (['course-btech', 'career-placement', 'facilities', 'mous', 'achievements', 'research', 'syllabus', 'academics'].includes(subSection)) {
        setActiveTab('academics');
      } else if (['events', 'bulletin', 'gallery', 'association', 'reach-us', 'others'].includes(subSection)) {
        setActiveTab('others');
      }

      // Smooth scroll to target anchor
      setTimeout(() => {
        const el = document.getElementById(subSection);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    }
  }, [subSection]);

  const handleTabChange = (tab: AidsTabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#28052B] pb-24 selection:bg-[#28052B] selection:text-[#F3CF7A]">
      {/* 1. Institutional Top Brand Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-1">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#E7D6C1]/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-lg shadow-sm border border-[#DFC06A]/40">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-[#28052B] tracking-tight">
                Jyothi Engineering College
              </h1>
              <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#7A647F] uppercase">
                ( A U T O N O M O U S )
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs italic font-serif text-[#C79628]">
            <span className="w-10 h-px bg-[#DFC06A]" />
            <span>Excellence. Integrity. Trust.</span>
          </div>
        </div>
      </section>

      {/* 2. Exact Pill Tabs Sub-Navigation Bar (People, Academics, Others) */}
      <AidsDepartmentSubNav activeTab={activeTab} onSelectTab={handleTabChange} />

      {/* 3. Hero Section for AI & DS with Dynamic Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#28052B] via-[#350A3A] to-[#1E0221] text-white p-7 sm:p-10 lg:p-12 overflow-hidden shadow-2xl border border-[#DFC06A]/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DFC06A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#F3CF7A] font-semibold">
                <Brain className="w-4 h-4 text-[#DFC06A]" />
                <span>
                  {activeTab === 'people' && 'Artificial Intelligence & Data Science • People & Leadership'}
                  {activeTab === 'academics' && 'Artificial Intelligence & Data Science • Academic Excellence'}
                  {activeTab === 'others' && 'Artificial Intelligence & Data Science • Events & Community'}
                </span>
              </div>

              <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {activeTab === 'people' && (
                  <>Distinguished <span className="italic text-[#DFC06A]">Faculty, Mentors</span> &amp; Scholars</>
                )}
                {activeTab === 'academics' && (
                  <>Autonomous <span className="italic text-[#DFC06A]">B.Tech Curriculum</span>, Labs &amp; Placements</>
                )}
                {activeTab === 'others' && (
                  <>Department <span className="italic text-[#DFC06A]">Events, Bulletins</span> &amp; AIDA Association</>
                )}
              </h2>

              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-2xl">
                {activeTab === 'people' &&
                  'Meet our statutory Board of Studies, Department Advisory Board, distinguished faculty researchers, lab staff, student scholars, and global alumni network.'}
                {activeTab === 'academics' &&
                  'Explore our 4-year autonomous B.Tech program, high-performance NVIDIA GPU computing clusters, career placement records, funded research, and curriculum scheme.'}
                {activeTab === 'others' &&
                  'Discover annual tech fests, national AI datathons, technical bulletins ("AI Horizons"), project photo galleries, the AIDA student association, and contact desk.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenApply}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F6CE5E] via-[#F2BE42] to-[#E8AE2F] text-[#28052B] font-bold text-xs sm:text-sm shadow-lg hover:brightness-105 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Apply for B.Tech AI &amp; DS</span>
                </button>
                <div className="px-4 py-2.5 rounded-xl bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DFC06A]" />
                  <span>NBA &amp; NAAC ‘A’ Accredited</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-5 space-y-4">
              <div className="text-xs uppercase font-bold tracking-wider text-[#DFC06A] border-b border-white/10 pb-2">
                Department Fast Facts
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-2xl font-bold text-[#DFC06A]">60</div>
                  <div className="text-[11px] text-white/70">Annual Intake</div>
                </div>
                <div className="p-3 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-2xl font-bold text-[#DFC06A]">4 Years</div>
                  <div className="text-[11px] text-white/70">Degree Period</div>
                </div>
                <div className="p-3 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-2xl font-bold text-[#DFC06A]">₹24 LPA</div>
                  <div className="text-[11px] text-white/70">Highest Package</div>
                </div>
                <div className="p-3 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-2xl font-bold text-[#DFC06A]">100%</div>
                  <div className="text-[11px] text-white/70">GPU Rig Access</div>
                </div>
              </div>
              <div className="text-[11px] text-white/60 text-center font-mono">
                APJ Abdul Kalam Technological University
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TAB 1: PEOPLE CONTENT */}
      {activeTab === 'people' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-10 animate-fade-in">
          {/* Quick anchor jump pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white rounded-2xl border border-[#E7D6C1] shadow-xs">
            <span className="text-xs font-bold text-[#28052B] flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#C79628]" />
              <span>People Sections:</span>
            </span>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <a href="#bos" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">a. BOS</a>
              <a href="#advisory-board" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">b. Advisory Board</a>
              <a href="#faculty" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">c. Faculty Members</a>
              <a href="#non-teaching" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">d. Non Teaching Staff</a>
              <a href="#adjunct-faculty" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">e. Adjunct Faculty</a>
              <a href="#students" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">f. Student List</a>
              <a href="#alumni" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">g. Alumni</a>
            </div>
          </div>

          {/* a. BOS (Board of Studies) */}
          <div id="bos" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">1.a Statutory Governance</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Board of Studies (BOS) – AI &amp; DS
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
              The Board of Studies is the statutory academic authority of the department constituted under UGC autonomous regulations, tasked with curriculum scheme structuring, course syllabi framing, and assessment policy governance.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-[#E7D6C1] rounded-xl overflow-hidden">
                <thead className="bg-[#28052B] text-white">
                  <tr>
                    <th className="py-2.5 px-3.5 font-semibold">Name</th>
                    <th className="py-2.5 px-3.5 font-semibold">Designation &amp; Organization</th>
                    <th className="py-2.5 px-3.5 font-semibold">Role in BOS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7D6C1] bg-[#FAF7F2]/50">
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#28052B]">Dr. Deepa V.</td>
                    <td className="py-2.5 px-3.5 text-[#4A384F]">Head of Department, AI &amp; DS, Jyothi Engineering College</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#C79628]">Chairman</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#28052B]">Dr. Sabu M. Thampi</td>
                    <td className="py-2.5 px-3.5 text-[#4A384F]">Professor, Indian Institute of Information Technology (IIIT-K)</td>
                    <td className="py-2.5 px-3.5 text-[#4A384F]">University Nominee (KTU)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#28052B]">Dr. Elizabeth Sherly</td>
                    <td className="py-2.5 px-3.5 text-[#4A384F]">Director, Kerala Digital University (IIITM-K)</td>
                    <td className="py-2.5 px-3.5 text-[#4A384F]">Subject Expert</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#28052B]">Mr. Arun Santhosh</td>
                    <td className="py-2.5 px-3.5 text-[#4A384F]">Principal Data Scientist, NVIDIA AI Research India</td>
                    <td className="py-2.5 px-3.5 text-[#4A384F]">Industry Representative</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-[#28052B]">Er. Rahul K. Menon</td>
                    <td className="py-2.5 px-3.5 text-[#4A384F]">AI Solutions Architect, Amazon Web Services</td>
                    <td className="py-2.5 px-3.5 text-[#4A384F]">Distinguished Alumnus</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* b. Department Advisory board */}
          <div id="advisory-board" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">1.b Advisory Body</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Department Advisory Board (DAB)
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
                <div className="text-xs font-bold text-[#28052B]">Dr. Binu Thomas</div>
                <div className="text-[11px] text-[#C79628] font-medium">Academic Mentor</div>
                <div className="text-[11px] text-[#4A384F]">Dean (Academics) &amp; Professor, CSE</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
                <div className="text-xs font-bold text-[#28052B]">Mr. Sreekanth Venkataraman</div>
                <div className="text-[11px] text-[#C79628] font-medium">Industry Advisor</div>
                <div className="text-[11px] text-[#4A384F]">Head of Data &amp; AI Practice, TCS Kochi</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
                <div className="text-xs font-bold text-[#28052B]">Dr. Anitha Mary</div>
                <div className="text-[11px] text-[#C79628] font-medium">Research Advisor</div>
                <div className="text-[11px] text-[#4A384F]">Scientist-E, Centre for Development of Advanced Computing</div>
              </div>
            </div>
          </div>

          {/* c. Faculty members */}
          <div id="faculty" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">1.c Teaching Faculty</span>
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                    Faculty Members
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[#28052B]">
                12 Faculty
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Dr. Deepa V.', role: 'Professor & Head', qual: 'Ph.D. in Deep Learning & NLP', exp: '18 Years', email: 'deepav@jecc.ac.in', spec: 'Deep Learning, NLP, Generative AI' },
                { name: 'Prof. Anoop V.', role: 'Associate Professor', qual: 'M.Tech, Ph.D. (Pursuing)', exp: '14 Years', email: 'anoopv@jecc.ac.in', spec: 'Computer Vision & Medical Imaging' },
                { name: 'Dr. Praveen Kumar S.', role: 'Associate Professor', qual: 'Ph.D. in Big Data Systems', exp: '12 Years', email: 'praveen@jecc.ac.in', spec: 'Distributed Big Data & Graph Mining' },
                { name: 'Prof. Neethu Mohan', role: 'Assistant Professor', qual: 'M.Tech (Data Science)', exp: '9 Years', email: 'neethum@jecc.ac.in', spec: 'Predictive Analytics & Statistics' },
                { name: 'Prof. Reshma K. R.', role: 'Assistant Professor', qual: 'M.Tech (AI & Robotics)', exp: '7 Years', email: 'reshmak@jecc.ac.in', spec: 'Autonomous Systems & Edge AI' },
                { name: 'Prof. Jithin Jose', role: 'Assistant Professor', qual: 'M.Tech (Software Engg)', exp: '8 Years', email: 'jithinj@jecc.ac.in', spec: 'Cloud ML & MLOps Pipelines' },
              ].map((f, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#28052B]">{f.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#DFC06A]/20 text-[#28052B] font-semibold">{f.exp}</span>
                  </div>
                  <div className="text-[11px] text-[#C79628] font-bold">{f.role}</div>
                  <div className="text-[11px] text-[#4A384F]">{f.qual}</div>
                  <div className="text-[10.5px] text-[#7A647F]">Specialization: <strong className="text-[#28052B]">{f.spec}</strong></div>
                  <div className="pt-2 border-t border-[#E7D6C1]/60 flex items-center gap-1.5 text-[11px] text-[#28052B]">
                    <Mail className="w-3.5 h-3.5 text-[#C79628]" />
                    <span>{f.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* d. Non teaching staff */}
          <div id="non-teaching" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">1.d Technical Support</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Non Teaching Staff &amp; Lab Instructors
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <div className="text-xs font-bold text-[#28052B]">Er. Shaju C. P.</div>
                <div className="text-[11px] text-[#C79628] font-semibold">Senior Lab Instructor</div>
                <div className="text-[11px] text-[#4A384F]">High Performance Computing &amp; GPU Lab</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <div className="text-xs font-bold text-[#28052B]">Er. Geethu K. B.</div>
                <div className="text-[11px] text-[#C79628] font-semibold">Trade Instructor</div>
                <div className="text-[11px] text-[#4A384F]">Data Engineering &amp; Cloud Sandbox</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <div className="text-xs font-bold text-[#28052B]">Mr. Thomas Mathew</div>
                <div className="text-[11px] text-[#C79628] font-semibold">Department Clerk / Assistant</div>
                <div className="text-[11px] text-[#4A384F]">Academic Affairs &amp; Records Office</div>
              </div>
            </div>
          </div>

          {/* e. Adjunct faculty */}
          <div id="adjunct-faculty" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">1.e Global Mentorship</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Adjunct Faculty &amp; Visiting Fellows
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <div className="text-xs font-bold text-[#28052B]">Dr. Ramnarayan Subramanian</div>
                <div className="text-[11px] text-[#C79628] font-bold">Research Fellow, Indian Institute of Science (IISc Bangalore)</div>
                <p className="text-[11px] text-[#4A384F] leading-relaxed">
                  Conducts masterclasses on Reinforcement Learning, Foundation Models, and Quantum Algorithms.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <div className="text-xs font-bold text-[#28052B]">Er. Vigneshwaran R.</div>
                <div className="text-[11px] text-[#C79628] font-bold">Director of Engineering, Applied AI Labs, Singapore</div>
                <p className="text-[11px] text-[#4A384F] leading-relaxed">
                  Mentors capstone projects on productionizing Large Language Models and real-time inference systems.
                </p>
              </div>
            </div>
          </div>

          {/* f. Student list */}
          <div id="students" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">1.f Enrolled Batches</span>
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                    Student Roster &amp; Batches
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#C79628]">B.Tech AI &amp; DS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
                <div className="text-lg font-bold text-[#28052B]">2024–2028</div>
                <div className="text-xs text-[#C79628] font-semibold mt-1">First Year (S1/S2)</div>
                <div className="text-[11px] text-[#4A384F]">60 Enrolled</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
                <div className="text-lg font-bold text-[#28052B]">2023–2027</div>
                <div className="text-xs text-[#C79628] font-semibold mt-1">Second Year (S3/S4)</div>
                <div className="text-[11px] text-[#4A384F]">63 Enrolled</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
                <div className="text-lg font-bold text-[#28052B]">2022–2026</div>
                <div className="text-xs text-[#C79628] font-semibold mt-1">Third Year (S5/S6)</div>
                <div className="text-[11px] text-[#4A384F]">58 Enrolled</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
                <div className="text-lg font-bold text-[#28052B]">2021–2025</div>
                <div className="text-xs text-[#C79628] font-semibold mt-1">Final Year (S7/S8)</div>
                <div className="text-[11px] text-[#4A384F]">59 Graduating</div>
              </div>
            </div>
          </div>

          {/* g. Alumni */}
          <div id="alumni" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">1.g Global Network</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Department Alumni Network
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <div className="text-xs font-bold text-[#28052B]">Er. Akhil Krishnan</div>
                <div className="text-[11px] text-[#C79628] font-semibold">Batch 2024 • AI Engineer</div>
                <div className="text-[11px] text-[#4A384F]">Cognizant AI Labs, Bengaluru</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <div className="text-xs font-bold text-[#28052B]">Er. Sandra Maria Jose</div>
                <div className="text-[11px] text-[#C79628] font-semibold">Batch 2024 • Data Analyst</div>
                <div className="text-[11px] text-[#4A384F]">Tata Consultancy Services, Kochi</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <div className="text-xs font-bold text-[#28052B]">Er. Gokul C.</div>
                <div className="text-[11px] text-[#C79628] font-semibold">Batch 2024 • M.S. Artificial Intelligence</div>
                <div className="text-[11px] text-[#4A384F]">Technical University of Munich, Germany</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. TAB 2: ACADEMICS CONTENT */}
      {activeTab === 'academics' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-10 animate-fade-in">
          {/* Quick anchor jump pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white rounded-2xl border border-[#E7D6C1] shadow-xs">
            <span className="text-xs font-bold text-[#28052B] flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#C79628]" />
              <span>Academics Sections:</span>
            </span>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <a href="#course-btech" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">a. Course B.Tech</a>
              <a href="#career-placement" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">b. Career &amp; Placement</a>
              <a href="#facilities" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">c. Facilities</a>
              <a href="#mous" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">d. Industry Tie-up</a>
              <a href="#achievements" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">e. Achievements</a>
              <a href="#research" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">f. Research</a>
              <a href="#syllabus" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">g. Syllabus</a>
            </div>
          </div>

          {/* a. Course (i. Btech) */}
          <div id="course-btech" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">2.a Academic Program</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Course – B.Tech in Artificial Intelligence &amp; Data Science
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <span className="text-[10px] font-bold text-[#C79628] uppercase">Degree Credential</span>
                <div className="font-bold text-sm text-[#28052B]">B.Tech (Autonomous)</div>
                <p className="text-[11px] text-[#4A384F]">Awarded by APJ Abdul Kalam Technological University with CBCS credit flexibility.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <span className="text-[10px] font-bold text-[#C79628] uppercase">Duration &amp; Intake</span>
                <div className="font-bold text-sm text-[#28052B]">4 Years (8 Semesters) • 60 Seats</div>
                <p className="text-[11px] text-[#4A384F]">Admissions via KEAM Government Quota, Management Merit &amp; NRI categories.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <span className="text-[10px] font-bold text-[#C79628] uppercase">Curricular Tracks</span>
                <div className="font-bold text-sm text-[#28052B]">160 Credits CBCS Framework</div>
                <p className="text-[11px] text-[#4A384F]">Options for B.Tech Honors in Generative AI and Interdisciplinary Minors.</p>
              </div>
            </div>
          </div>

          {/* b. Career and placement */}
          <div id="career-placement" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">2.b Career Pathways</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Career and Placement
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <div className="flex items-center gap-2 text-[#28052B]">
                  <Trophy className="w-4 h-4 text-[#C79628]" />
                  <h4 className="font-bold text-sm">i. Campus Placement</h4>
                </div>
                <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                  Top tier corporate recruitment with recruiting partners including TCS, Infosys, Cognizant, IBM, Experion, UST, and Federal Bank.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#28052B]">
                  Highest: <span className="text-[#C79628] font-bold">₹24.00 LPA</span> • Avg: <span className="font-bold">₹5.80 LPA</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <div className="flex items-center gap-2 text-[#28052B]">
                  <GraduationCap className="w-4 h-4 text-[#C79628]" />
                  <h4 className="font-bold text-sm">ii. Higher Studies</h4>
                </div>
                <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                  Continuous guidance for GATE, GRE, IELTS, and TOEFL exams. Graduates securing admissions in premier Indian and European universities.
                </p>
                <div className="pt-2 text-xs text-[#7A647F]">
                  Alumni in Germany, UK, US &amp; IITs/NITs.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <div className="flex items-center gap-2 text-[#28052B]">
                  <Rocket className="w-4 h-4 text-[#C79628]" />
                  <h4 className="font-bold text-sm">iii. Entrepreneurship</h4>
                </div>
                <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                  Incubation backing via Jyothi TBI (Technology Business Incubator) with seed funding grants from Kerala Startup Mission (KSUM).
                </p>
                <div className="pt-2 text-xs text-[#7A647F]">
                  3 student AI venture prototypes incubated.
                </div>
              </div>
            </div>
          </div>

          {/* c. Facilities */}
          <div id="facilities" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">2.c Department Infrastructure</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Facilities (Lab &amp; Library)
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <div className="flex items-center gap-2 text-[#28052B]">
                  <Laptop className="w-4 h-4 text-[#C79628]" />
                  <h4 className="font-bold text-sm">i. Advanced Laboratories</h4>
                </div>
                <ul className="text-xs text-[#4A384F] space-y-2 font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                    <span><strong>NVIDIA High Performance GPU Cluster:</strong> Multi-GPU workstation nodes optimized for deep neural training, CUDA, and PyTorch.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                    <span><strong>Big Data Analytics Sandbox:</strong> Apache Spark, Hadoop, Kafka streaming architectures for real-time analytics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                    <span><strong>Edge AI &amp; IoT Bay:</strong> Raspberry Pi 5, NVIDIA Jetson Nano kits for autonomous mobile robotics.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <div className="flex items-center gap-2 text-[#28052B]">
                  <Library className="w-4 h-4 text-[#C79628]" />
                  <h4 className="font-bold text-sm">ii. Departmental Library</h4>
                </div>
                <ul className="text-xs text-[#4A384F] space-y-2 font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                    <span>Over 1,200+ specialized volumes covering Neural Networks, Probability Models, Statistical Machine Learning &amp; Cloud.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                    <span>Full digital portal subscription to IEEE Xplore, ACM Digital Library, and Springer Scopus publications.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                    <span>Archive of previous semester project dissertations, code repositories, and patent filing drafts.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* d. Industry tie-up (i. MOUs) */}
          <div id="mous" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">2.d Corporate Partnerships</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Industry Tie-up (MOUs)
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <div className="text-xs font-bold text-[#28052B]">NVIDIA Deep Learning Institute</div>
                <div className="text-[11px] text-[#C79628] font-bold">University Ambassador Program</div>
                <p className="text-[11px] text-[#4A384F]">Hands-on certification workshops in Computer Vision and Transformer Architectures.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <div className="text-xs font-bold text-[#28052B]">Oracle Academy</div>
                <div className="text-[11px] text-[#C79628] font-bold">Cloud &amp; Autonomous Database</div>
                <p className="text-[11px] text-[#4A384F]">Access to Oracle Cloud Infrastructure credits and database design modules.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <div className="text-xs font-bold text-[#28052B]">AWS Academy</div>
                <div className="text-[11px] text-[#C79628] font-bold">Cloud Computing &amp; Machine Learning</div>
                <p className="text-[11px] text-[#4A384F]">Curriculum-aligned cloud certifications and distributed data pipeline training.</p>
              </div>
            </div>
          </div>

          {/* e. Achievements */}
          <div id="achievements" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">2.e Accolades</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Achievements (Student &amp; Staff)
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <h4 className="font-bold text-sm text-[#28052B]">i. Student Achievements</h4>
                <ul className="text-xs text-[#4A384F] space-y-2 font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                    <span><strong>Smart India Hackathon Finalists:</strong> Student AI automated agri-pest diagnostic system selected among top national teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                    <span><strong>IEEE Student Paper Award:</strong> First prize at IEEE International Conference for edge-computing speech emotion detector.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <h4 className="font-bold text-sm text-[#28052B]">ii. Staff Achievements</h4>
                <ul className="text-xs text-[#4A384F] space-y-2 font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                    <span><strong>National Patent Published:</strong> Dr. Deepa V. &amp; team granted patent for "Cognitive Assistive Navigation for Visually Challenged".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                    <span><strong>Best Teacher Award:</strong> 2 faculty recognized with APJ AKTU State Level Faculty Excellence commendations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* f. Research */}
          <div id="research" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">2.f Scholarly Output</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Research (Faculty Research)
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
                <div className="text-2xl font-bold text-[#28052B]">35+</div>
                <div className="text-xs text-[#4A384F] mt-1">Scopus Indexed Papers</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
                <div className="text-2xl font-bold text-[#28052B]">₹42 Lakhs</div>
                <div className="text-xs text-[#4A384F] mt-1">Funded Grants &amp; Projects</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
                <div className="text-2xl font-bold text-[#28052B]">4</div>
                <div className="text-xs text-[#4A384F] mt-1">Patents Filed &amp; Published</div>
              </div>
            </div>
          </div>

          {/* g. Syllabus and curriculum */}
          <div id="syllabus" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">2.g Autonomous CBCS</span>
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                    Syllabus and Curriculum
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#C79628]">Scheme 2024</span>
            </div>

            <div className="space-y-3">
              {[
                { sem: 'Semester 1 & 2', desc: 'Linear Algebra, Calculus, Python for Data Science, Foundations of Artificial Intelligence', link: '#' },
                { sem: 'Semester 3 & 4', desc: 'Data Structures & Algorithms, Object-Oriented Design, Database Systems, Discrete Mathematics', link: '#' },
                { sem: 'Semester 5 & 6', desc: 'Machine Learning, Deep Neural Networks, Big Data Architecture, Computer Vision', link: '#' },
                { sem: 'Semester 7 & 8', desc: 'Natural Language Processing, Cloud MLOps, Reinforcement Learning, Major Capstone Project', link: '#' },
              ].map((s, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-xs text-[#28052B]">{s.sem}</div>
                    <div className="text-[11px] text-[#4A384F] mt-0.5">{s.desc}</div>
                  </div>
                  <button
                    onClick={() => alert(`Downloading Syllabi for ${s.sem}`)}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#C79628]" />
                    <span>Download PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. TAB 3: OTHERS CONTENT */}
      {activeTab === 'others' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-10 animate-fade-in">
          {/* Quick anchor jump pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white rounded-2xl border border-[#E7D6C1] shadow-xs">
            <span className="text-xs font-bold text-[#28052B] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C79628]" />
              <span>Others Sections:</span>
            </span>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <a href="#events" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">a. Department Events</a>
              <a href="#bulletin" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">b. Bulletin</a>
              <a href="#gallery" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">c. Gallery</a>
              <a href="#association" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">d. Association</a>
              <a href="#reach-us" className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A] transition-colors font-medium">e. Reach Us</a>
            </div>
          </div>

          {/* a. Department events */}
          <div id="events" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">3.a Campus Gatherings</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Department Events &amp; Workshops
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <span className="text-[10px] font-bold text-[#C79628] uppercase">Annual Tech Conclave</span>
                <h4 className="font-bold text-sm text-[#28052B]">COGNISCIENCE 2024</h4>
                <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                  36-hour National Generative AI Datathon drawing 450+ engineering innovators across India.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <span className="text-[10px] font-bold text-[#C79628] uppercase">Hands-on Workshop</span>
                <h4 className="font-bold text-sm text-[#28052B]">NVIDIA Jetson Edge BootCamp</h4>
                <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                  Intensive five-day technical boot-camp on TensorRT and embedded computer vision pipelines.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
                <span className="text-[10px] font-bold text-[#C79628] uppercase">Industry Masterclass</span>
                <h4 className="font-bold text-sm text-[#28052B]">LLM Production Deployments</h4>
                <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                  Interactive lecture series delivered by principal data architects from Google Cloud and Microsoft.
                </p>
              </div>
            </div>
          </div>

          {/* b. Department bulletin */}
          <div id="bulletin" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">3.b Department Periodical</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Department Bulletin ("AI Horizons")
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-[#28052B]">AI Horizons – Volume 4, Issue 2 (2024)</div>
                  <div className="text-[11px] text-[#4A384F]">Special Issue: Autonomous Vehicles &amp; LLM Ethics</div>
                </div>
                <button
                  onClick={() => alert("Downloading AI Horizons Vol. 4 Issue 2")}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#C79628]" />
                  <span>PDF</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-[#28052B]">AI Horizons – Volume 4, Issue 1 (2024)</div>
                  <div className="text-[11px] text-[#4A384F]">Special Issue: Deep Learning in Healthcare Diagnostics</div>
                </div>
                <button
                  onClick={() => alert("Downloading AI Horizons Vol. 4 Issue 1")}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#C79628]" />
                  <span>PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* c. Gallery */}
          <div id="gallery" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">3.c Visual Highlights</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  Department Gallery
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#E7D6C1] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
                  alt="High Performance AI Lab"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3 bg-white text-xs font-bold text-[#28052B]">NVIDIA GPU Laboratory</div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#E7D6C1] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
                  alt="AI Datathon Teams"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3 bg-white text-xs font-bold text-[#28052B]">National Datathon 2024</div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#E7D6C1] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop"
                  alt="Robotics & Edge AI Demo"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3 bg-white text-xs font-bold text-[#28052B]">Edge AI Prototyping Showcase</div>
              </div>
            </div>
          </div>

          {/* d. Association */}
          <div id="association" className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">3.d Student Community</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
                  AIDA – Artificial Intelligence &amp; Data Science Association
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
              AIDA is the vibrant student community orchestrating weekly tech talks, competitive coding hackathons, peer tutoring circles, and societal technology outreach initiatives for schools across Thrissur district.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
                <div className="text-xs font-bold text-[#28052B]">President: Er. Nevin Paul</div>
                <div className="text-[11px] text-[#C79628] font-semibold mt-0.5">Final Year AI &amp; DS</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
                <div className="text-xs font-bold text-[#28052B]">Secretary: Er. Sneha M.</div>
                <div className="text-[11px] text-[#C79628] font-semibold mt-0.5">Third Year AI &amp; DS</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
                <div className="text-xs font-bold text-[#28052B]">Faculty In-Charge: Prof. Anoop V.</div>
                <div className="text-[11px] text-[#C79628] font-semibold mt-0.5">Associate Professor</div>
              </div>
            </div>
          </div>

          {/* e. Reach us */}
          <div id="reach-us" className="p-6 sm:p-8 bg-[#28052B] text-white rounded-3xl border border-[#3E1043] shadow-xl space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#431A45]">
              <div className="w-10 h-10 rounded-xl bg-[#390F3B] flex items-center justify-center text-[#DFC06A]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFC06A]">3.e Contact Secretariat</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
                  Reach the Department of AI &amp; DS
                </h3>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed font-light">
              For academic counseling, research collaborations, student internships, or admission inquiries:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-white/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFC06A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Location</div>
                  <div className="text-[11px] text-white/70">Room A-212, Aryabhata Central Block</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#DFC06A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Official Email</div>
                  <div className="text-[11px] text-white/70">aids@jecc.ac.in</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#DFC06A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Direct Desk</div>
                  <div className="text-[11px] text-white/70">+91 4884 259000 (Ext 212)</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AidsDepartmentPage;

