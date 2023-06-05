import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";

export type LocationUpdateInput = {
  driver?: DriverWhereUniqueInput | null;
  lat?: number;
  lng?: number;
};
