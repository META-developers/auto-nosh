import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { SUBOPTION_TITLE_FIELD } from "./SuboptionTitle";
import { OPTION_TITLE_FIELD } from "../option/OptionTitle";

export const SuboptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Option" source="option.id" reference="Option">
          <TextField source={OPTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductCartSuboption"
          target="SuboptionId"
          label="Product Cart Suboptions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
