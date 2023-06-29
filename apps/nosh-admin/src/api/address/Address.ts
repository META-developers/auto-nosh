import { Location } from "../location/Location";

export type Address = {
  createdAt: Date;
  id: string;
  location?: Location;
  street: string | null;
  updatedAt: Date;
};
