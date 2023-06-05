import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";

export type LocationCreateInput = {
  driver?: DriverWhereUniqueInput | null;
  lat: number;
  lng: number;
};
