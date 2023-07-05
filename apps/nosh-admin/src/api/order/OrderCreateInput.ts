import { OrderEventCreateNestedManyWithoutOrdersInput } from "./OrderEventCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  orderEvents?: OrderEventCreateNestedManyWithoutOrdersInput;
};
