import React from 'react';
import { CheckCircle2, Heart, HeartHandshake, Sun, Users } from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { StudentLifeLayout } from '../components/StudentLifeLayout';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

const NSS_INITIATIVES = [
  {
    title: 'Blood Donation Camps',
    tag: 'Healthcare & Life Saving',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=900&auto=format&fit=crop',
    desc: 'Regular on-campus blood donation drives in partnership with Jubilee Mission & Thrissur Medical College, mobilizing hundreds of student donors every semester.',
  },
  {
    title: 'Cleaning of Public Spaces',
    tag: 'Swachhata & Eco-Sanitation',
    image: 'https://images.unsplash.com/photo-1758599668186-c47df67d025d?q=80&w=900&auto=format&fit=crop',
    desc: 'Scheduled public park, railway station, riverfront, and panchayat cleanup drives alongside plastic-free campus and green sapling plantation campaigns.',
  },
  {
    title: 'Social Awareness Drives',
    tag: 'Community Education',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=900&auto=format&fit=crop',
    desc: 'Street plays, road-safety rallies, digital literacy workshops, anti-drug campaigns, and health & hygiene outreach across adopted villages.',
  },
];

const IMPACT_DRIVES = [
  {
    icon: Sun,
    title: 'Solar Lantern Assembly',
    desc: 'Hands-on technical service bringing clean lighting to rural households.',
  },
  {
    icon: Users,
    title: '7-Day Annual Special Camp',
    desc: 'Residential community immersion focusing on infrastructure & digital literacy.',
  },
  {
    icon: CheckCircle2,
    title: 'Palliative & Elderly Support',
    desc: 'Regular visits, essential kits, and fundraising with local charitable trusts.',
  },
];

export const NssOutreachPage: React.FC<Props> = ({
  onNavigate,
  onOpenApply,
  onOpenTour,
}) => {
  return (
    <StudentLifeLayout
      activeRoute="nss-outreach"
      badge="NSS and Social Outreach"
      title="NSS Units 140 & 591:"
      accentTitle="Engineering for Society."
      subtitle="Engineering with empathy through rural solar drives, blood donation camps, eco-restoration, and community service across Thrissur & Palakkad."
      heroImage="/assets/club_nss.jpg"
      heroCaption="Not Me, But You • NSS Kerala"
      heroVariant="arch"
      stats={[
        { value: '200+', label: 'Active Volunteers', sub: 'NSS Units 140 & 591' },
        { value: '15+', label: 'Health & Blood Camps', sub: 'Annual Medical Drives' },
        { value: '5', label: 'Adopted Panchayats', sub: 'Thrissur & Palakkad' },
        { value: '7 Days', label: 'Annual Special Camp', sub: 'Rural Development' },
      ]}
      onNavigate={onNavigate}
      onOpenApply={onOpenApply}
      onOpenTour={onOpenTour}
    >
      {/* Mission Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealBlock direction="up">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#250836] via-[#340D4C] to-[#1D042B] text-white border border-[#DFC06A]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30 inline-flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5" />
                Social Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif]">
                Not Me, But You — Community Impact Across Kerala
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Jyothi NSS volunteers actively engage in village electrification, blood donation drives, eco-sanitation campaigns, solar lantern distribution to underprivileged communities, and flood relief aid across Thrissur and Palakkad.
              </p>
            </div>
            <button
              onClick={onOpenTour}
              className="px-6 py-3 rounded-full bg-[#DFC06A] text-[#250836] font-extrabold text-xs sm:text-sm shadow hover:brightness-110 transition-all shrink-0 cursor-pointer"
            >
              Explore Campus Tour
            </button>
          </div>
        </RevealBlock>

        {/* 3 Core Outreach Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NSS_INITIATIVES.map((nss, idx) => (
            <RevealBlock
              key={nss.title}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 150}
              className="h-full"
            >
              <div className="h-full rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={nss.image}
                      alt={nss.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#250836]/65 via-transparent to-transparent" />
                    <span className="absolute top-3.5 left-3.5 text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50/95 text-emerald-900 border border-emerald-200 inline-flex items-center gap-1 shadow-xs">
                      <Heart className="w-3 h-3 text-emerald-700" />
                      {nss.tag}
                    </span>
                  </div>
                  <div className="p-6 space-y-2.5">
                    <h4 className="font-bold text-lg font-['Playfair_Display',serif] text-[#250836]">
                      {nss.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {nss.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-5 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-700">
                  NSS Units 140 &amp; 591 • Active Volunteers
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="text-xl sm:text-2xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
          Key Flagship Outreach Programmes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {IMPACT_DRIVES.map((drive, idx) => {
            const Icon = drive.icon;
            return (
              <RevealBlock
                key={idx}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 150}
                className="h-full"
              >
                <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base font-brand text-[#250836]">{drive.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{drive.desc}</p>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>
    </StudentLifeLayout>
  );
};
