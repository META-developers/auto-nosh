import { ProductCartOptionCreateNestedManyWithoutProductCartsInput } from "./ProductCartOptionCreateNestedManyWithoutProductCartsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductCartCreateInput = {
  productCartOptions?: ProductCartOptionCreateNestedManyWithoutProductCartsInput;
  products?: ProductWhereUniqueInput | null;
};
