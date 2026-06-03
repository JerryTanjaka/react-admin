
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  required,
  email,
  useRecordContext,
  useWatch,
} from "react-admin";

const StagiaireTitle = () => {
  const record = useRecordContext();
  if (!record) return <span>Modifier un stagiaire</span>;
  return <span>Modifier : {record.firstname} {record.lastname}</span>;
};

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
