import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  customer?: AddressWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
