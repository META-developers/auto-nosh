import { Order } from "../order/Order";

export type ProductCart = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  price: number | null;
  quantity: number | null;
  updatedAt: Date;
};
