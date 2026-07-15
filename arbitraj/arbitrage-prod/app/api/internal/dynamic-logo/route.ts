import { NextResponse } from 'next/server';
import axios from 'axios';

// Simple in-memory cache
const cache: Record<string, { logoUrl: string, timestamp: number }> = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour for logos

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  // Check cache
  if (cache[targetUrl] && Date.now() - cache[targetUrl].timestamp < CACHE_DURATION) {
    return NextResponse.json({ logoUrl: cache[targetUrl].logoUrl });
  }

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
      timeout: 5000
    });

    const html = response.data;
    let logoUrl = '';

    // Extract OpenGraph image (works for YouTube and Steam Groups/Profiles)
    const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
    if (ogImageMatch) {
      logoUrl = ogImageMatch[1];
    }

    // Fallback for Steam if OG image is not ideal
    if (targetUrl.includes('steamcommunity.com/') && !logoUrl) {
      const steamMatch = html.match(/<div class="avatarIcon">.*?<img src="([^"]+)"/s);
      if (steamMatch) logoUrl = steamMatch[1];
    }

    if (!logoUrl) {
       // Return a default placeholder if no logo found
       logoUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(targetUrl)}`;
    }

    // Save to cache
    cache[targetUrl] = { logoUrl, timestamp: Date.now() };

    return NextResponse.json({ logoUrl });

  } catch (error) {
    console.error('Failed to fetch dynamic logo:', error);
    return NextResponse.json({ logoUrl: '', error: 'Failed to fetch logo' }, { status: 200 });
  }
}
