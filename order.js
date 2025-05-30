export default async function handler(req, res) {
  const { service, target } = req.body;
  const response = await fetch('https://orderkuota.com/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key: 'API_KEY_LO',
      service: service,
      target: target
    })
  });
  const data = await response.json();
  res.status(200).json(data);
}