import { ProductCartOption } from "../productCartOption/ProductCartOption";
import { Suboption } from "../suboption/Suboption";

export type ProductCartSuboption = {
  createdAt: Date;
  id: string;
  position: string | null;
  price: number | null;
  productCartOptions?: Array<ProductCartOption>;
  quantity: number;
  selected: boolean;
  suboption?: Suboption | null;
  total: string | null;
  updatedAt: Date;
};
