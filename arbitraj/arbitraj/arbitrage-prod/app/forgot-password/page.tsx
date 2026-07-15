'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TrendingUp, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
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
          <h1 className="text-2xl font-black text-white tracking-tight">Şifremi Unuttum</h1>
          <p className="text-slate-500 text-sm mt-2 text-center">E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.</p>
        </div>

        <Card className="p-8 border-slate-800 bg-slate-900/50">
          {message ? (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 size={32} />
              </div>
              <p className="text-sm text-slate-300">{message}</p>
              <Link href="/login" className="block">
                <Button className="w-full py-4">Giriş Ekranına Dön</Button>
              </Link>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Mail size={12} /> E-posta Adresi
                </label>
                <input 
                  required
                  type="email" 
                  placeholder="isim@sirket.com"
                  className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              {error && <div className="text-xs text-red-400 font-bold bg-red-400/10 p-3 rounded-lg border border-red-400/20">{error}</div>}

              <Button type="submit" className="w-full py-4" disabled={loading}>
                {loading ? 'Gönderiliyor...' : 'Sıfırlama Bağlantısı Gönder'}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          )}
        </Card>

        <p className="text-center mt-8 text-sm text-slate-500">
          Hatırladınız mı? <Link href="/login" className="text-indigo-400 font-bold hover:text-indigo-300">Giriş Yap</Link>
        </p>
      </div>
    </div>
  );
}
