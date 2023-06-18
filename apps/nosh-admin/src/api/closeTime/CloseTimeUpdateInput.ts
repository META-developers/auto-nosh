import { TimeLapseWhereUniqueInput } from "../timeLapse/TimeLapseWhereUniqueInput";

export type CloseTimeUpdateInput = {
  hour?: number;
  minute?: number;
  timeLapse?: TimeLapseWhereUniqueInput;
};
