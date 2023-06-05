import { StringFilter } from "../../util/StringFilter";
import { OrderSummaryWhereUniqueInput } from "../orderSummary/OrderSummaryWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderSummary?: OrderSummaryWhereUniqueInput;
};
