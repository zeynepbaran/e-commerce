
// Not: Gerçek projede JWT_SECRET değerini .env dosyasına koymayı unutma
// JWT_SECRET=saglam-bir-secret

// Giriş kontrolü/yardımcı fonksiyonlar (opsiyonel)

// src/lib/auth.ts
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'default_secret';

export function signToken(payload: object): string {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string): string | JwtPayload | null {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}



//Token oluşturma, doğrulama

