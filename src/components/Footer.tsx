import React from 'react';
import {
  MapPin, Phone, Mail, ArrowRight, ShieldCheck,
  Award, ArrowUpRight
} from 'lucide-react';
import { DEPARTMENTS } from '../data/collegeData';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenApply, onOpenTour }) => {
  return (
    <footer className="relative bg-gradient-to-br from-[#170525] via-[#220937] to-[#11031C] text-slate-300 pt-12 sm:pt-16 pb-8 border-t border-[#DFC06A]/35 overflow-hidden">

      {/* Subtle Gold Corner Swooshes */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-35"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M0 70 C 90 40 160 15 240 0" stroke="#DFC06A" strokeWidth="1" strokeOpacity="0.45" />
        <path d="M1260 600 C 1340 570 1400 530 1440 480" stroke="#DFC06A" strokeWidth="1" strokeOpacity="0.45" />
      </svg>

      {/* Background Watermark Crest */}
      <div className="absolute right-[-40px] top-8 w-72 h-72 sm:w-96 sm:h-96 opacity-[0.045] pointer-events-none">
        <img src="/assets/jyothi_emblem.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Institutional Banner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-10">

          {/* Col 1: Brand & Introduction */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="h-12 sm:h-14 w-auto">
              <img
                src="/assets/jyothi_logo_white_gold.svg"
                alt="Jyothi Engineering College (Autonomous)"
                className="h-full w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-sm">
              Jyothi Engineering College (Autonomous), situated on the serene hillocks of Cheruthuruthy, Thrissur, is an AICTE-approved Catholic engineering institution of national repute managed by JCS (Jyothi Consultancy Service). Committed to creating technology leaders with values.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E161E]/80 border border-[#DFC06A]/45 text-[11px] font-semibold text-[#FDE68A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#DFC06A] shrink-0" /> UGC Autonomous Institution
              </span>
              <button
                onClick={() => onNavigate('iqac')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-[11px] font-semibold text-white transition-colors cursor-pointer group"
                title="View NAAC 'A' Grade & NBA Accreditations (IQAC)"
              >
                <Award className="w-3.5 h-3.5 text-[#DFC06A] group-hover:scale-110 transition-transform shrink-0" />
                <span>NAAC &apos;A&apos; Grade Accredited</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#DFC06A] hover:text-[#170525] border border-white/15 flex items-center justify-center transition-all" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#DFC06A] hover:text-[#170525] border border-white/15 flex items-center justify-center transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#DFC06A] hover:text-[#170525] border border-white/15 flex items-center justify-center transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#DFC06A] hover:text-[#170525] border border-white/15 flex items-center justify-center transition-all" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3 lg:border-l lg:border-white/10 lg:pl-6">
            <div className="flex items-center gap-2.5">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#DFC06A] font-brand whitespace-nowrap">
                Quick Links
              </h4>
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'About Us', page: 'about' },
                { label: 'Academic Departments', page: 'departments' },
                { label: 'Autonomous Governance', page: 'autonomous' },
                { label: 'IQAC & Accreditations (NAAC/NBA)', page: 'iqac' },
                { label: 'Campus Portals Login', page: 'login' },
                { label: 'Faculty Directory', page: 'faculty' },
                { label: 'Alumni Network & Directory', page: 'alumni' },
                { label: 'Student Life & Clubs', page: 'student-life' },
                { label: 'Research & TBI Incubator', page: 'research' },
                { label: 'Campus Placements', page: 'placements' },
                { label: 'Campus Facilities', page: 'facilities' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigate(item.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#FDE68A] transition-colors flex items-start gap-1.5 text-left group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-[#DFC06A] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Departments */}
          <div className="lg:col-span-2 space-y-3 lg:border-l lg:border-white/10 lg:pl-6">
            <div className="flex items-center gap-2.5">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#DFC06A] font-brand whitespace-nowrap">
                Departments
              </h4>
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <ul className="space-y-2 text-xs">
              {DEPARTMENTS.slice(0, 6).map((dept) => (
                <li key={dept.id}>
                  <button
                    onClick={() => {
                      onNavigate('departments', dept.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#FDE68A] transition-colors truncate max-w-full block text-left cursor-pointer"
                  >
                    {dept.code} – {dept.name.split(' ')[0]}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => {
                    onNavigate('departments');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#DFC06A] font-bold hover:underline text-xs cursor-pointer"
                >
                  View All Departments →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location + Interactive Campus Map Card */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3 lg:border-l lg:border-white/10 lg:pl-6">
            <div className="flex items-center gap-2.5">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#DFC06A] font-brand whitespace-nowrap">
                Contact &amp; Location
              </h4>
              <span className="h-px flex-1 bg-white/15" />
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFC06A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Jyothi Hills, Panjal Road, Vettikattiri P.O., Cheruthuruthy, Thrissur, Kerala - 679531
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFC06A] shrink-0" />
                <a href="tel:+914884259000" className="hover:text-white transition-colors">
                  +91 4884 259000 / 259001
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFC06A] shrink-0" />
                <a href="tel:+919526924455" className="text-[#FDE68A] font-semibold hover:underline">
                  Admissions: +91 95269 24455
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DFC06A] shrink-0" />
                <a href="mailto:info@jecc.ac.in" className="hover:text-white transition-colors truncate">
                  info@jecc.ac.in / admissions@jecc.ac.in
                </a>
              </div>

              {/* Live Embedded Google Map Card */}
              <div className="mt-3 relative h-40 sm:h-44 w-full rounded-2xl overflow-hidden border border-[#DFC06A]/45 bg-[#24143B] shadow-lg">
                <iframe
                  title="Jyothi Engineering College Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15680.323157352603!2d76.283904!3d10.72825215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1794549919642!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />

                {/* Bottom-Right View on Map Pill */}
                <button
                  type="button"
                  onClick={onOpenTour}
                  aria-label="Open Jyothi Engineering College 360° & Map View"
                  className="absolute bottom-2.5 right-2.5 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-[#DFC06A] to-[#F4DA84] text-[#1D052D] text-[11px] font-bold shadow-md flex items-center gap-1 hover:scale-105 transition-transform cursor-pointer"
                >
                  <span>View on Map</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Admissions CTA Bar */}
        <div className="my-4 sm:my-6 rounded-2xl bg-gradient-to-r from-[#26093E]/95 via-[#3B125E]/90 to-[#200733]/95 border border-[#DFC06A]/45 px-5 py-4 sm:px-7 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="hidden sm:block w-1 h-7 rounded-full bg-[#DFC06A] shrink-0" />
            <h4 className="text-base sm:text-xl font-bold text-white font-['Playfair_Display',serif] tracking-wide">
              Empower Your Engineering Dream at Jyothi
            </h4>
          </div>
          <button
            onClick={onOpenApply}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#DFC06A] via-[#F4DA84] to-[#C9902C] hover:brightness-105 text-[#1D052D] font-extrabold text-xs sm:text-sm shadow-glow-gold transition-all shrink-0 cursor-pointer active:scale-[0.98]"
          >
            Apply for Admission
          </button>
        </div>

        {/* Bottom Credits & Disclosures */}
        <div className="pt-5 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400 text-center lg:text-left">
          <p>
            © {new Date().getFullYear()} Jyothi Engineering College (Autonomous). All Rights Reserved. Managed by JCS (Jyothi Consultancy Service).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-300">
            <span className="hover:text-[#FDE68A] cursor-pointer transition-colors">Mandatory Disclosure</span>
            <span className="text-[#DFC06A]">•</span>
            <span className="hover:text-[#FDE68A] cursor-pointer transition-colors">NIRF &amp; AICTE Approvals</span>
            <span className="text-[#DFC06A]">•</span>
            <span className="hover:text-[#FDE68A] cursor-pointer transition-colors">Anti-Ragging Committee</span>
            <span className="text-[#DFC06A]">•</span>
            <span className="hover:text-[#FDE68A] cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
