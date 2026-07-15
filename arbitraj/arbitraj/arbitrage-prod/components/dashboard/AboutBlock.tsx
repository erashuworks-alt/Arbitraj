import React from 'react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';
import { Info } from 'lucide-react';

export function AboutBlock() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const [cmsData, setCmsData] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    fetch('/api/admin/cms')
      .then(res => res.json())
      .then(data => setCmsData(data))
      .catch(err => console.error('Failed to load CMS data', err));
  }, []);

  const titleText = cmsData[`${language}:about.title`] || cmsData['about.title'] || t.about.title;
  const descriptionText = cmsData[`${language}:about.description`] || cmsData['about.description'] || t.about.description;

  return (
    <div className="mb-24">
      <div className="p-12 bg-indigo-600/5 border border-indigo-500/10 rounded-[3rem] flex flex-col md:flex-row items-center gap-12 group hover:bg-indigo-600/[0.08] transition-all duration-500">
        <div className="w-24 h-24 bg-indigo-600/10 rounded-3xl flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
          <Info size={44} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">{titleText}</h3>
          <p className="text-slate-400 leading-relaxed text-lg font-medium max-w-4xl">
            {descriptionText}
          </p>
        </div>
      </div>
    </div>
  );
}
