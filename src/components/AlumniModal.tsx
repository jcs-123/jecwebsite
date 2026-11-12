import React, { useEffect, useState } from 'react';
import {
  X, GraduationCap, Globe, Users, Briefcase, Award, Building2,
  ExternalLink, Mail, MapPin, HeartHandshake, Sparkles, CheckCircle2,
  ChevronRight, ArrowUpRight, Search
} from 'lucide-react';
import { ALUMNI_TESTIMONIALS } from '../data/collegeData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigateHomeAlumni?: () => void;
}

const GLOBAL_CHAPTERS = [
  { name: "Middle East Chapter", location: "Dubai & Abu Dhabi, UAE", members: "1,850+ Alumni", lead: "Er. Binu Thomas ('08)" },
  { name: "North America Chapter", location: "Silicon Valley, Seattle & NYC, USA", members: "920+ Alumni", lead: "Er. Vivek Menon ('11)" },
  { name: "Europe & UK Chapter", location: "London (UK) & Dublin (Ireland)", members: "640+ Alumni", lead: "Er. Jerin Paul ('18)" },
  { name: "Bengaluru Tech Chapter", location: "Bengaluru, India", members: "3,200+ Alumni", lead: "Er. Ananya Menon ('21)" },
  { name: "Kerala & Regional Chapter", location: "Kochi & Thrissur, India", members: "4,500+ Alumni", lead: "Er. Sreejith K. ('06)" },
];

