import { TimeLapse } from "../timeLapse/TimeLapse";

export type OpenTime = {
  hour: number;
  id: string;
  minute: number;
  timeLapse?: TimeLapse;
};
