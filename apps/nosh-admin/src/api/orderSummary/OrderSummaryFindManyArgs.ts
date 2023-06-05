import { OrderSummaryWhereInput } from "./OrderSummaryWhereInput";
import { OrderSummaryOrderByInput } from "./OrderSummaryOrderByInput";

export type OrderSummaryFindManyArgs = {
  where?: OrderSummaryWhereInput;
  orderBy?: Array<OrderSummaryOrderByInput>;
  skip?: number;
  take?: number;
};
