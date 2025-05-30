export default async function handler(req, res) {
  const { amount } = req.body;

  const order = await fetch('https://orderkuota.com/api/deposit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key: 'API_KEY_LO',
      amount: amount,
      method: 'qris',
      custom_id: 'reaxzy_' + Date.now()
    })
  });

  const result = await order.json();
  res.status(200).json({
    qr_url: result.data.qr_url,
    trx_id: result.data.trx_id
  });
}