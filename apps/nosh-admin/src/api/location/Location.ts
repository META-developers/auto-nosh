import { Driver } from "../driver/Driver";

export type Location = {
  createdAt: Date;
  drivers?: Array<Driver>;
  id: string;
  lat: number;
  lng: number;
  updatedAt: Date;
};
