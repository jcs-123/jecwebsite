import React, { useState } from 'react';
import {
  ShieldCheck, Users, GraduationCap, Award, Mail, Phone,
  MapPin, CheckCircle2, Download, Search, Briefcase, Star,
  BookOpen, Compass, School, Sparkles, FileText, Bot, Cpu,
  Cog, Eye, Activity, CircuitBoard, Gauge, Layers, Check
} from 'lucide-react';

/* 1. BOS (Board of Studies) Page - Matching Institutional Theme */
export const MctBOSPage: React.FC = () => {
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
          The Board of Studies (BOS) for Mechatronics Engineering is the statutory governance body established under the UGC autonomous regulations and approved by the Academic Council. It is responsible for framing curriculum schemes, designing semester syllabi, introducing emerging robotics and cyber-physical technologies, and validating continuous evaluation frameworks.
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
                <td className="py-3.5 px-4 text-[#4A384F]">Professor &amp; Head, Dept. of Mechatronics Engineering, JEC</td>
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
                      SA
                    </span>
                    <span>Dr. Sudheer A. P.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor in Robotics, NIT Calicut</td>
                <td className="py-3.5 px-4 text-[#4A384F]">University Nominee (KTU)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">3</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      SM
                    </span>
                    <span>Dr. Santhakumar Mohan</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor in Robotics &amp; Autonomous Systems, IIT Palakkad</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Manipulators &amp; Control)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">4</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      TA
                    </span>
                    <span>Dr. T. Asokan</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor in Engineering Design &amp; Robotics, IIT Madras</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Subject Expert (Field &amp; Service Robotics)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">5</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      AK
                    </span>
                    <span>Er. Anand K. V.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Head of Industrial Robotics Solutions, Tata Technologies Limited</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Industry Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">6</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      RR
                    </span>
                    <span>Er. Rajeshwar Rao</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Senior Application Director, Festo India Private Limited</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Industry Representative (Pneumatics &amp; PLC)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">7</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      JG
                    </span>
                    <span>Er. Joel George</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Lead Roboticist, ABB Robotics / Ex-KUKA Robotics (Alumnus)</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Meritorious Alumnus Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">8</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      JT
                    </span>
                    <span>Dr. Jarin T.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Professor in Electrical &amp; Embedded Systems, JEC</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Internal Member (Sensors &amp; Drives)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#28052B] text-center">9</td>
                <td className="py-3.5 px-4 font-bold text-[#28052B]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center shrink-0">
                      MR
                    </span>
                    <span>Prof. Melvinraj C. R.</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#4A384F]">Associate Professor in Mechatronics, JEC</td>
                <td className="py-3.5 px-4 text-[#4A384F]">Internal Member (Robotics In-Charge)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Statutory Functions and Minutes & Key Resolutions Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Statutory Functions Card */}
        <div className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E7D6C1] shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-2 border-b border-[#FAF7F2]">
            <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] text-[#28052B] flex items-center justify-center border border-[#E5D7B7]">
              <Layers className="w-4 h-4 text-[#C79628]" />
            </div>
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Statutory Functions
            </h3>
          </div>

          <ul className="space-y-3 text-xs text-[#4A384F] leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Formulating syllabi for 4-year B.Tech in Mechatronics Engineering in alignment with NEP 2020 and IEEE RAS guidelines.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Establishing credit structure, Choice Based Credit System (CBCS), and Autonomous Minor/Honours in AMR &amp; Vision AI.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Recommending panels of question paper setters and external subject experts for autonomous end-semester practical assessments.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <span>Approving cutting-edge experiential labs in ROS 2 Humble, KUKA industrial arms, Festo CPX pneumatic modules, and machine vision.</span>
            </li>
          </ul>
        </div>

        {/* Minutes & Key Resolutions Card */}
        <div className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E7D6C1] shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-2 border-b border-[#FAF7F2]">
            <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] text-[#28052B] flex items-center justify-center border border-[#E5D7B7]">
              <FileText className="w-4 h-4 text-[#C79628]" />
            </div>
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Minutes &amp; Key Resolutions
            </h3>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5D7B7] space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xs text-[#28052B]">
                  BOS 6th Meeting Resolutions (July 2024)
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-[#EAF5EA] text-[#2E7D32] font-bold text-[10px] flex items-center gap-1 border border-[#C8E6C9]">
                  <Check className="w-3 h-3" />
                  Approved
                </span>
              </div>
              <p className="text-[11px] text-[#5A455F] leading-relaxed">
                Ratification of 2024 autonomous curriculum scheme incorporating ROS 2 robotics stack and deep learning machine vision courses.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5D7B7] space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xs text-[#28052B]">
                  BOS 5th Meeting Resolutions (December 2023)
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-[#EAF5EA] text-[#2E7D32] font-bold text-[10px] flex items-center gap-1 border border-[#C8E6C9]">
                  <Check className="w-3 h-3" />
                  Approved
                </span>
              </div>
              <p className="text-[11px] text-[#5A455F] leading-relaxed">
                Introduction of KUKA 6-axis industrial robot lab certification and joint training credits with Tata Technologies IIIC center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Department Advisory Board (DAB) Page */
export const MctAdvisoryBoardPage: React.FC = () => {
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
          The Department Advisory Board (DAB) guides the strategic evolution of the Mechatronics Engineering program. Gathering leaders from world-renowned automation conglomerates, robotics R&amp;D centers, and defense establishments, the board steers state-of-the-art laboratory enhancements, co-op internships, and joint research grants.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            name: 'Dr. Sunil K. Agrawal',
            role: 'Director of Robotics and Rehabilitation Lab',
            org: 'Columbia University, New York, USA',
            desc: 'Global authority on robotic exoskeletons, dynamic gait retraining robots, and cable-driven parallel mechanisms.',
            tag: 'International Fellow'
          },
          {
            name: 'Er. Suresh R. Pillai',
            role: 'Senior Vice President & Chief Technology Officer',
            org: 'Titan Engineering & Automation Limited (TEAL)',
            desc: 'Guides automated assembly lines, high-speed pick-and-place delta robots, and machine vision inspection.',
            tag: 'Industrial Automation Chieftain'
          },
          {
            name: 'Er. Satheesh Kumar V.',
            role: 'Head of Robotics System Integration',
            org: 'FANUC India Private Limited',
            desc: 'Mentors faculty on articulated arm robot safety (ISO 10218), robotic welding, and automated guided vehicles (AGV).',
            tag: 'Robotics Industry Lead'
          },
          {
            name: 'Dr. M. S. Giridhar',
            role: 'Scientist G & Group Director (Robotics & Drones)',
            org: 'DRDO / Research Centre Imarat (RCI), Hyderabad',
            desc: 'Advises autonomous unmanned ground vehicle (UGV) navigation, gimbal stabilization, and sensor fusion algorithms.',
            tag: 'Defense Scientist'
          },
          {
            name: 'Er. Vinu Varghese',
            role: 'Director of Vision Systems Solutions',
            org: 'Cognex Corporation / SICK Sensor Intelligence',
            desc: 'Steers smart optical sensor curriculum, 2D/3D surface defect inspection, and edge deep learning cameras.',
            tag: 'Machine Vision Specialist'
          },
          {
            name: 'Er. Rahul S. Panicker',
            role: 'Co-Founder & Chief Product Officer',
            org: 'BotCraft Robotics Solutions (Alumnus)',
            desc: 'Facilitates warehouse AMR deployments, ROS 2 student bootcamps, and seed venture incubation at JEC TBI.',
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
export const MctFacultyPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const facultyMembers = [
    {
      name: 'Dr. Jose P. Therattil',
      designation: 'Professor & Head of Department',
      qual: 'Ph.D (Robotics & Control, Karunya Univ), M.Tech, B.Tech',
      exp: '20+ Years Experience • 44 International Journals',
      domain: 'robotics',
      domainLabel: 'Robotics & Autonomous Systems',
      email: 'joseptherattil@jecc.ac.in',
      phone: '+91 94473 89124',
      research: 'Multi-degree-of-freedom manipulator kinematics, mobile robot trajectory planning, bipedal humanoid walking balance.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Melvinraj C. R.',
      designation: 'Associate Professor & Robotics Lab Director',
      qual: 'M.Tech (Mechatronics Engineering, VIT), pursuing Ph.D',
      exp: '14+ Years Experience • 18 Papers',
      domain: 'robotics',
      domainLabel: 'Robotics & Autonomous Systems',
      email: 'melvinraj@jecc.ac.in',
      phone: '+91 94465 67890',
      research: 'KUKA and ABB industrial arm programming, ROS 2 Nav2 navigation stack, LiDAR SLAM, automated guided vehicles.',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Dr. Praveen N.',
      designation: 'Associate Professor & IIIC Automation Head',
      qual: 'Ph.D (Cyber-Physical Systems & Automation, Anna Univ), M.E',
      exp: '16+ Years Experience • 29 Scopus Papers',
      domain: 'automation',
      domainLabel: 'Industrial Automation & PLC',
      email: 'praveenn@jecc.ac.in',
      phone: '+91 94952 34125',
      research: 'Festo electro-pneumatics, Siemens TIA Portal PLC automation, SCADA networks, Industry 4.0 digital twins.',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Anju M. J.',
      designation: 'Assistant Professor & Embedded Lab In-Charge',
      qual: 'M.Tech (Embedded Systems & VLSI, GEC Thrissur), B.Tech (ECE)',
      exp: '11+ Years Experience • 14 Papers',
      domain: 'embedded-iot',
      domainLabel: 'Embedded Systems & IoT',
      email: 'anjumj@jecc.ac.in',
      phone: '+91 94468 90124',
      research: 'ARM Cortex-M4 microcontroller architectures, FreeRTOS for robotics, CAN-bus automotive telemetry, IoT gateways.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Christy V. Vazhappilly',
      designation: 'Assistant Professor (Joint Faculty - ME/MR)',
      qual: 'M.Tech (Automotive Engineering, Amrita), B.Tech (ME)',
      exp: '12+ Years Experience • 16 Papers',
      domain: 'robotics',
      domainLabel: 'Robotics & Autonomous Systems',
      email: 'christy@jecc.ac.in',
      phone: '+91 94469 12345',
      research: 'Autonomous mobile robot chassis kinematics, omnidirectional swerve drives, automated docking mechanisms.',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Alwin Poulose',
      designation: 'Assistant Professor & Computer Vision Lead',
      qual: 'M.Tech (Signal Processing & Machine Learning, CET), pursuing Ph.D',
      exp: '9+ Years Experience • 12 Papers',
      domain: 'vision-ai',
      domainLabel: 'Machine Vision & AI',
      email: 'alwinpoulose@jecc.ac.in',
      phone: '+91 94963 45678',
      research: 'YOLO object detection for pick-and-place cobots, 3D point cloud processing using OpenCV, edge AI with Jetson Orin.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Reshma K. R.',
      designation: 'Assistant Professor',
      qual: 'M.Tech (Sensors & Actuators, Amrita), B.Tech (EEE)',
      exp: '8+ Years Experience • 9 Papers',
      domain: 'embedded-iot',
      domainLabel: 'Embedded Systems & IoT',
      email: 'reshmakr@jecc.ac.in',
      phone: '+91 94474 12389',
      research: 'MEMS IMU sensor fusion using extended Kalman filters (EKF), brushless DC servo motor drives, encoder telemetry.',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Prof. Sreekanth M.',
      designation: 'Assistant Professor',
      qual: 'M.Tech (Industrial Automation, Karunya), B.Tech (MR)',
      exp: '7+ Years Experience • 8 Papers',
      domain: 'automation',
      domainLabel: 'Industrial Automation & PLC',
      email: 'sreekanthm@jecc.ac.in',
      phone: '+91 94462 78901',
      research: 'Modular manufacturing systems (MMS), hydraulic proportional valves, smart pneumatic fieldbuses (IO-Link).',
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
            100% Post-Graduate • Specialized Robotics Educators
          </span>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'All Faculty' },
              { id: 'robotics', label: 'Robotics & Autonomous Systems' },
              { id: 'automation', label: 'Industrial Automation & PLC' },
              { id: 'embedded-iot', label: 'Embedded Systems & IoT' },
              { id: 'vision-ai', label: 'Machine Vision & AI' },
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
export const MctNonTeachingPage: React.FC = () => {
  const staff = [
    {
      name: 'Mr. Binoj George',
      designation: 'Senior Robotics Laboratory Superintendent',
      dept: 'Advanced Industrial Robotics & ROS Testbed',
      qual: 'Diploma in Mechatronics, Certified KUKA / ABB Robot Programmer',
      exp: '15 Years Experience',
      responsibilities: 'KUKA KR-6 articulated robot arm maintenance, teach pendant calibration, safety interlock sensors, tool changers.'
    },
    {
      name: 'Mr. Praveen Kumar P.',
      designation: 'Senior Technical Officer (PLC & Automation)',
      dept: 'Festo Electro-Pneumatics & Automation Studio',
      qual: 'Diploma in Electrical & Electronics Engineering',
      exp: '13 Years Experience',
      responsibilities: 'Siemens S7-1200 / S7-1500 PLC training racks, electro-pneumatic manifold blocks, proportional hydraulic valves.'
    },
    {
      name: 'Ms. Neethu Mohan',
      designation: 'Technical Assistant',
      dept: 'Embedded Systems & Sensorics Lab',
      qual: 'Diploma in Electronics & Communication',
      exp: '10 Years Experience',
      responsibilities: 'SMD soldering stations, digital storage oscilloscopes, logic analyzers, ARM Cortex microcontroller boards.'
    },
    {
      name: 'Mr. Vishnu Rajan',
      designation: 'Laboratory Assistant',
      dept: 'Machine Vision & Drone Flight Arena',
      qual: 'ITI (Electronic Mechanic), Certified Drone Pilot',
      exp: '8 Years Experience',
      responsibilities: 'High-speed industrial camera rigs, optical ring illuminators, drone motor dynamometers, LiDAR test tracks.'
    },
    {
      name: 'Ms. Latha K. V.',
      designation: 'Confidential Department Assistant',
      dept: 'HOD Office & Department Records',
      qual: 'B.Sc, PGDCA',
      exp: '14 Years Experience',
      responsibilities: 'Autonomous examination liaison, student robotics tournament registrations, NBA Tier-1 portfolio archiving.'
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Robotics &amp; Automation Technicians</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Non Teaching Staff
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Certified Robot Operators
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Our certified robotics technicians, PLC programmers, and drone safety stewards ensure high-precision operations across our KUKA articulated arms, FESTO automation benches, machine vision chambers, and embedded prototyping studios.
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
                <Bot className="w-3.5 h-3.5 text-[#C79628]" />
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
export const MctAdjunctFacultyPage: React.FC = () => {
  const adjuncts = [
    {
      name: 'Dr. Mukund S. Prasad',
      designation: 'Distinguished Scientist & Former Director of Robotics Wing',
      org: 'Defence Research and Development Organisation (DRDO)',
      focus: 'Autonomous Battlefield Robots & Remote Weapon Stations',
      bio: 'Over 32 years architecting teleoperated explosive ordnance disposal (EOD) robots and all-terrain unmanned ground systems for defense services.'
    },
    {
      name: 'Er. Claus Weidemann',
      designation: 'Global Technical Lead (Didactic Mechatronics)',
      org: 'Festo Didactic SE, Esslingen, Germany',
      focus: 'Cyber-Physical Systems & Industry 4.0 Learning Factories',
      bio: 'Co-designs smart factory curriculum modules for Jyothi, conducting online masterclasses on digital pneumatic islands and OPC-UA connectivity.'
    },
    {
      name: 'Er. Nandan Namboodiri',
      designation: 'Senior Autonomous Driving Architect',
      org: 'Aptiv / Motional Autonomous Vehicles, Boston, USA',
      focus: 'Multi-Sensor Fusion (LiDAR, Radar & Vision) & SLAM',
      bio: 'Alumnus mentor guiding undergraduate research projects on end-to-end neural network steering for indoor mobile delivery robots.'
    },
    {
      name: 'Er. Deepak Chandran',
      designation: 'Principal Automation Architect',
      org: 'Schneider Electric Global R&D Centre',
      focus: 'Edge Computing & Virtual PLCs for Smart Factories',
      bio: 'Conducts intensive weekend workshops on software-defined automation and IEC 61499 distributed control systems.'
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
            DRDO, Festo Germany &amp; Global AI Roboticists
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Adjunct faculty from premier defense laboratories (DRDO), German automation leaders (Festo), and global autonomous mobility pioneers mentor student teams, supervise high-TRL prototypes, and deliver masterclasses in modern cybernetics.
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
                Direct Industry Project Co-Guide
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
export const MctStudentListPage: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>('2021-25');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const batches: Record<string, Array<{ roll: string; name: string; cgpa: string; elective: string; placement: string }>> = {
    '2021-25': [
      { roll: 'JEC21MR001', name: 'Abhijith S. Nair', cgpa: '9.35', elective: 'Autonomous Mobile Robots (ROS 2)', placement: 'Tata Technologies (8.5 LPA)' },
      { roll: 'JEC21MR002', name: 'Alen Varghese', cgpa: '8.92', elective: 'Industrial Robotics & Vision', placement: 'ABB Robotics (10.0 LPA)' },
      { roll: 'JEC21MR003', name: 'Anagha K. Menon', cgpa: '9.48', elective: 'Deep Learning for Machine Vision', placement: 'TEAL Automation (7.8 LPA)' },
      { roll: 'JEC21MR004', name: 'Arjun Mohan', cgpa: '8.75', elective: 'PLC & SCADA Industry 4.0', placement: 'Festo India (7.2 LPA)' },
      { roll: 'JEC21MR005', name: 'Bhadra Vinod', cgpa: '9.18', elective: 'Autonomous Mobile Robots (ROS 2)', placement: 'Bosch Mobility (8.2 LPA)' },
      { roll: 'JEC21MR006', name: 'Gokul Krishna', cgpa: '8.60', elective: 'Embedded IoT & Edge AI', placement: 'Quest Global (6.5 LPA)' },
      { roll: 'JEC21MR007', name: 'Joel Mathew', cgpa: '8.84', elective: 'Cobot Path Planning & Safety', placement: 'KUKA Robotics Partner (7.5 LPA)' },
      { roll: 'JEC21MR008', name: 'Naveen George', cgpa: '9.22', elective: 'Deep Learning for Machine Vision', placement: 'Cognex Solutions (9.0 LPA)' },
      { roll: 'JEC21MR009', name: 'Rhea Elizabeth', cgpa: '9.40', elective: 'Micro-Electromechanical Systems', placement: 'L&T Technology Services (7.0 LPA)' },
      { roll: 'JEC21MR010', name: 'Sidharth K. P.', cgpa: '8.68', elective: 'Industrial Robotics & Vision', placement: 'FANUC India Trainee' }
    ],
    '2022-26': [
      { roll: 'JEC22MR001', name: 'Adithya R. Nair', cgpa: '9.20', elective: 'Swarm Robotics & Drones', placement: 'Intern @ Tata Technologies' },
      { roll: 'JEC22MR002', name: 'Bibin K. Biju', cgpa: '8.85', elective: 'Industrial Cobots', placement: 'Intern @ Festo Didactic' },
      { roll: 'JEC22MR003', name: 'Deepak Varghese', cgpa: '8.70', elective: '3D Computer Vision', placement: 'Intern @ TEAL Automation' },
      { roll: 'JEC22MR004', name: 'Haritha S.', cgpa: '9.31', elective: 'ROS 2 Autonomous Systems', placement: 'Intern @ Maker Village Robotics' },
      { roll: 'JEC22MR005', name: 'Kiran Thomas', cgpa: '8.54', elective: 'Digital Twin Cyber-Physical', placement: 'Active Research Scholar' }
    ],
    '2023-27': [
      { roll: 'JEC23MR001', name: 'Akshay V. M.', cgpa: '8.88', elective: 'Actuators & Sensors', placement: 'Active Student (Semester 4)' },
      { roll: 'JEC23MR002', name: 'Anjali Ramesh', cgpa: '9.25', elective: 'Control Systems', placement: 'Active Student (Semester 4)' },
      { roll: 'JEC23MR003', name: 'David Joseph', cgpa: '8.72', elective: 'Kinematics & Dynamics', placement: 'Active Student (Semester 4)' },
      { roll: 'JEC23MR004', name: 'Gayathri S.', cgpa: '9.05', elective: 'Analog & Digital Electronics', placement: 'Active Student (Semester 4)' }
    ],
    '2024-28': [
      { roll: 'JEC24MR001', name: 'Abhishek K.', cgpa: 'N/A (Sem 1)', elective: 'Autonomous Scheme 2024', placement: 'First Year Induction' },
      { roll: 'JEC24MR002', name: 'Christo Paul', cgpa: 'N/A (Sem 1)', elective: 'Autonomous Scheme 2024', placement: 'First Year Induction' },
      { roll: 'JEC24MR003', name: 'Diya Susan', cgpa: 'N/A (Sem 1)', elective: 'Autonomous Scheme 2024', placement: 'First Year Induction' }
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
export const MctAlumniPage: React.FC = () => {
  const alumni = [
    {
      name: 'Er. Joel George',
      batch: 'Class of 2017',
      designation: 'Senior Robotics Integration Architect',
      org: 'ABB Robotics Global Solutions, Zurich, Switzerland',
      quote: 'The hands-on hours spent programming KUKA and Festo robotic stations at Jyothi gave me the exact industrial readiness required by top European robotics teams.',
      achievement: 'Architected automated robotic packaging cells for Nestlé Switzerland.'
    },
    {
      name: 'Er. Nandan Namboodiri',
      batch: 'Class of 2018',
      designation: 'Perception Software Engineer',
      org: 'Motional / Hyundai Autonomous Driving, Boston, USA',
      quote: 'From building our first autonomous obstacle-avoidance bot at Jyothi to deploying driverless robotaxis in the US, JEC Mechatronics laid the foundation.',
      achievement: 'Authored 3 patents on multi-camera surround 3D object tracking.'
    },
    {
      name: 'Er. Sanjana Nair',
      batch: 'Class of 2019',
      designation: 'Automation Solutions Lead',
      org: 'Titan Engineering & Automation Limited (TEAL)',
      quote: 'The interdisciplinary synergy of mechanics, electronics, and PLC programming in our department made me stand out as a holistic systems architect.',
      achievement: 'Commissioned automated syringe assembly lines with 0.1s cycle times.'
    },
    {
      name: 'Er. Rahul S. Panicker',
      batch: 'Class of 2020',
      designation: 'Co-Founder & CEO',
      org: 'BotCraft Robotics Solutions, Kochi',
      quote: 'Our final-year AMR warehouse mapping project was incubated right inside the JEC TBI. Today, our robots navigate industrial distribution hubs across Kerala.',
      achievement: 'Raised seed funding and deployed 25+ warehouse logistics robots.'
    },
    {
      name: 'Er. Ashwin K. Varma',
      batch: 'Class of 2021',
      designation: 'Firmware Engineer (Cobots)',
      org: 'Universal Robots / Teradyne, Odense, Denmark',
      quote: 'Learning ROS and embedded real-time control from dedicated professors at Jyothi turned my passion for robotics into an international engineering career.',
      achievement: 'Key designer of torque-sensor safety firmware for collaborative arms.'
    },
    {
      name: 'Dr. Gopika M. Pillai',
      batch: 'Class of 2018',
      designation: 'Postdoctoral Research Scientist in Surgical Robotics',
      org: 'Imperial College London, Hamlyn Centre for Robotic Surgery, UK',
      quote: 'The mathematical rigor in manipulator kinematics and sensor fusion at Jyothi opened the gateway for my Master’s and Ph.D in minimally invasive medical robotics.',
      achievement: 'Developed micromanipulator tools for neurosurgical catheters.'
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
            600+ Roboticists Across 18 Nations
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Graduates of Mechatronics Engineering from Jyothi Engineering College are driving innovations in industrial robotics, autonomous vehicles, surgical robotics, and smart factory automation worldwide.
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
