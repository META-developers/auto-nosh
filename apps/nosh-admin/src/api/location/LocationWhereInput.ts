import { DriverListRelationFilter } from "../driver/DriverListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type LocationWhereInput = {
  drivers?: DriverListRelationFilter;
  id?: StringFilter;
  lat?: FloatFilter;
  lng?: FloatFilter;
};
