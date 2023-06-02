import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OfferCreateNestedManyWithoutOrdersInput } from "./OfferCreateNestedManyWithoutOrdersInput";
import { ReviewCreateNestedManyWithoutOrdersInput } from "./ReviewCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  appId?: string | null;
  business?: BusinessWhereUniqueInput | null;
  cart: CartWhereUniqueInput | null;
  comment?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  deliveryDatetime?: Date | null;
  deliveryType: number;
  deliveryZoneId?: string | null;
  offers?: OfferCreateNestedManyWithoutOrdersInput;
  paymethodId?: string | null;
  review?: ReviewCreateNestedManyWithoutOrdersInput;
  status: number;
};
