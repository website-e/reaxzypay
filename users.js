// Simulasi data user
let users = [
  {
    email: "admin@example.com",
    password: "admin123",
    saldo: 0,
    transaksi: []
  }
];

export function getUser(email) {
  return users.find(u => u.email === email);
}

export function addSaldo(email, amount) {
  const user = getUser(email);
  if (user) {
    user.saldo += Number(amount);
    user.transaksi.push({
      type: "deposit",
      amount: Number(amount),
      time: new Date().toISOString()
    });
  }
}

export function addOrder(email, service, target) {
  const user = getUser(email);
  if (user) {
    user.transaksi.push({
      type: "order",
      service,
      target,
      time: new Date().toISOString()
    });
  }
}

export function getTransaksi(email) {
  const user = getUser(email);
  return user?.transaksi || [];
}