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
import { BusinessList } from "./business/BusinessList";
import { BusinessCreate } from "./business/BusinessCreate";
import { BusinessEdit } from "./business/BusinessEdit";
import { BusinessShow } from "./business/BusinessShow";
import { CuisineTypeList } from "./cuisineType/CuisineTypeList";
import { CuisineTypeCreate } from "./cuisineType/CuisineTypeCreate";
import { CuisineTypeEdit } from "./cuisineType/CuisineTypeEdit";
import { CuisineTypeShow } from "./cuisineType/CuisineTypeShow";
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
          name="Business"
          list={BusinessList}
          edit={BusinessEdit}
          create={BusinessCreate}
          show={BusinessShow}
        />
        <Resource
          name="CuisineType"
          list={CuisineTypeList}
          edit={CuisineTypeEdit}
          create={CuisineTypeCreate}
          show={CuisineTypeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
