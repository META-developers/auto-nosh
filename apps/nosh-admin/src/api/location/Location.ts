import { Driver } from "../driver/Driver";

export type Location = {
  createdAt: Date;
  driver?: Driver | null;
  id: string;
  lat: number;
  lng: number;
  updatedAt: Date;
};
