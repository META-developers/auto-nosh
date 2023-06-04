import { ProductCartOptionWhereInput } from "./ProductCartOptionWhereInput";
import { ProductCartOptionOrderByInput } from "./ProductCartOptionOrderByInput";

export type ProductCartOptionFindManyArgs = {
  where?: ProductCartOptionWhereInput;
  orderBy?: Array<ProductCartOptionOrderByInput>;
  skip?: number;
  take?: number;
};
