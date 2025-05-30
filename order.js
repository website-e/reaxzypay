import { useEffect, useState } from 'react';

export default function Order() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [target, setTarget] = useState('');
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch('/api/services');
      const data = await res.json();
      setServices(data.data || []);
    };
    fetchServices();
  }, []);

  const handleOrder = async () => {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service: selectedService,
        target: target
      })
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Pesan Layanan</h2>
        <select
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setSelectedService(e.target.value)}
          value={selectedService}
        >
          <option value="">-- Pilih Layanan --</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.category} - {s.name} ({s.price} IDR)
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Nomor HP / ID Tujuan"
          className="w-full p-2 border rounded mb-3"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded"
          onClick={handleOrder}
        >
          Kirim Pesanan
        </button>
        {response && (
          <div className="mt-4 p-3 bg-green-100 rounded text-sm">
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}