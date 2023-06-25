import { TimeLapseIntervalWhereUniqueInput } from "../timeLapseInterval/TimeLapseIntervalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type TimeLapseWhereInput = {
  close?: TimeLapseIntervalWhereUniqueInput;
  id?: StringFilter;
  open?: TimeLapseIntervalWhereUniqueInput;
  schedule?: ScheduleWhereUniqueInput;
};
