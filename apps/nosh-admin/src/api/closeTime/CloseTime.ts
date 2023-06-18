import { TimeLapse } from "../timeLapse/TimeLapse";

export type CloseTime = {
  hour: number;
  id: string;
  minute: number;
  timeLapse?: TimeLapse;
};
