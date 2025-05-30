import { addSaldo } from '../../lib/users';

export default async function handler(req, res) {
  const { trx_id } = req.body;

  const check = await fetch('https://orderkuota.com/api/status', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key: 'API_KEY_LO',
      id: trx_id
    })
  });

  const result = await check.json();
  if (result.data.status === 'Success') {
    // Simulasi user login
    addSaldo('admin@example.com', result.data.amount);
  }

  res.status(200).json({ status: result.data.status });
}