import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  name?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
