import { SortOrder } from "../../util/SortOrder";

export type ProductCartOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
