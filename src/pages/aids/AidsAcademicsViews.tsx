import React, { useState } from 'react';
import {
  BookOpen, Briefcase, Building2, Globe, Award, Cpu, FileText,
  Trophy, CheckCircle2, Download, ExternalLink, GraduationCap,
  Sparkles, Laptop, Library, Star, Calendar, FileCode, Check, Layers
} from 'lucide-react';

/* 1. Course B.Tech Page */
export const AidsCourseBtechPage: React.FC<{ onOpenApply: () => void }> = ({ onOpenApply }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Undergraduate Academic Program</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                B.Tech in Artificial Intelligence & Data Science
              </h2>
            </div>
          </div>
          <button
            onClick={onOpenApply}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F6CE5E] via-[#F2BE42] to-[#E8AE2F] text-[#28052B] font-extrabold text-xs shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Apply for Admission</span>
          </button>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The 4-Year Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science is an autonomous flagship program structured in accordance with UGC autonomous guidelines and affiliated to APJ Abdul Kalam Technological University. It equips future engineers with rigorous mathematical foundations, deep learning frameworks, statistical modeling, big data pipelines, and scalable cloud architectures.
        </p>

        {/* Highlight Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-xl font-bold text-[#28052B]">4 Years</div>
            <div className="text-[11px] text-[#7A647F] mt-0.5">8 Semesters Full-Time</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-xl font-bold text-[#28052B]">60 Seats</div>
            <div className="text-[11px] text-[#7A647F] mt-0.5">Annual Approved Intake</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-xl font-bold text-[#28052B]">160 Credits</div>
            <div className="text-[11px] text-[#7A647F] mt-0.5">CBCS Framework</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-xl font-bold text-[#C79628]">AICTE & UGC</div>
            <div className="text-[11px] text-[#7A647F] mt-0.5">Autonomous Approval</div>
          </div>
        </div>
      </div>

      {/* PEOs, POs, PSOs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#C79628]" />
            <span>Program Educational Objectives (PEOs)</span>
          </h3>
          <ul className="text-xs text-[#4A384F] space-y-3 leading-relaxed font-light">
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#C79628] shrink-0">PEO 1:</span>
              <span>Graduates will establish successful technical careers in data engineering, algorithmic development, and artificial intelligence solutions across global IT enterprises.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#C79628] shrink-0">PEO 2:</span>
              <span>Graduates will pursue advanced postgraduate studies, specialized doctoral research, or entrepreneurial computational ventures.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#C79628] shrink-0">PEO 3:</span>
              <span>Graduates will practice engineering with high ethical standards, intellectual honesty, societal empathy, and lifelong curiosity.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] flex items-center gap-2">
            <Star className="w-5 h-5 text-[#C79628]" />
            <span>Program Specific Outcomes (PSOs)</span>
          </h3>
          <ul className="text-xs text-[#4A384F] space-y-3 leading-relaxed font-light">
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#C79628] shrink-0">PSO 1:</span>
              <span>Ability to formulate and engineer mathematical predictive models using PyTorch, TensorFlow, CUDA, and modern Transformer libraries.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#C79628] shrink-0">PSO 2:</span>
              <span>Capability to design distributed cloud data architectures, streaming pipelines, and low-latency inference endpoints on AWS and GCP.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#C79628] shrink-0">PSO 3:</span>
              <span>Competence in deploying real-time Edge AI vision and speech systems for autonomous industrial and healthcare robotics.</span>
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
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Corporate Recruitments & Placements</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Career & Placement
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Placement Record: 94%+
          </span>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#C79628]">₹24.00 LPA</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5 font-medium">Highest Annual CTC</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">₹5.80 LPA</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5 font-medium">Average Annual CTC</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">45+</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5 font-medium">Corporate Recruiters</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-emerald-700">100%</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5 font-medium">Internship Placement</div>
          </div>
        </div>
      </div>

      {/* Prominent Recruiting Partners */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
          Tier-1 Corporate Recruiting Partners
        </h3>
        <p className="text-xs text-[#7A647F] font-light">
          Jyothi's dedicated Placement and Aptitude Training (PAT) cell delivers 250+ hours of coding assessments, algorithmic bootcamps, and mock interviews.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
          {['TCS Digital', 'Infosys', 'Cognizant', 'IBM India', 'Experion', 'UST Global', 'Federal Bank', 'Oracle', 'Speridian', 'Quest Global', 'Tata Elxsi', 'South Indian Bank'].map((c, i) => (
            <div key={i} className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center font-bold text-xs text-[#28052B] flex items-center justify-center h-14 hover:border-[#DFC06A] transition-colors">
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* Career Pathways */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-[#28052B] flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-[#C79628]" />
            <span>Campus Placements</span>
          </h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Campus recruitment begins in Semester 7, with students receiving high-paying roles such as Data Scientist, ML Engineer, Full-Stack Developer, and Big Data Analyst.
          </p>
        </div>
        <div className="p-5 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-[#28052B] flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#C79628]" />
            <span>Higher Studies Mentoring</span>
          </h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Dedicated GATE, GRE, and IELTS coaching cells assist aspiring scholars in gaining admits to prestigious European, American, and Indian institutes.
          </p>
        </div>
        <div className="p-5 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-[#28052B] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C79628]" />
            <span>AI Startup Incubation</span>
          </h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Support through Jyothi's Technology Business Incubator (TBI) with seed funding, cloud credits, patent filing guidance, and angel investor pitching sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

/* 3. Facilities Page */
export const AidsFacilitiesPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Infrastructure & Research Centers</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Facilities (Lab & Library)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            World-Class Compute Hub
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department houses state-of-the-art computational infrastructure featuring dedicated NVIDIA multi-GPU servers, high-speed fiber local networks, edge robotics development kits, and a comprehensive specialized departmental library.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lab 1 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-[#28052B]">NVIDIA High Performance GPU Cluster</h4>
              <div className="text-xs text-[#C79628] font-semibold">Deep Learning & Transformer Lab</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Dedicated multi-GPU workstations equipped with NVIDIA RTX 4090 / A5000 accelerator cards, 128 GB ECC RAM, and high-speed NVMe storage. Supports training of custom computer vision architectures and local LLM parameter tuning.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong>Primary Stack:</strong> PyTorch, TensorFlow, CUDA 12.2, TensorRT</div>
            <div>• <strong>Capacity:</strong> 35 High-End Workstation Terminals</div>
          </div>
        </div>

        {/* Lab 2 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-[#28052B]">Big Data & Cloud Engineering Sandbox</h4>
              <div className="text-xs text-[#C79628] font-semibold">Data Pipeline & Analytics Hub</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Configured with Apache Spark, Hadoop clusters, Apache Kafka brokers, and PostgreSQL distributed instances for practicing large-scale data engineering and streaming analytics.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong>Primary Stack:</strong> Spark, Kafka, Docker, Kubernetes, AWS CLI</div>
            <div>• <strong>Capacity:</strong> 35 Networked Terminals with 1 Gbps Fiber</div>
          </div>
        </div>

        {/* Lab 3 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-[#28052B]">Edge AI & Embedded Systems Bay</h4>
              <div className="text-xs text-[#C79628] font-semibold">Robotics & IoT Prototyping</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Stocked with 30+ NVIDIA Jetson Nano / Orin developer kits, Raspberry Pi 5 units, depth cameras, LiDAR sensors, and drone chassis for embedded vision and robotics capstone experiments.
          </p>
        </div>

        {/* Department Library */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
              <Library className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-[#28052B]">Departmental Specialized Library</h4>
              <div className="text-xs text-[#C79628] font-semibold">Reference & Research Archive</div>
            </div>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Houses 1,200+ specialized printed volumes covering Statistical Learning, Reinforcement Learning, Linear Algebra, and Data Mining. Provides direct high-speed digital access to IEEE Xplore, ACM Digital Library, and Scopus indexed publications.
          </p>
        </div>
      </div>
    </div>
  );
};

/* 4. Industry Tie-up Page */
export const AidsIndustryTieupPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Corporate Collaborations & Accreditations</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Industry Tie-up (MOUs)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            6 Active MOUs
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department has forged strategic academic partnerships and formal Memorandums of Understanding (MOUs) with premier technology multinational corporations to furnish our students with vendor-certified curricula, sponsored cloud credits, and industrial internships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C79628]">Global AI Leader</div>
          <h4 className="font-bold text-base text-[#28052B]">NVIDIA Deep Learning Institute (DLI)</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            University Ambassador partnership allowing faculty-led certified workshops on Computer Vision with TensorRT, Natural Language Processing, and LLM fine-tuning.
          </p>
          <div className="text-[11px] font-semibold text-[#28052B] pt-2 border-t border-[#E7D6C1]">
            Benefit: Free student certification exam vouchers
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C79628]">Enterprise Database</div>
          <h4 className="font-bold text-base text-[#28052B]">Oracle Academy</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Direct access to Oracle Cloud Infrastructure (OCI) autonomous databases, enterprise SQL data modeling software, and machine learning cloud extensions.
          </p>
          <div className="text-[11px] font-semibold text-[#28052B] pt-2 border-t border-[#E7D6C1]">
            Benefit: $300 Oracle Cloud credits per student
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C79628]">Cloud Infrastructure</div>
          <h4 className="font-bold text-base text-[#28052B]">AWS Academy</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Institutional alliance delivering curriculum modules for AWS Certified Machine Learning Specialty and AWS Cloud Solutions Architect.
          </p>
          <div className="text-[11px] font-semibold text-[#28052B] pt-2 border-t border-[#E7D6C1]">
            Benefit: 50% discount on AWS certification exams
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C79628]">Heterogeneous Compute</div>
          <h4 className="font-bold text-base text-[#28052B]">Intel oneAPI Academic Alliance</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Collaborative hardware-software framework for parallel programming on cross-architecture CPUs, GPUs, and FPGAs.
          </p>
          <div className="text-[11px] font-semibold text-[#28052B] pt-2 border-t border-[#E7D6C1]">
            Benefit: Access to Intel DevCloud supercomputing nodes
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C79628]">Open Source Enterprise</div>
          <h4 className="font-bold text-base text-[#28052B]">Red Hat Academy</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Hands-on training in Red Hat Enterprise Linux system administration, OpenShift container orchestration, and automated Ansible deployments.
          </p>
          <div className="text-[11px] font-semibold text-[#28052B] pt-2 border-t border-[#E7D6C1]">
            Benefit: Industry containerization certification
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C79628]">Product Engineering</div>
          <h4 className="font-bold text-base text-[#28052B]">Experion Technologies</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Collaboration on product incubation, real-world customer problem statements, and accelerated pre-placement interviews for top performers.
          </p>
          <div className="text-[11px] font-semibold text-[#28052B] pt-2 border-t border-[#E7D6C1]">
            Benefit: Paid summer industry internships
          </div>
        </div>
      </div>
    </div>
  );
};

