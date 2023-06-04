import { StringFilter } from "../../util/StringFilter";
import { ProductCartSuboptionListRelationFilter } from "../productCartSuboption/ProductCartSuboptionListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type ProductCartWhereInput = {
  id?: StringFilter;
  productCartSuboptions?: ProductCartSuboptionListRelationFilter;
  products?: ProductListRelationFilter;
};
