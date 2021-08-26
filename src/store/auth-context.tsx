import React from "react";
import { User } from "../models/user";
import { AuthContextData } from "../hooks/auth/auth";
import { useAuthProvider } from "../hooks/auth/use-authProvider";

const initialAuthContextData: AuthContextData = {
  currentUser: null,
  isAuthenticated: false,
  onSignup: (user: User) => {},
  onLogin: (email: string, password: string) => {},
  onLogout: () => {},
};

const AuthContext = React.createContext<AuthContextData>(
  initialAuthContextData
);

export const AuthContextProvider: React.FC = (props) => {
  const authData = useAuthProvider();

  return (
    <AuthContext.Provider value={authData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
