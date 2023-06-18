import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeLapseTitle } from "../timeLapse/TimeLapseTitle";

export const CloseTimeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
