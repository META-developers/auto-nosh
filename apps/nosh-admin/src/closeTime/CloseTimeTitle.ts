import { CloseTime as TCloseTime } from "../api/closeTime/CloseTime";

export const CLOSETIME_TITLE_FIELD = "id";

export const CloseTimeTitle = (record: TCloseTime): string => {
  return record.id || String(record.id);
};
