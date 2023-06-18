import { CloseTimeWhereUniqueInput } from "../closeTime/CloseTimeWhereUniqueInput";
import { OpenTimeWhereUniqueInput } from "../openTime/OpenTimeWhereUniqueInput";

export type TimeLapseCreateInput = {
  close: CloseTimeWhereUniqueInput | null;
  open: OpenTimeWhereUniqueInput | null;
};
