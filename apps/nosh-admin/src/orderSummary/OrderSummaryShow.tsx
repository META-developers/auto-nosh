import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const OrderSummaryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Delivery Price" source="deliveryPrice" />
        <TextField
          label="Delivery Price With Discount"
          source="deliveryPriceWithDiscount"
        />
        <TextField label="Discount" source="discount" />
        <TextField label="Driver Tip" source="driverTip" />
        <TextField label="Driver Tip Rate" source="driverTipRate" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Service Fee" source="serviceFee" />
        <TextField label="Service Fee Rate" source="serviceFeeRate" />
        <TextField
          label="Service Fee With Discount"
          source="serviceFeeWithDiscount"
        />
        <TextField label="Subtotal" source="subtotal" />
        <TextField
          label="Subtotal With Discount"
          source="subtotalWithDiscount"
        />
        <TextField label="Tax" source="tax" />
        <TextField label="Tax After Discount" source="taxAfterDiscount" />
        <TextField label="Tax Rate" source="taxRate" />
        <TextField label="Tax With Discount" source="taxWithDiscount" />
        <TextField label="Total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
