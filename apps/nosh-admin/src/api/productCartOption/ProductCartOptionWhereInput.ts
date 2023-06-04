import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { ProductCartWhereUniqueInput } from "../productCart/ProductCartWhereUniqueInput";
import { ProductCartSuboptionListRelationFilter } from "../productCartSuboption/ProductCartSuboptionListRelationFilter";

export type ProductCartOptionWhereInput = {
  balance?: IntNullableFilter;
  id?: StringFilter;
  option?: OptionWhereUniqueInput;
  productCart?: ProductCartWhereUniqueInput;
  productCartSuboptions?: ProductCartSuboptionListRelationFilter;
};
