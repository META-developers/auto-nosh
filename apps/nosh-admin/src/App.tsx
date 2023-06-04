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
import { CartList } from "./cart/CartList";
import { CartCreate } from "./cart/CartCreate";
import { CartEdit } from "./cart/CartEdit";
import { CartShow } from "./cart/CartShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ProductCartList } from "./productCart/ProductCartList";
import { ProductCartCreate } from "./productCart/ProductCartCreate";
import { ProductCartEdit } from "./productCart/ProductCartEdit";
import { ProductCartShow } from "./productCart/ProductCartShow";
import { OptionList } from "./option/OptionList";
import { OptionCreate } from "./option/OptionCreate";
import { OptionEdit } from "./option/OptionEdit";
import { OptionShow } from "./option/OptionShow";
import { SuboptionList } from "./suboption/SuboptionList";
import { SuboptionCreate } from "./suboption/SuboptionCreate";
import { SuboptionEdit } from "./suboption/SuboptionEdit";
import { SuboptionShow } from "./suboption/SuboptionShow";
import { ProductCartSuboptionList } from "./productCartSuboption/ProductCartSuboptionList";
import { ProductCartSuboptionCreate } from "./productCartSuboption/ProductCartSuboptionCreate";
import { ProductCartSuboptionEdit } from "./productCartSuboption/ProductCartSuboptionEdit";
import { ProductCartSuboptionShow } from "./productCartSuboption/ProductCartSuboptionShow";
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
          name="Cart"
          list={CartList}
          edit={CartEdit}
          create={CartCreate}
          show={CartShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="ProductCart"
          list={ProductCartList}
          edit={ProductCartEdit}
          create={ProductCartCreate}
          show={ProductCartShow}
        />
        <Resource
          name="Option"
          list={OptionList}
          edit={OptionEdit}
          create={OptionCreate}
          show={OptionShow}
        />
        <Resource
          name="Suboption"
          list={SuboptionList}
          edit={SuboptionEdit}
          create={SuboptionCreate}
          show={SuboptionShow}
        />
        <Resource
          name="ProductCartSuboption"
          list={ProductCartSuboptionList}
          edit={ProductCartSuboptionEdit}
          create={ProductCartSuboptionCreate}
          show={ProductCartSuboptionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
