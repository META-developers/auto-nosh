import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type BusinessWhereInput = {
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  name?: StringFilter;
};
