import { Location } from "../location/Location";

export type Business = {
  createdAt: Date;
  id: string;
  location?: Location;
  name: string;
  updatedAt: Date;
};
