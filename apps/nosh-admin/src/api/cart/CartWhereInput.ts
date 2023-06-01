import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CartWhereInput = {
  id?: StringFilter;
  orders?: OrderListRelationFilter;
};
