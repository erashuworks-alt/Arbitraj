import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Info, AlertTriangle, CheckCircle } from 'lucide-react';

export function NotificationManager() {
  const [notifications, setNotifications] = useState<any[]>([]);

  // Weekly Alert System (Wednesday 02:30)
  useEffect(() => {
    const checkAlert = () => {
      const now = new Date();
      const turkeyNow = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
      
      if (turkeyNow.getDay() === 3 && turkeyNow.getHours() === 2 && turkeyNow.getMinutes() === 30 && turkeyNow.getSeconds() === 0) {
        addNotification('XP farming time is coming!', 'info');
        if (Notification.permission === 'granted') {
          new Notification('XP Farming Alert', { body: 'XP farming time is coming in 30 minutes.' });
        }
      }
    };

    const timer = setInterval(checkAlert, 1000);
    return () => clearInterval(timer);
  }, []);

  const addNotification = (message: string, type: 'info' | 'success' | 'warning') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    
    // Play sound alert (mock sound)
    const audio = new Audio('/notification.mp3'); 
    audio.play().catch(() => {}); // Browser might block if no interaction

    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  return (
    <div className="fixed top-6 right-6 z-[200] space-y-3 pointer-events-none">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="pointer-events-auto"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 shadow-2xl flex items-center gap-3 min-w-[300px]">
              <div className={`p-2 rounded-lg ${
                n.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' :
                n.type === 'warning' ? 'bg-amber-500/10 text-amber-400' :
                'bg-indigo-500/10 text-indigo-400'
              }`}>
                {n.type === 'success' ? <CheckCircle size={16} /> :
                 n.type === 'warning' ? <AlertTriangle size={16} /> :
                 <Info size={16} />}
              </div>
              <div className="text-sm font-bold text-white">{n.message}</div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
