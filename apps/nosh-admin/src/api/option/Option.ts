import { Product } from "../product/Product";
import { ProductCartOption } from "../productCartOption/ProductCartOption";
import { Suboption } from "../suboption/Suboption";

export type Option = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  productCartOptions?: Array<ProductCartOption>;
  suboptions?: Array<Suboption>;
  updatedAt: Date;
};
