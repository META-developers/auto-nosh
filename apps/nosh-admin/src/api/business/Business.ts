import { Order } from "../order/Order";

export type Business = {
  createdAt: Date;
  id: string;
  name: string;
  orders?: Array<Order>;
  updatedAt: Date;
};
