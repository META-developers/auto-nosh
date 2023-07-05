import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";
import { OrderTitle } from "../order/OrderTitle";

export const OrderEventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="eventSource"
          label="Event Source"
          choices={[
            { label: "Nosh", value: "Nosh" },
            { label: "Chowly", value: "Chowly" },
            { label: "Checkmate", value: "Checkmate" },
            { label: "Shipday", value: "Shipday" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
