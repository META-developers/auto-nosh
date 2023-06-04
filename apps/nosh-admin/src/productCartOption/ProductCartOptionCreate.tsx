import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OptionTitle } from "../option/OptionTitle";
import { ProductCartTitle } from "../productCart/ProductCartTitle";
import { ProductCartSuboptionTitle } from "../productCartSuboption/ProductCartSuboptionTitle";

export const ProductCartOptionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Balance" source="balance" />
        <ReferenceInput source="option.id" reference="Option" label="Option">
          <SelectInput optionText={OptionTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productCart.id"
          reference="ProductCart"
          label="ProductCart"
        >
          <SelectInput optionText={ProductCartTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="productCartSuboptions"
          reference="ProductCartSuboption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCartSuboptionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
