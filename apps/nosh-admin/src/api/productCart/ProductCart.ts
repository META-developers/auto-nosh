import { ProductCartSuboption } from "../productCartSuboption/ProductCartSuboption";
import { Product } from "../product/Product";

export type ProductCart = {
  createdAt: Date;
  id: string;
  productCartSuboptions?: Array<ProductCartSuboption>;
  products?: Product | null;
  updatedAt: Date;
};
