import { ProductCartOptionUpdateManyWithoutProductCartsInput } from "./ProductCartOptionUpdateManyWithoutProductCartsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductCartUpdateInput = {
  productCartOptions?: ProductCartOptionUpdateManyWithoutProductCartsInput;
  products?: ProductWhereUniqueInput | null;
};
