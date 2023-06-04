import { ProductCartOption } from "../productCartOption/ProductCartOption";
import { Product } from "../product/Product";

export type ProductCart = {
  createdAt: Date;
  id: string;
  productCartOptions?: Array<ProductCartOption>;
  products?: Product | null;
  updatedAt: Date;
};
