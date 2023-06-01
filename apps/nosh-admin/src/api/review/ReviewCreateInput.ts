import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  orders?: OrderWhereUniqueInput | null;
};
