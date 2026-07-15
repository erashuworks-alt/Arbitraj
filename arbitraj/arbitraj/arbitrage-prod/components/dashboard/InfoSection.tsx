import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { Info, BarChart3, ShieldCheck } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

export function InfoSection() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const [cmsData, setCmsData] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    fetch('/api/admin/cms')
      .then(res => res.json())
      .then(data => setCmsData(data))
      .catch(err => console.error('Failed to load CMS data', err));
  }, []);

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-slate-900/40 border-slate-800/40">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {cmsData[`${language}:info.whatIs.title`] || cmsData['info.whatIs.title'] || t.info.whatIs}
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {cmsData[`${language}:info.whatIs.description`] || cmsData['info.whatIs.description'] || t.info.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                <ShieldCheck size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white mb-1">{t.info.secureExecution}</div>
                  <div className="text-[11px] text-slate-500">{t.info.secureDesc}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/40 border-slate-800/40">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <BarChart3 size={20} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {cmsData[`${language}:info.scenario.title`] || cmsData['info.scenario.title'] || t.info.profitScenario}
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mb-1">{t.info.buyOrder}</div>
                  <div className="text-lg font-black text-white">$100.00</div>
                </div>
                <div className="h-0.5 flex-1 mx-4 bg-slate-800 mb-2 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-black text-emerald-400 uppercase">+15.5%</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mb-1">{t.info.sellOrder}</div>
                  <div className="text-lg font-black text-white">$115.50</div>
                </div>
              </div>
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">
                    {cmsData[`${language}:info.scenario.netProfitLabel`] || cmsData['info.scenario.netProfitLabel'] || t.info.netProfit}
                  </span>
                  <span className="text-emerald-400 font-black">+$11.20</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
