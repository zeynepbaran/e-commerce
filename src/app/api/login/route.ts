//Giriş API endpoint (backend)

// POST /api/login
import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Örnek kontrol
  if (email === 'test@test.com' && password === '123456') {
    const token = signToken({ email });
    
    const response = NextResponse.json({ success: true });
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60,
      path: '/',
    });
    return response;
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
