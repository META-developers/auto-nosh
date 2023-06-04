import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductCartOptionUpdateManyWithoutProductCartsInput } from "./ProductCartOptionUpdateManyWithoutProductCartsInput";

export type ProductCartUpdateInput = {
  product?: ProductWhereUniqueInput;
  productCartOptions?: ProductCartOptionUpdateManyWithoutProductCartsInput;
};
