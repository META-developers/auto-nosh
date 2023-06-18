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

export const CloseTimeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Hour" source="hour" />
        <NumberInput step={1} label="Minute" source="minute" />
        <ReferenceInput
          source="timeLapses.id"
          reference="TimeLapse"
          label="TimeLapses"
        >
          <SelectInput optionText={TimeLapseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
