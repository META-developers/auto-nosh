import { TimeLapseInterval as TTimeLapseInterval } from "../api/timeLapseInterval/TimeLapseInterval";

export const TIMELAPSEINTERVAL_TITLE_FIELD = "id";

export const TimeLapseIntervalTitle = (record: TTimeLapseInterval): string => {
  return record.id || String(record.id);
};
