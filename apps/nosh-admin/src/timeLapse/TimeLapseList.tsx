import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLOSETIME_TITLE_FIELD } from "../closeTime/CloseTimeTitle";
import { OPENTIME_TITLE_FIELD } from "../openTime/OpenTimeTitle";

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
          source="closetime.id"
          reference="CloseTime"
        >
          <TextField source={CLOSETIME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Open" source="opentime.id" reference="OpenTime">
          <TextField source={OPENTIME_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
