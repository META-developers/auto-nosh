import { ProductCart as TProductCart } from "../api/productCart/ProductCart";

export const PRODUCTCART_TITLE_FIELD = "id";

export const ProductCartTitle = (record: TProductCart): string => {
  return record.id || String(record.id);
};
