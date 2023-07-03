import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  menuProvider?: SortOrder;
  updatedAt?: SortOrder;
};
