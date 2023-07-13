import { CuisineType as TCuisineType } from "../api/cuisineType/CuisineType";

export const CUISINETYPE_TITLE_FIELD = "name";

export const CuisineTypeTitle = (record: TCuisineType): string => {
  return record.name || String(record.id);
};
