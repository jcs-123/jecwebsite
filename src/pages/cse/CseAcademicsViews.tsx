import React, { useState } from 'react';
import {
  GraduationCap, Briefcase, Building2, Handshake, Trophy,
  FileText, CheckCircle2, Download, ExternalLink, BookOpen,
  Award, Sparkles, Cpu, Layers, Library, Compass, Users, MapPin,
  TrendingUp, Lightbulb, Target, Code2, Server, Terminal, ShieldAlert
} from 'lucide-react';

/* 1. Course B.Tech Page */
export const CseCourseBtechPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Undergraduate Program</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                B.Tech in Computer Science &amp; Engineering
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
              Sanctioned Intake: 180 Seats (3 Divisions)
            </span>
            <span className="px-3 py-1 rounded-full bg-[#28052B] text-white text-xs font-mono font-bold">
              NBA Accredited Tier-1
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Bachelor of Technology (B.Tech) program in Computer Science & Engineering at Jyothi Engineering College offers an internationally benchmarked computer science curriculum designed to nurture algorithmic thinkers, full-stack software architects, artificial intelligence researchers, and cloud computing engineers.
        </p>
      </div>

      {/* Program Educational Objectives (PEOs) & Program Specific Outcomes (PSOs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E7D6C1]">
            <Target className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Program Educational Objectives (PEOs)
            </h3>
          </div>
          <div className="space-y-3 text-xs text-[#4A384F] font-light leading-relaxed">
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PEO 1: Technical & Algorithmic Excellence</strong>
              Graduates will excel in professional computing careers and higher studies by applying rigorous algorithmic, mathematical, and software engineering principles to solve complex problems.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PEO 2: Modern Systems & Cloud Agility</strong>
              Graduates will adapt rapidly to disruptive paradigms including Cloud-Native DevOps, Foundation Artificial Intelligence, and Distributed Ledger Architectures.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PEO 3: Ethical Leadership & Entrepreneurship</strong>
              Graduates will demonstrate professional integrity, communicative eloquence, and entrepreneurial vigor in multi-disciplinary global software enterprises.
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E7D6C1]">
            <Compass className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Program Specific Outcomes (PSOs)
            </h3>
          </div>
          <div className="space-y-3 text-xs text-[#4A384F] font-light leading-relaxed">
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PSO 1: Full-Stack Architecture & Cloud</strong>
              Ability to design, build, and deploy secure enterprise cloud-native microservices, scalable relational/NoSQL databases, and responsive interactive frontends.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PSO 2: Intelligent Systems & Data Analytics</strong>
              Ability to conceptualize, train, evaluate, and optimize machine learning, deep neural networks, and computer vision models for complex industrial applications.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PSO 3: Cyber Security & Systems Programming</strong>
              Ability to develop secure operating system kernels, cryptographic encryption ciphers, and defend network infrastructures against zero-day cyber exploits.
            </div>
          </div>
        </div>
      </div>

      {/* Honours & Minor Specializations */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-[#28052B] to-[#3B0840] rounded-3xl text-white space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFC06A]">Autonomous Specializations</span>
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
              B.Tech Honours &amp; Minor Tracks
            </h3>
          </div>
          <span className="text-xs text-white/70">Choice Based Credit System (CBCS)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light">
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="font-bold text-[#DFC06A]">Honours in Artificial Intelligence &amp; ML</div>
            <p className="text-white/80">Deep Reinforcement Learning, Transformer Architectures, Generative AI Models, and Natural Language Understanding with PyTorch.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="font-bold text-[#DFC06A]">Honours in Cloud Computing &amp; DevOps</div>
            <p className="text-white/80">Kubernetes Cluster Orchestration, Terraform Infrastructure-as-Code, Serverless Microservices, and Site Reliability Engineering.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="font-bold text-[#DFC06A]">Honours in Cyber Security &amp; Blockchain</div>
            <p className="text-white/80">Offensive Penetration Testing, Malware Reverse Engineering, Ethereum Solidity Smart Contracts, and Cryptographic Protocols.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Career and Placement Page (Placement, Higher Studies, Entrepreneurship) */
export const CseCareerPlacementPage: React.FC = () => {
  const [subTab, setSubTab] = useState<'placement' | 'higher-studies' | 'entrepreneurship'>('placement');

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Professional Trajectories</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Career and Placement
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'placement', label: 'i. Placement' },
              { id: 'higher-studies', label: 'ii. Higher Studies' },
              { id: 'entrepreneurship', label: 'iii. Entrepreneurship' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer text-xs font-bold ${
                  subTab === tab.id
                    ? 'bg-[#28052B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1] hover:bg-[#E7D6C1]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Computer Science & Engineering consistently drives the college's record placements, with over 96% of eligible candidates placed across Tier-1 software giants, fintech institutions, product innovators, and overseas graduate schools.
        </p>
      </div>

      {/* VIEW A: PLACEMENT */}
      {subTab === 'placement' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-emerald-700">96.4%</div>
              <div className="text-xs text-[#7A647F] mt-1">Placement Record</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#C79628]">₹24.5 LPA</div>
              <div className="text-xs text-[#7A647F] mt-1">Highest Package</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#28052B]">₹6.2 LPA</div>
              <div className="text-xs text-[#7A647F] mt-1">Average Package</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#28052B]">320+</div>
              <div className="text-xs text-[#7A647F] mt-1">Placement Offers</div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Top Product &amp; Enterprise IT Recruiters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
              {[
                { name: 'Amazon Web Services', type: 'Product / Cloud' },
                { name: 'Oracle Corporation', type: 'Enterprise Cloud' },
                { name: 'Federal Bank', type: 'Fintech / IT Officers' },
                { name: 'TCS (Digital & Ninja)', type: 'Consulting & Cloud' },
                { name: 'Infosys (Specialist Programmer)', type: 'High-Package R&D' },
                { name: 'Cognizant Technology', type: 'Full Stack & DevOps' },
                { name: 'Wipro Limited (Turbo)', type: 'Cloud & AI Engineering' },
                { name: 'UST Global', type: 'Digital Transformation' },
                { name: 'Sutherland Global', type: 'Tech Support & Analytics' },
                { name: 'Experion Technologies', type: 'Product Engineering' },
                { name: 'Quest Global', type: 'Embedded Software' },
                { name: 'IBS Software', type: 'Aviation & Travel SaaS' },
              ].map((co, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                  <div className="font-bold text-[#28052B]">{co.name}</div>
                  <div className="text-[10px] text-[#7A647F]">{co.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW B: HIGHER STUDIES */}
      {subTab === 'higher-studies' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Premier Graduate School Admissions &amp; GATE Success
            </h3>
            <span className="text-xs text-[#C79628] font-bold">IITs • NITs • Global Universities</span>
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Dedicated GATE problem-solving clubs and international education advisory cells support CSE scholars aspiring to pursue research degrees at top global computational laboratories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { institute: 'IIT Bombay', course: 'M.Tech in Computer Science', student: 'Naveen Raj P. (AIR 84 - GATE CS 2024)' },
              { institute: 'IISc Bangalore', course: 'M.Tech in Computational Data Science', student: 'Alan Jose P. (AIR 142 - GATE 2023)' },
              { institute: 'Carnegie Mellon University (CMU)', course: 'M.S. in Software Engineering', student: 'Divya Menon (Batch 2021)' },
              { institute: 'Georgia Institute of Technology', course: 'M.S. in Cybersecurity', student: 'Gokul Chandran (Batch 2022)' },
              { institute: 'NIT Calicut', course: 'M.Tech in Computer Science & Information Security', student: 'Aishwarya Rajesh (AIR 320 - GATE)' },
              { institute: 'Technical University of Munich (TUM)', course: 'M.Sc. in Informatics & Robotics', student: 'Kevin Joy (Batch 2020)' },
            ].map((hs, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <div className="font-bold text-sm text-[#28052B]">{hs.institute}</div>
                <div className="text-xs text-[#C79628] font-semibold">{hs.course}</div>
                <div className="text-[11px] text-[#7A647F]">{hs.student}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW C: ENTREPRENEURSHIP */}
      {subTab === 'entrepreneurship' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Incubated Tech Startups &amp; Ventures
            </h3>
            <span className="text-xs text-[#C79628] font-bold">Jyothi TBI &amp; KSUM Incubation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">DevStack Solutions</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">DevOps &amp; Cloud Migration SaaS</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Incubated by final-year students to automate multi-cloud Kubernetes deployment pipelines for regional MSMEs and startups.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">ByteGuard CyberSec</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">API Penetration Testing</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Vulnerability assessment and automated code security scanning suite founded by student cybersecurity researchers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">EdVantage AI</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">Vernacular LLM Tutor</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                AI personalized multilingual learning co-pilot for Malayalam and Tamil students, supported by a ₹5 Lakhs KSUM seed grant.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* 3. Facilities Page (Lab & Library) */
export const CseFacilitiesPage: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<'lab' | 'library'>('lab');

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Infrastructure &amp; Computing Environments</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Facilities (Lab &amp; Library)
              </h2>
            </div>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'lab', label: 'i. Computing Laboratories' },
              { id: 'library', label: 'ii. Department Library' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFacility(tab.id as any)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer text-xs font-bold ${
                  activeFacility === tab.id
                    ? 'bg-[#28052B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1] hover:bg-[#E7D6C1]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          State-of-the-art computing infrastructure including high-performance Nvidia GPU clusters, dedicated cloud development labs, Red Hat Linux suites, and high-speed gigabit fiber connectivity.
        </p>
      </div>

      {activeFacility === 'lab' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* High Performance Computing & AI Lab */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">High Performance Computing &amp; AI Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">Nvidia RTX GPUs &amp; Parallel Computing</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              60 workstations powered by Intel Core i9 processors, 64GB RAM, and Nvidia GeForce RTX 4080 (16GB VRAM) graphics accelerators. Configured with Ubuntu Linux, CUDA 12, PyTorch, TensorFlow, and Docker GPU runtime.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Workloads:</strong> Deep learning model fine-tuning, computer vision, large-scale NLP inference.</div>
              <div>• <strong>Network:</strong> 10 Gbps low-latency interconnect to central storage SAN.</div>
            </div>
          </div>

          {/* Cloud Computing & DevOps Lab */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Cloud Computing &amp; DevOps Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">Kubernetes, Docker &amp; Cloud Sandbox</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Dedicated cloud sandboxes linked to AWS Academy and Google Cloud. Students orchestrate containerized microservices, build automated CI/CD pipelines with Jenkins and GitLab, and manage Terraform infrastructure.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Tech Stack:</strong> Docker, Kubernetes, Jenkins, Terraform, Ansible, Prometheus, Grafana.</div>
              <div>• <strong>Capacity:</strong> 65 Terminals with dedicated virtual machine hypervisors.</div>
            </div>
          </div>

          {/* Advanced Cyber Security & Forensics Lab */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Cyber Security &amp; Network Forensics Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">Penetration Testing &amp; Reverse Engineering</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Isolated VLAN testing network configured with Fortinet hardware firewalls, Wireshark packet capture, Metasploit, Burp Suite Professional, Ghidra reverse engineering suite, and Autopsy digital forensics toolkit.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Operations:</strong> Capture The Flag (CTF) attack/defense simulations, ethical hacking workshops.</div>
              <div>• <strong>Isolation:</strong> Physically isolated air-gapped security test range.</div>
            </div>
          </div>

          {/* Full Stack Software Engineering Lab */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Software Engineering &amp; Open Source Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">Modern Web, Mobile &amp; Systems Coding</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              High-throughput software development suite supporting modern web frameworks (React, Next.js, Node.js, Spring Boot), mobile application testing suites, and distributed database testing (PostgreSQL, MongoDB, Redis).
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Software Portfolio:</strong> VS Code, IntelliJ IDEA, Postman, SonarQube, Android Studio.</div>
              <div>• <strong>Capacity:</strong> 70 High-Speed Workstations.</div>
            </div>
          </div>
        </div>
      )}

      {activeFacility === 'library' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Library className="w-6 h-6 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
              Departmental Computer Science Library &amp; Digital Repositories
            </h3>
          </div>

          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            The CSE Department Library houses an exhaustive collection of foundational textbooks, algorithms manuals, software design references, and premium subscriptions to global digital libraries including ACM Digital Library, IEEE Xplore, ScienceDirect, and O'Reilly Safari Books Online.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">4,800+</div>
              <div className="text-[11px] text-[#7A647F]">Text &amp; Reference Volumes</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#C79628]">Full Access</div>
              <div className="text-[11px] text-[#7A647F]">IEEE Xplore &amp; ACM Digital Library</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">26</div>
              <div className="text-[11px] text-[#7A647F]">Print International Journals</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">850+</div>
              <div className="text-[11px] text-[#7A647F]">Undergraduate/M.Tech Project Dissertations</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* 4. Industry Tie-up Page (MOUs) */
export const CseIndustryTieupPage: React.FC = () => {
  const mous = [
    {
      company: 'Red Hat Academy',
      validity: 'Active (Institutional MoU)',
      scope: 'Accredited training center for Red Hat Certified System Administrator (RHCSA) and Red Hat OpenShift Container Platform certifications with subsidized voucher fees.',
      lead: 'Prof. Swapna B. (Coordinator)',
    },
    {
      company: 'Oracle Academy',
      validity: 'Active (2022 - 2026)',
      scope: 'Curriculum access to Oracle Cloud Infrastructure (OCI), Java Foundations, PL/SQL Database Programming, and Autonomous Database micro-credentials.',
      lead: 'Dr. V. D. Biju (Coordinator)',
    },
    {
      company: 'AWS Academy (Amazon Web Services)',
      validity: 'Active (Global Partner)',
      scope: 'Hands-on laboratory credits for Cloud Foundations, Cloud Architecting, and Machine Learning on AWS, leading to AWS Solutions Architect certifications.',
      lead: 'Prof. Lisha Varghese (Coordinator)',
    },
    {
      company: 'Google Cloud Computing Foundations',
      validity: 'Active (2023 - 2026)',
      scope: 'Google Cloud Skills Boost vouchers, Kubernetes certification tracks, and mentorship in Google Cloud Innovators community.',
      lead: 'Prof. Anju Antony (Coordinator)',
    },
    {
      company: 'Cisco Networking Academy',
      validity: 'Active (Premier Center)',
      scope: 'CCNA Routing & Switching, Network Security, and CyberOps Associate training modules integrated into autonomous laboratory curricula.',
      lead: 'Dr. Shaju K. Y. (Coordinator)',
    },
    {
      company: 'Infosys Springboard',
      validity: 'Active (Strategic MOU)',
      scope: 'Comprehensive digital learning platform access for Full Stack Web, Python, Soft Skills, and direct priority hiring through InfyTQ.',
      lead: 'Prof. Binu V. P. (Coordinator)',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Corporate Tech Partnerships</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Industry Tie-up (MOUs)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            6 Global Cloud &amp; Academy Alliances
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Formal institutional Memorandums of Understanding with tech giants provide our students with industry-recognized cloud certifications, subsidized examination vouchers, and direct access to enterprise developer platforms.
        </p>
      </div>

      <div className="space-y-4">
        {mous.map((m, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                    {m.company}
                  </h4>
                  <div className="text-[11px] text-[#7A647F]">{m.lead}</div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#C79628]">
                {m.validity}
              </span>
            </div>

            <p className="text-xs text-[#4A384F] font-light leading-relaxed pl-12">
              {m.scope}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 5. Achievements Page (Student & Staff Achievements) */
export const CseAchievementsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'staff'>('student');

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Excellence &amp; Honors</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Achievements
              </h2>
            </div>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'student', label: 'i. Student Achievements' },
              { id: 'staff', label: 'ii. Staff Achievements' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer text-xs font-bold ${
                  activeTab === tab.id
                    ? 'bg-[#28052B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1] hover:bg-[#E7D6C1]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Highlighting national hackathon victories, ACM-ICPC competitive coding honors, Google Summer of Code scholarships, and faculty research citations.
        </p>
      </div>

      {activeTab === 'student' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: '1st Prize - Smart India Hackathon (SIH) 2023 Software Edition',
              organization: 'Ministry of Jal Shakti & AICTE, New Delhi',
              team: 'Team "HydroSense" - Adithya Krishna, Fathima Zahra & Team',
              desc: 'Engineered an AI-powered IoT river water pollution anomaly detection dashboard using real-time edge telemetry and won ₹1,00,000 cash award.',
            },
            {
              title: 'ACM ICPC Asia-Amritapuri Regional Finalists 2024',
              organization: 'Association for Computing Machinery (ACM)',
              team: 'Alan Jose P., Kiran V. Kumar, Rohit Balakrishnan',
              desc: 'Qualified among the top 50 teams in South Asia, solving 7 complex dynamic programming and graph theory problems in a 5-hour sprint.',
            },
            {
              title: 'Google Summer of Code (GSoC) 2023 Scholar',
              organization: 'Google Open Source Programs Office',
              team: 'Naveen Raj P. (Third Year B.Tech CSE)',
              desc: 'Selected to develop automated Kubernetes controller features for the CNCF (Cloud Native Computing Foundation) Prometheus project with a $3,000 stipend.',
            },
            {
              title: 'Champions - Kerala Police Cyber Security Hackathon (Hac’KP)',
              organization: 'Cyberdome, Kerala Police',
              team: 'Gokul Chandran & Aishwarya Rajesh',
              desc: 'Secured First Place in the Deepfake Audio Detection and Forensic Voiceprint Challenge competing against 60 collegiate ethical hacking teams.',
            },
          ].map((ach, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
              <div className="flex items-start justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  National Hackathon Accolade
                </span>
                <Award className="w-5 h-5 text-[#C79628]" />
              </div>
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                {ach.title}
              </h4>
              <div className="text-xs text-[#28052B] font-semibold">{ach.organization}</div>
              <div className="text-[11px] text-[#7A647F]">Recipients: {ach.team}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/60">
                {ach.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'staff' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'DST-SERB Core Research Grant for Explainable AI in Oncology',
              faculty: 'Dr. Jose P. Therattil (HOD & Professor)',
              agency: 'Science and Engineering Research Board (SERB), Govt. of India',
              desc: 'Sanctioned ₹32.8 Lakhs for 3-year research project on "Interpretable Vision Transformers for Multi-Modal Histopathological Cancer Staging".',
            },
            {
              title: 'Granted Patent for Blockchain Medical Record Consent Management',
              faculty: 'Dr. Shaju K. Y. & Prof. Sreejith R.',
              agency: 'Intellectual Property Office, Govt. of India',
              desc: 'Patent Granted (Patent No: 412093): "A Decentralized Zero-Knowledge Proof Consent Verification Framework for EHR Systems".',
            },
            {
              title: 'IEEE Senior Member Elevation 2024',
              faculty: 'Dr. V. D. Biju (Professor)',
              agency: 'Institute of Electrical and Electronics Engineers (IEEE), USA',
              desc: 'Elevated to the prestigious rank of IEEE Senior Member in recognition of 20+ years of professional contributions in computer networking.',
            },
            {
              title: 'Best Faculty Researcher Award - KTU CERD 2023',
              faculty: 'Prof. Swapna B. (Associate Professor)',
              agency: 'APJ Abdul Kalam Technological University',
              desc: 'Recognized for publishing 6 Scopus-indexed papers in high-impact IEEE Transactions on Software Engineering and Agile Systems.',
            },
          ].map((ach, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
              <div className="flex items-start justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  Faculty Distinction
                </span>
                <Sparkles className="w-5 h-5 text-[#C79628]" />
              </div>
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                {ach.title}
              </h4>
              <div className="text-xs text-[#28052B] font-semibold">{ach.faculty}</div>
              <div className="text-[11px] text-[#7A647F]">{ach.agency}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/60">
                {ach.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* 6. Research Page (Faculty Research) */
export const CseResearchPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Scholarly Investigations</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Research (Faculty Research)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            85+ Scopus / SCI Indexed Publications
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Research in Computer Science & Engineering drives interdisciplinary breakthroughs in Generative AI architectures, decentralized blockchain security, cloud edge computing, and real-time medical diagnostic analytics.
        </p>
      </div>

      {/* Research Thrust Areas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            1
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            Generative AI &amp; Vision Intelligence
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Investigating parameter-efficient fine-tuning (PEFT) of open-weights LLMs, multi-modal medical image segmentation, and lightweight neural networks for edge IoT devices.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            2
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            Blockchain, Cryptography &amp; Zero-Trust
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Formulating post-quantum lattice-based cryptosystems, zero-knowledge rollup scalability solutions for Ethereum, and privacy-preserving federated machine learning protocols.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            3
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            Cloud-Edge Orchestration &amp; 5G Core
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Software-defined network virtualization, dynamic microservice placement algorithms across multi-access edge computing (MEC) nodes, and energy-aware server clustering.
          </p>
        </div>
      </div>

      {/* Funded Grants & Consultancy Stats */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Funded Research Projects &amp; Software Consultancy Cell
          </h3>
          <span className="text-xs font-mono font-bold text-emerald-700">₹65+ Lakhs Grants Sanctioned</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#4A384F]">
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">DST-SERB Oncology AI Grant</strong>
            ₹32.8 Lakhs sanctioned for automated histopathology tissue classification in collaboration with Regional Cancer Centre (RCC).
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">KTU CERD Smart Grid Analytics</strong>
            ₹4.5 Lakhs grant for predicting localized electrical micro-grid load anomalies utilizing federated recurrent neural networks.
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">Industry Software Consultancy</strong>
            Developed enterprise resource ERP modules and mobile asset trackers generating ₹18 Lakhs in institutional revenue.
          </div>
        </div>
      </div>
    </div>
  );
};

/* 7. Syllabus and Curriculum Page */
export const CseSyllabusPage: React.FC = () => {
  const semesters = [
    {
      sem: 'Semester I',
      credits: '20 Credits',
      subjects: [
        'Linear Algebra & Calculus',
        'Engineering Physics / Chemistry',
        'Programming in C & Computational Problem Solving',
        'Basics of Electrical & Electronics Engineering',
        'C Programming Laboratory',
        'Life Skills & Professional Communication',
      ],
    },
    {
      sem: 'Semester II',
      credits: '20 Credits',
      subjects: [
        'Vector Calculus & Differential Equations',
        'Engineering Mechanics / Graphics',
        'Object-Oriented Programming with Java',
        'Digital Logic & System Design',
        'Object-Oriented Programming Lab',
        'Universal Human Values',
      ],
    },
    {
      sem: 'Semester III',
      credits: '22 Credits',
      subjects: [
        'Discrete Mathematical Structures',
        'Data Structures & Algorithms',
        'Computer Organization & Architecture',
        'Database Management Systems',
        'Data Structures Laboratory',
        'DBMS & SQL Programming Lab',
      ],
    },
    {
      sem: 'Semester IV',
      credits: '22 Credits',
      subjects: [
        'Design & Analysis of Algorithms',
        'Operating Systems & Kernel Programming',
        'Formal Languages & Automata Theory',
        'Software Engineering & Agile Methodologies',
        'Operating Systems Laboratory',
        'Algorithms Design & LeetCode Sprint Lab',
      ],
    },
    {
      sem: 'Semester V',
      credits: '23 Credits',
      subjects: [
        'Computer Networks & Protocols',
        'Compiler Design',
        'Machine Learning Fundamentals',
        'Professional Elective I (Cloud Computing / Web Technologies)',
        'Computer Networks & Socket Programming Lab',
        'Machine Learning & Data Analytics Lab',
      ],
    },
    {
      sem: 'Semester VI',
      credits: '23 Credits',
      subjects: [
        'Cryptography & Network Security',
        'Distributed Computing & Microservices',
        'Deep Learning & Neural Networks',
        'Professional Elective II (Cyber Forensics / DevOps & Docker)',
        'Security & Ethical Hacking Laboratory',
        'Full-Stack Cloud Application Studio Lab',
      ],
    },
    {
      sem: 'Semester VII',
      credits: '20 Credits',
      subjects: [
        'Artificial Intelligence & Expert Systems',
        'Big Data Analytics & Spark',
        'Professional Elective III (Blockchain Tech / Natural Language Processing)',
        'Open Elective I (Interdisciplinary)',
        'AI & Cloud Systems Laboratory',
        'Capstone Project Phase I',
      ],
    },
    {
      sem: 'Semester VIII',
      credits: '18 Credits',
      subjects: [
        'Professional Ethics & Cyber Law',
        'Professional Elective IV (Quantum Computing / Edge AI)',
        'Open Elective II (Interdisciplinary)',
        'Capstone Project Phase II & Viva-Voce',
        'Comprehensive Course Viva',
      ],
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Academic Structure</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Syllabus and Curriculum
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
              Autonomous Scheme 2024
            </span>
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#28052B] text-white text-xs font-bold hover:bg-[#3B0840] transition-all cursor-pointer">
              <Download className="w-3.5 h-3.5" /> Full Scheme PDF
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The autonomous curriculum follows a 165-credit structure adhering to AICTE and ACM/IEEE Computing Curricula models, featuring project-based learning, competitive coding sprints, mandatory summer industry internships, and Honours/Minor tracks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {semesters.map((s, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E7D6C1]">
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                {s.sem}
              </h4>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[11px] font-mono font-bold text-[#C79628] border border-[#DFC06A]/40">
                {s.credits}
              </span>
            </div>

            <ul className="text-xs text-[#4A384F] space-y-1.5 font-light">
              {s.subjects.map((sub, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
                  <span>{sub}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
