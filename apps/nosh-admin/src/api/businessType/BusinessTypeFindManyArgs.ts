import { BusinessTypeWhereInput } from "./BusinessTypeWhereInput";
import { BusinessTypeOrderByInput } from "./BusinessTypeOrderByInput";

export type BusinessTypeFindManyArgs = {
  where?: BusinessTypeWhereInput;
  orderBy?: Array<BusinessTypeOrderByInput>;
  skip?: number;
  take?: number;
};
