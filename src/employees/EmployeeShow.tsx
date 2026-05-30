

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  EmailField,
  NumberField,
  BooleanField,
  TopToolbar,
  ListButton,
  EditButton,
} from "react-admin";

const EmployeeShowActions = () => (
  <TopToolbar>
    <ListButton label="Retour à la liste" />
    <EditButton label="Modifier" />
  </TopToolbar>
);

export const EmployeeShow = () => (
  <Show
    title="Fiche employé"
    actions={<EmployeeShowActions />}
  >

    <TabbedShowLayout>
      <Tab label="Informations personnelles">
        <TextField source="id" label="ID" />
        <TextField source="firstname" label="Prénom" />
        <TextField source="lastname" label="Nom" />
        <EmailField source="email" label="Email" />
      </Tab>
      <Tab label="Employé">
        <TextField source="department" label="Département" />
        <NumberField
          source="salary"
          label="Salaire"
          options={{ style: "currency", currency: "EUR" }}
        />
        <BooleanField source="active" label="Actif" />
      </Tab>
    </TabbedShowLayout>
  </Show>
);
