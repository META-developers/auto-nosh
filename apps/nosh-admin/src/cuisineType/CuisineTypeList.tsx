import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CuisineTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cuisine Types"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <TextField label="name" source="name" />
      </Datagrid>
    </List>
  );
};
