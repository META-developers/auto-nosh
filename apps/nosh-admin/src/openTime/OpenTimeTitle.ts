import { OpenTime as TOpenTime } from "../api/openTime/OpenTime";

export const OPENTIME_TITLE_FIELD = "id";

export const OpenTimeTitle = (record: TOpenTime): string => {
  return record.id || String(record.id);
};
