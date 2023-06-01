import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductCartUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  quantity?: number | null;
};
