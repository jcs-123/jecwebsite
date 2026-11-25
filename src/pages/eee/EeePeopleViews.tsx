import React, { useState } from 'react';
import {
  ShieldCheck, Users, GraduationCap, Award, Mail, Phone,
  MapPin, CheckCircle2, Download, Search, Briefcase, Star,
  BookOpen, Compass, School, Sparkles, FileText, Zap, BatteryCharging,
  Sun, Gauge, Activity, PlugZap, Power, Layers, Check
} from 'lucide-react';

/* 1. BOS (Board of Studies) Page - Exactly Matching Screenshot */
export const EeeBOSPage: React.FC = () => {
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
          The Board of Studies (BOS) for Electrical &amp; Electronics Engineering is the statutory governance body established under the UGC autonomous regulations and approved by the Academic Council. It is responsible for framing curriculum schemes, designing semester syllabi, introducing green energy &amp; EV technologies, and validating continuous evaluation frameworks.
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
                    <span>Dr. Jarin T.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor &amp; Head, Dept. of EEE, Jyothi Engineering College</td>
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
                      KS
                    </span>
                    <span>Dr. K. S. Sunitha</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor in Electrical Engineering, Govt. Engineering College, Thrissur</td>
                <td className="py-3.5 px-4 text-[#4A384F]">University Nominee (KTU)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">3</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      AS
                    </span>
                    <span>Dr. Ashok S.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Senior Professor in Electrical Engineering, NIT Calicut</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Smart Grids &amp; Microgrids)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">4</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      AR
                    </span>
                    <span>Dr. Arun Rahul S.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor in Electrical Engineering, IIT Palakkad</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Power Electronics &amp; EV Drives)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">5</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      RN
                    </span>
                    <span>Er. Rajesh K. Nair</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Executive Vice President &amp; Head of R&amp;D, Schneider Electric India</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Industry Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">6</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      JP
                    </span>
                    <span>Er. Jayakumar P.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Deputy Chief Engineer (Transmission &amp; Grid Ops), KSEB</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Public Sector Industry Expert</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">7</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      VC
                    </span>
                    <span>Er. Vivek Chandran</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Senior Battery Architect, Ather Energy / Ex-Tesla (Alumnus)</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Meritorious Alumnus Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">8</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      SV
                    </span>
                    <span>Dr. Shijoh V.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor in EEE, JEC</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Internal Member (Academic Coordinator)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">9</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      RP
                    </span>
                    <span>Prof. Ratnan P.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor in EEE, JEC</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Internal Member (Lab In-charge)</td>
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
              <span>Formulating syllabi for 4-year B.Tech in Electrical &amp; Electronics Engineering in alignment with IEEE PES &amp; NEP 2020.</span>
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
              <span>Approving cutting-edge elective courses in Electric Vehicle Powertrains, Solar Microgrids, and Smart Grid SCADA.</span>
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
                  Integration of EV Powertrain simulation and BMS hardware testing rubrics.
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
                  Ratification of Schneider Electric Automation Center and 100 kWp rooftop solar credit syllabus.
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
export const EeeAdvisoryBoardPage: React.FC = () => {
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
          The Department Advisory Board (DAB) bridges academia and the global electrical industry. Composed of executives from grid operators, power multinational corporations, clean-energy pioneers, and senior research professors, the board convenes biannually to steer our pedagogical goals, sponsor state-of-the-art power testing laboratories, and facilitate strategic employment pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            name: 'Dr. Jacob Raglend',
            role: 'Senior Professor in Electrical Engineering',
            org: 'VIT University / IEEE PES Senior Member',
            desc: 'Expert in Smart Grid security, high-voltage insulation diagnostics, and artificial intelligence in microgrid control systems.',
            tag: 'Academic Stalwart'
          },
          {
            name: 'Er. Sujith V. S.',
            role: 'Director - Grid Modernization Solutions',
            org: 'Schneider Electric Global R&D Centre',
            desc: 'Leads digital grid automation, distribution management systems (ADMS), and IEC 61850 substation communication protocols.',
            tag: 'Grid Automation Lead'
          },
          {
            name: 'Er. Anoop G. Nambiar',
            role: 'Head of Power Electronics & Drives',
            org: 'ABB India Power Grids / Hitachi Energy',
            desc: 'Guides student capstones in high-power converters, HVDC transmission valves, and grid-connected photovoltaic inverters.',
            tag: 'Power Electronics Lead'
          },
          {
            name: 'Er. C. K. Sreejith',
            role: 'Chief Engineer (Renewable Energy)',
            org: 'ANERT & KSEB Green Energy Corridor',
            desc: 'Mentors college solar microgrid operations, net metering protocols, and decentralized wind-solar hybrid microgrid installations.',
            tag: 'Public Sector Advisor'
          },
          {
            name: 'Dr. Biju K.',
            role: 'Dean of Research & Professor in EEE',
            org: 'College of Engineering Trivandrum (CET)',
            desc: 'Advises faculty research grant applications with DST-SERB, MNRE, and AICTE for electric mobility testbeds.',
            tag: 'Research Mentor'
          },
          {
            name: 'Er. Harikrishnan S.',
            role: 'Co-Founder & Chief Technology Officer',
            org: 'VoltCraft Energy Technologies (Alumnus)',
            desc: 'Facilitates startup incubation, EV battery swap station prototyping, and student internship grants at JEC TBI.',
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
export const EeeFacultyPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const facultyMembers = [
    {
      name: 'Dr. Jarin T.',
      designation: 'Professor & Head of Department',
      qual: 'Ph.D (Power Electronics & Renewable Energy, Anna Univ), M.E, B.Tech',
      exp: '21+ Years Experience • 52 International Publications',
      domain: 'power-electronics',
      domainLabel: 'Power Electronics & EV',
      email: 'jarin@jecc.ac.in',
      phone: '+91 94474 81230',
      research: 'High gain DC-DC converters, EV fast charging, Solar PV micro-inverters, Power quality mitigation.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Dr. Shijoh V.',
      designation: 'Associate Professor & Dean of Academics',
      qual: 'Ph.D (Control Systems, NIT Calicut), M.Tech (Power & Energy)',
      exp: '18+ Years Experience • 38 Journals',
      domain: 'control-automation',
      domainLabel: 'Control & Automation',
      email: 'shijoh@jecc.ac.in',
      phone: '+91 94463 21980',
      research: 'Robust nonlinear control, Fractional-order controllers, Industrial PLC automation, SCADA networks.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Ratnan P.',
      designation: 'Associate Professor & Lab Director',
      qual: 'M.Tech (Power Systems, CET Trivandrum), B.Tech (EEE)',
      exp: '24+ Years Experience • Certified Energy Auditor (BEE)',
      domain: 'power-systems',
      domainLabel: 'Power Systems & Smart Grids',
      email: 'ratnan@jecc.ac.in',
      phone: '+91 94471 05672',
      research: 'Power system protection, Digital relay coordination, Electrical energy auditing, Substation design.',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Dr. Agnes V. Joseph',
      designation: 'Associate Professor',
      qual: 'Ph.D (Renewable Energy Systems, KTU), M.Tech (Power Electronics)',
      exp: '14+ Years Experience • 22 Publications',
      domain: 'renewable-energy',
      domainLabel: 'Renewable Energy & Grids',
      email: 'agnes@jecc.ac.in',
      phone: '+91 94468 90123',
      research: 'Grid integration of hybrid wind-solar systems, MPPT algorithms, Energy storage battery chemistries.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Jenson Jose',
      designation: 'Assistant Professor & EV CoE In-Charge',
      qual: 'M.Tech (Industrial Drives & Control, MITS), pursuing Ph.D',
      exp: '11+ Years Experience • 14 Papers',
      domain: 'power-electronics',
      domainLabel: 'Power Electronics & EV',
      email: 'jenson@jecc.ac.in',
      phone: '+91 94950 18273',
      research: 'BLDC motor design, PMSM vector control for electric 2-wheelers, Regenerative braking algorithms.',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Della David',
      designation: 'Assistant Professor',
      qual: 'M.Tech (Power Systems, GEC Thrissur), B.Tech (EEE)',
      exp: '9+ Years Experience • 10 Papers',
      domain: 'power-systems',
      domainLabel: 'Power Systems & Smart Grids',
      email: 'della@jecc.ac.in',
      phone: '+91 94962 34567',
      research: 'Wide area monitoring, PMU placement, Synchrophasor analytics, Microgrid frequency control.',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Akhil A. Balakrishnan',
      designation: 'Assistant Professor',
      qual: 'M.Tech (Embedded Systems & IoT, Amrita), B.Tech (EEE)',
      exp: '8+ Years Experience • 8 Papers',
      domain: 'control-automation',
      domainLabel: 'Control & Automation',
      email: 'akhilbalakrishnan@jecc.ac.in',
      phone: '+91 94476 11223',
      research: 'Smart metering networks, IoT based condition monitoring of transformers, Industrial LoRaWAN.',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Aswathy Rajan',
      designation: 'Assistant Professor',
      qual: 'M.Tech (Renewable Energy Technologies, Karunya), B.Tech (EEE)',
      exp: '7+ Years Experience • 6 Papers',
      domain: 'renewable-energy',
      domainLabel: 'Renewable Energy & Grids',
      email: 'aswathy@jecc.ac.in',
      phone: '+91 94460 78901',
      research: 'Solar thermal collectors, Bifacial solar panel performance modeling, Micro-inverter thermal analysis.',
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
              { id: 'power-electronics', label: 'Power Electronics & EV' },
              { id: 'power-systems', label: 'Power Systems & Smart Grids' },
              { id: 'renewable-energy', label: 'Renewable Energy' },
              { id: 'control-automation', label: 'Control & Automation' },
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
              placeholder="Search faculty or research..."
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
export const EeeNonTeachingPage: React.FC = () => {
  const staff = [
    {
      name: 'Mr. Binoj K. T.',
      designation: 'Senior Technical Superintendent',
      dept: 'Electrical Machines & Power Systems Lab',
      qual: 'Diploma in Electrical Engineering, B.Tech (EEE)',
      exp: '17 Years Experience',
      responsibilities: 'Calibration of synchronous machines, high voltage transmission line simulators, 3-phase alternator testing rigs.'
    },
    {
      name: 'Mr. Prasanth P. C.',
      designation: 'Senior Technical Officer',
      dept: 'Power Electronics & EV Drive Testbed',
      qual: 'Diploma in Electrical & Electronics Engineering',
      exp: '14 Years Experience',
      responsibilities: 'Digital storage oscilloscope maintenance, DSPTMS320C28335 motor boards, dynamometer setup, thermal imaging.'
    },
    {
      name: 'Ms. Soumya C. M.',
      designation: 'Technical Assistant',
      dept: 'Control Systems & Industrial Automation Lab',
      qual: 'Diploma in Electrical Engineering',
      exp: '10 Years Experience',
      responsibilities: 'Siemens S7-1200 PLC test benches, servo position control units, SCADA human-machine interfaces.'
    },
    {
      name: 'Mr. Sreeraj M. R.',
      designation: 'Laboratory Assistant',
      dept: 'Circuits, Measurements & Solar Testing Studio',
      qual: 'ITI (Electrician) & Certified Wireman Licence (Govt. of Kerala)',
      exp: '8 Years Experience',
      responsibilities: 'Solar panel sun simulator alignment, pyranometer calibrations, electrical safety grounding inspections.'
    },
    {
      name: 'Mr. Unnikrishnan V.',
      designation: 'Trade Instructor',
      dept: 'Basic Electrical & Wiring Workshop',
      qual: 'ITI & Electrical Supervisor Grade A Licence',
      exp: '12 Years Experience',
      responsibilities: 'Industrial conduit wiring, staircase circuits, conduit bending, earthing pit measurement and testing.'
    },
    {
      name: 'Ms. Bindu Sasi',
      designation: 'Confidential Department Assistant',
      dept: 'HOD Office & Department Records',
      qual: 'B.Sc, PGDCA',
      exp: '15 Years Experience',
      responsibilities: 'NBA and NAAC documentation, student attendance registry, KTU examination liaison, department library.'
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Laboratory &amp; Administrative Backbone</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Non Teaching Staff
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Licensed Electrical Technicians
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Our specialized technical and administrative staff ensure seamless operation of our industrial electrical testbeds, high voltage safety interlocks, electric vehicle dynamometers, and academic administrative protocols in compliance with Kerala State Electricity Inspectorate standards.
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
                <Zap className="w-3.5 h-3.5 text-[#C79628]" />
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
export const EeeAdjunctFacultyPage: React.FC = () => {
  const adjuncts = [
    {
      name: 'Dr. Mukundhan R.',
      designation: 'Distinguished Visiting Fellow & Ex-Chief Scientist',
      org: 'Central Power Research Institute (CPRI), Bangalore',
      focus: 'High Voltage Testing & Insulation Coordination',
      bio: 'Over 30 years conducting lightning impulse tests, partial discharge diagnostics, and SF6 gas switchgear evaluations.'
    },
    {
      name: 'Er. Balasubramanian V.',
      designation: 'Principal Energy Consultant & BEE Accredited Auditor',
      org: 'Bureau of Energy Efficiency (BEE) / Energy Management Centre',
      focus: 'Industrial Energy Auditing & ISO 50001 Standards',
      bio: 'Supervises student live energy audits in major textile, chemical, and metal smelting plants across South India.'
    },
    {
      name: 'Er. Nithin Narayanan',
      designation: 'Lead Battery Management System (BMS) Architect',
      org: 'Bosch Mobility Solutions India',
      focus: 'EV Battery Thermal Management & CAN Bus Protocols',
      bio: 'Conducts intensive weekend immersion courses on lithium iron phosphate (LFP) state-of-charge (SoC) estimation algorithms.'
    },
    {
      name: 'Dr. C. P. Balaraman',
      designation: 'Former Executive Director (Transmission)',
      org: 'Power Grid Corporation of India Limited (PGCIL)',
      focus: '765 kV / ±800 kV Ultra High Voltage AC/DC Transmission',
      bio: 'Mentors students on wide-area blackout prevention, synchronous condenser operations, and grid interconnections.'
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
            Global Power &amp; EV Industry Fellows
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Adjunct faculty from premier national research institutes like CPRI and global automotive pioneers like Bosch enrich our curriculum with direct industrial perspectives. They co-teach advanced electives, supervise capstone prototypes, and offer direct internship recommendations.
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
                Co-Guides Major Projects
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
export const EeeStudentListPage: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>('2021-25');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const batches: Record<string, Array<{ roll: string; name: string; cgpa: string; elective: string; placement: string }>> = {
    '2021-25': [
      { roll: 'JEC21EE001', name: 'Abhijith Krishna', cgpa: '8.92', elective: 'Electric Vehicle Powertrains', placement: 'Schneider Electric (10.5 LPA)' },
      { roll: 'JEC21EE002', name: 'Aiswarya Lakshmi M.', cgpa: '9.45', elective: 'Smart Grid & SCADA', placement: 'ABB India (11.2 LPA)' },
      { roll: 'JEC21EE003', name: 'Alan Varghese', cgpa: '8.65', elective: 'Industrial Automation & PLC', placement: 'L&T Technology Services (6.5 LPA)' },
      { roll: 'JEC21EE004', name: 'Ananya S. Kumar', cgpa: '9.18', elective: 'Renewable Microgrid Integration', placement: 'Tata Power (8.0 LPA)' },
      { roll: 'JEC21EE005', name: 'Devanarayanan S.', cgpa: '8.40', elective: 'Power Electronics for EV', placement: 'Ather Energy (9.5 LPA)' },
      { roll: 'JEC21EE006', name: 'Farhan Mohammed', cgpa: '8.78', elective: 'Energy Auditing & Management', placement: 'Siemens Energy (7.8 LPA)' },
      { roll: 'JEC21EE007', name: 'Gopika Mohan', cgpa: '9.02', elective: 'Electric Vehicle Powertrains', placement: 'Schneider Electric (10.5 LPA)' },
      { roll: 'JEC21EE008', name: 'Jithu George', cgpa: '8.50', elective: 'High Voltage Testing & Safety', placement: 'KSEB Substation Trainee' },
      { roll: 'JEC21EE009', name: 'Meenakshi R.', cgpa: '9.31', elective: 'Smart Grid & SCADA', placement: 'Hitachi Energy (9.0 LPA)' },
      { roll: 'JEC21EE010', name: 'Nikhil Rajan', cgpa: '8.72', elective: 'Battery Management Systems', placement: 'Delphi-TVS (7.2 LPA)' }
    ],
    '2022-26': [
      { roll: 'JEC22EE001', name: 'Adithya S. Menon', cgpa: '9.15', elective: 'EV Motor Drives & Control', placement: 'Intern @ Texas Instruments' },
      { roll: 'JEC22EE002', name: 'Bhavana K.', cgpa: '8.88', elective: 'Smart Metering & IoT', placement: 'Intern @ Schneider Electric' },
      { roll: 'JEC22EE003', name: 'Christo Babu', cgpa: '8.62', elective: 'Solar Photovoltaic Engineering', placement: 'Intern @ ANERT Project' },
      { roll: 'JEC22EE004', name: 'Diya Elizabeth', cgpa: '9.41', elective: 'EV Motor Drives & Control', placement: 'Intern @ ABB India' },
      { roll: 'JEC22EE005', name: 'Gokul Krishna', cgpa: '8.54', elective: 'Industrial SCADA Networks', placement: 'Industrial Trainee @ L&T' }
    ],
    '2023-27': [
      { roll: 'JEC23EE001', name: 'Aaron George', cgpa: '8.80', elective: 'Power Engineering Fundamentals', placement: 'Active Student (Semester 4)' },
      { roll: 'JEC23EE002', name: 'Anjana Ramesh', cgpa: '9.25', elective: 'Power Engineering Fundamentals', placement: 'Active Student (Semester 4)' },
      { roll: 'JEC23EE003', name: 'Joel Mathew', cgpa: '8.64', elective: 'Power Engineering Fundamentals', placement: 'Active Student (Semester 4)' },
      { roll: 'JEC23EE004', name: 'Kavya S.', cgpa: '8.95', elective: 'Power Engineering Fundamentals', placement: 'Active Student (Semester 4)' }
    ],
    '2024-28': [
      { roll: 'JEC24EE001', name: 'Abhiram P.', cgpa: 'N/A (Sem 1)', elective: 'Autonomous Autonomous Scheme 2024', placement: 'First Year Induction' },
      { roll: 'JEC24EE002', name: 'Bhadra Vinod', cgpa: 'N/A (Sem 1)', elective: 'Autonomous Scheme 2024', placement: 'First Year Induction' },
      { roll: 'JEC24EE003', name: 'Cyril Thomas', cgpa: 'N/A (Sem 1)', elective: 'Autonomous Scheme 2024', placement: 'First Year Induction' }
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
            Intake: 60 Seats / Batch
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
export const EeeAlumniPage: React.FC = () => {
  const alumni = [
    {
      name: 'Er. Vishnu K. Menon',
      batch: 'Class of 2012',
      designation: 'Senior Lead Power Systems Architect',
      org: 'Schneider Electric, Grenoble, France',
      quote: 'The rigorous machine testing and power system simulations at Jyothi gave me the technical confidence to architect digital substations across Europe.',
      achievement: 'Authored 4 international patents on smart circuit breaker telemetry.'
    },
    {
      name: 'Er. Vivek Chandran',
      batch: 'Class of 2015',
      designation: 'Staff Battery Systems Engineer',
      org: 'Tesla Gigafactory, Nevada, USA (Ex-Ather Energy)',
      quote: 'Jyothi EEE fostered our early solar kart and battery pack projects. The faculty mentorship shaped my journey into high-voltage EV battery design.',
      achievement: 'Key contributor to 4680 cylindrical cell pack architecture.'
    },
    {
      name: 'Er. Deepa Narayanan',
      batch: 'Class of 2016',
      designation: 'Assistant Executive Engineer',
      org: 'Kerala State Electricity Board (KSEB), Transmission Circle',
      quote: 'Securing top rank in the Kerala PSC Assistant Engineer examination was made possible by the conceptual grounding provided by JEC professors.',
      achievement: 'Heads 220 kV Substation maintenance and SCADA integration.'
    },
    {
      name: 'Er. Rahul S. Panicker',
      batch: 'Class of 2018',
      designation: 'Founder & Managing Director',
      org: 'SunRay Cleantech Solutions, Kochi',
      quote: 'Starting my own solar EPC firm was seeded during our final-year 50 kW rooftop solar plant design project at Jyothi.',
      achievement: 'Installed over 12 MWp rooftop solar capacity across South India.'
    },
    {
      name: 'Er. Anjali Krishna',
      batch: 'Class of 2020',
      designation: 'Power Hardware Verification Specialist',
      org: 'ABB India Global Research, Bangalore',
      quote: 'The hands-on work with DSP controllers and MATLAB Simulink in the Power Electronics lab gave me an immediate head start in industry R&D.',
      achievement: 'Published 3 IEEE transaction papers on solid-state transformers.'
    },
    {
      name: 'Dr. Arjun K. Nair',
      batch: 'Class of 2014',
      designation: 'Postdoctoral Research Associate',
      org: 'Purdue University, Energy & Power Systems Lab, USA',
      quote: 'From Jyothi EEE to an MS at TU Delft and Ph.D at Purdue, the analytical foundations laid by our teachers remain my constant compass.',
      achievement: 'NSF Grant Fellow working on 100% inverter-based power grids.'
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
            1,200+ Alumni Across 24 Nations
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Graduates of the Electrical &amp; Electronics Engineering department at Jyothi Engineering College power Fortune 500 corporations, electric vehicle innovators, national energy utilities, and prestigious global universities.
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
