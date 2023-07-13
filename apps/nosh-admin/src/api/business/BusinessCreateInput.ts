import { BusinessTypeCreateNestedManyWithoutBusinessesInput } from "./BusinessTypeCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  businessTypes?: BusinessTypeCreateNestedManyWithoutBusinessesInput;
};
