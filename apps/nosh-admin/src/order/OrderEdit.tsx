import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
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
import { AddressTitle } from "../address/AddressTitle";
import { OfferTitle } from "../offer/OfferTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
          reference="Address"
          label="Customer"
        >
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <DateTimeInput label="Delivery Datetime" source="deliveryDatetime" />
        <NumberInput step={1} label="Delivery Type" source="deliveryType" />
        <TextInput label="Delivery Zone ID" source="deliveryZoneId" />
        <ReferenceArrayInput
          source="offers"
          reference="Offer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OfferTitle} />
        </ReferenceArrayInput>
        <TextInput label="Paymethod ID" source="paymethodId" />
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
    </Edit>
  );
};
