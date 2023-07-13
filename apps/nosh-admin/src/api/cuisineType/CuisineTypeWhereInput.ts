import { BusinessListRelationFilter } from "../business/BusinessListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CuisineTypeWhereInput = {
  business?: BusinessListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringFilter;
};
