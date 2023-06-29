import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { BusinessListRelationFilter } from "../business/BusinessListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type LocationWhereInput = {
  addresses?: AddressListRelationFilter;
  businesses?: BusinessListRelationFilter;
  id?: StringFilter;
  lat?: FloatFilter;
  lng?: FloatFilter;
};
