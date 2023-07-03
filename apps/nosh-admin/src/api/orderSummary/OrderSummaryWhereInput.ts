import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderSummaryWhereInput = {
  deliveryPrice?: FloatFilter;
  deliveryPriceWithDiscount?: FloatFilter;
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
  total?: FloatNullableFilter;
};
