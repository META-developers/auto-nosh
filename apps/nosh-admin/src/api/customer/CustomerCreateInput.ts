import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
