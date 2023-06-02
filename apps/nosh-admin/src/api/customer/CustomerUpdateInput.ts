import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerUpdateInput = {
  dropdownOptionId?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  user?: UserWhereUniqueInput;
};
