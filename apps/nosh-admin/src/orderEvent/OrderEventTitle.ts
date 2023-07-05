import { OrderEvent as TOrderEvent } from "../api/orderEvent/OrderEvent";

export const ORDEREVENT_TITLE_FIELD = "id";

export const OrderEventTitle = (record: TOrderEvent): string => {
  return record.id || String(record.id);
};
