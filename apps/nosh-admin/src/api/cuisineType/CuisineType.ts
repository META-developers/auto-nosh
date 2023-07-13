import { Business } from "../business/Business";

export type CuisineType = {
  business?: Array<Business>;
  description: string | null;
  id: string;
  image: string | null;
  name: string;
};
