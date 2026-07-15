import React from 'react';
import { Database, Search, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

export function HowItWorks() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const [cmsData, setCmsData] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    fetch('/api/admin/cms')
      .then(res => res.json())
      .then(data => setCmsData(data))
      .catch(err => console.error('Failed to load CMS data', err));
  }, []);

  const steps = [
    {
      icon: <Database size={32} />,
      title: cmsData[`${language}:howItWorks.step1.title`] || cmsData['howItWorks.step1.title'] || t.howItWorks.step1Title,
      desc: cmsData[`${language}:howItWorks.step1.desc`] || cmsData['howItWorks.step1.desc'] || t.howItWorks.step1Desc,
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      icon: <Search size={32} />,
      title: cmsData[`${language}:howItWorks.step2.title`] || cmsData['howItWorks.step2.title'] || t.howItWorks.step2Title,
      desc: cmsData[`${language}:howItWorks.step2.desc`] || cmsData['howItWorks.step2.desc'] || t.howItWorks.step2Desc,
      color: "text-amber-400",
      bg: "bg-amber-500/10"
    },
    {
      icon: <ShieldAlert size={32} />,
      title: cmsData[`${language}:howItWorks.step3.title`] || cmsData['howItWorks.step3.title'] || t.howItWorks.step3Title,
      desc: cmsData[`${language}:howItWorks.step3.desc`] || cmsData['howItWorks.step3.desc'] || t.howItWorks.step3Desc,
      color: "text-red-400",
      bg: "bg-red-500/10"
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: cmsData[`${language}:howItWorks.step4.title`] || cmsData['howItWorks.step4.title'] || t.howItWorks.step4Title,
      desc: cmsData[`${language}:howItWorks.step4.desc`] || cmsData['howItWorks.step4.desc'] || t.howItWorks.step4Desc,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10"
    }
  ];

  return (
    <div id="how-it-works" className="mb-32 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-3">{t.howItWorks.title}</h2>
        <div className="h-1 w-12 bg-indigo-600 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connection Lines (Desktop) */}
        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] -z-10">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        </div>

        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className={`w-20 h-20 rounded-2xl ${step.bg} flex items-center justify-center ${step.color} mb-6 border border-white/5 transition-all group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-indigo-500/10 relative`}>
              {step.icon}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-[10px] font-black text-white">
                {i + 1}
              </div>
            </div>
            <h3 className="text-base font-bold text-white mb-3 tracking-tight">{step.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
