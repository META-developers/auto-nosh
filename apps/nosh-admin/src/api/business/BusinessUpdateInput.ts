import { OrderUpdateManyWithoutBusinessesInput } from "./OrderUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  name?: string;
  orders?: OrderUpdateManyWithoutBusinessesInput;
};
