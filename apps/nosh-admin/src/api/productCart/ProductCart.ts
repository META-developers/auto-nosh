import { Product } from "../product/Product";
import { ProductCartOption } from "../productCartOption/ProductCartOption";

export type ProductCart = {
  createdAt: Date;
  id: string;
  product?: Product;
  productCartOptions?: Array<ProductCartOption>;
  updatedAt: Date;
};
