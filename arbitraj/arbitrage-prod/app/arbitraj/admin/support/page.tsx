'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  MessageSquare, User, Mail, Send, CheckCircle2, 
  Clock, Inbox, Trash2, Search, Filter, ChevronRight,
  MoreVertical, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SupportAdmin() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'ALL' | 'OPEN' | 'CLOSED'>('ALL');

  const fetchTickets = async () => {
    try {
      const res = await fetch('/api/admin/support');
      const data = await res.json();
      setTickets(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to load tickets', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleReply = async (id: string) => {
    if (!replyText.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/admin/support/${id}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reply: replyText }),
      });

      if (res.ok) {
        setReplyText('');
        setReplyingTo(null);
        fetchTickets();
      }
    } catch (error) {
      console.error('Reply error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu destek talebini silmek istediğinizden emin misiniz?')) return;
    
    try {
      const res = await fetch(`/api/admin/support/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        fetchTickets();
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = 
      ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      ticket.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'ALL' || ticket.status === filter;
    
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
        <p className="text-slate-500 font-bold animate-pulse uppercase tracking-widest text-[10px]">Veriler Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3 mb-2 text-indigo-400">
            <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
              <MessageSquare size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Destek Merkezi</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">Müşteri Talepleri</h1>
          <p className="text-slate-500 text-sm font-medium">Platform kullanıcılarından gelen mesajları yönetin ve yanıtlayın.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-1 flex">
            {(['ALL', 'OPEN', 'CLOSED'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all ${
                  filter === f 
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {f === 'ALL' ? 'TÜMÜ' : f === 'OPEN' ? 'AÇIK' : 'KAPALI'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search & Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="İsim, e-posta veya mesaj içeriğiyle ara..."
            className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] py-4 pl-14 pr-6 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-[1.5rem] p-4 flex flex-col justify-center items-center">
          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Toplam Talep</span>
          <span className="text-2xl font-black text-white">{tickets.length}</span>
        </div>
      </div>

      {/* Main List */}
      <div className="grid grid-cols-1 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredTickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className={`group relative overflow-hidden bg-white/[0.02] border-white/10 hover:border-indigo-500/30 transition-all duration-500 rounded-[2rem] ${ticket.status === 'OPEN' ? 'ring-1 ring-indigo-500/20 shadow-xl shadow-indigo-500/5' : ''}`}>
                {/* Status Indicator Bar */}
                <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${ticket.status === 'OPEN' ? 'bg-indigo-500' : 'bg-emerald-500'}`} />
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* User Profile Info */}
                    <div className="flex flex-col md:w-1/4 gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black border transition-all ${
                          ticket.status === 'OPEN' 
                            ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' 
                            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        }`}>
                          {ticket.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-black text-white group-hover:text-indigo-400 transition-colors leading-tight truncate">{ticket.name}</h3>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                            <Mail size={12} />
                            {ticket.email}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 mt-2">
                        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-600 bg-white/5 px-3 py-2 rounded-lg">
                          <span>Durum</span>
                          <span className={ticket.status === 'OPEN' ? 'text-indigo-400' : 'text-emerald-400'}>
                            {ticket.status === 'OPEN' ? 'BEKLEYEN' : 'TAMAMLANDI'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-600 bg-white/5 px-3 py-2 rounded-lg">
                          <span>Tarih</span>
                          <span className="text-slate-400">{new Date(ticket.created_at).toLocaleDateString('tr-TR')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Message Content */}
                    <div className="flex-1 flex flex-col gap-4">
                      <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 relative">
                        <div className="absolute top-4 right-4 text-white/5">
                          <MessageSquare size={40} />
                        </div>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <Inbox size={12} /> Kullanıcı Mesajı
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed italic relative z-10">
                          "{ticket.message}"
                        </p>
                      </div>

                      {ticket.reply ? (
                        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6">
                          <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <CheckCircle2 size={12} /> Admin Yanıtı (E-posta ile gönderildi)
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {ticket.reply}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          {replyingTo === ticket.id ? (
                            <div className="w-full space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                              <textarea
                                autoFocus
                                placeholder="Cevabınızı buraya yazın..."
                                className="w-full bg-slate-950/80 border border-indigo-500/30 rounded-2xl p-5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all h-32 resize-none shadow-inner"
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                              />
                              <div className="flex gap-3">
                                <Button 
                                  onClick={() => handleReply(ticket.id)}
                                  disabled={submitting || !replyText.trim()}
                                  className="flex-1 py-4 text-xs font-black uppercase tracking-widest rounded-xl bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20"
                                >
                                  {submitting ? 'Gönderiliyor...' : 'E-posta Olarak Yanıtla'}
                                  <Send size={14} className="ml-2" />
                                </Button>
                                <button 
                                  onClick={() => { setReplyingTo(null); setReplyText(''); }}
                                  className="px-6 py-4 bg-white/5 hover:bg-white/10 text-slate-400 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
                                >
                                  Vazgeç
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex gap-2 w-full">
                              <Button 
                                onClick={() => setReplyingTo(ticket.id)}
                                className="flex-1 py-4 text-xs font-black uppercase tracking-widest rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                              >
                                <Send size={14} className="mr-2" />
                                Yanıtla
                              </Button>
                              <button 
                                onClick={() => handleDelete(ticket.id)}
                                className="p-4 bg-red-500/5 text-red-500/40 hover:text-red-500 hover:bg-red-500/10 border border-white/5 hover:border-red-500/20 rounded-xl transition-all"
                                title="Talebi Sil"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredTickets.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="py-32 text-center bg-white/[0.02] border border-dashed border-white/10 rounded-[3rem]"
          >
            <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center text-slate-600 mx-auto mb-8 border border-white/5">
              <Inbox size={48} strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Talep Bulunmuyor</h3>
            <p className="text-slate-500 max-w-xs mx-auto text-sm leading-relaxed font-medium">
              Arama kriterlerinize uygun herhangi bir destek talebi bulunamadı.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
