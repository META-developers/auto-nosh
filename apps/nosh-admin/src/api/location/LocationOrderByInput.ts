import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lat?: SortOrder;
  lng?: SortOrder;
  updatedAt?: SortOrder;
};
