import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { COLLEGE_INFO, DEPARTMENTS } from '../data/collegeData';
import { RevealBlock } from '../components/RevealBlock';
import { AdmissionsSubNav } from '../components/AdmissionsSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

export const AdmissionEnquiryPage: React.FC<Props> = ({
  onNavigate,
  onOpenApply,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [programme, setProgramme] = useState(DEPARTMENTS[0]?.name || 'Computer Science & Engineering');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      <AdmissionsSubNav activeRoute="admission-enquiry" onNavigate={onNavigate} />

      {/* Reversed Split Hero: Left Dark-Purple Helpdesk Card + Right Enquiry Form */}
      <section className="relative w-full overflow-x-clip pt-6 sm:pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Helpdesk & Campus Card */}
            <div className="lg:col-span-5">
              <RevealBlock direction="left">
                <div className="rounded-3xl bg-[#210532] text-white p-5 sm:p-7 border border-[#DFC06A]/60 shadow-2xl space-y-5">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#14021E]">
                    <img
                      src="/assets/admissions_enquiry_hero.jpg"
                      alt="Jyothi Engineering College Admissions Helpdesk"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#210532]/75 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#29073D]/90 border border-[#DFC06A]/70 text-[#FDE68A] text-[11px] font-semibold">
                      Direct Counselor Assistance
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold font-['Playfair_Display',serif] text-[#FDE68A]">
                      Admissions Helpdesk
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      Connect with our dedicated admissions counselors for KEAM option guidance, Management/NRI quota seats, fee structures, and campus tours.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-white/10 text-xs sm:text-sm">
                    <a
                      href={`tel:${COLLEGE_INFO.admissionHelpline.replace(/\s+/g, '')}`}
                      className="flex items-center gap-3 text-amber-100 hover:text-[#DFC06A] transition-colors"
                    >
                      <span className="w-9 h-9 rounded-xl bg-white/10 border border-[#DFC06A]/40 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[#DFC06A]" />
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-300">
                          Admissions Helpline
                        </div>
                        <div className="font-bold">{COLLEGE_INFO.admissionHelpline}</div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${COLLEGE_INFO.admissionEmail}`}
                      className="flex items-center gap-3 text-amber-100 hover:text-[#DFC06A] transition-colors"
                    >
                      <span className="w-9 h-9 rounded-xl bg-white/10 border border-[#DFC06A]/40 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-[#DFC06A]" />
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-300">
                          Official Email
                        </div>
                        <div className="font-bold">{COLLEGE_INFO.admissionEmail}</div>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 text-amber-100">
                      <span className="w-9 h-9 rounded-xl bg-white/10 border border-[#DFC06A]/40 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-[#DFC06A]" />
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-300">
                          Counseling Hours
                        </div>
                        <div className="font-semibold">Mon – Sat: 9:00 AM – 4:30 PM</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-amber-100">
                      <span className="w-9 h-9 rounded-xl bg-white/10 border border-[#DFC06A]/40 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-[#DFC06A]" />
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-300">
                          Campus Address
                        </div>
                        <div className="font-semibold">Cheruthuruthy, Thrissur, Kerala 679531</div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>

            {/* Right Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <RevealBlock direction="right" delay={140}>
                <div className="rounded-3xl bg-white border border-amber-200/80 shadow-xl p-6 sm:p-10 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full bg-[#FBF2DC] border border-[#DFC06A]/80 text-[#5C3A14] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em]">
                        Admission Enquiry
                      </span>
                      <span className="hidden sm:block h-[1px] w-16 bg-[#DFC06A]/80" />
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#250836] leading-[1.1] font-['Playfair_Display',serif]">
                      Request a Callback{' '}
                      <span className="italic font-bold text-[#A87627]">
                        from Our Counselors.
                      </span>
                    </h1>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Share your preferred branch and contact details below, or start your direct online application right away.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A] text-center space-y-3">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                        Enquiry Received!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <span className="font-semibold text-[#250836]">{name}</span>. Our Admissions Counselor will contact you at{' '}
                        <span className="font-semibold text-[#250836]">{phone}</span> regarding <span className="font-semibold">{programme}</span>.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setName('');
                          setPhone('');
                          setEmail('');
                          setMessage('');
                        }}
                        className="px-5 py-2 rounded-full bg-[#250836] text-[#FDE68A] text-xs font-semibold cursor-pointer"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#250836]">
                            Student Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-amber-200 text-sm text-[#250836] focus:outline-none focus:border-[#250836]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#250836]">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 9XXXXXXXXX"
                            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-amber-200 text-sm text-[#250836] focus:outline-none focus:border-[#250836]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#250836]">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="student@example.com"
                            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-amber-200 text-sm text-[#250836] focus:outline-none focus:border-[#250836]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#250836]">
                            Preferred Programme
                          </label>
                          <select
                            value={programme}
                            onChange={(e) => setProgramme(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-amber-200 text-sm text-[#250836] focus:outline-none focus:border-[#250836]"
                          >
                            {DEPARTMENTS.map((d) => (
                              <option key={d.id} value={d.name}>
                                B.Tech — {d.name}
                              </option>
                            ))}
                            <option value="M.Tech Power Electronics & Power Systems">
                              M.Tech — Power Electronics &amp; Power Systems
                            </option>
                            <option value="M.Tech Computer Science & Engineering">
                              M.Tech — Computer Science &amp; Engineering
                            </option>
                            <option value="Ph.D. Research Programme">
                              Ph.D. — Research Programme
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#250836]">
                          Questions (KEAM Rank, Quota, Hostel, Scholarships)
                        </label>
                        <textarea
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Share your KEAM rank, +2 PCM percentage, or any specific query..."
                          className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-amber-200 text-sm text-[#250836] focus:outline-none focus:border-[#250836]"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row gap-3">
                        <button
                          type="submit"
                          className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-[#29073D] hover:bg-[#3B1159] text-white font-semibold text-xs sm:text-sm shadow-md border border-[#D4A346]/70 inline-flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Enquiry</span>
                        </button>
                        <button
                          type="button"
                          onClick={onOpenApply}
                          className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-white hover:bg-[#FAF5EB] text-[#250836] font-semibold text-xs sm:text-sm border border-[#250836]/40 shadow-xs inline-flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <span>Start Full Application</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

