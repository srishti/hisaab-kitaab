import React from "react";
import { AuthContextProvider } from "./store/auth-context";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </AuthContextProvider>
  );
};

export default App;
