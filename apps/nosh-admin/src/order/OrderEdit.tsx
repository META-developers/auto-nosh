import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrderSummaryTitle } from "../orderSummary/OrderSummaryTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="orderSummary.id"
          reference="OrderSummary"
          label="OrderSummary"
        >
          <SelectInput optionText={OrderSummaryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
