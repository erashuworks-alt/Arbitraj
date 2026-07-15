'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '../ui/Card';
import Link from 'next/link';
import { ExternalLink, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

interface Partner {
  id: string;
  name: string;
  logo: string;
  link: string;
}

function PartnerCard({ c, t }: { c: any, t: any }) {
  const [currentLogo, setCurrentLogo] = useState(c.logo);
  const [subscriberCount, setSubscriberCount] = useState(c.userCount || 0);

  useEffect(() => {
    const isDynamic = c.logo && (c.logo.includes('steamcommunity.com/') || c.logo.includes('youtube.com/') || c.logo.includes('youtu.be/'));
    
    if (isDynamic) {
      fetch(`/api/internal/dynamic-stats?url=${encodeURIComponent(c.logo)}`)
        .then(res => res.json())
        .then(data => {
          if (data.logoUrl) setCurrentLogo(data.logoUrl);
          if (data.subscriberCount) setSubscriberCount(data.subscriberCount);
        })
        .catch(err => console.error('Failed to fetch partner stats:', err));
    }
  }, [c.logo]);

  const defaultAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(c.name)}&backgroundColor=0f172a`;

  return (
    <a href={c.link} target="_blank" rel="noopener noreferrer" className="group">
      <Card className="p-8 flex flex-col items-center gap-6 transition-all duration-500 group-hover:bg-slate-800/40 group-hover:border-indigo-500/30 group-hover:-translate-y-2 rounded-[2.5rem]">
        <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-slate-800 to-slate-700 group-hover:from-indigo-600 group-hover:to-violet-600 transition-all duration-500">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-900 bg-slate-800">
            <img 
              src={currentLogo && !currentLogo.startsWith('http') ? currentLogo : (currentLogo || defaultAvatar)} 
              alt={c.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = defaultAvatar;
              }}
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-6 h-6 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-lg">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-base font-black text-white group-hover:text-indigo-400 transition-colors flex items-center justify-center gap-2 mb-1">
            {c.name}
            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em]">
            {subscriberCount.toLocaleString()} {t.creators.using}
          </div>
        </div>
      </Card>
    </a>
  );
}

export function Creators() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguageStore();
  const t = translations[language];

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    fetch('/api/admin/partners')
      .then(res => res.json())
      .then(data => {
        const enhancedData = data.map((p: Partner, i: number) => ({
          ...p,
          userCount: 1200 + (i * 450)
        }));
        setPartners(enhancedData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (loading || partners.length === 0 || isHovering) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 1) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [loading, partners, isHovering]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (loading) return (
    <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
      {[1,2,3,4].map(i => <div key={i} className="h-48 bg-slate-800/30 rounded-[2rem]" />)}
    </div>
  );

  return (
    <div className="mb-24 relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-10 px-4">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-3">{t.creators.title}</h3>
          <div className="h-1 w-12 bg-indigo-600 rounded-full" />
        </div>
        <Link 
          href="/partners"
          className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 hover:bg-indigo-500/20 transition-all group cursor-pointer"
        >
          <User size={14} className="text-indigo-400 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">
            {partners.length > 0 ? 'Verified Partners' : t.creators.noPartners}
          </span>
        </Link>
      </div>

      {/* Floating Navigation Buttons */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <button 
          onClick={() => scroll('left')}
          className="p-4 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-indigo-600 transition-all shadow-2xl -ml-5 hover:scale-110 active:scale-95 group"
          aria-label="Previous"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <button 
          onClick={() => scroll('right')}
          className="p-4 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-indigo-600 transition-all shadow-2xl -mr-5 hover:scale-110 active:scale-95 group"
          aria-label="Next"
        >
          <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide no-scrollbar scroll-smooth px-4" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {Array.isArray(partners) && partners.length > 0 ? partners.map((c: any) => (
          <div key={c.id} className="min-w-[280px] md:min-w-[320px] snap-start">
            <PartnerCard c={c} t={t} />
          </div>
        )) : (
          <div className="w-full p-12 text-center bg-slate-900/40 rounded-[2.5rem] border border-dashed border-slate-800 text-slate-600 text-sm">
            {t.creators.noPartners}
          </div>
        )}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

