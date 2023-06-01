import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ordersId?: SortOrder;
  updatedAt?: SortOrder;
};
