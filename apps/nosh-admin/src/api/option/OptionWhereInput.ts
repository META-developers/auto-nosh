import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductCartOptionListRelationFilter } from "../productCartOption/ProductCartOptionListRelationFilter";
import { SuboptionListRelationFilter } from "../suboption/SuboptionListRelationFilter";

export type OptionWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  productCartOptions?: ProductCartOptionListRelationFilter;
  suboptions?: SuboptionListRelationFilter;
};
