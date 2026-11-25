import React, { useState } from 'react';
import {
  ShieldCheck, Users, GraduationCap, Award, Mail, Phone,
  MapPin, CheckCircle2, Download, Search, Briefcase, Star,
  BookOpen, Compass, School, Sparkles, FileText, Building2,
  Layers, Check, UserCheck
} from 'lucide-react';

/* 1. BOS (Board of Studies) Page - Matching AI & DS Luxury Style */
export const CeBOSPage: React.FC = () => {
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
          The Board of Studies (BOS) for Civil Engineering is the statutory academic authority under the UGC Autonomous Regulations. The board formulates, revises, and enriches the undergraduate curriculum, syllabus specifications, laboratory experiments, industry internships, and evaluation rubrics for B.Tech in Civil Engineering to meet ABET and NBA Tier-1 international benchmarks.
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
                      JM
                    </span>
                    <span>Dr. Jaison Mathew</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor &amp; Head, Dept. of Civil Engineering, Jyothi Engineering College</td>
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
                      PN
                    </span>
                    <span>Dr. Praveen Nagarajan</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor in Civil Engineering, NIT Calicut</td>
                <td className="py-3.5 px-4 text-[#4A384F]">University Nominee (KTU)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">3</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      SK
                    </span>
                    <span>Dr. Santhosh Kumar G.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor of Structural Engineering, IIT Palakkad</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Structures)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">4</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      SV
                    </span>
                    <span>Dr. Subha Vishnudas</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor, School of Engineering, CUSAT</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Geotech &amp; Env)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">5</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      BV
                    </span>
                    <span>Er. Babu Varghese</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Chief Engineer (Retd.), Kerala Public Works Department (PWD)</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Industry Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">6</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      RN
                    </span>
                    <span>Er. Renjith K. Nair</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Head of Engineering &amp; BIM, L&amp;T Construction Ltd.</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Industry Expert (Infrastructure)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">7</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      SM
                    </span>
                    <span>Er. Sreeraj M. R.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Director, GeoStruct Consultants (Distinguished Alumnus)</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Alumni Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">8</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      CD
                    </span>
                    <span>Prof. Carol V. D’souza</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor in Civil Engineering, JEC</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Internal Member (Academics)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">9</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      VV
                    </span>
                    <span>Prof. Vincy Verghese</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Assistant Professor in Civil Engineering, JEC</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Internal Member (Member Secretary)</td>
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
              <span>Formulating and revising the 4-year B.Tech Civil Engineering curriculum under Autonomous CBCS guidelines aligned with NEP 2020.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Integrating Building Information Modelling (BIM), Total Station/Drone Surveying, and Smart Green Concrete technology into core laboratories.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Recommending panels of external question paper setters and subject experts for autonomous end-semester assessments.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Approving cutting-edge honors and minor courses in Smart Cities, Earthquake Resistant Structures, and Environmental Geotechnics.</span>
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
                  BOS 4th Meeting Resolutions (June 2024)
                </span>
                <span className="px-3 py-0.5 rounded-full bg-[#E8F8EE] text-[#1E824C] border border-[#BDE7CC] text-xs font-semibold inline-flex items-center gap-1 shrink-0">
                  <Check className="w-3 h-3 text-[#1E824C]" />
                  Approved
                </span>
              </div>
              <p className="text-xs text-[#4A384F]">
                Ratification of Autonomous Scheme 2024 with mandatory 4D BIM modeling and drone surveying camp credits.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-xs text-[#28052B]">
                  BOS 3rd Meeting Resolutions (December 2023)
                </span>
                <span className="px-3 py-0.5 rounded-full bg-[#E8F8EE] text-[#1E824C] border border-[#BDE7CC] text-xs font-semibold inline-flex items-center gap-1 shrink-0">
                  <Check className="w-3 h-3 text-[#1E824C]" />
                  Approved
                </span>
              </div>
              <p className="text-xs text-[#4A384F]">
                Modernization of Concrete Testing and NABL Environmental Quality testing procedures and rubrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Department Advisory Board (DAB) Page */
export const CeAdvisoryBoardPage: React.FC = () => {
  const advisors = [
    {
      name: 'Er. K. P. Abraham',
      designation: 'Managing Director, Skyline Builders & Developers',
      affiliation: 'Industry Leader & Infrastructure Expert',
      contribution: 'Guidance on modern residential structural design, sustainable concrete adoption, and real-estate industry demands.',
      initials: 'KA'
    },
    {
      name: 'Dr. Benny Mathews Abraham',
      designation: 'Professor & Dean (Civil Engineering), SOE CUSAT',
      affiliation: 'Geotechnical Engineering & Soil Mechanics Specialist',
      contribution: 'Strategic mentoring on geotechnical testing protocols, foundation engineering curriculum, and landslide resilience studies.',
      initials: 'BA'
    },
    {
      name: 'Er. S. Rajagopal',
      designation: 'Chief Consultant, Rajagopal Structural Designs Ltd.',
      affiliation: 'Senior Structural Engineering Consultant',
      contribution: 'Advising on seismic design standards (IS 1893:2016), ductile detailing of RCC structures, and STAAD/ETABS integration.',
      initials: 'SR'
    },
    {
      name: 'Er. C. K. Unnikrishnan',
      designation: 'Past Chairman, Builders Association of India (BAI) - Thrissur Centre',
      affiliation: 'Builders Association of India (BAI)',
      contribution: 'Facilitating student site apprenticeships, technician upskilling programs, and contractor liaison.',
      initials: 'CU'
    },
    {
      name: 'Dr. Job Thomas',
      designation: 'Head of Civil Engineering, Division of Structures, CUSAT',
      affiliation: 'Academic & Research Mentor',
      contribution: 'Evaluating research funding applications, NABL lab accreditation roadmap, and consultancy framework.',
      initials: 'JT'
    },
    {
      name: 'Er. Mini K. Philip',
      designation: 'Superintending Engineer, Kerala Irrigation Department',
      affiliation: 'Water Resources & Dam Safety Department',
      contribution: 'Mentoring on hydraulic structures design, flood-routing modeling, and watershed conservation initiatives.',
      initials: 'MP'
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <UserCheck className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Department Advisory Board (DAB)
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department Advisory Board (DAB) brings together eminent structural consultants, infrastructure developers, academic stalwarts from premier institutes, and government chief engineers. The board convenes biannually to calibrate the department’s pedagogical roadmap, review Program Educational Objectives (PEOs), and nurture sustainable industry-academia synergy.
        </p>
      </div>

      {/* Advisory Board Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advisors.map((adv, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs hover:border-[#C79628] transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                  {adv.initials}
                </div>
                <div>
                  <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                    {adv.name}
                  </h4>
                  <div className="text-xs font-semibold text-[#C79628] mt-0.5">
                    {adv.designation}
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-[#7A647F] font-medium">{adv.affiliation}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/70">
                {adv.contribution}
              </p>
            </div>
            <div className="pt-2 text-[10px] text-[#C79628] font-bold uppercase tracking-wider">
              Strategic Advisor
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 3. Faculty Members Page */
export const CeFacultyPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const facultyData = [
    {
      name: 'Dr. Jaison Mathew',
      role: 'Professor & Head of Department',
      qualification: 'Ph.D. (Structural Engineering), M.Tech (Structures)',
      discipline: 'structural',
      disciplineLabel: 'Structural Engineering',
      experience: '22 Years Exp.',
      specialization: 'High-Performance Concrete, Earthquake Resistant Design, Finite Element Analysis',
      email: 'jaisonmathew@jecc.ac.in',
      initials: 'JM'
    },
    {
      name: 'Prof. Carol V. D’souza',
      role: 'Associate Professor',
      qualification: 'M.Tech (Geotechnical Engineering), (Ph.D. pursuing)',
      discipline: 'geotech',
      disciplineLabel: 'Geotechnical Engineering',
      experience: '16 Years Exp.',
      specialization: 'Ground Improvement Techniques, Soil-Structure Interaction, Geosynthetics in Slopes',
      email: 'caroldsouza@jecc.ac.in',
      initials: 'CD'
    },
    {
      name: 'Dr. Agnes George',
      role: 'Associate Professor',
      qualification: 'Ph.D. (Water Resources), M.Tech (Hydraulics)',
      discipline: 'environmental',
      disciplineLabel: 'Environmental & Water Resources',
      experience: '14 Years Exp.',
      specialization: 'Watershed Management, GIS & Hydrological Modelling, Urban Flood Mitigation',
      email: 'agnesgeorge@jecc.ac.in',
      initials: 'AG'
    },
    {
      name: 'Prof. Vincy Verghese',
      role: 'Assistant Professor & Member Secretary BOS',
      qualification: 'M.Tech (Structural Engineering & Construction Management)',
      discipline: 'structural',
      disciplineLabel: 'Structural Engineering',
      experience: '12 Years Exp.',
      specialization: 'Prestressed Concrete, Non-Destructive Testing (NDT), Sustainable Building Materials',
      email: 'vincyverghese@jecc.ac.in',
      initials: 'VV'
    },
    {
      name: 'Prof. Neeraja P. G.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Transportation Engineering)',
      discipline: 'transportation',
      disciplineLabel: 'Transportation & Surveying',
      experience: '10 Years Exp.',
      specialization: 'Pavement Design, Traffic Engineering, Advanced Surveying using Total Station & GPS',
      email: 'neerajapg@jecc.ac.in',
      initials: 'NP'
    },
    {
      name: 'Prof. Sooraj M. S.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Environmental Engineering)',
      discipline: 'environmental',
      disciplineLabel: 'Environmental & Water Resources',
      experience: '9 Years Exp.',
      specialization: 'Industrial Wastewater Treatment, Environmental Impact Assessment, Solid Waste Valorization',
      email: 'soorajms@jecc.ac.in',
      initials: 'SM'
    },
    {
      name: 'Prof. Anju C. K.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Structural Engineering)',
      discipline: 'structural',
      disciplineLabel: 'Structural Engineering',
      experience: '8 Years Exp.',
      specialization: 'Structural Dynamics, Steel Structures, Wind Engineering',
      email: 'anjuck@jecc.ac.in',
      initials: 'AC'
    },
  ];

  const filtered = filter === 'all'
    ? facultyData
    : facultyData.filter(f => f.discipline === filter);

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
            {facultyData.length} Distinguished Faculty
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Our faculty comprises distinguished professors and researcher-engineers holding doctorates and master’s degrees from premier institutes, actively executing government-sponsored infrastructure consultancy projects.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs text-[#7A647F] font-semibold mr-1">Specialization:</span>
          {[
            { id: 'all', label: 'All Disciplines' },
            { id: 'structural', label: 'Structural Engineering' },
            { id: 'geotech', label: 'Geotechnical Engineering' },
            { id: 'environmental', label: 'Environmental & Water' },
            { id: 'transportation', label: 'Transportation' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === tab.id
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
                      {f.role}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E7D6C1] text-[#28052B] font-mono font-bold shrink-0">
                  {f.experience}
                </span>
              </div>

              <div className="text-xs text-[#4A384F] font-light">{f.qualification}</div>
              <div className="text-[11px] text-[#7A647F] pt-2 border-t border-[#E7D6C1]/70">
                Domain: <strong className="text-[#28052B] font-semibold">{f.specialization}</strong>
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
              <span className="text-[10px] text-[#7A647F] font-mono">Civil Block</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Non Teaching Staff Page */
export const CeNonTeachingPage: React.FC = () => {
  const staff = [
    {
      name: 'Mr. Prasanth K. R.',
      designation: 'Laboratory Superintendent',
      lab: 'Concrete & Materials Testing Laboratory',
      qualification: 'Diploma in Civil Engineering',
      experience: '18 Years Exp.',
      responsibilities: 'Overseeing Universal Testing Machine (1000 kN), 2000 kN Compression Testing Machine, and calibration records.',
      initials: 'PK'
    },
    {
      name: 'Mr. Anoop Varghese',
      designation: 'Senior Instructor',
      lab: 'Advanced Surveying & Geomatics Lab',
      qualification: 'Diploma in Civil Engineering, GPS/GIS',
      experience: '15 Years Exp.',
      responsibilities: 'Maintenance and field issuance of Electronic Total Stations, Digital Levels, and Survey Camp logistics.',
      initials: 'AV'
    },
    {
      name: 'Ms. Sreeja M.',
      designation: 'Technical Assistant',
      lab: 'Computer Aided Civil Design & BIM Lab',
      qualification: 'B.Sc. Computer Science, Autodesk Certified',
      experience: '11 Years Exp.',
      responsibilities: 'Administering 40 high-performance workstations, AutoCAD, STAAD.Pro, ETABS, and Revit licenses.',
      initials: 'SM'
    },
    {
      name: 'Mr. Baiju C. P.',
      designation: 'Trade Instructor',
      lab: 'Geotechnical & Transportation Lab',
      qualification: 'ITI Draughtsman Civil, NCVT',
      experience: '14 Years Exp.',
      responsibilities: 'Supervising Triaxial Shear, Direct Shear, CBR, and bitumen ductility testing apparatus.',
      initials: 'BC'
    },
    {
      name: 'Ms. Soumya K. S.',
      designation: 'Lab Assistant',
      lab: 'Environmental & Fluid Mechanics Lab',
      qualification: 'Diploma in Civil Lab Technology',
      experience: '9 Years Exp.',
      responsibilities: 'Reagent preparations for water quality tests (BOD, COD, Turbidity), Venturimeter calibration.',
      initials: 'SK'
    },
    {
      name: 'Mr. Davis P. L.',
      designation: 'Department Office Attendant',
      lab: 'Civil Engineering Department Office',
      qualification: 'Office Administration Certificate',
      experience: '12 Years Exp.',
      responsibilities: 'Departmental filing, document dispatch, student enquiry assistance, and logistics support.',
      initials: 'DP'
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Non-Teaching Staff
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Our technical and administrative personnel ensure safe, calibrated, and seamless day-to-day operation of heavy material testing rigs, precision surveying apparatus, digital computing suites, and university examination workshops.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((st, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs hover:border-[#C79628] transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                    {st.initials}
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                      {st.name}
                    </h4>
                    <div className="text-xs font-semibold text-[#C79628] mt-0.5">
                      {st.designation}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E7D6C1] text-[#28052B] font-mono font-bold shrink-0">
                  {st.experience}
                </span>
              </div>
              <div className="text-[11px] text-[#7A647F] font-medium">{st.lab}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/70">
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
export const CeAdjunctFacultyPage: React.FC = () => {
  const adjuncts = [
    {
      name: 'Dr. N. Ganesan',
      designation: 'Emeritus Professor, NIT Calicut',
      qualification: 'Ph.D. (IIT Madras), FNAE, FIE',
      domain: 'Advanced Prestressed Concrete & FRP Composites',
      association: 'Visiting Chair Professor for Post-Graduate seminars and faculty research colloquia.',
      sessions: 'Prestressed Concrete Bridge Design & Fiber Reinforced Polymer Reinforcement Systems',
      initials: 'NG'
    },
    {
      name: 'Er. V. M. Sunny',
      designation: 'Senior Structural Consultant & Director, VMS Structural Consultants',
      qualification: 'M.Tech (Structures, CET)',
      domain: 'High-Rise RCC & Steel Building Design',
      association: 'Conducting real-world project design studios, IS 456 / IS 13920 seismic compliance workshops.',
      sessions: 'Analysis and Detailing of Multi-Storeyed Framed Structures using ETABS',
      initials: 'VS'
    },
    {
      name: 'Dr. C. G. Nandakumar',
      designation: 'Former Professor & Head of Ship Technology / Civil Engineering, CUSAT',
      qualification: 'Ph.D. (Finite Element Analysis)',
      domain: 'Computational Mechanics & Finite Element Methods',
      association: 'Mentoring undergraduate honor students in computational simulations and ANSYS modelling.',
      sessions: 'Finite Element Formulations for Plate Bending and Shell Structures',
      initials: 'CN'
    },
    {
      name: 'Er. George K. Chacko',
      designation: 'Principal Green Building Assessor & LEED AP',
      qualification: 'M.S. Sustainable Construction, UK',
      domain: 'GRIHA, LEED & IGBC Green Building Certification',
      association: 'Directing the elective course on Sustainable Architecture and Zero-Energy Construction.',
      sessions: 'Embodied Carbon Audits, Life-Cycle Analysis, and Net-Zero Energy Buildings',
      initials: 'GC'
    },
  ];

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
          Adjunct faculty members enrich student learning by infusing practical industry insights, mega-infrastructure design codes, and advanced research methodologies into the curriculum.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adjuncts.map((adj, idx) => (
          <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-xs hover:border-[#C79628] transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm shadow-xs">
                  {adj.initials}
                </div>
                <div>
                  <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
                    {adj.name}
                  </h4>
                  <div className="text-xs font-semibold text-[#C79628]">{adj.designation}</div>
                  <div className="text-[11px] text-[#7A647F]">{adj.qualification}</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs space-y-1.5">
                <div className="font-bold text-[#28052B]">{adj.domain}</div>
                <p className="text-[#4A384F] font-light leading-relaxed">{adj.association}</p>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#7A647F] border-t border-[#E7D6C1]/70">
              <span className="font-semibold text-[#28052B]">Key Lecture Series:</span> {adj.sessions}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 6. Student List Page */
export const CeStudentListPage: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>('2021-25');

  const batches: Record<string, { year: string; strength: number; reps: string[]; students: { roll: string; name: string; honors: boolean }[] }> = {
    '2021-25': {
      year: 'Final Year (Semester VII & VIII)',
      strength: 58,
      reps: ['Kevin Paul', 'Aswathy R. Nair'],
      students: [
        { roll: 'JEC21CE001', name: 'Abhinav Krishna P.', honors: true },
        { roll: 'JEC21CE002', name: 'Aiswarya Mohan', honors: true },
        { roll: 'JEC21CE003', name: 'Akshay Kumar K. S.', honors: false },
        { roll: 'JEC21CE004', name: 'Anagha Joy', honors: true },
        { roll: 'JEC21CE005', name: 'Anandhu C. V.', honors: false },
        { roll: 'JEC21CE006', name: 'Anitta Davis', honors: true },
        { roll: 'JEC21CE007', name: 'Aswathy R. Nair', honors: true },
        { roll: 'JEC21CE008', name: 'Basil Eldhose', honors: false },
        { roll: 'JEC21CE009', name: 'Chris Thomas', honors: true },
        { roll: 'JEC21CE010', name: 'Deepak Devassy', honors: false },
        { roll: 'JEC21CE011', name: 'Devika Suresh', honors: true },
        { roll: 'JEC21CE012', name: 'Kevin Paul', honors: true },
      ],
    },
    '2022-26': {
      year: 'Third Year (Semester V & VI)',
      strength: 62,
      reps: ['Rohit M.', 'Sandra Maria'],
      students: [
        { roll: 'JEC22CE001', name: 'Aaron K. George', honors: true },
        { roll: 'JEC22CE002', name: 'Adithya Narayanan', honors: false },
        { roll: 'JEC22CE003', name: 'Angel Rose Shaju', honors: true },
        { roll: 'JEC22CE004', name: 'Athul Krishna', honors: false },
        { roll: 'JEC22CE005', name: 'Bhavya P. Nair', honors: true },
        { roll: 'JEC22CE006', name: 'Daniel V. Joseph', honors: true },
        { roll: 'JEC22CE007', name: 'Fidha Fathima', honors: false },
        { roll: 'JEC22CE008', name: 'Gokul Ramdas', honors: true },
      ],
    },
    '2023-27': {
      year: 'Second Year (Semester III & IV)',
      strength: 60,
      reps: ['Jithin V. S.', 'Meenakshi K.'],
      students: [
        { roll: 'JEC23CE001', name: 'Alan Varghese', honors: false },
        { roll: 'JEC23CE002', name: 'Aleena K. B.', honors: true },
        { roll: 'JEC23CE003', name: 'Amal Roy', honors: false },
        { roll: 'JEC23CE004', name: 'Anjaly S.', honors: true },
        { roll: 'JEC23CE005', name: 'Archana M. Menon', honors: true },
        { roll: 'JEC23CE006', name: 'Farhan K. A.', honors: false },
        { roll: 'JEC23CE007', name: 'Jithin V. S.', honors: true },
        { roll: 'JEC23CE008', name: 'Meenakshi K.', honors: true },
      ],
    },
    '2024-28': {
      year: 'First Year (Autonomous Batch - Sem I & II)',
      strength: 60,
      reps: ['Naveen Antony', 'Riya Elsa'],
      students: [
        { roll: 'JEC24CE001', name: 'Abhijith S. Kumar', honors: false },
        { roll: 'JEC24CE002', name: 'Adharsh Joy', honors: false },
        { roll: 'JEC24CE003', name: 'Ann Treesa Mathew', honors: true },
        { roll: 'JEC24CE004', name: 'Edwin C. Francis', honors: false },
        { roll: 'JEC24CE005', name: 'Gowri Nandana', honors: true },
        { roll: 'JEC24CE006', name: 'Naveen Antony', honors: false },
        { roll: 'JEC24CE007', name: 'Riya Elsa', honors: true },
      ],
    },
  };

  const currentBatch = batches[selectedBatch];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Student List &amp; Nominal Roll
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Student directory across all 4 undergraduate cohorts in Civil Engineering, highlighting academic tracks, honors registrations, and class leadership representatives.
        </p>

        {/* Batch selector tabs */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {Object.keys(batches).map(batchKey => (
            <button
              key={batchKey}
              onClick={() => setSelectedBatch(batchKey)}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer font-bold ${
                selectedBatch === batchKey
                  ? 'bg-[#28052B] text-white shadow-xs'
                  : 'bg-white text-[#28052B] border border-[#E7D6C1] hover:bg-[#FAF7F2]'
              }`}
            >
              Batch {batchKey} ({batches[batchKey].year.split(' ')[0]} Year)
            </button>
          ))}
        </div>
      </div>

      {/* Selected Batch Table Card */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E7D6C1]">
          <div>
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              {currentBatch.year}
            </h3>
            <div className="text-xs text-[#7A647F] mt-0.5 font-light">
              Class Representatives: <strong className="text-[#28052B] font-semibold">{currentBatch.reps.join(', ')}</strong> • Total: <strong className="text-[#28052B] font-semibold">{currentBatch.strength} Students</strong>
            </div>
          </div>
          <button
            onClick={() => alert(`Downloading roster for Batch ${selectedBatch}`)}
            className="px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#C79628]" />
            <span>Export Nominal Roll</span>
          </button>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E7D6C1]/80">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold w-16 text-center">Sl. No.</th>
                <th className="py-3 px-4 font-semibold">Register Number</th>
                <th className="py-3 px-4 font-semibold">Student Name</th>
                <th className="py-3 px-4 font-semibold">Program Track</th>
                <th className="py-3 px-4 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-white">
              {currentBatch.students.map((s, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-3 px-4 font-semibold text-[#28052B] text-center">{idx + 1}</td>
                  <td className="py-3 px-4 font-mono font-bold text-[#28052B]">{s.roll}</td>
                  <td className="py-3 px-4 font-bold text-[#28052B]">{s.name}</td>
                  <td className="py-3 px-4 text-[#4A384F]">
                    {s.honors ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-semibold text-[10px]">
                        B.Tech (Honors) Track
                      </span>
                    ) : (
                      <span className="text-[#7A647F]">B.Tech Standard Track</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E8F8EE] text-[#1E824C] font-semibold text-[10px]">
                      Enrolled
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

/* 7. Alumni Page */
export const CeAlumniPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Alumni &amp; Infrastructure Leaders
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Graduates of the Department of Civil Engineering lead major infrastructure projects, heading bridge construction, highway networks, smart city planning, and doctoral research across India, the Middle East, North America, and Europe.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          { name: 'Er. Sreeraj M. R.', batch: 'Batch of 2012–16', role: 'Managing Director, GeoStruct Consultants', quote: 'The rigorous soil mechanics lab practicals and field surveying camps gave me the practical confidence to launch an independent structural consultancy firm.', initials: 'SM' },
          { name: 'Dr. Neethu K. Johnson', batch: 'Batch of 2013–17', role: 'Senior Geotechnical Engineer, Fugro Netherlands', quote: 'The research mentoring and testing facilities at Jyothi laid the stepping stone for my masters at TU Delft and global offshore foundation projects.', initials: 'NJ' },
          { name: 'Er. Vishnu Prasad', batch: 'Batch of 2015–19', role: 'BIM Project Manager, L&T Infrastructure', quote: 'Hands-on CAD and structural analysis studio training prepared me directly for fast-tracked corporate deployment on major high-speed rail corridors.', initials: 'VP' },
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
              Distinguished Alumnus
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
