import { useState } from "react";
import { AuthContextData } from "./auth";
import { CurrentUser, User } from "../../models/user";
import { AuthAPI } from "../../api/auth/authApi";
import * as localStorageHelpers from "../../utils/LStoroge/localStorageHelpers";

export const useAuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser>();

  const authAPI = new AuthAPI();

  const checkIfLoggedIn = (): boolean => {
    return localStorageHelpers.getItemFromLocalStorage("isLoggedIn") || false;
  };

  const signup = (user: User) => {
    const successCallback = (userCredentials: any) => {
      // TODO: Show success message and change any type of userCredentials
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

  return authContextData;
};
