import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { TIMELAPSE_TITLE_FIELD } from "../timeLapse/TimeLapseTitle";

export const TimeLapseIntervalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Hour" source="hour" />
        <TextField label="ID" source="id" />
        <TextField label="Minute" source="minute" />
        <ReferenceField
          label="TimeLapsesClose"
          source="timelapse.id"
          reference="TimeLapse"
        >
          <TextField source={TIMELAPSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="TimeLapsesOpen"
          source="timelapse.id"
          reference="TimeLapse"
        >
          <TextField source={TIMELAPSE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
