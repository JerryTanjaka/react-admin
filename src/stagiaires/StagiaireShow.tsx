

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  EmailField,
  NumberField,
  ReferenceField,
  FunctionField,
  TopToolbar,
  ListButton,
  EditButton,
} from "react-admin";
import { Chip } from "@mui/material";

const StagiaireShowActions = () => (
  <TopToolbar>
    <ListButton label="Retour à la liste" />
    <EditButton label="Modifier" />
  </TopToolbar>
);

export const StagiaireShow = () => (
  <Show title="Fiche stagiaire" actions={<StagiaireShowActions />}>
    <TabbedShowLayout>
      <Tab label="Informations personnelles">
        <TextField source="firstname" label="Prénom" />
        <TextField source="lastname" label="Nom" />
        <EmailField source="email" label="Email" />
        <TextField source="department" label="Département" />
      </Tab>
      <Tab label="Stage">
        <FunctionField
          label="Rémunération"
          render={(record: { paid: boolean }) =>
            record.paid ? (
              <Chip label="Payé" color="success" size="small" />
            ) : (
              <Chip label="Non payé" color="warning" size="small" />
            )
          }
        />
        <NumberField
          source="salary"
          label="Salaire"
          options={{ style: "currency", currency: "EUR" }}
          sx={{ fontSize: "1.2rem", fontWeight: 600, color: "primary.main" }}
        />
        <ReferenceField source="mentorId" reference="employees" label="Encadreur">
          <FunctionField render={(record) => `${record.firstname} ${record.lastname}`} />
        </ReferenceField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
