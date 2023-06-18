import { CloseTimeWhereUniqueInput } from "../closeTime/CloseTimeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OpenTimeWhereUniqueInput } from "../openTime/OpenTimeWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type TimeLapseWhereInput = {
  close?: CloseTimeWhereUniqueInput;
  id?: StringFilter;
  open?: OpenTimeWhereUniqueInput;
  schedule?: ScheduleWhereUniqueInput;
};
