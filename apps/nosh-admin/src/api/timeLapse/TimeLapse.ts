import { CloseTime } from "../closeTime/CloseTime";
import { OpenTime } from "../openTime/OpenTime";

export type TimeLapse = {
  close?: CloseTime | null;
  id: string;
  open?: OpenTime | null;
};
