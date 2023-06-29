import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
