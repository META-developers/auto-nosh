import { CuisineTypeCreateNestedManyWithoutBusinessesInput } from "./CuisineTypeCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  cuisineTypes?: CuisineTypeCreateNestedManyWithoutBusinessesInput;
};
