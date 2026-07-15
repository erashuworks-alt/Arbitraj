'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Users, MousePointerClick, Globe } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/analytics');
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to load analytics', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <div className="text-white">Yükleniyor...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Genel Bakış</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-white/5 border-white/10 flex items-center gap-4">
          <div className="p-4 rounded-xl bg-indigo-500/20 text-indigo-400">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-400">Bugünkü Ziyaretçiler</p>
            <p className="text-2xl font-bold">{stats?.dailyVisitors || 0}</p>
          </div>
        </Card>
        
        <Card className="p-6 bg-white/5 border-white/10 flex items-center gap-4">
          <div className="p-4 rounded-xl bg-emerald-500/20 text-emerald-400">
            <MousePointerClick size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-400">Toplam Oturum</p>
            <p className="text-2xl font-bold">{stats?.totalSessions || 0}</p>
          </div>
        </Card>

        <Card className="p-6 bg-white/5 border-white/10 flex items-center gap-4">
          <div className="p-4 rounded-xl bg-cyan-500/20 text-cyan-400">
            <Globe size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-400">Aktif Sayfalar</p>
            <p className="text-2xl font-bold">{stats?.topPages?.length || 0}</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="p-6 bg-white/5 border-white/10">
          <h3 className="text-lg font-medium mb-4">En Çok Ziyaret Edilen Sayfalar</h3>
          <div className="space-y-3">
            {stats?.topPages?.map((page: any, i: number) => (
              <div key={i} className="flex justify-between items-center p-3 rounded bg-slate-900/50">
                <span className="text-slate-300">{page.path}</span>
                <span className="font-mono text-indigo-400">{page.views} view</span>
              </div>
            ))}
            {(!stats?.topPages || stats.topPages.length === 0) && (
              <p className="text-slate-500 text-sm">Henüz veri yok.</p>
            )}
          </div>
        </Card>

        <Card className="p-6 bg-white/5 border-white/10">
          <h3 className="text-lg font-medium mb-4">Saatlik Trafik Dağılımı</h3>
          <div className="h-64 flex items-end gap-2">
            {stats?.hourlyTraffic?.map((hour: any, i: number) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div 
                  className="w-full bg-indigo-500/40 rounded-t group-hover:bg-indigo-400 transition-colors relative"
                  style={{ height: `${Math.max(hour.visits * 5, 5)}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {hour.visits}
                  </div>
                </div>
                <span className="text-[10px] text-slate-500">{hour.hour.split(':')[0]}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
