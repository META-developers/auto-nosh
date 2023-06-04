import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SuboptionCreateNestedManyWithoutOptionsInput } from "./SuboptionCreateNestedManyWithoutOptionsInput";

export type OptionCreateInput = {
  product?: ProductWhereUniqueInput | null;
  suboptions?: SuboptionCreateNestedManyWithoutOptionsInput;
};
