import { DriverCreateNestedManyWithoutLocationsInput } from "./DriverCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  drivers?: DriverCreateNestedManyWithoutLocationsInput;
  lat: number;
  lng: number;
};
