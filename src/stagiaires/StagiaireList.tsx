
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
  TopToolbar,
  CreateButton,
  EditButton,
  DeleteButton,
  useCreate,
  useUpdate,
  useRecordContext,
} from "react-admin";
import { Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const DuplicateButton = () => {
  const record = useRecordContext();
  const [create] = useCreate();
  const navigate = useNavigate();

  const handleClick = () => {
    create("interns", { data: { ...record, id: undefined } }, {
      onSuccess: () => navigate("/interns"),
    });
  };

  return <Button size="small" onClick={handleClick}>Dupliquer</Button>;
};

const TogglePaidButton = () => {
  const record = useRecordContext();
  const [update] = useUpdate();

  const handleClick = () => {
    update("interns", {
      id: record.id,
      data: { paid: !record.paid, salary: record.paid ? 0 : 1200 },
      previousData: record,
    });
  };

  return (
    <Button size="small" onClick={handleClick}>
      {record.paid ? "Passer non payé" : "Passer payé"}
    </Button>
  );
};

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

const StagiaireQuickActions = () => (
  <TopToolbar>
    <CreateButton label="Ajouter un stagiaire" />
    <Button component={Link} to="/employees" variant="contained" size="small">
      Voir employés
    </Button>
    <Button component={Link} to="/employees/create" variant="contained" size="small">
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
      <BooleanField source="paid" label="Payé" />
      <NumberField
        source="salary"
        label="Salaire"
        options={{ style: "currency", currency: "EUR" }}
      />
      <EditButton label="Modifier" />
      <DuplicateButton />
      <TogglePaidButton />
      <DeleteButton label="Supprimer" />
    </Datagrid>
  </List>
);
