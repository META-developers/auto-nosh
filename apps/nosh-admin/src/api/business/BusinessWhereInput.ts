import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type BusinessWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
};
