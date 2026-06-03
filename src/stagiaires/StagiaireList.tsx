
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  BooleanField,
  ReferenceField,
  FunctionField,
  ReferenceInput,
  SearchInput,
  SelectInput,
  EditButton,
  DeleteButton,
} from "react-admin";

const stagiaireFilters = [
  <SearchInput source="q" alwaysOn />,
  <ReferenceInput source="department" reference="departments" label="Département">
    <SelectInput optionText="name" />
  </ReferenceInput>,
  <SelectInput
    source="paid"
    label="Rémunéré"
    choices={[
      { id: "true", name: "Payé" },
      { id: "false", name: "Non payé" },
    ]}
  />,
];

export const StagiaireList = () => (
  <List filters={stagiaireFilters}>
    <Datagrid rowClick="show">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <ReferenceField source="mentorId" reference="employees" label="Encadreur">
        <FunctionField render={(record) => `${record.firstname} ${record.lastname}`} />
      </ReferenceField>
      <BooleanField source="paid" label="Payé" />
      <NumberField
        source="salary"
        label="Salaire"
        options={{ style: "currency", currency: "EUR" }}
      />
      <EditButton label="Modifier" />
      <DeleteButton label="Supprimer" />
    </Datagrid>
  </List>
);
