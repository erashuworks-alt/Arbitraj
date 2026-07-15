import React from 'react';
import { useRouter } from 'next/navigation';
import { useTimer } from '../../hooks/useTimer';
import { Clock, TrendingUp, CheckCircle2, PlayCircle, Zap } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useDashboardStore } from '@/store/useDashboardStore';
import { useAppStore } from '@/store/useAppStore';
import { translations } from '@/lib/translations';

export function Hero() {
  const router = useRouter();
  const { setAppMode } = useAppStore();
  const { days, hours, minutes, seconds } = useTimer(3, 3); // Wednesday (3), 03:00
  const { language } = useLanguageStore();
  const t = translations[language];
  const setStartModalOpen = useDashboardStore(state => state.setStartModalOpen);
  const setDemoModalOpen = useDashboardStore(state => state.setDemoModalOpen);

  const [cmsData, setCmsData] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    fetch('/api/admin/cms')
      .then(res => res.json())
      .then(data => setCmsData(data))
      .catch(err => console.error('Failed to load CMS data', err));
  }, []);

  const handleDemoClick = () => {
    setDemoModalOpen(true);
  };

  const titleText = cmsData[`${language}:hero.title`] || cmsData['hero.title'] || t.hero.title;
  const subtitleText = cmsData[`${language}:hero.subtitle`] || cmsData['hero.subtitle'] || t.hero.description;
  const btnStartText = cmsData[`${language}:hero.cta.primary`] || cmsData['hero.cta.primary'] || t.hero.ctaStart;
  const btnHowText = cmsData[`${language}:hero.cta.secondary`] || cmsData['hero.cta.secondary'] || t.hero.ctaHowItWorks;
  const btnDemoText = cmsData[`${language}:hero.cta.ghost`] || cmsData['hero.cta.ghost'] || t.hero.ctaDemo;

  return (
    <div className="relative mb-20">
      <div className="absolute inset-0 bg-indigo-600/5 blur-3xl rounded-full -z-10" />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-500/20">
            <TrendingUp size={14} />
            {t.hero.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
            {titleText}
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            {subtitleText}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[t.hero.bullet1, t.hero.bullet2, t.hero.bullet3].map((bullet) => (
              <div key={bullet} className="flex items-center justify-center lg:justify-start gap-3 text-sm font-bold text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                <CheckCircle2 size={18} className="text-indigo-500 shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-10 py-6 text-lg bg-indigo-600 hover:bg-indigo-500 shadow-2xl shadow-indigo-600/40 group transition-all rounded-2xl"
              onClick={() => setStartModalOpen(true)}
            >
              <Zap size={20} className="mr-3 fill-current group-hover:scale-110 transition-transform" />
              {btnStartText}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto px-10 py-6 text-lg border-slate-700 hover:bg-white/5 hover:border-slate-500 text-white transition-all rounded-2xl"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {btnHowText}
            </Button>
          </div>
        </div>

        <div className="w-full max-w-md lg:shrink-0">
          <Card className="p-10 border-indigo-500/20 bg-slate-900/80 backdrop-blur-xl relative overflow-hidden group rounded-[2.5rem] shadow-3xl">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 animate-gradient-x" />
            <div className="flex items-center gap-3 mb-10 text-slate-500 uppercase tracking-[0.2em] font-black text-[10px]">
              <Clock size={16} className="group-hover:text-indigo-400 transition-colors" />
              {t.hero.timerTitle}
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[
                { val: days, label: t.hero.days },
                { val: hours, label: t.hero.hours },
                { val: minutes, label: t.hero.minutes },
                { val: seconds, label: t.hero.seconds }
              ].map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 tabular-nums tracking-tighter shadow-sm">
                    {unit.val.toString().padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.1em]">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
