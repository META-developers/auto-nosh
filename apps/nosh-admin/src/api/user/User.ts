import { Driver } from "../driver/Driver";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  drivers?: Array<Driver>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
