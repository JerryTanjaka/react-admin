
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Dashboard } from "./dashboard/Dashboard";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeCreate } from "./employees/EmployeeCreate";
import { EmployeeEdit } from "./employees/EmployeeEdit";
import { EmployeeShow } from "./employees/EmployeeShow";
import { StagiaireList } from "./stagiaires/StagiaireList";
import { StagiaireCreate } from "./stagiaires/StagiaireCreate";
import { StagiaireEdit } from "./stagiaires/StagiaireEdit";
import { StagiaireShow } from "./stagiaires/StagiaireShow";
import { lightTheme, darkTheme } from "./theme/theme";
const dataProvider = jsonServerProvider("http://localhost:3002");

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      dashboard={Dashboard}
      theme={lightTheme}
      darkTheme={darkTheme}
      title="Gestion des Employés"
    >
      <Resource
        name="employees"
        options={{ label: "Employés" }}
        list={EmployeeList}
        create={EmployeeCreate}
        edit={EmployeeEdit}
        show={EmployeeShow}
      />
      <Resource
        name="interns"
        options={{ label: "Stagiaires" }}
        list={StagiaireList}
        create={StagiaireCreate}
        edit={StagiaireEdit}
        show={StagiaireShow}
      />
    </Admin>
  );
}

export default App;
