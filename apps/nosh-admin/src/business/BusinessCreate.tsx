import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectInput } from "react-admin";

export const BusinessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="menuProvider"
          label="MenuProvider"
          choices={[
            { label: "nosh", value: "Nosh" },
            { label: "chowly", value: "Chowly" },
            { label: "toast", value: "Toast" },
            { label: "deliverect", value: "Deliverect" },
            { label: "square", value: "Square" },
            { label: "checkmate", value: "Checkmate" },
            { label: "otter", value: "Otter" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
