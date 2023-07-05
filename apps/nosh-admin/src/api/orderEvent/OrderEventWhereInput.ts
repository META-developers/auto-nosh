import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type OrderEventWhereInput = {
  eventSource?: "Nosh" | "Chowly" | "Checkmate" | "Shipday";
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  status?: IntFilter;
};
