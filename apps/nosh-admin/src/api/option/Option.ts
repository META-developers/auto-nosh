import { Product } from "../product/Product";
import { Suboption } from "../suboption/Suboption";

export type Option = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  suboptions?: Array<Suboption>;
  updatedAt: Date;
};
