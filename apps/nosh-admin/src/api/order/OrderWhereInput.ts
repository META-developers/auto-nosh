import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  driver?: DriverWhereUniqueInput;
  id?: StringFilter;
};
