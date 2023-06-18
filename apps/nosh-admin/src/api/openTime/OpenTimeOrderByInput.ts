import { SortOrder } from "../../util/SortOrder";

export type OpenTimeOrderByInput = {
  hour?: SortOrder;
  id?: SortOrder;
  minute?: SortOrder;
  timeLapsesId?: SortOrder;
};
