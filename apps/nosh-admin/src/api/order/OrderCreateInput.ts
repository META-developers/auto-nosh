import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";

export type OrderCreateInput = {
  driver?: DriverWhereUniqueInput | null;
};
