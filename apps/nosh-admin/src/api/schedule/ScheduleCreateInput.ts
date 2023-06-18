import { TimeLapseCreateNestedManyWithoutSchedulesInput } from "./TimeLapseCreateNestedManyWithoutSchedulesInput";

export type ScheduleCreateInput = {
  lapses?: TimeLapseCreateNestedManyWithoutSchedulesInput;
};
