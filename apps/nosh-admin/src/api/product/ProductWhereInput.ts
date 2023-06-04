import { StringFilter } from "../../util/StringFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";
import { ProductCartListRelationFilter } from "../productCart/ProductCartListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  option?: OptionListRelationFilter;
  productCarts?: ProductCartListRelationFilter;
};
