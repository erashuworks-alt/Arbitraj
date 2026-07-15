import React from 'react';
import { Activity, Server, Database, Globe, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

export function SystemStatusWidget() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const services = [
    { name: 'Event Hub', status: 'Healthy', latency: '4ms', icon: <Activity size={14} /> },
    { name: 'Market Sniper', status: 'Healthy', latency: '12ms', icon: <Server size={14} /> },
    { name: 'Risk Engine', status: 'Optimal', latency: '1ms', icon: <Database size={14} /> },
    { name: 'Auth Gateway', status: 'Healthy', latency: '28ms', icon: <Globe size={14} /> },
  ];

  return (
    <Card className="p-8 border-slate-800 bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] h-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-400">
            <Activity size={20} />
          </div>
          <h3 className="text-lg font-black text-white tracking-tighter">System Infrastructure</h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Global Healthy</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((svc) => (
          <div key={svc.name} className="p-4 bg-slate-800/20 border border-white/5 rounded-2xl hover:bg-slate-800/40 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="p-1.5 bg-slate-900 rounded-lg text-slate-500 group-hover:text-indigo-400 transition-colors">
                {svc.icon}
              </div>
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                <CheckCircle2 size={10} /> {svc.status}
              </span>
            </div>
            <div className="text-xs font-black text-white mb-1">{svc.name}</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Latency: {svc.latency}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
