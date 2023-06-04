import { Option } from "../option/Option";
import { ProductCartSuboption } from "../productCartSuboption/ProductCartSuboption";

export type Suboption = {
  createdAt: Date;
  id: string;
  option?: Option | null;
  productCartSuboptions?: Array<ProductCartSuboption>;
  updatedAt: Date;
};
