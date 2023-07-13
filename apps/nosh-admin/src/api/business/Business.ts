import { CuisineType } from "../cuisineType/CuisineType";

export type Business = {
  cuisineTypes?: Array<CuisineType>;
  id: string;
};
