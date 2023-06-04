import { ProductCart } from "../productCart/ProductCart";
import { Suboption } from "../suboption/Suboption";

export type ProductCartSuboption = {
  createdAt: Date;
  id: string;
  position: string | null;
  price: number | null;
  productCart?: ProductCart | null;
  quantity: number;
  selected: boolean;
  suboption?: Suboption | null;
  total: string | null;
  updatedAt: Date;
};
