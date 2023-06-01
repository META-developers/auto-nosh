import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";
import { CART_TITLE_FIELD } from "../cart/CartTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Delivery Datetime" source="deliveryDatetime" />
        <TextField label="Delivery Type" source="deliveryType" />
        <TextField label="Delivery Zone ID" source="deliveryZoneId" />
        <TextField label="ID" source="id" />
        <TextField label="Paymethod ID" source="paymethodId" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
