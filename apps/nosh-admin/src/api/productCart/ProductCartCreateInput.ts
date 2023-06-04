import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductCartOptionCreateNestedManyWithoutProductCartsInput } from "./ProductCartOptionCreateNestedManyWithoutProductCartsInput";

export type ProductCartCreateInput = {
  product: ProductWhereUniqueInput;
  productCartOptions?: ProductCartOptionCreateNestedManyWithoutProductCartsInput;
};
