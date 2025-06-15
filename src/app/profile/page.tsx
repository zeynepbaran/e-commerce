// kullanıcı profili (loginden sonra görülecek)

'use client';

import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Hoşgeldiniz, Profil Sayfanız</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Çıkış Yap
      </button>
    </div>
  );
}
