import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TIMELAPSEINTERVAL_TITLE_FIELD } from "../timeLapseInterval/TimeLapseIntervalTitle";
import { SCHEDULE_TITLE_FIELD } from "./ScheduleTitle";

export const ScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TimeLapse"
          target="ScheduleId"
          label="TimeLapses"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Close"
              source="timelapseinterval.id"
              reference="TimeLapseInterval"
            >
              <TextField source={TIMELAPSEINTERVAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Open"
              source="timelapseinterval.id"
              reference="TimeLapseInterval"
            >
              <TextField source={TIMELAPSEINTERVAL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Schedule"
              source="schedule.id"
              reference="Schedule"
            >
              <TextField source={SCHEDULE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
