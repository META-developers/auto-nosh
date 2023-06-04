import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { ProductCartSuboptionUpdateManyWithoutSuboptionsInput } from "./ProductCartSuboptionUpdateManyWithoutSuboptionsInput";

export type SuboptionUpdateInput = {
  option?: OptionWhereUniqueInput | null;
  productCartSuboptions?: ProductCartSuboptionUpdateManyWithoutSuboptionsInput;
};
