import { SortOrder } from "../../util/SortOrder";

export type ProductCartOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productsId?: SortOrder;
  updatedAt?: SortOrder;
};
