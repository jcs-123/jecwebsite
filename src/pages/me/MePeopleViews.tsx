import React, { useState } from 'react';
import {
  ShieldCheck, Users, GraduationCap, Award, Mail, Phone,
  MapPin, CheckCircle2, Download, Search, Briefcase, Star,
  BookOpen, Compass, School, Sparkles, FileText, Wrench, Cog,
  Flame, Gauge, Activity, Cpu, Hammer
} from 'lucide-react';

/* 1. BOS (Board of Studies) Page */
export const MeBOSPage: React.FC = () => {
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
          The Board of Studies (BOS) for Mechanical Engineering is the statutory academic body responsible for designing, evaluating, and modernizing the undergraduate and postgraduate curricula under UGC Autonomous regulations. Comprising academic stalwarts from IITs, NITs, KTU nominees, and heavy industry leaders, the board aligns our curriculum with Industry 4.0, Additive Manufacturing, Computational Fluid Dynamics (CFD), EV Chassis Design, and Robotics.
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
                <th className="py-3 px-4 font-semibold">Designation &amp; Institution</th>
                <th className="py-3 px-4 font-semibold">Role in BOS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-[#FAF7F2]/40">
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">1</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Biju P. L.</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor &amp; Head, Dept. of Mechanical Engg., Jyothi Engineering College</td>
                <td className="py-3 px-4 font-bold text-[#C79628]">Chairman</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">2</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. C. Muraleedharan</td>
                <td className="py-3 px-4 text-[#4A384F]">Senior Professor in Mechanical Engg., NIT Calicut</td>
                <td className="py-3 px-4 text-[#4A384F]">University Nominee (KTU)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">3</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Samarshi Sengupta</td>
                <td className="py-3 px-4 text-[#4A384F]">Associate Professor in Mechanical Engg., IIT Palakkad</td>
                <td className="py-3 px-4 text-[#4A384F]">Subject Expert (Manufacturing &amp; Materials)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">4</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. R. Sreeram Kumar</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor in Mechanical Engg., Govt. Engineering College, Thrissur</td>
                <td className="py-3 px-4 text-[#4A384F]">Subject Expert (Thermal &amp; Fluids)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">5</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Er. Suresh Kumar M.</td>
                <td className="py-3 px-4 text-[#4A384F]">Head of Product Development, Tata Motors Commercial Vehicles</td>
                <td className="py-3 px-4 text-[#4A384F]">Industry Representative (Automotive)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">6</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Er. Santhosh V. A.</td>
                <td className="py-3 px-4 text-[#4A384F]">General Manager (Plant Operations), L&amp;T Heavy Engineering</td>
                <td className="py-3 px-4 text-[#4A384F]">Industry Representative (Heavy Mfg)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">7</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Er. Arun S. Menon</td>
                <td className="py-3 px-4 text-[#4A384F]">Lead Powertrain Simulation Specialist, Mahindra Racing (Alumnus)</td>
                <td className="py-3 px-4 text-[#4A384F]">Meritorious Alumnus Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">8</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Deepanraj B.</td>
                <td className="py-3 px-4 text-[#4A384F]">Associate Professor in Mechanical Engg., JEC</td>
                <td className="py-3 px-4 text-[#4A384F]">Internal Member (Academics)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">9</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Prof. Praveen Raj</td>
                <td className="py-3 px-4 text-[#4A384F]">Associate Professor in Mechanical Engg., JEC</td>
                <td className="py-3 px-4 text-[#4A384F]">Internal Member (Fabrication &amp; Lab In-Charge)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* BOS Mandate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#E7D6C1]">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30">
            <h4 className="font-bold text-xs text-[#28052B] mb-1">Industry 4.0 Integration</h4>
            <p className="text-[11px] text-[#4A384F]">Curriculum integrates Additive Manufacturing, CNC 5-axis machining, and Digital Twin factory simulations.</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30">
            <h4 className="font-bold text-xs text-[#28052B] mb-1">EV &amp; Clean Propulsion</h4>
            <p className="text-[11px] text-[#4A384F]">Hands-on tracks in Electric Vehicle chassis dynamics, battery pack thermal management, and hydrogen fuel cells.</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30">
            <h4 className="font-bold text-xs text-[#28052B] mb-1">Honours &amp; Minors in Robotics</h4>
            <p className="text-[11px] text-[#4A384F]">Autonomous degree minors in 'Industrial Automation &amp; Robotics' and 'Computational Fluid Dynamics'.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Department Advisory Board (DAB) Page */
export const MeAdvisoryBoardPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Strategic Advisory Council</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Advisory Board (DAB)
              </h2>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2] text-xs font-bold text-[#28052B] border border-[#DFC06A]/40">
            Strategic Roadmap 2024–2028
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department Advisory Board (DAB) provides strategic foresight to the Mechanical Engineering department. Bringing together senior executives from automotive giants, heavy manufacturing leaders, aerospace research directors, and premier research universities, the board steers research priorities, equipment modernizations, and industry co-op internships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            name: 'Dr. K. A. Shafi',
            role: 'Senior Professor & Dean of Mechanical Sciences',
            org: 'TKM College of Engineering, Kollam',
            desc: 'Renowned expert in cryogenic heat transfer, fluid flow mechanics, and microchannel heat exchangers.',
            tag: 'Thermal Sciences Lead'
          },
          {
            name: 'Er. Radhakrishnan Nair',
            role: 'Vice President - Manufacturing Operations',
            org: 'Ashok Leyland Heavy Commercial Vehicles',
            desc: 'Guides lean manufacturing, automotive assembly automation, and chassis durability testing labs.',
            tag: 'Automotive Industry Leader'
          },
          {
            name: 'Er. Vinod S. Pillai',
            role: 'Director of Aerospace Structures',
            org: 'ISRO / Vikram Sarabhai Space Centre (VSSC)',
            desc: 'Mentors faculty on composite materials, rocket motor casing stress analysis, and high-temperature alloys.',
            tag: 'Aerospace Scientist'
          },
          {
            name: 'Er. Mathew Cherian',
            role: 'General Manager - R&D Tooling',
            org: 'Bosch Automotive Aftermarket India',
            desc: 'Steers student formula SAE race car projects, CNC precision tooling, and injection molding simulations.',
            tag: 'Precision Tooling Head'
          },
          {
            name: 'Dr. N. Rajesh',
            role: 'Professor in Production Engineering',
            org: 'Government Engineering College, Thrissur',
            desc: 'Advises autonomous syllabus updates for Rapid Prototyping, 3D Metal Printing, and Quality Engineering.',
            tag: 'Manufacturing Mentor'
          },
          {
            name: 'Er. Jithu K. Varghese',
            role: 'Co-Founder & Chief Technology Officer',
            org: 'AeroKinetics Propulsion Labs (Alumnus)',
            desc: 'Facilitates drone propulsion testing, aerodynamic wind tunnel research, and student seed funding at JEC TBI.',
            tag: 'Entrepreneur & Alumnus'
          }
        ].map((member, i) => (
          <div key={i} className="p-5 bg-white rounded-2xl border border-[#E7D6C1] shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#FAF7F2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C79628] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#DFC06A]/30">
                  {member.tag}
                </span>
                <Sparkles className="w-4 h-4 text-[#C79628]" />
              </div>
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">{member.name}</h4>
              <p className="text-xs font-semibold text-[#4A384F] mt-0.5">{member.role}</p>
              <p className="text-[11px] font-mono text-[#7A647F] mt-0.5">{member.org}</p>
              <p className="text-xs text-[#4A384F] mt-2.5 leading-relaxed font-light">{member.desc}</p>
            </div>
            <div className="pt-3 border-t border-[#E7D6C1]/60 flex items-center justify-between text-[11px] text-[#7A647F]">
              <span>Advisory Term: 2024–2026</span>
              <span className="font-bold text-[#28052B]">DAB Member</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 3. Faculty Members Directory Page */
export const MeFacultyPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const facultyMembers = [
    {
      name: 'Dr. Biju P. L.',
      designation: 'Professor & Head of Department',
      qual: 'Ph.D (Thermal Engineering, NIT Calicut), M.Tech, B.Tech',
      exp: '23+ Years Experience • 48 Publications',
      domain: 'thermal',
      domainLabel: 'Thermal & Fluid Sciences',
      email: 'bijupl@jecc.ac.in',
      phone: '+91 94472 18920',
      research: 'Computational Fluid Dynamics (CFD), microchannel heat transfer, phase change materials, electronic cooling.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Dr. Deepanraj B.',
      designation: 'Associate Professor & Research Coordinator',
      qual: 'Ph.D (Alternative Fuels & Combustion, Anna Univ), M.E',
      exp: '17+ Years Experience • 54 Scopus/SCI Papers',
      domain: 'thermal',
      domainLabel: 'Thermal & Fluid Sciences',
      email: 'deepanraj@jecc.ac.in',
      phone: '+91 94464 56781',
      research: 'Biofuels, HHO gas enrichment in CI engines, emission reduction, solar thermal energy storage systems.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Praveen Raj',
      designation: 'Associate Professor & FabLab Coordinator',
      qual: 'M.Tech (Computer Integrated Manufacturing, GEC Thrissur), pursuing Ph.D',
      exp: '16+ Years Experience • 22 Papers',
      domain: 'manufacturing',
      domainLabel: 'Design & Manufacturing',
      email: 'praveenraj@jecc.ac.in',
      phone: '+91 94478 34125',
      research: 'Additive manufacturing (FDM/SLA), CNC 5-axis machining, topological optimization, rapid tooling.',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Dr. Manoj Kumar V.',
      designation: 'Associate Professor',
      qual: 'Ph.D (Composite Materials, IIT Madras), M.Tech (Machine Design)',
      exp: '15+ Years Experience • 31 Papers',
      domain: 'design-materials',
      domainLabel: 'Materials & Machine Design',
      email: 'manojkumar@jecc.ac.in',
      phone: '+91 94951 89023',
      research: 'Metal matrix composites, finite element analysis (FEA), fracture mechanics, crashworthiness simulations.',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Christy V. Vazhappilly',
      designation: 'Assistant Professor & SAE Faculty Advisor',
      qual: 'M.Tech (Automotive Engineering, Amrita), B.Tech (ME)',
      exp: '12+ Years Experience • 16 Papers',
      domain: 'automotive-robotics',
      domainLabel: 'Automotive & Robotics',
      email: 'christy@jecc.ac.in',
      phone: '+91 94469 12345',
      research: 'Formula Bharat race car chassis design, regenerative shock absorbers, vehicle rollover dynamics.',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Jineesh P.',
      designation: 'Assistant Professor',
      qual: 'M.Tech (Industrial Engineering, CET Trivandrum), B.Tech (ME)',
      exp: '10+ Years Experience • 12 Papers',
      domain: 'manufacturing',
      domainLabel: 'Design & Manufacturing',
      email: 'jineesh@jecc.ac.in',
      phone: '+91 94960 45678',
      research: 'Lean manufacturing, Six Sigma, supply chain analytics, cellular manufacturing simulations.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Cijo Mathew',
      designation: 'Assistant Professor & CAD Lab In-Charge',
      qual: 'M.Tech (Machine Design, Karunya), B.Tech (ME)',
      exp: '9+ Years Experience • 10 Papers',
      domain: 'design-materials',
      domainLabel: 'Materials & Machine Design',
      email: 'cijomathew@jecc.ac.in',
      phone: '+91 94475 78901',
      research: 'Parametric 3D CAD modeling (SolidWorks, CATIA), kinematic multi-body simulations, gear design.',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Sukesh O. P.',
      designation: 'Assistant Professor',
      qual: 'M.Tech (Robotics & Mechatronics, SRM), B.Tech (ME)',
      exp: '8+ Years Experience • 8 Papers',
      domain: 'automotive-robotics',
      domainLabel: 'Automotive & Robotics',
      email: 'sukesh@jecc.ac.in',
      phone: '+91 94461 23456',
      research: 'Industrial manipulator inverse kinematics, ROS simulation, autonomous mobile robots (AMR) in factories.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const filtered = facultyMembers.filter(f => {
    const matchesDomain = filter === 'all' || f.domain === filter;
    const matchesQuery =
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.research.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.designation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesQuery;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Distinguished Faculty Roster</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Faculty Members
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            100% Post-Graduate • 50% Ph.D Holders
          </span>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'All Faculty' },
              { id: 'thermal', label: 'Thermal & Fluid Sciences' },
              { id: 'manufacturing', label: 'Design & Manufacturing' },
              { id: 'design-materials', label: 'Materials & Machine Design' },
              { id: 'automotive-robotics', label: 'Automotive & Robotics' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#28052B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A647F]" />
            <input
              type="text"
              placeholder="Search faculty or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs text-[#28052B] placeholder-[#7A647F] focus:outline-none focus:ring-1 focus:ring-[#C79628]"
            />
          </div>
        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((faculty, i) => (
          <div key={i} className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm flex flex-col justify-between hover:border-[#C79628] transition-all">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#DFC06A]/40 shrink-0 shadow-xs">
                  <img src={faculty.img} alt={faculty.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#DFC06A]/30">
                    {faculty.domainLabel}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
                    {faculty.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#4A384F]">{faculty.designation}</p>
                  <p className="text-[11px] font-mono text-[#7A647F]">{faculty.qual}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#FAF7F2]">
                <div className="flex items-center gap-2 text-xs text-[#7A647F]">
                  <Award className="w-3.5 h-3.5 text-[#C79628] shrink-0" />
                  <span>{faculty.exp}</span>
                </div>
                <div className="text-xs text-[#4A384F] leading-relaxed">
                  <strong className="text-[#28052B] font-semibold">Specialization: </strong>
                  {faculty.research}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#E7D6C1] flex flex-wrap items-center justify-between gap-3 text-xs">
              <a href={`mailto:${faculty.email}`} className="flex items-center gap-1.5 text-[#28052B] hover:text-[#C79628] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#C79628]" />
                <span className="font-mono text-[11px]">{faculty.email}</span>
              </a>
              <div className="flex items-center gap-1.5 text-[#7A647F]">
                <Phone className="w-3.5 h-3.5 text-[#C79628]" />
                <span className="font-mono text-[11px]">{faculty.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Non-Teaching Staff Page */
export const MeNonTeachingPage: React.FC = () => {
  const staff = [
    {
      name: 'Mr. Shaju P. O.',
      designation: 'Senior Workshop Superintendent',
      dept: 'Central Mechanical Workshops & Machine Shop',
      qual: 'Diploma in Mechanical Engineering, B.Tech',
      exp: '20 Years Experience',
      responsibilities: 'Heavy-duty lathe machines, universal milling machines, radial drilling, shaping and slotting units.'
    },
    {
      name: 'Mr. Anto V. J.',
      designation: 'Senior Technical Officer (CNC & CAD/CAM)',
      dept: 'CNC Machining & FabLab Center',
      qual: 'Diploma in Mechanical Engineering & CNC Certified Programmer',
      exp: '16 Years Experience',
      responsibilities: 'Fanuc CNC 3-axis milling center, CNC lathe tooling offsets, laser cutters, 3D printer calibration.'
    },
    {
      name: 'Mr. Rajeev M. K.',
      designation: 'Technical Assistant',
      dept: 'Thermal Engineering & IC Engines Lab',
      qual: 'Diploma in Automobile Engineering',
      exp: '14 Years Experience',
      responsibilities: 'Computerized multi-cylinder petrol and diesel engine test rigs, exhaust gas analyzers, bomb calorimeter.'
    },
    {
      name: 'Mr. Bipin Thomas',
      designation: 'Trade Instructor (Welding & Foundry)',
      dept: 'Welding, Smithy & Casting Workshop',
      qual: 'ITI (Welder & Turner), Certified NDT Level II',
      exp: '12 Years Experience',
      responsibilities: 'TIG, MIG, and submerged arc welding bays, sand casting mold preparation, forge heating furnaces.'
    },
    {
      name: 'Mr. Sujith Kumar K.',
      designation: 'Laboratory Assistant',
      dept: 'Fluid Mechanics & Hydraulic Machinery Lab',
      qual: 'ITI (Fitter), Diploma in Mechanical Engg',
      exp: '9 Years Experience',
      responsibilities: 'Pelton wheel turbine, Francis turbine, Kaplan turbine rigs, centrifugal and reciprocating pump calibration.'
    },
    {
      name: 'Ms. Shiny Jose',
      designation: 'Confidential Department Assistant',
      dept: 'HOD Office & Department Records',
      qual: 'B.Com, PGDCA',
      exp: '15 Years Experience',
      responsibilities: 'NBA Tier-1 documentation, KTU examination mark registries, student attendance monitoring, stock registers.'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Laboratory &amp; Workshop Technicians</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Non Teaching Staff
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Certified Machinists &amp; Instructors
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Our workshop superintendents, CNC programmers, and certified welding instructors maintain over 25,000 square feet of heavy machinery, CNC centers, foundry bays, and engine dynamometers with rigorous safety and industrial hygiene protocols.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {staff.map((member, i) => (
          <div key={i} className="p-5 bg-white rounded-2xl border border-[#E7D6C1] shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-[#FAF7F2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C79628] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#DFC06A]/30">
                  {member.dept}
                </span>
                <Wrench className="w-3.5 h-3.5 text-[#C79628]" />
              </div>
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] mt-2">{member.name}</h4>
              <p className="text-xs font-semibold text-[#4A384F]">{member.designation}</p>
              <p className="text-[11px] font-mono text-[#7A647F] mt-0.5">{member.qual}</p>
              <p className="text-xs text-[#4A384F] mt-2.5 leading-relaxed font-light">{member.responsibilities}</p>
            </div>
            <div className="pt-3 border-t border-[#E7D6C1]/60 flex items-center justify-between text-[11px] text-[#7A647F]">
              <span>Experience: {member.exp}</span>
              <span className="text-[#28052B] font-bold">JEC Staff</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 5. Adjunct Faculty Page */
export const MeAdjunctFacultyPage: React.FC = () => {
  const adjuncts = [
    {
      name: 'Dr. Unnikrishnan K.',
      designation: 'Former Outstanding Scientist & Deputy Director',
      org: 'Liquid Propulsion Systems Centre (LPSC / ISRO)',
      focus: 'Rocket Cryogenic Propulsion & Turbopumps',
      bio: 'Over 34 years heading cryogenic engine upper stage development for GSLV launch vehicles. Mentors student aerospace projects.'
    },
    {
      name: 'Er. Anandarajan M.',
      designation: 'Chief Technical Specialist (Vehicle Dynamics)',
      org: 'Tata Motors European Technical Centre (TMETC)',
      focus: 'Multi-Body Dynamics (MBD) & Active Suspension Systems',
      bio: 'Conducts masterclasses on vehicle ride and handling simulations using Adams Car and Formula SAE suspension kinematic tuning.'
    },
    {
      name: 'Dr. Sivadasan P.',
      designation: 'Distinguished Visiting Fellow & Material Scientist',
      org: 'CSIR - National Institute for Interdisciplinary Science & Technology (NIIST)',
      focus: 'Advanced Metal Matrix Composites & Magnesium Alloys',
      bio: 'Co-guides Ph.D scholars and undergraduate capstone teams developing lightweight magnesium alloy brake discs for electric vehicles.'
    },
    {
      name: 'Er. Sreekanth N. Panicker',
      designation: 'Vice President of Engineering & Technology',
      org: 'Thermax Limited / Clean Energy Systems',
      focus: 'Industrial Waste Heat Recovery & Supercritical Boilers',
      bio: 'Brings immense thermal process engineering insight, guiding energy-efficient steam generation and heat exchanger optimizations.'
    }
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Distinguished Industry Mentors</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Adjunct Faculty
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            ISRO, Automotive &amp; CSIR Leaders
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Distinguished adjunct professors from ISRO, CSIR-NIIST, and global automotive R&amp;D divisions teach specialized electives, supervise competitive engineering projects (Formula Bharat, SAE BAJA), and foster patentable hardware prototyping.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {adjuncts.map((prof, i) => (
          <div key={i} className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4 hover:border-[#C79628] transition-all">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#DFC06A]/30">
                  {prof.focus}
                </span>
                <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] mt-2">
                  {prof.name}
                </h3>
                <p className="text-xs font-semibold text-[#4A384F]">{prof.designation}</p>
                <p className="text-[11px] font-mono text-[#7A647F]">{prof.org}</p>
              </div>
              <Sparkles className="w-5 h-5 text-[#C79628]" />
            </div>

            <p className="text-xs text-[#4A384F] leading-relaxed font-light pt-2 border-t border-[#FAF7F2]">
              {prof.bio}
            </p>

            <div className="pt-3 border-t border-[#E7D6C1] flex items-center justify-between text-xs text-[#7A647F]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                Industry Mentorship &amp; Capstones
              </span>
              <span className="font-semibold text-[#28052B]">Visiting Faculty</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 6. Student List Page */
export const MeStudentListPage: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>('2021-25');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const batches: Record<string, Array<{ roll: string; name: string; cgpa: string; elective: string; placement: string }>> = {
    '2021-25': [
      { roll: 'JEC21ME001', name: 'Abhiram V. S.', cgpa: '9.21', elective: 'Robotics & Automation', placement: 'Tata Motors (8.5 LPA)' },
      { roll: 'JEC21ME002', name: 'Adithya Narayanan', cgpa: '8.85', elective: 'Computational Fluid Dynamics (CFD)', placement: 'Quest Global (6.5 LPA)' },
      { roll: 'JEC21ME003', name: 'Akshay Krishna', cgpa: '8.72', elective: 'Automotive Powertrain Design', placement: 'Ashok Leyland (7.8 LPA)' },
      { roll: 'JEC21ME004', name: 'Albin George', cgpa: '9.34', elective: 'Additive Manufacturing & 3D Print', placement: 'L&T Heavy Engineering (7.5 LPA)' },
      { roll: 'JEC21ME005', name: 'Ashwin Pradeep', cgpa: '8.45', elective: 'Finite Element Analysis (FEA)', placement: 'Hyundai Motor India (7.0 LPA)' },
      { roll: 'JEC21ME006', name: 'Basil K. Eldho', cgpa: '8.90', elective: 'Electric Vehicle Chassis Design', placement: 'Bosch Mobility (8.2 LPA)' },
      { roll: 'JEC21ME007', name: 'Devanand M.', cgpa: '8.60', elective: 'HVAC & Refrigeration Engineering', placement: 'Voltas Limited (6.0 LPA)' },
      { roll: 'JEC21ME008', name: 'Faraz Mohammed', cgpa: '9.12', elective: 'Robotics & Automation', placement: 'Federal-Mogul Goetze (6.8 LPA)' },
      { roll: 'JEC21ME009', name: 'Gokul Das P.', cgpa: '8.75', elective: 'Composite Materials & NDT', placement: 'MRF Tyres (6.2 LPA)' },
      { roll: 'JEC21ME010', name: 'Harikrishnan R.', cgpa: '9.42', elective: 'Automotive Powertrain Design', placement: 'Mahindra & Mahindra (9.0 LPA)' }
    ],
    '2022-26': [
      { roll: 'JEC22ME001', name: 'Aravind S. Kumar', cgpa: '9.10', elective: 'EV Systems Engineering', placement: 'Intern @ Tata Motors' },
      { roll: 'JEC22ME002', name: 'Bibin Varghese', cgpa: '8.80', elective: 'Computational Fluid Dynamics', placement: 'Intern @ Quest Global' },
      { roll: 'JEC22ME003', name: 'Christy Joseph', cgpa: '8.65', elective: 'CNC & CAM Tooling', placement: 'Intern @ L&T Defense' },
      { roll: 'JEC22ME004', name: 'Dhanush Menon', cgpa: '9.28', elective: 'Industrial Robotics', placement: 'Intern @ Bosch' },
      { roll: 'JEC22ME005', name: 'Gautham Krishna', cgpa: '8.52', elective: 'Automotive Aerodynamics', placement: 'Formula Bharat Core Team' }
    ],
    '2023-27': [
      { roll: 'JEC23ME001', name: 'Alan V. Shaju', cgpa: '8.92', elective: 'Solid Mechanics & Design', placement: 'Active Student (Semester 4)' },
      { roll: 'JEC23ME002', name: 'Arun K. Pillai', cgpa: '9.15', elective: 'Thermal Sciences', placement: 'Active Student (Semester 4)' },
      { roll: 'JEC23ME003', name: 'Deepak Mohan', cgpa: '8.70', elective: 'Fluid Mechanics', placement: 'Active Student (Semester 4)' },
      { roll: 'JEC23ME004', name: 'Edwin Thomas', cgpa: '8.88', elective: 'Manufacturing Technology', placement: 'Active Student (Semester 4)' }
    ],
    '2024-28': [
      { roll: 'JEC24ME001', name: 'Abhijith S.', cgpa: 'N/A (Sem 1)', elective: 'Autonomous Scheme 2024', placement: 'First Year Induction' },
      { roll: 'JEC24ME002', name: 'Basil Benny', cgpa: 'N/A (Sem 1)', elective: 'Autonomous Scheme 2024', placement: 'First Year Induction' },
      { roll: 'JEC24ME003', name: 'Cyril Mathew', cgpa: 'N/A (Sem 1)', elective: 'Autonomous Scheme 2024', placement: 'First Year Induction' }
    ]
  };

  const currentList = batches[selectedBatch] || [];
  const filteredList = currentList.filter(s =>
    s.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    s.roll.toLowerCase().includes(searchFilter.toLowerCase()) ||
    s.elective.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Enrolled Undergraduates</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Student List
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Intake: 90 Seats / Batch
          </span>
        </div>

        {/* Batch Selection & Search Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {['2021-25', '2022-26', '2023-27', '2024-28'].map(b => (
              <button
                key={b}
                onClick={() => setSelectedBatch(b)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedBatch === b
                    ? 'bg-[#28052B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
                }`}
              >
                Batch {b}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A647F]" />
            <input
              type="text"
              placeholder="Search student or roll no..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs text-[#28052B] placeholder-[#7A647F] focus:outline-none focus:ring-1 focus:ring-[#C79628]"
            />
          </div>
        </div>
      </div>

      {/* Student Table */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Roster: Batch {selectedBatch}
          </h3>
          <span className="text-xs text-[#7A647F] font-mono">Showing {filteredList.length} Students</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#E7D6C1] rounded-2xl overflow-hidden">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Roll No</th>
                <th className="py-3 px-4 font-semibold">Student Name</th>
                <th className="py-3 px-4 font-semibold">CGPA</th>
                <th className="py-3 px-4 font-semibold">Elective / Track</th>
                <th className="py-3 px-4 font-semibold">Career / Placement Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-[#FAF7F2]/40">
              {filteredList.map((stu, i) => (
                <tr key={i} className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-[#28052B]">{stu.roll}</td>
                  <td className="py-3 px-4 font-bold text-[#28052B]">{stu.name}</td>
                  <td className="py-3 px-4 font-mono text-[#C79628] font-bold">{stu.cgpa}</td>
                  <td className="py-3 px-4 text-[#4A384F]">{stu.elective}</td>
                  <td className="py-3 px-4 font-medium text-[#28052B]">{stu.placement}</td>
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
export const MeAlumniPage: React.FC = () => {
  const alumni = [
    {
      name: 'Er. Arun S. Menon',
      batch: 'Class of 2011',
      designation: 'Lead Aerodynamics Engineer',
      org: 'McLaren Racing / Formula 1, Woking, UK',
      quote: 'The rigorous wind tunnel experiments and Formula student fabrication in the JEC workshop gave me the competitive edge to break into elite motorsport aerodynamics.',
      achievement: 'Key designer for carbon-fiber ground effect aerodynamic tunnels.'
    },
    {
      name: 'Er. Vishnu Prasad',
      batch: 'Class of 2014',
      designation: 'Senior Vehicle Crash Simulation Specialist',
      org: 'Volvo Car Group, Gothenburg, Sweden',
      quote: 'The finite element analysis and non-linear crashworthiness modeling foundations taught at Jyothi are used every day in designing five-star Euro NCAP safety cages.',
      achievement: 'Authored 5 international patents on pedestrian impact absorption.'
    },
    {
      name: 'Er. Rajesh K. Varma',
      batch: 'Class of 2013',
      designation: 'Manufacturing Operations Lead',
      org: 'Tesla Gigafactory Berlin-Brandenburg, Germany',
      quote: 'From operating manual lathes in the central workshop to leading automated robotic giga-casting lines in Europe, Jyothi instilled in me the passion for manufacturing.',
      achievement: 'Oversees high-pressure aluminum die-casting production lines.'
    },
    {
      name: 'Er. Rahul M. Nair',
      batch: 'Class of 2016',
      designation: 'Senior Propulsion Engineer',
      org: 'Rolls-Royce Aerospace, Bristol, UK',
      quote: 'The thermal engineering labs and gas turbine thermodynamics at JEC provided the exact analytical bedrock needed for commercial jet engine turbine blade cooling.',
      achievement: 'Recipient of Rolls-Royce Innovation Excellence Award 2022.'
    },
    {
      name: 'Er. Jithu K. Varghese',
      batch: 'Class of 2017',
      designation: 'Founder & Chief Executive Officer',
      org: 'AeroKinetics Propulsion Labs (Incubated at JEC TBI)',
      quote: 'The entrepreneurial encouragement from mechanical faculty allowed our final year drone engine prototype to evolve into a multimillion-rupee defense tech startup.',
      achievement: 'Secured ₹1.5 Cr iDEX Defence Innovation grant from Govt. of India.'
    },
    {
      name: 'Dr. Akhil S. Nair',
      batch: 'Class of 2012',
      designation: 'Postdoctoral Research Scientist',
      org: 'ETH Zurich, Advanced Manufacturing Laboratory, Switzerland',
      quote: 'The balance of hands-on foundry work, CNC machining, and academic research rigour at Jyothi shaped my academic journey to ETH Zurich.',
      achievement: 'Pioneered laser powder bed fusion (L-PBF) metal 3D printing of titanium alloys.'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Global Alumni Network</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Distinguished Alumni
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            1,800+ Alumni in 28 Countries
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Graduates of Mechanical Engineering from Jyothi Engineering College hold leadership roles in Formula 1 racing, aerospace giants like Rolls-Royce, automotive innovators like Tesla and Volvo, and top academic institutions worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {alumni.map((alum, i) => (
          <div key={i} className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#C79628] transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#FAF7F2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C79628] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#DFC06A]/30">
                  {alum.batch}
                </span>
                <Sparkles className="w-4 h-4 text-[#C79628]" />
              </div>
              <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">{alum.name}</h4>
              <p className="text-xs font-semibold text-[#4A384F]">{alum.designation}</p>
              <p className="text-[11px] font-mono text-[#7A647F]">{alum.org}</p>
              <p className="text-xs italic text-[#4A384F] leading-relaxed font-serif bg-[#FAF7F2] p-3 rounded-xl border border-[#DFC06A]/20">
                "{alum.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-[#E7D6C1] text-xs space-y-1">
              <div className="text-[10px] font-bold text-[#C79628] uppercase tracking-wider">Milestone</div>
              <p className="text-[11.5px] text-[#28052B] font-medium">{alum.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
