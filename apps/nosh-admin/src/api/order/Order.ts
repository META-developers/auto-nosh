import { OrderSummary } from "../orderSummary/OrderSummary";

export type Order = {
  createdAt: Date;
  id: string;
  orderSummary?: OrderSummary | null;
  updatedAt: Date;
};
