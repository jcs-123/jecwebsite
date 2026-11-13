import React from 'react';
import { 
  MapPin, Phone, Mail, ArrowRight, ShieldCheck, 
  Award, Compass
} from 'lucide-react';
import { DEPARTMENTS } from '../data/collegeData';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenApply, onOpenTour }) => {
  return (
    <footer className="relative bg-gradient-to-b from-jyothi-purple-950 via-jyothi-purple-900 to-black text-slate-300 pt-16 pb-8 border-t-2 border-jyothi-gold-500/30 overflow-hidden">
      
      {/* Background Watermark Crest */}
      <div className="absolute right-[-60px] bottom-[-60px] w-96 h-96 opacity-5 pointer-events-none">
        <img src="/assets/jyothi_emblem.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Institutional Banner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-jyothi-purple-800/80">
          
          {/* Brand & Introduction */}
          <div className="md:col-span-5 space-y-4">
            <div className="h-14 w-auto">
              <img 
                src="/assets/jyothi_logo_white_gold.svg" 
                alt="Jyothi Engineering College (Autonomous)" 
                className="h-full w-auto object-contain"
              />
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pr-4">
              Jyothi Engineering College (Autonomous), situated on the serene hillocks of Cheruthuruthy, Thrissur, is an AICTE-approved Catholic engineering institution of national repute managed by the Catholic Archdiocese of Trichur. Committed to creating technology leaders with values.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-jyothi-gold-500/15 border border-jyothi-gold-400/30 text-xs font-semibold text-jyothi-gold-300">
                <ShieldCheck className="w-3.5 h-3.5 text-jyothi-gold-400" /> UGC Autonomous Institution
              </span>
              <button
                onClick={() => onNavigate('iqac')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-semibold text-white transition-colors cursor-pointer group"
                title="View NAAC 'A' Grade & NBA Accreditations (IQAC)"
              >
                <Award className="w-3.5 h-3.5 text-jyothi-gold-400 group-hover:scale-110 transition-transform" /> 
                <span>NAAC 'A' Grade Accredited</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-jyothi-gold-500 hover:text-jyothi-purple-950 border border-white/10 flex items-center justify-center transition-all" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-jyothi-gold-500 hover:text-jyothi-purple-950 border border-white/10 flex items-center justify-center transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-jyothi-gold-500 hover:text-jyothi-purple-950 border border-white/10 flex items-center justify-center transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-jyothi-gold-500 hover:text-jyothi-purple-950 border border-white/10 flex items-center justify-center transition-all" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-jyothi-gold-400 font-brand">
              Quick Links
            </h4>
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
                    className="hover:text-jyothi-gold-300 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-jyothi-gold-500" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments list */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-jyothi-gold-400 font-brand">
              Departments
            </h4>
            <ul className="space-y-2 text-xs">
              {DEPARTMENTS.slice(0, 6).map((dept) => (
                <li key={dept.id}>
                  <button
                    onClick={() => {
                      onNavigate('departments', dept.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-jyothi-gold-300 transition-colors truncate max-w-full block text-left"
                  >
                    {dept.code} - {dept.name.split(' ')[0]}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    onNavigate('departments');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-jyothi-gold-400 font-bold hover:underline text-[11px]"
                >
                  View All Departments →
                </button>
              </li>
            </ul>
          </div>

          {/* Official Location & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-jyothi-gold-400 font-brand">
              Contact & Location
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-jyothi-gold-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Jyothi Hills, Panjal Road, Vettikattiri P.O., Cheruthuruthy, Thrissur, Kerala - 679531
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-jyothi-gold-400 shrink-0" />
                <a href="tel:+914884259000" className="hover:text-white transition-colors">
                  +91 4884 259000 / 259001
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-jyothi-gold-400 shrink-0" />
                <span className="text-jyothi-gold-300 font-semibold">
                  Admissions: +91 95269 24455
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-jyothi-gold-400 shrink-0" />
                <a href="mailto:info@jecc.ac.in" className="hover:text-white transition-colors">
                  info@jecc.ac.in / admissions@jecc.ac.in
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenTour}
                  className="w-full py-2 px-3 rounded-xl bg-jyothi-purple-800/80 hover:bg-jyothi-purple-800 border border-jyothi-gold-400/30 text-xs font-semibold text-jyothi-gold-300 flex items-center justify-center gap-2 transition-all"
                >
                  <Compass className="w-4 h-4 text-jyothi-gold-400 animate-spin-slow" />
                  <span>Launch 360° Virtual Campus Tour</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Admissions CTA Bar */}
        <div className="py-6 my-6 rounded-2xl bg-gradient-to-r from-jyothi-purple-900/90 via-jyothi-purple-800 to-jyothi-purple-900/90 border border-jyothi-gold-400/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-white font-brand">
              Empower Your Engineering Dream at Jyothi
            </h4>
            <p className="text-xs text-jyothi-gold-200">
              Admissions open for B.Tech, M.Tech, and Ph.D. under Autonomous Scheme for 2025-26.
            </p>
          </div>
          <button
            onClick={onOpenApply}
            className="px-6 py-2.5 rounded-xl bg-jyothi-gold-400 hover:bg-jyothi-gold-300 text-jyothi-purple-950 font-bold text-xs sm:text-sm shadow-glow-gold hover:shadow-lg transition-all shrink-0"
          >
            Apply for Admission 2025
          </button>
        </div>

        {/* Bottom Credits & Disclosures */}
        <div className="pt-6 border-t border-jyothi-purple-900/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Jyothi Engineering College (Autonomous). All Rights Reserved. Managed by the Catholic Archdiocese of Trichur.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="hover:text-slate-200 cursor-pointer">Mandatory Disclosure</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">NIRF & AICTE Approvals</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Anti-Ragging Committee</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
