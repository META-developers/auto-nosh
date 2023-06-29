import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type BusinessCreateInput = {
  location: LocationWhereUniqueInput;
  name: string;
};
