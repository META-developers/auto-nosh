import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SuboptionListRelationFilter } from "../suboption/SuboptionListRelationFilter";

export type OptionWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  suboptions?: SuboptionListRelationFilter;
};
