import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverWhereInput = {
  available?: BooleanFilter;
  busy?: BooleanFilter;
  enabled?: BooleanFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  orders?: OrderListRelationFilter;
  user?: UserWhereUniqueInput;
};
