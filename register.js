import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.success) {
      alert('Registrasi berhasil!');
      router.push('/login');
    } else {
      alert('Gagal daftar!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Daftar Akun</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
          onClick={handleRegister}
        >
          Daftar
        </button>
        <p className="mt-3 text-sm text-center">
          Sudah punya akun? <a href="/login" className="text-blue-600">Masuk</a>
        </p>
      </div>
    </div>
  );
}