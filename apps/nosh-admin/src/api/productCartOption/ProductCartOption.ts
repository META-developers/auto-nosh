import { Option } from "../option/Option";

export type ProductCartOption = {
  balance: number | null;
  createdAt: Date;
  id: string;
  option?: Option | null;
  updatedAt: Date;
};
