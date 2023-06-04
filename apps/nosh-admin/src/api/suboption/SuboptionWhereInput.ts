import { StringFilter } from "../../util/StringFilter";
import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { ProductCartSuboptionListRelationFilter } from "../productCartSuboption/ProductCartSuboptionListRelationFilter";

export type SuboptionWhereInput = {
  id?: StringFilter;
  option?: OptionWhereUniqueInput;
  productCartSuboptions?: ProductCartSuboptionListRelationFilter;
};
