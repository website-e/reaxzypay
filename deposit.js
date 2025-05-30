import { useState } from 'react';

export default function Deposit() {
  const [amount, setAmount] = useState('');
  const [qrUrl, setQrUrl] = useState(null);
  const [status, setStatus] = useState(null);
  const [trxId, setTrxId] = useState(null);

  const handleDeposit = async () => {
    const res = await fetch('/api/deposit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    });
    const data = await res.json();
    setQrUrl(data.qr_url);
    setTrxId(data.trx_id);
    setStatus("Menunggu Pembayaran...");
  };

  const checkStatus = async () => {
    const res = await fetch('/api/status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trx_id: trxId })
    });
    const data = await res.json();
    setStatus(data.status);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Deposit Saldo via QRIS</h2>
        <input
          type="number"
          placeholder="Masukkan jumlah deposit"
          className="w-full p-2 border rounded mb-4"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={handleDeposit}
        >
          Buat QR Pembayaran
        </button>

        {qrUrl && (
          <div className="mt-4 text-center">
            <p className="mb-2 font-semibold">Scan QRIS untuk bayar:</p>
            <img src={qrUrl} alt="QRIS" className="mx-auto w-64 h-64" />
            <button
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
              onClick={checkStatus}
            >
              Cek Status Pembayaran
            </button>
            <p className="mt-2 text-sm">{status}</p>
          </div>
        )}
      </div>
    </div>
  );
}