import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, Sparkles, CalendarClock, BarChart3, ImagePlus,
  Shield, Users, Palette, Plug, Check
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore the powerful features of Caps AI — AI content generation, smart scheduling, unified inbox, advanced analytics and more.',
};

const mainFeatures = [
  {
    icon: <Sparkles className="w-7 h-7" />,
    label: 'ACTIVE INTELLIGENCE',
    title: 'AI Content Generator',
    description: 'Transform raw ideas into editorial pieces. Our content engine analyzes, understands your brand voice, creating long-form content, social snippets, and high-conversion copy in seconds.',
    subFeatures: ['Content Sync — Sync with your knowledge base.', 'Style Mirror — Match your specific writing style.'],
    visual: 'generator',
  },
  {
    icon: <CalendarClock className="w-7 h-7" />,
    title: 'Smart Scheduling',
    description: 'The calendar that thinks ahead. Autonomously find the best time to post your content based on historical engagement patterns and team availability.',
    subFeatures: ['Post Engagement Trail', 'Manual Override'],
    visual: 'calendar',
  },
];

const secondaryFeatures = [
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Unified Inbox',
    description: 'Every conversation, from every platform, in one editorial-grade dashboard. No more tab switching — just pure focus on communication.',
    visual: 'inbox',
  },
  {
    icon: <ImagePlus className="w-7 h-7" />,
    title: 'Advanced Analytics',
    description: 'Deep-dive metrics that go beyond likes and clicks. Understand the emotional resonance of your content with AI sentiment tracking.',
    stats: ['Prediction ROI modeling', 'Sentiment drift analysis'],
    value: '+124%',
    visual: 'analytics',
  },
];

const quickFeatures = [
  { icon: <Shield className="w-6 h-6" />, title: 'Enterprise Privacy', desc: 'Your data is yours. Period. Local-first enc system for every thought and draft.' },
  { icon: <Plug className="w-6 h-6" />, title: '200+ Integrations', desc: 'Connect to Slack, Discord, Notion, and more critical platforms you use with near-zero config.' },
  { icon: <Users className="w-6 h-6" />, title: 'Team Sync', desc: 'Multiplayer collaboration with real-time editing and a protocol team loves to use.' },
  { icon: <Palette className="w-6 h-6" />, title: 'Custom Themes', desc: 'Personalize your workspace to match your creative style with obsidian + custom themes.' },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-32 left-1/4 w-[500px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="text-xs font-medium text-accent">CAPABILITIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Crafting the <span className="gradient-text">Obsidian Era</span>{' '}
            of Productivity.
          </h1>
          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            Experience a suite of tools designed to feel like high-end editorial software. Caps AI merges industrial-strength intelligence with a refined aesthetic for modern creators.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-5">
            {/* AI Content Generator - large */}
            <div className="lg:col-span-3 glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-bl-full" />
              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-4">{mainFeatures[0].label}</p>
                <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-accent mb-6">
                  {mainFeatures[0].icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{mainFeatures[0].title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 max-w-lg">{mainFeatures[0].description}</p>
                <div className="space-y-2">
                  {mainFeatures[0].subFeatures.map((sf, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{sf}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Smart Scheduling */}
            <div className="lg:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-accent mb-6">
                {mainFeatures[1].icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{mainFeatures[1].title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">{mainFeatures[1].description}</p>
              <div className="space-y-2">
                {mainFeatures[1].subFeatures.map((sf, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-xs text-muted-foreground">{sf}</span>
                  </div>
                ))}
              </div>
              {/* Mini calendar mock */}
              <div className="mt-6 bg-surface-1 rounded-xl border border-border p-3">
                <div className="grid grid-cols-7 gap-1">
                  {[...Array(28)].map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded flex items-center justify-center text-[10px] ${
                        [5, 12, 18, 24].includes(i)
                          ? 'bg-accent/20 text-accent'
                          : 'text-muted/40'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Features Row */}
          <div className="grid lg:grid-cols-2 gap-5 mt-5">
            {/* Unified Inbox */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-3">{secondaryFeatures[0].title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">{secondaryFeatures[0].description}</p>
              {/* Mock inbox */}
              <div className="bg-surface-1 rounded-xl border border-border p-4 space-y-2">
                {['Instagram — New comment on post', 'Twitter — DM from @user', 'LinkedIn — Connection request'].map((msg, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-2 transition-colors">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-accent' : 'bg-surface-3'}`} />
                    <span className="text-xs text-muted-foreground">{msg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Analytics */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-3">{secondaryFeatures[1].title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">{secondaryFeatures[1].description}</p>
              <div className="flex items-center gap-3 mb-4">
                {secondaryFeatures[1].stats?.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-xs text-muted-foreground">{s}</span>
                  </div>
                ))}
              </div>
              {/* Mock chart */}
              <div className="bg-surface-1 rounded-xl border border-border p-4 flex items-end justify-between h-32">
                <div className="flex items-end gap-1 h-full flex-1">
                  {[40, 55, 35, 70, 60, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `linear-gradient(to top, rgba(249,115,22,0.3), rgba(249,115,22,0.05))` }} />
                  ))}
                </div>
                <p className="text-3xl font-bold gradient-text ml-4">{secondaryFeatures[1].value}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickFeatures.map((f, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to enter the future of content?
          </h2>
          <p className="text-muted mb-10">
            Join 50,000+ creators who are scaling their impact with Caps AI.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/pricing" className="glow-button px-8 py-3.5 text-sm font-semibold text-white rounded-full inline-flex items-center gap-2">
              Start for free
            </Link>
            <Link href="/help-center" className="px-8 py-3.5 text-sm font-medium text-white rounded-full border border-border hover:bg-white/5 transition-colors">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
