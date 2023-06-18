import { SortOrder } from "../../util/SortOrder";

export type CloseTimeOrderByInput = {
  hour?: SortOrder;
  id?: SortOrder;
  minute?: SortOrder;
  timeLapseId?: SortOrder;
};
