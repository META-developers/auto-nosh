import { OptionUpdateManyWithoutProductsInput } from "./OptionUpdateManyWithoutProductsInput";
import { ProductCartUpdateManyWithoutProductsInput } from "./ProductCartUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  option?: OptionUpdateManyWithoutProductsInput;
  productCart?: ProductCartUpdateManyWithoutProductsInput;
};
