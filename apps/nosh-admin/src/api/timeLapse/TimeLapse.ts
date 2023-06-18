import { CloseTime } from "../closeTime/CloseTime";
import { OpenTime } from "../openTime/OpenTime";
import { Schedule } from "../schedule/Schedule";

export type TimeLapse = {
  close?: CloseTime | null;
  id: string;
  open?: OpenTime | null;
  schedule?: Schedule | null;
};
