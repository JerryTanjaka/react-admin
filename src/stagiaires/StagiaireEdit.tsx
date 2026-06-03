
import { useEffect } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  useGetOne,
  required,
  email,
  useRecordContext,
} from "react-admin";
import { useWatch, useFormContext } from "react-hook-form";
import { Typography, Divider } from "@mui/material";

const StagiaireTitle = () => {
  const record = useRecordContext();
  if (!record) return <span>Modifier un stagiaire</span>;
  return <span>Modifier : {record.firstname} {record.lastname}</span>;
};

const StagiaireForm = () => {
  const { setValue } = useFormContext();
  const paid = useWatch({ name: "paid" });
  const mentorId = useWatch({ name: "mentorId" });

  const { data: mentor } = useGetOne(
    "employees",
    { id: mentorId },
    { enabled: !!mentorId }
  );

  useEffect(() => {
    if (mentor?.department) {
      setValue("department", mentor.department);
    }
  }, [mentor, setValue]);

  return (
    <>
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
        Encadrement et stage
      </Typography>
      <ReferenceInput source="mentorId" reference="employees" label="Encadreur">
        <SelectInput
          optionText={(record) => `${record.firstname} ${record.lastname}`}
          validate={[required("L'encadreur est obligatoire")]}
        />
      </ReferenceInput>
      <SelectInput
        source="department"
        label="Département"
        choices={[
          { id: "Informatique", name: "Informatique" },
          { id: "Marketing", name: "Marketing" },
          { id: "RH", name: "RH" },
          { id: "Finance", name: "Finance" },
        ]}
        disabled
        fullWidth
      />
      <Divider sx={{ my: 1 }} />
      <Typography variant="h6" color="primary" sx={{ mb: 1, mt: 1 }}>
        Rémunération
      </Typography>
      <BooleanInput source="paid" label="Stage payé" />
      {paid && (
        <NumberInput source="salary" label="Salaire (€)" fullWidth />
      )}
    </>
  );
};

export const StagiaireEdit = () => (
  <Edit title={<StagiaireTitle />}>
    <SimpleForm sx={{ "& .RaSimpleForm-form": { gap: 2 } }}>
      <StagiaireForm />
    </SimpleForm>
  </Edit>
);
