export type OrderData = {
  id: string;
  accountType: "free" | "premium";
  amount: number;
  contact: {
    email: string;
    phone: string;
  };
};

function sumOrders(orders: OrderData[]): number {
  let total = 0;
  for (const order of orders) {
    total += order.amount
  }
  return total
}

export function reportOrders(orders: OrderData[] | null): string {
  if (orders === null || orders.length === 0) {
    return `Total amount for orders: 0`;
  }
  const sum = sumOrders(orders);
  return `Total amount for orders: ${sum}`;
}
