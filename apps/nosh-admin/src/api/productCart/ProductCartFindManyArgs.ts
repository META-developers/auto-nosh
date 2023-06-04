import { ProductCartWhereInput } from "./ProductCartWhereInput";
import { ProductCartOrderByInput } from "./ProductCartOrderByInput";

export type ProductCartFindManyArgs = {
  where?: ProductCartWhereInput;
  orderBy?: Array<ProductCartOrderByInput>;
  skip?: number;
  take?: number;
};
