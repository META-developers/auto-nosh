import { TimeLapseWhereUniqueInput } from "../timeLapse/TimeLapseWhereUniqueInput";

export type CloseTimeCreateInput = {
  hour: number;
  minute: number;
  timeLapses: TimeLapseWhereUniqueInput;
};
