import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductCartOptionListRelationFilter } from "../productCartOption/ProductCartOptionListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SuboptionWhereUniqueInput } from "../suboption/SuboptionWhereUniqueInput";

export type ProductCartSuboptionWhereInput = {
  id?: StringFilter;
  position?: StringNullableFilter;
  price?: FloatNullableFilter;
  productCartOptions?: ProductCartOptionListRelationFilter;
  quantity?: IntFilter;
  selected?: BooleanFilter;
  suboption?: SuboptionWhereUniqueInput;
  total?: StringNullableFilter;
};
