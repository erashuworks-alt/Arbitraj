'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SupportModal } from '@/components/dashboard/SupportModal';
import { motion } from 'framer-motion';
import { User, ExternalLink } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

interface Partner {
  id: string;
  name: string;
  logo: string;
  link: string;
}

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [supportOpen, setSupportOpen] = useState(false);
  const { language } = useLanguageStore();
  const t = translations[language];

  useEffect(() => {
    fetch('/api/admin/partners')
      .then(res => res.json())
      .then(data => {
        setPartners(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const defaultAvatar = (name: string) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=0f172a`;

  return (
    <div className="min-h-screen bg-[#080b10] text-slate-100 font-sans selection:bg-indigo-500/30 flex flex-col">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-20 flex-1 w-full">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6"
          >
            <User size={14} className="text-indigo-400" />
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">Resmi Ortaklar ve Yayıncılar</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6"
          >
            Topluluk <span className="text-indigo-500">Ekosistemimiz</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
          >
            Erashu Engine altyapısını kullanan ve destekleyen en büyük içerik üreticileri ve resmi ortaklarımızla tanışın.
          </motion.p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="h-64 bg-slate-900/50 rounded-[3rem] animate-pulse border border-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <Card className="p-10 flex flex-col items-center gap-8 transition-all duration-500 group-hover:bg-slate-800/40 group-hover:border-indigo-500/30 group-hover:-translate-y-3 rounded-[3rem] border-white/5 bg-slate-900/20">
                  <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-slate-800 to-slate-700 group-hover:from-indigo-600 group-hover:to-violet-600 transition-all duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-900 bg-slate-800 shadow-2xl">
                      <img 
                        src={p.logo && p.logo.startsWith('http') ? p.logo : (p.logo || defaultAvatar(p.name))} 
                        alt={p.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors flex items-center justify-center gap-2 mb-2">
                      {p.name}
                      <ExternalLink size={16} className="text-indigo-500" />
                    </h3>
                    <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                      Doğrulanmış Ortak
                    </span>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        )}

        {partners.length === 0 && !loading && (
          <div className="py-20 text-center bg-slate-900/40 rounded-[3rem] border border-dashed border-slate-800">
            <User size={48} className="mx-auto text-slate-700 mb-4" />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Henüz kayıtlı ortak bulunmuyor.</p>
          </div>
        )}
      </main>

      <Footer setSupportOpen={setSupportOpen} />
      <SupportModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
    </div>
  );
}
