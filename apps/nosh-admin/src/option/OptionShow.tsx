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
} from "react-admin";

import { OPTION_TITLE_FIELD } from "./OptionTitle";
import { PRODUCTCART_TITLE_FIELD } from "../productCart/ProductCartTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const OptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductCartOption"
          target="OptionId"
          label="Product Cart Options"
        >
          <Datagrid rowClick="show">
            <TextField label="Balance" source="balance" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Option"
              source="option.id"
              reference="Option"
            >
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Suboption"
          target="OptionId"
          label="SubOptions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Option"
              source="option.id"
              reference="Option"
            >
              <TextField source={OPTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
