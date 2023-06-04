import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ProductCartTitle } from "../productCart/ProductCartTitle";
import { SuboptionTitle } from "../suboption/SuboptionTitle";

export const ProductCartSuboptionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Position" source="position" />
        <NumberInput label="Price" source="price" />
        <ReferenceInput
          source="productCart.id"
          reference="ProductCart"
          label="ProductCart"
        >
          <SelectInput optionText={ProductCartTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <BooleanInput label="Selected" source="selected" />
        <ReferenceInput
          source="suboption.id"
          reference="Suboption"
          label="Suboption"
        >
          <SelectInput optionText={SuboptionTitle} />
        </ReferenceInput>
        <TextInput label="Total" source="total" />
      </SimpleForm>
    </Create>
  );
};
