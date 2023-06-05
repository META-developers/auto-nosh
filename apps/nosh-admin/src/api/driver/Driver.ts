import { Location } from "../location/Location";
import { Order } from "../order/Order";
import { User } from "../user/User";

export type Driver = {
  available: boolean;
  busy: boolean;
  createdAt: Date;
  enabled: boolean;
  id: string;
  location?: Location | null;
  orders?: Array<Order>;
  updatedAt: Date;
  user?: User | null;
};
