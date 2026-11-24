import React from 'react';
import {
  Calendar, Image as ImageIcon, MessageSquare, MapPin, Phone,
  Mail, Clock, Sparkles, Download, CheckCircle2, Users, Star, Award
} from 'lucide-react';

/* 1. Department Events Page */
export const BshEventsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Science Conclaves & Induction</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Events
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Annual Academic Calendar
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Basic Science & Humanities orchestrates foundational academic events, including National Science Day celebrations, Srinivasa Ramanujan Mathematics Day symposia, induction programs for freshers, and university-level communicative workshops.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-[#C79628]">Flagship Symposium</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Annual</span>
          </div>
          <h4 className="font-bold text-base text-[#28052B]">National Science Day ("PRISM 2024")</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Commemorating Sir C. V. Raman's discovery with inter-collegiate working model competitions, scientific debates, laser optical demonstrations, and keynote lectures by premier scientists from ISRO and CUSAT.
          </p>
          <div className="text-xs text-[#7A647F] pt-2 border-t border-[#E7D6C1]">
            Date: February 28, 2024 • Venue: JEC Decennial Hall
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-[#C79628]">Mathematical Conclave</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">State Level</span>
          </div>
          <h4 className="font-bold text-base text-[#28052B]">Ramanujan Mathematics Colloquium</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Annual mathematics celebrations honoring Srinivasa Ramanujan, featuring speed problem-solving contests, mathematical crossword puzzles, and paper presentations on applications of differential equations.
          </p>
          <div className="text-xs text-[#7A647F] pt-2 border-t border-[#E7D6C1]">
            Date: December 22, 2023 • Venue: Central Seminar Complex
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-[#C79628]">Freshers Induction</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-bold">Orientation</span>
          </div>
          <h4 className="font-bold text-base text-[#28052B]">Student Induction Program ("DEEKSHARAMBH")</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            A comprehensive 2-week bridge orientation program structured under AICTE guidelines, introducing newly joined first-year engineering students to campus culture, human values, creative arts, and peer bonding.
          </p>
          <div className="text-xs text-[#7A647F] pt-2 border-t border-[#E7D6C1]">
            Date: September 2024 • Venue: JEC Campus Wide
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Gallery Page */
export const BshGalleryPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Moments & Laboratory Setups</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Gallery
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Campus Life & Labs
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Explore snapshots from our Physics optical laboratory, Chemistry analytical workstations, Digital Language phonetics suites, and Science Day exhibition displays.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: 'Engineering Physics Laser Optics', cat: 'Physics Laboratory', src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop' },
          { title: 'Chemistry Instrumental Titrations', cat: 'Chemistry Laboratory', src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop' },
          { title: 'Digital Language Multimedia Booths', cat: 'Language Lab', src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop' },
          { title: 'National Science Day Model Expo', cat: 'Exhibition', src: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=600&auto=format&fit=crop' },
          { title: 'Freshers Induction "Deeksharambh"', cat: 'Student Orientation', src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop' },
          { title: 'Ramanujan Mathematical Olympiad', cat: 'Conclave', src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop' },
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

/* 3. Reach Us Page */
export const BshReachUsPage: React.FC<{ onOpenApply: () => void }> = ({ onOpenApply }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Department Contact & Office</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Reach Us
              </h2>
            </div>
          </div>
          <button
            onClick={onOpenApply}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F6CE5E] via-[#F2BE42] to-[#E8AE2F] text-[#28052B] font-extrabold text-xs shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            Admissions Inquiry
          </button>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          For academic counseling, first-year curriculum inquiries, laboratory visits, or parent-teacher interaction appointments, please reach out to the Department Secretariat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Department Location</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed">
            Department of Basic Science & Humanities<br />
            2nd Floor, Decennial Block (East Wing)<br />
            Jyothi Engineering College (Autonomous)<br />
            Cheruthuruthy, Thrissur, Kerala – 679531
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Email & Direct Contacts</h4>
          <div className="text-xs text-[#4A384F] space-y-2">
            <div>
              <div className="text-[10px] text-[#C79628] font-bold uppercase">HOD Email:</div>
              <a href="mailto:ushanair@jecc.ac.in" className="hover:underline text-[#28052B] font-semibold">ushanair@jecc.ac.in</a>
            </div>
            <div>
              <div className="text-[10px] text-[#C79628] font-bold uppercase">Department Office:</div>
              <a href="mailto:bsh@jecc.ac.in" className="hover:underline text-[#28052B] font-semibold">bsh@jecc.ac.in</a>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Telephone & Visiting Hours</h4>
          <div className="text-xs text-[#4A384F] space-y-1.5">
            <div>• College EPABX: <strong>+91 4884 259000</strong> (Ext. 204)</div>
            <div>• Admissions Helpline: <strong>+91 95269 24455</strong></div>
            <div>• Working Hours: Monday – Friday, 9:00 AM – 4:30 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};
