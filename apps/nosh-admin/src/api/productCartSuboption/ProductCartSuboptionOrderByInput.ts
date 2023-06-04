import { SortOrder } from "../../util/SortOrder";

export type ProductCartSuboptionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  position?: SortOrder;
  price?: SortOrder;
  productCartOptionsId?: SortOrder;
  quantity?: SortOrder;
  selected?: SortOrder;
  suboptionId?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
