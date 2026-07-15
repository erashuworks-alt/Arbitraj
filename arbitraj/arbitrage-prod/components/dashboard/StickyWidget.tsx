import React from 'react';
import { useDashboardStore } from '../../store/useDashboardStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Clock } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

export function StickyWidget() {
  const cycle = useDashboardStore(state => state.cycle);
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <AnimatePresence>
      {cycle.isActive && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-6 right-6 z-[90]"
        >
          <div className="bg-slate-900 border border-indigo-600/50 rounded-2xl p-4 shadow-2xl shadow-indigo-600/20 flex items-center gap-4">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
              <Zap size={18} className="fill-current" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-0.5">{t.sticky.activeCycle}</div>
              <div className="flex items-center gap-2 text-sm font-bold text-white tabular-nums">
                <Clock size={12} className="text-slate-500" />
                {cycle.durationDays} {t.sticky.remaining}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
