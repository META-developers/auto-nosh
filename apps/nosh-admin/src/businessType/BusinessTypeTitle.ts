import { BusinessType as TBusinessType } from "../api/businessType/BusinessType";

export const BUSINESSTYPE_TITLE_FIELD = "name";

export const BusinessTypeTitle = (record: TBusinessType): string => {
  return record.name || String(record.id);
};
