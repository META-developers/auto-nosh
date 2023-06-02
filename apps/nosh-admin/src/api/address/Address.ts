import { Order } from "../order/Order";
import { User } from "../user/User";

export type Address = {
  createdAt: Date;
  dropdownOptionId: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
  user?: User;
};
