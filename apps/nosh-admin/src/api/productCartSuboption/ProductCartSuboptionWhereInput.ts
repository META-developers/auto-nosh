import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductCartOptionWhereUniqueInput } from "../productCartOption/ProductCartOptionWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SuboptionWhereUniqueInput } from "../suboption/SuboptionWhereUniqueInput";

export type ProductCartSuboptionWhereInput = {
  id?: StringFilter;
  position?: StringNullableFilter;
  price?: FloatNullableFilter;
  productCartOptions?: ProductCartOptionWhereUniqueInput;
  quantity?: IntFilter;
  selected?: BooleanFilter;
  suboption?: SuboptionWhereUniqueInput;
  total?: StringNullableFilter;
};
