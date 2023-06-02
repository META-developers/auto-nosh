import { Address } from "../address/Address";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  customer?: Address | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
