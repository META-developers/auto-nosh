import { ProductCartSuboptionUpdateManyWithoutProductCartsInput } from "./ProductCartSuboptionUpdateManyWithoutProductCartsInput";
import { ProductUpdateManyWithoutProductCartsInput } from "./ProductUpdateManyWithoutProductCartsInput";

export type ProductCartUpdateInput = {
  productCartSuboptions?: ProductCartSuboptionUpdateManyWithoutProductCartsInput;
  products?: ProductUpdateManyWithoutProductCartsInput;
};
