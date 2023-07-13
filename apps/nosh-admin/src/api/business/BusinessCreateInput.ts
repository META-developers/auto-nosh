import { BusinessTypeCreateNestedManyWithoutBusinessesInput } from "./BusinessTypeCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  cuisineTypes?: BusinessTypeCreateNestedManyWithoutBusinessesInput;
};
