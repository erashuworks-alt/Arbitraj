'use client';

import React from 'react';
import Link from 'next/link';
import { TrendingUp, Calculator, Award } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

export function Navbar() {
  const { data: session } = useSession();
  const { language, setLanguage } = useLanguageStore();
  const t = translations[language];

  return (
    <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <TrendingUp size={20} className="text-white" />
          </div>
          <span className="font-black text-xl tracking-tighter text-white">{t.brand.logo}</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
          <Link href="/" className="hover:text-white transition-colors">{t.nav.dashboard}</Link>
          <Link href="/calculator" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2">
            <Calculator size={14} />
            {t.nav.strategy}
          </Link>
          {session?.role === 'admin' && (
            <Link href="/admin" className="text-amber-500 hover:text-amber-400 transition-colors">{t.nav.adminPanel}</Link>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-slate-800/50 rounded-lg p-1 mr-2 border border-slate-700/50">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${language === 'en' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:text-slate-300'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('tr')}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${language === 'tr' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:text-slate-300'}`}
            >
              TR
            </button>
          </div>
          <button 
            onClick={() => signOut()}
            className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mr-2"
          >
            {t.nav.signOut}
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] font-black text-white leading-none mb-1">{session?.user?.name || 'Guest'}</div>
              <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-400 uppercase tracking-widest leading-none">
                <TrendingUp size={10} /> +12.5% Profit
              </div>
            </div>
            <div className="relative group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 border border-indigo-400/20 flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-indigo-500/20">
                {session?.user?.name?.[0] || 'U'}
              </div>
              <div className="absolute -top-1 -right-1 bg-amber-500 w-4 h-4 rounded-full border-2 border-slate-900 flex items-center justify-center text-white shadow-lg">
                <Award size={8} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
