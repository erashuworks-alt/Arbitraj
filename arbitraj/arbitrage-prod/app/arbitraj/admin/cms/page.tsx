'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/Card';
import { Save, Loader2, Link2, Upload, CheckCircle2, Trash2, PlayCircle, Image as ImageIcon } from 'lucide-react';

function ImageUploadField({ 
  cmsKey, 
  label, 
  value, 
  onSave, 
  onChange, 
  saving, 
  setSaving,
  cmsLang 
}: { 
  cmsKey: string; 
  label: string; 
  value: string; 
  onSave: (key: string, val: string) => void;
  onChange: (key: string, val: string) => void;
  saving: boolean;
  setSaving: (s: boolean) => void;
  cmsLang: 'tr' | 'en';
}) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  
  // Media keys don't usually need language prefix as they are common URLS
  // However, we allow it if needed. For now, let's keep media keys as they are
  const finalKey = (cmsKey.includes('.image') || cmsKey.includes('.link')) ? cmsKey : `${cmsLang}:${cmsKey}`;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('key', finalKey);
      const res = await fetch('/api/admin/upload-cms-image', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.path) {
        onChange(cmsKey, data.path);
      } else {
        alert(data.error || 'Yükleme başarısız');
      }
    } catch (err) {
      console.error(err);
      alert('Yükleme sırasında hata oluştu');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mb-8 last:mb-0">
      <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3">{label}</label>
      <div className="flex gap-3 items-stretch">
        <input
          type="text"
          className="flex-1 bg-slate-900/40 border border-white/5 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-all"
          value={value}
          onChange={(e) => onChange(cmsKey, e.target.value)}
          placeholder="URL girin veya dosya seçin..."
        />
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={saving}
          className="px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl flex items-center justify-center transition-all disabled:opacity-50 border border-white/5"
          title="Bilgisayardan Yükle"
        >
          <Upload size={18} />
        </button>
        <button
          onClick={() => onSave(cmsKey, value)}
          disabled={saving}
          className="px-8 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50 font-black text-[11px] uppercase tracking-widest shadow-lg shadow-indigo-600/20"
        >
          {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          Kaydet
        </button>
      </div>
      {value && (
        <div className="mt-4 flex items-center gap-4 p-3 bg-white/[0.02] rounded-xl border border-white/5">
          <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Önizleme</div>
            <div className="text-[10px] text-slate-400 truncate font-mono">{value}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CMSManager() {
  const [content, setContent] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'hero' | 'about' | 'strategies' | 'how-it-works' | 'info' | 'media'>('hero');
  const [cmsLang, setCmsLang] = useState<'tr' | 'en'>('tr');

  // Video section state
  const [videoTab, setVideoTab] = useState<'link' | 'upload'>('link');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUploading, setVideoUploading] = useState(false);
  const [videoSuccess, setVideoSuccess] = useState(false);
  const videoFileRef = useRef<HTMLInputElement>(null);

  // Calculator Background state
  const [calcTab, setCalcTab] = useState<'link' | 'upload'>('link');
  const [calcUrl, setCalcUrl] = useState('');
  const [calcFile, setCalcFile] = useState<File | null>(null);
  const [calcUploading, setCalcUploading] = useState(false);
  const [calcSuccess, setCalcSuccess] = useState(false);
  const calcFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch('/api/admin/cms');
        const data = await res.json();
        setContent(data);
        if (data['hero.demoVideoUrl']) {
          const isLocal = data['hero.demoVideoType'] === 'local';
          if (!isLocal) {
            setVideoUrl(data['hero.demoVideoUrl']);
          }
          setVideoTab(isLocal ? 'upload' : 'link');
        }
        if (data['calculator.bgUrl']) {
          const isLocal = data['calculator.bgType']?.startsWith('local');
          if (!isLocal) {
            setCalcUrl(data['calculator.bgUrl']);
          }
          setCalcTab(isLocal ? 'upload' : 'link');
        }
      } catch (error) {
        console.error('Failed to load CMS content', error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  const handleSave = async (key: string, value: string) => {
    const finalKey = (key.includes('.image') || key.includes('.link') || activeTab === 'media') ? key : `${cmsLang}:${key}`;
    
    setSaving(true);
    try {
      await fetch('/api/admin/cms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: finalKey, value }),
      });
      setContent(prev => ({ ...prev, [finalKey]: value }));
    } catch (error) {
      console.error('Failed to save', error);
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    const finalKey = (key.includes('.image') || key.includes('.link') || activeTab === 'media') ? key : `${cmsLang}:${key}`;
    setContent(prev => ({ ...prev, [finalKey]: value }));
  };

  const toYouTubeEmbed = (url: string): string => {
    const raw = url.trim();
    if (raw.includes('youtube.com/embed/')) return raw;
    const shortMatch = raw.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
    const watchMatch = raw.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
    return raw;
  };

  const handleSaveVideoLink = async () => {
    if (!videoUrl.trim()) return;
    const embedUrl = toYouTubeEmbed(videoUrl);
    setVideoUploading(true);
    try {
      await fetch('/api/admin/cms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'hero.demoVideoUrl', value: embedUrl }),
      });
      await fetch('/api/admin/cms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'hero.demoVideoType', value: 'youtube' }),
      });
      setContent(prev => ({ ...prev, 'hero.demoVideoUrl': embedUrl, 'hero.demoVideoType': 'youtube' }));
      setVideoUrl(embedUrl);
      setVideoSuccess(true);
      setTimeout(() => setVideoSuccess(false), 3000);
    } catch (e) {
      console.error(e);
    } finally {
      setVideoUploading(false);
    }
  };

  const handleUploadVideo = async () => {
    if (!videoFile) return;
    setVideoUploading(true);
    setVideoSuccess(false);
    try {
      const formData = new FormData();
      formData.append('video', videoFile);
      const res = await fetch('/api/admin/upload-demo-video', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.path) {
        setContent(prev => ({ ...prev, 'hero.demoVideoUrl': data.path, 'hero.demoVideoType': 'local' }));
        setVideoSuccess(true);
        setVideoFile(null);
        if (videoFileRef.current) videoFileRef.current.value = '';
        setTimeout(() => setVideoSuccess(false), 4000);
      } else {
        alert(data.error || 'Yükleme başarısız.');
      }
    } catch (e) {
      console.error(e);
      alert('Yükleme sırasında hata oluştu.');
    } finally {
      setVideoUploading(false);
    }
  };

  const handleRemoveVideo = async () => {
    if (!confirm('Demo videoyu kaldırmak istediğinize emin misiniz?')) return;
    await fetch('/api/admin/cms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: 'hero.demoVideoUrl', value: '' }),
    });
    setContent(prev => ({ ...prev, 'hero.demoVideoUrl': '' }));
    setVideoUrl('');
    setVideoFile(null);
    if (videoFileRef.current) videoFileRef.current.value = '';
  };

  const handleSaveCalcLink = async () => {
    if (!calcUrl.trim()) return;
    setCalcUploading(true);
    try {
      const isYoutube = calcUrl.includes('youtube.com') || calcUrl.includes('youtu.be');
      const finalUrl = isYoutube ? toYouTubeEmbed(calcUrl) : calcUrl.trim();
      const type = isYoutube ? 'youtube' : 'external_link';
      
      await fetch('/api/admin/cms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'calculator.bgUrl', value: finalUrl }),
      });
      await fetch('/api/admin/cms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'calculator.bgType', value: type }),
      });
      setContent(prev => ({ ...prev, 'calculator.bgUrl': finalUrl, 'calculator.bgType': type }));
      setCalcUrl(finalUrl);
      setCalcSuccess(true);
      setTimeout(() => setCalcSuccess(false), 3000);
    } catch (e) {
      console.error(e);
    } finally {
      setCalcUploading(false);
    }
  };

  const handleUploadCalcMedia = async () => {
    if (!calcFile) return;
    setCalcUploading(true);
    setCalcSuccess(false);
    try {
      const formData = new FormData();
      formData.append('media', calcFile);
      const res = await fetch('/api/admin/upload-calculator-bg', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.path) {
        setContent(prev => ({ ...prev, 'calculator.bgUrl': data.path, 'calculator.bgType': data.type }));
        setCalcSuccess(true);
        setCalcFile(null);
        if (calcFileRef.current) calcFileRef.current.value = '';
        setTimeout(() => setCalcSuccess(false), 4000);
      } else {
        alert(data.error || 'Yükleme başarısız.');
      }
    } catch (e) {
      console.error(e);
      alert('Yükleme sırasında hata oluştu.');
    } finally {
      setCalcUploading(false);
    }
  };

  const handleRemoveCalcMedia = async () => {
    if (!confirm('Arka plan medyasını kaldırmak istediğinize emin misiniz?')) return;
    await fetch('/api/admin/cms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: 'calculator.bgUrl', value: '' }),
    });
    setContent(prev => ({ ...prev, 'calculator.bgUrl': '', 'calculator.bgType': '' }));
    setCalcUrl('');
    setCalcFile(null);
    if (calcFileRef.current) calcFileRef.current.value = '';
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Loader2 size={32} className="text-indigo-500 animate-spin" />
    </div>
  );

  const renderField = (key: string, label: string, isTextarea = false) => {
    const finalKey = (key.includes('.image') || key.includes('.link') || activeTab === 'media') ? key : `${cmsLang}:${key}`;
    const value = content[finalKey] || '';
    const baseValue = content[key] || '';
    
    // Show placeholder if specific lang is empty
    const displayPlaceholder = cmsLang === 'en' ? (baseValue || 'Enter English translation...') : 'Metin girin...';

    return (
      <div className="mb-8 last:mb-0 group">
        <div className="flex items-center justify-between mb-3">
          <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-indigo-400 transition-colors">
            {label}
          </label>
          {cmsLang === 'en' && baseValue && !value && (
            <button 
              onClick={() => handleChange(key, baseValue)}
              className="text-[9px] font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-widest flex items-center gap-1 bg-indigo-500/5 px-2 py-1 rounded-md border border-indigo-500/10 transition-all"
            >
              <CheckCircle2 size={10} />
              TR'den Kopyala
            </button>
          )}
        </div>
        <div className="flex gap-3 items-stretch">
          {isTextarea ? (
            <textarea
              className="flex-1 bg-slate-900/40 border border-white/5 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.02] transition-all h-32 resize-none shadow-inner"
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder={displayPlaceholder}
            />
          ) : (
            <input
              type="text"
              className="flex-1 bg-slate-900/40 border border-white/5 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.02] transition-all shadow-inner"
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder={displayPlaceholder}
            />
          )}
          <button
            onClick={() => handleSave(key, value)}
            disabled={saving}
            className="px-8 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50 font-black text-[11px] uppercase tracking-widest shadow-lg shadow-indigo-600/20"
          >
            {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
            Kaydet
          </button>
        </div>
        {cmsLang === 'en' && baseValue && (
          <div className="mt-2 text-[10px] text-slate-600 italic">
            Mevcut TR Değeri: <span className="text-slate-500">{baseValue}</span>
          </div>
        )}
      </div>
    );
  };

  const currentVideoUrl = content['hero.demoVideoUrl'];
  const currentVideoType = content['hero.demoVideoType'];
  const currentCalcUrl = content['calculator.bgUrl'];
  const currentCalcType = content['calculator.bgType'];

  const tabs = [
    { id: 'hero', label: 'Ana Sayfa', icon: <ImageIcon size={18} /> },
    { id: 'how-it-works', label: 'Nasıl Çalışır', icon: <CheckCircle2 size={18} /> },
    { id: 'strategies', label: 'Stratejiler', icon: <PlayCircle size={18} /> },
    { id: 'info', label: 'Bilgi Blokları', icon: <PlayCircle size={18} /> },
    { id: 'about', label: 'Hakkımızda', icon: <ImageIcon size={18} /> },
    { id: 'media', label: 'Video & Arka Plan', icon: <PlayCircle size={18} /> },
    { id: 'general', label: 'Genel & Sosyal', icon: <Link2 size={18} /> },
  ];

  return (
    <div className="pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-black text-white tracking-tight">İçerik Yönetimi</h2>
          <p className="text-slate-500 font-medium">Platformdaki tüm metin ve medyaları buradan özelleştirin.</p>
        </div>
        
        {/* Language Toggle */}
        <div className="flex p-1.5 bg-slate-900/50 rounded-2xl border border-white/5 shadow-2xl">
          <button
            onClick={() => setCmsLang('tr')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              cmsLang === 'tr' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-500 hover:text-white'
            }`}
          >
            🇹🇷 Türkçe
          </button>
          <button
            onClick={() => setCmsLang('en')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              cmsLang === 'en' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-500 hover:text-white'
            }`}
          >
            🇺🇸 English
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-72 shrink-0 space-y-2 sticky top-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 translate-x-2' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={activeTab === tab.id ? 'text-white' : 'text-slate-500'}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <main className="flex-1 w-full max-w-3xl">
          {activeTab === 'hero' && (
            <Card className="p-10 bg-slate-900/20 border-white/5 rounded-[2.5rem] backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <h3 className="text-lg font-black text-white">Ana Sayfa (Hero) Ayarları</h3>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-500/20">
                  {cmsLang === 'tr' ? 'Türkçe Düzenleniyor' : 'English Editing'}
                </span>
              </div>
              {renderField('hero.title', 'Ana Başlık')}
              {renderField('hero.subtitle', 'Alt Başlık (Açıklama)', true)}
              <div className="mt-12 pt-8 border-t border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-8">Buton Metinleri</h4>
                {renderField('hero.cta.primary', 'Birinci Buton (Başla)')}
                {renderField('hero.cta.secondary', 'İkinci Buton (Nasıl Çalışır)')}
                {renderField('hero.cta.ghost', 'Üçüncü Buton (Demo)')}
              </div>
            </Card>
          )}

          {activeTab === 'how-it-works' && (
            <Card className="p-10 bg-slate-900/20 border-white/5 rounded-[2.5rem]">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <h3 className="text-lg font-black text-white">Nasıl Çalışır? Adımları</h3>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-500/20">
                  {cmsLang === 'tr' ? 'Türkçe Düzenleniyor' : 'English Editing'}
                </span>
              </div>
              <div className="space-y-12">
                {[1, 2, 3, 4].map(num => (
                  <div key={num} className="p-6 bg-white/[0.02] rounded-[2rem] border border-white/5 relative group hover:bg-white/[0.04] transition-all">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-indigo-600/20">
                      {num}
                    </div>
                    {renderField(`howItWorks.step${num}.title`, 'Adım Başlığı')}
                    {renderField(`howItWorks.step${num}.desc`, 'Adım Açıklaması', true)}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'strategies' && (
            <Card className="p-10 bg-slate-900/20 border-white/5 rounded-[2.5rem]">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <h3 className="text-lg font-black text-white">Strateji Modları</h3>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-500/20">
                  {cmsLang === 'tr' ? 'Türkçe Düzenleniyor' : 'English Editing'}
                </span>
              </div>
              <div className="space-y-12">
                <div className="p-8 bg-indigo-500/[0.03] rounded-[2.5rem] border border-indigo-500/10">
                  <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-6">Safe Mode (Güvenli)</div>
                  {renderField('strategies.safe.title', 'Başlık')}
                  {renderField('strategies.safe.desc', 'Açıklama', true)}
                  {renderField('strategies.safe.link', 'Buton Linki')}
                  {renderField('strategies.safe.buttonText', 'Buton Yazısı')}
                  <ImageUploadField 
                    cmsKey="strategies.safe.image" 
                    label="İkon / Logo"
                    value={content['strategies.safe.image'] || ''}
                    onSave={handleSave}
                    onChange={handleChange}
                    saving={saving}
                    setSaving={setSaving}
                    cmsLang={cmsLang}
                  />
                </div>

                <div className="p-8 bg-rose-500/[0.03] rounded-[2.5rem] border border-rose-500/10">
                  <div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-6">Sniper Mode (Keskin Nişancı)</div>
                  {renderField('strategies.sniper.title', 'Başlık')}
                  {renderField('strategies.sniper.desc', 'Açıklama', true)}
                  {renderField('strategies.sniper.link', 'Buton Linki')}
                  {renderField('strategies.sniper.buttonText', 'Buton Yazısı')}
                  <ImageUploadField 
                    cmsKey="strategies.sniper.image" 
                    label="İkon / Logo"
                    value={content['strategies.sniper.image'] || ''}
                    onSave={handleSave}
                    onChange={handleChange}
                    saving={saving}
                    setSaving={setSaving}
                    cmsLang={cmsLang}
                  />
                </div>

                <div className="p-8 bg-cyan-500/[0.03] rounded-[2.5rem] border border-cyan-500/10">
                  <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-6">Steam Grubu Bölümü</div>
                  {renderField('steamGroup.title', 'Bölüm Başlığı')}
                  {renderField('steamGroup.description', 'Bölüm Açıklaması', true)}
                  {renderField('steamGroup.button', 'Buton Metni')}
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'info' && (
            <Card className="p-10 bg-slate-900/20 border-white/5 rounded-[2.5rem]">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <h3 className="text-lg font-black text-white">Bilgi Blokları & Senaryolar</h3>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-500/20">
                  {cmsLang === 'tr' ? 'Türkçe Düzenleniyor' : 'English Editing'}
                </span>
              </div>
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Arbitraj Nedir?</h4>
                  {renderField('info.whatIs.title', 'Başlık')}
                  {renderField('info.whatIs.description', 'Açıklama', true)}
                </div>
                <div className="pt-8 border-t border-white/5">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Kâr Senaryosu</h4>
                  {renderField('info.scenario.title', 'Başlık')}
                  {renderField('info.scenario.netProfitLabel', 'Net Kâr Etiketi')}
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'about' && (
            <Card className="p-10 bg-slate-900/20 border-white/5 rounded-[2.5rem]">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <h3 className="text-lg font-black text-white">Hakkımızda Bölümü</h3>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-500/20">
                  {cmsLang === 'tr' ? 'Türkçe Düzenleniyor' : 'English Editing'}
                </span>
              </div>
              {renderField('about.title', 'Bölüm Başlığı')}
              {renderField('about.description', 'Hakkımızda Metni', true)}
            </Card>
          )}

          {activeTab === 'general' && (
            <Card className="p-10 bg-slate-900/20 border-white/5 rounded-[2.5rem]">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <h3 className="text-lg font-black text-white">Genel & Sosyal Ayarlar</h3>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-500/20">
                  {cmsLang === 'tr' ? 'Türkçe Düzenleniyor' : 'English Editing'}
                </span>
              </div>
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Alt Bilgi (Footer)</h4>
                  {renderField('footer.copyright', 'Telif Hakkı Metni')}
                  {renderField('footer.contactEmail', 'İletişim E-postası')}
                </div>
                <div className="pt-8 border-t border-white/5">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Sosyal Medya Linkleri</h4>
                  {renderField('social.twitter', 'Twitter (X)')}
                  {renderField('social.steam', 'Steam Grubu')}
                  {renderField('social.discord', 'Discord Sunucusu')}
                  {renderField('social.github', 'GitHub')}
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'media' && (
            <div className="space-y-8">
              <Card className="p-10 bg-slate-900/20 border-white/5 rounded-[2.5rem]">
                <h3 className="text-lg font-black text-white mb-2">Simülatör Arka Planı</h3>
                <p className="text-xs text-slate-500 mb-8 font-medium">Hesap makinesinin arkasındaki görsel veya video.</p>
                {currentCalcUrl && (
                  <div className="mb-8 p-1 bg-slate-950 rounded-2xl border border-white/5 overflow-hidden">
                    <div className="relative aspect-video bg-black flex items-center justify-center">
                      {currentCalcType?.includes('video') || currentCalcUrl.endsWith('.mp4') || currentCalcUrl.endsWith('.webm') ? (
                        <video src={currentCalcUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                      ) : currentCalcType === 'youtube' ? (
                        <div className="p-6 text-center">
                          <PlayCircle size={48} className="text-indigo-500 mx-auto mb-3 opacity-50" />
                          <div className="text-[10px] text-slate-500 font-mono break-all">{currentCalcUrl}</div>
                        </div>
                      ) : (
                        <img src={currentCalcUrl} alt="Arka plan" className="w-full h-full object-cover" />
                      )}
                      <div className="absolute top-4 right-4">
                        <button onClick={handleRemoveCalcMedia} className="p-2 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white rounded-lg border border-rose-500/20 transition-all"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex gap-1 mb-6 p-1.5 bg-slate-950/50 rounded-2xl">
                  <button onClick={() => setCalcTab('link')} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${calcTab === 'link' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}>Link</button>
                  <button onClick={() => setCalcTab('upload')} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${calcTab === 'upload' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}>Yükle</button>
                </div>
                {calcTab === 'link' ? (
                  <div className="space-y-4">
                    <input type="url" value={calcUrl} onChange={(e) => setCalcUrl(e.target.value)} placeholder="https://..." className="w-full bg-slate-950 border border-white/5 rounded-xl p-4 text-sm text-white" />
                    <button onClick={handleSaveCalcLink} disabled={calcUploading} className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-black uppercase text-[11px] tracking-widest disabled:opacity-50">Kaydet</button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div onClick={() => calcFileRef.current?.click()} className="border-2 border-dashed border-white/5 rounded-2xl p-10 text-center hover:border-indigo-500/40 cursor-pointer">
                      {calcFile ? <div className="text-white text-sm font-bold">{calcFile.name}</div> : <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Medya Seçin</div>}
                    </div>
                    <input ref={calcFileRef} type="file" className="hidden" onChange={(e) => setCalcFile(e.target.files?.[0] || null)} />
                    {calcFile && <button onClick={handleUploadCalcMedia} disabled={calcUploading} className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black uppercase text-[11px] tracking-widest">Yükle</button>}
                  </div>
                )}
                {calcSuccess && <div className="mt-4 p-3 bg-emerald-500/10 text-emerald-400 text-center text-[10px] font-black uppercase rounded-xl border border-emerald-500/20">Başarılı</div>}
              </Card>

              <Card className="p-10 bg-slate-900/20 border-white/5 rounded-[2.5rem]">
                <h3 className="text-lg font-black text-white mb-2">Demo Video</h3>
                {currentVideoUrl && (
                  <div className="mb-8 p-1 bg-slate-950 rounded-2xl border border-white/5 overflow-hidden">
                    <div className="relative aspect-video bg-black flex items-center justify-center">
                      {currentVideoType === 'local' ? <video src={currentVideoUrl} controls className="w-full h-full object-cover" /> : <div className="text-[10px] text-slate-500 font-mono">{currentVideoUrl}</div>}
                      <div className="absolute top-4 right-4">
                        <button onClick={handleRemoveVideo} className="p-2 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white rounded-lg border border-rose-500/20 transition-all"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex gap-1 mb-6 p-1.5 bg-slate-950/50 rounded-2xl">
                  <button onClick={() => setVideoTab('link')} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${videoTab === 'link' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}>YouTube</button>
                  <button onClick={() => setVideoTab('upload')} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${videoTab === 'upload' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}>Yükle</button>
                </div>
                {videoTab === 'link' ? (
                  <div className="space-y-4">
                    <input type="url" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="YouTube Linki..." className="w-full bg-slate-950 border border-white/5 rounded-xl p-4 text-sm text-white" />
                    <button onClick={handleSaveVideoLink} disabled={videoUploading} className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-black uppercase text-[11px] tracking-widest disabled:opacity-50">Kaydet</button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div onClick={() => videoFileRef.current?.click()} className="border-2 border-dashed border-white/5 rounded-2xl p-10 text-center hover:border-indigo-500/40 cursor-pointer">
                      {videoFile ? <div className="text-white text-sm font-bold">{videoFile.name}</div> : <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Video Seçin</div>}
                    </div>
                    <input ref={videoFileRef} type="file" className="hidden" onChange={(e) => setVideoFile(e.target.files?.[0] || null)} />
                    {videoFile && <button onClick={handleUploadVideo} disabled={videoUploading} className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black uppercase text-[11px] tracking-widest">Yükle</button>}
                  </div>
                )}
                {videoSuccess && <div className="mt-4 p-3 bg-emerald-500/10 text-emerald-400 text-center text-[10px] font-black uppercase rounded-xl border border-emerald-500/20">Başarılı</div>}
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
