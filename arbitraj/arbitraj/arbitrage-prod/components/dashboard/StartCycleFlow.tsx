import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Check, UserPlus, UserMinus, Shield, Wallet, Calendar, Zap } from 'lucide-react';
import { useDashboardStore } from '../../store/useDashboardStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useAppStore } from '@/store/useAppStore';
import { translations } from '@/lib/translations';

export function StartCycleFlow() {
  const { appMode } = useAppStore();
  const isOpen = useDashboardStore(state => state.isStartModalOpen);
  const setIsOpen = useDashboardStore(state => state.setStartModalOpen);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hasSteamGuard: true,
    balance: 0,
    startDate: new Date().toISOString().split('T')[0],
    platform: 'Steam' as 'Steam' | 'CSFloat'
  });

  const startCycle = useDashboardStore(state => state.startCycle);
  const { language } = useLanguageStore();
  const t = translations[language];

  const handleStart = () => {
    const duration = formData.hasSteamGuard ? 7 : 15;
    startCycle({ ...formData, durationDays: duration });
    setIsOpen(false);
    setStep(1);
    
    if (appMode === 'demo') {
      alert(language === 'tr' ? 'Demo modu aktif: İşlem simülasyon olarak başlatıldı.' : 'Demo mode active: Cycle started as a simulation.');
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={step === 1 ? t.startCycle.modalTitle1 : t.startCycle.modalTitle2}>
        {step === 1 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setStep(2)}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all text-left"
              >
                <div className="p-3 bg-slate-800 rounded-xl text-slate-400">
                  <UserMinus size={24} />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-white mb-1">{t.startCycle.noAccount}</div>
                  <div className="text-[10px] text-slate-500 leading-relaxed">{t.startCycle.noAccountDesc}</div>
                </div>
              </button>

              <button 
                onClick={() => setStep(2)}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-indigo-600/30 bg-indigo-600/5 hover:border-indigo-500 transition-all text-left"
              >
                <div className="p-3 bg-indigo-600 rounded-xl text-white">
                  <UserPlus size={24} />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-white mb-1">{t.startCycle.signUp}</div>
                  <div className="text-[10px] text-indigo-400/70 leading-relaxed">{t.startCycle.signUpDesc}</div>
                </div>
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-3 text-center">{t.startCycle.comparison}</div>
              <div className="bg-slate-800/30 rounded-xl overflow-hidden border border-slate-800">
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-800/50">
                      <th className="px-4 py-2 text-left text-slate-500">{t.startCycle.feature}</th>
                      <th className="px-4 py-2 text-center text-slate-500">{t.startCycle.guest}</th>
                      <th className="px-4 py-2 text-center text-indigo-400">{t.startCycle.account}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { f: t.startCycle.emailAlerts, g: false, a: true },
                      { f: t.startCycle.fullTracking, g: false, a: true },
                      { f: t.startCycle.tradeHistory, g: t.startCycle.sevenDays, a: t.startCycle.lifetime },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-800/50">
                        <td className="px-4 py-2 text-slate-400">{row.f}</td>
                        <td className="px-4 py-2 text-center">
                          {typeof row.g === 'boolean' ? (row.g ? <Check size={12} className="mx-auto text-emerald-500" /> : '—') : row.g}
                        </td>
                        <td className="px-4 py-2 text-center font-bold text-indigo-400">
                          {typeof row.a === 'boolean' ? (row.a ? <Check size={12} className="mx-auto text-indigo-400" /> : '—') : row.a}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Shield size={12} />
                  {t.startCycle.steamGuardQ}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[true, false].map((val) => (
                    <button
                      key={String(val)}
                      onClick={() => setFormData({ ...formData, hasSteamGuard: val })}
                      className={`px-4 py-3 rounded-xl border text-sm font-bold transition-all ${
                        formData.hasSteamGuard === val 
                        ? 'border-indigo-600 bg-indigo-600/10 text-white' 
                        : 'border-slate-800 bg-slate-800/30 text-slate-500 hover:border-slate-700'
                      }`}
                    >
                      {val ? t.startCycle.yes : t.startCycle.no}
                    </button>
                  ))}
                </div>
                <div className="text-[10px] text-slate-600 italic">
                  * {t.startCycle.duration}: {formData.hasSteamGuard ? `7 ${t.startCycle.days}` : `15 ${t.startCycle.days}`} ({t.startCycle.safetyBuffer})
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Wallet size={12} />
                  {t.startCycle.startingBalance}
                </label>
                <input 
                  type="number"
                  placeholder="0.00"
                  className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors"
                  onChange={(e) => setFormData({ ...formData, balance: Number(e.target.value) })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={12} />
                    {t.startCycle.startDate}
                  </label>
                  <input 
                    type="date"
                    value={formData.startDate}
                    className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors"
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Zap size={12} />
                    {t.startCycle.sourcePlatform}
                  </label>
                  <select 
                    className="w-full bg-slate-800/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-600 transition-colors appearance-none"
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value as any })}
                  >
                    <option value="Steam">Steam</option>
                    <option value="CSFloat">CSFloat</option>
                  </select>
                </div>
              </div>
            </div>

            <Button className="w-full py-4 text-base relative overflow-hidden" onClick={handleStart}>
              {t.startCycle.initialize}
              {appMode === 'demo' && (
                <div className="absolute top-0 right-0 bg-amber-500 text-[8px] font-black px-2 py-0.5 rounded-bl-lg text-white">
                  SIMULATION
                </div>
              )}
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
}
