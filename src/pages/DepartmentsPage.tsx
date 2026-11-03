import React, { useState, useEffect } from 'react';
import { 
  Building2, GraduationCap, CheckCircle2, 
  FlaskConical, Briefcase, ArrowRight, ShieldCheck, UserCheck, Sparkles 
} from 'lucide-react';
import { DEPARTMENTS } from '../data/collegeData';
import { VerificationBadge } from '../components/VerificationBadge';

interface Props {
  selectedDeptId?: string;
  onOpenApply: () => void;
}

export const DepartmentsPage: React.FC<Props> = ({ selectedDeptId, onOpenApply }) => {
  const [activeDeptId, setActiveDeptId] = useState<string>(selectedDeptId || DEPARTMENTS[0].id);

  useEffect(() => {
    if (selectedDeptId) {
      setActiveDeptId(selectedDeptId);
      const el = document.getElementById('dept-content');
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [selectedDeptId]);

  const activeDept = DEPARTMENTS.find(d => d.id === activeDeptId) || DEPARTMENTS[0];

  return (
    <div className="space-y-12 py-8">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-jyothi-purple-950 via-jyothi-purple-900 to-jyothi-purple-950 text-white p-8 md:p-14 border border-jyothi-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jyothi-gold-500/20 text-jyothi-gold-300 border border-jyothi-gold-400/30 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              Academic Portals
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-brand leading-tight">
              Academic Departments & Curricula
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Explore our seven premier engineering departments offering autonomous B.Tech, M.Tech, and Ph.D. degrees designed to bridge fundamental scientific inquiry with high-impact industry applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Department Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Mobile Horizontal Department Selector */}
          <div className="lg:hidden col-span-1 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Department
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDeptId(dept.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all border ${
                    activeDeptId === dept.id
                      ? 'bg-jyothi-purple-800 text-jyothi-gold-300 border-jyothi-gold-400 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  <span className="font-mono text-jyothi-gold-500 mr-1.5">{dept.code}</span>
                  <span>{dept.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Department Selection Sidebar */}
          <div className="hidden lg:block lg:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-3 py-1">
              Select Department
            </div>
            <div className="space-y-1.5">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDeptId(dept.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between border ${
                    activeDeptId === dept.id
                      ? 'bg-jyothi-purple-800 text-white border-jyothi-gold-400 shadow-md font-bold'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <div>
                    <div className="text-xs text-jyothi-gold-400 font-mono">{dept.code}</div>
                    <div className="text-sm font-semibold">{dept.name}</div>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeDeptId === dept.id ? 'bg-white/20 text-jyothi-gold-300' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {dept.intake} Seats
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Department Detailed View */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-8">
            
            {/* Top Bar of Active Dept */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-3 py-1 rounded-lg bg-jyothi-gold-500 text-jyothi-purple-950 font-black text-xs">
                    {activeDept.code}
                  </span>
                  <VerificationBadge status="Confirmed by College" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-brand text-jyothi-purple-950">
                  {activeDept.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Degree Offered: <strong>{activeDept.degree}</strong> • Approved Annual Intake: <strong>{activeDept.intake} Seats</strong> • Established: <strong>{activeDept.established}</strong>
                </p>
              </div>

              <button
                onClick={onOpenApply}
                className="px-5 py-2.5 rounded-xl bg-jyothi-purple-800 hover:bg-jyothi-purple-900 text-jyothi-gold-300 font-bold text-xs shadow-md transition-all shrink-0 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Apply for {activeDept.code}</span>
              </button>
            </div>

            {/* Department Visual Banner */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-inner">
              <img 
                src={activeDept.image} 
                alt={activeDept.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jyothi-purple-950/70 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-xs sm:text-sm font-medium max-w-xl">
                  {activeDept.description}
                </p>
              </div>
            </div>

            {/* HOD Profile & Message */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-jyothi-purple-100 border border-jyothi-purple-200 flex items-center justify-center text-jyothi-purple-800 font-bold">
                  <UserCheck className="w-6 h-6 text-jyothi-purple-800" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-jyothi-purple-950">{activeDept.hod}</h4>
                  <p className="text-xs text-slate-500">{activeDept.hodQualification} • Head of Department</p>
                </div>
              </div>
              <blockquote className="text-xs text-slate-600 italic border-l-2 border-jyothi-gold-500 pl-3 leading-relaxed">
                "{activeDept.hodMessage}"
              </blockquote>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm uppercase tracking-wider text-jyothi-purple-900 font-brand">
                Department Highlights & Accreditations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeDept.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl bg-jyothi-purple-50/60 border border-jyothi-purple-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-jyothi-purple-800 shrink-0 mt-0.5" />
                    <span className="text-xs text-jyothi-purple-950 font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Laboratories */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm uppercase tracking-wider text-jyothi-purple-900 font-brand flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-jyothi-gold-600" />
                Laboratories & Experimental Facilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeDept.laboratories.map((lab, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-jyothi-gold-500" />
                    <span className="text-xs font-semibold text-slate-800">{lab}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Prospects */}
            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-sm uppercase tracking-wider text-jyothi-purple-900 font-brand flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-jyothi-gold-600" />
                Key Career Pathways & Job Roles
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeDept.careerProspects.map((role, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                    {role}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

