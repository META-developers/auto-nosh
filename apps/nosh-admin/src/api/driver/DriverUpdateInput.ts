import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { OrderUpdateManyWithoutDriversInput } from "./OrderUpdateManyWithoutDriversInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverUpdateInput = {
  available?: boolean;
  busy?: boolean;
  enabled?: boolean;
  location?: LocationWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutDriversInput;
  user?: UserWhereUniqueInput;
};
