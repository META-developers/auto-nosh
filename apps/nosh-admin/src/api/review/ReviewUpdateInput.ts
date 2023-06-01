import { OrderUpdateManyWithoutReviewsInput } from "./OrderUpdateManyWithoutReviewsInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  orders?: OrderUpdateManyWithoutReviewsInput;
};
