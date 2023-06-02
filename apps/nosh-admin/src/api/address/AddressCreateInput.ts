import { OrderCreateNestedManyWithoutAddressesInput } from "./OrderCreateNestedManyWithoutAddressesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressCreateInput = {
  dropdownOptionId?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutAddressesInput;
  user: UserWhereUniqueInput;
};
