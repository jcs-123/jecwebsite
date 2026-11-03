import React from 'react';
import { 
  Microscope, Sparkles, Award, Lightbulb, Rocket, 
  FileText, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink 
} from 'lucide-react';
import { RESEARCH_CENTRES } from '../data/collegeData';
import { VerificationBadge } from '../components/VerificationBadge';

interface Props {
  onOpenApply: () => void;
}

export const ResearchPage: React.FC<Props> = ({ onOpenApply }) => {
  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-jyothi-purple-950 via-jyothi-purple-900 to-jyothi-purple-950 text-white p-8 md:p-14 border border-jyothi-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jyothi-gold-500/20 text-jyothi-gold-300 border border-jyothi-gold-400/30 text-xs font-bold uppercase tracking-wider">
              <Microscope className="w-4 h-4" />
              R&D and Entrepreneurship
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-brand leading-tight">
              Research, Innovation & Incubation
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Fostering interdisciplinary breakthroughs, funded research initiatives, and tech entrepreneurship through state-of-the-art research centres, the Jyothi TBI startup incubator, and FabLab Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* R&D Overview Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-jyothi-purple-900">
              350+
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Research Publications</div>
            <div className="text-[11px] text-jyothi-purple-700 mt-0.5">Scopus & IEEE Indexed</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-jyothi-purple-900">
              ₹2.5 Cr+
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Funded Projects</div>
            <div className="text-[11px] text-emerald-600 mt-0.5">DST, AICTE, KTU & ANERT</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-jyothi-purple-900">
              24+
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Patents Filed & Granted</div>
            <div className="text-[11px] text-jyothi-purple-700 mt-0.5">Intellectual Property Cell</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-3xl sm:text-4xl font-black font-brand text-jyothi-purple-900">
              18+
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Student Startups</div>
            <div className="text-[11px] text-emerald-600 mt-0.5">Incubated at Jyothi TBI</div>
          </div>
        </div>
      </section>

      {/* Research Centres */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
              Centres of Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950 mt-2">
              Interdisciplinary Research Centres
            </h2>
          </div>
          <VerificationBadge status="Confirmed by College" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESEARCH_CENTRES.map((centre, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-jyothi-purple-100 text-jyothi-purple-800 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-jyothi-purple-800" />
                </div>
                <h3 className="text-xl font-bold font-brand text-jyothi-purple-950">
                  {centre.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {centre.focus}
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <strong className="text-jyothi-purple-900">Grants & Sponsorship:</strong> {centre.projects}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Principal Lead: <strong>{centre.lead}</strong></span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active R&D Lab
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jyothi TBI & FabLab Spotlight */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
                Incubation & Prototyping
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-brand text-jyothi-purple-950">
                Jyothi Technology Business Incubator (TBI) & FabLab Kerala
              </h2>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  Supported by the <strong>Kerala Startup Mission (KSUM)</strong> and the <strong>Archdiocese of Trichur</strong>, Jyothi TBI provides physical incubation facilities, seed grants up to ₹5 Lakhs, high-speed cloud infrastructure, legal patent mentoring, and venture capitalist pitch sessions for student innovators.
                </p>
                <p>
                  Integrated with our on-campus <strong>FabLab Kerala</strong> facility—built adhering to MIT Center for Bits and Atoms guidelines—students can 3D print prototypes, CNC mill micro-circuits, and assemble commercial-grade hardware within hours.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenApply}
                  className="px-6 py-3 rounded-xl bg-jyothi-purple-800 hover:bg-jyothi-purple-900 text-jyothi-gold-300 font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Submit Startup / Ph.D. Research Proposal</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop" 
                alt="FabLab Kerala at Jyothi" 
                className="w-full h-80 object-cover"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

