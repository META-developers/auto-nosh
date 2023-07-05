import { OrderEvent } from "../orderEvent/OrderEvent";

export type Order = {
  id: string;
  orderEvents?: Array<OrderEvent>;
};
