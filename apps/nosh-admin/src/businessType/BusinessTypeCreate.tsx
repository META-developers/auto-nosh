import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";

export const BusinessTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="business"
          reference="Business"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BusinessTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="image" source="image" />
        <SelectInput
          source="name"
          label="name"
          choices={[
            { label: "Food", value: "Food" },
            { label: "Alcohol", value: "Alcohol" },
            { label: "Convenience", value: "Convenience" },
            { label: "Pets", value: "Pets" },
            { label: "Grocery", value: "Grocery" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
