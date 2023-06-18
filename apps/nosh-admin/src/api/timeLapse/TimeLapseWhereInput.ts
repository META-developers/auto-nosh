import { CloseTimeWhereUniqueInput } from "../closeTime/CloseTimeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OpenTimeWhereUniqueInput } from "../openTime/OpenTimeWhereUniqueInput";

export type TimeLapseWhereInput = {
  close?: CloseTimeWhereUniqueInput;
  id?: StringFilter;
  open?: OpenTimeWhereUniqueInput;
};
