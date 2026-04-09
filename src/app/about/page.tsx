import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | SAP Tech',
  description: 'Learn about SAP Tech, a leading digital marketing and software development agency dedicated to scaling brands and driving business growth.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Driving Digital <span className="text-accent italic">Excellence</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              At SAP Tech, we believe that every business has the potential to dominate their digital landscape. We combine cutting-edge software development with data-driven marketing strategies to engineer sustainable, explosive growth.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Years Experience</div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden relative shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="SAP Tech Team Collaboration" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
            </div>
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
