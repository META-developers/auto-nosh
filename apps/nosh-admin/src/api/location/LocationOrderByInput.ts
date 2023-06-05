import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  createdAt?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  lat?: SortOrder;
  lng?: SortOrder;
  updatedAt?: SortOrder;
};
