import { OrderCreateNestedManyWithoutBusinessesInput } from "./OrderCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  name: string;
  orders?: OrderCreateNestedManyWithoutBusinessesInput;
};
