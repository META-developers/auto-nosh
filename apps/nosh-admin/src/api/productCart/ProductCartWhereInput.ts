import { StringFilter } from "../../util/StringFilter";
import { ProductCartOptionListRelationFilter } from "../productCartOption/ProductCartOptionListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductCartWhereInput = {
  id?: StringFilter;
  productCartOptions?: ProductCartOptionListRelationFilter;
  products?: ProductWhereUniqueInput;
};
