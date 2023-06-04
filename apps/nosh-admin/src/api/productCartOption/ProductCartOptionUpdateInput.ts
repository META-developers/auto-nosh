import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { ProductCartWhereUniqueInput } from "../productCart/ProductCartWhereUniqueInput";
import { ProductCartSuboptionUpdateManyWithoutProductCartOptionsInput } from "./ProductCartSuboptionUpdateManyWithoutProductCartOptionsInput";

export type ProductCartOptionUpdateInput = {
  balance?: number | null;
  option?: OptionWhereUniqueInput | null;
  productCart?: ProductCartWhereUniqueInput | null;
  productCartSuboption?: ProductCartSuboptionUpdateManyWithoutProductCartOptionsInput;
};