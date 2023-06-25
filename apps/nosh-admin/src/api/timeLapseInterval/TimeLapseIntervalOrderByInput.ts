import { SortOrder } from "../../util/SortOrder";

export type TimeLapseIntervalOrderByInput = {
  hour?: SortOrder;
  id?: SortOrder;
  minute?: SortOrder;
  timeLapseCloseId?: SortOrder;
  timeLapsesOpenId?: SortOrder;
};
