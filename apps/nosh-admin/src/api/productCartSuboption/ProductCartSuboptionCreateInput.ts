import { ProductCartOptionCreateNestedManyWithoutProductCartSuboptionsInput } from "./ProductCartOptionCreateNestedManyWithoutProductCartSuboptionsInput";
import { SuboptionWhereUniqueInput } from "../suboption/SuboptionWhereUniqueInput";

export type ProductCartSuboptionCreateInput = {
  position?: string | null;
  price?: number | null;
  productCartOptions?: ProductCartOptionCreateNestedManyWithoutProductCartSuboptionsInput;
  quantity: number;
  selected: boolean;
  suboption: SuboptionWhereUniqueInput;
  total?: string | null;
};
