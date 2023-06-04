import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { ProductCartWhereUniqueInput } from "../productCart/ProductCartWhereUniqueInput";
import { ProductCartSuboptionCreateNestedManyWithoutProductCartOptionsInput } from "./ProductCartSuboptionCreateNestedManyWithoutProductCartOptionsInput";

export type ProductCartOptionCreateInput = {
  balance?: number | null;
  option: OptionWhereUniqueInput;
  productCart: ProductCartWhereUniqueInput;
  productCartSuboptions?: ProductCartSuboptionCreateNestedManyWithoutProductCartOptionsInput;
};
