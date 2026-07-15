"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, Coins, DollarSign, TrendingDown, TrendingUp, ShoppingCart, Percent, Store, ArrowDownRight, ArrowUpRight, RefreshCcw, Activity, Shield, Settings, Zap, Award } from "lucide-react";
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useAppStore } from '@/store/useAppStore';
import { translations } from '@/lib/translations';

export default function ArbitrageCalculator() {
  const { data: session } = useSession();
  const { language, setLanguage } = useLanguageStore();
  const { appMode } = useAppStore();
  const t = translations[language];

  const [balance, setBalance] = useState<string>("1000");
  const [bgUrl, setBgUrl] = useState<string>("/bg.mp4");
  const [bgType, setBgType] = useState<string>("local_video");
  const [cmsData, setCmsData] = useState<Record<string, string>>({});

  React.useEffect(() => {
    fetch('/api/admin/cms')
      .then(res => res.json())
      .then(data => {
        setCmsData(data);
        if (data['calculator.bgUrl']) {
          setBgUrl(data['calculator.bgUrl']);
          setBgType(data['calculator.bgType'] || 'local_video');
        }
      })
      .catch(err => console.error("Failed to load background:", err));
  }, []);

  const footerCopyright = cmsData['footer.copyright'] || `© 2024 ${t.brand.logo} INFRA. ${t.footer.rights}`;

  // Global Market Settings
  const [buyMarket, setBuyMarket] = useState<string>("csfloat");
  const [sellMarket, setSellMarket] = useState<string>("steam");

  // 1. Tur State (A -> B)
  const [buyPrice1, setBuyPrice1] = useState<string>("50");
  const [sellPrice1, setSellPrice1] = useState<string>("55");

  // 2. Tur State (B -> A)
  const [buyPrice2, setBuyPrice2] = useState<string>("20");
  const [sellPrice2, setSellPrice2] = useState<string>("25");

  const b = parseFloat(balance) || 0;
  const bp1 = parseFloat(buyPrice1) || 0;
  const sp1 = parseFloat(sellPrice1) || 0;
  const bp2 = parseFloat(buyPrice2) || 0;
  const sp2 = parseFloat(sellPrice2) || 0;

  const getCommissionRate = (market: string) => (market === "csfloat" ? 0.02 : 0.15);
  const getMarketName = (market: string) => (market === "csfloat" ? "CSFloat" : "Steam");

  const marketA = getMarketName(buyMarket);
  const marketB = getMarketName(sellMarket);

  // DÖNGÜ MANTIĞI (A -> B -> B -> A)
  // 1. ADIM: A Mağazasından 1. Tur Alımı (Komisyon Yok)
  const quantity1 = bp1 > 0 ? Math.floor(b / bp1) : 0;
  const spent1 = quantity1 * bp1;
  const remaining1 = b - spent1;

  // 2. ADIM: B Mağazasına 1. Tur Satışı (B Mağazası Komisyonu)
  const total_sale1 = quantity1 * sp1;
  const commissionRate1 = getCommissionRate(sellMarket);
  const commission1 = total_sale1 * commissionRate1;
  const net1 = total_sale1 - commission1;

  // 3. ADIM: B Mağazasından 2. Tur Alımı (Komisyon Yok)
  const quantity2 = bp2 > 0 ? Math.floor(net1 / bp2) : 0;
  const spent2 = quantity2 * bp2;
  const remaining2 = net1 - spent2;

  // 4. ADIM: A Mağazasına 2. Tur Satışı (A Mağazası Komisyonu)
  const total_sale2 = quantity2 * sp2;
  const commissionRate2 = getCommissionRate(buyMarket); // Geri dönüş satışı A mağazasında yapılıyor
  const commission2 = total_sale2 * commissionRate2;
  const net2 = total_sale2 - commission2;

  // 5. KARŞILAŞTIRMA
  const profit = net2 - b;
  const isProfit = net2 > b;
  const isNeutral = net2 === b;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(val);
  };

  const preventMinus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === '-' || e.key === 'e') {
      e.preventDefault();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-purple-500/30 pb-0 overflow-hidden flex flex-col">
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
                  {session?.user?.name?.[0] || 'U'}
                </div>
                <div className="absolute -top-1 -right-1 bg-amber-500 w-4 h-4 rounded-full border-2 border-slate-900 flex items-center justify-center text-white shadow-lg">
                  <Award size={8} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black">
        {(() => {
          if (!bgUrl) return null;
          
          if (bgType === 'youtube') {
            const videoId = bgUrl.split('/').pop()?.split('?')[0];
            const ytSrc = `${bgUrl}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1`;
            return (
              <iframe
                src={ytSrc}
                className="w-full h-full object-cover opacity-50 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[150vw] min-h-[150vh]"
                allow="autoplay; encrypted-media"
                frameBorder="0"
              />
            );
          }

          if (bgType.includes('video') || bgUrl.match(/\.(mp4|webm|ogg)$/i)) {
            return (
              <video 
                key={bgUrl}
                src={bgUrl}
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-50 absolute inset-0"
              />
            );
          }

          return (
            <img 
              src={bgUrl} 
              alt="background" 
              className="w-full h-full object-cover opacity-50 absolute inset-0"
            />
          );
        })()}
        {/* Yazıların okunabilmesi için karartma katmanı */}
        <div className="absolute inset-0 bg-[#0A0A0B]/80 backdrop-blur-[4px]"></div>
      </div>

      <div className="relative z-10 p-6 md:p-12 max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4 border-b border-white/10 pb-6"
        >
          <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
            <RefreshCcw className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Tam Döngü Arbitraj Simülatörü
            </h1>
            <p className="text-gray-400 mt-1">Mağaza seçiminize göre otomatik güncellenen çift yönlü arbitraj hesaplayıcısı.</p>
          </div>
        </motion.div>

        {/* Global Configuration Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants} className="bg-[#121214] border border-white/10 p-5 rounded-2xl focus-within:border-emerald-500/50 transition-colors shadow-xl">
            <label className="text-sm text-gray-400 font-medium mb-2 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              Başlangıç Bakiyesi
            </label>
            <input 
              type="number" 
              min="0"
              onKeyDown={preventMinus}
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="w-full bg-transparent text-2xl font-bold text-white outline-none placeholder-gray-600 focus:text-emerald-400 transition-colors"
              placeholder="0.00"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[#121214] border border-white/10 p-5 rounded-2xl focus-within:border-blue-500/50 transition-colors shadow-xl">
            <label className="text-sm text-gray-400 font-medium mb-2 flex items-center gap-2">
              <ArrowDownRight className="w-4 h-4 text-blue-400" />
              1. Tur: Alış Mağazası
            </label>
            <select 
              value={buyMarket} 
              onChange={(e) => setBuyMarket(e.target.value)}
              className="w-full bg-transparent text-xl font-bold text-white outline-none focus:text-blue-400 transition-colors mt-1"
            >
              <option value="csfloat" className="bg-[#121214]">CSFloat</option>
              <option value="steam" className="bg-[#121214]">Steam</option>
            </select>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[#121214] border border-white/10 p-5 rounded-2xl focus-within:border-purple-500/50 transition-colors shadow-xl">
            <label className="text-sm text-gray-400 font-medium mb-2 flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4 text-purple-400" />
              1. Tur: Satış Mağazası
            </label>
            <select 
              value={sellMarket} 
              onChange={(e) => setSellMarket(e.target.value)}
              className="w-full bg-transparent text-xl font-bold text-white outline-none focus:text-purple-400 transition-colors mt-1"
            >
              <option value="steam" className="bg-[#121214]">Steam (%15 Komisyon)</option>
              <option value="csfloat" className="bg-[#121214]">CSFloat (%2 Komisyon)</option>
            </select>
          </motion.div>
        </motion.div>

        {/* Products Price Settings */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Phase 1 Settings */}
          <motion.div variants={itemVariants} className="bg-[#121214] border border-white/10 p-6 rounded-2xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">1. Tur: İlk Gidiş</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">({marketA} {'->'} {marketB})</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">{marketA} Alış Fiyatı</label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input 
                    type="number" 
                    min="0"
                    onKeyDown={preventMinus}
                    value={buyPrice1}
                    onChange={(e) => setBuyPrice1(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-9 pr-3 text-white outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">{marketB} Satış Fiyatı</label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input 
                    type="number" 
                    min="0"
                    onKeyDown={preventMinus}
                    value={sellPrice1}
                    onChange={(e) => setSellPrice1(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-9 pr-3 text-white outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phase 2 Settings */}
          <motion.div variants={itemVariants} className="bg-[#121214] border border-white/10 p-6 rounded-2xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <RefreshCcw className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">2. Tur: Geri Dönüş</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">({marketB} {'->'} {marketA})</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">{marketB} Alış Fiyatı</label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input 
                    type="number" 
                    min="0"
                    onKeyDown={preventMinus}
                    value={buyPrice2}
                    onChange={(e) => setBuyPrice2(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-9 pr-3 text-white outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">{marketA} Satış Fiyatı</label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input 
                    type="number" 
                    min="0"
                    onKeyDown={preventMinus}
                    value={sellPrice2}
                    onChange={(e) => setSellPrice2(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-9 pr-3 text-white outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-4 gap-4"
        >
          {/* Step 1 */}
          <motion.div variants={itemVariants} className="bg-[#121214] border border-white/10 rounded-2xl p-5 relative overflow-hidden group shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xs border border-blue-500/20">1</div>
              <h2 className="text-sm font-semibold text-white">1. Tur: İlk Alım</h2>
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1"><Store className="w-3 h-3"/> {marketA}</div>
            <div className="space-y-3">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-400 text-xs">Alınan Adet</span>
                <span className="text-lg font-bold text-white">{quantity1}</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-400 text-xs">Harcanan (Net)</span>
                <span className="text-sm font-semibold text-red-400">-{formatCurrency(spent1)}</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-gray-400 text-xs">Kalan Bakiye</span>
                <span className="text-sm font-semibold text-gray-300">{formatCurrency(remaining1)}</span>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={itemVariants} className="bg-[#121214] border border-white/10 rounded-2xl p-5 relative overflow-hidden group shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-xs border border-purple-500/20">2</div>
              <h2 className="text-sm font-semibold text-white">1. Tur: Satış</h2>
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1"><Store className="w-3 h-3"/> {marketB}</div>
            <div className="space-y-3">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-400 text-xs">Brüt Satış</span>
                <span className="text-sm font-semibold text-gray-300">{formatCurrency(total_sale1)}</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-400 text-xs">Komisyon (%{commissionRate1 * 100})</span>
                <span className="text-sm font-semibold text-red-400">-{formatCurrency(commission1)}</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-gray-400 text-xs">Net Geçen</span>
                <span className="text-lg font-bold text-emerald-400">{formatCurrency(net1)}</span>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={itemVariants} className="bg-[#121214] border border-white/10 rounded-2xl p-5 relative overflow-hidden group shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs border border-amber-500/20">3</div>
              <h2 className="text-sm font-semibold text-white">2. Tur: Geri Dönüş Alımı</h2>
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1"><Store className="w-3 h-3"/> {marketB}</div>
            <div className="space-y-3">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-400 text-xs">Alınan Adet</span>
                <span className="text-lg font-bold text-white">{quantity2}</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-400 text-xs">Harcanan (Net)</span>
                <span className="text-sm font-semibold text-red-400">-{formatCurrency(spent2)}</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-gray-400 text-xs">Kalan Bakiye</span>
                <span className="text-sm font-semibold text-gray-300">{formatCurrency(remaining2)}</span>
              </div>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div variants={itemVariants} className="bg-[#121214] border border-white/10 rounded-2xl p-5 relative overflow-hidden group shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xs border border-cyan-500/20">4</div>
              <h2 className="text-sm font-semibold text-white">2. Tur: Geri Dönüş Satışı</h2>
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1"><Store className="w-3 h-3"/> {marketA}</div>
            <div className="space-y-3">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-400 text-xs">Brüt Satış</span>
                <span className="text-sm font-semibold text-gray-300">{formatCurrency(total_sale2)}</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-400 text-xs">Komisyon (%{commissionRate2 * 100})</span>
                <span className="text-sm font-semibold text-red-400">-{formatCurrency(commission2)}</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-gray-400 text-xs">Final Net</span>
                <span className="text-lg font-bold text-emerald-400">{formatCurrency(net2)}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Final Result Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={`relative overflow-hidden rounded-3xl p-8 border shadow-2xl bg-[#0A0A0B] ${
            isProfit 
              ? "border-emerald-500/50" 
              : isNeutral 
                ? "border-gray-500/50" 
                : "border-red-500/50"
          }`}
        >
          {/* Background Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[100px] opacity-30 pointer-events-none ${
            isProfit ? "bg-emerald-500" : isNeutral ? "bg-gray-500" : "bg-red-500"
          }`} />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className={`p-5 rounded-2xl ${
                isProfit ? "bg-emerald-500/20 text-emerald-400" : isNeutral ? "bg-gray-500/20 text-gray-400" : "bg-red-500/20 text-red-400"
              }`}>
                {isProfit ? <TrendingUp className="w-10 h-10" /> : isNeutral ? <RefreshCcw className="w-10 h-10" /> : <TrendingDown className="w-10 h-10" />}
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Döngü Sonucu</h3>
                <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                  isProfit ? "text-emerald-400" : isNeutral ? "text-gray-400" : "text-red-400"
                }`}>
                  {isProfit ? "KÂR VAR" : isNeutral ? "NÖTR" : "ZARAR VAR"}
                </h2>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="text-sm text-gray-400 mb-1">Net Fark</div>
              <div className={`text-4xl md:text-5xl font-bold tracking-tight ${
                isProfit ? "text-emerald-400" : isNeutral ? "text-gray-400" : "text-red-400"
              }`}>
                {profit > 0 ? "+" : ""}{formatCurrency(profit)}
              </div>
              <div className="text-sm font-medium text-gray-500 mt-2">
                Yüzdelik: {b > 0 ? ((profit / b) * 100).toFixed(2) : "0"}%
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 pt-20 pb-12 bg-slate-900/80 backdrop-blur-md relative z-10 mt-auto">
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
              <div className="text-[10px] text-slate-800 font-bold uppercase tracking-widest">{footerCopyright}</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
