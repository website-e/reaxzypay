export default async function handler(req, res) {
  const response = await fetch('https://orderkuota.com/api/service', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: 'API_KEY_LO' })
  });
  const data = await response.json();
  res.status(200).json(data);
}