import { FloatFilter } from "../../util/FloatFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderSummaryWhereInput = {
  deliveryPrice?: FloatFilter;
  deliveryPriceWithDiscount?: FloatNullableFilter;
  discount?: FloatFilter;
  driverTip?: FloatFilter;
  driverTipRate?: FloatFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  serviceFee?: FloatFilter;
  serviceFeeRate?: FloatFilter;
  serviceFeeWithDiscount?: FloatFilter;
  subtotal?: FloatFilter;
  subtotalWithDiscount?: FloatFilter;
  tax?: FloatFilter;
  taxAfterDiscount?: FloatFilter;
  taxRate?: FloatFilter;
  taxWithDiscount?: FloatFilter;
  total?: FloatFilter;
};
