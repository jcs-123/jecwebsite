import React, { useState } from 'react';
import {
  ShieldCheck, Users, GraduationCap, Award, Mail, Phone,
  MapPin, CheckCircle2, Download, Search, Briefcase, Star,
  BookOpen, Compass, School, Sparkles, FileText, Layers, Check
} from 'lucide-react';

/* 1. BOS (Board of Studies) Page - Matching AI & DS Luxury Style */
export const BshBOSPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. Section Title & Description Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Board of Studies (BOS)
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>

        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Board of Studies (BOS) for Basic Science &amp; Humanities is the statutory academic governance authority established under UGC autonomous regulations. It oversees the foundational academic courses undertaken by all first-year B.Tech students across all engineering branches, including Linear Algebra, Calculus, Engineering Physics, Engineering Chemistry, Professional Communication, and Environmental Science.
        </p>
      </div>

      {/* 2. BOS Committee Members Table Card */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-xs space-y-5">
        <div className="flex items-center justify-between pb-2">
          <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
            BOS Committee Members
          </h3>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E5D7B7] text-xs font-semibold text-[#28052B]">
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
                      UN
                    </span>
                    <span>Dr. Usha Nair</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor &amp; Head, Dept. of BSH, Jyothi Engineering College</td>
                <td className="py-3.5 px-4">
                  <span className="px-3 py-1 rounded-full bg-[#F7EED8] text-[#8C6826] font-bold text-xs">
                    Chairman
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">2</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      PS
                    </span>
                    <span>Dr. P. G. Sankaran</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Pro Vice-Chancellor &amp; Professor of Statistics, CUSAT</td>
                <td className="py-3.5 px-4 text-[#4A384F]">University Nominee (KTU)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">3</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      KS
                    </span>
                    <span>Dr. K. S. Sajan</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor of Physics, University of Calicut</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Physics)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">4</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      SP
                    </span>
                    <span>Dr. Sunoj P. R.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor of Chemistry, IIT Bombay</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Chemistry)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">5</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      GV
                    </span>
                    <span>Dr. Georgekutty V. V.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Former Controller of Examinations, University of Calicut</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Academic Expert (Mathematics)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">6</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      MH
                    </span>
                    <span>Dr. Meera Harikrishnan</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Head of Soft Skills &amp; Talent Development, Infosys Ltd.</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Industry Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">7</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      VP
                    </span>
                    <span>Dr. Vinod P.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor in Mathematics, Dept. of BSH, JEC</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Faculty Member (Internal)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">8</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      RJ
                    </span>
                    <span>Dr. Renju Joseph</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor in Chemistry, Dept. of BSH, JEC</td>
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
              <span>Framing rigorous foundational science and humanities curricula aligned with NEP 2020 for all first-year B.Tech cohorts.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Establishing modern computational laboratory modules (Python, Scilab) within Engineering Mathematics courses.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Designing interdisciplinary experiments in laser optics, materials chemistry, spectroscopy, and phonetics communication.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Recommending qualified panels of external question paper setters and evaluators for autonomous semester examinations.</span>
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
                Incorporation of Python and Scilab computational modeling in MAT101 Linear Algebra and Calculus.
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
                Introduction of AI-assisted phonetics diagnostic software in Digital Language &amp; Communication Lab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Faculty Members Page */
