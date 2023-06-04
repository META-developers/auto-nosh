import { ProductCartSuboption as TProductCartSuboption } from "../api/productCartSuboption/ProductCartSuboption";

export const PRODUCTCARTSUBOPTION_TITLE_FIELD = "position";

export const ProductCartSuboptionTitle = (
  record: TProductCartSuboption
): string => {
  return record.position || String(record.id);
};
