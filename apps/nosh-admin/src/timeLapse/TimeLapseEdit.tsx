import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CloseTimeTitle } from "../closeTime/CloseTimeTitle";
import { OpenTimeTitle } from "../openTime/OpenTimeTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";

export const TimeLapseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="close.id" reference="CloseTime" label="Close">
          <SelectInput optionText={CloseTimeTitle} />
        </ReferenceInput>
        <ReferenceInput source="open.id" reference="OpenTime" label="Open">
          <SelectInput optionText={OpenTimeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="schedule.id"
          reference="Schedule"
          label="Schedule"
        >
          <SelectInput optionText={ScheduleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
