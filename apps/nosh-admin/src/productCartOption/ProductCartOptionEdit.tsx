import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OptionTitle } from "../option/OptionTitle";

export const ProductCartOptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Balance" source="balance" />
        <ReferenceInput source="option.id" reference="Option" label="Option">
          <SelectInput optionText={OptionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
