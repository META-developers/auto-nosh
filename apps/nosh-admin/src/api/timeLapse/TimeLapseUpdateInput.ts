import { CloseTimeWhereUniqueInput } from "../closeTime/CloseTimeWhereUniqueInput";
import { OpenTimeWhereUniqueInput } from "../openTime/OpenTimeWhereUniqueInput";

export type TimeLapseUpdateInput = {
  close?: CloseTimeWhereUniqueInput | null;
  open?: OpenTimeWhereUniqueInput | null;
};
