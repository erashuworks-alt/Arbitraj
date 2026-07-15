import React, { useEffect, useState } from 'react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useAppStore } from '@/store/useAppStore';
import { translations } from '@/lib/translations';
import { Card } from '../ui/Card';
import { TrendingUp, ArrowRight, CheckCircle2, Zap, BarChart3, Clock } from 'lucide-react';
import { useExchangeAPI } from '@/hooks/useExchangeAPI';
import { ArbitrageOpportunity } from '@/lib/api/exchange';

export function LiveActivity() {
  const { language } = useLanguageStore();
  const { appMode } = useAppStore();
  const api = useExchangeAPI();
  const t = translations[language];

  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [productsSource, setProductsSource] = useState<'api' | 'none'>('none');
  const [executions, setExecutions] = useState<any[]>([]);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const getImageUrl = (item: any) => {
    if (imageErrors[item.id]) {
      return `https://via.assets.so/img.jpg?w=100&h=100&tc=%236366f1&bg=%230f172a&t=${encodeURIComponent(item.item.split('|')[0])}`;
    }
    return item.image;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/market/opportunities?limit=3');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setOpportunities(data.slice(0, 3));
          setProductsSource('api');
        }
      } catch (e) {
        console.warn('API Fetch failed:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  const shouldShowProducts =
    Array.isArray(opportunities) &&
    opportunities.length > 0 &&
    productsSource === 'api';


  const tickerItems = [
    "AK-47 Slate +19.3%", "AWP Asiimov +12.4%", "M4A4 Howl +8.2%", 
    "Glock-18 Fade +15.5%", "Knife Doppler +22.1%", "Gloves Vice +14.8%"
  ];

  return (
    <div className="mb-20">
      {/* Ticker */}
      <div className="bg-indigo-600/10 border-y border-indigo-500/20 py-3 mb-12 overflow-hidden relative group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080b10] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080b10] to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px] font-black text-indigo-400 uppercase tracking-widest">
              <Zap size={12} className="fill-current" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Opportunities */}
        <Card className="p-8 bg-slate-900/40 border-white/5 rounded-[2.5rem]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
                  <BarChart3 size={18} />
                </div>
                <h3 className="text-sm font-black text-white tracking-tight">{t.liveActivity.opportunities}</h3>
              </div>
              {appMode === 'demo' && (
                <span className="text-[9px] font-black text-amber-500 border border-amber-500/30 px-2 py-0.5 rounded-full bg-amber-500/5">SIMULATED</span>
              )}
              <a 
                href="/opportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest"
              >
                {language === 'tr' ? 'Tümünü Gör' : 'View All'} <ArrowRight size={12} />
              </a>
            </div>

          <div className="space-y-4">
            {shouldShowProducts ? (
              opportunities.slice(0, 3).map((opp) => (
                <div key={opp.id} className="p-5 bg-white/5 rounded-2xl border border-white/5 group hover:border-amber-500/30 transition-all flex gap-4">
                  <div className="w-16 h-16 shrink-0 bg-slate-900 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center p-1 relative">
                    <img
                      src={getImageUrl(opp)}
                      alt={opp.item}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                      onError={() => handleImageError(opp.id)}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-white">{opp.item}</span>
                      <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                        <Clock size={10} /> {opp.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="text-[9px] text-slate-600 font-black uppercase tracking-wider mb-0.5">{t.liveActivity.buy}</div>
                          <div className="text-sm font-bold text-slate-300">${opp.buy.toFixed(2)}</div>
                        </div>
                        <ArrowRight size={14} className="text-slate-700" />
                        <div>
                          <div className="text-[9px] text-slate-600 font-black uppercase tracking-wider mb-0.5">{t.liveActivity.sell}</div>
                          <div className="text-sm font-bold text-slate-300">${opp.sell.toFixed(2)}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] text-amber-500 font-black uppercase tracking-wider mb-0.5">{t.liveActivity.profit}</div>
                        <div className="text-sm font-black text-amber-400">+{opp.percent}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-24 bg-slate-800/30 rounded-2xl animate-pulse border border-white/5" />
              ))
            ) : (
              <div className="py-10 text-center">
                <BarChart3 size={28} className="mx-auto mb-3 text-slate-700" />
                <p className="text-sm text-slate-600 font-bold">
                  {language === 'tr' ? 'Ürün bulunamadı veya veri yükleniyor...' : 'No products found or data is loading...'}
                </p>
              </div>
            )}
          </div>

        </Card>

        {/* Live Executions */}
        <Card className="p-8 bg-slate-900/40 border-white/5 rounded-[2.5rem]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                  <Zap size={18} />
                </div>
                <h3 className="text-sm font-black text-white tracking-tight">{t.liveActivity.transactions}</h3>
              </div>
              {appMode === 'demo' && (
                <span className="text-[9px] font-black text-emerald-500 border border-emerald-500/30 px-2 py-0.5 rounded-full bg-emerald-500/5">SIMULATED</span>
              )}
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">{t.liveActivity.ticker}</span>
              </div>
            </div>

          <div className="space-y-4">
            {executions.map((exec) => (
              <div key={exec.id} className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-emerald-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center p-1 relative overflow-hidden">
                    <img 
                      src={getImageUrl(exec)} 
                      alt={exec.item} 
                      className="w-full h-full object-contain" 
                      onError={() => handleImageError(exec.id)}
                    />
                    <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">{exec.item}</div>
                    <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">{t.liveActivity.success}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-emerald-400 mb-1">+${exec.profit.toFixed(2)}</div>
                  <div className="text-[10px] text-slate-600 font-bold">{exec.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

