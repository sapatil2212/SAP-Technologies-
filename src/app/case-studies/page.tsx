import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, TrendingUp, Users, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how forward-thinking teams use Caps AI to transform raw data into sharp, AI-driven experiences.',
};

const featuredStudy = {
  badge: 'LUMINA CREATIVE AGENCY',
  initial: 'LCA',
  title: 'How Lumina increased engagement by 300%',
  stats: [
    { value: '12.5k', label: 'Active Users Monthly' },
    { value: '40%', label: 'Churn Reduction' },
  ],
  quote: '"Caps AI didn\'t just organize our content. It manifested how our clients experience their digital value. The Obsidian interface is a game changer."',
};

const secondStudy = {
  badge: 'HYDRA MATERIALS',
  title: 'Global Logistics: Transmuting Complexity into Pure Clarity.',
  checks: [
    'Centralized 10 fragmented supply systems into a single obsidian interface.',
    'Automated editorial tracking across 30+ monthly assets.',
  ],
  stats: [
    { value: '98%', label: 'Customer Satisfaction Score' },
  ],
};

const miniStudies = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    color: 'text-red-400',
    title: 'Hyper-growth for NeoBank',
    desc: 'How a fintech startup used Caps AI to scale their personalized insights to 1M+ users in under 6 months.',
    stat: '8.2x',
    statLabel: 'User growth multiplier',
  },
  {
    icon: <Award className="w-5 h-5" />,
    color: 'text-accent',
    bigStat: '312%',
    bigLabel: 'Average ROI',
    desc: 'Across all enterprise partnerships in 2024.',
    title: 'AVERAGE ROI',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    color: 'text-blue-400',
    stat: '24h',
    statLabel: 'Average results delivery turnaround per team',
    title: 'TIME SAVED',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="text-xs font-medium text-accent">CUSTOMER STORIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            The Obsidian<br /><span className="gradient-text">Impact.</span>
          </h1>
          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            Explore how forward-thinking teams use Caps AI to transmute raw data into sharp, AI-driven experiences that drive massive engagement.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl overflow-hidden lg:grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-surface-2 via-surface-1 to-surface-0 relative flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-amber-900/20 to-surface-1 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-3xl font-bold gradient-text">{featuredStudy.initial}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">
                  {featuredStudy.initial.substring(0, 2)}
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted">{featuredStudy.badge}</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                {featuredStudy.title}
              </h2>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {featuredStudy.stats.map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold gradient-text">{s.value}</p>
                    <p className="text-xs text-muted mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground italic leading-relaxed border-l-2 border-accent/30 pl-4 mb-6">
                {featuredStudy.quote}
              </blockquote>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors">
                Read full story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Second Study */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 lg:p-10 lg:grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent/60 mb-4">{secondStudy.badge}</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                Global Logistics: Transmuting Complexity into{' '}
                <span className="gradient-text">Pure Clarity.</span>
              </h3>
              <div className="space-y-3 mb-6">
                {secondStudy.checks.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
              <div className="glass-card rounded-xl p-6 inline-block">
                <p className="text-4xl font-bold gradient-text">{secondStudy.stats[0].value}</p>
                <p className="text-xs text-muted mt-1">{secondStudy.stats[0].label}</p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 flex items-center justify-center">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-surface-2 to-surface-1 rounded-xl border border-border flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-accent/5 border border-accent/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Studies */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {miniStudies.map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <div className={`w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center ${s.color} mb-4`}>
                  {s.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{s.title}</h4>
                <p className="text-sm text-muted leading-relaxed mb-4">{s.desc}</p>
                {s.stat && (
                  <p className="text-3xl font-bold gradient-text">{s.stat}</p>
                )}
                {s.bigStat && (
                  <p className="text-4xl font-bold gradient-text">{s.bigStat}</p>
                )}
                {s.statLabel && (
                  <p className="text-xs text-muted mt-1">{s.statLabel}</p>
                )}
                {s.bigLabel && (
                  <p className="text-xs text-muted mt-1">{s.bigLabel}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">The Next Frontier</h2>
          <p className="text-muted mb-8">Join 200+ world-class teams building on the Obsidian stack. Start your own clarity journey.</p>
          <Link href="/pricing" className="glow-button px-8 py-3.5 text-sm font-semibold text-white rounded-full inline-flex items-center gap-2">
            Apply for Pilot <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
