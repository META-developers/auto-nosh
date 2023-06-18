import { TimeLapse } from "../timeLapse/TimeLapse";

export type Schedule = {
  createdAt: Date;
  id: string;
  lapses?: Array<TimeLapse>;
  updatedAt: Date;
};
