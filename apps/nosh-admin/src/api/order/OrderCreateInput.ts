import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OfferCreateNestedManyWithoutOrdersInput } from "./OfferCreateNestedManyWithoutOrdersInput";
import { ReviewCreateNestedManyWithoutOrdersInput } from "./ReviewCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  appId?: string | null;
  business?: BusinessWhereUniqueInput | null;
  cart: CartWhereUniqueInput | null;
  comment?: string | null;
  customer?: AddressWhereUniqueInput | null;
  deliveryDatetime?: Date | null;
  deliveryType: number;
  deliveryZoneId?: string | null;
  offers?: OfferCreateNestedManyWithoutOrdersInput;
  paymethodId?: string | null;
  review?: ReviewCreateNestedManyWithoutOrdersInput;
  status: number;
};
