'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/Card';
import { Trash2, Edit2, Plus, Image as ImageIcon, Loader2 } from 'lucide-react';

export default function PartnersManager() {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form state
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [active, setActive] = useState(true);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [logoUrl, setLogoUrl] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchPartners = async () => {
    try {
      const res = await fetch('/api/admin/partners');
      const data = await res.json();
      setPartners(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to load partners', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const resetForm = () => {
    setName('');
    setLink('');
    setActive(true);
    setImageFile(null);
    setLogoUrl('');
    setPreview(null);
    setEditingId(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleOpenModal = (partner?: any) => {
    resetForm();
    if (partner) {
      setEditingId(partner.id);
      setName(partner.name);
      setLink(partner.link);
      setActive(partner.active);
      setPreview(partner.logo);
      if (partner.logo && partner.logo.startsWith('http')) {
        setLogoUrl(partner.logo);
      }
    }
    setShowModal(true);
  };

  const handleLogoUrlChange = async (url: string) => {
    setLogoUrl(url);
    if (!url) {
      setPreview(null);
      return;
    }

    if (url.startsWith('http')) {
      // If it looks like a direct image, show it
      if (url.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i)) {
        setPreview(url);
      } 
      // If it's a dynamic link (Steam/YouTube), fetch the logo
      else if (url.includes('steamcommunity.com') || url.includes('youtube.com') || url.includes('youtu.be')) {
        try {
          const res = await fetch(`/api/internal/dynamic-logo?url=${encodeURIComponent(url)}`);
          const data = await res.json();
          if (data.logoUrl) {
            setPreview(data.logoUrl);
          }
        } catch (err) {
          console.error('Failed to fetch preview logo:', err);
        }
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('link', link);
    formData.append('active', active.toString());
    if (logoUrl) {
      formData.append('logoUrl', logoUrl);
    }
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const url = editingId ? `/api/admin/partners/${editingId}` : '/api/admin/partners';
      const method = editingId ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        body: formData,
      });
      
      if (res.ok) {
        setShowModal(false);
        fetchPartners();
      } else {
        alert('Kaydetme başarısız oldu.');
      }
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu partneri silmek istediğinize emin misiniz?')) return;
    
    try {
      const res = await fetch(`/api/admin/partners/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPartners(partners.filter(p => p.id !== id));
      }
    } catch (error) {
      console.error('Delete error', error);
    }
  };

  if (loading) return <div className="text-white">Yükleniyor...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-1">İş Ortakları</h2>
          <p className="text-slate-400">Ana sayfadaki referans logolarını buradan yönetebilirsiniz.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus size={18} /> Yeni Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map(partner => (
          <Card key={partner.id} className="p-6 bg-white/5 border-white/10 relative group">
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => handleOpenModal(partner)} className="p-2 bg-indigo-500/20 text-indigo-400 rounded hover:bg-indigo-500/40 transition-colors">
                <Edit2 size={16} />
              </button>
              <button onClick={() => handleDelete(partner.id)} className="p-2 bg-rose-500/20 text-rose-400 rounded hover:bg-rose-500/40 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 mt-4">
              <div className="w-24 h-24 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center overflow-hidden relative">
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                ) : (
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(partner.name)}&backgroundColor=0f172a`} alt={partner.name} className="w-full h-full object-cover" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium">{partner.name}</h3>
                <a href={partner.link} target="_blank" rel="noreferrer" className="text-sm text-indigo-400 hover:underline">
                  {partner.link}
                </a>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${partner.active ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-500/20 text-slate-400'}`}>
                {partner.active ? 'Aktif' : 'Pasif'}
              </span>
            </div>
          </Card>
        ))}
        {partners.length === 0 && (
          <div className="col-span-full p-12 text-center border border-dashed border-white/10 rounded-xl">
            <p className="text-slate-400">Henüz hiç iş ortağı eklenmemiş.</p>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-slate-900 border-white/10 p-6">
            <h3 className="text-xl font-semibold mb-6">
              {editingId ? 'Partner Düzenle' : 'Yeni Partner Ekle'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">İsim</label>
                <input 
                  required
                  type="text" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Link (URL)</label>
                <input 
                  required
                  type="url" 
                  value={link}
                  onChange={e => setLink(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Logo URL (Steam / YouTube Linki)</label>
                <input 
                  type="text" 
                  placeholder="Steam/YouTube profil linki veya direkt resim URL'si yapıştırabilirsiniz"
                  value={logoUrl}
                  onChange={e => handleLogoUrlChange(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Logo</label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                    {preview ? <img src={preview} alt="Preview" className="w-full h-full object-cover" /> : <ImageIcon size={24} className="text-slate-600" />}
                  </div>
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-500/20 file:text-indigo-400 hover:file:bg-indigo-500/30"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input 
                  type="checkbox" 
                  id="active"
                  checked={active}
                  onChange={e => setActive(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-950 border-white/10 text-indigo-500 focus:ring-indigo-500"
                />
                <label htmlFor="active" className="text-sm font-medium text-slate-300">Aktif (Sitede Göster)</label>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-white/10 mt-6">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
                >
                  İptal
                </button>
                <button 
                  type="submit" 
                  disabled={saving}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
                >
                  {saving ? <Loader2 size={18} className="animate-spin" /> : 'Kaydet'}
                </button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
