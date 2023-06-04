import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { PRODUCTCARTOPTION_TITLE_FIELD } from "./ProductCartOptionTitle";
import { SUBOPTION_TITLE_FIELD } from "../suboption/SuboptionTitle";
import { OPTION_TITLE_FIELD } from "../option/OptionTitle";
import { PRODUCTCART_TITLE_FIELD } from "../productCart/ProductCartTitle";

export const ProductCartOptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Option" source="option.id" reference="Option">
          <TextField source={OPTION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="ProductCart"
          source="productcart.id"
          reference="ProductCart"
        >
          <TextField source={PRODUCTCART_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductCartSuboption"
          target="ProductCartOptionId"
          label="Product Cart Suboptions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Position" source="position" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Product Cart Options"
              source="productcartoption.id"
              reference="ProductCartOption"
            >
              <TextField source={PRODUCTCARTOPTION_TITLE_FIELD} />
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
