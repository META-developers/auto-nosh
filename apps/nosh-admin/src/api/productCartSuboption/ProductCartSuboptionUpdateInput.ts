import { ProductCartWhereUniqueInput } from "../productCart/ProductCartWhereUniqueInput";
import { SuboptionWhereUniqueInput } from "../suboption/SuboptionWhereUniqueInput";

export type ProductCartSuboptionUpdateInput = {
  position?: string | null;
  price?: number | null;
  productCart?: ProductCartWhereUniqueInput | null;
  quantity?: number;
  selected?: boolean;
  suboption?: SuboptionWhereUniqueInput | null;
  total?: string | null;
};
