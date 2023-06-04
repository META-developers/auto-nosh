import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductCartOptionUpdateManyWithoutOptionsInput } from "./ProductCartOptionUpdateManyWithoutOptionsInput";
import { SuboptionUpdateManyWithoutOptionsInput } from "./SuboptionUpdateManyWithoutOptionsInput";

export type OptionUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  productCartOptions?: ProductCartOptionUpdateManyWithoutOptionsInput;
  suboptions?: SuboptionUpdateManyWithoutOptionsInput;
};
