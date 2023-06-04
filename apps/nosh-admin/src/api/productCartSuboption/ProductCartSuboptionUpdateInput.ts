import { ProductCartOptionWhereUniqueInput } from "../productCartOption/ProductCartOptionWhereUniqueInput";
import { SuboptionWhereUniqueInput } from "../suboption/SuboptionWhereUniqueInput";

export type ProductCartSuboptionUpdateInput = {
  position?: string | null;
  price?: number | null;
  productCartOptions?: ProductCartOptionWhereUniqueInput;
  quantity?: number;
  selected?: boolean;
  suboption?: SuboptionWhereUniqueInput;
  total?: string | null;
};
