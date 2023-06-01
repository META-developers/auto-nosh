import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrderTitle } from "../order/OrderTitle";

export const CartCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="orders.id" reference="Order" label="Orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
