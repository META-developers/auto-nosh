import { OpenTimeWhereInput } from "./OpenTimeWhereInput";
import { OpenTimeOrderByInput } from "./OpenTimeOrderByInput";

export type OpenTimeFindManyArgs = {
  where?: OpenTimeWhereInput;
  orderBy?: Array<OpenTimeOrderByInput>;
  skip?: number;
  take?: number;
};
