
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  BooleanField,
  FunctionField,
  SearchInput,
  SelectInput,
  TopToolbar,
  CreateButton,
  EditButton,
  DeleteButton,
} from "react-admin";
import { Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

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
    <Button
      component={Link}
      to="/interns"
      variant="outlined"
      size="small"
      startIcon={<PeopleIcon />}
    >
      Voir stagiaires
    </Button>
    <Button
      component={Link}
      to="/interns/create"
      variant="outlined"
      size="small"
      startIcon={<PersonAddIcon />}
    >
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
    <Datagrid
      rowClick="show"
      sx={{
        "& .RaDatagrid-rowOdd": {
          backgroundColor: "rgba(124, 77, 255, 0.03)",
        },
        "& .RaDatagrid-rowEven": {
          backgroundColor: "transparent",
        },
        "& .RaDatagrid-row:hover": {
          backgroundColor: "rgba(124, 77, 255, 0.06)",
        },
      }}
    >
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <NumberField
        source="salary"
        label="Salaire"
        options={{ style: "currency", currency: "EUR" }}
      />
      <FunctionField
        label="Actif"
        render={(record: { active: boolean }) =>
          record.active ? (
            <Chip label="Actif" size="small" color="success" variant="outlined" />
          ) : (
            <Chip label="Inactif" size="small" color="default" variant="outlined" />
          )
        }
      />
      <EditButton label="Modifier" />
      <DeleteButton label="Supprimer" />
    </Datagrid>
  </List>
);
