import { CloseTimeWhereInput } from "./CloseTimeWhereInput";
import { CloseTimeOrderByInput } from "./CloseTimeOrderByInput";

export type CloseTimeFindManyArgs = {
  where?: CloseTimeWhereInput;
  orderBy?: Array<CloseTimeOrderByInput>;
  skip?: number;
  take?: number;
};
