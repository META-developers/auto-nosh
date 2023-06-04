import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { ProductCartWhereUniqueInput } from "../productCart/ProductCartWhereUniqueInput";
import { ProductCartSuboptionCreateNestedManyWithoutProductCartOptionsInput } from "./ProductCartSuboptionCreateNestedManyWithoutProductCartOptionsInput";

export type ProductCartOptionCreateInput = {
  balance?: number | null;
  option?: OptionWhereUniqueInput | null;
  productCart?: ProductCartWhereUniqueInput | null;
  productCartSuboption?: ProductCartSuboptionCreateNestedManyWithoutProductCartOptionsInput;
};
