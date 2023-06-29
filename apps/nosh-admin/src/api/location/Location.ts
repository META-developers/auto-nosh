import { Address } from "../address/Address";
import { Business } from "../business/Business";

export type Location = {
  addresses?: Array<Address>;
  businesses?: Array<Business>;
  id: string;
  lat: number;
  lng: number;
};
