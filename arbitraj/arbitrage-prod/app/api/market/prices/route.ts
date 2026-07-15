import { NextResponse } from 'next/server';

export async function GET() {
  // Mock price data for CS2 items
  const prices = {
    "AK-47 | Slate (FT)": 12.40,
    "Desert Eagle | Printstream (MW)": 110.00,
    "M4A1-S | Printstream (FT)": 145.20,
    "AWP | Asiimov (FT)": 78.50,
    "Karambit | Tiger Tooth (FN)": 480.00,
    "M9 Bayonet | Doppler (FN)": 420.00,
  };

  return NextResponse.json(prices);
}
