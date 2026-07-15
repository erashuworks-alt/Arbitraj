import { NextResponse } from 'next/server';
import axios from 'axios';

// Simple in-memory cache
const cache: Record<string, { data: any, timestamp: number }> = {};
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  // Check cache
  if (cache[targetUrl] && Date.now() - cache[targetUrl].timestamp < CACHE_DURATION) {
    return NextResponse.json(cache[targetUrl].data);
  }

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7'
      },
      timeout: 4000 // Reduced timeout to fail faster
    });
    const html = response.data;
    let logoUrl = '';
    let subscriberCount = 0;

    // --- STEAM ---
    if (targetUrl.includes('steamcommunity.com/')) {
      const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
      if (ogImageMatch) logoUrl = ogImageMatch[1];
      
      const memberMatch = html.match(/([\d,.]+)\s+(?:Members|Üye)/i);
      if (memberMatch) {
        subscriberCount = parseInt(memberMatch[1].replace(/[.,]/g, ''));
      }
    }

    // --- YOUTUBE ---
    else if (targetUrl.includes('youtube.com/') || targetUrl.includes('youtu.be/')) {
      const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
      if (ogImageMatch) logoUrl = ogImageMatch[1];

      const subMatch = html.match(/"subscriberCountText":\{"simpleText":"([^"]+)"\}/);
      if (subMatch) {
        const subStr = subMatch[1].toLowerCase();
        let multiplier = 1;
        if (subStr.includes('m')) multiplier = 1000000;
        else if (subStr.includes('k') || subStr.includes('bin')) multiplier = 1000;
        
        const num = parseFloat(subStr.replace(/[^\d.]/g, ''));
        subscriberCount = Math.round(num * multiplier);
      }
    }

    // --- GENERIC ---
    else {
      const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
      if (ogImageMatch) logoUrl = ogImageMatch[1];
    }

    const result = { logoUrl, subscriberCount };
    
    // Save to cache
    cache[targetUrl] = { data: result, timestamp: Date.now() };

    return NextResponse.json(result);

  } catch (error) {
    console.error('Failed to fetch dynamic stats:', error);
    return NextResponse.json({ logoUrl: '', subscriberCount: 0 }, { status: 200 });
  }
}
