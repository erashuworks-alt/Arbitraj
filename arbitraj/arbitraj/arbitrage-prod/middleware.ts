import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  const token = await getToken({ req });
  const isAuth = !!token;
  const isAdmin = token?.role === "admin";

  const { pathname } = req.nextUrl;

  // Protect /arbitraj/admin
  if (pathname.startsWith("/arbitraj/admin")) {
    if (!isAuth || !isAdmin) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Protect Dashboard (root) - REMOVED so guest can see landing page
  /*
  if (pathname === "/") {
    if (!isAuth) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  */

  // --- Analytics & Session Tracking ---
  // We fire this asynchronously so it doesn't block the request
  if (!pathname.startsWith('/api/') && !pathname.startsWith('/_next/') && !pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|ico)$/)) {
    const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';
    
    // Parse basic device/browser info
    const isMobile = /mobile/i.test(userAgent);
    const deviceType = isMobile ? 'mobile' : 'desktop';
    
    let browser = 'unknown';
    if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) browser = 'Safari';
    else if (userAgent.includes('Edge')) browser = 'Edge';

    const origin = req.nextUrl.origin;

    // Track Pageview
    fetch(`${origin}/api/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'pageview',
        ip,
        userAgent,
        page: pathname,
      })
    }).catch(e => console.error('Analytics error:', e));

    // Track Session
    fetch(`${origin}/api/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'session',
        ip,
        browser,
        deviceType,
      })
    }).catch(e => console.error('Session tracking error:', e));
  }

  return NextResponse.next();

}

export const config = {
  matcher: ["/arbitraj/admin/:path*", "/"],
};
