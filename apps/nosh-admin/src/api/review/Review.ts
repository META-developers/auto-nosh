import { Order } from "../order/Order";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  orders?: Order | null;
  updatedAt: Date;
};
