import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { BusinessTypeTitle } from "../businessType/BusinessTypeTitle";

export const BusinessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="businessTypes"
          reference="BusinessType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BusinessTypeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
