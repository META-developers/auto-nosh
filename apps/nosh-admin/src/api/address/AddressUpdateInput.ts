import { OrderUpdateManyWithoutAddressesInput } from "./OrderUpdateManyWithoutAddressesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressUpdateInput = {
  dropdownOptionId?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutAddressesInput;
  user?: UserWhereUniqueInput;
};
