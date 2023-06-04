import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductCartOptionListRelationFilter } from "../productCartOption/ProductCartOptionListRelationFilter";

export type ProductCartWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  productCartOptions?: ProductCartOptionListRelationFilter;
};
