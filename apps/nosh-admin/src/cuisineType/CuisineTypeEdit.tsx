import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";

export const CuisineTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="business"
          reference="Business"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BusinessTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="image" source="image" />
        <SelectInput
          source="name"
          label="name"
          choices={[
            { label: "Mexican", value: "Mexican" },
            { label: "American", value: "American" },
            { label: "Italian", value: "Italian" },
            { label: "Chinese", value: "Chinese" },
            { label: "Japanese", value: "Japanese" },
            { label: "Indian", value: "Indian" },
            { label: "Thai", value: "Thai" },
            { label: "Coffee", value: "Coffee" },
            { label: "Fast Food", value: "FastFood" },
            { label: "Brazilian", value: "Brazilian" },
            { label: "Salad", value: "Salad" },
            { label: "Sushi", value: "Sushi" },
            { label: "Pizza", value: "Pizza" },
            { label: "Burgers", value: "Burgers" },
            { label: "Greek", value: "Greek" },
            { label: "Sandwiches", value: "Sandwiches" },
            { label: "Korean", value: "Korean" },
            { label: "Desserts", value: "Desserts" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
