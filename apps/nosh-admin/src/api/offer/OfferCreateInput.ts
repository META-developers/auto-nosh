import { OrderCreateNestedManyWithoutOffersInput } from "./OrderCreateNestedManyWithoutOffersInput";

export type OfferCreateInput = {
  description?: string | null;
  order?: OrderCreateNestedManyWithoutOffersInput;
};
