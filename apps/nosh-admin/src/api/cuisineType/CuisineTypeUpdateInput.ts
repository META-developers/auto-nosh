import { BusinessUpdateManyWithoutCuisineTypesInput } from "./BusinessUpdateManyWithoutCuisineTypesInput";

export type CuisineTypeUpdateInput = {
  business?: BusinessUpdateManyWithoutCuisineTypesInput;
  description?: string | null;
  image?: string | null;
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
