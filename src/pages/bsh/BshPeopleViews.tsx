import React, { useState } from 'react';
import {
  ShieldCheck, Users, GraduationCap, Award, Mail, Phone,
  MapPin, CheckCircle2, Download, Search, Briefcase, Star,
  BookOpen, Compass, School, Sparkles, FileText
} from 'lucide-react';

/* 1. BOS (Board of Studies) Page */
export const BshBOSPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Statutory Academic Body</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Board of Studies (BOS)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            UGC Autonomous Board
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Board of Studies for Basic Science & Humanities constitutes the statutory academic authority under UGC autonomous regulations. It governs the foundational academic courses taken by all first-year B.Tech students across all engineering disciplines, including Engineering Mathematics, Engineering Physics, Engineering Chemistry, Professional Communication, Universal Human Values, and Environmental Studies.
        </p>
      </div>

      {/* BOS Members Table */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            BOS Committee Members
          </h3>
          <span className="text-xs text-[#7A647F] font-medium">Tenure: 2024–2027</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#E7D6C1] rounded-2xl overflow-hidden">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Sl. No.</th>
                <th className="py-3 px-4 font-semibold">Member Name</th>
                <th className="py-3 px-4 font-semibold">Designation & Institution</th>
                <th className="py-3 px-4 font-semibold">Role in BOS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-[#FAF7F2]/40">
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">1</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Usha Nair</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor & Head, Dept. of BSH, Jyothi Engineering College</td>
                <td className="py-3 px-4 font-bold text-[#C79628]">Chairman</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">2</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. P. G. Sankaran</td>
                <td className="py-3 px-4 text-[#4A384F]">Pro Vice-Chancellor & Professor of Statistics, CUSAT</td>
                <td className="py-3 px-4 text-[#4A384F]">University Nominee (KTU)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">3</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. K. S. Sajan</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor of Physics, University of Calicut</td>
                <td className="py-3 px-4 text-[#4A384F]">Subject Expert (Physics)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">4</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Sunoj P. R.</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor of Chemistry, IIT Bombay</td>
                <td className="py-3 px-4 text-[#4A384F]">Subject Expert (Chemistry)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">5</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Georgekutty V. V.</td>
                <td className="py-3 px-4 text-[#4A384F]">Former Controller of Examinations, University of Calicut</td>
                <td className="py-3 px-4 text-[#4A384F]">Academic Expert (Mathematics)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">6</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Meera Harikrishnan</td>
                <td className="py-3 px-4 text-[#4A384F]">Head of Soft Skills & Talent Development, Infosys Ltd.</td>
                <td className="py-3 px-4 text-[#4A384F]">Industry Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">7</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Vinod P.</td>
                <td className="py-3 px-4 text-[#4A384F]">Associate Professor in Mathematics, Dept. of BSH, JEC</td>
                <td className="py-3 px-4 text-[#4A384F]">Faculty Member (Internal)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">8</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Renju Joseph</td>
                <td className="py-3 px-4 text-[#4A384F]">Assistant Professor in Chemistry, Dept. of BSH, JEC</td>
                <td className="py-3 px-4 text-[#4A384F]">Faculty Member (Internal)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Scope and Responsibilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C79628]" />
            <span>Academic Mandates</span>
          </h4>
          <ul className="text-xs text-[#4A384F] space-y-2 leading-relaxed font-light">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Framing rigorous foundational curricula bridging Higher Secondary knowledge to specialized engineering sciences.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Designing interdisciplinary laboratory experiments in applied optics, material science, spectroscopy, and phonetics.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Integrating AI and Python computational mathematics tools into linear algebra and calculus coursework.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#C79628]" />
            <span>Recent Resolutions</span>
          </h4>
          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-between">
              <div>
                <div className="font-bold text-[#28052B]">Autonomous Scheme 2024 Math Lab Integration</div>
                <div className="text-[11px] text-[#7A647F]">Inclusion of Python and Scilab modules in MAT101 Linear Algebra</div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Approved</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-between">
              <div>
                <div className="font-bold text-[#28052B]">Professional Communication Language Software</div>
                <div className="text-[11px] text-[#7A647F]">Sanctioned AI-assisted phonetics diagnostic software for Language Lab</div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Approved</span>
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
    { name: 'Dr. Usha Nair', role: 'Professor & Head', dept: 'Mathematics', qual: 'Ph.D. in Fluid Dynamics', exp: '24 Years', email: 'ushanair@jecc.ac.in', spec: 'Differential Equations, Boundary Value Problems', cat: 'math' },
    { name: 'Dr. Vinod P.', role: 'Associate Professor', dept: 'Mathematics', qual: 'Ph.D. in Graph Theory', exp: '17 Years', email: 'vinodp@jecc.ac.in', spec: 'Spectral Graph Theory, Discrete Mathematics', cat: 'math' },
    { name: 'Dr. Renju Joseph', role: 'Associate Professor', dept: 'Chemistry', qual: 'Ph.D. in Polymer Chemistry', exp: '15 Years', email: 'renju@jecc.ac.in', spec: 'Nanomaterials, Conducting Polymers, Green Chemistry', cat: 'chem' },
    { name: 'Dr. Shaju K. S.', role: 'Associate Professor', dept: 'Physics', qual: 'Ph.D. in Thin Film Physics', exp: '16 Years', email: 'shajuks@jecc.ac.in', spec: 'Optoelectronic Devices, Semiconductor Physics', cat: 'phy' },
    { name: 'Prof. Minu Jose', role: 'Assistant Professor', dept: 'Mathematics', qual: 'M.Sc., M.Phil., Ph.D. (Pursuing)', exp: '11 Years', email: 'minujose@jecc.ac.in', spec: 'Linear Algebra, Numerical Analysis', cat: 'math' },
    { name: 'Prof. Jency C. J.', role: 'Assistant Professor', dept: 'Physics', qual: 'M.Sc. Physics, B.Ed.', exp: '10 Years', email: 'jency@jecc.ac.in', spec: 'Fiber Optics, Laser Technology', cat: 'phy' },
    { name: 'Prof. Priya K. V.', role: 'Assistant Professor', dept: 'Chemistry', qual: 'M.Sc. Applied Chemistry', exp: '9 Years', email: 'priyakv@jecc.ac.in', spec: 'Environmental Science, Water Treatment Technology', cat: 'chem' },
    { name: 'Prof. Jasmine Jose', role: 'Assistant Professor', dept: 'Humanities & English', qual: 'M.A. English, B.Ed., SET', exp: '12 Years', email: 'jasmine@jecc.ac.in', spec: 'Corporate Communication, Phonetics, English for Engineers', cat: 'hum' },
    { name: 'Prof. Arun M.', role: 'Assistant Professor', dept: 'Humanities & Economics', qual: 'M.A. Economics, MBA', exp: '8 Years', email: 'arunm@jecc.ac.in', spec: 'Engineering Economics, Project Management & Ethics', cat: 'hum' },
  ];

  const filtered = filterSpec === 'all'
    ? facultyList
    : facultyList.filter(f => f.cat === filterSpec);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Department Academic Roster</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Faculty Members
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            {facultyList.length} Dedicated Scholars
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-2">
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
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                filterSpec === tab.id
                  ? 'bg-[#28052B] text-[#DFC06A] font-bold'
                  : 'bg-[#FAF7F2] text-[#4A384F] hover:bg-[#EAE2D5]'
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
          <div key={i} className="p-5 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-[#28052B]">{f.name}</h4>
                <div className="text-xs font-semibold text-[#C79628]">{f.role} ({f.dept})</div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#DFC06A]/20 text-[#28052B] font-mono font-bold shrink-0">
                {f.exp}
              </span>
            </div>

            <div className="text-xs text-[#4A384F]">{f.qual}</div>
            <div className="text-[11px] text-[#7A647F]">
              Specialization: <strong className="text-[#28052B]">{f.spec}</strong>
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
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Distinguished Visiting Chairs</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Adjunct Faculty
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Honorary Scholars
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department regularly brings in distinguished mathematicians, applied physicists, and corporate communications coaches as Adjunct Faculty to inspire first-year engineering students and mentor student research papers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-base">
              AK
            </div>
            <div>
              <h4 className="font-bold text-base text-[#28052B]">Dr. Achuthsankar S. Nair</h4>
              <div className="text-xs font-semibold text-[#C79628]">Former Head, Dept. of Computational Biology & Bioinformatics, Univ. of Kerala</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Conducts specialized lecture sessions on Mathematical Thinking, Historical Foundations of Computational Sciences, and Universal Human Values for all engineering freshers.
          </p>
          <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F]">
            <strong>Special Lecture:</strong> "The Poetry of Mathematics in Engineering Architecture"
          </div>
        </div>

        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-base">
              MR
            </div>
            <div>
              <h4 className="font-bold text-base text-[#28052B]">Dr. M. R. Anantharaman</h4>
              <div className="text-xs font-semibold text-[#C79628]">Professor Emeritus of Physics, Cochin University of Science & Technology</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Advises on advanced experimental setups in magnetism, nanoscience, and quantum material behavior. Mentors faculty on DST-SERB and CSIR research grant proposals.
          </p>
          <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F]">
            <strong>Special Lecture:</strong> "Frontiers of Magnetic Nanoparticles in Engineering Systems"
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
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Foundation Year Scholars</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Student List & Mentorship Batches
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            244 First-Year Enrollees
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Basic Science & Humanities mentors and monitors the academic transition of all first-year B.Tech students entering Jyothi Engineering College. Every student is mapped to a dedicated faculty counselor for academic guidance and induction.
        </p>

        {/* Division Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5">
          {(Object.keys(divisions) as Array<keyof typeof divisions>).map((key) => {
            const d = divisions[key];
            const isActive = selectedDiv === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedDiv(key)}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#28052B] text-white border-[#28052B] shadow-sm'
                    : 'bg-[#FAF7F2] border-[#E7D6C1] hover:bg-white text-[#28052B]'
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
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E7D6C1]">
          <div>
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              {divisions[selectedDiv].name}
            </h3>
            <div className="text-xs text-[#7A647F] mt-0.5">
              Faculty Mentor: <strong className="text-[#28052B]">{divisions[selectedDiv].mentor}</strong> • Reps: <strong className="text-[#28052B]">{divisions[selectedDiv].rep}</strong>
            </div>
          </div>
          <button
            onClick={() => alert(`Downloading roster for ${divisions[selectedDiv].name}`)}
            className="px-3.5 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#C79628]" />
            <span>Download Class Roster</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#E7D6C1] rounded-2xl overflow-hidden">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-2.5 px-3.5 font-semibold">Adm No.</th>
                <th className="py-2.5 px-3.5 font-semibold">Student Name</th>
                <th className="py-2.5 px-3.5 font-semibold">Branch</th>
                <th className="py-2.5 px-3.5 font-semibold">Faculty Mentor</th>
                <th className="py-2.5 px-3.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-[#FAF7F2]/40">
              {[
                { adm: 'JEC2401', name: 'Abhiram M.', branch: 'Computer Science', mentor: 'Dr. Vinod P.', status: 'Enrolled' },
                { adm: 'JEC2402', name: 'Sandra S.', branch: 'Computer Science', mentor: 'Dr. Vinod P.', status: 'Enrolled' },
                { adm: 'JEC2403', name: 'Adithyan C.', branch: 'AI & Data Science', mentor: 'Prof. Minu Jose', status: 'Enrolled' },
                { adm: 'JEC2404', name: 'Bhavana K.', branch: 'AI & Data Science', mentor: 'Prof. Minu Jose', status: 'Enrolled' },
                { adm: 'JEC2405', name: 'Chris Varghese', branch: 'Computer Science', mentor: 'Dr. Vinod P.', status: 'Enrolled' },
                { adm: 'JEC2406', name: 'Diya Mary John', branch: 'AI & Data Science', mentor: 'Prof. Minu Jose', status: 'Enrolled' },
              ].map((s, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-3.5 font-mono font-bold text-[#28052B]">{s.adm}</td>
                  <td className="py-2.5 px-3.5 font-bold text-[#28052B]">{s.name}</td>
                  <td className="py-2.5 px-3.5 text-[#4A384F]">{s.branch}</td>
                  <td className="py-2.5 px-3.5 text-[#4A384F]">{s.mentor}</td>
                  <td className="py-2.5 px-3.5 text-emerald-800 font-semibold">{s.status}</td>
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
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Distinguished Foundation Scholars</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Alumni Reflections
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Engineers & Leaders
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Alumni of Jyothi Engineering College routinely credit the strong analytical rigour, problem-solving habits, and communication skills nurtured during their first year under the Basic Science & Humanities faculty for their leadership success in global corporations and advanced research laboratories.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          { name: 'Er. Mathew V. Cherian', batch: 'Batch of 2012', role: 'Staff Software Architect, Google USA', quote: 'The mathematical foundations in linear algebra and calculus taught by BSH professors gave me the confidence to design complex distributed algorithms.' },
          { name: 'Dr. Sneha Rajan', batch: 'Batch of 2015', role: 'Postdoctoral Fellow, Max Planck Institute, Germany', quote: 'My early interest in physics laboratory spectroscopy and thin films sparked during BSH first-year practicals and shaped my career in nanoscience.' },
          { name: 'Er. Anand K. Menon', batch: 'Batch of 2018', role: 'Product Lead, Microsoft Azure', quote: 'The interactive Language Lab sessions and debate clubs built my executive presence and communication skills required in multinational product leadership.' },
        ].map((al, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs space-y-3">
            <div>
              <h4 className="font-bold text-sm text-[#28052B]">{al.name}</h4>
              <div className="text-xs font-semibold text-[#C79628]">{al.role}</div>
              <div className="text-[11px] text-[#7A647F]">{al.batch}</div>
            </div>
            <p className="text-xs text-[#4A384F] italic leading-relaxed pt-2 border-t border-[#E7D6C1]/70 font-light">
              "{al.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
