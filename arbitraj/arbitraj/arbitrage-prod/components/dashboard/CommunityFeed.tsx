import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Share2, MessageSquare, Heart } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations } from '@/lib/translations';

export function CommunityFeed() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const POSTS = [
    { user: 'Liquid CS', content: t.community.post1, likes: 124, comments: 12 },
    { user: 'SkinBaron', content: t.community.post2, likes: 89, comments: 5 },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">{t.community.title}</h3>
        <Share2 size={14} className="text-slate-600" />
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        {POSTS.map((post, i) => (
          <div key={i} className="p-4 bg-slate-800/20 rounded-xl border border-slate-800/40">
            <div className="text-xs font-bold text-indigo-400 mb-2">{post.user}</div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">{post.content}</p>
            <div className="flex items-center gap-4 text-[10px] text-slate-600 font-bold">
              <span className="flex items-center gap-1"><Heart size={10} /> {post.likes}</span>
              <span className="flex items-center gap-1"><MessageSquare size={10} /> {post.comments}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
