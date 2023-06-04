import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SuboptionUpdateManyWithoutOptionsInput } from "./SuboptionUpdateManyWithoutOptionsInput";

export type OptionUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  suboptions?: SuboptionUpdateManyWithoutOptionsInput;
};
