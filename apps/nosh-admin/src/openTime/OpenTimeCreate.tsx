import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeLapseTitle } from "../timeLapse/TimeLapseTitle";

export const OpenTimeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Hour" source="hour" />
        <NumberInput step={1} label="Minute" source="minute" />
        <ReferenceInput
          source="timeLapse.id"
          reference="TimeLapse"
          label="TimeLapse"
        >
          <SelectInput optionText={TimeLapseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
