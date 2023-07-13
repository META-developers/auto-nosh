import { CuisineTypeWhereInput } from "./CuisineTypeWhereInput";
import { CuisineTypeOrderByInput } from "./CuisineTypeOrderByInput";

export type CuisineTypeFindManyArgs = {
  where?: CuisineTypeWhereInput;
  orderBy?: Array<CuisineTypeOrderByInput>;
  skip?: number;
  take?: number;
};
