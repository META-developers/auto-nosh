import { OrderCreateNestedManyWithoutCartsInput } from "./OrderCreateNestedManyWithoutCartsInput";

export type CartCreateInput = {
  orders?: OrderCreateNestedManyWithoutCartsInput;
};
