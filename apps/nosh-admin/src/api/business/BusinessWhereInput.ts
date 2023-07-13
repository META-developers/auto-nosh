import { CuisineTypeListRelationFilter } from "../cuisineType/CuisineTypeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BusinessWhereInput = {
  cuisineTypes?: CuisineTypeListRelationFilter;
  id?: StringFilter;
};
