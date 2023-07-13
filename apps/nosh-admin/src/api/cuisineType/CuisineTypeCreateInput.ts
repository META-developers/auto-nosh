import { BusinessCreateNestedManyWithoutCuisineTypesInput } from "./BusinessCreateNestedManyWithoutCuisineTypesInput";

export type CuisineTypeCreateInput = {
  business?: BusinessCreateNestedManyWithoutCuisineTypesInput;
  description?: string | null;
  image?: string | null;
  name: string;
};
