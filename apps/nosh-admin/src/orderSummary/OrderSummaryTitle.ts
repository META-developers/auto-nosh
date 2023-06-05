import { OrderSummary as TOrderSummary } from "../api/orderSummary/OrderSummary";

export const ORDERSUMMARY_TITLE_FIELD = "id";

export const OrderSummaryTitle = (record: TOrderSummary): string => {
  return record.id || String(record.id);
};
