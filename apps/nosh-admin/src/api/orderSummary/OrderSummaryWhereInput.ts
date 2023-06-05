import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type OrderSummaryWhereInput = {
  deliveryPrice?: FloatNullableFilter;
  deliveryPriceWithDiscount?: FloatNullableFilter;
  discount?: FloatNullableFilter;
  driverTip?: FloatNullableFilter;
  driverTipRate?: FloatNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  serviceFee?: FloatNullableFilter;
  serviceFeeRate?: FloatNullableFilter;
  serviceFeeWithDiscount?: FloatNullableFilter;
  subtotal?: FloatFilter;
  subtotalWithDiscount?: FloatNullableFilter;
  taxAfterDiscount?: FloatNullableFilter;
  taxRate?: FloatNullableFilter;
  taxWithDiscount?: FloatNullableFilter;
  total?: FloatFilter;
};
