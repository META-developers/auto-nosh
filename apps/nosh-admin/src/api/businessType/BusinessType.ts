import { Business } from "../business/Business";

export type BusinessType = {
  business?: Array<Business>;
  description: string | null;
  id: string;
  image: string | null;
  name?: "Food" | "Alcohol" | "Convenience" | "Pets" | "Grocery";
};
