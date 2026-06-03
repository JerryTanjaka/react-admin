

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  EmailField,
  NumberField,
  BooleanField,
  ReferenceField,
  TopToolbar,
  ListButton,
  EditButton,
} from "react-admin";

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
        <TextField source="id" label="ID" />
        <TextField source="firstname" label="Prénom" />
        <TextField source="lastname" label="Nom" />
        <EmailField source="email" label="Email" />
      </Tab>
      <Tab label="Stage">
        <BooleanField source="paid" label="Payé" />
        <NumberField
          source="salary"
          label="Salaire"
          options={{ style: "currency", currency: "EUR" }}
        />
        <ReferenceField source="mentorId" reference="employees" label="Encadreur">
          <TextField source="firstname" />
        </ReferenceField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
