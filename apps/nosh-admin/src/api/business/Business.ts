import { BusinessType } from "../businessType/BusinessType";

export type Business = {
  businessTypes?: Array<BusinessType>;
  id: string;
};