export const AlumniModal: React.FC<Props> = ({ isOpen, onClose, onNavigateHomeAlumni }) => {
  const [activeTab, setActiveTab] = useState<'hall-of-fame' | 'chapters' | 'register'>('hall-of-fame');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '2020',
    branch: 'CSE',
    company: '',
    role: '',
    location: '',
  });

  // Lock body scroll on open & handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#0D0214]/80 backdrop-blur-md animate-fade-in select-none">
      
      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-[#DFC06A]/40 flex flex-col overflow-hidden animate-slide-up z-10 text-slate-800">
        
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-[#1E052B] via-[#2E0946] to-[#180323] text-white p-5 sm:p-7 shrink-0 border-b border-[#DFC06A]/30">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Close Alumni Portal (Esc)"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pr-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#DFC06A]/15 text-[#FDE68A] text-[11px] font-bold border border-[#DFC06A]/30 uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 text-[#DFC06A]" />
                <span>Jyothi Alumni Association (JAA) • Estd. 2006</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-brand text-white tracking-tight">
                Global Alumni Network & Directorate
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Connecting 10,000+ proud Jyothi engineers making global breakthroughs at AWS, ISRO, Bosch, Microsoft, and leading technological enterprises across 24+ countries.
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-5">
            <div className="p-2.5 rounded-xl bg-white/[0.07] backdrop-blur-md border border-white/10 text-center">
              <div className="text-lg sm:text-xl font-black font-brand text-[#DFC06A]">10,000+</div>
              <div className="text-[10px] text-slate-300 font-medium">Global Alumni</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.07] backdrop-blur-md border border-white/10 text-center">
              <div className="text-lg sm:text-xl font-black font-brand text-[#DFC06A]">14</div>
              <div className="text-[10px] text-slate-300 font-medium">Active Chapters</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.07] backdrop-blur-md border border-white/10 text-center">
              <div className="text-lg sm:text-xl font-black font-brand text-[#DFC06A]">200+</div>
              <div className="text-[10px] text-slate-300 font-medium">Founders & CXOs</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.07] backdrop-blur-md border border-white/10 text-center">
              <div className="text-lg sm:text-xl font-black font-brand text-[#DFC06A]">₹45 LPA</div>
              <div className="text-[10px] text-slate-300 font-medium">Highest Global CTC</div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-5 pt-2 border-t border-white/10 text-xs font-semibold overflow-x-auto">
            <button
              onClick={() => setActiveTab('hall-of-fame')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'hall-of-fame'
                  ? 'bg-[#DFC06A] text-[#1E052B] font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Alumni Hall of Fame & Testimonials</span>
            </button>
            <button
              onClick={() => setActiveTab('chapters')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'chapters'
                  ? 'bg-[#DFC06A] text-[#1E052B] font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Worldwide Chapters ({GLOBAL_CHAPTERS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'register'
                  ? 'bg-[#DFC06A] text-[#1E052B] font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Register / Update Directory</span>
            </button>
          </div>

        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-slate-800 bg-[#FCFBF8]">

          {/* TAB 1: HALL OF FAME */}
          {activeTab === 'hall-of-fame' && (
            <div className="space-y-5 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold font-brand text-lg text-[#1E092B]">
                    Distinguished Alumni Working at Tech Leaders
                  </h3>
                  <p className="text-xs text-slate-500">
                    From deep-space aerospace missions at ISRO to autonomous mobility and hyper-scale cloud computing.
                  </p>
                </div>
                {onNavigateHomeAlumni && (
                  <button
                    onClick={() => { onClose(); onNavigateHomeAlumni(); }}
                    className="text-xs font-bold text-[#250836] hover:text-[#521375] hover:underline flex items-center gap-1 shrink-0"
                  >
                    <span>View on Home Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ALUMNI_TESTIMONIALS.map((alumni) => (
                  <div
                    key={alumni.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#DFC06A] hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={alumni.image}
                          alt={alumni.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#DFC06A] shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm text-[#1E092B] truncate">{alumni.name}</h4>
                          <p className="text-xs font-semibold text-[#8A5A12] truncate">{alumni.role}</p>
                          <p className="text-[11px] text-slate-500 truncate">{alumni.company}</p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 italic leading-relaxed">
                        "{alumni.quote}"
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-bold text-[#250836]">{alumni.programme}</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 font-mono text-[10px]">{alumni.batch}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Silver Jubilee Announcement Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#250836] via-[#3C1361] to-[#250836] text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DFC06A] text-[#1E092B] font-black text-sm flex items-center justify-center shrink-0">
                    25
                  </div>
                  <div>
                    <h5 className="font-bold text-sm font-brand text-white">Silver Jubilee Global Alumni Meet (2002–2027)</h5>
                    <p className="text-xs text-[#FDE68A]">Join worldwide reunions and mentorship initiatives across all global chapters.</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('register')}
                  className="px-4 py-2 rounded-xl bg-[#DFC06A] text-[#1E092B] font-bold text-xs hover:bg-[#FDE68A] transition-colors whitespace-nowrap cursor-pointer shrink-0"
                >
                  Register Your Attendance
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: GLOBAL CHAPTERS */}
          {activeTab === 'chapters' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold font-brand text-lg text-[#1E092B]">
                    Active Regional & International Chapters
                  </h3>
                  <p className="text-xs text-slate-500">
                    Connect with fellow graduates in your metropolitan region for networking, referrals, and reunions.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {GLOBAL_CHAPTERS.map((chapter, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#DFC06A] hover:shadow-xs transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-[#8A5A12] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#DFC06A]" />
                        <span>{chapter.location}</span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#250836]/10 text-[#250836]">
                        {chapter.members}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-[#1E092B]">
                      {chapter.name}
                    </h4>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                      <span>Chapter Coordinator: <strong>{chapter.lead}</strong></span>
                      <a
                        href="mailto:alumni@jecc.ac.in"
                        className="text-[#250836] font-bold hover:underline"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: REGISTER DIRECTORY FORM */}
          {activeTab === 'register' && (
            <div className="max-w-2xl mx-auto space-y-4 animate-fade-in">
              {formSubmitted ? (
                <div className="p-8 text-center bg-white rounded-3xl border border-emerald-200 shadow-sm space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Thank You for Connecting!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Your alumni profile details have been submitted to the Jyothi Alumni Association (JAA) secretariat. We will reach out with upcoming chapter meet invitations.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-[#250836] text-[#DFC06A] text-xs font-bold hover:bg-[#3C1361]"
                  >
                    Update Another Entry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-bold text-base text-[#1E092B]">Alumni Directory Registration Form</h4>
                    <p className="text-xs text-slate-500">Keep in touch with your alma mater, mentor students, and receive Silver Jubilee updates.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jerin Paul"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#250836]"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Official Email *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. jerin@company.com"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#250836]"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Passout Batch *</label>
                      <input
                        required
                        type="text"
                        value={formData.batch}
                        onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                        placeholder="e.g. 2018"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#250836]"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Branch / Stream *</label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#250836] bg-white"
                      >
                        <option value="CSE">Computer Science & Engineering</option>
                        <option value="AI&DS">Artificial Intelligence & Data Science</option>
                        <option value="ECE">Electronics & Communication</option>
                        <option value="EEE">Electrical & Electronics</option>
                        <option value="ME">Mechanical Engineering</option>
                        <option value="CE">Civil Engineering</option>
                        <option value="RA">Robotics & Automation</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Current Organization / Startup</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Amazon Web Services"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#250836]"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Designation / Role</label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Solutions Architect"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#250836]"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-[#250836] hover:bg-[#3C1361] text-[#DFC06A] font-bold text-xs shadow-md transition-colors cursor-pointer"
                    >
                      Submit Alumni Directory Record
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 shrink-0">
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#250836]" />
            <span>Alumni Relations Cell: <strong className="text-[#250836]">alumni@jecc.ac.in</strong></span>
          </div>
          <span className="text-[11px] text-slate-400">Jyothi Engineering College Autonomous • Cheruthuruthy, Thrissur</span>
        </div>

      </div>

    </div>
  );
};
export default AlumniModal;

