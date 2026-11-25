import React, { useState } from 'react';
import {
  Calendar, FileText, Image as ImageIcon, Sparkles, MessageSquare,
  Download, MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle2,
  Users, Trophy, Star
} from 'lucide-react';

/* 1. Department Events Page */
export const AidsEventsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Department Events & Workshops
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of AI & DS actively hosts state and national technical symposia, 36-hour hackathons, hands-on GPU bootcamps, and faculty development programs in partnership with industry leaders.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-3.5 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-[#C79628]">Flagship National Datathon</span>
              <span className="px-2 py-0.5 rounded-full bg-[#E8F8EE] text-[#1E824C] text-[10px] font-semibold">Annual</span>
            </div>
            <h4 className="font-bold text-base text-[#28052B]">COGNISCIENCE 2024</h4>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              A 36-hour national hackathon focused on Generative AI and Foundation Model applications for agriculture, healthcare, and Malayalam speech transcription. Over 450 participants from 32 engineering institutions competed for cash prizes worth ₹1.5 Lakhs.
            </p>
          </div>
          <div className="pt-3 border-t border-[#E7D6C1] text-[11px] text-[#7A647F]">
            <strong className="text-[#28052B]">Date:</strong> September 20–21, 2024 • JEC Auditorium
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-3.5 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-[#C79628]">Hands-On Intensive</span>
              <span className="px-2 py-0.5 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">Bootcamp</span>
            </div>
            <h4 className="font-bold text-base text-[#28052B]">NVIDIA Jetson Edge BootCamp</h4>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              A 5-day deep technical bootcamp on deploying computer vision and object tracking models on NVIDIA Jetson Orin Nano modules. Guided by certified instructors from NVIDIA Deep Learning Institute.
            </p>
          </div>
          <div className="pt-3 border-t border-[#E7D6C1] text-[11px] text-[#7A647F]">
            <strong className="text-[#28052B]">Date:</strong> June 15–19, 2024 • NVIDIA GPU Lab
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-3.5 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-[#C79628]">Expert Lecture Series</span>
              <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[10px] font-bold">Monthly</span>
            </div>
            <h4 className="font-bold text-base text-[#28052B]">LLM Production Deployments</h4>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              An interactive masterclass series featuring distinguished guest speakers from Google Cloud, Microsoft Research, and Amazon Web Services detailing RAG architectures, model quantization, and vLLM serving.
            </p>
          </div>
          <div className="pt-3 border-t border-[#E7D6C1] text-[11px] text-[#7A647F]">
            <strong className="text-[#28052B]">Date:</strong> Monthly Colloquium • Online & Hybrid
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Bulletin ("AI Horizons") Page */
export const AidsBulletinPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Department Bulletin ("AI Horizons")
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          "AI Horizons" is the official technical journal and newsletter published quarterly by the Department of Artificial Intelligence & Data Science. It documents student capstone breakthroughs, faculty editorial commentaries on AI governance, patent releases, and campus technical triumphs.
        </p>
      </div>

      {/* Editions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-start justify-between pb-3 border-b border-[#E7D6C1]">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#C79628]">Latest Issue • 2024</span>
              <h4 className="font-bold text-base text-[#28052B] mt-0.5">AI Horizons – Volume 4, Issue 2</h4>
              <div className="text-xs text-[#7A647F] mt-0.5">Theme: Autonomous Edge Robotics & LLM Safety</div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#28052B] text-white text-xs font-bold">
              Oct 2024
            </span>
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Features an in-depth editorial by HOD Dr. Deepa V. on ethical guardrails in autonomous decision agents, student research papers on plant pathology vision systems, and alumnus career stories from Germany.
          </p>

          <button
            onClick={() => alert("Downloading AI Horizons Vol. 4 Issue 2 PDF")}
            className="w-full py-2.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#C79628]" />
            <span>Download Edition (PDF • 8.4 MB)</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-start justify-between pb-3 border-b border-[#E7D6C1]">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#C79628]">Archived Issue • 2024</span>
              <h4 className="font-bold text-base text-[#28052B] mt-0.5">AI Horizons – Volume 4, Issue 1</h4>
              <div className="text-xs text-[#7A647F] mt-0.5">Theme: Deep Learning in Healthcare Diagnostics</div>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold">
              May 2024
            </span>
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Spotlights our patent grant on multi-modal assistive navigation, SIH hackathon team journeys, faculty Scopus publications overview, and technical tutorials on LoRA fine-tuning on consumer GPUs.
          </p>

          <button
            onClick={() => alert("Downloading AI Horizons Vol. 4 Issue 1 PDF")}
            className="w-full py-2.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#C79628]" />
            <span>Download Edition (PDF • 7.9 MB)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* 3. Gallery Page */
export const AidsGalleryPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <ImageIcon className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Department Gallery
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          A visual glimpse into our high-performance GPU laboratories, student collaboration spaces, hackathon project exhibitions, and association inaugurations.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: 'NVIDIA GPU Cluster Lab', cat: 'Laboratory', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
          { title: 'COGNISCIENCE Datathon Arena', cat: 'Hackathon', src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop' },
          { title: 'Edge AI Robotics Prototyping', cat: 'Prototyping', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop' },
          { title: 'Department Advisory Board Meet', cat: 'Governance', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop' },
          { title: 'Big Data Sandbox Session', cat: 'Lab Session', src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600&auto=format&fit=crop' },
          { title: 'AIDA Association Tech Fest', cat: 'Student Body', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop' },
        ].map((img, idx) => (
          <div key={idx} className="rounded-3xl overflow-hidden border border-[#E7D6C1] bg-white shadow-xs group">
            <div className="h-48 overflow-hidden bg-slate-100">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#28052B]">{img.title}</h4>
                <div className="text-[10px] text-[#C79628] font-semibold mt-0.5">{img.cat}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Association (AIDA) Page */
export const AidsAssociationPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            AIDA – AI & DS Department Association
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          AIDA (Artificial Intelligence & Data Science Association) is the premier student organization run by undergraduate scholars of the department. AIDA fosters peer learning, weekly algorithmic problem-solving circles, hackathon teams, industry mentoring webinars, and community technology initiatives for schools across the region.
        </p>
      </div>

      {/* Office Bearers Card */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            AIDA Executive Committee
          </h3>
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#28052B]">
            Tenure: 2024–2025
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { role: 'President', name: 'Er. Nevin Paul', batch: 'Final Year (S7/S8)', initials: 'NP' },
            { role: 'Secretary', name: 'Er. Sneha M.', batch: 'Third Year (S5/S6)', initials: 'SM' },
            { role: 'Joint Secretary', name: 'Er. Alwin K.', batch: 'Second Year (S3/S4)', initials: 'AK' },
            { role: 'Staff Advisor', name: 'Prof. Anoop V.', batch: 'Associate Professor, AI & DS', initials: 'AV' },
          ].map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#C79628] uppercase">{m.role}</span>
                <div className="w-7 h-7 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center">
                  {m.initials}
                </div>
              </div>
              <div>
                <div className="font-bold text-xs text-[#28052B]">{m.name}</div>
                <div className="text-[11px] text-[#7A647F] mt-0.5">{m.batch}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flagship Activities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-2">
          <h4 className="font-bold text-sm text-[#28052B]">CodeAI Weekly Contests</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Weekly algorithmic speed programming competitions hosted on HackerRank and LeetCode with leaderboard rankings and prizes.
          </p>
        </div>
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-2">
          <h4 className="font-bold text-sm text-[#28052B]">Peer Tutoring Circles</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Senior students mentor junior batches in Data Structures, Python for ML, Linux commands, and version control best practices.
          </p>
        </div>
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-2">
          <h4 className="font-bold text-sm text-[#28052B]">School AI Outreach</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Interactive workshops introducing higher-secondary school pupils to robotics, AI ethics, and interactive Scratch programming.
          </p>
        </div>
      </div>
    </div>
  );
};

/* 5. Reach Us Page */
export const AidsReachUsPage: React.FC<{ onOpenApply?: () => void }> = ({ onOpenApply }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Reach the Department of AI & DS
            </h2>
            <div className="flex-1 h-px bg-[#DFC06A]/40 hidden md:block" />
          </div>
          <button
            onClick={onOpenApply}
            className="px-5 py-2.5 rounded-full bg-[#28052B] text-[#DFC06A] hover:bg-[#3B0A40] transition-colors font-bold text-xs shadow-sm cursor-pointer flex items-center gap-2 border border-[#DFC06A]/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
            <span>Admissions Inquiry</span>
          </button>
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Whether you are an aspiring student, parent, corporate recruiter, or academic research collaborator, we are delighted to assist you.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Campus Location</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Department of Artificial Intelligence & Data Science<br />
            3rd Floor, St. Thomas Central Academic Block<br />
            Jyothi Engineering College (Autonomous)<br />
            Cheruthuruthy, Thrissur, Kerala – 679531
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Email & Direct Extensions</h4>
          <div className="text-xs text-[#4A384F] space-y-2 font-light">
            <div>
              <div className="text-[10px] text-[#C79628] font-bold uppercase">HOD Email:</div>
              <a href="mailto:deepav@jecc.ac.in" className="hover:underline text-[#28052B] font-semibold">deepav@jecc.ac.in</a>
            </div>
            <div>
              <div className="text-[10px] text-[#C79628] font-bold uppercase">Department Secretariat:</div>
              <a href="mailto:aids@jecc.ac.in" className="hover:underline text-[#28052B] font-semibold">aids@jecc.ac.in</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Telephones & Visiting Hours</h4>
          <div className="text-xs text-[#4A384F] space-y-1.5 font-light">
            <div>• Tel: <strong className="text-[#28052B] font-semibold">+91 4884 259000</strong> (Ext. 312)</div>
            <div>• Direct Helpline: <strong className="text-[#28052B] font-semibold">+91 95269 24455</strong></div>
            <div>• Office Hours: Monday – Friday, 9:00 AM – 4:30 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};
