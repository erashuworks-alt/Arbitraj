import React from 'react';
import { X, PlayCircle } from 'lucide-react';
import { useDashboardStore } from '@/store/useDashboardStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

export function DemoModal() {
  const { isDemoModalOpen, setDemoModalOpen } = useDashboardStore();
  const { language } = useLanguageStore();
  const t = translations[language];

  const [cmsData, setCmsData] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    if (isDemoModalOpen) {
      fetch('/api/admin/cms')
        .then(res => res.json())
        .then(data => setCmsData(data))
        .catch(err => console.error('Failed to load CMS data', err));
    }
  }, [isDemoModalOpen]);

  if (!isDemoModalOpen) return null;

  const videoUrl = cmsData['hero.demoVideoUrl'];
  const videoType = cmsData['hero.demoVideoType']; // 'youtube' | 'local'
  const isLocal = videoType === 'local';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={() => setDemoModalOpen(false)}
      />
      
      <div className="relative w-full max-w-4xl bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="absolute top-6 right-6 z-10">
          <button 
            onClick={() => setDemoModalOpen(false)}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-xl font-black text-white tracking-tighter">{t.hero.ctaDemo}</h3>
        </div>

        <div className="aspect-video bg-black flex items-center justify-center">
          {videoUrl ? (
            isLocal ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : (
              <iframe 
                className="w-full h-full"
                src={videoUrl}
                title="Erashu Engine Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )
          ) : (
            <div className="text-center p-12">
              <div className="w-20 h-20 bg-indigo-600/20 rounded-full flex items-center justify-center text-indigo-500 mx-auto mb-6">
                <PlayCircle size={40} />
              </div>
              <p className="text-slate-400 font-bold max-w-md mx-auto">
                {language === 'tr' 
                  ? 'Erashu Engine demo videosu hazırlanıyor. Yakında burada profesyonel arbitraj akışını izleyebileceksiniz.' 
                  : 'Erashu Engine demo video is being prepared. You will soon be able to watch the professional arbitrage flow here.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
