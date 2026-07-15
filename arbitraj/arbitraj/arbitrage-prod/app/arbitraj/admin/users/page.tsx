'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { User, Mail, Shield, Calendar } from 'lucide-react';

export default function UsersManager() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/admin/users');
      const data = await res.json();
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to load users', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      const res = await fetch(`/api/admin/users/${userId}/role`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      });
      
      if (res.ok) {
        setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u));
      } else {
        const data = await res.json();
        alert(data.error || 'Rol güncellenirken hata oluştu');
      }
    } catch (error) {
      console.error('Failed to update role', error);
      alert('Sistemsel bir hata oluştu');
    }
  };

  const handleStatusToggle = async (userId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'ACTIVE' ? 'PASSIVE' : 'ACTIVE';
    try {
      const res = await fetch(`/api/admin/users/${userId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (res.ok) {
        setUsers(prev => prev.map(u => u.id === userId ? { ...u, status: newStatus } : u));
      } else {
        const data = await res.json();
        alert(data.error || 'Durum güncellenirken hata oluştu');
      }
    } catch (error) {
      console.error('Failed to update status', error);
      alert('Sistemsel bir hata oluştu');
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
    </div>
  );

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center bg-slate-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight mb-1">Kullanıcı Yönetimi</h2>
          <p className="text-slate-500 text-sm font-medium">Sistemdeki tüm üyeleri yönetin ve yetkilendirin.</p>
        </div>
        <div className="px-5 py-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs font-black text-indigo-400 uppercase tracking-widest shadow-lg shadow-indigo-500/5">
          Toplam: {users.length} Üye
        </div>
      </div>

      <Card className="bg-slate-900/30 border-white/5 overflow-hidden rounded-[2rem] backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Kullanıcı</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">E-posta</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Yetki / Rol</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Üyelik</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-white/[0.01] transition-all group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shadow-inner overflow-hidden">
                        {user.image ? (
                          <img src={user.image} className="w-full h-full object-cover" alt={user.name} />
                        ) : (
                          <User size={22} />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-white text-sm">{user.name || 'İsimsiz Üye'}</span>
                        <span className="text-[10px] text-slate-600 font-mono">ID: {user.id.slice(-8)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                      <Mail size={14} className="text-slate-700" />
                      {user.email}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="relative w-32">
                      <select 
                        value={user.role}
                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                        className={`w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-indigo-500 transition-all cursor-pointer appearance-none ${
                          user.role === 'admin' ? 'text-amber-500 border-amber-500/30' : 'text-slate-400'
                        }`}
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                        <Shield size={12} />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-slate-300">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '-'}
                      </span>
                      <span className="text-[10px] text-slate-600">
                        {user.createdAt ? new Date(user.createdAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) : ''}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <button
                      onClick={() => handleStatusToggle(user.id, user.status)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-black border transition-all uppercase tracking-widest ${
                        user.status === 'ACTIVE' 
                        ? 'bg-emerald-500/5 text-emerald-500 border-emerald-500/10 hover:bg-emerald-500/10' 
                        : 'bg-rose-500/5 text-rose-500 border-rose-500/10 hover:bg-rose-500/10'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'ACTIVE' ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                      {user.status === 'ACTIVE' ? 'Aktif' : 'Pasif'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {users.length === 0 && (
          <div className="p-20 text-center">
            <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-600">
              <User size={32} />
            </div>
            <p className="text-slate-500 font-medium">Henüz kayıtlı kullanıcı bulunmuyor.</p>
          </div>
        )}
      </Card>
    </div>
  );
}
