import { Business } from "../business/Business";

export type CuisineType = {
  business?: Array<Business>;
  description: string | null;
  id: string;
  image: string | null;
  name?:
    | "Mexican"
    | "American"
    | "Italian"
    | "Chinese"
    | "Japanese"
    | "Indian"
    | "Thai"
    | "Coffee"
    | "FastFood"
    | "Brazilian"
    | "Salad"
    | "Sushi"
    | "Pizza"
    | "Burgers"
    | "Greek"
    | "Sandwiches"
    | "Korean"
    | "Desserts";
};