export const BshFacultyPage: React.FC = () => {
  const [filterSpec, setFilterSpec] = useState('all');

  const facultyList = [
    { name: 'Dr. Usha Nair', role: 'Professor & Head', dept: 'Mathematics', qual: 'Ph.D. in Fluid Dynamics', exp: '24 Years', email: 'ushanair@jecc.ac.in', spec: 'Differential Equations, Boundary Value Problems', cat: 'math', initials: 'UN' },
    { name: 'Dr. Vinod P.', role: 'Associate Professor', dept: 'Mathematics', qual: 'Ph.D. in Graph Theory', exp: '17 Years', email: 'vinodp@jecc.ac.in', spec: 'Spectral Graph Theory, Discrete Mathematics', cat: 'math', initials: 'VP' },
    { name: 'Dr. Renju Joseph', role: 'Associate Professor', dept: 'Chemistry', qual: 'Ph.D. in Polymer Chemistry', exp: '15 Years', email: 'renju@jecc.ac.in', spec: 'Nanomaterials, Conducting Polymers, Green Chemistry', cat: 'chem', initials: 'RJ' },
    { name: 'Dr. Shaju K. S.', role: 'Associate Professor', dept: 'Physics', qual: 'Ph.D. in Thin Film Physics', exp: '16 Years', email: 'shajuks@jecc.ac.in', spec: 'Optoelectronic Devices, Semiconductor Physics', cat: 'phy', initials: 'SK' },
    { name: 'Prof. Minu Jose', role: 'Assistant Professor', dept: 'Mathematics', qual: 'M.Sc., M.Phil., Ph.D. (Pursuing)', exp: '11 Years', email: 'minujose@jecc.ac.in', spec: 'Linear Algebra, Numerical Analysis', cat: 'math', initials: 'MJ' },
    { name: 'Prof. Jency C. J.', role: 'Assistant Professor', dept: 'Physics', qual: 'M.Sc. Physics, B.Ed.', exp: '10 Years', email: 'jency@jecc.ac.in', spec: 'Fiber Optics, Laser Technology', cat: 'phy', initials: 'JJ' },
    { name: 'Prof. Priya K. V.', role: 'Assistant Professor', dept: 'Chemistry', qual: 'M.Sc. Applied Chemistry', exp: '9 Years', email: 'priyakv@jecc.ac.in', spec: 'Environmental Science, Water Treatment Technology', cat: 'chem', initials: 'PK' },
    { name: 'Prof. Jasmine Jose', role: 'Assistant Professor', dept: 'Humanities & English', qual: 'M.A. English, B.Ed., SET', exp: '12 Years', email: 'jasmine@jecc.ac.in', spec: 'Corporate Communication, Phonetics, English for Engineers', cat: 'hum', initials: 'JJ' },
    { name: 'Prof. Arun M.', role: 'Assistant Professor', dept: 'Humanities & Economics', qual: 'M.A. Economics, MBA', exp: '8 Years', email: 'arunm@jecc.ac.in', spec: 'Engineering Economics, Project Management & Ethics', cat: 'hum', initials: 'AM' },
  ];

  const filtered = filterSpec === 'all'
    ? facultyList
    : facultyList.filter(f => f.cat === filterSpec);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Faculty Members
            </h2>
            <div className="flex-1 h-px bg-[#DFC06A]/40 hidden md:block" />
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E5D7B7] text-xs font-semibold text-[#28052B] shadow-2xs">
            {facultyList.length} Dedicated Scholars
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Basic Science &amp; Humanities brings together accomplished doctorates and subject experts across Mathematics, Physics, Chemistry, and Professional English, providing students with rigorous scientific and verbal preparation.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs text-[#7A647F] font-semibold mr-1">Discipline:</span>
          {[
            { id: 'all', label: 'All Faculty' },
            { id: 'math', label: 'Mathematics' },
            { id: 'phy', label: 'Physics' },
            { id: 'chem', label: 'Chemistry' },
            { id: 'hum', label: 'Humanities & English' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilterSpec(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filterSpec === tab.id
                  ? 'bg-[#28052B] text-white shadow-xs font-bold'
                  : 'bg-white text-[#28052B] border border-[#E5D7B7] hover:bg-[#FAF7F2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((f, i) => (
          <div key={i} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs hover:border-[#C79628] transition-all space-y-3.5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                    {f.initials}
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] leading-tight">
                      {f.name}
                    </h4>
                    <div className="text-xs font-semibold text-[#C79628] mt-0.5">
                      {f.role} ({f.dept})
                    </div>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E7D6C1] text-[#28052B] font-mono font-bold shrink-0">
                  {f.exp}
                </span>
              </div>

              <div className="text-xs text-[#4A384F] font-light">{f.qual}</div>
              <div className="text-[11px] text-[#7A647F] pt-2 border-t border-[#E7D6C1]/70">
                Specialization: <strong className="text-[#28052B] font-semibold">{f.spec}</strong>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E7D6C1]/70 flex items-center justify-between text-xs text-[#28052B]">
              <a
                href={`mailto:${f.email}`}
                className="inline-flex items-center gap-1.5 text-[#C79628] hover:text-[#28052B] font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{f.email}</span>
              </a>
              <span className="text-[10px] text-[#7A647F] font-mono">Decennial Block</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 3. Adjunct Faculty Page */
export const BshAdjunctFacultyPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Adjunct &amp; Visiting Faculty
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department regularly brings in distinguished mathematicians, applied physicists, and corporate communications coaches as Adjunct Faculty to inspire first-year engineering students and mentor student research papers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm shadow-xs">
              AK
            </div>
            <div>
              <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B]">Dr. Achuthsankar S. Nair</h4>
              <div className="text-xs font-semibold text-[#C79628]">Former Head, Dept. of Computational Biology, Univ. of Kerala</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Conducts specialized lecture sessions on Mathematical Thinking, Historical Foundations of Computational Sciences, and Universal Human Values for all engineering freshers.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F]">
            <strong className="text-[#28052B]">Special Lecture:</strong> "The Poetry of Mathematics in Engineering Architecture"
          </div>
        </div>

        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm shadow-xs">
              MR
            </div>
            <div>
              <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B]">Dr. M. R. Anantharaman</h4>
              <div className="text-xs font-semibold text-[#C79628]">Professor Emeritus of Physics, Cochin University of Science &amp; Technology</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Advises on advanced experimental setups in magnetism, nanoscience, and quantum material behavior. Mentors faculty on DST-SERB and CSIR research grant proposals.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F]">
            <strong className="text-[#28052B]">Special Lecture:</strong> "Frontiers of Magnetic Nanoparticles in Engineering Systems"
          </div>
        </div>
      </div>
    </div>
  );
};

