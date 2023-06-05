import { Driver } from "../driver/Driver";

export type Order = {
  createdAt: Date;
  driver?: Driver | null;
  id: string;
  updatedAt: Date;
};
