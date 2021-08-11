import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import Layout from "./components/layout/Layout";
import Loader from "./components/UI/Loader/Loader";

const Signup = React.lazy(() => import("./pages/Authentication/Signup/Signup"));
const Login = React.lazy(() => import("./pages/Authentication/Login/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

enum RoutePath {
  Home = "/",
  Signup = "/signup",
  Login = "/login",
  Dashboard = "/dashboard",
}

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <Router>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path={RoutePath.Home} exact>
                <Redirect to={RoutePath.Login} />
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
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </Layout>
    </AuthContextProvider>
  );
};

export default App;
