import { AddressCreateNestedManyWithoutLocationsInput } from "./AddressCreateNestedManyWithoutLocationsInput";
import { BusinessCreateNestedManyWithoutLocationsInput } from "./BusinessCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  addresses?: AddressCreateNestedManyWithoutLocationsInput;
  businesses?: BusinessCreateNestedManyWithoutLocationsInput;
  lat: number;
  lng: number;
};
