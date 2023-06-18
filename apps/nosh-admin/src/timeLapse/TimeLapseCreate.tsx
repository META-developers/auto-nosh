import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CloseTimeTitle } from "../closeTime/CloseTimeTitle";
import { OpenTimeTitle } from "../openTime/OpenTimeTitle";

export const TimeLapseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="close.id" reference="CloseTime" label="Close">
          <SelectInput optionText={CloseTimeTitle} />
        </ReferenceInput>
        <ReferenceInput source="open.id" reference="OpenTime" label="Open">
          <SelectInput optionText={OpenTimeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
