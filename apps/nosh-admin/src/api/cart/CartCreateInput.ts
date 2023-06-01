import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type CartCreateInput = {
  orders?: OrderWhereUniqueInput | null;
};
