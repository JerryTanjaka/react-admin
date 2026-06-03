
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  required,
  minValue,
  email,
  useRecordContext,
} from "react-admin";
import { Typography, Divider } from "@mui/material";

const departmentChoices = [
  { id: "Informatique", name: "Informatique" },
  { id: "Marketing", name: "Marketing" },
  { id: "RH", name: "RH" },
  { id: "Finance", name: "Finance" },
];

const EmployeeTitle = () => {
  const record = useRecordContext();
  if (!record) return <span>Modifier un employé</span>;
  return <span>Modifier : {record.firstname} {record.lastname}</span>;
};

export const EmployeeEdit = () => (
  <Edit title={<EmployeeTitle />}>
    <SimpleForm sx={{ "& .RaSimpleForm-form": { gap: 2 } }}>
      <Typography variant="h6" color="primary" sx={{ mb: 1, mt: 1 }}>
        Informations personnelles
      </Typography>
      <div style={{ display: "flex", gap: 16 }}>
        <TextInput
          source="firstname"
          label="Prénom"
          validate={[required("Le prénom est obligatoire")]}
          sx={{ flex: 1 }}
        />
        <TextInput
          source="lastname"
          label="Nom"
          validate={[required("Le nom est obligatoire")]}
          sx={{ flex: 1 }}
        />
      </div>
      <TextInput
        source="email"
        label="Email"
        validate={[
          required("L'email est obligatoire"),
          email("Format d'email invalide"),
        ]}
        fullWidth
      />
      <Divider sx={{ my: 1 }} />
      <Typography variant="h6" color="primary" sx={{ mb: 1, mt: 1 }}>
        Poste et salaire
      </Typography>
      <SelectInput
        source="department"
        label="Département"
        choices={departmentChoices}
        validate={[required("Le département est obligatoire")]}
        fullWidth
      />
      <NumberInput
        source="salary"
        label="Salaire (€)"
        validate={[
          required("Le salaire est obligatoire"),
          minValue(1500, "Le salaire minimum est 1 500 €"),
        ]}
        min={1500}
        fullWidth
      />
      <Divider sx={{ my: 1 }} />
      <BooleanInput source="active" label="Employé actif" />
    </SimpleForm>
  </Edit>
);
