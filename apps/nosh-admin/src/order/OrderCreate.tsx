import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";
import { CartTitle } from "../cart/CartTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { ProductCartTitle } from "../productCart/ProductCartTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="App Id" source="appId" />
        <ReferenceInput
          source="business.id"
          reference="Business"
          label="Business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <ReferenceInput source="cart.id" reference="Cart" label="Cart">
          <SelectInput optionText={CartTitle} />
        </ReferenceInput>
        <TextInput label="Comment" source="comment" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Delivery Datetime" source="deliveryDatetime" />
        <NumberInput step={1} label="Delivery Type" source="deliveryType" />
        <TextInput label="Delivery Zone ID" source="deliveryZoneId" />
        <TextInput label="Paymethod ID" source="paymethodId" />
        <ReferenceArrayInput
          source="products"
          reference="ProductCart"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCartTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="review"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
