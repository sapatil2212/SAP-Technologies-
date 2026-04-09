import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Portfolio & Case Studies | SAP Tech',
  description: 'Explore the digital success stories we have engineered for our clients, from high-performance app developments to explosive digital marketing growth campaigns.',
};

const projects = [
  { id: 1, title: 'E-Commerce Scaling', category: 'Growth Marketing', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'SaaS Platform UI/UX', category: 'Web Development', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Local SEO Domination', category: 'Search Engine Optimization', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'B2B Lead Generation', category: 'Digital Advertising', img: 'https://images.unsplash.com/photo-1432888117426-15c01b92c4cb?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Fintech Mobile App', category: 'App Development', img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Corporate Branding', category: 'Brand Identity', img: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=800' },
];

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
            Our Work Speaks for <span className="text-accent italic">Itself</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Browse through our portfolio of successful digital transformations and high-impact marketing campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-100 dark:bg-[#111]">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Project <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div>
                <div className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
