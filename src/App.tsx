
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import PeopleIcon from "@mui/icons-material/People";
import { EmployeeList } from "./EmployeeList";
import { EmployeeCreate } from "./EmployeeCreate";
import { EmployeeEdit } from "./EmployeeEdit";
import { EmployeeShow } from "./EmployeeShow";
const dataProvider = jsonServerProvider("http://localhost:3002");

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      title="Gestion des Employés"
    >
      <Resource
        name="employees"
        icon={PeopleIcon}
        options={{ label: "Employés" }}
        list={EmployeeList}
        create={EmployeeCreate}
        edit={EmployeeEdit}
        show={EmployeeShow}
      />
    </Admin>
  );
}

export default App;
