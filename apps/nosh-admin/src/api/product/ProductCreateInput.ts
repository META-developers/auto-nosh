import { OptionCreateNestedManyWithoutProductsInput } from "./OptionCreateNestedManyWithoutProductsInput";
import { ProductCartCreateNestedManyWithoutProductsInput } from "./ProductCartCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  option?: OptionCreateNestedManyWithoutProductsInput;
  productCart?: ProductCartCreateNestedManyWithoutProductsInput;
};
