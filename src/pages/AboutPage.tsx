import React from 'react';
import { 
  ShieldCheck, Award, GraduationCap, Building2, 
  CheckCircle2, Compass, ArrowRight, UserCheck, HeartHandshake, BookOpen
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { VerificationBadge } from '../components/VerificationBadge';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

export const AboutPage: React.FC<Props> = ({ onNavigate, onOpenApply, onOpenTour }) => {
  return (
    <div className="space-y-16 py-8">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-jyothi-purple-950 via-jyothi-purple-900 to-jyothi-purple-950 text-white p-8 md:p-14 border border-jyothi-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute right-[-30px] bottom-[-30px] w-80 h-80 opacity-10 pointer-events-none">
            <img src="/assets/jyothi_emblem.svg" alt="" className="w-full h-full object-contain" />
          </div>

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jyothi-gold-500/20 text-jyothi-gold-300 border border-jyothi-gold-400/30 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              Institutional Profile
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-brand leading-tight">
              About Jyothi Engineering College
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Managed by the Catholic Archdiocese of Trichur, Jyothi Engineering College (Autonomous) is a premier centre for higher technical education established in 2002 to create technology leaders anchored in human values and societal responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* College Overview & Archdiocesan Trust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
                Legacy Since 2002
              </span>
              <VerificationBadge status="Confirmed by College" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-brand text-jyothi-purple-950">
              Two Decades of Transformative Engineering Education
            </h2>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                Jyothi Engineering College was founded under the visionary leadership of the <strong>Catholic Archdiocese of Trichur</strong> with the conviction that ethical engineering and technological excellence are vital catalysts for human development. Situated in Cheruthuruthy, along the scenic banks of the Bharathapuzha and cradle of Kerala Kalamandalam, the campus provides an inspiring backdrop for rigorous intellectual inquiry.
              </p>
              <p>
                In 2023, the institution achieved <strong>Autonomous Status</strong> from the University Grants Commission (UGC) and APJ Abdul Kalam Technological University (KTU). Autonomy has empowered Jyothi to pioneer cutting-edge curricula, introduce industry-designed micro-specializations, and forge international academic linkages while maintaining absolute academic rigor.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-jyothi-purple-900 font-brand">2002</div>
                <div className="text-xs text-slate-500 mt-1">Established Year</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-jyothi-purple-900 font-brand">30+ Acres</div>
                <div className="text-xs text-slate-500 mt-1">Lush Green Campus</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-jyothi-purple-900 font-brand">NAAC 'A'</div>
                <div className="text-xs text-slate-500 mt-1">Grade Accreditation</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src="/assets/jyothi_campus_hero.jpg" 
                alt="Jyothi Hills Administrative Block & Green Campus" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jyothi-purple-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="text-xs font-semibold text-jyothi-gold-300">Jyothi Hills Campus</div>
                  <div className="text-sm font-bold">Cheruthuruthy, Thrissur, Kerala</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950">
              Vision, Mission & Institutional Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-jyothi-purple-100 text-jyothi-purple-800 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6 text-jyothi-purple-800" />
              </div>
              <h3 className="text-xl font-bold font-brand text-jyothi-purple-950">
                Our Vision
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                "Creating technology leaders who foster innovation, maintain the highest standards of professional ethics, and dedicate their intellectual potential towards sustainable national and global progress."
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-jyothi-gold-100 text-jyothi-gold-800 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6 text-jyothi-gold-700" />
              </div>
              <h3 className="text-xl font-bold font-brand text-jyothi-purple-950">
                Our Mission
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-jyothi-purple-800 shrink-0 mt-0.5" />
                  <span>To provide rigorous technical education through advanced autonomous curricula aligned with international industry benchmarks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-jyothi-purple-800 shrink-0 mt-0.5" />
                  <span>To stimulate multidisciplinary research, student entrepreneurship, and intellectual property creation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-jyothi-purple-800 shrink-0 mt-0.5" />
                  <span>To nurture high ethical standards, social sensitivity, and environmental responsibility among emerging technocrats.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Autonomous Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
            Educational Freedom
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950">
            The Autonomous Advantage at Jyothi
          </h2>
          <p className="text-sm text-slate-600">
            Autonomy grants our students a competitive edge through agile, forward-looking learning models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Industry-Designed Curricula",
              desc: "Courses updated annually in consultation with tech leaders from TCS, Infosys, and Bosch to incorporate Generative AI, Cloud Dev, and EV engineering directly into undergraduate tracks.",
              icon: BookOpen
            },
            {
              title: "Minors & Honors Degrees",
              desc: "Students can graduate with specialized Honors or Minors in Artificial Intelligence, Cyber Security, or Robotics alongside their core engineering degree.",
              icon: Award
            },
            {
              title: "Continuous Evaluation & Fast Results",
              desc: "In-house autonomous examination control board guarantees timely assessment, transparent re-evaluation procedures, and on-time degree completion.",
              icon: ShieldCheck
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-jyothi-purple-50 text-jyothi-purple-800 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base font-brand text-jyothi-purple-950">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Accreditations & Recognitions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-jyothi-purple-900 to-jyothi-purple-950 text-white border border-jyothi-gold-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-brand text-white">
              Recognized & Accredited by National Bodies
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              Approved by AICTE New Delhi, Affiliated to APJ Abdul Kalam Technological University, Accredited with 'A' Grade by NAAC, and NBA accredited for major B.Tech disciplines.
            </p>
          </div>
          <button
            onClick={onOpenApply}
            className="px-6 py-3 rounded-xl bg-jyothi-gold-400 text-jyothi-purple-950 font-bold text-xs sm:text-sm shadow-glow-gold hover:bg-jyothi-gold-300 transition-all shrink-0"
          >
            Apply for Admissions 2025
          </button>
        </div>
      </section>

    </div>
  );
};

