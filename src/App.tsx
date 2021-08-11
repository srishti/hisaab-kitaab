import Signup from "./pages/Authentication/Signup/Signup";
import Login from "./pages/Authentication/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AuthContextProvider } from "./store/auth-context";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Login />
    </AuthContextProvider>
  );
};

export default App;
