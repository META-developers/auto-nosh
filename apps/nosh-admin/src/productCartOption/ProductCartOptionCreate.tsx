import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OptionTitle } from "../option/OptionTitle";

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
      </SimpleForm>
    </Create>
  );
};
