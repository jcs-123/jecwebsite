import React from 'react';
import {
  Calendar, Image as ImageIcon, MessageSquare, MapPin, Phone,
  Mail, Clock, Sparkles, Download, CheckCircle2, Users, Star, Award
} from 'lucide-react';

/* 1. Department Events Page */
export const BshEventsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Department Events &amp; Conclaves
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Basic Science &amp; Humanities orchestrates foundational academic events, including National Science Day celebrations, Srinivasa Ramanujan Mathematics Day symposia, induction programs for freshers, and university-level communicative workshops.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-3.5 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-[#C79628]">Flagship Science Day</span>
              <span className="px-2 py-0.5 rounded-full bg-[#E8F8EE] text-[#1E824C] text-[10px] font-semibold">Annual</span>
            </div>
            <h4 className="font-bold text-base text-[#28052B]">National Science Day ("PRISM 2024")</h4>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Commemorating Sir C. V. Raman's discovery with inter-collegiate working model competitions, scientific debates, laser optical demonstrations, and keynote lectures by premier scientists from ISRO and CUSAT.
            </p>
          </div>
          <div className="pt-3 border-t border-[#E7D6C1] text-[11px] text-[#7A647F]">
            <strong className="text-[#28052B]">Date:</strong> February 28, 2024 • JEC Decennial Hall
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-3.5 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-[#C79628]">Mathematical Conclave</span>
              <span className="px-2 py-0.5 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">State Level</span>
            </div>
            <h4 className="font-bold text-base text-[#28052B]">Ramanujan Mathematics Colloquium</h4>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Annual mathematics celebrations honoring Srinivasa Ramanujan, featuring speed problem-solving contests, mathematical crossword puzzles, and paper presentations on applications of differential equations.
            </p>
          </div>
          <div className="pt-3 border-t border-[#E7D6C1] text-[11px] text-[#7A647F]">
            <strong className="text-[#28052B]">Date:</strong> December 22, 2023 • Seminar Complex
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-3.5 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-[#C79628]">Freshers Induction</span>
              <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[10px] font-bold">Orientation</span>
            </div>
            <h4 className="font-bold text-base text-[#28052B]">Student Induction ("DEEKSHARAMBH")</h4>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              A comprehensive 2-week bridge orientation program structured under AICTE guidelines, introducing newly joined first-year engineering students to campus culture, human values, creative arts, and peer bonding.
            </p>
          </div>
          <div className="pt-3 border-t border-[#E7D6C1] text-[11px] text-[#7A647F]">
            <strong className="text-[#28052B]">Date:</strong> September 2024 • Campus Wide
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
          Explore snapshots from our Physics optical laboratory, Chemistry analytical workstations, Digital Language phonetics suites, and Science Day exhibition displays.
        </p>
      </div>

      {/* Gallery Grid */}
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
export const BshReachUsPage: React.FC<{ onOpenApply?: () => void }> = ({ onOpenApply }) => {
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
              Reach the Department of Basic Science &amp; Humanities
            </h2>
            <div className="flex-1 h-px bg-[#DFC06A]/40 hidden md:block" />
          </div>
          {onOpenApply && (
            <button
              onClick={onOpenApply}
              className="px-5 py-2.5 rounded-full bg-[#28052B] text-[#DFC06A] hover:bg-[#3B0A40] transition-colors font-bold text-xs shadow-sm cursor-pointer flex items-center gap-2 border border-[#DFC06A]/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
              <span>Admissions Inquiry</span>
            </button>
          )}
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          For academic counseling, first-year curriculum inquiries, laboratory visits, or parent-teacher interaction appointments, please reach out to the Department Secretariat.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Department Location</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Department of Basic Science &amp; Humanities<br />
            2nd Floor, Decennial Block (East Wing)<br />
            Jyothi Engineering College (Autonomous)<br />
            Cheruthuruthy, Thrissur, Kerala – 679531
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Email &amp; Direct Contacts</h4>
          <div className="text-xs text-[#4A384F] space-y-2 font-light">
            <div>
              <div className="text-[10px] text-[#C79628] font-bold uppercase">HOD Email:</div>
              <a href="mailto:ushanair@jecc.ac.in" className="hover:underline text-[#28052B] font-semibold">ushanair@jecc.ac.in</a>
            </div>
            <div>
              <div className="text-[10px] text-[#C79628] font-bold uppercase">Department Secretariat:</div>
              <a href="mailto:bsh@jecc.ac.in" className="hover:underline text-[#28052B] font-semibold">bsh@jecc.ac.in</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Telephone &amp; Visiting Hours</h4>
          <div className="text-xs text-[#4A384F] space-y-1.5 font-light">
            <div>• College EPABX: <strong className="text-[#28052B] font-semibold">+91 4884 259000</strong> (Ext. 204)</div>
            <div>• Admissions Helpline: <strong className="text-[#28052B] font-semibold">+91 95269 24455</strong></div>
            <div>• Working Hours: Monday – Friday, 9:00 AM – 4:30 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};
