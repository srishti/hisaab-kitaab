import { useState } from "react";
import { useHistory } from "react-router-dom";
import { RoutePath } from "../../routes/routes";
import { AuthContextData } from "./auth";
import { CurrentUser, User } from "../../models/user";
import { AuthAPI } from "../../api/auth/authApi";
import * as utilsLStoreHelpers from "../../utils/LStoroge/localStorageHelpers";

export const useAuthProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const history = useHistory();

  const authAPI = new AuthAPI();

  const checkIfLoggedIn = (): boolean => {
    return (
      isAuthenticated ||
      utilsLStoreHelpers.getItemFromLocalStorage(
        utilsLStoreHelpers.LStoreKeys.isAuthenticated
      ) ||
      false
    );
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
      setIsAuthenticated(true);
      setCurrentUser(currentUser);

      utilsLStoreHelpers.setItemInLocalStorage(
        utilsLStoreHelpers.LStoreKeys.isAuthenticated,
        true
      );
      utilsLStoreHelpers.setItemInLocalStorage(
        utilsLStoreHelpers.LStoreKeys.currentUser,
        currentUser
      );

      history.push(RoutePath.AccountsList);
    };
    authAPI.login(email, password, successCallback);
  };

  const logout = () => {
    const successCallback = () => {
      // TODO: Show success message

      // order for updating LStore and state is important
      utilsLStoreHelpers.removeItemFromLocalStorage(
        utilsLStoreHelpers.LStoreKeys.isAuthenticated
      );
      utilsLStoreHelpers.removeItemFromLocalStorage(
        utilsLStoreHelpers.LStoreKeys.currentUser
      );

      setIsAuthenticated(false);
      setCurrentUser(null);

      history.push(RoutePath.Login);
    };

    authAPI.logout(successCallback);
  };

  const authContextData: AuthContextData = {
    currentUser: currentUser,
    isAuthenticated: checkIfLoggedIn(),
    onSignup: signup,
    onLogin: login,
    onLogout: logout,
  };

  return authContextData;
};
