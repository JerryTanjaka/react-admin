
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
  useCreate,
  useUpdate,
  useRecordContext,
} from "react-admin";
import { Button, Chip } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PaymentsIcon from "@mui/icons-material/Payments";
import SchoolIcon from "@mui/icons-material/School";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const DuplicateButton = () => {
  const record = useRecordContext();
  const [create] = useCreate();
  const navigate = useNavigate();

  const handleClick = () => {
    create("interns", { data: { ...record, id: undefined } }, {
      onSuccess: () => navigate("/interns"),
    });
  };

  return (
    <Button size="small" startIcon={<ContentCopyIcon />} onClick={handleClick}>
      Dupliquer
    </Button>
  );
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
    <Button size="small" startIcon={<PaymentsIcon />} onClick={handleClick}>
      {record.paid ? "Non payé" : "Payé"}
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
      <DuplicateButton />
      <TogglePaidButton />
      <DeleteButton label="Supprimer" />
    </Datagrid>
  </List>
);
