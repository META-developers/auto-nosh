import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
};
