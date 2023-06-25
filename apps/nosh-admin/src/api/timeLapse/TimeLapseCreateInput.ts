import { TimeLapseIntervalWhereUniqueInput } from "../timeLapseInterval/TimeLapseIntervalWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type TimeLapseCreateInput = {
  close: TimeLapseIntervalWhereUniqueInput | null;
  open: TimeLapseIntervalWhereUniqueInput | null;
  schedule?: ScheduleWhereUniqueInput | null;
};
