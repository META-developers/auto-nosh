import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ProductCartOptionTitle } from "../productCartOption/ProductCartOptionTitle";
import { SuboptionTitle } from "../suboption/SuboptionTitle";

export const ProductCartSuboptionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Position" source="position" />
        <NumberInput label="Price" source="price" />
        <ReferenceInput
          source="productCartOptions.id"
          reference="ProductCartOption"
          label="Product Cart Options"
        >
          <SelectInput optionText={ProductCartOptionTitle} />
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
    </Edit>
  );
};
