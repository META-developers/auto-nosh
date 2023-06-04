import { ProductCartSuboptionUpdateManyWithoutProductCartsInput } from "./ProductCartSuboptionUpdateManyWithoutProductCartsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductCartUpdateInput = {
  productCartSuboptions?: ProductCartSuboptionUpdateManyWithoutProductCartsInput;
  products?: ProductWhereUniqueInput | null;
};
