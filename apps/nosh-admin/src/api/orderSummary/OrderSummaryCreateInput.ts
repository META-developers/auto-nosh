import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderSummaryCreateInput = {
  deliveryPrice: number;
  deliveryPriceWithDiscount: number;
  discount: number;
  driverTip: number;
  driverTipRate: number;
  order: OrderWhereUniqueInput;
  serviceFee: number;
  serviceFeeRate: number;
  serviceFeeWithDiscount: number;
  subtotal: number;
  subtotalWithDiscount: number;
  tax: number;
  taxAfterDiscount: number;
  taxRate: number;
  taxWithDiscount: number;
  total?: number | null;
};
