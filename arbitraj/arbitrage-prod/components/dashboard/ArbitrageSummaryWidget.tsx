import React from 'react';
import { TrendingUp, DollarSign, Zap, BarChart2, ArrowUpRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

export function ArbitrageSummaryWidget() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const stats = [
    { label: 'Total Volume', value: '$42,850.20', change: '+12.5%', icon: <DollarSign size={16} />, color: 'text-emerald-400' },
    { label: 'Net Profit', value: '$3,120.45', change: '+8.2%', icon: <TrendingUp size={16} />, color: 'text-indigo-400' },
    { label: 'Total Trades', value: '1,284', change: '+15.4%', icon: <Zap size={16} />, color: 'text-blue-400' },
    { label: 'Avg ROI', value: '7.28%', change: '+0.5%', icon: <BarChart2 size={16} />, color: 'text-amber-400' },
  ];

  return (
    <Card className="p-8 border-slate-800 bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] h-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-400">
            <BarChart2 size={20} />
          </div>
          <h3 className="text-lg font-black text-white tracking-tighter">Arbitrage Performance</h3>
        </div>
        <button className="p-2 text-slate-500 hover:text-white transition-colors">
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
              {stat.icon}
              {stat.label}
            </div>
            <div className={`text-2xl font-black ${stat.color} tracking-tighter tabular-nums mb-1`}>
              {stat.value}
            </div>
            <div className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
              <ArrowUpRight size={10} /> {stat.change} <span className="text-slate-600 ml-1 font-medium italic">this month</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
