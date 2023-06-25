import { TimeLapseInterval } from "../timeLapseInterval/TimeLapseInterval";
import { Schedule } from "../schedule/Schedule";

export type TimeLapse = {
  close?: TimeLapseInterval | null;
  id: string;
  open?: TimeLapseInterval | null;
  schedule?: Schedule | null;
};