/* 5. Achievements Page */
export const AidsAchievementsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Laurels & National Commendations</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Achievements (Student & Staff)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Excellence Benchmarks
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Students and faculty of the AI & DS department consistently earn top honors at prestigious national hackathons, government research forums, and competitive programming championships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Achievements */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#C79628]" />
            <span>Student Laurels & Honors</span>
          </h3>
          <div className="space-y-3 text-xs text-[#4A384F]">
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>Smart India Hackathon (SIH) 2024 Finalists</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">National Final</span>
              </div>
              <p className="leading-relaxed">Team "AgriVision" developed an edge-computing autonomous drone crop disease detector using multi-spectral imagery, selected among the top 5 teams nationally.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>IEEE International Best Paper Award</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">First Prize</span>
              </div>
              <p className="leading-relaxed">Er. Nevin Paul & team awarded First Prize at IEEE CONECCT 2024 for their research on vernacular speech emotion recognition using lightweight Conformer networks.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>Kerala Startup Mission Idea Grant</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-bold">₹2.0 Lakhs</span>
              </div>
              <p className="leading-relaxed">Student venture "NeuroScribe AI" secured seed funding from KSUM for building clinical radiology transcription models.</p>
            </div>
          </div>
        </div>

        {/* Staff Achievements */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] flex items-center gap-2">
            <Star className="w-5 h-5 text-[#C79628]" />
            <span>Staff Accolades & Grants</span>
          </h3>
          <div className="space-y-3 text-xs text-[#4A384F]">
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>Government Patent Granted</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Patent Grant</span>
              </div>
              <p className="leading-relaxed">Dr. Deepa V. and Prof. Anoop V. granted official Indian Patent (No. 492014) for "Cognitive Assistive Multi-Modal Navigation System for Visually Impaired".</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>APJ AKTU Best Faculty Commendation</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">State Level</span>
              </div>
              <p className="leading-relaxed">Prof. Neethu Mohan honored by APJ Abdul Kalam Technological University for exceptional contribution to autonomous syllabus creation and research publications.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <div className="font-bold text-[#28052B] flex items-center justify-between">
                <span>AICTE RPS Research Grant</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold">₹18.5 Lakhs</span>
              </div>
              <p className="leading-relaxed">Dr. Praveen Kumar S. sanctioned sponsored research grant for investigations into distributed graph neural networks on federated edge clusters.</p>
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
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Scholarly Publications & Projects</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Faculty & Department Research
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Scopus / SCI Indexed
          </span>
        </div>

        {/* Research Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">35+</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5">Scopus Indexed Papers</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#C79628]">₹42.5 L</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5">Funded Grants</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">4</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5">Patents Published</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">520+</div>
            <div className="text-[11px] text-[#4A384F] mt-0.5">Google Scholar Citations</div>
          </div>
        </div>
      </div>

      {/* Research Domains & Recent Publications */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
          Recent Scopus / IEEE Indexed Publications
        </h3>
        <div className="space-y-3">
          {[
            { title: 'Self-Supervised Contrastive Learning for Multi-Modal Breast Cancer Diagnosis in Histopathology', authors: 'Dr. Deepa V., Prof. Anoop V., et al.', journal: 'IEEE Transactions on Medical Imaging (2024)', doi: '10.1109/TMI.2024.3129845' },
            { title: 'Distributed Graph Neural Networks on Federated Multi-Cloud Architectures for Fraud Scoring', authors: 'Dr. Praveen Kumar S., Prof. Neethu Mohan', journal: 'Elsevier Journal of Systems & Software (2024)', doi: '10.1016/j.jss.2024.111982' },
            { title: 'Low-Latency Lightweight Conformer Models for Malayalam Speech-to-Text Transcription', authors: 'Prof. Nimitha George, Dr. Deepa V.', journal: 'ACM Transactions on Asian Language Information Processing (2024)', doi: '10.1145/3638421' },
            { title: 'Resource-Constrained Edge Transformer Inference on NVIDIA Jetson Deployments', authors: 'Prof. Reshma K. R., Er. Vigneshwaran R.', journal: 'IEEE Internet of Things Journal (2023)', doi: '10.1109/JIOT.2023.3289012' },
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

/* 7. Syllabus Page */
export const AidsSyllabusPage: React.FC = () => {
  const [activeSem, setActiveSem] = useState('s1s2');

  const syllabusMap: Record<string, { title: string; desc: string; courses: { code: string; name: string; cred: number; cat: string }[] }> = {
    s1s2: {
      title: 'First Year (Semester 1 & 2)',
      desc: 'Foundational mathematics, basic programming, computational thinking, and engineering sciences.',
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
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Autonomous CBCS Framework</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Syllabus & Curriculum (Scheme 2024)
              </h2>
            </div>
          </div>
          <button
            onClick={() => alert("Downloading full Scheme 2024 Curriculum PDF")}
            className="px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#C79628]" />
            <span>Download Scheme PDF</span>
          </button>
        </div>

        {/* Semester Group Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5">
          {[
            { id: 's1s2', label: 'Semester 1 & 2', subtitle: 'Year 1' },
            { id: 's3s4', label: 'Semester 3 & 4', subtitle: 'Year 2' },
            { id: 's5s6', label: 'Semester 5 & 6', subtitle: 'Year 3' },
            { id: 's7s8', label: 'Semester 7 & 8', subtitle: 'Year 4' },
          ].map(s => {
            const isActive = activeSem === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSem(s.id)}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#28052B] text-white border-[#28052B] shadow-sm'
                    : 'bg-[#FAF7F2] border-[#E7D6C1] hover:bg-white text-[#28052B]'
                }`}
              >
                <div className={`text-xs font-bold ${isActive ? 'text-[#DFC06A]' : 'text-[#28052B]'}`}>
                  {s.label}
                </div>
                <div className="text-[11px] opacity-80 mt-0.5">{s.subtitle}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Semester Course Table */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
        <div>
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            {current.title}
          </h3>
          <p className="text-xs text-[#7A647F] mt-1 font-light">
            {current.desc}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#E7D6C1] rounded-2xl overflow-hidden">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-2.5 px-3.5 font-semibold">Course Code</th>
                <th className="py-2.5 px-3.5 font-semibold">Course Title</th>
                <th className="py-2.5 px-3.5 font-semibold">Category</th>
                <th className="py-2.5 px-3.5 font-semibold">Credits</th>
                <th className="py-2.5 px-3.5 font-semibold text-right">Syllabus PDF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-[#FAF7F2]/40">
              {current.courses.map((c, i) => (
                <tr key={i} className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-3.5 font-mono font-bold text-[#28052B]">{c.code}</td>
                  <td className="py-2.5 px-3.5 font-bold text-[#28052B]">{c.name}</td>
                  <td className="py-2.5 px-3.5 text-[#4A384F]">{c.cat}</td>
                  <td className="py-2.5 px-3.5 font-mono font-bold text-[#C79628]">{c.cred}</td>
                  <td className="py-2.5 px-3.5 text-right">
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
