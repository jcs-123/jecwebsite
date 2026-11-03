import React, { useState, useMemo, useEffect } from 'react';
import {
  Users, Search, Mail, Award, BookOpen, GraduationCap,
  MapPin, ExternalLink, X, FileText, Briefcase, ChevronRight,
  Sparkles, CheckCircle2, Bookmark, BookmarkCheck, Calendar,
  TrendingUp, Compass, ArrowUpRight
} from 'lucide-react';
import { FACULTY_MEMBERS, DEPARTMENTS, FacultyMember, FacultyCareerMilestone, FacultyPaper } from '../data/collegeData';

export const FacultyPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFaculty, setActiveFaculty] = useState<FacultyMember | null>(null);
  const [modalTab, setModalTab] = useState<'roadmap' | 'skills' | 'papers' | 'courses'>('roadmap');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeFaculty) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveFaculty(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeFaculty]);

  // Filter faculty by department, name, specialization, or skills
  const filteredFaculty = useMemo(() => {
    return FACULTY_MEMBERS.filter(fac => {
      const matchesDept = selectedDept === 'all' || fac.department.toLowerCase().includes(selectedDept.toLowerCase());
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesDept;

      const matchesSearch =
        fac.name.toLowerCase().includes(query) ||
        fac.specialization.toLowerCase().includes(query) ||
        fac.department.toLowerCase().includes(query) ||
        fac.qualification.toLowerCase().includes(query) ||
        (fac.skills && fac.skills.some(s => s.toLowerCase().includes(query)));

      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E092B] selection:bg-[#250836] selection:text-[#DFC06A] pb-24">

      {/* ============================================================== */}
      {/* 1. LUXURY EDITORIAL HEADER BANNER */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C0528] via-[#2A083D] to-[#14021F] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#DFC06A]/20">
        
        {/* Subtle Background Architectural Grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #DFC06A 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        {/* Glowing Ambient Spotlights */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#DFC06A]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#3C1361]/60 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFC06A]/15 text-[#FDE68A] border border-[#DFC06A]/30 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#DFC06A]" />
            Academic Mentorship & Doctoral Faculty
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-brand tracking-tight text-white leading-tight">
                Distinguished Faculty & Research Directorate
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Learn alongside premier educators, doctorates from renowned national institutes, and industry veterans. Click any faculty card to explore their verified <strong className="text-[#FDE68A] font-semibold">career journey roadmap</strong>, <strong className="text-[#FDE68A] font-semibold">technical skillsets</strong>, and <strong className="text-[#FDE68A] font-semibold">Scopus / IEEE publications</strong>.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
              <div className="p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-black font-brand text-[#DFC06A]">100%</div>
                <div className="text-[11px] text-slate-300 font-medium">Ph.D. & M.Tech</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-black font-brand text-[#DFC06A]">18+</div>
                <div className="text-[11px] text-slate-300 font-medium">Avg Experience</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-black font-brand text-[#DFC06A]">45+</div>
                <div className="text-[11px] text-slate-300 font-medium">Patents Filed</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-black font-brand text-[#DFC06A]">650+</div>
                <div className="text-[11px] text-slate-300 font-medium">Indexed Papers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SEARCH & FILTER CONTROLS */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#DFC06A]/30 shadow-lg shadow-[#250836]/5 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1 min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search faculty by name, specialization, or skill (e.g. Cyber, PyTorch, Antenna)..."
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#250836] focus:ring-2 focus:ring-[#250836]/10 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            <button
              onClick={() => setSelectedDept('all')}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                selectedDept === 'all'
                  ? 'bg-[#250836] text-[#DFC06A] shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              All Departments ({FACULTY_MEMBERS.length})
            </button>
            {DEPARTMENTS.map(d => {
              const count = FACULTY_MEMBERS.filter(f => f.department.toLowerCase().includes(d.name.toLowerCase())).length;
              if (count === 0) return null;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDept(d.name)}
                  className={`px-3 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedDept === d.name
                      ? 'bg-[#250836] text-[#DFC06A] shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                  }`}
                >
                  <span>{d.code}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedDept === d.name ? 'bg-[#DFC06A] text-[#250836]' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. ANIMATED FACULTY DIRECTORY GRID */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs sm:text-sm font-semibold text-slate-600">
            Showing <span className="font-bold text-[#250836]">{filteredFaculty.length}</span> faculty members
            {selectedDept !== 'all' && <span> in <span className="text-[#250836] font-bold">{selectedDept}</span></span>}
            {searchQuery && <span> matching "<span className="italic text-[#250836]">{searchQuery}</span>"</span>}
          </div>
          {(selectedDept !== 'all' || searchQuery) && (
            <button
              onClick={() => { setSelectedDept('all'); setSearchQuery(''); }}
              className="text-xs font-semibold text-[#250836] hover:text-[#521375] hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* The Grid with Staggered Entrance Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((fac, idx) => (
            <div
              key={fac.id}
              onClick={() => { setActiveFaculty(fac); setModalTab('roadmap'); }}
              style={{ animationDelay: `${(idx % 8) * 80}ms` }}
              className="group animate-slide-up bg-white rounded-2xl border border-slate-200/90 hover:border-[#DFC06A] shadow-xs hover:shadow-xl hover:shadow-[#250836]/8 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1 relative"
            >
              {/* Top Accent Strip */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#250836] via-[#DFC06A] to-[#250836] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Photo & Experience Badge */}
                <div className="h-56 relative overflow-hidden bg-slate-100">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-3.5">
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#DFC06A] text-[#1C0528] font-bold uppercase tracking-wider shadow-xs">
                      {fac.experience}
                    </span>
                    {fac.patentCount && fac.patentCount > 0 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/90 text-[#250836] font-bold backdrop-blur-xs flex items-center gap-1">
                        <Award className="w-3 h-3 text-[#B88029]" />
                        {fac.patentCount} {fac.patentCount === 1 ? 'Patent' : 'Patents'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Faculty Card Body */}
                <div className="p-4 space-y-2.5">
                  <div>
                    <h3 className="font-bold text-base font-brand text-[#1E092B] group-hover:text-[#250836] transition-colors leading-snug">
                      {fac.name}
                    </h3>
                    <p className="text-xs font-bold text-[#8A5A12] mt-0.5">
                      {fac.role}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {fac.department}
                    </p>
                  </div>

                  {/* Qualification Pill */}
                  <div className="text-[11px] text-slate-600 bg-[#FCFBF8] border border-slate-100 rounded-lg p-2 space-y-1">
                    <div className="truncate">
                      <strong className="text-slate-800">Degree:</strong> {fac.qualification}
                    </div>
                    <div className="line-clamp-2">
                      <strong className="text-slate-800">Domain:</strong> {fac.specialization}
                    </div>
                  </div>

                  {/* Skills Preview Badges */}
                  {fac.skills && fac.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {fac.skills.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#250836]/5 text-[#250836] border border-[#250836]/10"
                        >
                          {skill}
                        </span>
                      ))}
                      {fac.skills.length > 3 && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500">
                          +{fac.skills.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card Footer with CTA */}
              <div className="p-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#250836] group-hover:bg-[#250836] group-hover:text-[#DFC06A] transition-all">
                <span className="flex items-center gap-1.5 text-[11px] font-bold">
                  <span>View Full Profile & Roadmap</span>
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredFaculty.length === 0 && (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 max-w-xl mx-auto space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-bold text-slate-800">No faculty members found</p>
              <p className="text-xs text-slate-500">We couldn't find any results matching your search query or department filter.</p>
            </div>
            <button
              onClick={() => { setSelectedDept('all'); setSearchQuery(''); }}
              className="px-5 py-2 rounded-xl bg-[#250836] text-[#DFC06A] text-xs font-bold hover:bg-[#3C1361] transition-all cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </section>

      {/* ============================================================== */}
      {/* 4. COMPREHENSIVE ACADEMIC DOSSIER & ROADMAP MODAL */}
      {/* ============================================================== */}
      {activeFaculty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 animate-fade-in">
          
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setActiveFaculty(null)}
            className="fixed inset-0 bg-[#0C0212]/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-[#DFC06A]/40 flex flex-col overflow-hidden z-10 animate-slide-up">
            
            {/* Top Modal Header Banner */}
            <div className="relative bg-gradient-to-r from-[#1E052B] via-[#2E0946] to-[#170221] text-white p-5 sm:p-7 shrink-0 border-b border-[#DFC06A]/30">
              {/* Close Button */}
              <button
                onClick={() => setActiveFaculty(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close Profile (Esc)"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                {/* Large Profile Picture with Gold Border */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#DFC06A] shadow-md bg-slate-200">
                    <img
                      src={activeFaculty.image}
                      alt={activeFaculty.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-[#DFC06A] text-[#1E052B] font-bold text-[10px] shadow-xs">
                    {activeFaculty.experience}
                  </span>
                </div>

                {/* Faculty Primary Meta */}
                <div className="text-center sm:text-left space-y-1.5 flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DFC06A]/15 text-[#FDE68A] text-[11px] font-semibold border border-[#DFC06A]/30">
                    <CheckCircle2 className="w-3 h-3 text-[#DFC06A]" />
                    <span>Verified Autonomous Faculty Member</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-brand tracking-tight text-white">
                    {activeFaculty.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#DFC06A]">
                    {activeFaculty.role} • {activeFaculty.department}
                  </p>
                  
                  {activeFaculty.cabin && (
                    <p className="text-[11px] sm:text-xs text-slate-300 flex items-center justify-center sm:justify-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#DFC06A] shrink-0" />
                      <span>{activeFaculty.cabin}</span>
                    </p>
                  )}
                </div>

                {/* Metrics Badges */}
                <div className="flex sm:flex-col gap-2 shrink-0">
                  {activeFaculty.citationCount && (
                    <div className="px-3 py-1.5 rounded-xl bg-white/10 text-center border border-white/10">
                      <div className="text-xs font-black text-[#DFC06A]">{activeFaculty.citationCount}+</div>
                      <div className="text-[10px] text-slate-300">Citations</div>
                    </div>
                  )}
                  {activeFaculty.publications && (
                    <div className="px-3 py-1.5 rounded-xl bg-white/10 text-center border border-white/10">
                      <div className="text-xs font-black text-[#DFC06A]">{activeFaculty.publications.length}</div>
                      <div className="text-[10px] text-slate-300">Publications</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Navigation Tabs */}
              <div className="flex items-center gap-2 mt-6 pt-2 border-t border-white/10 overflow-x-auto text-xs font-semibold">
                <button
                  onClick={() => setModalTab('roadmap')}
                  className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    modalTab === 'roadmap'
                      ? 'bg-[#DFC06A] text-[#1E052B] shadow-sm font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Career Journey Roadmap</span>
                </button>
                <button
                  onClick={() => setModalTab('skills')}
                  className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    modalTab === 'skills'
                      ? 'bg-[#DFC06A] text-[#1E052B] shadow-sm font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Skills & Competencies</span>
                </button>
                <button
                  onClick={() => setModalTab('papers')}
                  className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    modalTab === 'papers'
                      ? 'bg-[#DFC06A] text-[#1E052B] shadow-sm font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Published Papers & Patents ({activeFaculty.publications?.length || 0})</span>
                </button>
                <button
                  onClick={() => setModalTab('courses')}
                  className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    modalTab === 'courses'
                      ? 'bg-[#DFC06A] text-[#1E052B] shadow-sm font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Courses & Pedagogy</span>
                </button>
              </div>

            </div>

            {/* Scrollable Modal Content */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-slate-800">

              {/* TAB 1: CAREER JOURNEY ROADMAP */}
              {modalTab === 'roadmap' && (
                <div className="space-y-5 animate-fade-in">
                  <div className="bg-[#FCFBF8] p-4 rounded-2xl border border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A5A12] mb-1">
                      Academic Trajectory Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {activeFaculty.bio || `${activeFaculty.name} has contributed extensively to academic innovation, industry consultancy, and doctoral research guidance throughout their tenure.`}
                    </p>
                  </div>

                  {/* Vertical Timeline */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#250836]" />
                      Milestones & Institutional Journey
                    </h4>

                    {activeFaculty.careerRoadmap && activeFaculty.careerRoadmap.length > 0 ? (
                      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#250836] before:via-[#DFC06A] before:to-[#250836]">
                        {activeFaculty.careerRoadmap.map((item, rIdx) => (
                          <div key={rIdx} className="relative group">
                            {/* Dot */}
                            <div className={`absolute -left-6 sm:-left-8 top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 ${
                              item.isCurrent
                                ? 'bg-[#DFC06A] border-[#250836] ring-4 ring-[#DFC06A]/30'
                                : 'bg-[#250836] border-[#DFC06A]'
                            }`} />

                            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs group-hover:border-[#DFC06A] transition-all space-y-2">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                                  item.isCurrent
                                    ? 'bg-[#250836] text-[#DFC06A]'
                                    : 'bg-slate-100 text-slate-700'
                                }`}>
                                  {item.year}
                                </span>
                                {item.isCurrent && (
                                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Current Designation
                                  </span>
                                )}
                              </div>

                              <div className="space-y-0.5">
                                <h5 className="font-bold text-sm sm:text-base text-[#1E092B]">
                                  {item.role}
                                </h5>
                                <p className="text-xs font-semibold text-[#8A5A12]">
                                  {item.institution}
                                </p>
                              </div>

                              <p className="text-xs text-slate-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-500 italic">Career roadmap records being synchronized.</p>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: SKILLS & CORE COMPETENCIES */}
              {modalTab === 'skills' && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B88029]" />
                      Technical & Research Competencies
                    </h4>
                    {activeFaculty.skills && activeFaculty.skills.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeFaculty.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between hover:border-[#DFC06A] hover:bg-[#FFFDF7] transition-all"
                          >
                            <span className="text-xs font-bold text-slate-800">{skill}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#250836]/10 text-[#250836] font-semibold">
                              Verified
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-500 italic">No skills listed yet.</p>
                    )}
                  </div>

                  {/* Research Focus Area Callout */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#250836]/5 to-[#DFC06A]/10 border border-[#DFC06A]/20 space-y-1.5">
                    <h5 className="text-xs font-bold text-[#250836] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#8A5A12]" />
                      Specialized Academic Domain
                    </h5>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {activeFaculty.specialization}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: PUBLISHED PAPERS & PATENTS */}
              {modalTab === 'papers' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#250836]" />
                      Peer-Reviewed Research Dossier
                    </h4>
                    <span className="text-xs font-semibold text-slate-500">
                      Scopus / IEEE Indexed
                    </span>
                  </div>

                  {activeFaculty.publications && activeFaculty.publications.length > 0 ? (
                    <div className="space-y-3">
                      {activeFaculty.publications.map((paper, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#DFC06A] hover:shadow-xs transition-all space-y-2"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                              paper.type === 'IEEE Journal'
                                ? 'bg-blue-100 text-blue-800'
                                : paper.type === 'National Patent'
                                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                : 'bg-purple-100 text-purple-900'
                            }`}>
                              {paper.type}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500">
                              Year: {paper.year}
                            </span>
                          </div>

                          <h5 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                            {paper.title}
                          </h5>

                          <p className="text-xs text-slate-600 font-medium">
                            {paper.journal}
                          </p>

                          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 text-[11px]">
                            {paper.doi && (
                              <span className="text-slate-500 font-mono text-[10px]">
                                DOI / Reg: {paper.doi}
                              </span>
                            )}
                            {paper.citations !== undefined && (
                              <span className="font-semibold text-[#8A5A12] bg-[#FFF8D6] px-2 py-0.5 rounded-md">
                                {paper.citations} Citations
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 italic">No publications indexed under current records.</p>
                  )}
                </div>
              )}

              {/* TAB 4: COURSES & PEDAGOGY */}
              {modalTab === 'courses' && (
                <div className="space-y-4 animate-fade-in">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#250836]" />
                    Undergraduate & Postgraduate Courses Handled
                  </h4>

                  {activeFaculty.coursesTaught && activeFaculty.coursesTaught.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeFaculty.coursesTaught.map((course, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-2.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#DFC06A] shrink-0" />
                          <span className="text-xs font-semibold text-slate-800">{course}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 italic">Course allocation updated at the commencement of each autonomous semester.</p>
                  )}

                  {/* Student Mentorship Note */}
                  <div className="mt-4 p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200 space-y-1">
                    <h5 className="text-xs font-bold text-[#1E092B]">Academic Mentoring & Project Supervision</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Faculty members conduct 1:1 student mentorship sessions every week, guiding students through autonomous capstone projects, Smart India Hackathons, and industrial internships.
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Bottom Footer Actions */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <a
                href={`mailto:${activeFaculty.email}`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#250836] hover:bg-[#3C1361] text-[#DFC06A] font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#DFC06A]" />
                <span>Contact via Official Mail: {activeFaculty.email}</span>
              </a>

              <button
                onClick={() => setActiveFaculty(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
