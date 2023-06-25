import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TIMELAPSEINTERVAL_TITLE_FIELD } from "../timeLapseInterval/TimeLapseIntervalTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";

export const TimeLapseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TimeLapses"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
