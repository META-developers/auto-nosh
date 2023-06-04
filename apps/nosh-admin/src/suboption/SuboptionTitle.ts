import { Suboption as TSuboption } from "../api/suboption/Suboption";

export const SUBOPTION_TITLE_FIELD = "id";

export const SuboptionTitle = (record: TSuboption): string => {
  return record.id || String(record.id);
};
