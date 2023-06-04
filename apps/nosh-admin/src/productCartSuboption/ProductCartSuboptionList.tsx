import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PRODUCTCARTOPTION_TITLE_FIELD } from "../productCartOption/ProductCartOptionTitle";
import { SUBOPTION_TITLE_FIELD } from "../suboption/SuboptionTitle";

export const ProductCartSuboptionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Product Cart Suboptions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Position" source="position" />
        <TextField label="Price" source="price" />
        <ReferenceField
          label="Product Cart Options"
          source="productcartoption.id"
          reference="ProductCartOption"
        >
          <TextField source={PRODUCTCARTOPTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <BooleanField label="Selected" source="selected" />
        <ReferenceField
          label="Suboption"
          source="suboption.id"
          reference="Suboption"
        >
          <TextField source={SUBOPTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
