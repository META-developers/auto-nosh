import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { TimeLapseWhereUniqueInput } from "../timeLapse/TimeLapseWhereUniqueInput";

export type CloseTimeWhereInput = {
  hour?: IntFilter;
  id?: StringFilter;
  minute?: IntFilter;
  timeLapses?: TimeLapseWhereUniqueInput;
};
