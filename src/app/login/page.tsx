'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);

  return (
    <section className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative bg-surface-1 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="relative text-center p-16">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-bold text-white">C</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Connect with your audience</h2>
          <p className="text-muted max-w-sm mx-auto">Sign in and supercharge your social media presence.</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 pt-24 lg:pt-12">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-sm text-muted mb-8">Enter your credentials to access your account.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-xs text-muted mb-1.5 uppercase tracking-wider">Email</label>
              <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl bg-surface-1 border border-border text-sm text-white placeholder:text-muted" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs text-muted uppercase tracking-wider">Password</label>
                <Link href="#" className="text-xs text-accent hover:text-accent-light">Forgot password?</Link>
              </div>
              <div className="relative">
                <input type={showPw ? 'text' : 'password'} placeholder="••••••••" className="w-full px-4 py-3 rounded-xl bg-surface-1 border border-border text-sm text-white placeholder:text-muted pr-12" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-white">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full glow-button py-3 rounded-xl text-sm font-semibold text-white">Login</button>
          </form>
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" /><span className="text-xs text-muted">or continue with</span><div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-1 border border-border text-sm text-white hover:bg-surface-2 transition-colors">Google</button>
            <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-1 border border-border text-sm text-white hover:bg-surface-2 transition-colors">GitHub</button>
          </div>
          <p className="text-center text-sm text-muted mt-8">
            Don&apos;t have an account?{' '}<Link href="/register" className="text-accent font-medium">Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
