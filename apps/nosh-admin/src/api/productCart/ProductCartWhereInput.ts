import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductCartWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
