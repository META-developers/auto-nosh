import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { OrderCreateNestedManyWithoutDriversInput } from "./OrderCreateNestedManyWithoutDriversInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverCreateInput = {
  available: boolean;
  busy: boolean;
  enabled: boolean;
  location?: LocationWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutDriversInput;
  user: UserWhereUniqueInput;
};
