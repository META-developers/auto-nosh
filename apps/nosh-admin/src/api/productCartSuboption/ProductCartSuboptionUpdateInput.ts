import { ProductCartOptionUpdateManyWithoutProductCartSuboptionsInput } from "./ProductCartOptionUpdateManyWithoutProductCartSuboptionsInput";
import { SuboptionWhereUniqueInput } from "../suboption/SuboptionWhereUniqueInput";

export type ProductCartSuboptionUpdateInput = {
  position?: string | null;
  price?: number | null;
  productCartOptions?: ProductCartOptionUpdateManyWithoutProductCartSuboptionsInput;
  quantity?: number;
  selected?: boolean;
  suboption?: SuboptionWhereUniqueInput;
  total?: string | null;
};
