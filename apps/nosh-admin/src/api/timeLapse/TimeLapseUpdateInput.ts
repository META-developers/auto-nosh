import { CloseTimeWhereUniqueInput } from "../closeTime/CloseTimeWhereUniqueInput";
import { OpenTimeWhereUniqueInput } from "../openTime/OpenTimeWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type TimeLapseUpdateInput = {
  close?: CloseTimeWhereUniqueInput | null;
  open?: OpenTimeWhereUniqueInput | null;
  schedule?: ScheduleWhereUniqueInput | null;
};
