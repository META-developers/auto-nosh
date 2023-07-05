import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderEventCreateInput = {
  eventSource?: "Nosh" | "Chowly" | "Checkmate" | "Shipday" | null;
  order: OrderWhereUniqueInput;
  status: number;
};
