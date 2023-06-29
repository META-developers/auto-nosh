import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AddressWhereInput = {
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  street?: StringNullableFilter;
};
