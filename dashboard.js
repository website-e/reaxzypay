import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [saldo, setSaldo] = useState(0);
  const [trx, setTrx] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/user');
      const data = await res.json();
      setSaldo(data.saldo);
      setTrx(data.transaksi);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p className="text-lg mb-4">Saldo Anda: <strong>{saldo.toLocaleString()} IDR</strong></p>
        <h3 className="font-semibold mb-2">Riwayat Transaksi</h3>
        <ul className="text-sm space-y-2">
          {trx.map((t, i) => (
            <li key={i} className="border-b pb-2">
              <strong>{t.type}</strong> - {t.service || t.amount} {t.target || ''}<br/>
              <span className="text-gray-500">{new Date(t.time).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}