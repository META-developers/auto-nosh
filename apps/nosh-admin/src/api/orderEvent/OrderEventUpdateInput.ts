import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderEventUpdateInput = {
  eventSource?: "Nosh" | "Chowly" | "Checkmate" | "Shipday" | null;
  order?: OrderWhereUniqueInput | null;
  status?: number;
};
