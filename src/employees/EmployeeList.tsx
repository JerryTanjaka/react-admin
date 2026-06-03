
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  BooleanField,
  SearchInput,
  SelectInput,
  TopToolbar,
  CreateButton,
  EditButton,
  DeleteButton,
} from "react-admin";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const employeeFilters = [

  <SearchInput source="q" alwaysOn />,

  <SelectInput
    source="department"
    label="Département"
    choices={[
      { id: "Informatique", name: "Informatique" },
      { id: "Marketing", name: "Marketing" },
      { id: "RH", name: "RH" },
      { id: "Finance", name: "Finance" },
    ]}
  />,
];

const EmployeeQuickActions = () => (
  <TopToolbar>
    <CreateButton label="Ajouter un employé" />
    <Button component={Link} to="/interns" variant="contained" size="small">
      Voir stagiaires
    </Button>
    <Button component={Link} to="/interns/create" variant="contained" size="small">
      Ajouter un stagiaire
    </Button>
  </TopToolbar>
);

export const EmployeeList = () => (
  <List
    actions={<EmployeeQuickActions />}
    filters={employeeFilters}
    perPage={5}
    sort={{ field: "id", order: "ASC" }}
    title="Liste des Employés"
  >

    <Datagrid rowClick="show">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <NumberField
        source="salary"
        label="Salaire"
        options={{ style: "currency", currency: "EUR" }}
      />
      <BooleanField source="active" label="Actif" />

      <EditButton label="Modifier" />
      <DeleteButton label="Supprimer" />
    </Datagrid>
  </List>
);
