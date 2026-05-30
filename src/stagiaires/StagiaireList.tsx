
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  BooleanField,
  ReferenceField,
  SearchInput,
  EditButton,
  DeleteButton,
} from "react-admin";

const stagiaireFilters = [
  <SearchInput source="q" alwaysOn />,
];

export const StagiaireList = () => (
  <List
    filters={stagiaireFilters}
    perPage={5}
    sort={{ field: "id", order: "ASC" }}
    title="Liste des Stagiaires"
  >
    <Datagrid rowClick="show">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="Email" />
      <ReferenceField source="mentorId" reference="employees" label="Encadreur">
        <TextField source="firstname" />
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
