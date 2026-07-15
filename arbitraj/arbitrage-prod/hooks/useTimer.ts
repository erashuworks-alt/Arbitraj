import { useState, useEffect } from 'react';

export function useTimer(targetDay: number, targetHour: number) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      // Adjust to Turkey timezone (UTC+3)
      const turkeyNow = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
      
      let nextTarget = new Date(turkeyNow);
      nextTarget.setDate(turkeyNow.getDate() + (targetDay + 7 - turkeyNow.getDay()) % 7);
      nextTarget.setHours(targetHour, 0, 0, 0);

      if (nextTarget <= turkeyNow) {
        nextTarget.setDate(nextTarget.getDate() + 7);
      }

      const diff = nextTarget.getTime() - turkeyNow.getTime();

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDay, targetHour]);

  return timeLeft;
}
