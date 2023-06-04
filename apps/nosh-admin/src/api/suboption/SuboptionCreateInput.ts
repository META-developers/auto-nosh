import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { ProductCartSuboptionCreateNestedManyWithoutSuboptionsInput } from "./ProductCartSuboptionCreateNestedManyWithoutSuboptionsInput";

export type SuboptionCreateInput = {
  option?: OptionWhereUniqueInput | null;
  productCartSuboptions?: ProductCartSuboptionCreateNestedManyWithoutSuboptionsInput;
};
