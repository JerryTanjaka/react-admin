
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  FunctionField,
  ReferenceField,
  ReferenceInput,
  SearchInput,
  SelectInput,
  TopToolbar,
  CreateButton,
  EditButton,
  DeleteButton,
} from "react-admin";
import { Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const stagiaireFilters = [
  <SearchInput source="q" alwaysOn variant="outlined" />,
  <ReferenceInput source="department" reference="departments" label="Département" alwaysOn>
    <SelectInput optionText="name" variant="outlined" />
  </ReferenceInput>,
  <SelectInput
    source="paid"
    label="Rémunéré"
    choices={[
      { id: "true", name: "Payé" },
      { id: "false", name: "Non payé" },
    ]}
    alwaysOn
    variant="outlined"
  />,
];

const StagiaireQuickActions = () => (
  <TopToolbar>
    <CreateButton label="Ajouter un stagiaire" />
    <Button
      component={Link}
      to="/employees"
      variant="outlined"
      size="small"
      startIcon={<SchoolIcon />}
    >
      Voir employés
    </Button>
    <Button
      component={Link}
      to="/employees/create"
      variant="outlined"
      size="small"
      startIcon={<PersonAddIcon />}
    >
      Ajouter un employé
    </Button>
  </TopToolbar>
);

export const StagiaireList = () => (
  <List actions={<StagiaireQuickActions />} filters={stagiaireFilters}>
    <Datagrid rowClick="show">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <ReferenceField source="mentorId" reference="employees" label="Encadreur">
        <FunctionField render={(record) => `${record.firstname} ${record.lastname}`} />
      </ReferenceField>
      <FunctionField
        label="Payé"
        render={(record: { paid: boolean }) =>
          record.paid ? (
            <Chip label="Payé" size="small" color="success" variant="outlined" />
          ) : (
            <Chip label="Non payé" size="small" color="warning" variant="outlined" />
          )
        }
      />
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
