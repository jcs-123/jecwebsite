import React, { useState } from 'react';
import {
  BookOpen, Briefcase, Building2, Globe, Award, Cpu, FileText,
  Trophy, CheckCircle2, Download, ExternalLink, GraduationCap,
  Sparkles, Laptop, Library, Star, Calendar, FileCode, Check, Layers,
  ChevronRight, ArrowRight
} from 'lucide-react';

/* 1. Course B.Tech Page */
export const AidsCourseBtechPage: React.FC<{ onOpenApply?: () => void }> = ({ onOpenApply }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              B.Tech in Artificial Intelligence & Data Science
            </h2>
            <div className="flex-1 h-px bg-[#DFC06A]/40 hidden md:block" />
          </div>
          <button
            onClick={onOpenApply}
            className="px-5 py-2.5 rounded-full bg-[#28052B] text-[#DFC06A] hover:bg-[#3B0A40] transition-colors font-bold text-xs shadow-sm cursor-pointer flex items-center gap-2 border border-[#DFC06A]/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
            <span>Apply for Admission</span>
          </button>
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light max-w-4xl">
          The 4-Year Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science is an autonomous flagship program structured in accordance with UGC autonomous regulations and affiliated to APJ Abdul Kalam Technological University. It equips future engineers with rigorous mathematical foundations, deep learning frameworks, statistical modeling, big data pipelines, and scalable cloud architectures.
        </p>
      </div>

      {/* Program Quick Facts Card */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Program Architecture & Key Metrics
          </h3>
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#28052B]">
            Scheme 2024 (Autonomous)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">4 Years</div>
            <div className="text-[11px] text-[#7A647F] mt-1 font-medium">8 Full-Time Semesters</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">60 Seats</div>
            <div className="text-[11px] text-[#7A647F] mt-1 font-medium">Annual Approved Intake</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">160 Credits</div>
            <div className="text-[11px] text-[#7A647F] mt-1 font-medium">CBCS Degree Framework</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#C79628]">AICTE & UGC</div>
            <div className="text-[11px] text-[#7A647F] mt-1 font-medium">Autonomous Recognition</div>
          </div>
        </div>
      </div>

      {/* PEOs and PSOs Dual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PEOs Card */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <CheckCircle2 className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Program Educational Objectives (PEOs)
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
          <ul className="space-y-3.5 text-xs text-[#4A384F] leading-relaxed font-light">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PEO 1 – Professional Career:</strong> Graduates will establish successful technical careers in data engineering, algorithmic development, and artificial intelligence solutions across global IT enterprises.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PEO 2 – Research & Higher Learning:</strong> Graduates will pursue advanced postgraduate studies, specialized doctoral research, or entrepreneurial computational ventures.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PEO 3 – Ethical & Societal Impact:</strong> Graduates will practice engineering with high ethical standards, intellectual honesty, societal empathy, and lifelong curiosity.
              </div>
            </li>
          </ul>
        </div>

        {/* PSOs Card */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Star className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Program Specific Outcomes (PSOs)
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
          <ul className="space-y-3.5 text-xs text-[#4A384F] leading-relaxed font-light">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PSO 1 – Mathematical & ML Modeling:</strong> Ability to formulate and engineer mathematical predictive models using PyTorch, TensorFlow, CUDA, and modern Transformer libraries.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PSO 2 – Distributed Data & Cloud:</strong> Capability to design distributed cloud data architectures, streaming pipelines, and low-latency inference endpoints on AWS and GCP.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PSO 3 – Edge AI & Intelligent Systems:</strong> Competence in deploying real-time Edge AI vision and speech systems for autonomous industrial and healthcare robotics.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* 2. Career & Placement Page */
export const AidsCareerPlacementPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Career & Placement
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Artificial Intelligence & Data Science operates an aggressive placement and internship facilitation cell in conjunction with Jyothi's Central Placement & Training (PAT) division. Our graduates secure distinguished placements as ML Engineers, Data Scientists, and Cloud Solution Architects.
        </p>
      </div>

      {/* Placement Statistics Card */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Placement Milestones & Package Overview
          </h3>
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#28052B]">
            Batch 2020–2024
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#C79628]">₹24.00 LPA</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Highest Annual CTC</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">₹5.80 LPA</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Average Annual CTC</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">45+</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Recruiting Companies</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-emerald-700">100%</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Internship Placement</div>
          </div>
        </div>
      </div>

      {/* Prominent Recruiting Partners */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Prominent Recruiting Partners
          </h3>
          <span className="text-xs text-[#7A647F]">250+ Hours Aptitude & Coding Prep</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-1">
          {['TCS Digital', 'Infosys', 'Cognizant', 'IBM India', 'Experion', 'UST Global', 'Federal Bank', 'Oracle', 'Speridian', 'Quest Global', 'Tata Elxsi', 'South Indian Bank'].map((c, i) => (
            <div key={i} className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center font-bold text-xs text-[#28052B] flex items-center justify-center h-14 hover:border-[#DFC06A] transition-colors">
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Dual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Placement Framework */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Trophy className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Career Acceleration Framework
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
          <ul className="space-y-3.5 text-xs text-[#4A384F] leading-relaxed font-light">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">Pre-Placement Coding Camps:</strong> Intensive LeetCode, HackerRank, and Kaggle problem sets taught from Semester 4 onwards.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">Technical Mock Panels:</strong> One-on-one evaluations conducted by senior industry architects from Amazon, UST, and IBM.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">Alumni Mentorship Network:</strong> Regular interactions with global graduates placed across the US, UK, and European tech hubs.
              </div>
            </li>
          </ul>
        </div>

        {/* Career Pathways */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <GraduationCap className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Diverse Graduation Pathways
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
          <div className="space-y-3">
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xs text-[#28052B]">Tier-1 Campus Placements</h4>
                <p className="text-[11px] text-[#7A647F] mt-0.5">Direct hiring as Data Scientists and ML Engineers</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#E8F8EE] text-[#1E824C] font-semibold text-[10px] shrink-0">
                ✓ High Package
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xs text-[#28052B]">Higher Studies & MS Abroad</h4>
                <p className="text-[11px] text-[#7A647F] mt-0.5">GATE, GRE, TOEFL, and IELTS preparation assistance</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#E8F8EE] text-[#1E824C] font-semibold text-[10px] shrink-0">
                ✓ Global Admits
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xs text-[#28052B]">TBI Incubation & Startups</h4>
                <p className="text-[11px] text-[#7A647F] mt-0.5">Seed capital, patent guidance, and investor pitching</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#E8F8EE] text-[#1E824C] font-semibold text-[10px] shrink-0">
                ✓ Active Grants
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. Facilities Page */
export const AidsFacilitiesPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Department Facilities (Lab & Library)
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department houses state-of-the-art computational infrastructure featuring dedicated NVIDIA multi-GPU servers, high-speed fiber local networks, edge robotics development kits, and a comprehensive specialized departmental library.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lab 1 */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#28052B]">NVIDIA High Performance GPU Cluster</h4>
                <div className="text-xs text-[#C79628] font-semibold">Deep Learning & Transformer Lab</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
              35 Terminals
            </span>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Dedicated multi-GPU workstations equipped with NVIDIA RTX 4090 / A5000 accelerator cards, 128 GB ECC RAM, and high-speed NVMe storage. Supports training of custom computer vision architectures and local LLM parameter tuning.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong className="text-[#28052B]">Software Stack:</strong> PyTorch, TensorFlow, CUDA 12.2, TensorRT, cuDNN</div>
            <div>• <strong className="text-[#28052B]">Applications:</strong> Large Vision Models, Fine-Tuning LLMs, Diffusion Research</div>
          </div>
        </div>

        {/* Lab 2 */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#28052B]">Big Data & Cloud Engineering Sandbox</h4>
                <div className="text-xs text-[#C79628] font-semibold">Data Pipeline & Analytics Hub</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
              1 Gbps Fiber
            </span>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Configured with Apache Spark, Hadoop clusters, Apache Kafka brokers, and PostgreSQL distributed instances for practicing large-scale data engineering and streaming analytics.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong className="text-[#28052B]">Software Stack:</strong> Apache Spark, Kafka, Docker, Kubernetes, AWS CLI</div>
            <div>• <strong className="text-[#28052B]">Applications:</strong> Distributed ETL, Real-time Fraud Detection, Data Warehousing</div>
          </div>
        </div>

        {/* Lab 3 */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#28052B]">Edge AI & Embedded Systems Bay</h4>
                <div className="text-xs text-[#C79628] font-semibold">Robotics & IoT Prototyping</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
              30+ Kits
            </span>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Stocked with 30+ NVIDIA Jetson Nano / Orin developer kits, Raspberry Pi 5 units, depth cameras, LiDAR sensors, and drone chassis for embedded vision and robotics capstone experiments.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong className="text-[#28052B]">Hardware:</strong> NVIDIA Jetson Orin Nano, Intel RealSense D435i, RP-LiDAR</div>
            <div>• <strong className="text-[#28052B]">Applications:</strong> Autonomous UAV Navigation, Industrial Sorting, Smart City Edge</div>
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
                <h4 className="font-bold text-sm sm:text-base text-[#28052B]">Departmental Specialized Library</h4>
                <div className="text-xs text-[#C79628] font-semibold">Reference & Research Archive</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
              1,200+ Books
            </span>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Houses 1,200+ specialized printed volumes covering Statistical Learning, Reinforcement Learning, Linear Algebra, and Data Mining. Provides direct high-speed digital access to IEEE Xplore, ACM Digital Library, and Scopus indexed publications.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong className="text-[#28052B]">Digital Portals:</strong> IEEE Xplore, ScienceDirect, SpringerLink, ACM Portal</div>
            <div>• <strong className="text-[#28052B]">Facilities:</strong> 12 Dedicated Online Reading Stations, Quiet Research Carrels</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 4. Industry Tie-up Page */
export const AidsIndustryTieupPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Industry Tie-up (MOUs)
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department has forged strategic academic partnerships and formal Memorandums of Understanding (MOUs) with premier multinational corporations to furnish our scholars with vendor-certified curricula, sponsored cloud credits, and industrial internships.
        </p>
      </div>

      {/* MOUs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            tag: 'Global AI Leader',
            title: 'NVIDIA Deep Learning Institute (DLI)',
            desc: 'University Ambassador partnership allowing faculty-led certified workshops on Computer Vision with TensorRT, Natural Language Processing, and LLM fine-tuning.',
            benefit: 'Free student certification exam vouchers ($120 value each)'
          },
          {
            tag: 'Enterprise Database',
            title: 'Oracle Academy',
            desc: 'Direct access to Oracle Cloud Infrastructure (OCI) autonomous databases, enterprise SQL data modeling software, and machine learning cloud extensions.',
            benefit: '$300 Oracle Cloud credits & certification vouchers per student'
          },
          {
            tag: 'Cloud Infrastructure',
            title: 'AWS Academy',
            desc: 'Institutional alliance delivering curriculum modules for AWS Certified Machine Learning Specialty and AWS Cloud Solutions Architect certifications.',
            benefit: '50% discount on AWS certification exams & sandbox labs'
          },
          {
            tag: 'Heterogeneous Compute',
            title: 'Intel oneAPI Academic Alliance',
            desc: 'Collaborative hardware-software framework for parallel programming on cross-architecture CPUs, GPUs, and FPGAs with oneAPI toolkits.',
            benefit: 'Direct access to Intel DevCloud supercomputing clusters'
          },
          {
            tag: 'Open Source Enterprise',
            title: 'Red Hat Academy',
            desc: 'Hands-on training in Red Hat Enterprise Linux system administration, OpenShift container orchestration, and automated Ansible deployments.',
            benefit: 'Industry-accredited Red Hat Certified System Administrator (RHCSA)'
          },
          {
            tag: 'Product Engineering',
            title: 'Experion Technologies',
            desc: 'Collaboration on product incubation, real-world customer problem statements, and accelerated pre-placement interviews for top performers.',
            benefit: 'Paid summer industrial internships & joint capstone mentorship'
          }
        ].map((mou, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C79628]">{mou.tag}</span>
                <span className="px-2 py-0.5 rounded-full bg-[#E8F8EE] text-[#1E824C] text-[10px] font-semibold">✓ Active MOU</span>
              </div>
              <h4 className="font-bold text-base text-[#28052B] leading-snug">{mou.title}</h4>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">{mou.desc}</p>
            </div>
            <div className="pt-3 border-t border-[#E7D6C1] text-[11px] text-[#28052B] font-medium">
              <span className="text-[#C79628] font-bold">Key Benefit:</span> {mou.benefit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 5. Achievements Page */
export const AidsAchievementsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Achievements (Student & Staff)
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Students and faculty of the AI & DS department consistently earn prestigious laurels at national hackathons, government research forums, and competitive programming championships.
        </p>
      </div>

      {/* Dual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Achievements */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Trophy className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Student Laurels & Honors
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>

          <div className="space-y-3.5">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">Smart India Hackathon (SIH) Finalists</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">National Final</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Team "AgriVision" developed an edge-computing autonomous drone crop disease detector using multi-spectral imagery, selected among the top 5 teams nationally.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">IEEE CONECCT Best Research Paper</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">First Prize</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Er. Nevin Paul & team awarded First Prize at IEEE CONECCT 2024 for their research on vernacular speech emotion recognition using lightweight Conformer networks.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">Kerala Startup Mission (KSUM) Idea Grant</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 font-bold">₹2.0 Lakhs</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Student venture "NeuroScribe AI" secured seed funding from KSUM for building clinical radiology transcription models tailored for Indian healthcare.
              </p>
            </div>
          </div>
        </div>

        {/* Staff Achievements */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Star className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Staff Accolades & Research Grants
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>

          <div className="space-y-3.5">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">Indian Patent Granted (No. 492014)</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">Patent Grant</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Dr. Deepa V. and Prof. Anoop V. granted official Indian Patent for "Cognitive Assistive Multi-Modal Navigation System for Visually Impaired".
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">AICTE RPS Research Grant</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 font-bold">₹18.5 Lakhs</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Dr. Praveen Kumar S. sanctioned research grant for investigations into distributed graph neural networks on federated edge clusters.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">APJ AKTU Best Faculty Commendation</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">State Award</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Prof. Neethu Mohan honored by the Technological University for outstanding contributions to autonomous curriculum design and high-impact publications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 6. Research Page */
export const AidsResearchPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Faculty & Department Research
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Scholarly investigations in Artificial Intelligence & Data Science span deep neural representations, medical image computing, vernacular NLP, and federated edge optimization, indexed across Scopus, Web of Science, and IEEE Xplore.
        </p>
      </div>

      {/* Research Output Summary Card */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Research Impact & Scholarly Metrics
          </h3>
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#28052B]">
            Scopus / SCI Indexed
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">35+</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Scopus Indexed Papers</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#C79628]">₹42.5 L</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Funded Research Grants</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">4</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Patents Published</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">520+</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Scholar Citations</div>
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
            { title: 'Self-Supervised Contrastive Learning for Multi-Modal Breast Cancer Diagnosis in Histopathology', authors: 'Dr. Deepa V., Prof. Anoop V., et al.', journal: 'IEEE Transactions on Medical Imaging (2024)', doi: '10.1109/TMI.2024.3129845' },
            { title: 'Distributed Graph Neural Networks on Federated Multi-Cloud Architectures for Fraud Scoring', authors: 'Dr. Praveen Kumar S., Prof. Neethu Mohan', journal: 'Elsevier Journal of Systems & Software (2024)', doi: '10.1016/j.jss.2024.111982' },
            { title: 'Low-Latency Lightweight Conformer Models for Malayalam Speech-to-Text Transcription', authors: 'Prof. Nimitha George, Dr. Deepa V.', journal: 'ACM Transactions on Asian Language Information Processing (2024)', doi: '10.1145/3638421' },
            { title: 'Resource-Constrained Edge Transformer Inference on NVIDIA Jetson Deployments', authors: 'Prof. Reshma K. R., Er. Vigneshwaran R.', journal: 'IEEE Internet of Things Journal (2023)', doi: '10.1109/JIOT.2023.3289012' },
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

/* 7. Syllabus Page */
export const AidsSyllabusPage: React.FC = () => {
  const [activeSem, setActiveSem] = useState('s1s2');

  const syllabusMap: Record<string, { title: string; desc: string; courses: { code: string; name: string; cred: number; cat: string }[] }> = {
    s1s2: {
      title: 'First Year (Semester 1 & 2)',
      desc: 'Foundational mathematics, computational thinking, basic electronics, and core Python algorithms.',
      courses: [
        { code: 'MAT101', name: 'Linear Algebra and Differential Calculus', cred: 4, cat: 'Basic Science' },
        { code: 'PHY100', name: 'Engineering Physics / Chemistry', cred: 4, cat: 'Basic Science' },
        { code: 'AID101', name: 'Python for Data Science & Computing', cred: 4, cat: 'Program Core' },
        { code: 'AID102', name: 'Foundations of Artificial Intelligence', cred: 3, cat: 'Program Core' },
        { code: 'AID131', name: 'Python Programming Lab', cred: 1.5, cat: 'Laboratory' },
      ]
    },
    s3s4: {
      title: 'Second Year (Semester 3 & 4)',
      desc: 'Core computer science fundamentals, data structures, discrete mathematics, and database engineering.',
      courses: [
        { code: 'MAT201', name: 'Discrete Mathematical Structures & Probability', cred: 4, cat: 'Basic Science' },
        { code: 'AID201', name: 'Data Structures and Algorithms in C++/Python', cred: 4, cat: 'Program Core' },
        { code: 'AID202', name: 'Relational & NoSQL Database Management Systems', cred: 4, cat: 'Program Core' },
        { code: 'AID203', name: 'Computer Organization & Operating Systems', cred: 4, cat: 'Program Core' },
        { code: 'AID231', name: 'Data Structures & Algorithms Lab', cred: 1.5, cat: 'Laboratory' },
        { code: 'AID232', name: 'Database Engineering Lab', cred: 1.5, cat: 'Laboratory' },
      ]
    },
    s5s6: {
      title: 'Third Year (Semester 5 & 6)',
      desc: 'Advanced machine learning, deep neural networks, computer vision, and big data architecture.',
      courses: [
        { code: 'AID301', name: 'Machine Learning & Statistical Pattern Recognition', cred: 4, cat: 'Program Core' },
        { code: 'AID302', name: 'Deep Neural Networks & Representation Learning', cred: 4, cat: 'Program Core' },
        { code: 'AID303', name: 'Big Data Architecture & Distributed Processing', cred: 4, cat: 'Program Core' },
        { code: 'AID304', name: 'Computer Vision & Image Processing', cred: 3, cat: 'Program Core' },
        { code: 'AID331', name: 'Deep Learning & Neural Networks Lab', cred: 1.5, cat: 'Laboratory' },
        { code: 'AID332', name: 'Mini Project in AI Systems', cred: 2, cat: 'Project' },
      ]
    },
    s7s8: {
      title: 'Final Year (Semester 7 & 8)',
      desc: 'Generative AI, Natural Language Processing, MLOps, ethical AI, and year-long Capstone Project.',
      courses: [
        { code: 'AID401', name: 'Natural Language Processing & LLMs', cred: 4, cat: 'Program Core' },
        { code: 'AID402', name: 'Cloud Computing & MLOps Infrastructure', cred: 3, cat: 'Program Core' },
        { code: 'AID403', name: 'AI Ethics, Safety & Statutory Governance', cred: 3, cat: 'Program Core' },
        { code: 'AID41X', name: 'Program Elective (Reinforcement Learning / Edge AI)', cred: 3, cat: 'Elective' },
        { code: 'AID491', name: 'Major Capstone Research Project (Phase 1 & 2)', cred: 8, cat: 'Capstone' },
      ]
    }
  };

  const current = syllabusMap[activeSem];

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
              Syllabus & Curriculum (Scheme 2024)
            </h2>
            <div className="flex-1 h-px bg-[#DFC06A]/40 hidden md:block" />
          </div>
          <button
            onClick={() => alert("Downloading full Scheme 2024 Curriculum PDF")}
            className="px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#C79628]" />
            <span>Download Scheme PDF</span>
          </button>
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The autonomous curriculum follows a Choice Based Credit System (CBCS) aligned with the National Education Policy (NEP 2020), integrating industry-endorsed electives, GPU laboratory experiments, and capstone projects.
        </p>
      </div>

      {/* Semester Group Switcher Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { id: 's1s2', label: 'Semester 1 & 2', subtitle: 'Year 1: Foundations' },
          { id: 's3s4', label: 'Semester 3 & 4', subtitle: 'Year 2: Core Engineering' },
          { id: 's5s6', label: 'Semester 5 & 6', subtitle: 'Year 3: Advanced AI' },
          { id: 's7s8', label: 'Semester 7 & 8', subtitle: 'Year 4: Capstone & MLOps' },
        ].map(s => {
          const isActive = activeSem === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveSem(s.id)}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#28052B] text-white border-[#28052B] shadow-sm'
                  : 'bg-white border-[#E7D6C1] hover:bg-[#FAF7F2] text-[#28052B]'
              }`}
            >
              <div className={`text-xs font-bold ${isActive ? 'text-[#DFC06A]' : 'text-[#28052B]'}`}>
                {s.label}
              </div>
              <div className="text-[11px] opacity-80 mt-1">{s.subtitle}</div>
            </button>
          );
        })}
      </div>

      {/* Course Table Card */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs overflow-hidden">
        <div className="p-5 sm:p-6 pb-4 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            {current.title}
          </h3>
          <p className="text-xs text-[#7A647F] mt-0.5 font-light">
            {current.desc}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Course Code</th>
                <th className="py-3 px-4 font-semibold">Course Title</th>
                <th className="py-3 px-4 font-semibold">Category</th>
                <th className="py-3 px-4 font-semibold">Credits</th>
                <th className="py-3 px-4 font-semibold text-right">Syllabus PDF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-white">
              {current.courses.map((c, i) => (
                <tr key={i} className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-[#28052B]">{c.code}</td>
                  <td className="py-3 px-4 font-bold text-[#28052B]">{c.name}</td>
                  <td className="py-3 px-4 text-[#4A384F]">{c.cat}</td>
                  <td className="py-3 px-4 font-mono font-bold text-[#C79628]">{c.cred}</td>
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
