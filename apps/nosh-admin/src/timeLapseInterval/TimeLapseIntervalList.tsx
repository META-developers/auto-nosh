import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TIMELAPSE_TITLE_FIELD } from "../timeLapse/TimeLapseTitle";

export const TimeLapseIntervalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TimeLapseIntervals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
