import { Option } from "../option/Option";
import { ProductCart } from "../productCart/ProductCart";
import { ProductCartSuboption } from "../productCartSuboption/ProductCartSuboption";

export type ProductCartOption = {
  balance: number | null;
  createdAt: Date;
  id: string;
  option?: Option | null;
  productCart?: ProductCart | null;
  productCartSuboption?: Array<ProductCartSuboption>;
  updatedAt: Date;
};
