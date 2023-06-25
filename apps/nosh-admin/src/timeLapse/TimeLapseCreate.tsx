import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeLapseIntervalTitle } from "../timeLapseInterval/TimeLapseIntervalTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";

export const TimeLapseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="close.id"
          reference="TimeLapseInterval"
          label="Close"
        >
          <SelectInput optionText={TimeLapseIntervalTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="open.id"
          reference="TimeLapseInterval"
          label="Open"
        >
          <SelectInput optionText={TimeLapseIntervalTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="schedule.id"
          reference="Schedule"
          label="Schedule"
        >
          <SelectInput optionText={ScheduleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
