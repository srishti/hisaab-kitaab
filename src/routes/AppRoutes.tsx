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
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const AccountsList = React.lazy(
  () => import("../pages/AccountsList/AccountsList")
);
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

const AppRoutes: React.FC = () => {
  const auth = useAuth();

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={RoutePath.Home} exact>
          <Redirect
            to={auth.isAuthenticated ? RoutePath.Dashboard : RoutePath.Login}
          />
        </Route>

        <Route path={RoutePath.Signup} exact>
          <Signup />
        </Route>

        <Route path={RoutePath.Login} exact>
          <Login />
        </Route>

        <PrivateRoute path={RoutePath.Dashboard} exact>
          <Dashboard />
        </PrivateRoute>

        <PrivateRoute path={RoutePath.AccountsList} exact>
          <AccountsList />
        </PrivateRoute>

        <Route path={RoutePath.NotFound}>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
