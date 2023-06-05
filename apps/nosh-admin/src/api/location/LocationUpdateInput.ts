import { DriverUpdateManyWithoutLocationsInput } from "./DriverUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  drivers?: DriverUpdateManyWithoutLocationsInput;
  lat?: number;
  lng?: number;
};
