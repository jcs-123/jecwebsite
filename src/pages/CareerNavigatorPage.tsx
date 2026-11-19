import React, { useState } from 'react';
import {
  Compass,
  Briefcase,
  Cpu,
  Code2,
  Layers,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
  Phone,
  Mail,
  Zap,
  Target,
  Brain,
  Search,
} from 'lucide-react';
import { PlacementsSubNav } from '../components/PlacementsSubNav';
import { RevealBlock } from '../components/RevealBlock';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface CareerDomain {
  id: string;
  name: string;
  badge: string;
  iconType: 'code' | 'brain' | 'cpu' | 'zap' | 'layers' | 'building';
  tagline: string;
  startingCtc: string;
  midCtc: string;
  seniorCtc: string;
  topRoles: string[];
  skills: string[];
  certifications: string[];
  jyothiLabs: string[];
  topRecruiters: string[];
  description: string;
}

const CAREER_DOMAINS: CareerDomain[] = [
  {
    id: 'cloud-software',
    name: 'Software & Cloud Architecture',
    badge: 'High Demand',
    iconType: 'code',
    tagline: 'Planetary-scale distributed backend, cloud platforms, and microservices.',
    startingCtc: '₹6.5 LPA – ₹10.0 LPA',
    midCtc: '₹14.0 LPA – ₹24.0 LPA',
    seniorCtc: '₹35.0 LPA – ₹65.0+ LPA',
    topRoles: [
      'Cloud Solutions Architect',
      'Full Stack Software Engineer',
      'Site Reliability Engineer (SRE)',
      'Distributed Systems Developer',
    ],
    skills: [
      'AWS / Azure Cloud Architecture',
      'Docker & Kubernetes Clusters',
      'Java, Spring Boot & Microservices',
      'TypeScript, Node.js & Next.js',
      'PostgreSQL, Redis & MongoDB',
      'Automated CI/CD & Terraform',
    ],
    certifications: [
      'AWS Certified Solutions Architect (Associate)',
      'Certified Kubernetes Administrator (CKA)',
      'Red Hat Certified System Administrator (RHCSA)',
      'HashiCorp Certified Terraform Associate',
    ],
    jyothiLabs: [
      'Advanced Software Development Lab',
      'IBM Big Data & Cloud Center of Excellence',
      'Central Computing Facility (CCF)',
    ],
    topRecruiters: [
      'Amazon AWS',
      'TCS Digital',
      'Cognizant GenC Elevate',
      'Infosys Power Programmer',
      'UST Global',
    ],
    description:
      'Empowers graduates to design resilient, horizontally scalable microservices and cloud-native applications powering the modern global digital economy.',
  },
  {
    id: 'ai-datascience',
    name: 'Artificial Intelligence & Machine Learning',
    badge: 'Fastest Growing',
    iconType: 'brain',
    tagline: 'Deep neural networks, generative AI, predictive modeling, and computer vision.',
    startingCtc: '₹7.0 LPA – ₹12.0 LPA',
    midCtc: '₹16.0 LPA – ₹28.0 LPA',
    seniorCtc: '₹40.0 LPA – ₹75.0+ LPA',
    topRoles: [
      'Machine Learning Engineer',
      'Data Scientist & Analytics Consultant',
      'Computer Vision & NLP Specialist',
      'MLOps & Pipeline Engineer',
    ],
    skills: [
      'Python, PyTorch & TensorFlow',
      'Generative AI, LLMs & LangChain',
      'Vector Databases (Pinecone / Chroma)',
      'OpenCV & Real-Time Computer Vision',
      'Statistical Modeling & Pandas/NumPy',
      'MLflow Model Deployment',
    ],
    certifications: [
      'NVIDIA Deep Learning Institute (DLI) Credential',
      'TensorFlow Developer Certificate',
      'AWS Certified Machine Learning - Specialty',
      'Microsoft Azure AI Engineer Associate',
    ],
    jyothiLabs: [
      'NVIDIA High-Performance GPU Cluster',
      'Data Science & Predictive Analytics Sandbox',
      'Edge AI Prototyping Workstation',
    ],
    topRecruiters: [
      'Bosch AI Research',
      'SOTI Inc.',
      'IBM Watson Labs',
      'Experion Technologies',
      'IBS Software',
    ],
    description:
      'Bridges mathematical rigor with hands-on GPU acceleration for autonomous systems, computer vision diagnostics, and enterprise generative intelligence.',
  },
  {
    id: 'vlsi-embedded',
    name: 'Embedded Systems & VLSI Semiconductor',
    badge: 'Core Technology',
    iconType: 'cpu',
    tagline: 'Microcontroller firmware, RTL synthesis, silicon chip verification, and IoT hardware.',
    startingCtc: '₹6.0 LPA – ₹14.2 LPA',
    midCtc: '₹15.0 LPA – ₹26.0 LPA',
    seniorCtc: '₹35.0 LPA – ₹60.0+ LPA',
    topRoles: [
      'VLSI Verification & Design Engineer',
      'Embedded Firmware Architect',
      'Automotive ECU Software Specialist',
      'FPGA / RTL Systems Engineer',
    ],
    skills: [
      'SystemVerilog, Verilog & UVM',
      'Embedded C / C++ & RTOS Kernel',
      'Cadence EDA Tool Suites',
      'ARM Cortex-M & RISC-V Architectures',
      'CAN, SPI, I2C Automotive Telemetry',
      'PCB Layout & Signal Integrity',
    ],
    certifications: [
      'Cadence Certified Verification Specialist',
      'ARM Accredited Engineer (AAE)',
      'Texas Instruments Embedded Microcontroller Credential',
    ],
    jyothiLabs: [
      'Cadence VLSI Design & Synthesis Suite',
      'Texas Instruments Innovation Center',
      'Advanced Embedded Systems & IoT Lab',
    ],
    topRecruiters: [
      'Bosch Global Software',
      'Quest Global',
      'V-Guard R&D',
      'Schneider Electric',
      'Intel Design Partners',
    ],
    description:
      'Prepares engineers for the historic semiconductor manufacturing expansion, automotive embedded architectures, and hardware-software co-design.',
  },
  {
    id: 'ev-power',
    name: 'Electric Vehicles & Smart Grid Energy',
    badge: 'Green Energy',
    iconType: 'zap',
    tagline: 'Battery management systems, EV powertrain telemetry, and renewable microgrids.',
    startingCtc: '₹5.5 LPA – ₹9.5 LPA',
    midCtc: '₹12.0 LPA – ₹20.0 LPA',
    seniorCtc: '₹28.0 LPA – ₹48.0+ LPA',
    topRoles: [
      'EV Powertrain & Battery Designer',
      'BMS (Battery Management) Software Engineer',
      'Smart Grid Automation Specialist',
      'Power Electronics Design Engineer',
    ],
    skills: [
      'MATLAB & Simulink Powertrain Modeling',
      'Battery Thermal & State-of-Charge (SoC) Models',
      'CAN Bus & Vehicle Diagnostics',
      'PLC / SCADA Grid Automation',
      'High Voltage Inverters & Converters',
      'Renewable Energy Integration',
    ],
    certifications: [
      'Schneider Electric Certified Automation Specialist',
      'MathWorks Certified MATLAB Associate',
      'Certified Energy Auditor (Foundations)',
    ],
    jyothiLabs: [
      '100 kW Rooftop Solar Farm SCADA Telemetry',
      'Schneider Electric Industrial Automation Lab',
      'EV Powertrain & Battery Test Bench',
    ],
    topRecruiters: [
      'Tata Motors Electric Mobility',
      'Schneider Electric',
      'V-Guard Industries',
      'Bosch Mobility Systems',
      'Federal Bank FinTech',
    ],
    description:
      'Drives the global mobility transition through electric powertrain modeling, battery management algorithmic safety, and renewable microgrid telemetry.',
  },
  {
    id: 'robotics-additive',
    name: 'Robotics, Automation & Additive Manufacturing',
    badge: 'Industry 4.0',
    iconType: 'layers',
    tagline: 'Autonomous mobile robots, ROS navigation, advanced CAD/CAM, and 3D printing.',
    startingCtc: '₹5.0 LPA – ₹9.0 LPA',
    midCtc: '₹11.0 LPA – ₹19.0 LPA',
    seniorCtc: '₹25.0 LPA – ₹45.0+ LPA',
    topRoles: [
      'Robotics Systems & ROS Engineer',
      'Industrial Automation & PLC Specialist',
      'Additive Manufacturing & Prototyping Lead',
      'Mechanical CAD/FEA Design Analyst',
    ],
    skills: [
      'ROS (Robot Operating System) & Gazebo',
      'SolidWorks & CATIA 3D Modeling',
      'ANSYS Fluent CFD & FEA Structural Testing',
      'Python & C++ for Robotics Kinematics',
      '3D Slicing, G-Code & Additive Polymers',
      'CNC 3-Axis Precision Machining',
    ],
    certifications: [
      'Dassault Systèmes CSWA / CSWP Certified',
      'TATA Technologies Industry 4.0 Certified',
      'Universal Robots Collaborative Robotics Credential',
    ],
    jyothiLabs: [
      'MIT FabLab Kerala (International Fab Foundation)',
      'TATA IIIC Advanced Prototyping & CNC Center',
      'Mechatronics Robotics & Pneumatics Suite',
    ],
    topRecruiters: [
      'Tata Technologies',
      'L&T Technology Services (LTTS)',
      'Quest Global',
      'MRF Tyres Ltd.',
      'Apollo Tyres R&D',
    ],
    description:
      'Empowers mechanical and mechatronics engineers with digital twin simulation, collaborative robotics, and rapid hardware additive manufacturing mastery.',
  },
  {
    id: 'smart-infra',
    name: 'Smart Infrastructure & Resilient Civil Engineering',
    badge: 'Nation Building',
    iconType: 'building',
    tagline: 'BIM digital modeling, structural seismic retrofitting, and environmental engineering.',
    startingCtc: '₹4.5 LPA – ₹8.0 LPA',
    midCtc: '₹10.0 LPA – ₹18.0 LPA',
    seniorCtc: '₹24.0 LPA – ₹42.0+ LPA',
    topRoles: [
      'BIM Project Coordinator & Modeler',
      'Structural Analysis & Design Engineer',
      'Geotechnical & Foundation Consultant',
      'Transportation & Highway Planner',
    ],
    skills: [
      'Autodesk Revit & Civil 3D BIM Suites',
      'ETABS & STAAD.Pro Structural Analysis',
      'GIS Spatial Mapping & Photogrammetry',
      'Non-Destructive Testing (NDT) Protocol',
      'Green Building Standards (LEED / IGBC)',
      'Primavera P6 Construction Project Scheduling',
    ],
    certifications: [
      'Autodesk Certified Professional (Revit Structure)',
      'Bentley STAAD.Pro Certified Structural Engineer',
      'IGBC Accredited Green Associate',
    ],
    jyothiLabs: [
      'Advanced Concrete & Construction Materials Lab',
      'Structural Testing Rig & Ultrasonic NDT Suite',
      'Total Station & GPS Geodetic Survey Sandbox',
    ],
    topRecruiters: [
      'L&T Construction',
      'Arup Engineering Consultants',
      'Sobha Developers Ltd.',
      'Afcons Infrastructure',
      'Public Works Department & KIIFB Projects',
    ],
    description:
      'Focuses on earthquake-resilient structures, self-healing eco-concretes, municipal water resources, and end-to-end Building Information Modeling (BIM).',
  },
];

