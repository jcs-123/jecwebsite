import React, { useState } from 'react';
import {
  ShieldCheck, Users, GraduationCap, Award, Mail, Phone,
  MapPin, CheckCircle2, Download, Search, Briefcase, Star,
  BookOpen, Compass, School, Sparkles, FileText, Building2
} from 'lucide-react';

/* 1. BOS (Board of Studies) Page */
export const CeBOSPage: React.FC = () => {
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
          The Board of Studies (BOS) for Civil Engineering is the statutory academic authority under the UGC Autonomous Regulations. The board formulates, revises, and enriches the undergraduate curriculum, syllabus specifications, laboratory experiments, industry internships, and evaluation rubrics for B.Tech in Civil Engineering to meet ABET and NBA Tier-1 international benchmarks.
        </p>
      </div>

      {/* BOS Committee Table */}
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
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Jaison Mathew</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor & Head, Dept. of Civil Engineering, Jyothi Engineering College</td>
                <td className="py-3 px-4 font-bold text-[#C79628]">Chairman</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">2</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Praveen Nagarajan</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor in Civil Engineering, NIT Calicut</td>
                <td className="py-3 px-4 text-[#4A384F]">University Nominee (KTU)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">3</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Santhosh Kumar G.</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor of Structural Engineering, IIT Palakkad</td>
                <td className="py-3 px-4 text-[#4A384F]">Subject Expert (Structures)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">4</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Subha Vishnudas</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor, School of Engineering, CUSAT</td>
                <td className="py-3 px-4 text-[#4A384F]">Subject Expert (Geotech & Env)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">5</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Er. Babu Varghese</td>
                <td className="py-3 px-4 text-[#4A384F]">Chief Engineer (Retd.), Kerala Public Works Department (PWD)</td>
                <td className="py-3 px-4 text-[#4A384F]">Industry Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">6</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Er. Renjith K. Nair</td>
                <td className="py-3 px-4 text-[#4A384F]">Head of Engineering & BIM, L&T Construction Ltd.</td>
                <td className="py-3 px-4 text-[#4A384F]">Industry Expert (Infrastructure)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">7</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Er. Sreeraj M. R.</td>
                <td className="py-3 px-4 text-[#4A384F]">Director, GeoStruct Consultants (Alumnus 2012-16)</td>
                <td className="py-3 px-4 text-[#4A384F]">Post-Graduate Meritorious Alumnus</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">8</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Prof. Carol V. D’souza</td>
                <td className="py-3 px-4 text-[#4A384F]">Associate Professor in Civil Engineering, JEC</td>
                <td className="py-3 px-4 text-[#4A384F]">Internal Member (Academics)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">9</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Prof. Vincy Verghese</td>
                <td className="py-3 px-4 text-[#4A384F]">Assistant Professor in Civil Engineering, JEC</td>
                <td className="py-3 px-4 text-[#4A384F]">Internal Member (Member Secretary)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Responsibilities & Resolutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#C79628]" />
            Key Responsibilities of BOS
          </h4>
          <ul className="text-xs text-[#4A384F] space-y-2 leading-relaxed">
            <li>• Formulating and revising the 4-year Scheme & Curriculum under Autonomous CBCS regulations.</li>
            <li>• Integrating Building Information Modelling (BIM), Total Station/Drone Surveying, and Smart Materials.</li>
            <li>• Recommending question paper setters, scrutiny boards, and chief evaluators for semester examinations.</li>
            <li>• Establishing criteria for mandatory summer internships and capstone civil engineering consultancy projects.</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#C79628]" />
            Recent BOS Meeting Minutes
          </h4>
          <div className="space-y-2">
            {[
              { title: 'BOS Meeting IV Minutes - Autonomous Scheme 2024 Ratification', date: 'June 24, 2024' },
              { title: 'BOS Meeting III Minutes - Modernization of Survey & Concrete Labs', date: 'December 18, 2023' },
              { title: 'BOS Meeting II Minutes - Introduction of Honors in Structural Engineering', date: 'May 12, 2023' },
            ].map((min, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs">
                <div>
                  <div className="font-bold text-[#28052B]">{min.title}</div>
                  <div className="text-[10px] text-[#7A647F]">{min.date}</div>
                </div>
                <button className="flex items-center gap-1 text-[#28052B] hover:text-[#C79628] font-bold text-xs">
                  <Download className="w-3.5 h-3.5" /> PDF
                </button>
              </div>
            ))}
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
    },
    {
      name: 'Dr. Benny Mathews Abraham',
      designation: 'Professor & Dean (Civil Engineering), SOE CUSAT',
      affiliation: 'Geotechnical Engineering & Soil Mechanics Specialist',
      contribution: 'Strategic mentoring on geotechnical testing protocols, foundation engineering curriculum, and landslide resilience studies.',
    },
    {
      name: 'Er. S. Rajagopal',
      designation: 'Chief Consultant, Rajagopal Structural Designs Ltd.',
      affiliation: 'Senior Structural Engineering Consultant',
      contribution: 'Advising on seismic design standards (IS 1893:2016), ductile detailing of RCC structures, and STAAD/ETABS software integration.',
    },
    {
      name: 'Er. C. K. Unnikrishnan',
      designation: 'Past Chairman, Builders Association of India (BAI) - Thrissur Centre',
      affiliation: 'Builders Association of India (BAI)',
      contribution: 'Facilitating student site apprenticeships, technician upskilling programs, and contractor liaison.',
    },
    {
      name: 'Dr. Job Thomas',
      designation: 'Head of Civil Engineering, Division of Structural Engineering, CUSAT',
      affiliation: 'Academic & Research Mentor',
      contribution: 'Evaluating research funding applications, NABL lab accreditation roadmap, and consultancy framework.',
    },
    {
      name: 'Er. Mini K. Philip',
      designation: 'Superintending Engineer, Kerala Irrigation Department',
      affiliation: 'Water Resources & Dam Safety Department',
      contribution: 'Mentoring on hydraulic structures design, flood-routing modeling, and watershed conservation initiatives.',
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
          The Department Advisory Board (DAB) brings together eminent structural consultants, infrastructure developers, academic stalwarts from premier institutes, and government chief engineers. The board convenes biannually to calibrate the department’s pedagogical roadmap, review Program Educational Objectives (PEOs), and nurture sustainable industry-academia synergy.
        </p>
      </div>

      {/* Advisory Board Members Grid */}
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

      {/* DAB Strategic Mandates */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-[#28052B] to-[#3B0840] rounded-3xl text-white space-y-4">
        <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#DFC06A]">
          Strategic Mandates & Annual Review Agenda
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/80 font-light">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">Curriculum Calibration</div>
            <p>Benchmarking syllabus against NPTEL, AICTE Model Curriculum, and construction automation demands.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">Consultancy Expansion</div>
            <p>Expanding the Testing & Consultancy Cell portfolio for state infrastructure, bridges, and NABL soil audits.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">Internship & Hiring</div>
            <p>Direct placement pipeline with L&T, Sobha, Afcons, Shapoorji Pallonji, and local structural consulting firms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. Faculty Members Page */
export const CeFacultyPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

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
      phone: '+91 4884 259000 Ext. 210',
    },
    {
      name: 'Prof. Carol V. D’souza',
      role: 'Associate Professor',
      qualification: 'M.Tech (Geotechnical Engineering), (Ph.D. pursuing)',
      discipline: 'geotech',
      disciplineLabel: 'Geotechnical Engineering',
      experience: '16 Years Exp.',
      specialization: 'Ground Improvement Techniques, Soil-Structure Interaction, Geosynthetics in Highway Slopes',
      email: 'caroldsouza@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 211',
    },
    {
      name: 'Dr. Agnes George',
      role: 'Associate Professor',
      qualification: 'Ph.D. (Water Resources), M.Tech (Hydraulics & Water Resources)',
      discipline: 'environmental',
      disciplineLabel: 'Environmental & Water Resources',
      experience: '14 Years Exp.',
      specialization: 'Watershed Management, GIS & Hydrological Modelling, Urban Flood Mitigation',
      email: 'agnesgeorge@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 212',
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
      phone: '+91 4884 259000 Ext. 213',
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
      phone: '+91 4884 259000 Ext. 214',
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
      phone: '+91 4884 259000 Ext. 215',
    },
    {
      name: 'Prof. Anju C. K.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Computer Aided Structural Engineering)',
      discipline: 'structural',
      disciplineLabel: 'Structural Engineering',
      experience: '8 Years Exp.',
      specialization: 'Building Information Modelling (BIM), Steel Structures, Structural Health Monitoring',
      email: 'anjuck@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 216',
    },
    {
      name: 'Prof. Deepak V. K.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Geoinformatics & Surveying)',
      discipline: 'transportation',
      disciplineLabel: 'Transportation & Surveying',
      experience: '7 Years Exp.',
      specialization: 'Drone Photogrammetry, Remote Sensing, Digital Terrain Modeling, Geodetic Surveying',
      email: 'deepakvk@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 217',
    },
    {
      name: 'Prof. Jency Jose',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Geotechnical Engineering)',
      discipline: 'geotech',
      disciplineLabel: 'Geotechnical Engineering',
      experience: '6 Years Exp.',
      specialization: 'Deep Foundations, Soil Stabilization using Fly Ash and Lime, Slope Stability Analysis',
      email: 'jencyjose@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 218',
    },
    {
      name: 'Prof. Haritha K. R.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Construction Engineering & Management)',
      discipline: 'structural',
      disciplineLabel: 'Structural Engineering',
      experience: '5 Years Exp.',
      specialization: 'Construction Safety & Scheduling, Primavera, Project Lifecycle Cost Analysis',
      email: 'harithakr@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 219',
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
            10 Distinguished Faculty
          </span>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'structural', label: 'Structural Engineering' },
              { id: 'geotech', label: 'Geotechnical Engineering' },
              { id: 'environmental', label: 'Environmental & Water' },
              { id: 'transportation', label: 'Transportation & Survey' },
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
                  {f.name.split(' ').slice(1).map(n => n[0]).join('') || 'CE'}
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
export const CeNonTeachingPage: React.FC = () => {
  const staff = [
    {
      name: 'Mr. Prasanth K. R.',
      designation: 'Laboratory Superintendent',
      lab: 'Concrete & Materials Testing Laboratory',
      qualification: 'Diploma in Civil Engineering (First Class)',
      experience: '18 Years Experience',
      responsibilities: 'Overseeing Universal Testing Machine (1000 kN), 2000 kN Compression Testing Machine, NDT equipment, and calibration records.',
    },
    {
      name: 'Mr. Anoop Varghese',
      designation: 'Senior Instructor',
      lab: 'Advanced Surveying & Geomatics Lab',
      qualification: 'Diploma in Civil Engineering, Certificate in GPS/GIS Surveying',
      experience: '15 Years Experience',
      responsibilities: 'Maintenance and field issuance of Electronic Total Stations, Digital Levels, Theodolites, Handheld GPS, and Survey Camp logistics.',
    },
    {
      name: 'Ms. Sreeja M.',
      designation: 'Technical Assistant',
      lab: 'Computer Aided Civil Engineering Design & BIM Lab',
      qualification: 'B.Sc. Computer Science, Autodesk Certified Professional',
      experience: '11 Years Experience',
      responsibilities: 'Administering 40 high-performance workstations, AutoCAD, STAAD.Pro, ETABS, Revit, and ArcGIS licenses and student logins.',
    },
    {
      name: 'Mr. Baiju C. P.',
      designation: 'Trade Instructor',
      lab: 'Geotechnical & Transportation Engineering Lab',
      qualification: 'ITI Draughtsman Civil, NCVT Certified',
      experience: '14 Years Experience',
      responsibilities: 'Supervising Triaxial Shear, Direct Shear, CBR, Consolidation, and bitumen ductility testing apparatus.',
    },
    {
      name: 'Ms. Soumya K. S.',
      designation: 'Lab Assistant',
      lab: 'Environmental Engineering & Fluid Mechanics Lab',
      qualification: 'Diploma in Chemical / Civil Lab Tech',
      experience: '9 Years Experience',
      responsibilities: 'Reagent preparations for water quality parameter testing (BOD, COD, Turbidity, Hardness), Venturimeter and orifice calibration.',
    },
    {
      name: 'Mr. Davis P. L.',
      designation: 'Department Office Attendant',
      lab: 'Civil Engineering Department Office',
      qualification: 'SSLC, Office Administration Certificate',
      experience: '12 Years Experience',
      responsibilities: 'Departmental filing, document dispatch, student enquiry assistance, and logistics support.',
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Laboratory & Administrative Support</span>
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
          Our technical and administrative personnel ensure safe, calibrated, and seamless day-to-day operation of heavy material testing rigs, precision surveying apparatus, digital computing suites, and university examination workshops.
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
export const CeAdjunctFacultyPage: React.FC = () => {
  const adjuncts = [
    {
      name: 'Dr. N. Ganesan',
      designation: 'Emeritus Professor, NIT Calicut',
      qualification: 'Ph.D. (IIT Madras), FNAE, FIE',
      domain: 'Advanced Prestressed Concrete & FRP Composites',
      association: 'Visiting Chair Professor for Post-Graduate seminars and faculty research colloquia.',
      sessions: 'Prestressed Concrete Bridge Design & Fiber Reinforced Polymer Reinforcement Systems',
    },
    {
      name: 'Er. V. M. Sunny',
      designation: 'Senior Structural Consultant & Director, VMS Structural Consultants',
      qualification: 'M.Tech (Structures, CET)',
      domain: 'High-Rise RCC & Steel Building Design',
      association: 'Conducting real-world project design studios, IS 456 / IS 13920 seismic compliance workshops.',
      sessions: 'Analysis and Detailing of Multi-Storeyed Framed Structures using ETABS',
    },
    {
      name: 'Dr. C. G. Nandakumar',
      designation: 'Former Professor & Head of Ship Technology / Civil Engineering, CUSAT',
      qualification: 'Ph.D. (Finite Element Analysis)',
      domain: 'Computational Mechanics & Finite Element Methods',
      association: 'Mentoring undergraduate honor students in computational simulations and ANSYS modelling.',
      sessions: 'Finite Element Formulations for Plate Bending and Shell Structures',
    },
    {
      name: 'Er. George K. Chacko',
      designation: 'Principal Green Building Assessor & LEED AP',
      qualification: 'M.S. Sustainable Construction, UK',
      domain: 'GRIHA, LEED & IGBC Green Building Certification',
      association: 'Directing the elective course on Sustainable Architecture and Zero-Energy Construction.',
      sessions: 'Embodied Carbon Audits, Life-Cycle Analysis, and Net-Zero Energy Buildings',
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Eminent Visiting Professors</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Adjunct Faculty
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Industry & Research Luminaries
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Adjunct faculty members enrich student learning by infusing practical industry insights, mega-infrastructure design codes, and advanced research methodologies into the curriculum.
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
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Enrolled Scholars</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Student List
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            4 Batches • 240 Students
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
          <div className="text-xs uppercase font-bold text-[#C79628] tracking-widest">Selected Cohort</div>
          <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
            {currentBatch.year}
          </h3>
          <p className="text-xs text-[#7A647F] mt-0.5">
            Class Representatives: <strong className="text-[#28052B]">{currentBatch.reps.join(', ')}</strong>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-2xl font-bold text-[#28052B]">{currentBatch.strength}</div>
            <div className="text-[11px] text-[#7A647F]">Total Enrolled</div>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-bold text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] transition-all">
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
                <th className="py-3 px-4 font-semibold">Program Track</th>
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
                    {st.honors ? (
                      <span className="px-2 py-0.5 rounded-full bg-[#DFC06A]/20 text-[#C79628] font-bold text-[10px]">
                        B.Tech Honours Track
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium text-[10px]">
                        Standard B.Tech
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-4 text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active
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
  const alumni = [
    {
      name: 'Er. Sreeraj M. R.',
      batch: 'Batch of 2012–16',
      role: 'Founder & Principal Consultant, GeoStruct Engineering, Cochin',
      qualification: 'M.Tech (Structural Engineering, NIT Surat)',
      achievement: 'Successfully executed structural design of over 120 commercial and residential high-rise projects in Kerala and Karnataka.',
    },
    {
      name: 'Er. Anjali Menon',
      batch: 'Batch of 2014–18',
      role: 'Project Planning Engineer, Larsen & Toubro (L&T) Construction',
      qualification: 'B.Tech Civil (First Class with Distinction)',
      achievement: 'Key planning lead on Mumbai Coastal Road Package 2 and Ahmedabad Metro Viaduct Project.',
    },
    {
      name: 'Er. Paul J. Kattookaran',
      batch: 'Batch of 2015–19',
      role: 'Senior BIM Specialist, Atkins (SNC-Lavalin Group), Dubai',
      qualification: 'M.Sc. Digital Construction, University of Salford, UK',
      achievement: 'Managed Level-2 BIM implementations for Riyadh Metro Stations and Dubai International Airport terminal expansion.',
    },
    {
      name: 'Er. Reshma R. Nair',
      batch: 'Batch of 2016–20',
      role: 'Assistant Executive Engineer, Kerala Public Works Department (PWD)',
      qualification: 'Kerala PSC Rank 4, M.Tech (Transportation, CET)',
      achievement: 'Supervised KIIFB funded highway widening projects in Central Kerala with advanced asphalt concrete mixes.',
    },
    {
      name: 'Er. Vivek Chandran',
      batch: 'Batch of 2017–21',
      role: 'Doctoral Researcher in Sustainable Concrete, TU Delft, Netherlands',
      qualification: 'M.S. Structural Mechanics (TU Delft)',
      achievement: 'Published 4 high-impact papers on geopolymer concrete degradation under extreme marine salinity environments.',
    },
    {
      name: 'Er. Sharon Maria Davis',
      batch: 'Batch of 2018–22',
      role: 'Structural Design Engineer, Sobha Limited, Bangalore',
      qualification: 'B.Tech Civil Engineering',
      achievement: 'Part of the design and peer-review team for Sobha Dream Acres high-density precast residential township.',
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Legacy of Builders</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Distinguished Alumni
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Global Footprint
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Graduates of the Department of Civil Engineering lead critical infrastructure developments worldwide—from metro rail viaducts and high-rise developments to prestigious government engineering departments and world-class doctoral research laboratories.
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
                <Star className="w-3.5 h-3.5" /> Alumni Network Mentor
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
