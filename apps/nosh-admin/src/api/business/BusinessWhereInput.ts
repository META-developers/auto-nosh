import { StringFilter } from "../../util/StringFilter";

export type BusinessWhereInput = {
  id?: StringFilter;
  menuProvider?:
    | "Nosh"
    | "Chowly"
    | "Toast"
    | "Deliverect"
    | "Square"
    | "Checkmate"
    | "Otter";
};
