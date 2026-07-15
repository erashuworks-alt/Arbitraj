'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { TrendingUp, User, Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.ok) {
        window.location.href = '/login';
      } else {
        const data = await res.json();
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080b10] flex items-center justify-center px-6 selection:bg-indigo-500/30">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-10">
          <div className="p-3 bg-indigo-600 rounded-2xl mb-4 shadow-xl shadow-indigo-600/20">
            <TrendingUp size={28} className="text-white" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Create Institutional Account</h1>
          <p className="text-slate-500 text-sm mt-2">Join the elite arbitrage network</p>
        </div>

        <Card className="p-8 border-slate-800 bg-slate-900/50">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <User size={12} /> Full Name
              </label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors"
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Mail size={12} /> Business Email
              </label>
              <input 
                required
                type="email" 
                placeholder="name@company.com"
                className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors"
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Lock size={12} /> Secure Password
              </label>
              <input 
                required
                type="password" 
                placeholder="••••••••"
                className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors"
                onChange={e => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {error && <div className="text-xs text-red-400 font-bold bg-red-400/10 p-3 rounded-lg border border-red-400/20">{error}</div>}

            <Button type="submit" className="w-full py-4" disabled={loading}>
              {loading ? 'Processing...' : 'Complete Registration'}
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </form>
        </Card>

        <p className="text-center mt-8 text-sm text-slate-500">
          Already have an account? <Link href="/login" className="text-indigo-400 font-bold hover:text-indigo-300">Log in</Link>
        </p>
      </div>
    </div>
  );
}
