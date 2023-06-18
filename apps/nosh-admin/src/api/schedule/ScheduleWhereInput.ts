import { StringFilter } from "../../util/StringFilter";
import { TimeLapseListRelationFilter } from "../timeLapse/TimeLapseListRelationFilter";

export type ScheduleWhereInput = {
  id?: StringFilter;
  lapses?: TimeLapseListRelationFilter;
};
