import { Order } from "../order/Order";

export type Customer = {
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
