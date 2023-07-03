import { Order } from "../order/Order";

export type OrderSummary = {
  createdAt: Date;
  deliveryPrice: number;
  deliveryPriceWithDiscount: number | null;
  discount: number;
  driverTip: number;
  driverTipRate: number;
  id: string;
  order?: Order;
  serviceFee: number;
  serviceFeeRate: number;
  serviceFeeWithDiscount: number;
  subtotal: number;
  subtotalWithDiscount: number;
  tax: number;
  taxAfterDiscount: number;
  taxRate: number;
  taxWithDiscount: number;
  total: number;
  updatedAt: Date;
};
