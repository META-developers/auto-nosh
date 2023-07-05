import { StringFilter } from "../../util/StringFilter";
import { OrderEventListRelationFilter } from "../orderEvent/OrderEventListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  orderEvents?: OrderEventListRelationFilter;
};
