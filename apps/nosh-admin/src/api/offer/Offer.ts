import { Order } from "../order/Order";

export type Offer = {
  createdAt: Date;
  description: string | null;
  id: string;
  order?: Array<Order>;
  updatedAt: Date;
};
