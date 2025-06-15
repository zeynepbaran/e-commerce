//Çıkış API endpoint (backend)
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Çıkış yaparken 'token' cookie’sini sil
  response.cookies.set('token', '', {
    maxAge: 0,
    path: '/',
  });

  return response;
}
