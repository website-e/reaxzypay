export default function handler(req, res) {
  const { email, password } = req.body;
  if (email === 'admin@example.com' && password === 'admin123') {
    res.status(200).json({ success: true, user: { email, name: 'Admin' } });
  } else {
    res.status(200).json({ success: false });
  }
}