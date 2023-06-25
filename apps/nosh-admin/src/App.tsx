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
import { TimeLapseIntervalList } from "./timeLapseInterval/TimeLapseIntervalList";
import { TimeLapseIntervalCreate } from "./timeLapseInterval/TimeLapseIntervalCreate";
import { TimeLapseIntervalEdit } from "./timeLapseInterval/TimeLapseIntervalEdit";
import { TimeLapseIntervalShow } from "./timeLapseInterval/TimeLapseIntervalShow";
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
          name="TimeLapseInterval"
          list={TimeLapseIntervalList}
          edit={TimeLapseIntervalEdit}
          create={TimeLapseIntervalCreate}
          show={TimeLapseIntervalShow}
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
