import { TimeLapseWhereUniqueInput } from "../timeLapse/TimeLapseWhereUniqueInput";

export type OpenTimeCreateInput = {
  hour: number;
  minute: number;
  timeLapse: TimeLapseWhereUniqueInput;
};
