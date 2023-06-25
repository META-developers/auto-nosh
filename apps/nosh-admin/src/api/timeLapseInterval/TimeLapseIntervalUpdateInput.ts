import { TimeLapseWhereUniqueInput } from "../timeLapse/TimeLapseWhereUniqueInput";

export type TimeLapseIntervalUpdateInput = {
  hour?: number;
  minute?: number;
  timeLapseClose?: TimeLapseWhereUniqueInput;
  timeLapsesOpen?: TimeLapseWhereUniqueInput;
};
