import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OfferCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
