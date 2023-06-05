import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type LocationWhereInput = {
  driver?: DriverWhereUniqueInput;
  id?: StringFilter;
  lat?: FloatFilter;
  lng?: FloatFilter;
};
