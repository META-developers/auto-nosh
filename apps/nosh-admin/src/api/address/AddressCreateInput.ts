import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type AddressCreateInput = {
  location: LocationWhereUniqueInput;
  street?: string | null;
};
