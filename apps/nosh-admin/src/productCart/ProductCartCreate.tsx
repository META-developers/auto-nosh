import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { ProductCartSuboptionTitle } from "../productCartSuboption/ProductCartSuboptionTitle";
import { ProductTitle } from "../product/ProductTitle";

export const ProductCartCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="productCartSuboptions"
          reference="ProductCartSuboption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCartSuboptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
