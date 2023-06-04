import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductCartOptionCreateNestedManyWithoutOptionsInput } from "./ProductCartOptionCreateNestedManyWithoutOptionsInput";
import { SuboptionCreateNestedManyWithoutOptionsInput } from "./SuboptionCreateNestedManyWithoutOptionsInput";

export type OptionCreateInput = {
  product?: ProductWhereUniqueInput | null;
  productCartOptions?: ProductCartOptionCreateNestedManyWithoutOptionsInput;
  suboptions?: SuboptionCreateNestedManyWithoutOptionsInput;
};
