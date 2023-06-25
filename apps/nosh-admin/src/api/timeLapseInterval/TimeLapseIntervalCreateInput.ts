import { TimeLapseWhereUniqueInput } from "../timeLapse/TimeLapseWhereUniqueInput";

export type TimeLapseIntervalCreateInput = {
  hour: number;
  minute: number;
  timeLapseClose: TimeLapseWhereUniqueInput;
  timeLapsesOpen: TimeLapseWhereUniqueInput;
};
