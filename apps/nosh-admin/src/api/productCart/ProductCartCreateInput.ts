import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductCartCreateInput = {
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  quantity?: number | null;
};