/* 4. Student List Page */
export const BshStudentListPage: React.FC = () => {
  const [selectedDiv, setSelectedDiv] = useState<'divA' | 'divB' | 'divC' | 'divD'>('divA');

  const divisions = {
    divA: { name: 'First Year – Division A (CSE & AI)', total: 64, mentor: 'Dr. Vinod P. (Mathematics)', rep: 'Abhiram M. & Sandra S.' },
    divB: { name: 'First Year – Division B (ECE & EEE)', total: 62, mentor: 'Dr. Renju Joseph (Chemistry)', rep: 'Gokul K. & Devika R.' },
    divC: { name: 'First Year – Division C (ME & MCT)', total: 58, mentor: 'Dr. Shaju K. S. (Physics)', rep: 'Basil Paul & Ananya N.' },
    divD: { name: 'First Year – Division D (CE & Cyber)', total: 60, mentor: 'Prof. Jasmine Jose (English)', rep: 'Nikhil T. & Sneha P.' },
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Student List &amp; Mentorship Batches
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Basic Science &amp; Humanities mentors and monitors the academic transition of all first-year B.Tech students entering Jyothi Engineering College. Every student is mapped to a dedicated faculty counselor for academic guidance and induction.
        </p>

        {/* Division Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {(Object.keys(divisions) as Array<keyof typeof divisions>).map((key) => {
            const d = divisions[key];
            const isActive = selectedDiv === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedDiv(key)}
                className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#28052B] text-white border-[#28052B] shadow-xs'
                    : 'bg-white border-[#E7D6C1] hover:bg-[#FAF7F2] text-[#28052B]'
                }`}
              >
                <div className={`text-xs font-bold ${isActive ? 'text-[#DFC06A]' : 'text-[#28052B]'}`}>
                  {key.toUpperCase()}
                </div>
                <div className="text-[11px] opacity-80 mt-0.5">{d.total} Students</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Division Roster */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E7D6C1]">
          <div>
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              {divisions[selectedDiv].name}
            </h3>
            <div className="text-xs text-[#7A647F] mt-0.5 font-light">
              Faculty Mentor: <strong className="text-[#28052B] font-semibold">{divisions[selectedDiv].mentor}</strong> • Reps: <strong className="text-[#28052B] font-semibold">{divisions[selectedDiv].rep}</strong>
            </div>
          </div>
          <button
            onClick={() => alert(`Downloading roster for ${divisions[selectedDiv].name}`)}
            className="px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#C79628]" />
            <span>Download Class Roster</span>
          </button>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E7D6C1]/80">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Adm No.</th>
                <th className="py-3 px-4 font-semibold">Student Name</th>
                <th className="py-3 px-4 font-semibold">Branch</th>
                <th className="py-3 px-4 font-semibold">Faculty Mentor</th>
                <th className="py-3 px-4 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-white">
              {[
                { adm: 'JEC2401', name: 'Abhiram M.', branch: 'Computer Science', mentor: 'Dr. Vinod P.', status: 'Enrolled' },
                { adm: 'JEC2402', name: 'Sandra S.', branch: 'Computer Science', mentor: 'Dr. Vinod P.', status: 'Enrolled' },
                { adm: 'JEC2403', name: 'Adithyan C.', branch: 'AI & Data Science', mentor: 'Prof. Minu Jose', status: 'Enrolled' },
                { adm: 'JEC2404', name: 'Bhavana K.', branch: 'AI & Data Science', mentor: 'Prof. Minu Jose', status: 'Enrolled' },
                { adm: 'JEC2405', name: 'Chris Varghese', branch: 'Computer Science', mentor: 'Dr. Vinod P.', status: 'Enrolled' },
                { adm: 'JEC2406', name: 'Diya Mary John', branch: 'AI & Data Science', mentor: 'Prof. Minu Jose', status: 'Enrolled' },
              ].map((s, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-[#28052B]">{s.adm}</td>
                  <td className="py-3 px-4 font-bold text-[#28052B]">{s.name}</td>
                  <td className="py-3 px-4 text-[#4A384F]">{s.branch}</td>
                  <td className="py-3 px-4 text-[#4A384F]">{s.mentor}</td>
                  <td className="py-3 px-4 text-right">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E8F8EE] text-[#1E824C] font-semibold text-[10px]">
                      {s.status}
                    </span>
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

/* 5. Alumni Page */
export const BshAlumniPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Alumni &amp; Foundation Network
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Alumni of Jyothi Engineering College routinely credit the strong analytical rigour, problem-solving habits, and communication skills nurtured during their first year under the Basic Science &amp; Humanities faculty for their leadership success in global corporations and advanced research laboratories.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          { name: 'Er. Mathew V. Cherian', batch: 'Batch of 2012', role: 'Staff Software Architect, Google USA', quote: 'The mathematical foundations in linear algebra and calculus taught by BSH professors gave me the confidence to design complex distributed algorithms.', initials: 'MC' },
          { name: 'Dr. Sneha Rajan', batch: 'Batch of 2015', role: 'Postdoctoral Fellow, Max Planck Institute, Germany', quote: 'My early interest in physics laboratory spectroscopy and thin films sparked during BSH first-year practicals and shaped my career in nanoscience.', initials: 'SR' },
          { name: 'Er. Anand K. Menon', batch: 'Batch of 2018', role: 'Product Lead, Microsoft Azure', quote: 'The interactive Language Lab sessions and debate clubs built my executive presence and communication skills required in multinational product leadership.', initials: 'AM' },
        ].map((al, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-3 flex flex-col justify-between hover:border-[#C79628] transition-all">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                  {al.initials}
                </div>
                <div>
                  <h4 className="font-['Playfair_Display',serif] font-bold text-sm text-[#28052B]">{al.name}</h4>
                  <div className="text-xs font-semibold text-[#C79628]">{al.role}</div>
                  <div className="text-[11px] text-[#7A647F]">{al.batch}</div>
                </div>
              </div>
              <p className="text-xs text-[#4A384F] italic leading-relaxed pt-2 border-t border-[#E7D6C1]/70 font-light">
                "{al.quote}"
              </p>
            </div>
            <div className="pt-2 text-[10px] text-[#C79628] font-bold uppercase tracking-wider">
              Foundation Alumnus
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
