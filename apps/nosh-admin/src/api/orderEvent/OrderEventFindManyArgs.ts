import { OrderEventWhereInput } from "./OrderEventWhereInput";
import { OrderEventOrderByInput } from "./OrderEventOrderByInput";

export type OrderEventFindManyArgs = {
  where?: OrderEventWhereInput;
  orderBy?: Array<OrderEventOrderByInput>;
  skip?: number;
  take?: number;
};
