import { BusinessUpdateManyWithoutBusinessTypesInput } from "./BusinessUpdateManyWithoutBusinessTypesInput";

export type BusinessTypeUpdateInput = {
  business?: BusinessUpdateManyWithoutBusinessTypesInput;
  description?: string | null;
  image?: string | null;
  name?: "Food" | "Alcohol" | "Convenience" | "Pets" | "Grocery";
};
