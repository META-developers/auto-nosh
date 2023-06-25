import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { TIMELAPSEINTERVAL_TITLE_FIELD } from "../timeLapseInterval/TimeLapseIntervalTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";

export const TimeLapseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