export const CareerNavigatorPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>('cloud-software');

  // Interactive 3-Step Career Pathfinder Quiz State
  const [branch, setBranch] = useState<string>('CSE');
  const [interest, setInterest] = useState<string>('Software & Cloud');
  const [goal, setGoal] = useState<string>('Big Tech MNC');

  const selectedDomain =
    CAREER_DOMAINS.find((d) => d.id === selectedDomainId) || CAREER_DOMAINS[0];

  // Helper to render track icon in the 6-item selector grid
  const renderTrackIcon = (iconType: CareerDomain['iconType'], isSelected: boolean) => {
    switch (iconType) {
      case 'code':
        return (
          <span
            className={`font-mono font-bold text-sm tracking-tight ${
              isSelected ? 'text-[#E8BD68]' : 'text-[#210532]'
            }`}
          >
            &lt;/&gt;
          </span>
        );
      case 'brain':
        return (
          <Brain
            className={`w-5 h-5 ${isSelected ? 'text-[#E8BD68]' : 'text-[#210532]'}`}
          />
        );
      case 'cpu':
        return (
          <Cpu
            className={`w-5 h-5 ${isSelected ? 'text-[#E8BD68]' : 'text-[#210532]'}`}
          />
        );
      case 'zap':
        return (
          <Zap
            className={`w-5 h-5 ${isSelected ? 'text-[#E8BD68]' : 'text-[#210532]'}`}
          />
        );
      case 'layers':
        return (
          <Layers
            className={`w-5 h-5 ${isSelected ? 'text-[#E8BD68]' : 'text-[#210532]'}`}
          />
        );
      case 'building':
        return (
          <Building2
            className={`w-5 h-5 ${isSelected ? 'text-[#E8BD68]' : 'text-[#210532]'}`}
          />
        );
      default:
        return (
          <Compass
            className={`w-5 h-5 ${isSelected ? 'text-[#E8BD68]' : 'text-[#210532]'}`}
          />
        );
    }
  };

  return (
    <div className="bg-[#FAF7F0] min-h-screen pb-20 space-y-12 selection:bg-[#210532] selection:text-[#FDE68A]">
      {/* Sub Navigation Bar for Placements Section */}
      <PlacementsSubNav activeRoute="career-navigator" onNavigate={onNavigate} />

      {/* Hero Section: Exact Shared Editorial Slanted Theme */}
      <section className="relative w-full overflow-x-clip pt-4 sm:pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Clean Editorial Copy & Buttons */}
            <div className="lg:col-span-6 space-y-5 lg:pr-2">
              <RevealBlock direction="left">
                <div className="space-y-4">
                  {/* Eyebrow flanked by gold dashes */}
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-[1.5px] bg-[#C79628]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#210532]">
                      EXPLORE YOUR FUTURE
                    </span>
                    <span className="w-10 h-[1.5px] bg-[#C79628]" />
                  </div>

                  {/* Main Title */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black font-['Playfair_Display',serif] text-[#210532] leading-[1.08] tracking-tight">
                    Career Navigator &amp; <br />
                    <span className="italic font-bold text-[#A87E2B]">
                      Engineering Pathways.
                    </span>
                  </h1>

                  {/* Lead Paragraph */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-lg">
                    Explore six engineering specializations and discover the skills and
                    opportunities connected to your goals.
                  </p>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <a
                      href="#pathfinder-tool"
                      className="px-7 py-3 rounded-full bg-[#C9943B] hover:bg-[#B8832A] text-[#210532] font-semibold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 group cursor-pointer"
                    >
                      <span>Launch 3-Step Pathfinder Tool</span>
                      <ArrowRight className="w-4 h-4 text-[#210532] group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button
                      onClick={() => onNavigate('career-guidance')}
                      className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-[#210532] border border-[#210532]/70 font-semibold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>4-Year PAT Finishing School</span>
                    </button>
                  </div>
                </div>
              </RevealBlock>
            </div>

            {/* Right Column: Framed 3-Step Interactive Path Card */}
            <div className="lg:col-span-6 relative">
              <RevealBlock direction="right" delay={100}>
                <div className="relative w-full">
                  {/* Decorative Symmetrical Gold Wireframe Corner Lines */}
                  <svg
                    className="absolute -inset-4 sm:-inset-6 w-[calc(100%+32px)] sm:w-[calc(100%+48px)] h-[calc(100%+32px)] sm:h-[calc(100%+48px)] pointer-events-none z-0"
                    viewBox="0 0 600 320"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    {/* Top-Left Corner Bracket (matching bottom-right corner) */}
                    <path
                      d="M 15 95 L 15 30 Q 15 16 29 16 L 210 16"
                      stroke="#C79628"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    {/* Bottom-Right Corner Bracket */}
                    <path
                      d="M 390 304 L 571 304 Q 585 304 585 290 L 585 210"
                      stroke="#C79628"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Card Container */}
                  <div className="relative z-10 bg-white rounded-3xl border border-[#DFC06A]/45 shadow-lg p-6 sm:p-8 space-y-6">
                    {/* Card Header Row */}
                    <div className="flex items-center gap-3">
                      <h3 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-[#210532] whitespace-nowrap">
                        Your path starts here
                      </h3>
                      <span className="h-[1.5px] flex-1 bg-[#C79628]/40" />
                    </div>

                    {/* 3 Steps Connected Horizontally */}
                    <div className="grid grid-cols-3 items-start relative pt-1">
                      {/* Step 1: Choose a track */}
                      <div className="flex flex-col items-center text-center space-y-2 relative z-10">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF0F6] border border-purple-100 flex items-center justify-center text-[#210532] shadow-2xs group hover:scale-105 transition-transform">
                          <Layers className="w-6 h-6 text-[#210532]" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-semibold text-[#210532] leading-tight">
                          Choose a track
                        </span>
                      </div>

                      {/* Connecting Line 1 */}
                      <div className="absolute left-[20%] right-[50%] top-7 sm:top-8 h-[1.5px] bg-[#C79628]/70 z-0" />

                      {/* Step 2: Explore opportunities */}
                      <div className="flex flex-col items-center text-center space-y-2 relative z-10">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF0F6] border border-purple-100 flex items-center justify-center text-[#210532] shadow-2xs group hover:scale-105 transition-transform">
                          <Search className="w-6 h-6 text-[#210532]" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-semibold text-[#210532] leading-tight">
                          Explore opportunities
                        </span>
                      </div>

                      {/* Connecting Line 2 */}
                      <div className="absolute left-[50%] right-[20%] top-7 sm:top-8 h-[1.5px] bg-[#C79628]/70 z-0" />

                      {/* Step 3: Plan your next step */}
                      <div className="flex flex-col items-center text-center space-y-2 relative z-10">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF0F6] border border-purple-100 flex items-center justify-center text-[#210532] shadow-2xs group hover:scale-105 transition-transform">
                          {/* Mountain Peak with Flag at Top */}
                          <svg
                            className="w-6 h-6 text-[#210532]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 20L9.5 8L14 14.5L17.5 10L21 20H3Z" />
                            <path d="M17.5 4V10" />
                            <path d="M17.5 4L21 6L17.5 8" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-[13px] font-semibold text-[#210532] leading-tight">
                          Plan your next step
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>

        {/* Full-width Divider Line */}
        <div className="w-full border-t border-[#DFC06A]/40 mt-10 pt-1" />
      </section>

      {/* Track Selection Section (Exact Match to Screenshot) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black font-['Playfair_Display',serif] text-[#210532] tracking-tight">
            Select an Engineering Specialization Track
          </h2>
        </div>

        {/* 6 Track Cards Grid (2 rows x 3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CAREER_DOMAINS.map((domain) => {
            const isSelected = domain.id === selectedDomainId;

            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomainId(domain.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 flex items-center justify-between gap-3.5 cursor-pointer group ${
                  isSelected
                    ? 'bg-[#210532] text-white shadow-lg border border-[#DFC06A]'
                    : 'bg-white hover:bg-amber-50/40 text-[#210532] border border-[#DFC06A]/35 shadow-2xs hover:border-[#DFC06A]'
                }`}
              >
                {/* Left: Icon square */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                    isSelected ? 'bg-white/10' : 'bg-[#FAF0F6]'
                  }`}
                >
                  {renderTrackIcon(domain.iconType, isSelected)}
                </div>

                {/* Vertical Divider */}
                <span
                  className={`w-[1px] h-8 shrink-0 ${
                    isSelected ? 'bg-[#E8BD68]/40' : 'bg-[#C79628]/40'
                  }`}
                />

                {/* Track Title */}
                <div className="min-w-0 flex-1">
                  <h3
                    className={`font-bold text-xs sm:text-[13.5px] leading-snug line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-[#210532]'
                    }`}
                  >
                    {domain.name}
                  </h3>
                </div>

                {/* Right Arrow */}
                <ArrowRight
                  className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${
                    isSelected ? 'text-[#E8BD68]' : 'text-slate-400 group-hover:text-[#210532]'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Active Domain Deep-Dive Bento Card */}
        <RevealBlock direction="up" delay={50}>
          <div className="p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border border-[#DFC06A]/45 shadow-sm space-y-8 mt-4">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#DFC06A]/30">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EFE8F6] text-[#210532] border border-purple-200">
                    {selectedDomain.badge} Domain Roadmap
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Integrated with Autonomous R2024 Syllabi
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
                  {selectedDomain.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedDomain.description}
                </p>
              </div>

              {/* Salary Trajectory Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/40 text-left lg:text-right space-y-1.5 shrink-0 shadow-2xs">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#C79628]">
                  Annual Compensation Trajectory
                </div>
                <div className="text-xs sm:text-sm font-black text-[#210532]">
                  Fresher Campus Offer:{' '}
                  <span className="text-emerald-700">{selectedDomain.startingCtc}</span>
                </div>
                <div className="text-xs font-bold text-slate-600">
                  Mid-Career (3-5 yrs):{' '}
                  <span className="text-[#A87E2B]">{selectedDomain.midCtc}</span>
                </div>
                <div className="text-xs font-bold text-slate-600">
                  Lead / Architect (8+ yrs):{' '}
                  <span className="text-purple-900">{selectedDomain.seniorCtc}</span>
                </div>
              </div>
            </div>

            {/* 4-Box Deep Dive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Box 1: Target Roles */}
              <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#210532]">
                  <Target className="w-4 h-4 text-[#C79628]" />
                  <span>Target Roles</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedDomain.topRoles.map((role, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-800">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 2: Required Skill Stack */}
              <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#210532]">
                  <Code2 className="w-4 h-4 text-[#C79628]" />
                  <span>Technical Skills</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDomain.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#DFC06A]/30 text-[11px] font-medium text-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Box 3: Certifications */}
              <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#210532]">
                  <Award className="w-4 h-4 text-[#C79628]" />
                  <span>Certifications</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedDomain.certifications.map((cert, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
                      <span className="text-slate-800 font-medium">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 4: Jyothi Facilities & Recruiters */}
              <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#210532]">
                  <Building2 className="w-4 h-4 text-[#C79628]" />
                  <span>Labs &amp; Recruiters</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Campus CoEs &amp; Labs:
                    </div>
                    <div className="text-[11.5px] text-slate-800 font-medium pt-0.5">
                      {selectedDomain.jyothiLabs.join(' • ')}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Key Recruiters:
                    </div>
                    <div className="text-[11.5px] text-emerald-800 font-bold pt-0.5">
                      {selectedDomain.topRecruiters.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealBlock>
      </section>

      {/* 3-Step Interactive Career Pathfinder */}
      <section id="pathfinder-tool" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#DFC06A]/30">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#C79628]" />
              INTERACTIVE PATHFINDER
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
              3-Step Engineering Career Pathfinder
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Calibrate your department, technical affinity, and placement goals to preview your personalized semester milestones.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#DFC06A]/45 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Branch */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#210532] uppercase tracking-wider block">
                1. Your Department / Branch
              </label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#FAF7F0] border border-[#DFC06A]/40 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#210532]"
              >
                <option value="CSE">Computer Science &amp; Engg (CSE)</option>
                <option value="AI&DS">Artificial Intelligence &amp; Data Science (AI &amp; DS)</option>
                <option value="ECE">Electronics &amp; Communication (ECE)</option>
                <option value="EEE">Electrical &amp; Electronics (EEE)</option>
                <option value="ME">Mechanical Engineering (ME)</option>
                <option value="CE">Civil Engineering (CE)</option>
                <option value="MR">Mechatronics &amp; Robotics (MR)</option>
              </select>
            </div>

            {/* Step 2: Interest */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#210532] uppercase tracking-wider block">
                2. Primary Technical Interest
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#FAF7F0] border border-[#DFC06A]/40 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#210532]"
              >
                <option value="Software & Cloud">Software, Cloud &amp; Distributed Systems</option>
                <option value="AI & Machine Learning">AI, Computer Vision &amp; Generative Intelligence</option>
                <option value="Silicon & Hardware">Embedded Microcontrollers &amp; VLSI Design</option>
                <option value="EV & Energy">Electric Vehicles &amp; Smart Grid Power</option>
                <option value="Robotics & CAD">Robotics, CNC &amp; Additive Manufacturing</option>
                <option value="Structural & BIM">BIM Digital Modeling &amp; Resilient Infrastructure</option>
              </select>
            </div>

            {/* Step 3: Goal */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#210532] uppercase tracking-wider block">
                3. Primary Career Ambition
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#FAF7F0] border border-[#DFC06A]/40 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#210532]"
              >
                <option value="Big Tech MNC">Tier-1 Product Multinationals (Amazon, Google, Bosch)</option>
                <option value="Core Engineering">Core Technical Specialist &amp; High-Tech R&amp;D</option>
                <option value="Startup Founder">Tech Entrepreneurship &amp; Incubation (Jyothi TBI)</option>
                <option value="Higher Studies">Global Master’s Degree (USA, Germany, Singapore)</option>
                <option value="Public Sector">Government Engineering Services (GATE / UPSC / IES)</option>
              </select>
            </div>
          </div>

          {/* Generated Recommendation Output Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#210532] via-[#2F0847] to-[#1A0329] text-white space-y-4 border border-[#DFC06A]/40 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#DFC06A]" />
                <span className="font-bold text-sm text-[#FDE68A] font-['Playfair_Display',serif]">
                  Custom Career Trajectory for {branch} Candidate
                </span>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#FDE68A] font-mono border border-white/15">
                Target: {interest} ➔ {goal}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
                <div className="text-[10px] uppercase font-bold text-[#DFC06A] tracking-wider">
                  Semesters 1 to 4 Focus
                </div>
                <div className="font-semibold text-white text-sm">
                  Foundations &amp; MIT FabLab Rigs
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Solidify Data Structures, Python/C++ logic, speed math, and attend rapid hardware prototyping sprints.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
                <div className="text-[10px] uppercase font-bold text-[#DFC06A] tracking-wider">
                  Semesters 5 &amp; 6 Focus
                </div>
                <div className="font-semibold text-white text-sm">
                  Domain Certifications &amp; Hackathons
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Clear cloud/VLSI industry exams, participate in national competitions, and complete summer internships.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
                <div className="text-[10px] uppercase font-bold text-[#DFC06A] tracking-wider">
                  Semesters 7 &amp; 8 Focus
                </div>
                <div className="font-semibold text-white text-sm">
                  Executive Mock Panels &amp; Flagship Offers
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Participate in simulated director interviews, technical architecture drills, and high-frequency company drives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Higher Studies & Competitive Exam Pathways */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628] flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#C79628]" />
            ACADEMIC &amp; PUBLIC SECTOR EXCELLENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
            Postgraduate &amp; Competitive Exam Timelines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EFE8F6] flex items-center justify-center text-[#210532]">
              <GraduationCap className="w-5 h-5 text-[#210532]" />
            </div>
            <h3 className="font-bold text-base text-[#210532]">GATE (Graduate Aptitude Test)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gateway to M.Tech at IITs, IISc, and direct recruitment to PSUs (ISRO, IOCL, ONGC, NTPC, BARC). Structured coaching starts in Semester 4.
            </p>
            <div className="text-[11px] text-[#A87E2B] font-bold pt-1">
              Target Window: February of Final Year
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF0E6] flex items-center justify-center text-[#C79628]">
              <Compass className="w-5 h-5 text-[#C79628]" />
            </div>
            <h3 className="font-bold text-base text-[#210532]">GRE &amp; IELTS (MS Abroad)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Advising for Master’s admissions in USA, Germany, UK, and Singapore. Comprehensive Statement of Purpose (SOP) audits and alumni references.
            </p>
            <div className="text-[11px] text-[#A87E2B] font-bold pt-1">
              Target Window: August to October of 4th Year
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="font-bold text-base text-[#210532]">UPSC, IES &amp; Defence (SSB)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Indian Engineering Services (IES) orientation, combined defence services, and technical officer roles in the Indian Armed Forces.
            </p>
            <div className="text-[11px] text-emerald-700 font-bold pt-1">
              Target Window: Final Year Degree Completion
            </div>
          </div>
        </div>
      </section>

      {/* Counseling & Mentorship Desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#DFC06A]/45 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C79628] flex items-center gap-1.5">
              <span className="w-5 h-[1.5px] bg-[#C79628]" />
              ONE-ON-ONE COUNSELING
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#210532]">
              Need Help Deciding Your Pathway?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Book a career navigation session with our dedicated faculty placement coordinators and industry mentors at the Career Guidance Cell.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-700">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#C79628]" />
                <span>+91 4884 259000 / Extn 224</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#C79628]" />
                <span>careernavigator@jecc.ac.in</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('career-guidance')}
              className="px-6 py-2.5 rounded-full bg-[#210532] hover:bg-[#340A4E] text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Briefcase className="w-4 h-4 text-[#DFC06A]" />
              <span>Career Guidance Cell</span>
            </button>
            <button
              onClick={() => onNavigate('corporate-recruiters')}
              className="px-5 py-2.5 rounded-full bg-[#FAF7F0] hover:bg-amber-100/60 border border-[#DFC06A]/60 text-[#210532] font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Recruiters</span>
              <ArrowRight className="w-4 h-4 text-[#C79628]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
