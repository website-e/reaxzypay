import { getUser, getTransaksi } from '../../lib/users';

export default async function handler(req, res) {
  const email = "admin@example.com"; // simulasi session login
  const user = getUser(email);
  const transaksi = getTransaksi(email);
  res.status(200).json({ saldo: user?.saldo || 0, transaksi });
}