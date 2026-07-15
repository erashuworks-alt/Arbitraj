'use client';

import React, { useEffect, useState } from 'react';
import { useExchangeAPI } from '@/hooks/useExchangeAPI';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useAppStore } from '@/store/useAppStore';
import { translations } from '@/lib/translations';
import { TrendingUp, ArrowLeft, BarChart3, Zap, Search, RefreshCw, ExternalLink } from 'lucide-react';

export default function AllOpportunitiesPage() {
  const { language } = useLanguageStore();
  const { appMode } = useAppStore();
  const t = translations[language];

  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'percent' | 'profit' | 'buy' | 'sell'>('percent');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const getImageUrl = (item: any) => {
    if (imageErrors[item.id]) {
      return `https://via.assets.so/img.jpg?w=80&h=80&tc=%236366f1&bg=%230f172a&t=${encodeURIComponent((item.item || '').split('|')[0])}`;
    }
    return item.image;
  };

  const fetchData = async (showRefreshing = false) => {
    if (showRefreshing) setRefreshing(true);
    try {
      const res = await fetch('/api/market/opportunities');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setOpportunities(data);
        setLastUpdated(new Date());
      }
    } catch (e) {
      console.warn('API fetch failed:', e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), 20000);
    return () => clearInterval(interval);
  }, []);

  const filtered = opportunities
    .filter(o => (o.item || '').toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'percent') return b.percent - a.percent;
      if (sortBy === 'profit') return (b.sell - b.buy) - (a.sell - a.buy);
      if (sortBy === 'buy') return a.buy - b.buy;
      if (sortBy === 'sell') return b.sell - a.sell;
      return 0;
    });

  const avgPercent = filtered.length > 0
    ? (filtered.reduce((a, o) => a + (o.percent || 0), 0) / filtered.length).toFixed(1)
    : '0';
  const topPercent = filtered.length > 0 ? filtered.reduce((a, b) => a.percent > b.percent ? a : b, filtered[0]) : null;
  const totalProfit = filtered.reduce((a, o) => a + (o.sell - o.buy), 0).toFixed(2);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // Reset to page 1 when search or sort changes
  React.useEffect(() => { setCurrentPage(1); }, [search, sortBy]);

  return (
    <div className="min-h-screen bg-[#080b10] text-slate-100 font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-6">
          <a href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-bold">{language === 'tr' ? 'Geri' : 'Back'}</span>
          </a>
          <div className="h-5 w-px bg-slate-700" />
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-500">
              <BarChart3 size={16} />
            </div>
            <span className="font-black text-white tracking-tight">{language === 'tr' ? 'Tüm Arbitraj Fırsatları' : 'All Arbitrage Opportunities'}</span>
            {appMode === 'demo' && (
              <span className="text-[9px] font-black text-amber-500 border border-amber-500/30 px-2 py-0.5 rounded-full bg-amber-500/5">SIMULATED</span>
            )}
          </div>
          <div className="ml-auto flex items-center gap-4">
            {lastUpdated && (
              <span className="text-[10px] text-slate-500 hidden sm:block">
                {language === 'tr' ? 'Son güncelleme:' : 'Last updated:'} {lastUpdated.toLocaleTimeString(language === 'tr' ? 'tr-TR' : 'en-US')}
              </span>
            )}
            <button
              onClick={() => fetchData(true)}
              disabled={refreshing}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <RefreshCw size={14} className={refreshing ? 'animate-spin text-indigo-400' : ''} />
              {language === 'tr' ? 'Yenile' : 'Refresh'}
            </button>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              {language === 'tr' ? 'CANLI' : 'LIVE'}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: language === 'tr' ? 'Toplam Fırsat' : 'Total Opportunities', value: filtered.length,                            color: 'text-slate-300',  bg: 'bg-slate-800/40',  icon: <BarChart3 size={16} className="text-slate-400" /> },
            { label: language === 'tr' ? 'Ort. Getiri' : 'Avg. Return',          value: `${avgPercent}%`,                             color: 'text-emerald-400', bg: 'bg-emerald-500/5', icon: <TrendingUp size={16} className="text-emerald-400" /> },
            { label: language === 'tr' ? 'En Yüksek Getiri' : 'Best Return',     value: topPercent ? `${topPercent.percent}%` : '—',  color: 'text-amber-400',   bg: 'bg-amber-500/5',  icon: <Zap size={16} className="text-amber-400" /> },
            { label: language === 'tr' ? 'Toplam Kâr Pot.' : 'Total Profit Pot.',value: `$${totalProfit}`,                             color: 'text-indigo-400',  bg: 'bg-indigo-500/5', icon: <TrendingUp size={16} className="text-indigo-400" /> },
          ].map((s, i) => (
            <div key={i} className={`p-4 ${s.bg} border border-white/5 rounded-2xl flex items-center gap-3`}>
              {s.icon}
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">{s.label}</div>
                <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="AK-47, AWP, Karambit..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-3 pl-9 pr-4 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 p-1 bg-slate-900/60 border border-white/10 rounded-xl">
            {(['percent', 'profit', 'buy', 'sell'] as const).map(key => (
              <button
                key={key}
                onClick={() => setSortBy(key)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${sortBy === key ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {key === 'percent' ? (language === 'tr' ? '% Getiri' : '% Return') : key === 'profit' ? (language === 'tr' ? '$ Kâr' : '$ Profit') : key === 'buy' ? (language === 'tr' ? 'Alış' : 'Buy') : (language === 'tr' ? 'Satış' : 'Sell')}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-36 bg-slate-900/40 rounded-2xl animate-pulse border border-white/5" />
            ))}
          </div>
        ) : (
          <>
            <p className="text-[11px] text-slate-600 mb-4 font-bold uppercase tracking-widest">
              {language === 'tr' ? `${filtered.length} fırsat — Sayfa ${currentPage}/${totalPages || 1}` : `${filtered.length} opportunities — Page ${currentPage}/${totalPages || 1}`}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {paginated.map((opp) => {
                const profit = (opp.sell - opp.buy).toFixed(2);
                const isHot = opp.percent >= 15;
                const isMid = opp.percent >= 10 && opp.percent < 15;
                return (
                  <div
                    key={opp.id}
                    className={`p-5 rounded-2xl border group hover:scale-[1.015] transition-all duration-300 flex gap-4 relative overflow-hidden cursor-pointer ${
                      isHot ? 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/50' :
                      isMid ? 'bg-indigo-500/5 border-indigo-500/15 hover:border-indigo-500/40' :
                      'bg-white/3 border-white/5 hover:border-white/15'
                    }`}
                  >
                    {/* Badge */}
                    {isHot && (
                      <div className="absolute top-3 right-3 text-[9px] font-black text-amber-500 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                        <Zap size={8} className="fill-current" /> HOT
                      </div>
                    )}
                    {isMid && !isHot && (
                      <div className="absolute top-3 right-3 text-[9px] font-black text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded-full">
                        GOOD
                      </div>
                    )}

                    {/* Image */}
                    <div className="w-16 h-16 shrink-0 bg-slate-900 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center p-1">
                      <img
                        src={getImageUrl(opp)}
                        alt={opp.item}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        onError={() => handleImageError(opp.id)}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-black text-white mb-3 truncate pr-10">{opp.item}</div>
                      <div className="grid grid-cols-4 gap-1 text-[10px]">
                        <div>
                          <div className="text-slate-600 mb-0.5 uppercase font-bold">{language === 'tr' ? 'Al' : 'Buy'}</div>
                          <div className="font-black text-slate-200">${opp.buy?.toFixed(2)}</div>
                        </div>
                        <div>
                          <div className="text-slate-600 mb-0.5 uppercase font-bold">{language === 'tr' ? 'Sat' : 'Sell'}</div>
                          <div className="font-black text-emerald-400">${opp.sell?.toFixed(2)}</div>
                        </div>
                        <div>
                          <div className="text-slate-600 mb-0.5 uppercase font-bold">{language === 'tr' ? 'Kâr' : 'Profit'}</div>
                          <div className="font-black text-emerald-300">${profit}</div>
                        </div>
                        <div>
                          <div className="text-slate-600 mb-0.5 uppercase font-bold">%</div>
                          <div className={`font-black text-base leading-none ${isHot ? 'text-amber-400' : isMid ? 'text-indigo-400' : 'text-slate-300'}`}>
                            +{opp.percent}%
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5">
                        <div className="text-[10px] text-slate-600 font-bold">{opp.time}</div>
                        <a
                          href={`https://steamcommunity.com/market/search?q=${encodeURIComponent(opp.item)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="flex items-center gap-1 text-[10px] text-slate-500 hover:text-indigo-400 transition-colors"
                        >
                          Steam <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
              {filtered.length === 0 && (
                <div className="col-span-full text-center py-20 text-slate-500">
                  <Search size={32} className="mx-auto mb-3 opacity-30" />
                  <p className="font-bold">"{search}" {language === 'tr' ? 'için sonuç bulunamadı.' : 'not found.'}</p>
                </div>
              )}
            </div>
          </>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12 mb-4">
            {/* Prev */}
            <button
              onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-bold rounded-xl border border-white/10 bg-slate-900/60 text-slate-400 hover:text-white hover:border-indigo-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ←
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }).map((_, idx) => {
              const page = idx + 1;
              const isNear = Math.abs(page - currentPage) <= 2;
              const isFirst = page === 1;
              const isLast = page === totalPages;
              if (!isNear && !isFirst && !isLast) {
                if (page === currentPage - 3 || page === currentPage + 3) {
                  return <span key={page} className="text-slate-600 px-1">…</span>;
                }
                return null;
              }
              return (
                <button
                  key={page}
                  onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`w-10 h-10 text-sm font-black rounded-xl border transition-all ${
                    currentPage === page
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                      : 'border-white/10 bg-slate-900/60 text-slate-400 hover:text-white hover:border-indigo-500/50'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-bold rounded-xl border border-white/10 bg-slate-900/60 text-slate-400 hover:text-white hover:border-indigo-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
