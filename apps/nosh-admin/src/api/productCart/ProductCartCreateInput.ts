import { ProductCartSuboptionCreateNestedManyWithoutProductCartsInput } from "./ProductCartSuboptionCreateNestedManyWithoutProductCartsInput";
import { ProductCreateNestedManyWithoutProductCartsInput } from "./ProductCreateNestedManyWithoutProductCartsInput";

export type ProductCartCreateInput = {
  productCartSuboptions?: ProductCartSuboptionCreateNestedManyWithoutProductCartsInput;
  products?: ProductCreateNestedManyWithoutProductCartsInput;
};
