import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "appId";

export const OrderTitle = (record: TOrder): string => {
  return record.appId || String(record.id);
};
