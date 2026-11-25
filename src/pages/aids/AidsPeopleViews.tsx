import React, { useState } from 'react';
import {
  ShieldCheck, UserCheck, Users, Cpu, GraduationCap, Award,
  Mail, Phone, MapPin, ExternalLink, Download, Search, CheckCircle2,
  Calendar, BookOpen, Briefcase, Globe, FileText, Star, Layers,
  Check
} from 'lucide-react';

/* 1. BOS (Board of Studies) Page - Exactly Matching Screenshot */
export const AidsBOSPage: React.FC<{ onOpenApply?: () => void }> = () => {
  return (
    <div className="space-y-7 animate-fade-in">
      {/* 1. Section Title & Description Block matching screenshot */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#28052B] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Users className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 flex items-center gap-4">
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Board of Studies (BOS)
            </h2>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
        </div>

        <p className="text-xs sm:text-[13px] text-[#4A384F] leading-relaxed font-light pl-0 sm:pl-16">
          The Board of Studies (BOS) for Artificial Intelligence &amp; Data Science is the statutory governance body established under the UGC autonomous regulations and approved by the Academic Council. It is responsible for framing curriculum schemes, designing semester syllabi, introducing industry-relevant emerging technologies, and validating continuous evaluation frameworks.
        </p>
      </div>

      {/* 2. BOS Committee Members Table Card */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-xs space-y-5">
        <div className="flex items-center justify-between pb-2">
          <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
            BOS Committee Members
          </h3>
          <span className="px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E5D7B7] text-xs font-semibold text-[#28052B]">
            Tenure: 2024–2027
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E7D6C1]/80">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold w-16 text-center">Sl. No.</th>
                <th className="py-3 px-4 font-semibold">Member</th>
                <th className="py-3 px-4 font-semibold">Designation &amp; Institution</th>
                <th className="py-3 px-4 font-semibold">Role in BOS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-white">
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">1</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      DV
                    </span>
                    <span>Dr. Deepa V.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Head of Department, AI &amp; DS, Jyothi Engineering College</td>
                <td className="py-3.5 px-4 font-semibold">
                  <span className="px-4 py-1 rounded-full bg-[#F7EED8] text-[#8C6826] font-bold text-xs inline-block">
                    Chairman
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">2</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      SM
                    </span>
                    <span>Dr. Sabu M. Thampi</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor, Indian Institute of Information Technology (IIIT-K)</td>
                <td className="py-3.5 px-4 text-[#4A384F]">University Nominee (KTU)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">3</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      ES
                    </span>
                    <span>Dr. Elizabeth Sherly</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Director, Digital University Kerala (IIITM-K)</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Academia)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">4</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      SE
                    </span>
                    <span>Dr. Sudheep Elayidom</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor, Cochin University of Science &amp; Technology (CUSAT)</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Data Mining)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">5</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      AS
                    </span>
                    <span>Mr. Arun Santhosh</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Principal Data Scientist, NVIDIA AI Research India</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Industry Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">6</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      RM
                    </span>
                    <span>Dr. Rahul K. Menon</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">AI Solutions Architect, Amazon Web Services (AWS)</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Distinguished Alumnus</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">7</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      AV
                    </span>
                    <span>Prof. Anoop V.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor, Dept. of AI &amp; DS, JEC</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Faculty Member (Internal)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">8</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      PK
                    </span>
                    <span>Dr. Praveen Kumar S.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor, Dept. of AI &amp; DS, JEC</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Faculty Member (Internal)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Bottom Two Cards Grid: Statutory Functions & Minutes & Key Resolutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card: Statutory Functions */}
        <div className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E7D6C1] shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-2">
            <Layers className="w-5 h-5 text-[#C79628]" />
            <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] tracking-tight">
              Statutory Functions
            </h4>
            <div className="flex-1 h-px bg-[#E5D7B7]" />
          </div>

          <ul className="text-xs text-[#4A384F] space-y-3 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Formulating syllabi for 4-year B.Tech in Artificial Intelligence &amp; Data Science in alignment with NEP 2020.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Establishing credit structure, Choice Based Credit System (CBCS), and Minor/Honors gradation rules.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Recommending panel of question paper setters and subject experts for autonomous end-semester assessments.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Approving cutting-edge elective courses in Generative AI, LLMOps, Deep Reinforcement Learning, and Edge Computing.</span>
            </li>
          </ul>
        </div>

        {/* Right Card: Minutes & Key Resolutions */}
        <div className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E7D6C1] shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-2">
            <FileText className="w-5 h-5 text-[#C79628]" />
            <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] tracking-tight">
              Minutes &amp; Key Resolutions
            </h4>
            <div className="flex-1 h-px bg-[#E5D7B7]" />
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-xs text-[#28052B]">
                  BOS 5th Meeting Resolutions (July 2024)
                </span>
                <span className="px-3 py-0.5 rounded-full bg-[#E8F8EE] text-[#1E824C] border border-[#BDE7CC] text-xs font-semibold inline-flex items-center gap-1 shrink-0">
                  <Check className="w-3 h-3 text-[#1E824C]" />
                  Approved
                </span>
              </div>
              <p className="text-xs text-[#4A384F]">
                Incorporation of Generative AI elective and curriculum refinements.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-xs text-[#28052B]">
                  BOS 4th Meeting Resolutions (December 2023)
                </span>
                <span className="px-3 py-0.5 rounded-full bg-[#E8F8EE] text-[#1E824C] border border-[#BDE7CC] text-xs font-semibold inline-flex items-center gap-1 shrink-0">
                  <Check className="w-3 h-3 text-[#1E824C]" />
                  Approved
                </span>
              </div>
              <p className="text-xs text-[#4A384F]">
                Introduction of NVIDIA Deep Learning electives and credit structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Advisory Board (DAB) Page */
export const AidsAdvisoryBoardPage: React.FC = () => {
  return (
    <div className="space-y-7 animate-fade-in">
      {/* Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#28052B] text-white flex items-center justify-center shrink-0 shadow-xs">
            <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 flex items-center gap-4">
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Department Advisory Board (DAB)
            </h2>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
        </div>

        <p className="text-xs sm:text-[13px] text-[#4A384F] leading-relaxed font-light pl-0 sm:pl-16">
          The Department Advisory Board (DAB) bridges the academic training of AI &amp; DS undergraduates with corporate industry demands, research developments, and global computational technology benchmarks. The board convenes annually to critique departmental progress, review capstone research priorities, and facilitate corporate technology internships.
        </p>
      </div>

      {/* Advisory Board Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-3 flex flex-col justify-between hover:border-[#C79628] transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm shadow-xs">
              BT
            </div>
            <div>
              <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B]">Dr. Binu Thomas</h4>
              <div className="text-xs font-semibold text-[#C79628]">Academic Mentor</div>
              <div className="text-[11px] text-[#4A384F] mt-1">Dean (Academics) &amp; Professor, CSE</div>
            </div>
            <p className="text-xs text-[#7A647F] leading-relaxed pt-2 border-t border-[#E7D6C1]/70 font-light">
              Provides academic strategic vision on autonomous curriculum architecture, outcome-based education (OBE), and student accreditation milestones.
            </p>
          </div>
          <div className="pt-2 text-[10px] text-[#C79628] font-bold uppercase tracking-wider">
            Academic Advisory
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-3 flex flex-col justify-between hover:border-[#C79628] transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm shadow-xs">
              SV
            </div>
            <div>
              <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B]">Mr. Sreekanth Venkataraman</h4>
              <div className="text-xs font-semibold text-[#C79628]">Industry Advisor</div>
              <div className="text-[11px] text-[#4A384F] mt-1">Head of Data &amp; AI Practice, TCS</div>
            </div>
            <p className="text-xs text-[#7A647F] leading-relaxed pt-2 border-t border-[#E7D6C1]/70 font-light">
              Advises on enterprise generative AI pipelines, cloud data engineering standards, and campus recruitment readiness for Tier-1 technology companies.
            </p>
          </div>
          <div className="pt-2 text-[10px] text-[#C79628] font-bold uppercase tracking-wider">
            Enterprise Leadership
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-3 flex flex-col justify-between hover:border-[#C79628] transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm shadow-xs">
              AM
            </div>
            <div>
              <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B]">Dr. Anitha Mary</h4>
              <div className="text-xs font-semibold text-[#C79628]">Research Advisor</div>
              <div className="text-[11px] text-[#4A384F] mt-1">Scientist-E, C-DAC</div>
            </div>
            <p className="text-xs text-[#7A647F] leading-relaxed pt-2 border-t border-[#E7D6C1]/70 font-light">
              Guides faculty research initiatives on high performance computing, national supercomputing missions, and government sponsored grant projects.
            </p>
          </div>
          <div className="pt-2 text-[10px] text-[#C79628] font-bold uppercase tracking-wider">
            Supercomputing Mentor
          </div>
        </div>
      </div>

      {/* Advisory Mandates */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-xs space-y-4">
        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
          DAB Key Objectives &amp; Recommendations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#4A384F]">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
            <span className="font-bold text-[#28052B] flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-[#C79628]" />
              <span>Full-Stack AI Project Incubations</span>
            </span>
            <p className="leading-relaxed">Mandated that 100% of final-year projects implement end-to-end deployed AI architectures with Docker and cloud hosting.</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
            <span className="font-bold text-[#28052B] flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-[#C79628]" />
              <span>Continuous GPU Infrastructure Augmentation</span>
            </span>
            <p className="leading-relaxed">Recommended annual hardware grants to add multi-GPU nodes with CUDA compute capability for LLM fine-tuning.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. Faculty Members Page */
export const AidsFacultyPage: React.FC = () => {
  const [filterSpec, setFilterSpec] = useState('all');

  const facultyList = [
    { name: 'Dr. Deepa V.', role: 'Professor & Head', qual: 'Ph.D. in Deep Learning & NLP', exp: '18 Years', email: 'deepav@jecc.ac.in', spec: 'Deep Learning, NLP, Generative AI', category: 'ai', initials: 'DV' },
    { name: 'Prof. Anoop V.', role: 'Associate Professor', qual: 'M.Tech, Ph.D. (Pursuing)', exp: '14 Years', email: 'anoopv@jecc.ac.in', spec: 'Computer Vision & Medical Imaging', category: 'vision', initials: 'AV' },
    { name: 'Dr. Praveen Kumar S.', role: 'Associate Professor', qual: 'Ph.D. in Big Data Systems', exp: '12 Years', email: 'praveen@jecc.ac.in', spec: 'Distributed Big Data & Graph Mining', category: 'data', initials: 'PK' },
    { name: 'Prof. Neethu Mohan', role: 'Assistant Professor', qual: 'M.Tech (Data Science)', exp: '9 Years', email: 'neethum@jecc.ac.in', spec: 'Predictive Analytics & Statistics', category: 'data', initials: 'NM' },
    { name: 'Prof. Reshma K. R.', role: 'Assistant Professor', qual: 'M.Tech (AI & Robotics)', exp: '7 Years', email: 'reshmak@jecc.ac.in', spec: 'Autonomous Systems & Edge AI', category: 'ai', initials: 'RK' },
    { name: 'Prof. Jithin Jose', role: 'Assistant Professor', qual: 'M.Tech (Software Engg)', exp: '8 Years', email: 'jithinj@jecc.ac.in', spec: 'Cloud ML & MLOps Pipelines', category: 'data', initials: 'JJ' },
    { name: 'Prof. Divya M. S.', role: 'Assistant Professor', qual: 'M.Tech (Computer Science)', exp: '6 Years', email: 'divyams@jecc.ac.in', spec: 'Reinforcement Learning & Neural Nets', category: 'ai', initials: 'DM' },
    { name: 'Prof. Akhil K. B.', role: 'Assistant Professor', qual: 'M.Tech (Data Analytics)', exp: '5 Years', email: 'akhilkb@jecc.ac.in', spec: 'Big Data Streaming & Spark Analytics', category: 'data', initials: 'AK' },
    { name: 'Prof. Nimitha George', role: 'Assistant Professor', qual: 'M.Tech, Ph.D. (Pursuing)', exp: '8 Years', email: 'nimitha@jecc.ac.in', spec: 'Natural Language Processing & Speech', category: 'ai', initials: 'NG' },
  ];

  const filteredFaculty = filterSpec === 'all' 
    ? facultyList 
    : facultyList.filter(f => f.category === filterSpec);

  return (
    <div className="space-y-7 animate-fade-in">
      {/* Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#28052B] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Users className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 flex items-center gap-4">
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Faculty Members
            </h2>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Faculty' },
              { id: 'ai', label: 'AI & Deep Learning' },
              { id: 'data', label: 'Data Science & MLOps' },
              { id: 'vision', label: 'Computer Vision' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterSpec(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filterSpec === tab.id
                    ? 'bg-[#28052B] text-white font-bold shadow-xs'
                    : 'bg-white text-[#28052B] border border-[#E5D7B7] hover:bg-[#FAF7F2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="px-4 py-1 rounded-full bg-[#FAF7F2] border border-[#E5D7B7] text-xs font-mono font-bold text-[#28052B]">
            {filteredFaculty.length} Faculty Members
          </span>
        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredFaculty.map((f, i) => (
          <div key={i} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs hover:border-[#C79628] transition-all space-y-3.5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                    {f.initials}
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">{f.name}</h4>
                    <div className="text-xs font-semibold text-[#C79628]">{f.role}</div>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[#28052B] font-mono font-bold shrink-0">
                  {f.exp}
                </span>
              </div>

              <div className="text-xs text-[#4A384F] font-mono">{f.qual}</div>
              <div className="text-xs text-[#7A647F] leading-relaxed">
                Specialization: <strong className="text-[#28052B]">{f.spec}</strong>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E7D6C1]/70 flex items-center justify-between text-xs text-[#28052B]">
              <a
                href={`mailto:${f.email}`}
                className="inline-flex items-center gap-1.5 text-[#28052B] hover:text-[#C79628] font-mono text-[11px] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C79628]" />
                <span>{f.email}</span>
              </a>
              <span className="text-[10px] text-[#7A647F] font-mono">Cabin: Block C</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Non Teaching Staff Page */
export const AidsNonTeachingPage: React.FC = () => {
  return (
    <div className="space-y-7 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#28052B] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 flex items-center gap-4">
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Non-Teaching Staff
            </h2>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
        </div>

        <p className="text-xs sm:text-[13px] text-[#4A384F] leading-relaxed font-light pl-0 sm:pl-16">
          Our dedicated technical officers and lab instructors maintain uninterrupted operation of the department's GPU clusters, network sandboxes, system images, software license servers, and academic administrative records.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-3 hover:border-[#C79628] transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm shadow-xs">
            SC
          </div>
          <div>
            <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B]">Er. Shaju C. P.</h4>
            <div className="text-xs font-semibold text-[#C79628]">Senior Lab Instructor</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5">High Performance Computing &amp; GPU Lab</div>
          </div>
          <div className="text-xs text-[#7A647F] pt-2 border-t border-[#E7D6C1]/70 space-y-1">
            <div>• Experience: 16 Years</div>
            <div>• Expertise: CUDA, Ubuntu Server, Slurm, Docker</div>
            <div>• In-charge: NVIDIA GPU Cluster</div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-3 hover:border-[#C79628] transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm shadow-xs">
            GK
          </div>
          <div>
            <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B]">Er. Geethu K. B.</h4>
            <div className="text-xs font-semibold text-[#C79628]">Trade Instructor</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5">Data Engineering &amp; Cloud Sandbox</div>
          </div>
          <div className="text-xs text-[#7A647F] pt-2 border-t border-[#E7D6C1]/70 space-y-1">
            <div>• Experience: 9 Years</div>
            <div>• Expertise: Python Environments, PyTorch, Hadoop</div>
            <div>• In-charge: Data Analytics Lab</div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-3 hover:border-[#C79628] transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm shadow-xs">
            TM
          </div>
          <div>
            <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B]">Mr. Thomas Mathew</h4>
            <div className="text-xs font-semibold text-[#C79628]">Department Clerk / Assistant</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5">Academic Affairs &amp; Records Office</div>
          </div>
          <div className="text-xs text-[#7A647F] pt-2 border-t border-[#E7D6C1]/70 space-y-1">
            <div>• Experience: 12 Years</div>
            <div>• Expertise: Autonomous Exam Records, Admissions</div>
            <div>• In-charge: Department Secretariat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 5. Adjunct Faculty Page */
export const AidsAdjunctFacultyPage: React.FC = () => {
  return (
    <div className="space-y-7 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#28052B] text-white flex items-center justify-center shrink-0 shadow-xs">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 flex items-center gap-4">
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Adjunct Faculty
            </h2>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
        </div>

        <p className="text-xs sm:text-[13px] text-[#4A384F] leading-relaxed font-light pl-0 sm:pl-16">
          To expose our undergraduates to world-class research paradigms and frontier generative AI engineering, the department invites renowned scientists from premier institutes and international tech companies as Adjunct Faculty.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-4 hover:border-[#C79628] transition-all">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-base shadow-xs">
              RS
            </div>
            <div>
              <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B]">Dr. Ramnarayan Subramanian</h4>
              <div className="text-xs font-semibold text-[#C79628]">Research Fellow, Indian Institute of Science (IISc Bangalore)</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Conducts specialized 15-hour masterclasses on Reinforcement Learning, Foundation Models, and Quantum Computational Algorithms. Co-mentors undergraduate student research projects targeting IEEE/ACM publications.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F]">
            <strong>Recent Course Module:</strong> "Scalable Transformer Inference &amp; Low-Rank Adaptation (LoRA)"
          </div>
        </div>

        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-4 hover:border-[#C79628] transition-all">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-base shadow-xs">
              VR
            </div>
            <div>
              <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B]">Er. Vigneshwaran R.</h4>
              <div className="text-xs font-semibold text-[#C79628]">Director of Engineering, Applied AI Labs, Singapore</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Provides industry architectural mentoring for capstone projects, reviews production readiness of student ML pipelines, and arranges global internship placements in Southeast Asian tech ecosystems.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F]">
            <strong>Recent Course Module:</strong> "Industrial MLOps &amp; Real-Time Low-Latency Model Serving"
          </div>
        </div>
      </div>
    </div>
  );
};

/* 6. Student List Page */
export const AidsStudentListPage: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<'b21' | 'b22' | 'b23' | 'b24'>('b21');

  const batchData = {
    b21: { name: 'Batch 2021–2025 (Final Year S7/S8)', total: 59, advisor: 'Prof. Anoop V.', rep: 'Er. Nevin Paul & Er. Ananya K.' },
    b22: { name: 'Batch 2022–2026 (Third Year S5/S6)', total: 63, advisor: 'Prof. Neethu Mohan', rep: 'Er. Sneha M. & Er. Rahul S.' },
    b23: { name: 'Batch 2023–2027 (Second Year S3/S4)', total: 64, advisor: 'Prof. Reshma K. R.', rep: 'Er. Alwin K. & Er. Devika P.' },
    b24: { name: 'Batch 2024–2028 (First Year S1/S2)', total: 62, advisor: 'Prof. Divya M. S.', rep: 'Er. Joel B. & Er. Fathima R.' },
  };

  return (
    <div className="space-y-7 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#28052B] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Users className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 flex items-center gap-4">
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Student List
            </h2>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
        </div>

        <p className="text-xs sm:text-[13px] text-[#4A384F] leading-relaxed font-light pl-0 sm:pl-16">
          Directory of enrolled undergraduates in the Department of Artificial Intelligence &amp; Data Science across all four academic batches under the UGC autonomous curriculum.
        </p>

        {/* Batch Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {(Object.keys(batchData) as Array<keyof typeof batchData>).map((key) => {
            const b = batchData[key];
            const isActive = selectedBatch === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedBatch(key)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#28052B] text-white font-bold shadow-xs'
                    : 'bg-white text-[#28052B] border border-[#E5D7B7] hover:bg-[#FAF7F2]'
                }`}
              >
                {key === 'b21' ? 'Batch 2021–25' : key === 'b22' ? 'Batch 2022–26' : key === 'b23' ? 'Batch 2023–27' : 'Batch 2024–28'} ({b.total})
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Batch Details Card */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E7D6C1]/70">
          <div>
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              {batchData[selectedBatch].name}
            </h3>
            <div className="text-xs text-[#7A647F] mt-0.5">
              Faculty Advisor: <strong className="text-[#28052B]">{batchData[selectedBatch].advisor}</strong> • Reps: <strong className="text-[#28052B]">{batchData[selectedBatch].rep}</strong>
            </div>
          </div>
          <button
            onClick={() => alert(`Downloading student roster for ${batchData[selectedBatch].name}`)}
            className="px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#E5D7B7] text-[#28052B] hover:bg-[#28052B] hover:text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#C79628]" />
            <span>Download Roster (PDF)</span>
          </button>
        </div>

        {/* Student Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#E7D6C1]/80">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Reg. No.</th>
                <th className="py-3 px-4 font-semibold">Student Name</th>
                <th className="py-3 px-4 font-semibold">Semester</th>
                <th className="py-3 px-4 font-semibold">Honor / Specialization Track</th>
                <th className="py-3 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-white">
              {[
                { reg: 'JEC21AD001', name: 'Aaron George Thomas', sem: selectedBatch === 'b21' ? 'Sem 8' : 'Current', track: 'Deep Learning Honors', status: 'Active' },
                { reg: 'JEC21AD002', name: 'Adithya R. Nair', sem: selectedBatch === 'b21' ? 'Sem 8' : 'Current', track: 'Cloud Data Engineering', status: 'Active' },
                { reg: 'JEC21AD003', name: 'Ananya K.', sem: selectedBatch === 'b21' ? 'Sem 8' : 'Current', track: 'Computer Vision Honors', status: 'Active (Class Rep)' },
                { reg: 'JEC21AD004', name: 'Basil Shaji', sem: selectedBatch === 'b21' ? 'Sem 8' : 'Current', track: 'Robotics & Edge AI', status: 'Active' },
                { reg: 'JEC21AD005', name: 'Catherine Jose', sem: selectedBatch === 'b21' ? 'Sem 8' : 'Current', track: 'NLP & LLMOps', status: 'Active' },
                { reg: 'JEC21AD006', name: 'Nevin Paul', sem: selectedBatch === 'b21' ? 'Sem 8' : 'Current', track: 'Generative AI Honors', status: 'Active (AIDA President)' },
                { reg: 'JEC21AD007', name: 'Sneha M.', sem: selectedBatch === 'b21' ? 'Sem 8' : 'Current', track: 'Predictive Analytics', status: 'Active' },
              ].map((s, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-[#28052B]">{s.reg}</td>
                  <td className="py-3 px-4 font-bold text-[#28052B]">{s.name}</td>
                  <td className="py-3 px-4 text-[#4A384F]">{s.sem}</td>
                  <td className="py-3 px-4 text-[#4A384F]">{s.track}</td>
                  <td className="py-3 px-4 text-emerald-800 font-semibold">{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* 7. Alumni Page */
export const AidsAlumniPage: React.FC = () => {
  return (
    <div className="space-y-7 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#28052B] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 flex items-center gap-4">
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Alumni
            </h2>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
        </div>

        <p className="text-xs sm:text-[13px] text-[#4A384F] leading-relaxed font-light pl-0 sm:pl-16">
          Graduates from Jyothi's AI &amp; DS department are thriving across global technology corporations, high-growth startups, and world-class universities in Europe, North America, and Singapore. The alumni network actively conducts campus mock interviews, hackathon evaluations, and placement mentorship.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { name: 'Er. Akhil Krishnan', batch: 'Batch 2024', role: 'AI Engineer', comp: 'Cognizant AI Labs, Bengaluru', desc: 'Working on fine-tuning enterprise LLMs and retrieval augmented generation (RAG) for healthcare clients.' },
          { name: 'Er. Sandra Maria Jose', batch: 'Batch 2024', role: 'Data Analyst', comp: 'Tata Consultancy Services (TCS), Kochi', desc: 'Specializing in banking analytics, fraud detection models, and predictive risk scoring pipelines.' },
          { name: 'Er. Gokul C.', batch: 'Batch 2024', role: 'M.S. in Artificial Intelligence', comp: 'Technical University of Munich (TUM), Germany', desc: 'Pursuing advanced research on autonomous robotics, lidar point-cloud processing, and perception models.' },
          { name: 'Er. Ritu S. Nair', batch: 'Batch 2024', role: 'Machine Learning Associate', comp: 'Experion Technologies, Trivandrum', desc: 'Building computer vision sorting pipelines for logistics and automated manufacturing clients.' },
          { name: 'Er. Kevin Paul', batch: 'Batch 2024', role: 'Cloud Solutions Engineer', comp: 'Amazon Web Services, Hyderabad', desc: 'Designing high-scale distributed serverless data ingestion pipelines on AWS Lambda and S3.' },
          { name: 'Er. Devika Menon', batch: 'Batch 2024', role: 'Research Scholar', comp: 'Indian Institute of Technology (IIT Madras)', desc: 'Carrying out sponsored MS-by-Research on computational linguistics and multi-lingual Indian speech synthesis.' },
        ].map((al, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-3 hover:border-[#C79628] transition-all flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B]">{al.name}</h4>
                  <div className="text-xs font-semibold text-[#C79628]">{al.role}</div>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 font-mono text-[#28052B] font-bold">
                  {al.batch}
                </span>
              </div>
              <div className="text-xs font-medium text-[#28052B] flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#C79628] shrink-0" />
                <span>{al.comp}</span>
              </div>
              <p className="text-xs text-[#7A647F] leading-relaxed pt-2 border-t border-[#E7D6C1]/70 font-light">
                {al.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
