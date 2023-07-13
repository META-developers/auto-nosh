import { BusinessTypeListRelationFilter } from "../businessType/BusinessTypeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BusinessWhereInput = {
  businessTypes?: BusinessTypeListRelationFilter;
  id?: StringFilter;
};
