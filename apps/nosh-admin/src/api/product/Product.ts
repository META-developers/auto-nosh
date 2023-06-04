import { Option } from "../option/Option";
import { ProductCart } from "../productCart/ProductCart";

export type Product = {
  createdAt: Date;
  id: string;
  option?: Array<Option>;
  productCart?: Array<ProductCart>;
  updatedAt: Date;
};
