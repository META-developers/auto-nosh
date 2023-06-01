import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type OfferWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  order?: OrderListRelationFilter;
};
