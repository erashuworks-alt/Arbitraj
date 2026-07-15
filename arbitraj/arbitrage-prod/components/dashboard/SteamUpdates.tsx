import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Rss } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

export function SteamUpdates() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const UPDATES = [
    { date: language === 'tr' ? '24 Eki' : 'Oct 24', title: t.steam.update1Title, excerpt: t.steam.update1 },
    { date: language === 'tr' ? '18 Eki' : 'Oct 18', title: t.steam.update2Title, excerpt: t.steam.update2 },
    { date: language === 'tr' ? '12 Eki' : 'Oct 12', title: t.steam.update3Title, excerpt: t.steam.update3 },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">{t.steam.title}</h3>
        <Rss size={14} className="text-slate-600" />
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800">
          {UPDATES.map((update, i) => (
            <div key={i} className="px-6 py-4 border-b border-slate-800/50 last:border-0 hover:bg-slate-800/20 transition-colors">
              <div className="text-[10px] text-slate-600 font-bold mb-1">{update.date}</div>
              <h4 className="text-xs font-bold text-white mb-1">{update.title}</h4>
              <p className="text-[11px] text-slate-500 leading-tight">{update.excerpt}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
