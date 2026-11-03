import React from 'react';
import { 
  Users, Trophy, Music, Sparkles, HeartHandshake, 
  Flag, Award, Calendar, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { STUDENT_CLUBS } from '../data/collegeData';

interface Props {
  onOpenApply: () => void;
  onOpenTour: () => void;
}

export const StudentLifePage: React.FC<Props> = ({ onOpenApply, onOpenTour }) => {
  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-jyothi-purple-950 via-jyothi-purple-900 to-jyothi-purple-950 text-white p-8 md:p-14 border border-jyothi-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jyothi-gold-500/20 text-jyothi-gold-300 border border-jyothi-gold-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Campus Culture & Community
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-brand leading-tight">
              Student Life at Jyothi Hills
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Experience an invigorating campus life where technical brilliance converges with vibrant cultural festivals, competitive sports, international student societies, and socially responsible community outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Annual Fest: THARANG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-jyothi-purple-900 via-jyothi-purple-950 to-jyothi-purple-900 rounded-3xl p-8 md:p-12 text-white border border-jyothi-gold-400/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 rounded-full bg-jyothi-gold-500 text-jyothi-purple-950 text-xs font-extrabold uppercase tracking-wider">
              Signature Annual Festival
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-brand">
              THARANG: All-Kerala Tech & Cultural Fest
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              'Tharang' is the flagship annual inter-collegiate techno-cultural extravaganza of Jyothi Engineering College. Attracting more than 3,500+ participants from engineering institutes across South India, Tharang features 45+ technical competitions, robotics arenas, EDM musical pro-nights, gaming championships, and literary showcases.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-jyothi-gold-300 border border-white/10">
                45+ Competitions
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-jyothi-gold-300 border border-white/10">
                ₹3,00,000+ Prize Pool
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-jyothi-gold-300 border border-white/10">
                Pro-Nights & Celebrities
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl border-2 border-jyothi-gold-400/40">
            <img 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop" 
              alt="Tharang Fest at Jyothi" 
              className="w-full h-64 object-cover"
            />
          </div>

        </div>
      </section>

      {/* Student Clubs and Professional Societies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
            Professional & Cultural Societies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950">
            Clubs, Chapters & Creative Collectives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDENT_CLUBS.map((club, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-card-hover transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-gold-100 px-3 py-1 rounded-lg">
                  {club.tag}
                </span>
                <span className="text-xs text-slate-400 font-semibold">{club.members}</span>
              </div>

              <h3 className="text-lg font-bold font-brand text-jyothi-purple-950">
                {club.name}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {club.desc}
              </p>

              <div className="pt-2 border-t border-slate-100 text-xs text-jyothi-purple-800 font-bold flex items-center gap-1">
                <span>Active Student Leadership</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sports & Athletics */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-800 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
              Sports & Physical Fitness
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950">
              Championship Athletics & Fitness Facilities
            </h2>
            <p className="text-sm text-slate-600">
              At Jyothi, we believe physical fitness and sportsmanship are foundational to professional stamina. Our campus houses dedicated courts for basketball, football, volleyball, and indoor badminton.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <Trophy className="w-6 h-6 text-jyothi-gold-600" />
              <h4 className="font-bold text-base text-jyothi-purple-950">Archdiocesan Tournaments</h4>
              <p className="text-xs text-slate-600">Annual hosts of major KTU zone tournaments in football, basketball, and table tennis.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <Flag className="w-6 h-6 text-jyothi-gold-600" />
              <h4 className="font-bold text-base text-jyothi-purple-950">Standard 400m Track & Turf</h4>
              <p className="text-xs text-slate-600">Sprawling outdoor grounds for track and field events, cricket championships, and football leagues.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <Award className="w-6 h-6 text-jyothi-gold-600" />
              <h4 className="font-bold text-base text-jyothi-purple-950">Modern Gym & Indoor Arena</h4>
              <p className="text-xs text-slate-600">Separate fitness gyms for men and women equipped with weight machines and cardio treadmills.</p>
            </div>
          </div>

        </div>
      </section>

      {/* NSS & Social Outreach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              Social Commitment
            </span>
            <h3 className="text-2xl font-bold font-brand text-jyothi-purple-950">
              NSS Units 140 & 591: Engineering for Society
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Jyothi NSS volunteers actively engage in village electrification, blood donation drives, eco-sanitation campaigns, solar lantern distribution to underprivileged communities, and flood relief aid across Thrissur and Palakkad.
            </p>
          </div>
          <button
            onClick={onOpenTour}
            className="px-6 py-3 rounded-xl bg-jyothi-purple-800 text-jyothi-gold-300 font-bold text-xs sm:text-sm shadow hover:bg-jyothi-purple-900 transition-all shrink-0"
          >
            Explore Campus Tour
          </button>
        </div>
      </section>

    </div>
  );
};

