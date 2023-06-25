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

export const TimeLapseIntervalCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Hour" source="hour" />
        <NumberInput step={1} label="Minute" source="minute" />
        <ReferenceInput
          source="timeLapseClose.id"
          reference="TimeLapse"
          label="TimeLapsesClose"
        >
          <SelectInput optionText={TimeLapseTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="timeLapsesOpen.id"
          reference="TimeLapse"
          label="TimeLapsesOpen"
        >
          <SelectInput optionText={TimeLapseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
