import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  available?: SortOrder;
  busy?: SortOrder;
  createdAt?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
