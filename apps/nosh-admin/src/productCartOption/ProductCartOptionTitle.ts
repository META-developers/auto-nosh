import { ProductCartOption as TProductCartOption } from "../api/productCartOption/ProductCartOption";

export const PRODUCTCARTOPTION_TITLE_FIELD = "id";

export const ProductCartOptionTitle = (record: TProductCartOption): string => {
  return record.id || String(record.id);
};
