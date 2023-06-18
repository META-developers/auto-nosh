import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OpenTimeList } from "./openTime/OpenTimeList";
import { OpenTimeCreate } from "./openTime/OpenTimeCreate";
import { OpenTimeEdit } from "./openTime/OpenTimeEdit";
import { OpenTimeShow } from "./openTime/OpenTimeShow";
import { CloseTimeList } from "./closeTime/CloseTimeList";
import { CloseTimeCreate } from "./closeTime/CloseTimeCreate";
import { CloseTimeEdit } from "./closeTime/CloseTimeEdit";
import { CloseTimeShow } from "./closeTime/CloseTimeShow";
import { TimeLapseList } from "./timeLapse/TimeLapseList";
import { TimeLapseCreate } from "./timeLapse/TimeLapseCreate";
import { TimeLapseEdit } from "./timeLapse/TimeLapseEdit";
import { TimeLapseShow } from "./timeLapse/TimeLapseShow";
import { ScheduleList } from "./schedule/ScheduleList";
import { ScheduleCreate } from "./schedule/ScheduleCreate";
import { ScheduleEdit } from "./schedule/ScheduleEdit";
import { ScheduleShow } from "./schedule/ScheduleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"nosh"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="OpenTime"
          list={OpenTimeList}
          edit={OpenTimeEdit}
          create={OpenTimeCreate}
          show={OpenTimeShow}
        />
        <Resource
          name="CloseTime"
          list={CloseTimeList}
          edit={CloseTimeEdit}
          create={CloseTimeCreate}
          show={CloseTimeShow}
        />
        <Resource
          name="TimeLapse"
          list={TimeLapseList}
          edit={TimeLapseEdit}
          create={TimeLapseCreate}
          show={TimeLapseShow}
        />
        <Resource
          name="Schedule"
          list={ScheduleList}
          edit={ScheduleEdit}
          create={ScheduleCreate}
          show={ScheduleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
