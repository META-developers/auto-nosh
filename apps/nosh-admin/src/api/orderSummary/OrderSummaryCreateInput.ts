import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderSummaryCreateInput = {
  deliveryPrice?: number | null;
  deliveryPriceWithDiscount?: number | null;
  discount?: number | null;
  driverTip?: number | null;
  driverTipRate?: number | null;
  order: OrderWhereUniqueInput;
  serviceFee?: number | null;
  serviceFeeRate?: number | null;
  serviceFeeWithDiscount?: number | null;
  subtotal: number;
  subtotalWithDiscount?: number | null;
  taxAfterDiscount?: number | null;
  taxRate?: number | null;
  taxWithDiscount?: number | null;
  total: number;
};
