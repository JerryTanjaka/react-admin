
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
      <TextInput
        source="firstname"
        label="Prénom"
        validate={[required("Le prénom est obligatoire")]}
        fullWidth
      />
      <TextInput
        source="lastname"
        label="Nom"
        validate={[required("Le nom est obligatoire")]}
        fullWidth
      />
      <TextInput
        source="email"
        label="Email"
        validate={[
          required("L'email est obligatoire"),
          email("Format d'email invalide"),
        ]}
        fullWidth
      />
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
      <BooleanInput source="paid" label="Stage payé" />
      {paid && (
        <NumberInput
          source="salary"
          label="Salaire (€)"
          fullWidth
        />
      )}
    </>
  );
};

export const StagiaireEdit = () => (
  <Edit title={<StagiaireTitle />}>
    <SimpleForm>
      <StagiaireForm />
    </SimpleForm>
  </Edit>
);
