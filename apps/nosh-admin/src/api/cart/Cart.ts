import { Order } from "../order/Order";

export type Cart = {
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  updatedAt: Date;
};
