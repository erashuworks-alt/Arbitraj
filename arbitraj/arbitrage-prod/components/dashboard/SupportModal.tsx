'use client';

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { X, Send, User, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.email.toLowerCase().endsWith('@gmail.com')) {
      setError('Yalnızca @gmail.com uzantılı e-posta adresleri kabul edilmektedir.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 3000);
      } else {
        const data = await res.json();
        setError(data.details ? `${data.message}: ${data.details}` : (data.message || 'Bir hata oluştu.'));
      }
    } catch (err) {
      setError('Bağlantı hatası.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-lg animate-in zoom-in-95 duration-300">
        <Card className="relative p-8 border-indigo-500/20 bg-slate-900 shadow-2xl rounded-[2.5rem]">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/20">
              <MessageSquare size={32} />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">Destek Ekibi</h2>
            <p className="text-slate-500 text-sm mt-1 text-center">Bize mesajınızı bırakın, en kısa sürede dönüş yapalım.</p>
          </div>

          {success ? (
            <div className="py-12 flex flex-col items-center text-center animate-in zoom-in-95">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mesajınız Alındı!</h3>
              <p className="text-slate-500">Destek ekibimiz e-posta adresiniz üzerinden sizinle iletişime geçecektir.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <User size={12} /> Ad Soyad
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ahmet Yılmaz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Mail size={12} /> E-posta
                </label>
                <input
                  required
                  type="email"
                  placeholder="ahmet@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors"
                />
                <p className="text-[9px] text-slate-600 font-bold uppercase tracking-wider mt-1">Lütfen yalnızca @gmail.com adresi kullanın</p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={12} /> Mesajınız
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Size nasıl yardımcı olabiliriz?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors resize-none"
                />
              </div>

              {error && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs font-bold">
                  {error}
                </div>
              )}

              <Button type="submit" disabled={loading} className="w-full py-4 text-sm font-black uppercase tracking-widest">
                {loading ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
