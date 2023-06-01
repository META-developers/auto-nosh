import { Order } from "../order/Order";

export type Cart = {
  createdAt: Date;
  id: string;
  orders?: Order | null;
  updatedAt: Date;
};
