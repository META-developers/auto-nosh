import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "comment";

export const ReviewTitle = (record: TReview): string => {
  return record.comment || String(record.id);
};
