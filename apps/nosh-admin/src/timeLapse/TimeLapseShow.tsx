import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { CLOSETIME_TITLE_FIELD } from "../closeTime/CloseTimeTitle";
import { OPENTIME_TITLE_FIELD } from "../openTime/OpenTimeTitle";

export const TimeLapseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Close"
          source="closetime.id"
          reference="CloseTime"
        >
          <TextField source={CLOSETIME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Open" source="opentime.id" reference="OpenTime">
          <TextField source={OPENTIME_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
