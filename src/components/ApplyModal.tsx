import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Building2, User, GraduationCap, Phone, Mail } from 'lucide-react';
import { DEPARTMENTS } from '../data/collegeData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    programme: 'B.Tech',
    quota: 'Merit Quota (KEAM)',
    firstChoiceDept: 'cse',
    secondChoiceDept: 'aids',
    fullName: '',
    email: '',
    phone: '',
    city: '',
    plusTwoPercentage: '',
    keamRank: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-jyothi-purple-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-jyothi-gold-200 overflow-hidden text-jyothi-charcoal-800 my-auto">
        
        {/* Modal Header */}
        <div className="relative px-4 sm:px-6 py-4 sm:py-5 bg-gradient-to-r from-jyothi-purple-900 via-jyothi-purple-800 to-jyothi-purple-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-jyothi-gold-500/20 border border-jyothi-gold-400 flex items-center justify-center text-jyothi-gold-400 shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-bold font-brand tracking-wide text-white leading-tight">
                Admissions 2025-26 Application
              </h3>
              <p className="text-[10px] sm:text-xs text-jyothi-gold-200">
                Jyothi Engineering College (Autonomous) • Cheruthuruthy
              </p>
            </div>
          </div>
          <button 
            onClick={resetAndClose}
            className="p-1.5 sm:p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicator */}
        {!submitted && (
          <div className="bg-jyothi-purple-50 px-3 sm:px-6 py-2.5 sm:py-3 border-b border-jyothi-purple-100 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-jyothi-purple-900">
            <div className={`flex items-center gap-1 sm:gap-1.5 ${step >= 1 ? 'text-jyothi-purple-800 font-bold' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs ${step >= 1 ? 'bg-jyothi-purple-800 text-jyothi-gold-300' : 'bg-slate-200 text-slate-600'}`}>1</span>
              <span>Course</span>
            </div>
            <div className="w-6 sm:w-10 h-0.5 bg-slate-200" />
            <div className={`flex items-center gap-1 sm:gap-1.5 ${step >= 2 ? 'text-jyothi-purple-800 font-bold' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs ${step >= 2 ? 'bg-jyothi-purple-800 text-jyothi-gold-300' : 'bg-slate-200 text-slate-600'}`}>2</span>
              <span>Personal</span>
            </div>
            <div className="w-6 sm:w-10 h-0.5 bg-slate-200" />
            <div className={`flex items-center gap-1 sm:gap-1.5 ${step >= 3 ? 'text-jyothi-purple-800 font-bold' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs ${step >= 3 ? 'bg-jyothi-purple-800 text-jyothi-gold-300' : 'bg-slate-200 text-slate-600'}`}>3</span>
              <span>Academics</span>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-4 sm:p-6 md:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-brand text-jyothi-purple-900">
                Application Received Successfully!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for applying to Jyothi Engineering College (Autonomous), <strong className="text-jyothi-purple-800">{formData.fullName}</strong>. Your reference ID is <span className="font-mono font-bold text-jyothi-purple-900 bg-jyothi-gold-100 px-2 py-0.5 rounded">JEC-2025-{Math.floor(100000 + Math.random() * 900000)}</span>.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between"><span className="text-slate-500">Selected Programme:</span> <span className="font-semibold">{formData.programme} ({formData.firstChoiceDept.toUpperCase()})</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Admission Quota:</span> <span className="font-semibold">{formData.quota}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Admission Helpline:</span> <span className="font-semibold text-jyothi-purple-800">+91 95269 24455</span></div>
              </div>
              <p className="text-xs text-slate-500">
                Our Admissions Counselling Cell will contact you within 24 business hours to guide you through verification and scholarship eligibility.
              </p>
              <button
                onClick={resetAndClose}
                className="mt-4 px-8 py-3 bg-jyothi-purple-800 hover:bg-jyothi-purple-900 text-jyothi-gold-300 font-semibold rounded-xl shadow-lg transition-all"
              >
                Close & Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-200 pb-3">
                    <h4 className="text-lg font-bold text-jyothi-purple-900 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-jyothi-gold-600" />
                      Select Desired Programme & Quota
                    </h4>
                    <p className="text-xs text-slate-500">Choose your academic stream for the academic year 2025-26.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Programme Level</label>
                      <select 
                        name="programme" 
                        value={formData.programme} 
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-jyothi-purple-700 focus:outline-none"
                      >
                        <option value="B.Tech">B.Tech (Autonomous - 4 Years)</option>
                        <option value="B.Tech Lateral">B.Tech Lateral Entry (3 Years)</option>
                        <option value="M.Tech">M.Tech (2 Years Postgraduate)</option>
                        <option value="Ph.D.">Ph.D. Doctoral Research</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Admission Quota Category</label>
                      <select 
                        name="quota" 
                        value={formData.quota} 
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-jyothi-purple-700 focus:outline-none"
                      >
                        <option value="Merit Quota (KEAM)">Merit Quota (Through CEE KEAM)</option>
                        <option value="Management Quota">Management Merit Quota</option>
                        <option value="NRI Quota">NRI / Overseas Citizen Quota</option>
                        <option value="Sports / Cultural Quota">Special Talent / Sports Quota</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-slate-700">First Preference Department</label>
                    <select 
                      name="firstChoiceDept" 
                      value={formData.firstChoiceDept} 
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-jyothi-purple-700 focus:outline-none"
                    >
                      {DEPARTMENTS.map(dept => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name} ({dept.code}) - Intake: {dept.intake} seats
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-slate-700">Second Preference Department (Optional)</label>
                    <select 
                      name="secondChoiceDept" 
                      value={formData.secondChoiceDept} 
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-jyothi-purple-700 focus:outline-none"
                    >
                      {DEPARTMENTS.map(dept => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name} ({dept.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-jyothi-purple-800 hover:bg-jyothi-purple-900 text-jyothi-gold-300 font-semibold text-sm rounded-xl shadow-md transition-colors"
                    >
                      Continue to Candidate Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-200 pb-3">
                    <h4 className="text-lg font-bold text-jyothi-purple-900 flex items-center gap-2">
                      <User className="w-5 h-5 text-jyothi-gold-600" />
                      Candidate Personal Details
                    </h4>
                    <p className="text-xs text-slate-500">Provide official contact information for admission counselling updates.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Candidate Full Name (As in 10th Certificate)*</label>
                      <input 
                        type="text" 
                        required 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Mathew"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-jyothi-purple-700 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          Email Address*
                        </label>
                        <input 
                          type="email" 
                          required 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="candidate@gmail.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-jyothi-purple-700 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          Mobile / WhatsApp Number*
                        </label>
                        <input 
                          type="tel" 
                          required 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-jyothi-purple-700 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        Native City / District
                      </label>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Thrissur, Palakkad, Ernakulam, Malappuram"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-jyothi-purple-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-slate-600 hover:text-jyothi-purple-900 text-sm font-medium"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={!formData.fullName || !formData.email || !formData.phone}
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-jyothi-purple-800 disabled:opacity-50 hover:bg-jyothi-purple-900 text-jyothi-gold-300 font-semibold text-sm rounded-xl shadow-md transition-colors"
                    >
                      Continue to Academic Records
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-200 pb-3">
                    <h4 className="text-lg font-bold text-jyothi-purple-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-jyothi-gold-600" />
                      Academic Eligibility & Scholarship Assessment
                    </h4>
                    <p className="text-xs text-slate-500">Provide approximate marks to evaluate tuition fee scholarship waiver tiers.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">+2 / Higher Secondary Aggregate (%)*</label>
                      <input 
                        type="number" 
                        required 
                        name="plusTwoPercentage"
                        value={formData.plusTwoPercentage}
                        onChange={handleChange}
                        placeholder="e.g. 88"
                        min="45"
                        max="100"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-jyothi-purple-700 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">KEAM Rank (If Appeared / Expected)</label>
                      <input 
                        type="number" 
                        name="keamRank"
                        value={formData.keamRank}
                        onChange={handleChange}
                        placeholder="e.g. 14250"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-jyothi-purple-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Scholarship banner */}
                  <div className="p-4 rounded-2xl bg-jyothi-gold-50 border border-jyothi-gold-200 text-xs text-jyothi-gold-900 space-y-1">
                    <p className="font-bold flex items-center gap-1.5 text-jyothi-purple-950">
                      <Sparkles className="w-4 h-4 text-jyothi-gold-600" />
                      Archdiocesan Merit Scholarship Eligibility
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Candidates scoring &gt;85% in +2 Maths, Physics, Chemistry or KEAM Rank below 15,000 are eligible for up to 100% Tuition Fee Waivers under the Management Merit Scholarship.
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-slate-600 hover:text-jyothi-purple-900 text-sm font-medium"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-jyothi-purple-900 to-jyothi-purple-800 hover:from-jyothi-purple-950 hover:to-jyothi-purple-900 text-jyothi-gold-400 font-bold text-sm rounded-xl shadow-lg hover:shadow-glow-gold transition-all"
                    >
                      Submit Official Application
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

