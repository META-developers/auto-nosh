import { SortOrder } from "../../util/SortOrder";

export type OrderEventOrderByInput = {
  createdAt?: SortOrder;
  eventSource?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
