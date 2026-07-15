'use client';

import React, { useEffect, useState } from 'react';
import { TrendingUp, Activity, Shield, Settings } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

export function Footer({ setSupportOpen }: { setSupportOpen: (open: boolean) => void }) {
  const { language } = useLanguageStore();
  const t = translations[language];
  const [cmsData, setCmsData] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch('/api/admin/cms')
      .then(res => res.json())
      .then(data => setCmsData(data))
      .catch(err => console.error('Failed to load CMS data', err));
  }, []);

  const footerCopyright = cmsData[`${language}:footer.copyright`] || cmsData['footer.copyright'] || t.footer.rights;

  return (
    <footer className="border-t border-slate-800 pt-20 pb-12 bg-slate-900/30 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <TrendingUp size={18} className="text-white" />
              </div>
              <span className="font-black text-lg tracking-tighter text-white">{t.brand.logo}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              {t.footer.aboutDesc}
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Activity size={18} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Shield size={18} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Settings size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{t.footer.about}</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.strategy}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.risk}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.apiDocs}</a></li>
              <li><button onClick={() => setSupportOpen(true)} className="hover:text-white transition-colors">{t.footer.support}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                {cmsData['footer.contactEmail'] || 'support@arbcore.net'}
              </li>
              {cmsData['social.discord'] && (
                <li><a href={cmsData['social.discord']} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord Community</a></li>
              )}
              {cmsData['social.steam'] && (
                <li><a href={cmsData['social.steam']} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.steamGroup}</a></li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{t.footer.social}</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Twitter", href: cmsData['social.twitter'] },
                { name: "Steam", href: cmsData['social.steam'] },
                { name: "GitHub", href: cmsData['social.github'] },
                { name: "Discord", href: cmsData['social.discord'] },
              ].filter(s => s.href).map((s) => (
                <a 
                  key={s.name} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-800/50 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-30">
            <Shield size={16} />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{t.footer.brand} v2.0.4</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-400 transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-slate-400 transition-colors">{t.footer.terms}</a>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-right">
            <div className="text-[10px] text-slate-700 font-bold uppercase tracking-widest max-w-xs ml-auto">
              {t.footer.riskWarning}
            </div>
            <div className="text-[10px] text-slate-800 font-bold uppercase tracking-widest">{footerCopyright}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
