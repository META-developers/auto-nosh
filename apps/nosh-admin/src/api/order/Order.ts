import { Business } from "../business/Business";
import { Cart } from "../cart/Cart";
import { Customer } from "../customer/Customer";
import { Offer } from "../offer/Offer";
import { Review } from "../review/Review";

export type Order = {
  appId: string | null;
  business?: Business | null;
  cart?: Cart | null;
  comment: string | null;
  createdAt: Date;
  customer?: Customer | null;
  deliveryDatetime: Date | null;
  deliveryType: number;
  deliveryZoneId: string | null;
  id: string;
  offers?: Array<Offer>;
  paymethodId: string | null;
  review?: Array<Review>;
  status: number;
  updatedAt: Date;
};
