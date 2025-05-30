export default function handler(req, res) {
  // Simulasi berhasil register (tanpa database)
  res.status(200).json({ success: true });
}