import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type CartWhereInput = {
  id?: StringFilter;
  orders?: OrderWhereUniqueInput;
};
