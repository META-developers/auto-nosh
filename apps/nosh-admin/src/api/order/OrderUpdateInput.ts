import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OfferUpdateManyWithoutOrdersInput } from "./OfferUpdateManyWithoutOrdersInput";
import { ReviewUpdateManyWithoutOrdersInput } from "./ReviewUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  appId?: string | null;
  business?: BusinessWhereUniqueInput | null;
  cart?: CartWhereUniqueInput | null;
  comment?: string | null;
  customer?: AddressWhereUniqueInput | null;
  deliveryDatetime?: Date | null;
  deliveryType?: number;
  deliveryZoneId?: string | null;
  offers?: OfferUpdateManyWithoutOrdersInput;
  paymethodId?: string | null;
  review?: ReviewUpdateManyWithoutOrdersInput;
  status?: number;
};
