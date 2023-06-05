import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  driver?: DriverWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
