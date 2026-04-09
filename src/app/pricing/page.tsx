'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    desc: 'Perfect for individuals just getting started with social media.',
    priceMonthly: 0,
    priceYearly: 0,
    cta: 'Get Started — Free',
    popular: false,
    features: [
      '1 Social Account',
      '10 AI Captions / month',
      'Basic Analytics',
      'Standard Support',
      'Content Calendar',
    ],
  },
  {
    name: 'Pro',
    desc: 'For growing creators and small teams who want more power.',
    priceMonthly: 29,
    priceYearly: 24,
    cta: 'Start Pro Trial',
    popular: true,
    features: [
      '5 Social Accounts',
      'Unlimited AI Captions',
      'Advanced Analytics',
      'Priority Support',
      'Content Calendar',
      'Team Collaboration',
      'Custom Brand Voice',
      'Scheduled Posts',
    ],
  },
  {
    name: 'Ultimate',
    desc: 'For agencies and enterprises managing multiple brands.',
    priceMonthly: 79,
    priceYearly: 66,
    cta: 'Contact Sales',
    popular: false,
    features: [
      'Unlimited Social Accounts',
      'Unlimited AI Captions',
      'Enterprise Analytics',
      'Dedicated Account Manager',
      'Content Calendar',
      'Team Collaboration',
      'Custom Brand Voice',
      'Scheduled Posts',
      'API Access',
      'SSO & Security',
      'White-label Reports',
    ],
  },
];

const faqs = [
  { q: 'Can I switch plans later?', a: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.' },
  { q: 'Is there a free trial?', a: 'Yes, all paid plans come with a 14-day free trial. No credit card required to get started.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.' },
  { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.' },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium text-accent">Simple, transparent pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Plans that scale with your <span className="gradient-text">growth</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Start free and upgrade as your audience grows. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <span className={`text-sm ${!yearly ? 'text-white' : 'text-muted'}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-colors ${yearly ? 'bg-accent' : 'bg-surface-3'}`}
              aria-label="Toggle billing frequency"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${yearly ? 'translate-x-6' : ''}`}
              />
            </button>
            <span className={`text-sm ${yearly ? 'text-white' : 'text-muted'}`}>
              Yearly <span className="text-accent text-xs font-medium ml-1">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 relative ${
                  plan.popular
                    ? 'pricing-popular bg-surface-1'
                    : 'glass-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-muted mb-6">{plan.desc}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">
                    ${yearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-sm text-muted">/month</span>
                </div>

                <Link
                  href="#"
                  className={`block text-center py-3 rounded-full text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'glow-button text-white'
                      : 'bg-surface-2 text-white border border-border hover:bg-surface-3'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="mt-8 pt-8 border-t border-border space-y-3">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card rounded-xl group">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-sm font-medium text-white list-none">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-muted group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-muted leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
