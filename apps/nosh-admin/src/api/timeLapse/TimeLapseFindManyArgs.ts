import { TimeLapseWhereInput } from "./TimeLapseWhereInput";
import { TimeLapseOrderByInput } from "./TimeLapseOrderByInput";

export type TimeLapseFindManyArgs = {
  where?: TimeLapseWhereInput;
  orderBy?: Array<TimeLapseOrderByInput>;
  skip?: number;
  take?: number;
};
