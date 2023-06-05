import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrderSummaryTitle } from "../orderSummary/OrderSummaryTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="orderSummary.id"
          reference="OrderSummary"
          label="OrderSummary"
        >
          <SelectInput optionText={OrderSummaryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
