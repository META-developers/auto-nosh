import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const OrderSummaryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Delivery Price" source="deliveryPrice" />
        <NumberInput
          label="Delivery Price With Discount"
          source="deliveryPriceWithDiscount"
        />
        <NumberInput label="Discount" source="discount" />
        <NumberInput label="Driver Tip" source="driverTip" />
        <NumberInput label="Driver Tip Rate" source="driverTipRate" />
        <NumberInput label="Service Fee" source="serviceFee" />
        <NumberInput label="Service Fee Rate" source="serviceFeeRate" />
        <NumberInput
          label="Service Fee With Discount"
          source="serviceFeeWithDiscount"
        />
        <NumberInput label="Subtotal" source="subtotal" />
        <NumberInput
          label="Subtotal With Discount"
          source="subtotalWithDiscount"
        />
        <NumberInput label="Tax After Discount" source="taxAfterDiscount" />
        <NumberInput label="Tax Rate" source="taxRate" />
        <NumberInput label="Tax With Discount" source="taxWithDiscount" />
        <NumberInput label="Total" source="total" />
      </SimpleForm>
    </Edit>
  );
};
