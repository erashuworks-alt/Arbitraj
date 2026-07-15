'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Users, Settings, LogOut, TrendingUp, MessageSquare } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/arbitraj/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Users', href: '/arbitraj/admin/users', icon: <Users size={20} /> },
    { name: 'Support', href: '/arbitraj/admin/support', icon: <MessageSquare size={20} /> },
    { name: 'CMS Content', href: '/arbitraj/admin/cms', icon: <FileText size={20} /> },
    { name: 'Partners', href: '/arbitraj/admin/partners', icon: <Users size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-[#0a0c10] text-white font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f1115] border-r border-white/5 flex flex-col shrink-0">
        <div className="p-6 border-b border-white/5 flex items-center gap-3">
          <div className="p-1.5 bg-indigo-600 rounded-lg">
            <TrendingUp size={18} className="text-white" />
          </div>
          <h2 className="text-lg font-black tracking-tighter text-white">
            ERASHU ADMIN
          </h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`${isActive ? 'text-white' : 'text-slate-500 group-hover:text-indigo-400'} transition-colors`}>
                  {item.icon}
                </span>
                <span className="text-sm font-bold tracking-wide">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-1">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
            <LogOut size={20} className="text-slate-500" />
            <span className="text-sm font-bold tracking-wide">Exit to Site</span>
          </Link>
          <button 
            onClick={() => signOut()}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-400 hover:bg-rose-500/10 transition-all"
          >
            <LogOut size={20} />
            <span className="text-sm font-bold tracking-wide">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#080a0e]">
        <header className="h-16 bg-[#0f1115]/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
            <span className="text-indigo-500">System</span>
            <span className="text-slate-700">/</span>
            <span>{pathname.split('/').pop() || 'Dashboard'}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">System Live</span>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8 custom-scrollbar">
          {children}
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e2128;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2d313a;
        }
      `}</style>
    </div>
  );
}
