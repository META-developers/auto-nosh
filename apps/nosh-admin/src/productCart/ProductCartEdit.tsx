import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductCartSuboptionTitle } from "../productCartSuboption/ProductCartSuboptionTitle";
import { ProductTitle } from "../product/ProductTitle";

export const ProductCartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="productCartSuboptions"
          reference="ProductCartSuboption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCartSuboptionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="products.id"
          reference="Product"
          label="Products"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
