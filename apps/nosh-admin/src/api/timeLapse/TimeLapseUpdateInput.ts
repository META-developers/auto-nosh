import { TimeLapseIntervalWhereUniqueInput } from "../timeLapseInterval/TimeLapseIntervalWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type TimeLapseUpdateInput = {
  close?: TimeLapseIntervalWhereUniqueInput | null;
  open?: TimeLapseIntervalWhereUniqueInput | null;
  schedule?: ScheduleWhereUniqueInput | null;
};
