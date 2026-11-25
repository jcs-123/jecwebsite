import React, { useState } from 'react';
import {
  ShieldCheck, Users, GraduationCap, Award, Mail, Phone,
  MapPin, CheckCircle2, Download, Search, Briefcase, Star,
  BookOpen, Compass, School, Sparkles, FileText, Code2, Terminal,
  Layers, Check
} from 'lucide-react';

/* 1. BOS (Board of Studies) Page - Exactly Matching Screenshot */
export const CseBOSPage: React.FC = () => {
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
          The Board of Studies (BOS) for Computer Science &amp; Engineering is the statutory governance body established under the UGC autonomous regulations and approved by the Academic Council. It is responsible for framing curriculum schemes, designing semester syllabi, introducing industry-relevant emerging technologies, and validating continuous evaluation frameworks.
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
                      JT
                    </span>
                    <span>Dr. Jose P. Therattil</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor &amp; Head, Dept. of CSE, Jyothi Engineering College</td>
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
                      VP
                    </span>
                    <span>Dr. Vinod P.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor, Dept. of Computer Applications, CUSAT</td>
                <td className="py-3.5 px-4 text-[#4A384F]">University Nominee (KTU)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">3</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      MK
                    </span>
                    <span>Dr. S. D. Madhu Kumar</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor in Computer Science &amp; Engg, NIT Calicut</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Algorithms &amp; Cloud)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">4</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      UC
                    </span>
                    <span>Dr. Unnikrishnan Cheramangalath</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Assistant Professor in CSE, IIT Palakkad</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Systems &amp; Compilers)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">5</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      SK
                    </span>
                    <span>Mr. Sujith Kumar</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Principal Architect &amp; VP, Infosys Technologies Ltd.</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Industry Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">6</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      AG
                    </span>
                    <span>Mr. Arun George</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Senior Engineering Manager, Microsoft India R&amp;D (Alumnus 2008)</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Distinguished Alumnus</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">7</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      VB
                    </span>
                    <span>Dr. V. D. Biju</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor in CSE, Jyothi Engineering College</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Faculty Member (Internal)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">8</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      SB
                    </span>
                    <span>Prof. Swapna B.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor in CSE, JEC</td>
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
              <span>Formulating syllabi for 4-year B.Tech in Computer Science &amp; Engineering in alignment with ACM/IEEE &amp; NEP 2020.</span>
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
              <span>Approving cutting-edge elective courses in Cloud Native DevOps, High-Performance Computing, and Full-Stack Engineering.</span>
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
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-[#28052B]">
                  BOS 5th Meeting Resolutions (July 2024)
                </div>
                <div className="text-[11px] text-[#4A384F] font-light mt-0.5">
                  Incorporation of Cloud Native Architecture &amp; Generative AI curriculum refinements.
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[11px] font-bold flex items-center gap-1 shrink-0">
                <Check className="w-3 h-3" /> Approved
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-[#28052B]">
                  BOS 4th Meeting Resolutions (December 2023)
                </div>
                <div className="text-[11px] text-[#4A384F] font-light mt-0.5">
                  Introduction of LeetCode competitive coding tracks and AWS Cloud Academy credit structure.
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[11px] font-bold flex items-center gap-1 shrink-0">
                <Check className="w-3 h-3" /> Approved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Department Advisory Board (DAB) Page */
export const CseAdvisoryBoardPage: React.FC = () => {
  const advisors = [
    {
      name: 'Mr. Rajesh Nambiar',
      designation: 'Managing Director & Global Delivery Head, Cognizant India',
      affiliation: 'Global Enterprise IT Leader',
      contribution: 'Advising on large-scale agile software delivery models, GenAI workplace adoption, and campus-to-corporate career transitions.',
    },
    {
      name: 'Dr. Lillykutty Jacob',
      designation: 'Professor (Retd.), Department of Computer Science & Engg, NIT Calicut',
      affiliation: 'Computer Networks & Mobile Computing Stalwart',
      contribution: 'Guiding network protocols curriculum, distributed systems laboratories, and doctoral research advisory frameworks.',
    },
    {
      name: 'Mr. Anoop P. Ambika',
      designation: 'CEO, Kerala Startup Mission (KSUM)',
      affiliation: 'Entrepreneurship & Innovation Catalyst',
      contribution: 'Facilitating student venture funding, hackathon incubation pipelines, and developer community hack-spaces at Jyothi TBI.',
    },
    {
      name: 'Mr. Thomas P. Joseph',
      designation: 'Senior Director of Engineering, Oracle Cloud Infrastructure (OCI)',
      affiliation: 'Cloud Computing & Systems Architecture',
      contribution: 'Mentoring on Kubernetes orchestrations, distributed cloud database architectures, and site reliability engineering (SRE).',
    },
    {
      name: 'Dr. Elizabeth Sherly',
      designation: 'Professor & Director, Digital University Kerala (DUK)',
      affiliation: 'Natural Language Processing & Speech AI Researcher',
      contribution: 'Advising on funded research grant formulations with DST, MeitY, and vernacular speech AI language projects.',
    },
    {
      name: 'Mr. Sandeep Gangadharan',
      designation: 'Staff Security Engineer, Google Cloud Security',
      affiliation: 'Cyber Defense & Cloud Security Specialist',
      contribution: 'Designing practical offensive/defensive cybersecurity labs, secure coding practices, and zero-trust framework courses.',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Department Governance</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Advisory Board (DAB)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Strategic Industry Council
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department Advisory Board (DAB) convenes senior engineering directors, cloud architects from Fortune 500 tech companies, government innovation leads, and premier academic researchers to steer curriculum agility, industry certifications, and student product entrepreneurship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advisors.map((adv, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                  {adv.name}
                </h4>
                <div className="text-xs font-semibold text-[#C79628] mt-0.5">
                  {adv.designation}
                </div>
                <div className="text-[11px] text-[#7A647F]">{adv.affiliation}</div>
              </div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/60">
                {adv.contribution}
              </p>
            </div>
            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E7D6C1] text-[10px] font-semibold text-[#28052B]">
                <CheckCircle2 className="w-3 h-3 text-[#C79628]" /> Strategic Mentor
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* DAB Action Agenda */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-[#28052B] to-[#3B0840] rounded-3xl text-white space-y-4">
        <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#DFC06A]">
          Strategic Priorities &amp; Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/80 font-light">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">Industry Cloud Certifications</div>
            <p>Mandatory integration of AWS Certified Solutions Architect and Azure Developer associate modules into 3rd-year electives.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">Competitive Coding Labs</div>
            <p>Embedding HackerRank/LeetCode competitive problem-solving sessions into core Data Structures & Algorithms coursework.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">Product Innovation Sprints</div>
            <p>Fostering full-stack hackathons in collaboration with Kerala Startup Mission (KSUM) and leading open-source developer communities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. Faculty Members Page */
export const CseFacultyPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const facultyData = [
    {
      name: 'Dr. Jose P. Therattil',
      role: 'Professor & Head of Department',
      qualification: 'Ph.D. (Computer Science), M.Tech (Software Engg)',
      discipline: 'ai',
      disciplineLabel: 'AI & Data Science',
      experience: '24 Years Exp.',
      specialization: 'Deep Learning, Computer Vision, Big Data Architectures, Natural Language Processing',
      email: 'joseptherattil@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 310',
    },
    {
      name: 'Dr. V. D. Biju',
      role: 'Professor',
      qualification: 'Ph.D. (Computer Networks), M.Tech (CSE)',
      discipline: 'networks',
      disciplineLabel: 'Cloud & Networks',
      experience: '21 Years Exp.',
      specialization: 'Software Defined Networking (SDN), Cloud Virtualization, Distributed Systems, IoT Routing',
      email: 'bijuvd@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 311',
    },
    {
      name: 'Prof. Swapna B.',
      role: 'Associate Professor & Member Secretary BOS',
      qualification: 'M.Tech (Computer Science), (Ph.D. pursuing)',
      discipline: 'software',
      disciplineLabel: 'Software Engineering',
      experience: '17 Years Exp.',
      specialization: 'Agile Architectures, Full Stack DevOps, Software Testing & Automated Quality Assurance',
      email: 'swapnab@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 312',
    },
    {
      name: 'Dr. Shaju K. Y.',
      role: 'Associate Professor',
      qualification: 'Ph.D. (Cyber Security), M.Tech (Network Security)',
      discipline: 'security',
      disciplineLabel: 'Cyber Security & Systems',
      experience: '15 Years Exp.',
      specialization: 'Cryptographic Protocols, Malware Analysis, Zero-Trust Architecture, Network Forensics',
      email: 'shajuky@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 313',
    },
    {
      name: 'Prof. Anju Antony',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Computer Science & Engineering)',
      discipline: 'ai',
      disciplineLabel: 'AI & Data Science',
      experience: '11 Years Exp.',
      specialization: 'Machine Learning Algorithms, Predictive Analytics, Medical Image Processing',
      email: 'anjuantony@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 314',
    },
    {
      name: 'Prof. Lisha Varghese',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Distributed Computing)',
      discipline: 'networks',
      disciplineLabel: 'Cloud & Networks',
      experience: '10 Years Exp.',
      specialization: 'Microservices Architecture, Docker & Kubernetes Containers, Cloud-Native Applications',
      email: 'lishavarghese@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 315',
    },
    {
      name: 'Prof. Jisha Akkara',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Computer Vision & Image Processing)',
      discipline: 'ai',
      disciplineLabel: 'AI & Data Science',
      experience: '9 Years Exp.',
      specialization: 'Generative Adversarial Networks (GANs), Pattern Recognition, Autonomous Perception',
      email: 'jishaakkara@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 316',
    },
    {
      name: 'Prof. Sreejith R.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Cyber Security & Digital Forensics)',
      discipline: 'security',
      disciplineLabel: 'Cyber Security & Systems',
      experience: '8 Years Exp.',
      specialization: 'Penetration Testing, Ethical Hacking, Blockchain Smart Contracts, Reverse Engineering',
      email: 'sreejithr@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 317',
    },
    {
      name: 'Prof. Reshma K. R.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Software Engineering)',
      discipline: 'software',
      disciplineLabel: 'Software Engineering',
      experience: '7 Years Exp.',
      specialization: 'Compiler Design, Design Patterns, Database Management Systems, React/Node.js Frameworks',
      email: 'reshmakr@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 318',
    },
    {
      name: 'Prof. Binu V. P.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (CSE - Algorithms)',
      discipline: 'software',
      disciplineLabel: 'Software Engineering',
      experience: '6 Years Exp.',
      specialization: 'Graph Theory, Randomized Algorithms, Parallel & Distributed Computing, Competitive Coding',
      email: 'binuvp@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 319',
    },
  ];

  const filteredFaculty = facultyData.filter(f => {
    const matchesFilter = filter === 'all' || f.discipline === filter;
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) ||
                          f.specialization.toLowerCase().includes(search.toLowerCase()) ||
                          f.role.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Academic Directory</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Faculty Members
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            28 Faculty Members
          </span>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { id: 'all', label: 'All Fields' },
              { id: 'ai', label: 'AI & Data Science' },
              { id: 'networks', label: 'Cloud & Networks' },
              { id: 'security', label: 'Cyber Security & Systems' },
              { id: 'software', label: 'Software Engineering' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer font-medium ${
                  filter === tab.id
                    ? 'bg-[#28052B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1] hover:bg-[#E7D6C1]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#7A647F]" />
            <input
              type="text"
              placeholder="Search faculty or domain..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-[#E7D6C1] bg-[#FAF7F2] text-[#28052B] focus:outline-none focus:border-[#C79628]"
            />
          </div>
        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((f, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-base shadow-sm">
                  {f.name.split(' ').slice(1).map(n => n[0]).join('') || 'CS'}
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  {f.experience}
                </span>
              </div>

              <div>
                <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                  {f.name}
                </h4>
                <div className="text-xs font-semibold text-[#C79628]">{f.role}</div>
                <div className="text-[11px] text-[#7A647F] mt-0.5">{f.qualification}</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs space-y-1">
                <div className="font-bold text-[#28052B]">{f.disciplineLabel}</div>
                <p className="text-[11px] text-[#4A384F] font-light leading-relaxed">
                  <strong>Specialization:</strong> {f.specialization}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E7D6C1] text-xs space-y-1.5 text-[#4A384F]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C79628] shrink-0" />
                <span className="truncate text-[11px]">{f.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C79628] shrink-0" />
                <span className="text-[11px]">{f.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Non Teaching Staff Page */
export const CseNonTeachingPage: React.FC = () => {
  const staff = [
    {
      name: 'Mr. Binoj K. B.',
      designation: 'Senior Systems Administrator',
      lab: 'Central Server Room & High-Performance Computing Cluster',
      qualification: 'MCA, Red Hat Certified Engineer (RHCE)',
      experience: '19 Years Experience',
      responsibilities: 'Managing 10-Gbps campus fiber backbone, Dell PowerEdge rack servers, VMware ESXi hypervisors, and college LDAP directory services.',
    },
    {
      name: 'Mr. Santhosh P. C.',
      designation: 'Hardware & Network Specialist',
      lab: 'Cloud Computing & Cyber Security Laboratories',
      qualification: 'B.Sc. Computer Science, CCNA Certified',
      experience: '16 Years Experience',
      responsibilities: 'Administering Cisco managed Layer-3 switches, FortiGate 500E firewalls, virtualized lab pods, and Kali Linux penetration testing environments.',
    },
    {
      name: 'Ms. Reena V. J.',
      designation: 'Software Lab Programmer',
      lab: 'Full Stack Web & DevOps Development Lab',
      qualification: 'B.Tech IT, AWS Certified Cloud Practitioner',
      experience: '12 Years Experience',
      responsibilities: 'Deploying Docker daemon instances, GitLab runners, Jenkins CI/CD automation pipelines, and student programming sandboxes.',
    },
    {
      name: 'Mr. Roy Thomas',
      designation: 'Technical Assistant',
      lab: 'Data Science & Machine Learning Lab',
      qualification: 'Diploma in Computer Hardware & Maintenance',
      experience: '10 Years Experience',
      responsibilities: 'Maintaining 60 Nvidia RTX GPU workstations, CUDA toolkits, PyTorch/TensorFlow environments, and JupyterLab servers.',
    },
    {
      name: 'Ms. Sheena P. A.',
      designation: 'Lab Instructor',
      lab: 'Object Oriented Programming & Data Structures Lab',
      qualification: 'B.Sc. Electronics, Oracle Certified Java Programmer',
      experience: '14 Years Experience',
      responsibilities: 'Coordinating C++/Java/Python practical sessions, university online exam server setup, and automated evaluation scripts.',
    },
    {
      name: 'Mr. Lijo Davis',
      designation: 'Department Office Secretary',
      lab: 'CSE Department Secretariat',
      qualification: 'B.Com, PGDCA',
      experience: '11 Years Experience',
      responsibilities: 'Student records management, autonomous examination liaison, attendance consolidation, and department communications.',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Infrastructure & Technical Support</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Non Teaching Staff
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            6 Dedicated Professionals
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Our certified systems engineers and laboratory programmers maintain over 500 connected terminals, multi-core server racks, GPU deep learning clusters, and high-speed gigabit networking infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((st, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  {st.experience}
                </span>
              </div>
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                {st.name}
              </h4>
              <div className="text-xs font-semibold text-[#C79628]">{st.designation}</div>
              <div className="text-[11px] text-[#7A647F] font-medium">{st.lab}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/60">
                {st.responsibilities}
              </p>
            </div>
            <div className="pt-2 text-[10.5px] font-mono text-[#7A647F] bg-[#FAF7F2] p-2 rounded-xl border border-[#E7D6C1]">
              {st.qualification}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 5. Adjunct Faculty Page */
export const CseAdjunctFacultyPage: React.FC = () => {
  const adjuncts = [
    {
      name: 'Dr. C. Mohan',
      designation: 'Former IBM Fellow (Silicon Valley) & Distinguished Professor',
      qualification: 'Ph.D. (UT Austin), ACM Fellow, IEEE Fellow, NAE Member',
      domain: 'Distributed Database Systems, Blockchain & Consensus Protocols',
      association: 'Distinguished international speaker conducting masterclasses on Distributed Transaction Processing and Cloud Databases.',
      sessions: 'Modern Cloud Databases, Fault-Tolerant Architectures, and Multi-Cloud Resiliency',
    },
    {
      name: 'Mr. Jaison Mathew',
      designation: 'Principal Solutions Architect, Amazon Web Services (AWS)',
      qualification: 'M.S. Software Systems (BITS Pilani)',
      domain: 'Serverless Architectures, Event-Driven Systems & Microservices',
      association: 'Industry Fellow directing practical AWS Cloud Architect certifications and student capstone design studios.',
      sessions: 'Designing Event-Driven Microservices with AWS Lambda, DynamoDB, and Kubernetes EKS',
    },
    {
      name: 'Dr. Rahul V. K.',
      designation: 'Principal Applied Scientist, Microsoft AI Research',
      qualification: 'Ph.D. (IIT Bombay)',
      domain: 'Large Language Models (LLMs), Retrieval Augmented Generation (RAG)',
      association: 'Mentoring high-achieving undergraduate researchers on fine-tuning Transformer models and prompt engineering frameworks.',
      sessions: 'Foundation Models, Quantization, and Real-Time Low-Latency Neural Inference',
    },
    {
      name: 'Mr. Sudheesh K. S.',
      designation: 'Chief Information Security Officer (CISO), Federal Bank',
      qualification: 'M.Tech Cyber Security, CISSP, CISA',
      domain: 'Banking Fintech Security, Threat Hunting & Incident Response',
      association: 'Conducting intensive red-team / blue-team cyber drill simulations and secure fintech software engineering modules.',
      sessions: 'PCI-DSS Compliance, Zero-Day Vulnerability Mitigation, and Threat Intelligence',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <School className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Global Tech Fellows</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Adjunct Faculty
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Industry Practitioners &amp; Silicon Valley Fellows
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Adjunct faculty members from AWS, Microsoft AI, IBM Research, and premier banking cybersecurity teams bring enterprise architectures, industrial coding standards, and cutting-edge tech stacks directly to our lecture halls.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adjuncts.map((adj, idx) => (
          <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
                  {adj.name}
                </h4>
                <div className="text-xs font-semibold text-[#C79628]">{adj.designation}</div>
                <div className="text-[11px] text-[#7A647F]">{adj.qualification}</div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#28052B]">
                Visiting Mentor
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs space-y-1.5">
              <div className="font-bold text-[#28052B]">{adj.domain}</div>
              <p className="text-[#4A384F] font-light leading-relaxed">{adj.association}</p>
            </div>

            <div className="pt-2 text-xs text-[#7A647F]">
              <span className="font-semibold text-[#28052B]">Key Masterclass Series:</span> {adj.sessions}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 6. Student List Page */
export const CseStudentListPage: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>('2021-25');

  const batches: Record<string, { year: string; strength: number; reps: string[]; sections: string; students: { roll: string; name: string; track: string }[] }> = {
    '2021-25': {
      year: 'Final Year (Semester VII & VIII)',
      strength: 180,
      reps: ['Adithya Krishna', 'Fathima Zahra', 'Kiran V. Kumar'],
      sections: 'Divisions A, B & C (60 students each)',
      students: [
        { roll: 'JEC21CS001', name: 'Aashik Nambiar', track: 'AI & Machine Learning Track' },
        { roll: 'JEC21CS002', name: 'Abhijith V. Menon', track: 'Full Stack Web & DevOps' },
        { roll: 'JEC21CS003', name: 'Adithya Krishna', track: 'Honours in Cloud Computing' },
        { roll: 'JEC21CS004', name: 'Aishwarya Rajesh', track: 'Cyber Security & Forensics' },
        { roll: 'JEC21CS005', name: 'Alan Jose P.', track: 'Honours in AI & Data Science' },
        { roll: 'JEC21CS006', name: 'Ananya S. Kumar', track: 'Full Stack Web & DevOps' },
        { roll: 'JEC21CS007', name: 'Fathima Zahra', track: 'Honours in Cloud Computing' },
        { roll: 'JEC21CS008', name: 'Gokul Chandran', track: 'Cyber Security & Forensics' },
        { roll: 'JEC21CS009', name: 'Kiran V. Kumar', track: 'Honours in AI & Data Science' },
        { roll: 'JEC21CS010', name: 'Maria Teresa Joy', track: 'Full Stack Web & DevOps' },
        { roll: 'JEC21CS011', name: 'Naveen Raj P.', track: 'AI & Machine Learning Track' },
        { roll: 'JEC21CS012', name: 'Rohit Balakrishnan', track: 'Honours in Cloud Computing' },
      ],
    },
    '2022-26': {
      year: 'Third Year (Semester V & VI)',
      strength: 180,
      reps: ['Devanand K.', 'Megha Paul', 'Siddharth M.'],
      sections: 'Divisions A, B & C (60 students each)',
      students: [
        { roll: 'JEC22CS001', name: 'Abhinav S.', track: 'Honours in AI & Data Science' },
        { roll: 'JEC22CS002', name: 'Akshaya Nair', track: 'Cyber Security Track' },
        { roll: 'JEC22CS003', name: 'Devanand K.', track: 'Cloud & DevOps Track' },
        { roll: 'JEC22CS004', name: 'Megha Paul', track: 'Honours in AI & Data Science' },
        { roll: 'JEC22CS005', name: 'Midhun Joy', track: 'Full Stack Development' },
        { roll: 'JEC22CS006', name: 'Rohan Varghese', track: 'Cloud & DevOps Track' },
        { roll: 'JEC22CS007', name: 'Siddharth M.', track: 'Honours in Cyber Security' },
        { roll: 'JEC22CS008', name: 'Swetha K. S.', track: 'AI & Data Science Track' },
      ],
    },
    '2023-27': {
      year: 'Second Year (Semester III & IV)',
      strength: 180,
      reps: ['Arjun Ramesh', 'Haripriya V.', 'Joel Mathew'],
      sections: 'Divisions A, B & C (60 students each)',
      students: [
        { roll: 'JEC23CS001', name: 'Adarsh S. Pillai', track: 'Standard Track' },
        { roll: 'JEC23CS002', name: 'Arjun Ramesh', track: 'Honours Track Eligible' },
        { roll: 'JEC23CS003', name: 'Blessy Maria', track: 'Standard Track' },
        { roll: 'JEC23CS004', name: 'Haripriya V.', track: 'Honours Track Eligible' },
        { roll: 'JEC23CS005', name: 'Joel Mathew', track: 'Honours Track Eligible' },
        { roll: 'JEC23CS006', name: 'Nikhil K. B.', track: 'Standard Track' },
        { roll: 'JEC23CS007', name: 'Roshni Thomas', track: 'Honours Track Eligible' },
        { roll: 'JEC23CS008', name: 'Varun Nair', track: 'Standard Track' },
      ],
    },
    '2024-28': {
      year: 'First Year (Autonomous Batch - Sem I & II)',
      strength: 180,
      reps: ['Ashwin Paul', 'Gauri Nandana', 'Kavya S.'],
      sections: 'Divisions A, B & C (60 students each)',
      students: [
        { roll: 'JEC24CS001', name: 'Aaron George', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24CS002', name: 'Anjana Rajesh', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24CS003', name: 'Ashwin Paul', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24CS004', name: 'Gauri Nandana', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24CS005', name: 'Kavya S.', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24CS006', name: 'Mohammed Rayan', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24CS007', name: 'Sneha Treesa', track: 'Autonomous Scheme 2024' },
      ],
    },
  };

  const currentBatch = batches[selectedBatch];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Enrolled Technologists</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Student List
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            4 Batches • 720 Active Students
          </span>
        </div>

        {/* Batch selector tabs */}
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          {Object.keys(batches).map(batchKey => (
            <button
              key={batchKey}
              onClick={() => setSelectedBatch(batchKey)}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer font-bold ${
                selectedBatch === batchKey
                  ? 'bg-[#28052B] text-white shadow-xs'
                  : 'bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1] hover:bg-[#E7D6C1]/40'
              }`}
            >
              Batch {batchKey} ({batches[batchKey].year.split(' ')[0]} Year)
            </button>
          ))}
        </div>
      </div>

      {/* Batch Overview Banner */}
      <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase font-bold text-[#C79628] tracking-widest">Cohort Details</div>
          <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
            {currentBatch.year}
          </h3>
          <p className="text-xs text-[#7A647F] mt-0.5">
            Class Reps: <strong className="text-[#28052B]">{currentBatch.reps.join(', ')}</strong> • {currentBatch.sections}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-2xl font-bold text-[#28052B]">{currentBatch.strength}</div>
            <div className="text-[11px] text-[#7A647F]">Total Enrolled</div>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-bold text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] transition-all cursor-pointer">
            <Download className="w-4 h-4" /> Export Nominal Roll
          </button>
        </div>
      </div>

      {/* Student Table */}
      <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#E7D6C1] rounded-2xl overflow-hidden">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Sl. No.</th>
                <th className="py-3 px-4 font-semibold">Register Number</th>
                <th className="py-3 px-4 font-semibold">Student Name</th>
                <th className="py-3 px-4 font-semibold">Specialization / Track</th>
                <th className="py-3 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-[#FAF7F2]/40">
              {currentBatch.students.map((st, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-4 font-bold text-[#28052B]">{idx + 1}</td>
                  <td className="py-2.5 px-4 font-mono font-medium text-[#4A384F]">{st.roll}</td>
                  <td className="py-2.5 px-4 font-bold text-[#28052B]">{st.name}</td>
                  <td className="py-2.5 px-4">
                    <span className="px-2 py-0.5 rounded-full bg-[#DFC06A]/20 text-[#28052B] font-semibold text-[10.5px]">
                      {st.track}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Enrolled
                  </td>
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
export const CseAlumniPage: React.FC = () => {
  const alumni = [
    {
      name: 'Mr. Arun George',
      batch: 'Batch of 2004–08',
      role: 'Senior Engineering Manager, Microsoft Azure, Redmond, USA',
      qualification: 'B.Tech CSE, M.S. Computer Science (Georgia Tech)',
      achievement: 'Leading core distributed storage microservices powering Azure Blob Storage and Cosmos DB globally.',
    },
    {
      name: 'Ms. Divya Menon',
      batch: 'Batch of 2011–15',
      role: 'Staff Software Engineer, Google Cloud AI, Munich, Germany',
      qualification: 'B.Tech CSE (First Rank)',
      achievement: 'Key contributor to Google Cloud Vertex AI Model Garden and multilingual speech recognition models.',
    },
    {
      name: 'Mr. Vivek Ramakrishnan',
      batch: 'Batch of 2013–17',
      role: 'Co-Founder & CTO, CodeFlow Technologies (Y-Combinator W21)',
      qualification: 'B.Tech CSE',
      achievement: 'Bootstrapped automated API documentation platform scaled to over 250,000 developers worldwide with $4M in seed funding.',
    },
    {
      name: 'Ms. Anjali S. Nair',
      batch: 'Batch of 2015–19',
      role: 'Vice President - Cloud Security Architect, Goldman Sachs, Bengaluru',
      qualification: 'B.Tech CSE, CISSP',
      achievement: 'Architects global identity access management and cryptographic payment authentication microservices.',
    },
    {
      name: 'Mr. Kevin Joy',
      batch: 'Batch of 2016–20',
      role: 'Senior Software Engineer, Amazon Web Services (AWS), Seattle, USA',
      qualification: 'B.Tech CSE',
      achievement: 'Core engineering team member for Amazon Elastic Container Service (Amazon ECS) and Fargate compute engine.',
    },
    {
      name: 'Ms. Reshma Thomas',
      batch: 'Batch of 2018–22',
      role: 'Data Scientist, Oracle Corporation, Bengaluru',
      qualification: 'B.Tech CSE',
      achievement: 'Received Oracle Innovation Award 2023 for generative SQL query optimizer reducing enterprise latency by 38%.',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Global Tech Pioneers</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Distinguished Alumni
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Global Tech Leaders
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Alumni of the Department of Computer Science & Engineering represent Jyothi at the forefront of the global computing revolution—building operating systems, hyperscale clouds, neural AI architectures, and unicorn venture startups in Silicon Valley, Europe, and India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((al, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm">
                  {al.name.split(' ').slice(-1)[0][0]}
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  {al.batch}
                </span>
              </div>
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                {al.name}
              </h4>
              <div className="text-xs font-semibold text-[#28052B]">{al.role}</div>
              <div className="text-[11px] text-[#7A647F]">{al.qualification}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/60">
                {al.achievement}
              </p>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#C79628]">
                <Star className="w-3.5 h-3.5" /> Alumni Mentor Network
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
