import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/UI/Loader/Loader";
import { RoutePath } from "./routes";
import { useAuth } from "../hooks/auth/use-auth";

const Signup = React.lazy(
  () => import("../pages/Authentication/Signup/Signup")
);
const Login = React.lazy(() => import("../pages/Authentication/Login/Login"));
const Banking = React.lazy(() => import("../pages/Banking/Banking"));
const OpenBankAccount = React.lazy(
  () => import("../pages/Banking/OpenBankAccount/OpenBankAccount")
);
const AccountsList = React.lazy(
  () => import("../pages/AccountsList/AccountsList")
);
const AddAccount = React.lazy(
  () => import("../pages/AccountsList/AddAccount/AddAccount")
);
const TransactionsList = React.lazy(
  () => import("../pages/TransactionsList/TransactionsList")
);
const AddTransaction = React.lazy(
  () => import("../pages/TransactionsList/AddTransaction/AddTransaction")
);
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

const AppRoutes: React.FC = () => {
  const auth = useAuth();

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={RoutePath.Home} exact>
          <Redirect
            to={auth.isAuthenticated ? RoutePath.Banking : RoutePath.Login}
          />
        </Route>

        <Route path={RoutePath.Signup} exact>
          <Signup />
        </Route>

        <Route path={RoutePath.Login} exact>
          <Login />
        </Route>

        <PrivateRoute path={RoutePath.Banking} exact>
          <Banking />
        </PrivateRoute>

        <PrivateRoute path={RoutePath.OpenBankAccount} exact>
          <OpenBankAccount />
        </PrivateRoute>

        <PrivateRoute path={RoutePath.AccountsList} exact>
          <AccountsList />
        </PrivateRoute>

        <PrivateRoute path={RoutePath.AddAccount} exact>
          <AddAccount />
        </PrivateRoute>

        <PrivateRoute path={RoutePath.TransactionsList} exact>
          <TransactionsList />
        </PrivateRoute>

        <PrivateRoute path={RoutePath.AddTransaction} exact>
          <AddTransaction />
        </PrivateRoute>

        <Route path={RoutePath.NotFound}>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
