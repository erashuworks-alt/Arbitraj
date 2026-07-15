import React, { useState, useEffect } from 'react';
import { Shield, Crosshair, TrendingUp, AlertTriangle } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';
import { Card } from '../ui/Card';

export function StrategySelector() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const [steamLogo, setSteamLogo] = useState('https://avatars.fastly.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg');

  const [cmsData, setCmsData] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch('/api/admin/cms')
      .then(res => res.json())
      .then(data => setCmsData(data))
      .catch(err => console.error('Failed to load CMS data', err));

    fetch(`/api/internal/dynamic-logo?url=${encodeURIComponent('https://steamcommunity.com/groups/csarbitraj')}`)
      .then(res => res.json())
      .then(data => {
        if (data.logoUrl) {
          setSteamLogo(data.logoUrl);
        }
      })
      .catch(err => console.error('Failed to fetch dynamic steam logo:', err));
  }, []);

  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-10 border-emerald-500/10 bg-emerald-500/5 hover:border-emerald-500/30 transition-all group rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            {cmsData['strategies.safe.image'] ? (
              <img src={cmsData['strategies.safe.image']} alt="Safe Logo" className="w-[120px] h-[120px] rounded-full grayscale brightness-200" />
            ) : (
              <img src={steamLogo} alt="Steam Logo" className="w-[120px] h-[120px] rounded-full grayscale brightness-200" />
            )}
          </div>
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-500/20 overflow-hidden">
              {cmsData['strategies.safe.image'] ? (
                <img src={cmsData['strategies.safe.image']} alt="Safe Icon" className="w-full h-full object-cover" />
              ) : (
                <img src={steamLogo} alt="Steam Icon" className="w-full h-full object-cover" />
              )}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-4 w-fit">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              {cmsData[`${language}:strategies.safe.title`] || cmsData['strategies.safe.title'] ? 'SAFE MODE' : t.footer.steamGroup}
            </div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">
              {cmsData[`${language}:strategies.safe.title`] || cmsData['strategies.safe.title'] || cmsData[`${language}:steamGroup.title`] || cmsData['steamGroup.title'] || (cmsData['strategies.safe.title'] ? t.strategies.safeTitle : t.footer.steamGroup)}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-[280px]">
              {cmsData[`${language}:strategies.safe.desc`] || cmsData['strategies.safe.desc'] || cmsData[`${language}:steamGroup.description`] || cmsData['steamGroup.description'] || (cmsData['strategies.safe.title'] ? t.strategies.safeDesc : t.footer.aboutDesc)}
            </p>
            
            <div className="mt-auto">
              {(cmsData['strategies.safe.link'] || cmsData['social.steam'] || "https://steamcommunity.com/groups/csarbitraj") && (
                <a 
                  href={cmsData['strategies.safe.link'] || cmsData['social.steam'] || "https://steamcommunity.com/groups/csarbitraj"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-xl text-sm font-bold transition-all hover:scale-[1.02]"
                >
                  {cmsData[`${language}:strategies.safe.buttonText`] || cmsData['strategies.safe.buttonText'] || (cmsData['strategies.safe.title'] ? t.nav.strategy : t.footer.steamGroup)}
                </a>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-10 border-red-500/10 bg-red-500/5 hover:border-red-500/30 transition-all group rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            {cmsData['strategies.sniper.image'] ? (
              <img src={cmsData['strategies.sniper.image']} alt="Sniper Logo" className="w-[120px] h-[120px] rounded-full grayscale brightness-200" />
            ) : (
              <Crosshair size={120} />
            )}
          </div>
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-500/20 overflow-hidden">
              {cmsData['strategies.sniper.image'] ? (
                <img src={cmsData['strategies.sniper.image']} alt="Sniper Icon" className="w-full h-full object-cover" />
              ) : (
                <Crosshair size={28} />
              )}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 rounded-full text-[10px] font-black text-red-400 uppercase tracking-widest mb-4 w-fit">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              High Speed
            </div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">
              {cmsData[`${language}:strategies.sniper.title`] || cmsData['strategies.sniper.title'] || t.strategies.sniperTitle}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-[280px]">
              {cmsData[`${language}:strategies.sniper.desc`] || cmsData['strategies.sniper.desc'] || t.strategies.sniperDesc}
            </p>
            
            <div className="mt-auto">
              {cmsData['strategies.sniper.link'] && (
                <a 
                  href={cmsData['strategies.sniper.link']} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl text-sm font-bold transition-all hover:scale-[1.02]"
                >
                  {cmsData[`${language}:strategies.sniper.buttonText`] || cmsData['strategies.sniper.buttonText'] || t.nav.strategy}
                </a>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
