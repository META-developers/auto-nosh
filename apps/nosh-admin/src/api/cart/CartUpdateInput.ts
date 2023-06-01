import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type CartUpdateInput = {
  orders?: OrderWhereUniqueInput | null;
};
