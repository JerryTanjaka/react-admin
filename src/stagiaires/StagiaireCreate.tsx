
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
} from "react-admin";

export const StagiaireCreate = () => (
  <Create title="Créer un stagiaire" redirect="list">
    <SimpleForm>
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
      <BooleanInput source="paid" label="Stage payé" defaultValue={false} />
      <NumberInput
        source="salary"
        label="Salaire (€)"
        defaultValue={0}
        fullWidth
      />
    </SimpleForm>
  </Create>
);
