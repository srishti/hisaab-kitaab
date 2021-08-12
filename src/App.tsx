import React from "react";
import { AuthContextProvider } from "./store/auth-context";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
