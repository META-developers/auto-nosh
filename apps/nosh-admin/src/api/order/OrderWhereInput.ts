import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { OfferListRelationFilter } from "../offer/OfferListRelationFilter";
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
  offers?: OfferListRelationFilter;
  paymethodId?: StringNullableFilter;
  review?: ReviewListRelationFilter;
  status?: IntFilter;
};
