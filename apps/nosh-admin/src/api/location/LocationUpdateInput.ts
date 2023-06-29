import { AddressUpdateManyWithoutLocationsInput } from "./AddressUpdateManyWithoutLocationsInput";
import { BusinessUpdateManyWithoutLocationsInput } from "./BusinessUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  addresses?: AddressUpdateManyWithoutLocationsInput;
  businesses?: BusinessUpdateManyWithoutLocationsInput;
  lat?: number;
  lng?: number;
};
