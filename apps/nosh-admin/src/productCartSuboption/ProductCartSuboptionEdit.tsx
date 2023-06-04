import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
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
        <ReferenceArrayInput
          source="productCartOptions"
          reference="ProductCartOption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCartOptionTitle} />
        </ReferenceArrayInput>
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
