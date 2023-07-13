import { BusinessCreateNestedManyWithoutCuisineTypesInput } from "./BusinessCreateNestedManyWithoutCuisineTypesInput";

export type CuisineTypeCreateInput = {
  business?: BusinessCreateNestedManyWithoutCuisineTypesInput;
  description?: string | null;
  image?: string | null;
  name:
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
