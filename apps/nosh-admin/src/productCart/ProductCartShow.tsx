import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { PRODUCTCART_TITLE_FIELD } from "./ProductCartTitle";
import { SUBOPTION_TITLE_FIELD } from "../suboption/SuboptionTitle";

export const ProductCartShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductCartSuboption"
          target="ProductCartId"
          label="Product Cart Suboptions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Position" source="position" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="ProductCart"
              source="productcart.id"
              reference="ProductCart"
            >
              <TextField source={PRODUCTCART_TITLE_FIELD} />
            </ReferenceField>
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
