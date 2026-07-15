import React from 'react';
import { Activity, Cpu, ShieldCheck, Zap, Globe, Lock } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

export function TrustSection() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const features = [
    { icon: <Activity size={24} />, title: t.trustExpanded.uptime, desc: "Global redundant nodes", color: "text-emerald-400" },
    { icon: <Cpu size={24} />, title: t.trustExpanded.speed, desc: "High-frequency execution", color: "text-blue-400" },
    { icon: <Lock size={24} />, title: t.trustExpanded.manipulation, desc: "Pattern recognition active", color: "text-indigo-400" },
    { icon: <Globe size={24} />, title: t.trustExpanded.realtime, desc: "L1 WebSocket connection", color: "text-amber-400" },
  ];

  return (
    <div className="mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="p-8 bg-slate-900/40 border border-white/5 rounded-[2.5rem] backdrop-blur-md hover:bg-slate-800/40 transition-all group">
            <div className={`${f.color} mb-6 group-hover:scale-110 transition-transform`}>
              {f.icon}
            </div>
            <h4 className="text-base font-black text-white mb-2 tracking-tight">{f.title}</h4>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
