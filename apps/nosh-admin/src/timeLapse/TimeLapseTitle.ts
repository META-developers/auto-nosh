import { TimeLapse as TTimeLapse } from "../api/timeLapse/TimeLapse";

export const TIMELAPSE_TITLE_FIELD = "id";

export const TimeLapseTitle = (record: TTimeLapse): string => {
  return record.id || String(record.id);
};
