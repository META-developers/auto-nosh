import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectArrayInput } from "react-admin";

export const BusinessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="MenuProvider"
          source="menuProvider"
          choices={[
            { label: "nosh", value: "Nosh" },
            { label: "chowly", value: "Chowly" },
            { label: "deliverect", value: "Deliverect" },
            { label: "toast", value: "Toast" },
            { label: "checkmate", value: "Checkmate" },
            { label: "otter", value: "Otter" },
            { label: "square", value: "Square" },
            { label: "clover", value: "Clover" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
