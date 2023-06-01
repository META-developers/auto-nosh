import { OrderUpdateManyWithoutOffersInput } from "./OrderUpdateManyWithoutOffersInput";

export type OfferUpdateInput = {
  description?: string | null;
  order?: OrderUpdateManyWithoutOffersInput;
};
