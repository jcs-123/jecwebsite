import React, { useState } from 'react';
import {
  Building2, Award, Cpu, FileText, CheckCircle2, Download,
  ExternalLink, Laptop, Library, Star, Trophy, Sparkles, BookOpen
} from 'lucide-react';

/* 1. Facilities Page (Lab & Library) */
export const BshFacilitiesPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Infrastructure & Learning Spaces</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Facilities (Lab & Library)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            4 Specialized Facilities
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Basic Science & Humanities maintains fully outfitted experimental laboratories for Engineering Physics and Engineering Chemistry, an interactive 60-console Digital Language Laboratory, and a dedicated departmental library.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Physics Lab */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-[#28052B]">Engineering Physics Laboratory</h4>
              <div className="text-xs text-[#C79628] font-semibold">Optics, Photonics & Semiconductor Physics</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Equipped with modern optical benches, He-Ne laser spectrometers, diffraction gratings, ultrasonic interferometers, band-gap energy apparatus, and Hall effect measurement setups. Designed to accommodate 60 students per session with dedicated experimental stations.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong>Key Setups:</strong> Laser Diffraction, Hall Effect, Newton's Rings, Solar Cell Characteristics</div>
            <div>• <strong>Floor Area:</strong> 1,500 sq.ft • Capacity: 60 Students</div>
          </div>
        </div>

        {/* Chemistry Lab */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-[#28052B]">Engineering Chemistry Laboratory</h4>
              <div className="text-xs text-[#C79628] font-semibold">Instrumental Analysis & Material Testing</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Furnished with digital conductivity meters, pH meters, UV-Visible spectrophotometers, Redwood viscometers, flash point apparatus, and analytical electronic balances. Strict compliance with green chemistry protocols and chemical safety standards.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong>Key Setups:</strong> Spectrophotometry, Viscometry, Potentiometric Titrations, Water Quality Tests</div>
            <div>• <strong>Floor Area:</strong> 1,600 sq.ft • Capacity: 60 Students</div>
          </div>
        </div>

        {/* Digital Language Lab */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-[#28052B]">Digital Language & Communication Lab</h4>
              <div className="text-xs text-[#C79628] font-semibold">Phonetics Studio & Soft Skills Center</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            A 60-console interactive multimedia language studio powered by digital phonetics software for accent neutralization, listening comprehension, group discussion simulators, and professional presentation recordings.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong>Software:</strong> Orell Talk Digital Language Suite & AI speech-to-text tools</div>
            <div>• <strong>Consoles:</strong> 60 High-Performance Multimedia Terminals with Headsets</div>
          </div>
        </div>

        {/* Department Library */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center">
              <Library className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-[#28052B]">Department Reference Library</h4>
              <div className="text-xs text-[#C79628] font-semibold">Foundational Books & Journals</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Houses over 2,200 curated volumes on Advanced Engineering Mathematics, Mathematical Physics, Quantum Mechanics, Polymer Chemistry, Environmental Engineering, and Technical Communication, along with subscribed journals.
          </p>
        </div>
      </div>
    </div>
  );
};

/* 2. Achievements Page (Student & Staff Achievements) */
export const BshAchievementsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Accolades & Recognition</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Achievements (Student & Staff)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            State & National Laurels
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department regularly garners recognition for excellence in pure science research, university pass percentage distinctions, student mathematical competitions, and faculty publications in prestigious Scopus and SCI-indexed journals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Achievements */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#C79628]" />
            <span>Student Achievements</span>
          </h3>
          <div className="space-y-3 text-xs text-[#4A384F]">
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>Ramanujan Mathematical Olympiad (State Level)</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">1st Prize</span>
              </div>
              <p className="leading-relaxed">First-year engineering students won the Championship Trophy at the Kerala Inter-Engineering Mathematical Problem Solving League 2024.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>All Kerala Elocution & Debate Championship</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">Runner Up</span>
              </div>
              <p className="leading-relaxed">Mentored by the Language Lab faculty, our first-year team bagged the Runner-Up trophy at the All-Kerala Inter-Collegiate Youth Debate on Sustainable Energy.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>National Science Day Project Exhibition</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-bold">Best Innovation</span>
              </div>
              <p className="leading-relaxed">Student team awarded Best Working Model for their solar-powered low-cost domestic water purification and desalination system.</p>
            </div>
          </div>
        </div>

        {/* Staff Achievements */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] flex items-center gap-2">
            <Star className="w-5 h-5 text-[#C79628]" />
            <span>Staff Achievements</span>
          </h3>
          <div className="space-y-3 text-xs text-[#4A384F]">
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>Distinguished Researcher Award</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">State Commendation</span>
              </div>
              <p className="leading-relaxed">Dr. Renju Joseph recognized by the Kerala State Council for Science, Technology and Environment (KSCSTE) for outstanding research in conducting biopolymers.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>DST-SERB Mathematical Research Grant</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold">₹22.0 Lakhs</span>
              </div>
              <p className="leading-relaxed">Dr. Vinod P. awarded funding for investigations into spectral graph algorithms and algebraic connectivity models in complex network topologies.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>Textbook Authorship in Applied Physics</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">Published</span>
              </div>
              <p className="leading-relaxed">Dr. Shaju K. S. co-authored the reference textbook "Engineering Physics: Principles and Devices" published by McGraw Hill Education.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. Research Page (Faculty Research) */
export const BshResearchPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Scientific Investigations & Patents</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Faculty Research
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Peer-Reviewed Impact
          </span>
        </div>

        {/* Research Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">48+</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5">Scopus / SCI Publications</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#C79628]">₹38.5 L</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5">Funded Science Grants</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">680+</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5">Citations Index</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-emerald-700">5</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5">Ph.D. Scholars Guided</div>
          </div>
        </div>
      </div>

      {/* Featured Research Publications */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
          Selected Scopus & SCI Indexed Publications
        </h3>
        <div className="space-y-3">
          {[
            { title: 'Spectral Radius and Energy of Derived Graphs with Applications to Molecular Orbital Stability', authors: 'Dr. Vinod P., Dr. Usha Nair', journal: 'Journal of Mathematical Chemistry (Springer)', doi: '10.1007/s10910-024-01582-1' },
            { title: 'Synthesis and Electrochemical Properties of Polyaniline-Graphene Oxide Nanocomposites for Supercapacitors', authors: 'Dr. Renju Joseph, Prof. Priya K. V.', journal: 'Applied Surface Science (Elsevier)', doi: '10.1016/j.apsusc.2023.158902' },
            { title: 'Optical Non-Linearity and Structural Characteristics of Spray Pyrolyzed Transparent Conducting ZnO Thin Films', authors: 'Dr. Shaju K. S., Prof. Jency C. J.', journal: 'Materials Science in Semiconductor Processing', doi: '10.1016/j.mssp.2023.107241' },
            { title: 'Impact of AI-Assisted Automated Phonetic Feedback in Enhancing ESL Pronunciation among Engineering Undergraduates', authors: 'Prof. Jasmine Jose', journal: 'Language Learning & Technology (Scopus Indexed)', doi: '10.1080/09588221.2024.2319804' },
          ].map((p, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5 hover:shadow-xs transition-shadow">
              <h4 className="font-bold text-xs sm:text-sm text-[#28052B] leading-snug">{p.title}</h4>
              <div className="text-xs text-[#C79628] font-medium">{p.authors}</div>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-[#7A647F]">
                <span>{p.journal}</span>
                <span className="font-mono text-[#28052B]">DOI: {p.doi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* 4. Syllabus and Curriculum Page */
export const BshSyllabusPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sem1' | 'sem2'>('sem1');

  const courseData = {
    sem1: [
      { code: 'MAT101', name: 'Linear Algebra and Differential Calculus', credits: 4, type: 'Theory', hours: '3-1-0' },
      { code: 'PHY100', name: 'Engineering Physics', credits: 4, type: 'Theory', hours: '3-1-0' },
      { code: 'CYL100', name: 'Engineering Chemistry', credits: 4, type: 'Theory', hours: '3-1-0' },
      { code: 'HUN101', name: 'Life Skills & Professional Ethics', credits: 2, type: 'Theory', hours: '2-0-0' },
      { code: 'PHL120', name: 'Engineering Physics Laboratory', credits: 1, type: 'Laboratory', hours: '0-0-2' },
      { code: 'CYL120', name: 'Engineering Chemistry Laboratory', credits: 1, type: 'Laboratory', hours: '0-0-2' },
    ],
    sem2: [
      { code: 'MAT102', name: 'Vector Calculus, Differential Equations & Transforms', credits: 4, type: 'Theory', hours: '3-1-0' },
      { code: 'HUN102', name: 'Professional Communication & Language Skills', credits: 2, type: 'Theory + Lab', hours: '2-0-2' },
      { code: 'EST130', name: 'Basics of Electrical & Electronics Engineering', credits: 4, type: 'Theory', hours: '4-0-0' },
      { code: 'EST102', name: 'Programming in C / Computational Thinking', credits: 4, type: 'Theory', hours: '3-1-0' },
      { code: 'HUL102', name: 'Language & Phonetics Laboratory', credits: 1, type: 'Laboratory', hours: '0-0-2' },
      { code: 'ESL130', name: 'Electrical & Electronics Workshop', credits: 1, type: 'Laboratory', hours: '0-0-2' },
    ]
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">First Year Autonomous Curriculum</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Syllabus and Curriculum (Scheme 2024)
              </h2>
            </div>
          </div>
          <button
            onClick={() => alert("Downloading BSH First-Year Curriculum Scheme 2024")}
            className="px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#C79628]" />
            <span>Download Scheme PDF</span>
          </button>
        </div>

        {/* Semester Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-5">
          <button
            onClick={() => setActiveTab('sem1')}
            className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
              activeTab === 'sem1'
                ? 'bg-[#28052B] text-white border-[#28052B] shadow-sm'
                : 'bg-[#FAF7F2] border-[#E7D6C1] text-[#28052B]'
            }`}
          >
            <div className={`text-xs font-bold ${activeTab === 'sem1' ? 'text-[#DFC06A]' : 'text-[#28052B]'}`}>
              Semester 1 Foundation Scheme
            </div>
            <div className="text-[11px] opacity-80 mt-0.5">Calculus, Physics, Chemistry & Labs</div>
          </button>

          <button
            onClick={() => setActiveTab('sem2')}
            className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
              activeTab === 'sem2'
                ? 'bg-[#28052B] text-white border-[#28052B] shadow-sm'
                : 'bg-[#FAF7F2] border-[#E7D6C1] text-[#28052B]'
            }`}
          >
            <div className={`text-xs font-bold ${activeTab === 'sem2' ? 'text-[#DFC06A]' : 'text-[#28052B]'}`}>
              Semester 2 Foundation Scheme
            </div>
            <div className="text-[11px] opacity-80 mt-0.5">Transforms, Professional Communication & Computing</div>
          </button>
        </div>
      </div>

      {/* Course Table */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
          {activeTab === 'sem1' ? 'Semester 1 Course Modules' : 'Semester 2 Course Modules'}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#E7D6C1] rounded-2xl overflow-hidden">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-2.5 px-3.5 font-semibold">Course Code</th>
                <th className="py-2.5 px-3.5 font-semibold">Course Title</th>
                <th className="py-2.5 px-3.5 font-semibold">Type</th>
                <th className="py-2.5 px-3.5 font-semibold">Hours (L-T-P)</th>
                <th className="py-2.5 px-3.5 font-semibold">Credits</th>
                <th className="py-2.5 px-3.5 font-semibold text-right">Syllabus PDF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-[#FAF7F2]/40">
              {courseData[activeTab].map((c, i) => (
                <tr key={i} className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-3.5 font-mono font-bold text-[#28052B]">{c.code}</td>
                  <td className="py-2.5 px-3.5 font-bold text-[#28052B]">{c.name}</td>
                  <td className="py-2.5 px-3.5 text-[#4A384F]">{c.type}</td>
                  <td className="py-2.5 px-3.5 text-[#7A647F] font-mono">{c.hours}</td>
                  <td className="py-2.5 px-3.5 font-mono font-bold text-[#C79628]">{c.credits}</td>
                  <td className="py-2.5 px-3.5 text-right">
                    <button
                      onClick={() => alert(`Downloading syllabus PDF for ${c.code} - ${c.name}`)}
                      className="inline-flex items-center gap-1 text-[#C79628] hover:text-[#28052B] font-semibold cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
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
