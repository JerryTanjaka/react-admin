

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  EmailField,
  NumberField,
  FunctionField,
  TopToolbar,
  ListButton,
  EditButton,
} from "react-admin";
import { Chip } from "@mui/material";

const EmployeeShowActions = () => (
  <TopToolbar>
    <ListButton label="Retour à la liste" />
    <EditButton label="Modifier" />
  </TopToolbar>
);

export const EmployeeShow = () => (
  <Show title="Fiche employé" actions={<EmployeeShowActions />}>
    <TabbedShowLayout>
      <Tab label="Informations personnelles">
        <TextField source="firstname" label="Prénom" />
        <TextField source="lastname" label="Nom" />
        <EmailField source="email" label="Email" />
        <TextField source="department" label="Département" />
      </Tab>
      <Tab label="Employé">
        <NumberField
          source="salary"
          label="Salaire"
          options={{ style: "currency", currency: "EUR" }}
          sx={{ fontSize: "1.2rem", fontWeight: 600, color: "primary.main" }}
        />
        <FunctionField
          label="Statut"
          render={(record: { active: boolean }) =>
            record.active ? (
              <Chip label="Actif" color="success" size="small" />
            ) : (
              <Chip label="Inactif" color="default" size="small" />
            )
          }
        />
      </Tab>
    </TabbedShowLayout>
  </Show>
);
