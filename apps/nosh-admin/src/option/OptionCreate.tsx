import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { ProductCartOptionTitle } from "../productCartOption/ProductCartOptionTitle";
import { SuboptionTitle } from "../suboption/SuboptionTitle";

export const OptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="productCartOptions"
          reference="ProductCartOption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCartOptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="suboptions"
          reference="Suboption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SuboptionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};