
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  required,
  email,
  useWatch,
} from "react-admin";

const StagiaireForm = () => {
  const paid = useWatch({ name: "paid" });

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
      <SelectInput
        source="department"
        label="Département"
        choices={[
          { id: "Informatique", name: "Informatique" },
          { id: "Marketing", name: "Marketing" },
          { id: "RH", name: "RH" },
          { id: "Finance", name: "Finance" },
        ]}
        validate={[required("Le département est obligatoire")]}
        fullWidth
      />
      <ReferenceInput source="mentorId" reference="employees" label="Encadreur">
        <SelectInput
          optionText={(record) => `${record.firstname} ${record.lastname}`}
          validate={[required("L'encadreur est obligatoire")]}
        />
      </ReferenceInput>
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
