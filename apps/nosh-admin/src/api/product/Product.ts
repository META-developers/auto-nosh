import { Option } from "../option/Option";
import { ProductCart } from "../productCart/ProductCart";

export type Product = {
  createdAt: Date;
  id: string;
  option?: Array<Option>;
  productCarts?: Array<ProductCart>;
  updatedAt: Date;
};
