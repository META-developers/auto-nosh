import { SortOrder } from "../../util/SortOrder";

export type OrderSummaryOrderByInput = {
  createdAt?: SortOrder;
  deliveryPrice?: SortOrder;
  deliveryPriceWithDiscount?: SortOrder;
  discount?: SortOrder;
  driverTip?: SortOrder;
  driverTipRate?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  serviceFee?: SortOrder;
  serviceFeeRate?: SortOrder;
  serviceFeeWithDiscount?: SortOrder;
  subtotal?: SortOrder;
  subtotalWithDiscount?: SortOrder;
  taxAfterDiscount?: SortOrder;
  taxRate?: SortOrder;
  taxWithDiscount?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
