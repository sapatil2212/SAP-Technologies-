import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, CalendarClock, BarChart3, Zap, Shield, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn how Caps AI helps you create, schedule, and optimize your social media content with AI.',
};

const steps = [
  {
    number: '01',
    icon: <Sparkles className="w-7 h-7" />,
    title: 'Connect Your Accounts',
    description: 'Link your social media profiles in seconds. We support Instagram, Facebook, Twitter, LinkedIn, Pinterest, and YouTube — all from a single dashboard.',
    details: [
      'One-click OAuth authentication',
      'Secure token management',
      'Manage multiple brands & profiles',
    ],
  },
  {
    number: '02',
    icon: <Layers className="w-7 h-7" />,
    title: 'Generate AI Content',
    description: 'Upload an image or describe your idea, and our AI generates captions, hashtags, and even image variants tailored to each platform.',
    details: [
      'GPT-powered caption generation',
      'Platform-specific formatting',
      'Brand voice customization',
    ],
  },
  {
    number: '03',
    icon: <CalendarClock className="w-7 h-7" />,
    title: 'Schedule & Publish',
    description: 'Use our intelligent scheduler to post at optimal times. Queue weeks of content in minutes with drag-and-drop simplicity.',
    details: [
      'AI-optimized post timing',
      'Visual content calendar',
      'Bulk scheduling support',
    ],
  },
  {
    number: '04',
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Analyze & Optimize',
    description: 'Track performance across all platforms with unified analytics. Get AI recommendations to continuously improve your content strategy.',
    details: [
      'Cross-platform analytics',
      'Sentiment tracking',
      'Automated A/B testing',
    ],
  },
];

const stats = [
  { value: '10x', label: 'Faster content creation' },
  { value: '300%', label: 'Average engagement increase' },
  { value: '50M+', label: 'Posts scheduled monthly' },
  { value: '99.9%', label: 'Platform uptime' },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Zap className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium text-accent">Simple & Powerful</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            How <span className="gradient-text">Caps AI</span> works
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            From connecting your accounts to publishing optimized content — see how Caps AI turns your ideas into engaging social media posts in four simple steps.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-start gap-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-accent/20">{step.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="bg-surface-1 rounded-xl border border-border p-6 aspect-[4/3] flex items-center justify-center">
                    <div className="w-full space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-3 w-3/4 bg-surface-3 rounded" />
                        <div className="h-3 w-1/2 bg-surface-3 rounded" />
                        <div className="h-8 w-full bg-accent/10 rounded-lg border border-accent/20 mt-4" />
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="h-16 bg-surface-2 rounded-lg border border-border" />
                          <div className="h-16 bg-surface-2 rounded-lg border border-border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-10 glow-border">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{s.value}</p>
                  <p className="text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted mb-10">
            Join thousands of creators and businesses already using Caps AI.
          </p>
          <Link
            href="/pricing"
            className="glow-button px-8 py-3.5 text-sm font-semibold text-white rounded-full inline-flex items-center gap-2"
          >
            Start for free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
