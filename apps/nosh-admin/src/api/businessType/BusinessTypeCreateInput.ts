import { BusinessCreateNestedManyWithoutBusinessTypesInput } from "./BusinessCreateNestedManyWithoutBusinessTypesInput";

export type BusinessTypeCreateInput = {
  business?: BusinessCreateNestedManyWithoutBusinessTypesInput;
  description?: string | null;
  image?: string | null;
  name: "Food" | "Alcohol" | "Convenience" | "Pets" | "Grocery";
};
