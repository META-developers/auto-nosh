import { OrderCreateNestedManyWithoutReviewsInput } from "./OrderCreateNestedManyWithoutReviewsInput";

export type ReviewCreateInput = {
  comment?: string | null;
  orders?: OrderCreateNestedManyWithoutReviewsInput;
};
