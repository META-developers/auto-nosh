import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { TimeLapseWhereUniqueInput } from "../timeLapse/TimeLapseWhereUniqueInput";

export type TimeLapseIntervalWhereInput = {
  hour?: IntFilter;
  id?: StringFilter;
  minute?: IntFilter;
  timeLapseClose?: TimeLapseWhereUniqueInput;
  timeLapsesOpen?: TimeLapseWhereUniqueInput;
};
