import { ProductCartSuboptionCreateNestedManyWithoutProductCartsInput } from "./ProductCartSuboptionCreateNestedManyWithoutProductCartsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductCartCreateInput = {
  productCartSuboptions?: ProductCartSuboptionCreateNestedManyWithoutProductCartsInput;
  products?: ProductWhereUniqueInput | null;
};
