import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductCartListRelationFilter } from "../productCart/ProductCartListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type OrderWhereInput = {
  appId?: StringNullableFilter;
  business?: BusinessWhereUniqueInput;
  cart?: CartWhereUniqueInput;
  comment?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  deliveryDatetime?: DateTimeNullableFilter;
  deliveryType?: IntFilter;
  deliveryZoneId?: StringNullableFilter;
  id?: StringFilter;
  paymethodId?: StringNullableFilter;
  products?: ProductCartListRelationFilter;
  review?: ReviewListRelationFilter;
  status?: IntFilter;
};
