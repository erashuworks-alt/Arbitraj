'use client';

import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/dashboard/Hero';
import { Creators } from '@/components/dashboard/Creators';
import { InfoSection } from '@/components/dashboard/InfoSection';
import { StartCycleFlow } from '@/components/dashboard/StartCycleFlow';
import { CommunityFeed } from '@/components/dashboard/CommunityFeed';
import { SteamUpdates } from '@/components/dashboard/SteamUpdates';
import { StickyWidget } from '@/components/dashboard/StickyWidget';
import { HowItWorks } from '@/components/dashboard/HowItWorks';
import { TrustSection } from '@/components/dashboard/TrustSection';
import { LiveActivity } from '@/components/dashboard/LiveActivity';
import { StrategySelector } from '@/components/dashboard/StrategySelector';
import { AboutBlock } from '@/components/dashboard/AboutBlock';
import { DemoModal } from '@/components/dashboard/DemoModal';
import { SystemStatusWidget } from '@/components/dashboard/SystemStatusWidget';
import { ArbitrageSummaryWidget } from '@/components/dashboard/ArbitrageSummaryWidget';
import { NotificationManager } from '@/components/notifications/NotificationManager';
import { DemoBanner } from '@/components/layout/DemoBanner';
import { TrendingUp, Activity, Shield, Settings, Zap, Award, Calculator } from 'lucide-react';

import { signOut, useSession } from 'next-auth/react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useAppStore } from '@/store/useAppStore';
import { translations } from '@/lib/translations';

export default function UnifiedDashboard() {
  const { data: session } = useSession();
  const { language, setLanguage } = useLanguageStore();
  const { appMode } = useAppStore();
  const t = translations[language];
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (mounted) {
      document.title = language === 'tr' ? `Erashu Engine - ${appMode === 'demo' ? 'Simülasyon' : 'Kurumsal Arbitraj'}` : `Erashu Engine - ${appMode === 'demo' ? 'Simulation' : 'Institutional Arbitrage'}`;
    }
  }, [language, mounted, appMode]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#080b10] text-slate-100 font-sans selection:bg-indigo-500/30">
      <DemoBanner />
      <NotificationManager />
      
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <TrendingUp size={20} className="text-white" />
            </div>
            <span className="font-black text-xl tracking-tighter text-white">{t.brand.logo}</span>
            {appMode === 'demo' && (
              <span className="bg-indigo-500/20 text-indigo-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-indigo-500/30 ml-2">DEMO</span>
            )}
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <Link href="/" className="hover:text-white transition-colors">{t.nav.dashboard}</Link>
            <Link href="/calculator" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2">
              <Calculator size={14} />
              Arbitraj
            </Link>
            {session?.role === 'admin' && (
              <Link href="/admin" className="text-amber-500 hover:text-amber-400 transition-colors">{t.nav.adminPanel}</Link>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-slate-800/50 rounded-lg p-1 mr-2 border border-slate-700/50">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${language === 'en' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:text-slate-300'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('tr')}
                className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${language === 'tr' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:text-slate-300'}`}
              >
                TR
              </button>
            </div>
            <button 
              onClick={() => signOut()}
              className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mr-2"
            >
              {t.nav.signOut}
            </button>
            
            <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
              <div className="text-right hidden sm:block">
                <div className="text-[10px] font-black text-white leading-none mb-1">{session?.user?.name || (appMode === 'demo' ? 'Demo User' : 'Guest')}</div>
                <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-400 uppercase tracking-widest leading-none">
                  <TrendingUp size={10} /> +12.5% Profit
                </div>
              </div>
              <div className="relative group">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 border border-indigo-400/20 flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-indigo-500/20">
                  {session?.user?.name?.[0] || 'D'}
                </div>
                <div className="absolute -top-1 -right-1 bg-amber-500 w-4 h-4 rounded-full border-2 border-slate-900 flex items-center justify-center text-white shadow-lg">
                  <Award size={8} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <Hero />
        
        {/* About Block */}
        <AboutBlock />

        {/* Creators Grid */}
        <Creators />

        {/* How it Works */}
        <HowItWorks />

        {/* Strategy Selector */}
        <StrategySelector />

        {/* Trust Section */}
        <TrustSection />

        {/* Live Activity Feed */}
        <LiveActivity />

        {/* Core Actions */}
        <StartCycleFlow />

        {/* Info & Scenario */}
        <InfoSection />

        {/* New Analytics & Infrastructure Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 mt-12">
          <ArbitrageSummaryWidget />
          <SystemStatusWidget />
        </div>


        {/* Secondary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <CommunityFeed />
          </div>
          <div className="lg:col-span-1">
            <SteamUpdates />
          </div>
          <div className="lg:col-span-1">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">{t.dashboard.nodeStatus}</h3>
                <Activity size={14} className="text-emerald-500 animate-pulse" />
              </div>
              <div className="space-y-4">
                {[
                  { name: t.dashboard.executionEngine, status: t.dashboard.optimal, color: 'text-emerald-400' },
                  { name: t.dashboard.riskGatekeeper, status: t.dashboard.strict, color: 'text-indigo-400' },
                  { name: t.dashboard.marketListener, status: t.dashboard.live, color: 'text-emerald-400' },
                ].map((svc) => (
                  <div key={svc.name} className="flex items-center justify-between p-3 bg-slate-800/20 rounded-xl border border-slate-800/40">
                    <span className="text-xs font-semibold text-slate-400">{svc.name}</span>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${svc.color}`}>{svc.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 pt-20 pb-12 bg-slate-900/30">
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
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.support}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{t.footer.contact}</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  support@erashu.net
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Discord Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.steamGroup}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{t.footer.social}</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Twitter", icon: <Activity size={14} /> },
                  { name: "Steam", icon: <Shield size={14} /> },
                  { name: "GitHub", icon: <Settings size={14} /> },
                ].map((s) => (
                  <a key={s.name} href="#" className="px-4 py-2 bg-slate-800/50 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
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
              <div className="text-[10px] text-slate-800 font-bold uppercase tracking-widest">© 2024 {t.brand.logo} INFRA. {t.footer.rights}</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Overlay Elements */}
      <StickyWidget />
      <DemoModal />
    </div>
  );
}
