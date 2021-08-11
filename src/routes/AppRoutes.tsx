import React, { Suspense, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import { RoutePath } from "./routes";
import AuthContext from "../store/auth-context";

const Signup = React.lazy(
  () => import("../pages/Authentication/Signup/Signup")
);
const Login = React.lazy(() => import("../pages/Authentication/Login/Login"));
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
// const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

const AppRoutes: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={RoutePath.Home} exact>
            <Redirect
              to={
                authContext.isLoggedIn ? RoutePath.Dashboard : RoutePath.Login
              }
            />
          </Route>
          <Route path={RoutePath.Signup} exact>
            <Signup />
          </Route>
          <Route path={RoutePath.Login} exact>
            <Login />
          </Route>
          <Route path={RoutePath.Dashboard}>
            <Dashboard />
          </Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
