import { TimeLapseIntervalWhereInput } from "./TimeLapseIntervalWhereInput";
import { TimeLapseIntervalOrderByInput } from "./TimeLapseIntervalOrderByInput";

export type TimeLapseIntervalFindManyArgs = {
  where?: TimeLapseIntervalWhereInput;
  orderBy?: Array<TimeLapseIntervalOrderByInput>;
  skip?: number;
  take?: number;
};
