import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="drivers"
          reference="Driver"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DriverTitle} />
        </ReferenceArrayInput>
        <NumberInput label="lat" source="lat" />
        <NumberInput label="lng" source="lng" />
      </SimpleForm>
    </Create>
  );
};
