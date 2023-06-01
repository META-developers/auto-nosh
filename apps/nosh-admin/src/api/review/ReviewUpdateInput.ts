import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  orders?: OrderWhereUniqueInput | null;
};
