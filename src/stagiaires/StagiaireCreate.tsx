
import { useEffect } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  useGetOne,
  required,
  email,
} from "react-admin";
import { useWatch, useFormContext } from "react-hook-form";

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
      <BooleanInput source="paid" label="Stage payé" defaultValue={false} />
      {paid && (
        <NumberInput
          source="salary"
          label="Salaire (€)"
          defaultValue={0}
          fullWidth
        />
      )}
    </>
  );
};

export const StagiaireCreate = () => (
  <Create title="Créer un stagiaire" redirect="list">
    <SimpleForm>
      <StagiaireForm />
    </SimpleForm>
  </Create>
);
