import { TimeLapse } from "../timeLapse/TimeLapse";

export type TimeLapseInterval = {
  hour: number;
  id: string;
  minute: number;
  timeLapseClose?: TimeLapse;
  timeLapsesOpen?: TimeLapse;
};
