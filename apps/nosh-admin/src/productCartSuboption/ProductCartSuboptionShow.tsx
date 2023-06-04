import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SUBOPTION_TITLE_FIELD } from "../suboption/SuboptionTitle";

export const ProductCartSuboptionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Position" source="position" />
        <TextField label="Price" source="price" />
        <TextField label="Quantity" source="quantity" />
        <BooleanField label="Selected" source="selected" />
        <ReferenceField
          label="Suboption"
          source="suboption.id"
          reference="Suboption"
        >
          <TextField source={SUBOPTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
