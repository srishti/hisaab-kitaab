import React, { useState } from "react";
import { User } from "../models/user";
import { AuthAPI } from "../api/auth/authApi";
import * as localStorageHelpers from "../utils/LStoroge/localStorageHelpers";

export interface CurrentUser extends Partial<User> {
  displayName?: string;
  email: string;
  emailVerified?: boolean;
  isNewUser?: boolean;
  phoneNumber?: string;
  photoUrl?: string;
  providerId?: string;
  refreshToken?: string;
  uid: string;
}

interface AuthContextData {
  currentUser?: CurrentUser;
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

  const checkIfLoggedIn = (): boolean => {
    return localStorageHelpers.getItemFromLocalStorage("isLoggedIn") || false;
  };

  const signup = (user: User) => {
    const successCallback = (userCredentials: any) => {
      // TODO: Show success message
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
      // TODO: Show success message
      setIsLoggedIn(true);
      setCurrentUser(currentUser);

      localStorageHelpers.setItemInLocalStorage("isLoggedIn", true);
      localStorageHelpers.setItemInLocalStorage("currentUser", currentUser);
    };
    authAPI.login(email, password, successCallback);
  };

  const logout = () => {
    // TODO: Implement this!
  };

  const authContextData: AuthContextData = {
    currentUser: currentUser,
    isLoggedIn: isLoggedIn || checkIfLoggedIn(),
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
