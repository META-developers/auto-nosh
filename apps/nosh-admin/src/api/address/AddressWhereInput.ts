import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressWhereInput = {
  dropdownOptionId?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  user?: UserWhereUniqueInput;
};
