import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { BusinessTitle } from "../business/BusinessTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="addresses"
          reference="Address"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AddressTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="businesses"
          reference="Business"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BusinessTitle} />
        </ReferenceArrayInput>
        <NumberInput label="lat" source="lat" />
        <NumberInput label="lng" source="lng" />
      </SimpleForm>
    </Edit>
  );
};
