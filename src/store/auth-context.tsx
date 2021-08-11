import React, { useState } from "react";
import { User } from "../models/user";
import { AuthAPI } from "../api/auth/authApi";

export interface CurrentUser extends Partial<User> {
  displayName?: string | undefined;
  email: string;
  emailVerified?: boolean | undefined;
  isNewUser?: boolean | undefined;
  phoneNumber?: string | undefined;
  photoUrl?: string | undefined;
  providerId?: string | undefined;
  refreshToken?: string | undefined;
  uid: string;
}

interface AuthContextData {
  currentUser?: CurrentUser | undefined;
  isLoggedIn: boolean;
  onSignup: (user: User) => void;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
}

const initialAuthContextData: AuthContextData = {
  isLoggedIn: false,
  onSignup: (user: User) => {},
  onLogin: (email: string, password: string) => {},
  onLogout: () => {},
};

const AuthContext = React.createContext<AuthContextData>(
  initialAuthContextData
);

export const AuthContextProvider: React.FC = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser>();

  const authAPI = new AuthAPI();

  const signup = (user: User) => {
    const successCallback = (userCredentials: any) => {
      // TODO: Redirect to login page
    };
    authAPI.signup(user, successCallback);
  };

  const login = (email: string, password: string) => {
    const successCallback = (userCredentials: any) => {
      const currentUser: CurrentUser = {
        displayName: userCredentials.user.displayName,
        email: userCredentials.user.email,
        emailVerified: userCredentials.user.emailVerified,
        isNewUser: userCredentials.additionalUserInfo.isNewUser,
        phoneNumber: userCredentials.user.phoneNumber,
        photoUrl: userCredentials.user.photoUrl,
        providerId: userCredentials.additionalUserInfo.providerId,
        refreshToken: userCredentials.user.refreshToken,
        uid: userCredentials.user.uid,
      };
      setIsLoggedIn(true);
      setCurrentUser(currentUser);
    };
    authAPI.login(email, password, successCallback);
  };

  const logout = () => {
    // TODO: Implement this!
  };

  const authContextData: AuthContextData = {
    currentUser: currentUser,
    isLoggedIn: isLoggedIn,
    onSignup: signup,
    onLogin: login,
    onLogout: logout,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
