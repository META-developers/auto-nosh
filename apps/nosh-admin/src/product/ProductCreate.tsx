import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { OptionTitle } from "../option/OptionTitle";
import { ProductCartTitle } from "../productCart/ProductCartTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="option"
          reference="Option"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productCart"
          reference="ProductCart"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCartTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
