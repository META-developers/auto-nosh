import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductCartWhereUniqueInput } from "../productCart/ProductCartWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SuboptionWhereUniqueInput } from "../suboption/SuboptionWhereUniqueInput";

export type ProductCartSuboptionWhereInput = {
  id?: StringFilter;
  position?: StringNullableFilter;
  price?: FloatNullableFilter;
  productCart?: ProductCartWhereUniqueInput;
  quantity?: IntFilter;
  selected?: BooleanFilter;
  suboption?: SuboptionWhereUniqueInput;
  total?: StringNullableFilter;
};
