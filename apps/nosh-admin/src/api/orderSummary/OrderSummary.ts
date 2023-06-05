export type OrderSummary = {
  createdAt: Date;
  deliveryPrice: number | null;
  deliveryPriceWithDiscount: number | null;
  discount: number | null;
  driverTip: number | null;
  driverTipRate: number | null;
  id: string;
  serviceFee: number | null;
  serviceFeeRate: number | null;
  serviceFeeWithDiscount: number | null;
  subtotal: number;
  subtotalWithDiscount: number | null;
  taxAfterDiscount: number | null;
  taxRate: number | null;
  taxWithDiscount: number | null;
  total: number;
  updatedAt: Date;
};
