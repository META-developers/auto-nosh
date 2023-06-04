import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OptionTitle } from "../option/OptionTitle";
import { ProductCartSuboptionTitle } from "../productCartSuboption/ProductCartSuboptionTitle";

export const SuboptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="option.id" reference="Option" label="Option">
          <SelectInput optionText={OptionTitle} />
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
    </Edit>
  );
};
