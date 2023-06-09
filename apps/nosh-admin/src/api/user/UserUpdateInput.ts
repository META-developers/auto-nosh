import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  photo?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
