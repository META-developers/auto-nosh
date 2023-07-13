import { BusinessListRelationFilter } from "../business/BusinessListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BusinessTypeWhereInput = {
  business?: BusinessListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: "Food" | "Alcohol" | "Convenience" | "Pets" | "Grocery";
};
