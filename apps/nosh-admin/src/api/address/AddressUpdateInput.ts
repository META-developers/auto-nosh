import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type AddressUpdateInput = {
  location?: LocationWhereUniqueInput;
  street?: string | null;
};
