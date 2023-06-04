import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";

export type ProductCartOptionWhereInput = {
  balance?: IntNullableFilter;
  id?: StringFilter;
  option?: OptionWhereUniqueInput;
};
