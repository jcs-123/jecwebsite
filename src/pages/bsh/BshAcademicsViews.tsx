import React, { useState } from 'react';
import {
  Building2, Award, Cpu, FileText, CheckCircle2, Download,
  ExternalLink, Laptop, Library, Star, Trophy, Sparkles, BookOpen
} from 'lucide-react';

/* 1. Facilities Page (Lab & Library) */
export const BshFacilitiesPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Department Facilities (Lab &amp; Library)
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Basic Science &amp; Humanities maintains fully outfitted experimental laboratories for Engineering Physics and Engineering Chemistry, an interactive 60-console Digital Language Laboratory, and a dedicated departmental library.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Physics Lab */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#28052B]">Engineering Physics Laboratory</h4>
                <div className="text-xs text-[#C79628] font-semibold">Optics, Photonics &amp; Semiconductor Physics</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
              60 Capacity
            </span>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Equipped with modern optical benches, He-Ne laser spectrometers, diffraction gratings, ultrasonic interferometers, band-gap energy apparatus, and Hall effect measurement setups. Designed to accommodate 60 students per session with dedicated experimental stations.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong className="text-[#28052B]">Key Setups:</strong> Laser Diffraction, Hall Effect, Newton's Rings, Solar Cell Characteristics</div>
            <div>• <strong className="text-[#28052B]">Floor Area:</strong> 1,500 sq.ft • Dedicated Dark Room for Optical Bench Experiments</div>
          </div>
        </div>

        {/* Chemistry Lab */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#28052B]">Engineering Chemistry Laboratory</h4>
                <div className="text-xs text-[#C79628] font-semibold">Instrumental Analysis &amp; Material Testing</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
              60 Capacity
            </span>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Furnished with digital conductivity meters, pH meters, UV-Visible spectrophotometers, Redwood viscometers, flash point apparatus, and analytical electronic balances. Strict compliance with green chemistry protocols and chemical safety standards.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong className="text-[#28052B]">Key Setups:</strong> Spectrophotometry, Viscometry, Potentiometric Titrations, Water Quality Tests</div>
            <div>• <strong className="text-[#28052B]">Safety:</strong> Chemical Fume Hood, Emergency Eye Wash Stations, Fire Safety Compliant</div>
          </div>
        </div>

        {/* Digital Language Lab */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#28052B]">Digital Language &amp; Communication Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">Phonetics Studio &amp; Soft Skills Center</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
              60 Consoles
            </span>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            A 60-console interactive multimedia language studio powered by digital phonetics software for accent neutralization, listening comprehension, group discussion simulators, and professional presentation recordings.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong className="text-[#28052B]">Software Suite:</strong> Orell Talk Digital Language Suite &amp; AI pronunciation scoring modules</div>
            <div>• <strong className="text-[#28052B]">Activities:</strong> Mock Group Discussions, IELTS/TOEFL Bridge Modules, Interview Simulations</div>
          </div>
        </div>

        {/* Department Library */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Library className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#28052B]">Department Reference Library</h4>
                <div className="text-xs text-[#C79628] font-semibold">Foundational Books &amp; Journals</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
              2,200+ Books
            </span>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Houses over 2,200 curated volumes on Advanced Engineering Mathematics, Mathematical Physics, Quantum Mechanics, Polymer Chemistry, Environmental Engineering, and Technical Communication, along with subscribed journals.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong className="text-[#28052B]">Collections:</strong> Discrete Mathematics, Calculus, Organic Chemistry, Optics, Technical Writing</div>
            <div>• <strong className="text-[#28052B]">Digital Access:</strong> DELNET, Springer Nature, and National Digital Library (NDL) Portals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Achievements Page (Student & Staff) */
export const BshAchievementsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Achievements (Student &amp; Staff)
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department regularly garners recognition for excellence in pure science research, university pass percentage distinctions, student mathematical competitions, and faculty publications in prestigious Scopus and SCI-indexed journals.
        </p>
      </div>

      {/* Dual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Achievements */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Trophy className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Student Laurels &amp; Honors
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>

          <div className="space-y-3.5">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">Ramanujan Mathematical Olympiad (State Level)</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">1st Prize</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                First-year engineering students won the Championship Trophy at the Kerala Inter-Engineering Mathematical Problem Solving League 2024.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">All Kerala Inter-Collegiate Youth Debate</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">Runner Up</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Mentored by the Language Lab faculty, our first-year team bagged the Runner-Up trophy at the All-Kerala Inter-Collegiate Youth Debate on Sustainable Energy.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">National Science Day Project Exhibition</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 font-bold">Best Innovation</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Student team awarded Best Working Model for their solar-powered low-cost domestic water purification and desalination system.
              </p>
            </div>
          </div>
        </div>

        {/* Staff Achievements */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Star className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Staff Accolades &amp; Research Grants
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>

          <div className="space-y-3.5">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">Distinguished Researcher Award (KSCSTE)</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">State Award</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Dr. Renju Joseph recognized by the Kerala State Council for Science, Technology and Environment for outstanding research in conducting biopolymers.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">DST-SERB Mathematical Research Grant</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 font-bold">₹22.0 Lakhs</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Dr. Vinod P. awarded funding for investigations into spectral graph algorithms and algebraic connectivity models in complex network topologies.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">Applied Physics Reference Book Published</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">McGraw Hill</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Dr. Shaju K. S. co-authored the reference textbook "Engineering Physics: Principles and Devices" published by McGraw Hill Education.
              </p>
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
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Faculty Research
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Scholarly investigations in Basic Science &amp; Humanities span boundary value differential equations, conductive nanomaterials, transparent conducting thin films, and AI-enabled linguistic pedagogy, actively indexed across Scopus and Web of Science.
        </p>
      </div>

      {/* Research Output Summary Card */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Research Impact &amp; Scholarly Metrics
          </h3>
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#28052B]">
            Scopus / SCI Indexed
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">48+</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Scopus / SCI Papers</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#C79628]">₹38.5 L</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Funded Science Grants</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">680+</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Citations Index</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-emerald-700">5</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Ph.D. Scholars Guided</div>
          </div>
        </div>
      </div>

      {/* Publications Card */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Featured Peer-Reviewed Publications
          </h3>
          <span className="text-xs text-[#7A647F]">High-Impact Journals</span>
        </div>

        <div className="space-y-3">
          {[
            { title: 'Spectral Radius and Energy of Derived Graphs with Applications to Molecular Orbital Stability', authors: 'Dr. Vinod P., Dr. Usha Nair', journal: 'Journal of Mathematical Chemistry (Springer)', doi: '10.1007/s10910-024-01582-1' },
            { title: 'Synthesis and Electrochemical Properties of Polyaniline-Graphene Oxide Nanocomposites for Supercapacitors', authors: 'Dr. Renju Joseph, Prof. Priya K. V.', journal: 'Applied Surface Science (Elsevier)', doi: '10.1016/j.apsusc.2023.158902' },
            { title: 'Optical Non-Linearity and Structural Characteristics of Spray Pyrolyzed Transparent Conducting ZnO Thin Films', authors: 'Dr. Shaju K. S., Prof. Jency C. J.', journal: 'Materials Science in Semiconductor Processing', doi: '10.1016/j.mssp.2023.107241' },
            { title: 'Impact of AI-Assisted Automated Phonetic Feedback in Enhancing ESL Pronunciation among Engineering Undergraduates', authors: 'Prof. Jasmine Jose', journal: 'Language Learning & Technology (Scopus Indexed)', doi: '10.1080/09588221.2024.2319804' },
          ].map((p, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5 hover:border-[#DFC06A] transition-colors">
              <h4 className="font-bold text-xs sm:text-sm text-[#28052B] leading-snug">{p.title}</h4>
              <div className="text-xs text-[#C79628] font-medium">{p.authors}</div>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-[#7A647F]">
                <span>{p.journal}</span>
                <span className="font-mono text-[#28052B] font-semibold">DOI: {p.doi}</span>
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
  const [activeSem, setActiveSem] = useState<'sem1' | 'sem2'>('sem1');

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
      { code: 'ESL130', name: 'Electrical & Electronics Workshop', credits: 1, type: 'Workshop', hours: '0-0-2' },
      { code: 'HUN120', name: 'Digital Language & Communication Lab', credits: 1, type: 'Laboratory', hours: '0-0-2' },
    ],
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Syllabus &amp; Curriculum (Scheme 2024)
            </h2>
            <div className="flex-1 h-px bg-[#DFC06A]/40 hidden md:block" />
          </div>
          <button
            onClick={() => alert("Downloading full BSH Scheme 2024 Curriculum PDF")}
            className="px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#C79628]" />
            <span>Download First-Year Scheme PDF</span>
          </button>
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The foundational curriculum follows the Choice Based Credit System (CBCS) under UGC autonomous guidelines, integrating advanced engineering mathematics, experimental physics, material chemistry, and language proficiency.
        </p>
      </div>

      {/* Semester Switcher Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { id: 'sem1', label: 'Semester 1 (Autumn Session)', desc: 'Linear Algebra, Engineering Physics/Chemistry, Life Skills & Labs' },
          { id: 'sem2', label: 'Semester 2 (Spring Session)', desc: 'Differential Equations, Vector Calculus, Professional English & Programming' },
        ].map(s => {
          const isActive = activeSem === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveSem(s.id as 'sem1' | 'sem2')}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#28052B] text-white border-[#28052B] shadow-sm'
                  : 'bg-white border-[#E7D6C1] hover:bg-[#FAF7F2] text-[#28052B]'
              }`}
            >
              <div className={`text-xs font-bold ${isActive ? 'text-[#DFC06A]' : 'text-[#28052B]'}`}>
                {s.label}
              </div>
              <div className="text-[11px] opacity-80 mt-1">{s.desc}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Semester Course Table */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs overflow-hidden">
        <div className="p-5 sm:p-6 pb-4 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            {activeSem === 'sem1' ? 'First Semester Course Structure' : 'Second Semester Course Structure'}
          </h3>
          <p className="text-xs text-[#7A647F] mt-0.5 font-light">
            Autonomous First-Year Engineering Framework (Common to all Branches)
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Course Code</th>
                <th className="py-3 px-4 font-semibold">Course Title</th>
                <th className="py-3 px-4 font-semibold">L-T-P Hours</th>
                <th className="py-3 px-4 font-semibold">Course Type</th>
                <th className="py-3 px-4 font-semibold">Credits</th>
                <th className="py-3 px-4 font-semibold text-right">Syllabus PDF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-white">
              {courseData[activeSem].map((c, i) => (
                <tr key={i} className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-[#28052B]">{c.code}</td>
                  <td className="py-3 px-4 font-bold text-[#28052B]">{c.name}</td>
                  <td className="py-3 px-4 font-mono text-[#7A647F]">{c.hours}</td>
                  <td className="py-3 px-4 text-[#4A384F]">{c.type}</td>
                  <td className="py-3 px-4 font-mono font-bold text-[#C79628]">{c.credits}</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => alert(`Downloading syllabus for ${c.code} - ${c.name}`)}
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
