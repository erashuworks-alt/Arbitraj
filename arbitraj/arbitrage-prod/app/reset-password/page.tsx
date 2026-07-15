'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TrendingUp, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setError('Invalid reset link.');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setTimeout(() => {
          router.push('/login');
        }, 3000);
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
          <h1 className="text-2xl font-black text-white tracking-tight">Yeni Şifre Oluştur</h1>
          <p className="text-slate-500 text-sm mt-2 text-center">Lütfen hesabınız için yeni bir şifre belirleyin.</p>
        </div>

        <Card className="p-8 border-slate-800 bg-slate-900/50">
          {message ? (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 size={32} />
              </div>
              <p className="text-sm text-slate-300">{message}</p>
              <p className="text-xs text-slate-500 italic">3 saniye içinde giriş ekranına yönlendiriliyorsunuz...</p>
              <Link href="/login" className="block">
                <Button className="w-full py-4">Hemen Giriş Yap</Button>
              </Link>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Lock size={12} /> Yeni Şifre
                </label>
                <input 
                  required
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Lock size={12} /> Şifre Tekrar
                </label>
                <input 
                  required
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>

              {error && <div className="text-xs text-red-400 font-bold bg-red-400/10 p-3 rounded-lg border border-red-400/20">{error}</div>}

              <Button type="submit" className="w-full py-4" disabled={loading || !token}>
                {loading ? 'Güncelleniyor...' : 'Şifreyi Güncelle'}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
