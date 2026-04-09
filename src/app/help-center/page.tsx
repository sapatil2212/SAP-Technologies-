'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search, Rocket, CreditCard, AlertTriangle, ArrowRight,
  ExternalLink, MessageCircle, Mail, BookOpen, Settings, FileText
} from 'lucide-react';

const categories = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Getting Started',
    desc: 'Everything you need to know to get your first AI-powered workspace up and running.',
    articles: ['Quick Start Guide', 'First AI Configuration', 'Importing your data', 'View all topics'],
    count: 8,
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Account & Billing',
    desc: 'Manage subscriptions, invoices, and user permissions.',
    articles: ['Subscription plans', 'Update payment method', 'Cancel or pause plan', 'Seat management'],
    count: 6,
  },
];

const troubleshooting = [
  'Connection Issues with Obsidian',
  'API Response Timeouts',
  'Legacy data migration',
];

const popularSearches = ['Setting up API keys', 'Billing dashboard', 'Obsidian integration'];

export default function HelpCenterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: 'Technical Issue',
    message: '',
  });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="text-xs font-medium text-accent">SUPPORT CENTER</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            How can we help <span className="gradient-text">you?</span>
          </h1>

          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search for guides, features, or troubleshooting..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-surface-1 border border-border text-sm text-white placeholder:text-muted"
            />
          </div>

          <div className="flex items-center justify-center gap-3 mt-4 text-xs text-muted flex-wrap">
            <span>Popular:</span>
            {popularSearches.map((s, i) => (
              <button key={i} className="px-3 py-1 rounded-full bg-surface-1 border border-border hover:bg-surface-2 hover:text-white transition-colors">
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            {categories.map((cat, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    {cat.icon}
                  </div>
                  <span className="text-xs text-muted bg-surface-2 px-2 py-1 rounded">{cat.count} ARTICLES</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">{cat.desc}</p>
                <div className="space-y-2">
                  {cat.articles.map((a, j) => (
                    <Link key={j} href="#" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface-2 transition-colors group">
                      <FileText className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                      <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">{a}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting + Featured Video */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Troubleshooting */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold text-white">Troubleshooting</h3>
              </div>
              <p className="text-sm text-muted mb-6">Fix common errors and learn about platform limitations.</p>
              <div className="space-y-2">
                {troubleshooting.map((item, i) => (
                  <Link key={i} href="#" className="block p-3 rounded-lg bg-surface-1 border border-border hover:border-accent/20 transition-colors text-sm text-muted-foreground hover:text-white">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Video */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted">FEATURED VIDEO</span>
              </div>
              <div className="aspect-video bg-gradient-to-br from-amber-900/30 to-surface-1 rounded-xl border border-border mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-8 border-l-accent border-y-5 border-y-transparent ml-1" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Mastering Advanced Prompt Engineering in Caps AI
              </h4>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Take your productivity to the next level with our deep-dive into the obsidian-like logic engine. Learn to automate complex research workflows.
              </p>
              <Link href="#" className="glow-button px-5 py-2.5 text-sm font-medium text-white rounded-full inline-flex items-center gap-2">
                Watch Tutorial <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Left */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Couldn&apos;t find what you need?
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-8">
                Our support engineering team is available 24/7 for premium users and during business hours for all other tiers. We typically respond in under 4 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-1 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Live Chat</p>
                    <p className="text-xs text-muted">Available Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-1 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Email Support</p>
                    <p className="text-xs text-muted">support@capsai.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="glass-card rounded-2xl p-8">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-muted mb-1.5 uppercase tracking-wider">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-1 border border-border text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-1.5 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-1 border border-border text-sm text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1.5 uppercase tracking-wider">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-1 border border-border text-sm text-white"
                  >
                    <option>Technical Issue</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-1 border border-border text-sm text-white placeholder:text-muted resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full glow-button py-3 rounded-full text-sm font-semibold text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
