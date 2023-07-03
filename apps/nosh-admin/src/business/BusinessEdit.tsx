import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectInput } from "react-admin";

export const BusinessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
