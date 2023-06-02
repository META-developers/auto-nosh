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
} from "react-admin";

import { BUSINESS_TITLE_FIELD } from "./BusinessTitle";
import { CART_TITLE_FIELD } from "../cart/CartTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";

export const BusinessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Order"
          target="BusinessId"
          label="Orders"
        >
          <Datagrid rowClick="show">
            <TextField label="App Id" source="appId" />
            <ReferenceField
              label="Business"
              source="business.id"
              reference="Business"
            >
              <TextField source={BUSINESS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Cart" source="cart.id" reference="Cart">
              <TextField source={CART_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Delivery Datetime" source="deliveryDatetime" />
            <TextField label="Delivery Type" source="deliveryType" />
            <TextField label="Delivery Zone ID" source="deliveryZoneId" />
            <TextField label="ID" source="id" />
            <TextField label="Paymethod ID" source="paymethodId" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
