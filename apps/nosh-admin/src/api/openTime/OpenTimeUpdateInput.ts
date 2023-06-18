import { TimeLapseWhereUniqueInput } from "../timeLapse/TimeLapseWhereUniqueInput";

export type OpenTimeUpdateInput = {
  hour?: number;
  minute?: number;
  timeLapse?: TimeLapseWhereUniqueInput;
};
