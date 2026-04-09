import React from 'react';
import { Metadata } from 'next';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// Helper function to format the URL slug into a readable title string
function formatSlug(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

type Props = {
  params: { service: string };
};

// Next.js dynamic metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const serviceName = formatSlug(params.service);
  return {
    title: `${serviceName} Services | SAP Tech`,
    description: `Expert ${serviceName} solutions by SAP Tech designed to streamline your business and maximize your digital footprint.`,
  };
}

export default function ServicePage({ params }: Props) {
  const serviceName = formatSlug(params.service);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 bg-accent/10 border border-accent/30 text-accent">
              Expert Service Area
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white leading-tight mb-6">
              Innovative <span className="text-accent italic">{serviceName}</span> Solutions
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Elevate your digital footprint with our industry-leading <strong>{serviceName.toLowerCase()}</strong> strategies. 
              We build custom solutions focused on scalability, performance, and long-term ROI. Let us turn your vision into 
              measurable success.
            </p>
            <Link href="/contact" className="glow-button inline-flex px-8 py-3.5 rounded-full text-white font-bold">
              Consult with an Expert
            </Link>
          </div>
          
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={`https://source.unsplash.com/800x600/?technology,${params.service}`} 
              alt={`${serviceName} Implementation`} 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback image in case unsplash keyword search fails
                e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>
        </div>

        {/* Service Features Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Our {serviceName} Stack?</h2>
          <p className="text-slate-600 dark:text-slate-400">Our approach to {serviceName.toLowerCase()} goes beyond the standard best practices.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Data-Backed Strategy', desc: 'Every decision is powered by analytics and precise market insights to guarantee performance.' },
            { title: 'Custom Implementations', desc: 'We do not believe in cookie-cutter solutions. Everything is tailored precisely to your brand.' },
            { title: 'Scalable Architecture', desc: 'Built for the future. Our setups ensure your infrastructure scales seamlessly as your traffic grows.' },
            { title: 'Seamless Integration', desc: 'We hook directly into your existing CRM and tech stack without any friction or downtime.' },
            { title: 'Performance Audits', desc: 'Constant monitoring and iterative enhancements keep you ahead of your fiercest competitors.' },
            { title: 'Full Transparency', desc: 'You retain complete ownership of your data with crystal-clear reporting cycles.' },
          ].map((feature, i) => (
            <div key={i} className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 className="w-24 h-24 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm relative z-10">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
