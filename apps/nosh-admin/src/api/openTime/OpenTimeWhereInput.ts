import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { TimeLapseWhereUniqueInput } from "../timeLapse/TimeLapseWhereUniqueInput";

export type OpenTimeWhereInput = {
  hour?: IntFilter;
  id?: StringFilter;
  minute?: IntFilter;
  timeLapse?: TimeLapseWhereUniqueInput;
};
