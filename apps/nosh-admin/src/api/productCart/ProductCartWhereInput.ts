import { StringFilter } from "../../util/StringFilter";
import { ProductCartSuboptionListRelationFilter } from "../productCartSuboption/ProductCartSuboptionListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductCartWhereInput = {
  id?: StringFilter;
  productCartSuboptions?: ProductCartSuboptionListRelationFilter;
  products?: ProductWhereUniqueInput;
};
