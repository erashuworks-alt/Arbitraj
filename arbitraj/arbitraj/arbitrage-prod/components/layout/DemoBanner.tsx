import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import { AlertCircle, ZapOff, ArrowRight } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';

export function DemoBanner() {
  const { appMode, setAppMode } = useAppStore();
  const { language } = useLanguageStore();

  if (appMode !== 'demo') return null;

  return (
    <div className="bg-indigo-600/10 border-b border-indigo-500/20 backdrop-blur-md sticky top-0 z-[60]">
      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
          {language === 'tr' ? 'DEMO MODU AKTİF' : 'DEMO MODE ACTIVE'}
          <span className="mx-2 opacity-30 text-slate-500">|</span>
          <span className="text-slate-400 font-bold lowercase tracking-tight normal-case opacity-70">
            {language === 'tr' ? 'Gerçek veriler kullanılıyor, işlemler simüle edilir.' : 'Using real-time data, executions are simulated.'}
          </span>
        </div>
        
        <button 
          onClick={() => setAppMode('live')}
          className="flex items-center gap-1.5 px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-[9px] font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-600/20 group"
        >
          {language === 'tr' ? 'CANLI MODA GEÇ' : 'SWITCH TO LIVE'}
          <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
