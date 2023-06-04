import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { OptionTitle } from "../option/OptionTitle";
import { ProductCartTitle } from "../productCart/ProductCartTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
          source="productCarts"
          reference="ProductCart"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCartTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
