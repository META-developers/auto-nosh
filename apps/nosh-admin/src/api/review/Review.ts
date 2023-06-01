import { Order } from "../order/Order";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  updatedAt: Date;
};
