import { Order } from "../order/Order";

export type OrderEvent = {
  createdAt: Date;
  eventSource?: "Nosh" | "Chowly" | "Checkmate" | "Shipday" | null;
  id: string;
  order?: Order | null;
  status: number;
  updatedAt: Date;
};
