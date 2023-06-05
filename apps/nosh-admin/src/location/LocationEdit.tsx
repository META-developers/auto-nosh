import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { DriverTitle } from "../driver/DriverTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <NumberInput label="lat" source="lat" />
        <NumberInput label="lng" source="lng" />
      </SimpleForm>
    </Edit>
  );
};
