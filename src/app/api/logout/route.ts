//Çıkış API endpoint (backend)
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  // token cookie’sini sil
  cookies().delete('token');

  return NextResponse.json({ success: true });
}
